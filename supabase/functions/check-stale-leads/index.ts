import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
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
    // 1. Supabase client (service role)
    // ------------------------------------------------------------------
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log("check-stale-leads: querying stale contacts");

    // ------------------------------------------------------------------
    // 2. Call the get_stale_contacts RPC
    // ------------------------------------------------------------------
    const { data: staleContacts, error: rpcError } = await supabase.rpc(
      "get_stale_contacts",
      { days_threshold: 14 },
    );

    if (rpcError) {
      console.error("check-stale-leads: RPC error", rpcError);
      return new Response(
        JSON.stringify({ success: false, error: rpcError.message }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const contacts = staleContacts ?? [];
    const count = contacts.length;

    console.log(`check-stale-leads: found ${count} stale contact(s)`);

    // ------------------------------------------------------------------
    // 3. No stale contacts? Return early.
    // ------------------------------------------------------------------
    if (count === 0) {
      return new Response(
        JSON.stringify({ success: true, count: 0, telegram_sent: false }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // ------------------------------------------------------------------
    // 4. Build Telegram message
    // ------------------------------------------------------------------
    const lines: string[] = [
      `Weekly Stale Lead Report: ${count} contact(s) with no activity in 14+ days`,
      "",
    ];

    const displayContacts = contacts.slice(0, 10);

    for (const contact of displayContacts) {
      const name = [contact.first_name, contact.last_name]
        .filter(Boolean)
        .join(" ") || "Unknown";
      const company = contact.company_name ? ` (${contact.company_name})` : "";
      const lastActive = contact.last_activity_at
        ? `last active ${new Date(contact.last_activity_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}`
        : "No recorded activity";

      lines.push(`  ${name}${company}: ${lastActive}`);
    }

    if (count > 10) {
      lines.push(`  ...and ${count - 10} more`);
    }

    const tgMessage = lines.join("\n");

    // ------------------------------------------------------------------
    // 5. Send Telegram notification
    // ------------------------------------------------------------------
    let telegramSent = false;

    try {
      const telegramToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
      const telegramChatId = Deno.env.get("TELEGRAM_CHAT_ID");

      if (telegramToken && telegramChatId) {
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
          console.error("check-stale-leads: Telegram error", {
            status: tgRes.status,
            body: tgBody,
          });
        } else {
          telegramSent = true;
          console.log("check-stale-leads: Telegram notification sent");
        }
      } else {
        console.warn(
          "check-stale-leads: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set",
        );
      }
    } catch (tgErr) {
      console.error("check-stale-leads: Telegram failed", tgErr);
      // Non-fatal: still return success
    }

    // ------------------------------------------------------------------
    // 6. Success response
    // ------------------------------------------------------------------
    console.log("check-stale-leads: completed", { count, telegramSent });

    return new Response(
      JSON.stringify({
        success: true,
        count,
        telegram_sent: telegramSent,
      }),
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
    console.error("check-stale-leads: unhandled error", msg, error);

    return new Response(
      JSON.stringify({ success: false, error: msg }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
