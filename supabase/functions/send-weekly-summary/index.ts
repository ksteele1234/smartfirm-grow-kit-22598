import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Format a number as USD with no decimals. */
const fmt = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

/** Shared email wrapper: gradient header, body slot, Katie signature footer. */
function wrapEmail(bodyHtml: string, preheader = ""): string {
  return `<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
<title>SmartFirm Weekly Pipeline Summary</title>
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
      <p style="margin:0;color:#cccccc;font-size:11px;">Weekly Pipeline Summary</p>
  </td></tr>

  <!-- Body -->
  <tr>
    <td class="body-padding" style="padding:28px 32px;">
      ${bodyHtml}
    </td>
  </tr>

  <!-- Footer / Signature -->
  <tr>
    <td style="padding:0 32px 28px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="border-top:1px solid #e5e7eb;padding-top:20px;">
          <p style="margin:0 0 2px;font-size:13px;color:#64748b;">SmartFirm AIOS</p>
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

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PipelineRow {
  stage: string;
  deal_count: number;
  total_monthly: number;
  total_setup: number;
  avg_probability: number;
}

interface DealRow {
  title: string;
  value_monthly: number | null;
  value_setup: number | null;
  stage: string;
  expected_close_date: string | null;
  closed_at: string | null;
  contacts: {
    first_name: string | null;
    last_name: string | null;
    company_name: string | null;
  } | null;
}

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
    console.log("send-weekly-summary: starting...");

    // ------------------------------------------------------------------
    // 1. Supabase client (service role)
    // ------------------------------------------------------------------
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // ------------------------------------------------------------------
    // 2. Calculate date boundaries
    // ------------------------------------------------------------------
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const weekOfLabel = now.toLocaleDateString("en-US", { month: "long", day: "numeric" });

    console.log(`send-weekly-summary: week of ${weekOfLabel}, since ${oneWeekAgo}`);

    // ------------------------------------------------------------------
    // 3. Fetch all data in parallel
    // ------------------------------------------------------------------
    const [
      pipelineResult,
      closedWonResult,
      closedLostResult,
      topOppsResult,
      newLeadsResult,
    ] = await Promise.all([
      // Pipeline by stage
      supabase.from("v_pipeline_summary").select("*"),

      // Closed won this week
      supabase
        .from("deals")
        .select("title, value_monthly, closed_at, contacts(first_name, last_name, company_name)")
        .eq("stage", "closed_won")
        .gte("closed_at", oneWeekAgo),

      // Closed lost this week
      supabase
        .from("deals")
        .select("title, value_monthly, closed_at, contacts(first_name, last_name, company_name)")
        .eq("stage", "closed_lost")
        .gte("closed_at", oneWeekAgo),

      // Top 5 active opportunities by monthly value
      supabase
        .from("deals")
        .select("title, value_monthly, value_setup, stage, expected_close_date, contacts(first_name, last_name, company_name)")
        .not("stage", "in", "(closed_won,closed_lost)")
        .order("value_monthly", { ascending: false, nullsFirst: false })
        .limit(5),

      // New leads this week (count only)
      supabase
        .from("contacts")
        .select("*", { count: "exact", head: true })
        .gte("created_at", oneWeekAgo),
    ]);

    // Check for query errors (non-fatal; log and use empty arrays)
    if (pipelineResult.error) console.error("send-weekly-summary: pipeline query error", pipelineResult.error);
    if (closedWonResult.error) console.error("send-weekly-summary: closed_won query error", closedWonResult.error);
    if (closedLostResult.error) console.error("send-weekly-summary: closed_lost query error", closedLostResult.error);
    if (topOppsResult.error) console.error("send-weekly-summary: top_opps query error", topOppsResult.error);
    if (newLeadsResult.error) console.error("send-weekly-summary: new_leads query error", newLeadsResult.error);

    const pipeline: PipelineRow[] = (pipelineResult.data as PipelineRow[]) ?? [];
    const closedWon: DealRow[] = (closedWonResult.data as DealRow[]) ?? [];
    const closedLost: DealRow[] = (closedLostResult.data as DealRow[]) ?? [];
    const topOpps: DealRow[] = (topOppsResult.data as DealRow[]) ?? [];
    const newLeadsCount = newLeadsResult.count ?? 0;

    // ------------------------------------------------------------------
    // 4. Compute totals
    // ------------------------------------------------------------------
    const totalActiveMRR = pipeline.reduce((sum, row) => sum + Number(row.total_monthly), 0);
    const totalActiveDeals = pipeline.reduce((sum, row) => sum + Number(row.deal_count), 0);
    const wonMRR = closedWon.reduce((sum, d) => sum + Number(d.value_monthly ?? 0), 0);
    const lostMRR = closedLost.reduce((sum, d) => sum + Number(d.value_monthly ?? 0), 0);

    console.log(`send-weekly-summary: pipeline=${totalActiveDeals} deals, won=${closedWon.length}, lost=${closedLost.length}, leads=${newLeadsCount}`);

    // ------------------------------------------------------------------
    // 5. Build Telegram message
    // ------------------------------------------------------------------
    const tgLines: string[] = [
      `WEEKLY PIPELINE SUMMARY (Week of ${weekOfLabel})`,
      "",
      "Pipeline by Stage:",
    ];

    if (pipeline.length === 0) {
      tgLines.push("  No active deals");
    } else {
      for (const row of pipeline) {
        const stageName = row.stage.charAt(0).toUpperCase() + row.stage.slice(1);
        tgLines.push(`  ${stageName}: ${row.deal_count} deal(s) (${fmt(Number(row.total_monthly))}/mo)`);
      }
    }

    tgLines.push(`Total Active: ${fmt(totalActiveMRR)}/mo MRR`);
    tgLines.push("");
    tgLines.push("This Week:");
    tgLines.push(`  Won: ${closedWon.length} deal(s) (${fmt(wonMRR)}/mo)`);
    tgLines.push(`  Lost: ${closedLost.length} deal(s) (${fmt(lostMRR)}/mo)`);
    tgLines.push(`  New Leads: ${newLeadsCount}`);

    if (topOpps.length > 0) {
      tgLines.push("");
      tgLines.push("Top Opportunities:");
      for (let i = 0; i < topOpps.length; i++) {
        const d = topOpps[i];
        const company = d.contacts?.company_name ?? d.title;
        tgLines.push(`  ${i + 1}. ${company} (${fmt(Number(d.value_monthly ?? 0))}/mo)`);
      }
    }

    const tgMessage = tgLines.join("\n");

    // ------------------------------------------------------------------
    // 6. Build email HTML
    // ------------------------------------------------------------------
    const stageColorMap: Record<string, string> = {
      discovery: "#e0f2f1",
      proposal: "#b2dfdb",
      negotiation: "#80cbc4",
    };

    let pipelineTableRows = "";
    for (const row of pipeline) {
      const stageName = row.stage.charAt(0).toUpperCase() + row.stage.slice(1);
      const bgColor = stageColorMap[row.stage] ?? "#f0f0f0";
      pipelineTableRows += `
        <tr>
          <td style="padding:8px 12px;background-color:${bgColor};border-bottom:1px solid #e5e7eb;font-size:14px;color:#0f2942;font-weight:600;">${stageName}</td>
          <td style="padding:8px 12px;background-color:${bgColor};border-bottom:1px solid #e5e7eb;font-size:14px;color:#0f2942;text-align:center;">${row.deal_count}</td>
          <td style="padding:8px 12px;background-color:${bgColor};border-bottom:1px solid #e5e7eb;font-size:14px;color:#0f2942;text-align:right;">${fmt(Number(row.total_monthly))}/mo</td>
          <td style="padding:8px 12px;background-color:${bgColor};border-bottom:1px solid #e5e7eb;font-size:14px;color:#0f2942;text-align:right;">${fmt(Number(row.total_setup))}</td>
        </tr>`;
    }

    // Won/Lost section
    let wonLostHtml = "";
    if (closedWon.length > 0) {
      for (const d of closedWon) {
        const name = d.contacts?.company_name ?? d.title;
        wonLostHtml += `<tr>
          <td style="padding:6px 12px;font-size:14px;color:#166534;border-bottom:1px solid #e5e7eb;">
            <span style="color:#22c55e;font-weight:700;">&#9679;</span> ${name}
          </td>
          <td style="padding:6px 12px;font-size:14px;color:#166534;text-align:right;border-bottom:1px solid #e5e7eb;">${fmt(Number(d.value_monthly ?? 0))}/mo</td>
        </tr>`;
      }
    } else {
      wonLostHtml += `<tr><td colspan="2" style="padding:6px 12px;font-size:14px;color:#64748b;border-bottom:1px solid #e5e7eb;">No deals won this week</td></tr>`;
    }

    if (closedLost.length > 0) {
      for (const d of closedLost) {
        const name = d.contacts?.company_name ?? d.title;
        wonLostHtml += `<tr>
          <td style="padding:6px 12px;font-size:14px;color:#991b1b;border-bottom:1px solid #e5e7eb;">
            <span style="color:#ef4444;font-weight:700;">&#9679;</span> ${name}
          </td>
          <td style="padding:6px 12px;font-size:14px;color:#991b1b;text-align:right;border-bottom:1px solid #e5e7eb;">${fmt(Number(d.value_monthly ?? 0))}/mo</td>
        </tr>`;
      }
    } else {
      wonLostHtml += `<tr><td colspan="2" style="padding:6px 12px;font-size:14px;color:#64748b;border-bottom:1px solid #e5e7eb;">No deals lost this week</td></tr>`;
    }

    // Top opportunities table
    let topOppsRows = "";
    for (let i = 0; i < topOpps.length; i++) {
      const d = topOpps[i];
      const company = d.contacts?.company_name ?? d.title;
      const stageName = d.stage.charAt(0).toUpperCase() + d.stage.slice(1);
      const closeDate = d.expected_close_date
        ? new Date(d.expected_close_date).toLocaleDateString("en-US", { month: "short", day: "numeric" })
        : "TBD";
      topOppsRows += `
        <tr>
          <td style="padding:6px 12px;font-size:14px;color:#0f2942;border-bottom:1px solid #e5e7eb;">${i + 1}. ${company}</td>
          <td style="padding:6px 12px;font-size:14px;color:#0f2942;text-align:center;border-bottom:1px solid #e5e7eb;">${stageName}</td>
          <td style="padding:6px 12px;font-size:14px;color:#0f2942;text-align:right;border-bottom:1px solid #e5e7eb;">${fmt(Number(d.value_monthly ?? 0))}/mo</td>
          <td style="padding:6px 12px;font-size:14px;color:#0f2942;text-align:right;border-bottom:1px solid #e5e7eb;">${closeDate}</td>
        </tr>`;
    }

    const emailBody = `
      <p style="margin:0 0 20px;font-size:20px;font-weight:700;color:#0f2942;">Weekly Pipeline Summary</p>
      <p style="margin:0 0 18px;font-size:14px;color:#64748b;">Week of ${weekOfLabel}</p>

      <!-- Pipeline by Stage -->
      <p style="margin:0 0 8px;font-size:16px;font-weight:600;color:#0f2942;">Pipeline by Stage</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;margin-bottom:24px;">
        <tr style="background-color:#0f2942;">
          <td style="padding:8px 12px;font-size:12px;color:#ffffff;font-weight:600;">Stage</td>
          <td style="padding:8px 12px;font-size:12px;color:#ffffff;font-weight:600;text-align:center;">Deals</td>
          <td style="padding:8px 12px;font-size:12px;color:#ffffff;font-weight:600;text-align:right;">Monthly</td>
          <td style="padding:8px 12px;font-size:12px;color:#ffffff;font-weight:600;text-align:right;">Setup</td>
        </tr>
        ${pipelineTableRows || '<tr><td colspan="4" style="padding:8px 12px;font-size:14px;color:#64748b;">No active deals</td></tr>'}
        <tr style="background-color:#f0fdf4;">
          <td style="padding:10px 12px;font-size:14px;font-weight:700;color:#0f2942;">Total Active</td>
          <td style="padding:10px 12px;font-size:14px;font-weight:700;color:#0f2942;text-align:center;">${totalActiveDeals}</td>
          <td style="padding:10px 12px;font-size:14px;font-weight:700;color:#0A7265;text-align:right;">${fmt(totalActiveMRR)}/mo</td>
          <td style="padding:10px 12px;font-size:14px;color:#64748b;text-align:right;"></td>
        </tr>
      </table>

      <!-- Won / Lost This Week -->
      <p style="margin:0 0 8px;font-size:16px;font-weight:600;color:#0f2942;">This Week: Won / Lost</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;margin-bottom:24px;">
        ${wonLostHtml}
      </table>

      <!-- Top Opportunities -->
      ${topOpps.length > 0 ? `
      <p style="margin:0 0 8px;font-size:16px;font-weight:600;color:#0f2942;">Top Opportunities</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;margin-bottom:24px;">
        <tr style="background-color:#0f2942;">
          <td style="padding:8px 12px;font-size:12px;color:#ffffff;font-weight:600;">Opportunity</td>
          <td style="padding:8px 12px;font-size:12px;color:#ffffff;font-weight:600;text-align:center;">Stage</td>
          <td style="padding:8px 12px;font-size:12px;color:#ffffff;font-weight:600;text-align:right;">Monthly</td>
          <td style="padding:8px 12px;font-size:12px;color:#ffffff;font-weight:600;text-align:right;">Close</td>
        </tr>
        ${topOppsRows}
      </table>` : ""}

      <!-- Stats Bar -->
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
        <tr>
          <td style="padding:14px 12px;text-align:center;border-right:1px solid #e5e7eb;">
            <p style="margin:0;font-size:22px;font-weight:700;color:#0A7265;">${fmt(totalActiveMRR)}</p>
            <p style="margin:4px 0 0;font-size:11px;color:#64748b;">Active MRR</p>
          </td>
          <td style="padding:14px 12px;text-align:center;border-right:1px solid #e5e7eb;">
            <p style="margin:0;font-size:22px;font-weight:700;color:#22c55e;">${closedWon.length}</p>
            <p style="margin:4px 0 0;font-size:11px;color:#64748b;">Won</p>
          </td>
          <td style="padding:14px 12px;text-align:center;border-right:1px solid #e5e7eb;">
            <p style="margin:0;font-size:22px;font-weight:700;color:#ef4444;">${closedLost.length}</p>
            <p style="margin:4px 0 0;font-size:11px;color:#64748b;">Lost</p>
          </td>
          <td style="padding:14px 12px;text-align:center;">
            <p style="margin:0;font-size:22px;font-weight:700;color:#1b5e7e;">${newLeadsCount}</p>
            <p style="margin:4px 0 0;font-size:11px;color:#64748b;">New Leads</p>
          </td>
        </tr>
      </table>
    `;

    const emailSubject = `Weekly Pipeline Summary: ${fmt(totalActiveMRR)} MRR across ${totalActiveDeals} deals`;
    const emailHtml = wrapEmail(emailBody, emailSubject);

    // ------------------------------------------------------------------
    // 7. Send Telegram (non-fatal)
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
          console.error("send-weekly-summary: Telegram error", {
            status: tgRes.status,
            body: tgBody,
          });
        } else {
          telegramSent = true;
          console.log("send-weekly-summary: Telegram notification sent");
        }
      } else {
        console.warn(
          "send-weekly-summary: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set",
        );
      }
    } catch (tgErr) {
      console.error("send-weekly-summary: Telegram failed", tgErr);
      // Non-fatal: continue to email
    }

    // ------------------------------------------------------------------
    // 8. Send email via Resend (non-fatal)
    // ------------------------------------------------------------------
    let emailSent = false;

    try {
      const resendApiKey = Deno.env.get("RESEND_API_KEY");

      if (resendApiKey) {
        const resendResp = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "SmartFirm AIOS <katie@smartfirm.io>",
            to: ["katie@smartfirm.io"],
            subject: emailSubject,
            html: emailHtml,
          }),
        });

        const resendBody = await resendResp.json().catch(() => null);

        if (!resendResp.ok) {
          const errMsg =
            resendBody?.message ??
            resendBody?.error ??
            `Resend API ${resendResp.status}`;
          console.error("send-weekly-summary: Resend error", errMsg);
        } else {
          emailSent = true;
          console.log("send-weekly-summary: email sent", { id: resendBody?.id });
        }
      } else {
        console.warn("send-weekly-summary: RESEND_API_KEY not set");
      }
    } catch (emailErr) {
      console.error("send-weekly-summary: email send failed", emailErr);
      // Non-fatal: Telegram may have succeeded
    }

    // ------------------------------------------------------------------
    // 9. Log to activity_log
    // ------------------------------------------------------------------
    try {
      await supabase.from("activity_log").insert({
        activity_type: "weekly_summary",
        description: `Weekly summary sent: ${fmt(totalActiveMRR)} MRR, ${totalActiveDeals} active deals, ${closedWon.length} won, ${closedLost.length} lost, ${newLeadsCount} new leads`,
        metadata: {
          total_active_mrr: totalActiveMRR,
          total_active_deals: totalActiveDeals,
          won_count: closedWon.length,
          lost_count: closedLost.length,
          new_leads: newLeadsCount,
          telegram_sent: telegramSent,
          email_sent: emailSent,
        },
      });
    } catch (logErr) {
      console.error("send-weekly-summary: activity_log insert failed", logErr);
      // Non-fatal
    }

    // ------------------------------------------------------------------
    // 10. Success response
    // ------------------------------------------------------------------
    console.log("send-weekly-summary: completed", { telegramSent, emailSent });

    return new Response(
      JSON.stringify({
        success: true,
        telegram_sent: telegramSent,
        email_sent: emailSent,
        summary: {
          total_active_mrr: totalActiveMRR,
          total_active_deals: totalActiveDeals,
          won_this_week: closedWon.length,
          lost_this_week: closedLost.length,
          new_leads: newLeadsCount,
        },
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
    console.error("send-weekly-summary: unhandled error", msg, error);

    return new Response(
      JSON.stringify({ success: false, error: msg }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
