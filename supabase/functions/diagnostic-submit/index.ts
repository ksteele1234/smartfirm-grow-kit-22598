import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

/** Add `days` to a Date and return an ISO-8601 string. */
const addDays = (from: Date, days: number): string =>
  new Date(from.getTime() + days * 86_400_000).toISOString();

// ---------------------------------------------------------------------------
// Nurture sequence definition
// ---------------------------------------------------------------------------
const NURTURE_STEPS = [
  { step: 1, daysOffset: 0, subject: "Here is the Firm Owner Diagnostic you requested" },
  { step: 2, daysOffset: 1, subject: "So... did you hesitate?" },
  { step: 3, daysOffset: 2, subject: "The math on those wasted hours..." },
  { step: 4, daysOffset: 5, subject: "A map to find the hidden hours" },
  { step: 5, daysOffset: 8, subject: "Is finding $50,000 worth 90 minutes?" },
];

// ---------------------------------------------------------------------------
// Email templates
// ---------------------------------------------------------------------------

interface QuizResultsData {
  totalScore: number;
  maxScore: number;
  percentage: number;
  wasteHoursLow: number;
  wasteHoursHigh: number;
  dollarLow: number;
  dollarHigh: number;
  sections: {
    name: string;
    score: number;
    maxScore: number;
    severity: string;
    recommendation: string;
    priority: number;
    easyFixes: string[];
  }[];
}

function formatDollars(n: number): string {
  return "$" + Math.round(n / 1000).toLocaleString() + "K";
}

function severityBadge(severity: string): string {
  const colors: Record<string, string> = {
    low: "background-color:#dcfce7;color:#166534;",
    moderate: "background-color:#fef3c7;color:#92400e;",
    high: "background-color:#ffedd5;color:#9a3412;",
    critical: "background-color:#fee2e2;color:#991b1b;",
  };
  return `<span style="display:inline-block;padding:2px 10px;border-radius:12px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;${colors[severity] || colors.moderate}">${severity}</span>`;
}

