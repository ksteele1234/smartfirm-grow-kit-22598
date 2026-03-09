import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const ALLOWED_FORM_TYPES = [
  "contact",
  "email_capture",
  "growth_calculator",
  "get_started",
  "reactivation",
] as const;

type FormType = (typeof ALLOWED_FORM_TYPES)[number];

// ---------------------------------------------------------------------------
// Source mapping: form_type -> contacts.source value
// ---------------------------------------------------------------------------
const SOURCE_MAP: Record<FormType, string> = {
  contact: "contact_form",
  email_capture: "website",
  growth_calculator: "website",
  get_started: "website",
  reactivation: "website",
};

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ success: false, error: "Method not allowed" }),
      {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }

  try {
    // ------------------------------------------------------------------
    // 1. Parse & validate input
    // ------------------------------------------------------------------
    const body = await req.json().catch(() => null);

    const formType = typeof body?.form_type === "string" ? body.form_type : "";
    const data = body?.data ?? {};
    const pageUrl = typeof body?.page_url === "string" ? body.page_url : "";

    if (!ALLOWED_FORM_TYPES.includes(formType as FormType)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: `Invalid form_type. Allowed: ${ALLOWED_FORM_TYPES.join(", ")}`,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Extract common contact fields from data
    const email =
      typeof data.email === "string" ? data.email.trim().toLowerCase() : "";
    const firstName =
      typeof data.first_name === "string" ? data.first_name.trim() : "";
    const lastName =
      typeof data.last_name === "string" ? data.last_name.trim() : "";
    const phone = typeof data.phone === "string" ? data.phone.trim() : "";
    const firmName =
      typeof data.firm_name === "string" ? data.firm_name.trim() : "";

    // Email is required for all form types except possibly others in the future
    if (!email || !isValidEmail(email)) {
      return new Response(
        JSON.stringify({ success: false, error: "A valid email is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // ------------------------------------------------------------------
    // 2. Supabase client (service role - bypasses RLS)
    // ------------------------------------------------------------------
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log(`form-submit [${formType}]: processing`, {
      email_domain: email.split("@")[1],
      page_url: pageUrl,
    });

    // ------------------------------------------------------------------
    // 3. Upsert contact
    // ------------------------------------------------------------------
    const { data: existingContact } = await supabase
      .from("contacts")
      .select("id, tags, first_name, last_name, phone, firm_name")
      .eq("email", email)
      .maybeSingle();

    let contactId: string;
    const tag = `${formType}-submission`;

    if (existingContact) {
      const currentTags: string[] = Array.isArray(existingContact.tags)
        ? existingContact.tags
        : [];
      const mergedTags = currentTags.includes(tag)
        ? currentTags
        : [...currentTags, tag];

      // Only update fields if new values are provided (don't overwrite with empty)
      const updateFields: Record<string, unknown> = {
        tags: mergedTags,
        source_detail: pageUrl || `/${formType}`,
      };
      if (firstName && !existingContact.first_name) updateFields.first_name = firstName;
      if (lastName && !existingContact.last_name) updateFields.last_name = lastName;
      if (phone && !existingContact.phone) updateFields.phone = phone;
      if (firmName && !existingContact.firm_name) updateFields.firm_name = firmName;

      const { error: updateErr } = await supabase
        .from("contacts")
        .update(updateFields)
        .eq("id", existingContact.id);

      if (updateErr) {
        console.error(`form-submit [${formType}]: contact update error`, updateErr);
        throw updateErr;
      }

      contactId = existingContact.id;
    } else {
      const insertFields: Record<string, unknown> = {
        email,
        first_name: firstName || email.split("@")[0],
        source: SOURCE_MAP[formType as FormType],
        source_detail: pageUrl || `/${formType}`,
        stage: "lead",
        tags: [tag],
      };
      if (lastName) insertFields.last_name = lastName;
      if (phone) insertFields.phone = phone;
      if (firmName) insertFields.firm_name = firmName;

      const { data: newContact, error: insertErr } = await supabase
        .from("contacts")
        .insert(insertFields)
        .select("id")
        .single();

      if (insertErr) {
        console.error(`form-submit [${formType}]: contact insert error`, insertErr);
        throw insertErr;
      }

      contactId = newContact.id;
    }

    console.log(`form-submit [${formType}]: contact upserted`, { contactId });

    // ------------------------------------------------------------------
    // 4. Insert form_submissions record
    // ------------------------------------------------------------------
    const { error: formErr } = await supabase.from("form_submissions").insert({
      form_type: formType,
      page_url: pageUrl || `/${formType}`,
      data,
      contact_id: contactId,
    });

    if (formErr) {
      console.error(`form-submit [${formType}]: form_submissions insert error`, formErr);
      // Non-fatal
    }

    // ------------------------------------------------------------------
    // 5. Activity log
    // ------------------------------------------------------------------
    const descriptionMap: Record<FormType, string> = {
      contact: `Contact form submission from ${firstName || email}`,
      email_capture: `Email captured: ${email}`,
      growth_calculator: `Growth calculator: ${data.client_count || 0} clients, $${data.avg_fee || 0} avg fee, $${data.calculated_revenue || 0} potential`,
      get_started: `Get started form from ${firstName || email}`,
      reactivation: `Reactivation interest from ${email}`,
    };

    const { error: logErr } = await supabase.from("activity_log").insert({
      activity_type: "form_submit",
      description: descriptionMap[formType as FormType],
      contact_id: contactId,
      metadata: { form_type: formType, data },
    });

    if (logErr) {
      console.error(`form-submit [${formType}]: activity_log insert error`, logErr);
      // Non-fatal
    }

    // ------------------------------------------------------------------
    // 6. Telegram notification
    // ------------------------------------------------------------------
    try {
      const telegramToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
      const telegramChatId = Deno.env.get("TELEGRAM_CHAT_ID");

      if (telegramToken && telegramChatId) {
        const tgMessage = `New ${formType.replace(/_/g, " ")} submission: ${firstName ? firstName + " " : ""}(${email})${
          formType === "growth_calculator"
            ? ` | ${data.client_count} clients, $${data.calculated_revenue} potential`
            : ""
        }${data.message ? ` | "${data.message.slice(0, 100)}"` : ""}`;

        const tgRes = await fetch(
          `https://api.telegram.org/bot${telegramToken}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: telegramChatId,
              text: tgMessage,
            }),
          },
        );

        if (!tgRes.ok) {
          const tgBody = await tgRes.text().catch(() => "");
          console.error(`form-submit [${formType}]: Telegram error`, {
            status: tgRes.status,
            body: tgBody,
          });
        } else {
          console.log(`form-submit [${formType}]: Telegram notification sent`);
        }
      }
    } catch (tgErr) {
      console.error(`form-submit [${formType}]: Telegram failed`, tgErr);
      // Non-fatal
    }

    // ------------------------------------------------------------------
    // 7. Success response
    // ------------------------------------------------------------------
    console.log(`form-submit [${formType}]: completed`, { contactId });

    return new Response(
      JSON.stringify({ success: true, contact_id: contactId }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (error: unknown) {
    const msg = error instanceof Error
      ? error.message
      : typeof error === "object" && error !== null && "message" in error
        ? String((error as { message: unknown }).message)
        : JSON.stringify(error);
    console.error("form-submit: unhandled error", msg, error);

    return new Response(
      JSON.stringify({ success: false, error: msg }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
