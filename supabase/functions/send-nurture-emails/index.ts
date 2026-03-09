import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// ---------------------------------------------------------------------------
// Email template helpers
// ---------------------------------------------------------------------------

/** Shared wrapper: gradient header, body slot, Katie signature footer. */
function wrapEmail(firstName: string, bodyHtml: string, preheader = ""): string {
  return `<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
<title>SmartFirm</title>
<style>@media only screen and (max-width:620px){.email-container{width:100%!important;}.body-padding{padding:24px 16px!important;}.header-padding{padding:12px 20px!important;}}</style>
</head>
<body style="margin:0;padding:0;background-color:#f4f5f7;font-family:Arial,Helvetica,sans-serif;">
${preheader ? `<div style="display:none;font-size:1px;color:#f4f5f7;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">${preheader}</div>` : ""}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7;">
<tr><td align="center" style="padding:20px 12px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="email-container" style="max-width:600px;background-color:#ffffff;border-radius:8px;overflow:hidden;">

  <!-- Header -->
  <tr><td bgcolor="#0f2942" class="header-padding" style="background-color:#0f2942;background:linear-gradient(135deg,#0f2942,#1b5e7e);padding:14px 24px;text-align:center;">
      <img src="https://sywfvkjxefuykrannots.supabase.co/storage/v1/object/public/public-assets/smartfirm-logo-white.png" alt="SmartFirm.io" width="140" style="display:block;margin:0 auto 4px;max-width:140px;height:auto;" />
      <p style="margin:0;color:#cccccc;font-size:11px;">Automation for Accounting Firms That Actually Scales</p>
  </td></tr>

  <!-- Body -->
  <tr>
    <td class="body-padding" style="padding:28px 32px;">
      <p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#0f2942;">Hi ${firstName},</p>
      ${bodyHtml}
    </td>
  </tr>

  <!-- Footer / Signature -->
  <tr>
    <td style="padding:0 32px 28px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="border-top:1px solid #e5e7eb;padding-top:20px;">
          <p style="margin:0 0 2px;font-size:15px;font-weight:600;color:#0f2942;">Katie Steele</p>
          <p style="margin:0 0 2px;font-size:13px;color:#64748b;">Founder, SmartFirm.io</p>
          <a href="https://smartfirm.io" style="font-size:13px;color:#1b5e7e;text-decoration:none;">smartfirm.io</a>
        </td></tr>
      </table>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

/** Reusable CTA button. */
function ctaButton(label: string, url = "https://smartfirm.io/get-started-accounting-firm-automation"): string {
  return `
<table role="presentation" cellpadding="0" cellspacing="0" align="center" style="margin:28px auto;">
<tr>
  <td align="center" bgcolor="#0A7265" style="background-color:#0A7265;border-radius:6px;mso-padding-alt:12px 32px;">
    <a href="${url}" target="_blank"
       style="display:inline-block;padding:14px 32px;font-size:15px;font-weight:600;color:#ffffff;background-color:#0A7265;text-decoration:none;letter-spacing:0.2px;mso-line-height-rule:exactly;line-height:20px;">${label}</a>
  </td>
</tr>
</table>`;
}

/** Pink-highlighted dollar figure. */
function pinkAmount(text: string): string {
  return `<span style="color:#fb7185;font-weight:700;">${text}</span>`;
}

// ---------------------------------------------------------------------------
// Diagnostic nurture sequence email bodies (steps 2 - 5)
// ---------------------------------------------------------------------------

function getDiagnosticNurtureBody(
  stepNumber: number,
  firstName: string,
): string | null {
  switch (stepNumber) {
    // Step 2 ------------------------------------------------------------------
    case 2:
      return wrapEmail(
        firstName,
        `
<p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#0f2942;">
  When you went through the SmartFirm diagnostic, did you hesitate on any of the questions?
</p>
<p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#0f2942;">
  Most firm owners do. And that hesitation? It is the gap between
  <em>what you know you should be doing</em> and <em>what your firm actually does every day</em>.
</p>
<p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#0f2942;">
  That gap is a <strong>visibility problem</strong>. You cannot fix what you cannot see. And right now, hours, revenue, and client trust are quietly slipping through the cracks.
</p>
<p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#0f2942;">
  Tomorrow I will show you exactly how much those cracks are costing you.
</p>
<p style="margin:0 0 8px;font-size:16px;line-height:1.6;color:#0f2942;">
  Talk soon,
</p>`,
        "Most firm owners hesitate on at least 3 of the 13 questions. That hesitation points to something worth examining.",
      );

    // Step 3 ------------------------------------------------------------------
    case 3:
      return wrapEmail(
        firstName,
        `
<p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#0f2942;">
  Let me put some numbers on those hesitations from the diagnostic.
</p>
<p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#0f2942;">
  The average professional-services firm wastes between ${pinkAmount("$42,000")} and ${pinkAmount("$106,000")} per year on:
</p>
<ul style="margin:0 0 18px;padding-left:24px;font-size:16px;line-height:1.8;color:#0f2942;">
  <li><strong>Admin bottlenecks</strong> that chew up 6-10 hours a week per team member</li>
  <li><strong>Dropped follow-ups</strong> that let warm leads go cold</li>
  <li><strong>Scope creep and write-downs</strong> that never get tracked properly</li>
  <li><strong>Manual onboarding</strong> that could run itself</li>
</ul>
<p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#0f2942;">
  Those are not big, dramatic failures. They are dozens of small leaks that compound month after month until you are leaving six figures on the table.
</p>
<p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#0f2942;">
  What if you could see every leak on one map?
</p>
<p style="margin:0 0 8px;font-size:16px;line-height:1.6;color:#0f2942;">
  I will show you how tomorrow.
</p>`,
        "The average firm wastes $42,000 to $106,000 per year on small leaks that compound month after month.",
      );

    // Step 4 ------------------------------------------------------------------
    case 4:
      return wrapEmail(
        firstName,
        `
<p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#0f2942;">
  I promised you a map. Here is how we build one.
</p>
<p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#0f2942;">
  The <strong>SmartFirm Efficiency Audit</strong> is a deep dive where we pull apart your firm's operations and hand you a prioritized action plan to reclaim the hours (and dollars) you are losing right now.
</p>
<p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#0f2942;">
  Here is what you walk away with:
</p>
<ul style="margin:0 0 18px;padding-left:24px;font-size:16px;line-height:1.8;color:#0f2942;">
  <li>A <strong>full process map</strong> of your client lifecycle, from intake to offboarding</li>
  <li>A <strong>waste report</strong> that quantifies time and revenue lost at each stage</li>
  <li>A <strong>prioritized 90-day roadmap</strong> with quick wins and long-term fixes</li>
  <li><strong>Tech-stack recommendations</strong> tailored to your firm, not generic advice</li>
</ul>
<p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#0f2942;">
  We offer three levels depending on scope:
</p>
<ul style="margin:0 0 18px;padding-left:24px;font-size:16px;line-height:1.8;color:#0f2942;">
  <li><strong>Single Workflow Audit</strong> (${pinkAmount("$3,500")}) : deep dive into one workflow like month-end close, tax prep, or client onboarding</li>
  <li><strong>Whole-Firm Efficiency Audit</strong> (${pinkAmount("$12,500")}) : every workflow, every handoff, every bottleneck mapped and prioritized</li>
  <li><strong>Full Audit + Growth Strategy</strong> (${pinkAmount("$15,000")}) : operations and marketing, handled together</li>
</ul>
<p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#0f2942;">
  Not sure which one fits? That is what the free results review is for. Grab 15 minutes and I will help you figure out the best path.
</p>
${ctaButton("Book a Free 15-Minute Results Review")}
<p style="margin:0 0 8px;font-size:16px;line-height:1.6;color:#0f2942;">
  Talk soon,
</p>`,
        "A full process map, waste report, and 90-day roadmap. Three audit levels starting at $3,500.",
      );

    // Step 5 ------------------------------------------------------------------
    case 5:
      return wrapEmail(
        firstName,
        `
<p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#0f2942;">
  Quick question, ${firstName}:
</p>
<p style="margin:0 0 18px;font-size:20px;line-height:1.5;font-weight:700;color:#0f2942;">
  Is finding ${pinkAmount("$50,000+")} in hidden capacity worth 15 minutes of your time?
</p>
<p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#0f2942;">
  Most firms we audit uncover <em>at least</em> ${pinkAmount("$42,000")} in recoverable waste. And the conversation to figure out if an audit is right for you? That is free.
</p>
<p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#0f2942;">
  No sales pitch. I will walk through your diagnostic results, tell you what I would focus on first, and if a deeper audit makes sense, we can talk about what that looks like.
</p>
<p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#0f2942;">
  This is the last email in this series. If you are ready to stop guessing and start measuring, grab a spot below.
</p>
${ctaButton("Book a Free 15-Minute Results Review")}
<p style="margin:0 0 8px;font-size:16px;line-height:1.6;color:#0f2942;">
  To your firm's growth,
</p>`,
        "Last email in this series. 15 free minutes could surface $50,000+ in hidden capacity.",
      );

    default:
      return null;
  }
}

// ---------------------------------------------------------------------------
// Build HTML for any supported sequence + step
// ---------------------------------------------------------------------------

function buildEmailHtml(
  sequenceName: string,
  stepNumber: number,
  firstName: string,
): string | null {
  if (sequenceName === "diagnostic_nurture") {
    return getDiagnosticNurtureBody(stepNumber, firstName);
  }
  // Future sequences can be added here.
  return null;
}

// ---------------------------------------------------------------------------
// Main handler
// ---------------------------------------------------------------------------

serve(async (req) => {
  // Handle CORS preflight
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
    console.log("send-nurture-emails: starting cron run...");

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const resendApiKey = Deno.env.get("RESEND_API_KEY")!;

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const now = new Date().toISOString();
    console.log(`send-nurture-emails: current time ${now}`);

    // 1. Fetch scheduled emails that are due
    const { data: scheduledEmails, error: fetchError } = await supabase
      .from("email_events")
      .select("*")
      .eq("status", "scheduled")
      .lte("scheduled_for", now)
      .order("scheduled_for", { ascending: true })
      .limit(50);

    if (fetchError) {
      console.error("send-nurture-emails: error fetching scheduled emails:", fetchError);
      throw fetchError;
    }

    if (!scheduledEmails || scheduledEmails.length === 0) {
      console.log("send-nurture-emails: no emails due at this time");
      return new Response(
        JSON.stringify({
          success: true,
          message: "No emails to send",
          sent: 0,
          failed: 0,
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        },
      );
    }

    console.log(
      `send-nurture-emails: found ${scheduledEmails.length} email(s) to process`,
    );

    let sentCount = 0;
    const failures: { id: string; error: string }[] = [];

    for (const emailEvent of scheduledEmails) {
      try {
        // 2. Look up the contact
        const { data: contact, error: contactError } = await supabase
          .from("contacts")
          .select("first_name, email")
          .eq("id", emailEvent.contact_id)
          .single();

        if (contactError || !contact) {
          const msg = contactError?.message ?? "Contact not found";
          console.error(
            `send-nurture-emails: contact lookup failed for event ${emailEvent.id}: ${msg}`,
          );
          await supabase
            .from("email_events")
            .update({ status: "failed" })
            .eq("id", emailEvent.id);
          failures.push({ id: emailEvent.id, error: msg });
          continue;
        }

        const firstName = contact.first_name || "there";

        // 3. Build the email HTML
        const html = buildEmailHtml(
          emailEvent.sequence_name,
          emailEvent.step_number,
          firstName,
        );

        if (!html) {
          const msg = `No template for sequence="${emailEvent.sequence_name}" step=${emailEvent.step_number}`;
          console.error(`send-nurture-emails: ${msg}`);
          await supabase
            .from("email_events")
            .update({ status: "failed" })
            .eq("id", emailEvent.id);
          failures.push({ id: emailEvent.id, error: msg });
          continue;
        }

        // 4. Send via Resend API
        const resendResp = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Katie Steele <katie@smartfirm.io>",
            to: [contact.email],
            subject: emailEvent.email_subject,
            html,
          }),
        });

        const resendBody = await resendResp.json().catch(() => null);

        if (!resendResp.ok) {
          const errMsg =
            resendBody?.message ??
            resendBody?.error ??
            `Resend API ${resendResp.status}`;
          console.error(
            `send-nurture-emails: Resend error for event ${emailEvent.id}: ${errMsg}`,
          );

          await supabase
            .from("email_events")
            .update({ status: "failed" })
            .eq("id", emailEvent.id);
          failures.push({ id: emailEvent.id, error: errMsg });
          continue;
        }

        const resendId = resendBody?.id ?? null;

        // 5. Mark as sent
        await supabase
          .from("email_events")
          .update({
            status: "sent",
            sent_at: new Date().toISOString(),
            resend_id: resendId,
          })
          .eq("id", emailEvent.id);

        // 6. Log to activity_log
        await supabase.from("activity_log").insert({
          contact_id: emailEvent.contact_id,
          activity_type: "email_sent",
          description: `Sent step ${emailEvent.step_number} of ${emailEvent.sequence_name} sequence`,
        });

        sentCount++;
        console.log(
          `send-nurture-emails: sent event ${emailEvent.id} (step ${emailEvent.step_number}, ${emailEvent.sequence_name}) to ${contact.email}`,
        );
      } catch (innerError: unknown) {
        const msg =
          innerError instanceof Error ? innerError.message : "Unknown error";
        console.error(
          `send-nurture-emails: unexpected error for event ${emailEvent.id}: ${msg}`,
        );
        await supabase
          .from("email_events")
          .update({ status: "failed" })
          .eq("id", emailEvent.id);
        failures.push({ id: emailEvent.id, error: msg });
      }
    }

    console.log(
      `send-nurture-emails: done. sent=${sentCount}, failed=${failures.length}`,
    );

    return new Response(
      JSON.stringify({
        success: true,
        sent: sentCount,
        failed: failures.length,
        failures: failures.length > 0 ? failures : undefined,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      },
    );
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("send-nurture-emails: fatal error:", error);
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      },
    );
  }
});