function emailWrapper(bodyHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
  <style>@media only screen and (max-width:620px){.email-container{width:100%!important;}.body-padding{padding:24px 16px!important;}.header-padding{padding:12px 20px!important;}}</style>
</head>
<body style="margin:0;padding:0;background-color:#f7f7f7;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f7f7;">
    <tr><td align="center" style="padding:20px 12px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="email-container" style="max-width:600px;background-color:#ffffff;border-radius:12px;overflow:hidden;">
        <tr><td bgcolor="#0f2942" class="header-padding" style="background-color:#0f2942;background:linear-gradient(135deg,#0f2942,#1b5e7e);padding:14px 24px;text-align:center;">
          <img src="https://sywfvkjxefuykrannots.supabase.co/storage/v1/object/public/public-assets/smartfirm-logo-white.png" alt="SmartFirm.io" width="140" style="display:block;margin:0 auto 4px;max-width:140px;height:auto;" />
          <p style="margin:0;color:#cccccc;font-size:11px;">Automation for Accounting Firms That Actually Scales</p>
        </td></tr>
        <tr><td class="body-padding" style="padding:28px 32px;">${bodyHtml}</td></tr>
        <tr><td style="background-color:#f0f0f0;padding:14px 24px;text-align:center;">
          <p style="margin:0;font-size:11px;color:#999999;">&copy; ${new Date().getFullYear()} SmartFirm.io - All rights reserved.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function signOff(): string {
  return `<p style="margin:0 0 5px;font-size:15px;line-height:1.6;color:#333333;">Talk soon,</p>
<p style="margin:0;font-size:15px;line-height:1.6;color:#333333;">
  <strong>Katie Steele</strong><br/>
  Founder, <a href="https://smartfirm.io" style="color:#1b5e7e;text-decoration:none;">SmartFirm.io</a>
</p>`;
}

function ctaButton(label: string, url: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto 30px;">
  <tr>
    <td align="center" bgcolor="#0A7265" style="background-color:#0A7265;border-radius:8px;mso-padding-alt:12px 32px;">
      <a href="${url}" target="_blank" style="display:inline-block;padding:12px 32px;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;text-decoration:none;mso-line-height-rule:exactly;line-height:20px;">${label}</a>
    </td>
  </tr>
</table>`;
}

/** Basic PDF delivery email (no quiz results) */
function buildEmail1Html(firstName: string): string {
  return emailWrapper(`
    <p style="margin:0 0 20px;font-size:16px;line-height:1.6;color:#333333;">Hi ${firstName},</p>
    <p style="margin:0 0 20px;font-size:16px;line-height:1.6;color:#333333;">
      Here is the <strong>Firm Owner Diagnostic</strong> you requested. It's designed to surface the hidden inefficiencies that silently drain revenue from your firm.
    </p>
    ${ctaButton("Download the Diagnostic (PDF)", "https://smartfirm.io/smartfirm-owner-diagnostic.pdf")}
    <p style="margin:0 0 20px;font-size:16px;line-height:1.6;color:#333333;">
      Most firm owners are surprised by how much they hesitate when answering these 13 questions. Grab a pen and see for yourself.
    </p>
    <p style="margin:0 0 20px;font-size:16px;line-height:1.6;color:#333333;">
      I'll follow up in a day or two with some insights firm owners often find eye-opening.
    </p>
    ${signOff()}
  `);
}

/** Personalized quiz results email with priorities, easy fixes, and free call CTA */
function buildQuizResultsHtml(firstName: string, results: QuizResultsData): string {
  // Sort sections by priority (already sorted from the frontend, but ensure it)
  const sortedSections = [...results.sections].sort(
    (a, b) => (a.priority || 99) - (b.priority || 99),
  );

  const sectionBlocks = sortedSections
    .map(
      (sec) => {
        const fixItems = (sec.easyFixes || [])
          .map((fix) => `<li style="margin:0 0 6px;font-size:13px;color:#4a6a7f;line-height:1.5;">${fix}</li>`)
          .join("");

        return `
    <!-- Section: ${sec.name} -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 16px;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
      <tr><td style="padding:16px 20px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="font-size:14px;color:#0f2942;">
              <span style="display:inline-block;width:24px;height:24px;border-radius:12px;background-color:${sec.priority === 1 ? '#fee2e2' : sec.priority === 2 ? '#ffedd5' : sec.priority === 3 ? '#fef3c7' : '#dcfce7'};color:${sec.priority === 1 ? '#991b1b' : sec.priority === 2 ? '#9a3412' : sec.priority === 3 ? '#92400e' : '#166534'};text-align:center;line-height:24px;font-size:12px;font-weight:700;margin-right:8px;vertical-align:middle;">#${sec.priority}</span>
              <strong style="font-size:15px;">${sec.name}</strong>
              &nbsp;${severityBadge(sec.severity)}
            </td>
            <td style="text-align:right;font-size:20px;font-weight:800;color:#0f2942;">${sec.score}<span style="font-size:13px;font-weight:400;color:#6b7280;">/${sec.maxScore}</span></td>
          </tr>
        </table>
        <p style="margin:10px 0 0;font-size:13px;color:#6b7280;line-height:1.6;">${sec.recommendation}</p>
        ${fixItems ? `
        <div style="margin-top:12px;padding:12px 16px;background-color:#f9fafb;border-radius:6px;">
          <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#0f2942;">3 Quick Wins You Can Start This Week</p>
          <ul style="margin:0;padding:0 0 0 18px;">${fixItems}</ul>
        </div>` : ''}
      </td></tr>
    </table>`;
      },
    )
    .join("");

  return emailWrapper(`
    <p style="margin:0 0 20px;font-size:16px;line-height:1.6;color:#333333;">Hi ${firstName},</p>
    <p style="margin:0 0 20px;font-size:16px;line-height:1.6;color:#333333;">
      You just completed the <strong>Firm Owner Diagnostic</strong>. Here are your personalized results, ranked by priority.
    </p>

    <!-- Waste Estimate Banner -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;border-radius:12px;overflow:hidden;">
      <tr><td bgcolor="#0f2942" style="background-color:#0f2942;background:linear-gradient(135deg,#0f2942,#1b5e7e);padding:18px 20px;text-align:center;">
        <p style="margin:0 0 2px;font-size:11px;color:#cccccc;text-transform:uppercase;letter-spacing:1px;">Your Estimated Annual Waste</p>
        <p style="margin:0 0 4px;font-size:28px;font-weight:800;color:#5EEAD4;">${formatDollars(results.dollarLow)} - ${formatDollars(results.dollarHigh)}</p>
        <p style="margin:0;font-size:13px;color:#dddddd;">${results.wasteHoursLow}-${results.wasteHoursHigh} hours per week in hidden inefficiencies</p>
      </td></tr>
    </table>

    <!-- Priority Breakdown -->
    <p style="margin:0 0 4px;font-size:16px;font-weight:700;color:#0f2942;">Your Priority Breakdown</p>
    <p style="margin:0 0 16px;font-size:13px;color:#6b7280;">Sections ranked by impact - start with #1 for the fastest ROI.</p>
    ${sectionBlocks}

    <!-- Share with Team -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:8px 0 24px;background-color:#f0f9ff;border-radius:12px;overflow:hidden;">
      <tr><td style="padding:24px;">
        <p style="margin:0 0 8px;font-size:15px;font-weight:700;color:#0f2942;">Share These Questions with Your Team</p>
        <p style="margin:0 0 14px;font-size:14px;color:#4a6a7f;line-height:1.6;">
          Your answers give a great starting point, but the most accurate picture comes from the people doing the work every day. Download the printable PDF and walk through the 13 questions together.
        </p>
        ${ctaButton("Download Printable PDF", "https://smartfirm.io/smartfirm-owner-diagnostic.pdf")}
      </td></tr>
    </table>

    <!-- CTA: Free Results Review -->
    <p style="margin:0 0 12px;font-size:16px;line-height:1.6;color:#333333;">
      <strong>Want to know exactly where to start?</strong> Book a free 15-minute results review with me. I'll walk through your scores, answer your questions, and help you decide if a deeper audit makes sense for your firm.
    </p>
    ${ctaButton("Book a Free 15-Minute Results Review", "https://smartfirm.io/get-started-accounting-firm-automation")}
    <p style="margin:0 0 20px;font-size:13px;color:#999999;text-align:center;">No sales pitch. No obligation. Just a conversation about what your scores mean.</p>

    ${signOff()}
  `);
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------
serve(async (req) => {
  // CORS preflight
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

    const firstName =
      typeof body?.first_name === "string" ? body.first_name.trim() : "";
    const email =
      typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!firstName) {
      return new Response(
        JSON.stringify({ success: false, error: "first_name is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

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

    // Optional quiz data
    const quizAnswers = body?.quiz_answers ?? null;
    const quizResults: QuizResultsData | null = body?.quiz_results ?? null;
    const hasQuizResults = quizResults !== null && typeof quizResults === "object";

    const now = new Date();
    const nowIso = now.toISOString();

    console.log("diagnostic-submit: processing", {
      first_name: firstName,
      email_domain: email.split("@")[1],
      has_quiz: hasQuizResults,
    });

    // ------------------------------------------------------------------
    // 3. Upsert contact
    //    On conflict (email): update first_name, merge tag, update source_detail
    // ------------------------------------------------------------------
    // Try to fetch existing contact first so we can merge tags properly.
    const { data: existingContact } = await supabase
      .from("contacts")
      .select("id, tags")
      .eq("email", email)
      .maybeSingle();

    let contactId: string;

    if (existingContact) {
      // Merge 'diagnostic-download' into existing tags
      const currentTags: string[] = Array.isArray(existingContact.tags)
        ? existingContact.tags
        : [];
      const newTag = hasQuizResults ? "diagnostic-quiz" : "diagnostic-download";
      const mergedTags = currentTags.includes(newTag)
        ? currentTags
        : [...currentTags, newTag];

      const { error: updateErr } = await supabase
        .from("contacts")
        .update({
          first_name: firstName,
          tags: mergedTags,
          source_detail: "/diagnostic",
        })
        .eq("id", existingContact.id);

      if (updateErr) {
        console.error("diagnostic-submit: contact update error", updateErr);
        throw updateErr;
      }

      contactId = existingContact.id;
    } else {
      const { data: newContact, error: insertErr } = await supabase
        .from("contacts")
        .insert({
          first_name: firstName,
          email,
          source: "diagnostic",
          source_detail: "/diagnostic",
          stage: "subscriber",
          tags: [hasQuizResults ? "diagnostic-quiz" : "diagnostic-download"],
        })
        .select("id")
        .single();

      if (insertErr) {
        console.error("diagnostic-submit: contact insert error", insertErr);
        throw insertErr;
      }

      contactId = newContact.id;
    }

    console.log("diagnostic-submit: contact upserted", { contactId });

    // ------------------------------------------------------------------
    // 4. Insert form_submissions record
    // ------------------------------------------------------------------
    const { error: formErr } = await supabase.from("form_submissions").insert({
      form_type: "diagnostic",
      page_url: "/diagnostic",
      data: body,
      contact_id: contactId,
    });

    if (formErr) {
      console.error("diagnostic-submit: form_submissions insert error", formErr);
      // Non-fatal - continue
    }

    // ------------------------------------------------------------------
    // 5. Schedule nurture emails in email_events
    // ------------------------------------------------------------------
    const emailEventRows = NURTURE_STEPS.map((step) => ({
      contact_id: contactId,
      sequence_name: "diagnostic_nurture",
      step_number: step.step,
      email_subject: step.subject,
      scheduled_for: step.daysOffset === 0 ? nowIso : addDays(now, step.daysOffset),
      status: "scheduled",
    }));

    const { data: insertedEvents, error: eventsErr } = await supabase
      .from("email_events")
      .insert(emailEventRows)
      .select("id, step_number");

    if (eventsErr) {
      console.error("diagnostic-submit: email_events insert error", eventsErr);
      // Non-fatal - continue
    }

    // Find the step 1 event id so we can update it after send
    const step1EventId = insertedEvents?.find(
      (e: { step_number: number }) => e.step_number === 1,
    )?.id;

    // ------------------------------------------------------------------
    // 6. Send email 1 immediately via Resend
    // ------------------------------------------------------------------
    let resendId: string | null = null;
    try {
      const resendApiKey = Deno.env.get("RESEND_API_KEY");
      if (!resendApiKey) throw new Error("RESEND_API_KEY not set");

      const emailSubject = hasQuizResults
        ? "Your Firm Owner Diagnostic Results"
        : NURTURE_STEPS[0].subject;
      const emailHtml = hasQuizResults
        ? buildQuizResultsHtml(firstName, quizResults!)
        : buildEmail1Html(firstName);

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Katie Steele <katie@smartfirm.io>",
          to: [email],
          subject: emailSubject,
          html: emailHtml,
        }),
      });

      const resendBody = await resendRes.json().catch(() => ({}));

      if (!resendRes.ok) {
        console.error("diagnostic-submit: Resend API error", {
          status: resendRes.status,
          body: resendBody,
        });
      } else {
        resendId = resendBody.id ?? null;
        console.log("diagnostic-submit: email sent via Resend", { resendId });

        // Update email_events step 1 -> sent
        if (step1EventId) {
          const { error: updateEventErr } = await supabase
            .from("email_events")
            .update({
              status: "sent",
              sent_at: new Date().toISOString(),
              resend_id: resendId,
            })
            .eq("id", step1EventId);

          if (updateEventErr) {
            console.error(
              "diagnostic-submit: email_events update error",
              updateEventErr,
            );
          }
        }
      }
    } catch (emailErr) {
      console.error("diagnostic-submit: email send failed", emailErr);
      // Non-fatal - the form submission is the critical path
    }

    // ------------------------------------------------------------------
    // 7. Telegram notification
    // ------------------------------------------------------------------
    try {
      const telegramToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
      const telegramChatId = Deno.env.get("TELEGRAM_CHAT_ID");

      if (telegramToken && telegramChatId) {
        const wasteInfo = hasQuizResults
          ? ` | Waste: ${formatDollars(quizResults!.dollarLow)}-${formatDollars(quizResults!.dollarHigh)}/yr (${quizResults!.percentage}% score)`
          : "";
        const tgMessage = `New diagnostic ${hasQuizResults ? "quiz" : "download"}: ${firstName} (${email})${wasteInfo}`;
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
          console.error("diagnostic-submit: Telegram error", {
            status: tgRes.status,
            body: tgBody,
          });
        } else {
          console.log("diagnostic-submit: Telegram notification sent");
        }
      } else {
        console.warn(
          "diagnostic-submit: Telegram env vars missing, skipping notification",
        );
      }
    } catch (tgErr) {
      console.error("diagnostic-submit: Telegram notification failed", tgErr);
      // Non-fatal
    }

    // ------------------------------------------------------------------
    // 8. Activity log
    // ------------------------------------------------------------------
    const { error: logErr } = await supabase.from("activity_log").insert({
      activity_type: "form_submit",
      description: hasQuizResults
        ? `Completed Diagnostic Quiz (score: ${quizResults!.percentage}%, waste: ${formatDollars(quizResults!.dollarLow)}-${formatDollars(quizResults!.dollarHigh)})`
        : "Downloaded Firm Owner Diagnostic",
      contact_id: contactId,
      metadata: hasQuizResults ? { quiz_answers: quizAnswers, quiz_results: quizResults } : null,
    });

    if (logErr) {
      console.error("diagnostic-submit: activity_log insert error", logErr);
      // Non-fatal
    }

    // ------------------------------------------------------------------
    // 9. Success response
    // ------------------------------------------------------------------
    console.log("diagnostic-submit: completed successfully", { contactId });

    return new Response(
      JSON.stringify({ success: true, message: "Check your inbox!" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    console.error("diagnostic-submit: unhandled error", msg);

    return new Response(
      JSON.stringify({ success: false, error: msg }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
