import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// ---------------------------------------------------------------------------
// Email template wrapper (adapted from send-nurture-emails)
// ---------------------------------------------------------------------------

function wrapBriefingEmail(bodyHtml: string, preheader = ""): string {
  return `<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
<title>SmartFirm Daily Briefing</title>
<style>@media only screen and (max-width:620px){.email-container{width:100%!important;}.body-padding{padding:24px 16px!important;}.header-padding{padding:12px 20px!important;}.stats-cell{display:block!important;width:100%!important;padding:12px 16px!important;}}</style>
</head>
<body style="margin:0;padding:0;background-color:#f4f5f7;font-family:Arial,Helvetica,sans-serif;">
${preheader ? `<div style="display:none;font-size:1px;color:#f4f5f7;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">${preheader}</div>` : ""}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7;">
<tr><td align="center" style="padding:20px 12px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="email-container" style="max-width:600px;background-color:#ffffff;border-radius:8px;overflow:hidden;">

  <!-- Header -->
  <tr><td bgcolor="#0f2942" class="header-padding" style="background-color:#0f2942;background:linear-gradient(135deg,#0f2942,#1b5e7e);padding:14px 24px;text-align:center;">
      <img src="https://sywfvkjxefuykrannots.supabase.co/storage/v1/object/public/public-assets/smartfirm-logo-white.png" alt="SmartFirm.io" width="140" style="display:block;margin:0 auto 4px;max-width:140px;height:auto;" />
      <p style="margin:0;color:#cccccc;font-size:11px;">Daily Briefing</p>
  </td></tr>

  <!-- Body -->
  <tr>
    <td class="body-padding" style="padding:28px 32px;">
      ${bodyHtml}
    </td>
  </tr>

  <!-- Footer -->
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
// Date formatting helpers
// ---------------------------------------------------------------------------

function formatDateLong(date: Date): string {
  const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday",
  ];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function formatDateShort(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function formatCurrency(amount: number): string {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

// ---------------------------------------------------------------------------
// Section HTML builders
// ---------------------------------------------------------------------------

function buildNewLeadsSection(
  leads: Array<{
    description: string;
    metadata: Record<string, unknown> | null;
    created_at: string;
    contacts: { first_name: string; last_name: string | null; company_name: string | null; email: string } | null;
  }>,
): string {
  const header = `<div style="margin-bottom:24px;">
    <div style="border-left:4px solid #0A7265;padding-left:16px;">
      <h2 style="margin:0 0 12px;font-size:16px;font-weight:600;color:#0f2942;">New Leads (Last 24 Hours)</h2>`;

  if (!leads || leads.length === 0) {
    return `${header}
      <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">No new leads in the last 24 hours.</p>
    </div>
  </div>`;
  }

  const items = leads.map((lead) => {
    const contact = lead.contacts;
    const name = contact
      ? [contact.first_name, contact.last_name].filter(Boolean).join(" ")
      : "Unknown";
    const company = contact?.company_name ? ` (${contact.company_name})` : "";
    const formType = lead.metadata?.form_type
      ? ` via ${String(lead.metadata.form_type).replace(/_/g, " ")}`
      : "";

    return `<li style="margin-bottom:6px;font-size:14px;color:#374151;line-height:1.6;">
      <strong>${name}</strong>${company}${formType}
    </li>`;
  });

  return `${header}
      <ul style="margin:0;padding-left:20px;list-style-type:disc;">
        ${items.join("")}
      </ul>
    </div>
  </div>`;
}

function buildPipelineSection(
  changes: Array<{
    description: string;
    metadata: Record<string, unknown> | null;
    created_at: string;
    contacts: { first_name: string; last_name: string | null; company_name: string | null } | null;
  }>,
): string {
  const header = `<div style="margin-bottom:24px;">
    <div style="border-left:4px solid #1B5E7E;padding-left:16px;">
      <h2 style="margin:0 0 12px;font-size:16px;font-weight:600;color:#0f2942;">Pipeline Changes</h2>`;

  if (!changes || changes.length === 0) {
    return `${header}
      <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">No pipeline changes.</p>
    </div>
  </div>`;
  }

  const items = changes.map((change) => {
    return `<li style="margin-bottom:6px;font-size:14px;color:#374151;line-height:1.6;">
      ${change.description || "Pipeline update"}
    </li>`;
  });

  return `${header}
      <ul style="margin:0;padding-left:20px;list-style-type:disc;">
        ${items.join("")}
      </ul>
    </div>
  </div>`;
}

function buildEmailSection(
  events: Array<{ status: string }>,
): string {
  const header = `<div style="margin-bottom:24px;">
    <div style="border-left:4px solid #F59E0B;padding-left:16px;">
      <h2 style="margin:0 0 12px;font-size:16px;font-weight:600;color:#0f2942;">Email Performance</h2>`;

  if (!events || events.length === 0) {
    return `${header}
      <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">No email activity in the last 24 hours.</p>
    </div>
  </div>`;
  }

  const counts: Record<string, number> = {};
  for (const event of events) {
    counts[event.status] = (counts[event.status] || 0) + 1;
  }

  const sent = (counts["sent"] || 0) + (counts["delivered"] || 0);
  const opened = counts["opened"] || 0;
  const clicked = counts["clicked"] || 0;
  const bounced = counts["bounced"] || 0;
  const failed = counts["failed"] || 0;

  const parts = [`Sent: ${sent}`, `Opened: ${opened}`];
  if (clicked > 0) parts.push(`Clicked: ${clicked}`);
  if (bounced > 0) parts.push(`Bounced: ${bounced}`);
  if (failed > 0) parts.push(`Failed: ${failed}`);

  return `${header}
      <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">${parts.join(" | ")}</p>
    </div>
  </div>`;
}

function buildActionItemsSection(
  overdue: Array<{
    title: string;
    expected_close_date: string;
    value_monthly: number | null;
    contacts: { first_name: string; last_name: string | null; company_name: string | null } | null;
  }>,
  staleCount: number,
): string {
  if ((!overdue || overdue.length === 0) && staleCount === 0) {
    return "";
  }

  let items = "";

  if (overdue && overdue.length > 0) {
    const overdueItems = overdue.map((deal) => {
      const company = deal.contacts?.company_name || "Unknown";
      const mrr = deal.value_monthly ? ` (${formatCurrency(deal.value_monthly)}/mo)` : "";
      const closeDate = formatDateShort(deal.expected_close_date);
      return `<li style="margin-bottom:6px;font-size:14px;color:#374151;line-height:1.6;">
        <strong>${deal.title}</strong> for ${company}${mrr}; expected close ${closeDate}
      </li>`;
    });

    items += `<ul style="margin:0 0 8px;padding-left:20px;list-style-type:disc;">
      ${overdueItems.join("")}
    </ul>`;
  }

  if (staleCount > 0) {
    items += `<p style="margin:8px 0 0;font-size:14px;color:#374151;line-height:1.6;">
      ${staleCount} contact${staleCount === 1 ? "" : "s"} have had no activity in 14+ days.
    </p>`;
  }

  return `<div style="margin-bottom:24px;">
    <div style="border-left:4px solid #FB7185;padding-left:16px;">
      <h2 style="margin:0 0 12px;font-size:16px;font-weight:600;color:#0f2942;">Action Items</h2>
      ${items}
    </div>
  </div>`;
}

function buildQuickStatsSection(
  activeContacts: number,
  pipelineMrr: number,
  staleCount: number,
): string {
  return `<div style="margin-top:8px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      <tr>
        <td class="stats-cell" width="33%" style="background:#f8f9fa;padding:16px;text-align:center;border-radius:6px 0 0 6px;">
          <div style="font-size:24px;font-weight:700;color:#0A7265;">${activeContacts}</div>
          <div style="font-size:12px;color:#64748b;margin-top:4px;">Active Contacts</div>
        </td>
        <td class="stats-cell" width="33%" style="background:#f8f9fa;padding:16px;text-align:center;border-left:2px solid #ffffff;border-right:2px solid #ffffff;">
          <div style="font-size:24px;font-weight:700;color:#0A7265;">${formatCurrency(pipelineMrr)}</div>
          <div style="font-size:12px;color:#64748b;margin-top:4px;">Pipeline MRR</div>
        </td>
        <td class="stats-cell" width="33%" style="background:#f8f9fa;padding:16px;text-align:center;border-radius:0 6px 6px 0;">
          <div style="font-size:24px;font-weight:700;color:#0A7265;">${staleCount}</div>
          <div style="font-size:12px;color:#64748b;margin-top:4px;">Stale Contacts</div>
        </td>
      </tr>
    </table>
  </div>`;
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
    console.log("send-daily-briefing: starting...");

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const resendApiKey = Deno.env.get("RESEND_API_KEY")!;

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Calculate time boundaries
    const now = new Date();
    const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();
    const today = now.toISOString().split("T")[0]; // YYYY-MM-DD for date comparison

    console.log(`send-daily-briefing: querying data since ${yesterday}`);

    // ------------------------------------------------------------------
    // Run all data queries in parallel
    // ------------------------------------------------------------------
    const [
      newLeadsResult,
      pipelineResult,
      emailEventsResult,
      overdueDealsResult,
      pipelineSummaryResult,
      activeContactsResult,
      staleContactsResult,
    ] = await Promise.all([
      // 1. New leads (last 24h)
      supabase
        .from("activity_log")
        .select("description, metadata, created_at, contacts(first_name, last_name, company_name, email)")
        .eq("activity_type", "form_submit")
        .gte("created_at", yesterday)
        .order("created_at", { ascending: false }),

      // 2. Pipeline changes (last 24h)
      supabase
        .from("activity_log")
        .select("description, metadata, created_at, contacts(first_name, last_name, company_name)")
        .in("activity_type", ["deal_created", "deal_stage_changed"])
        .gte("created_at", yesterday)
        .order("created_at", { ascending: false }),

      // 3. Email events (last 24h)
      supabase
        .from("email_events")
        .select("status")
        .or(`created_at.gte.${yesterday},sent_at.gte.${yesterday}`),

      // 4. Overdue deals
      supabase
        .from("deals")
        .select("title, expected_close_date, value_monthly, contacts(first_name, last_name, company_name)")
        .lt("expected_close_date", today)
        .not("stage", "in", "(closed_won,closed_lost)"),

      // 5. Pipeline summary
      supabase.from("v_pipeline_summary").select("*"),

      // 6. Active contacts count
      supabase
        .from("contacts")
        .select("*", { count: "exact", head: true })
        .not("stage", "in", "(closed_won,closed_lost)"),

      // 7. Stale contacts
      supabase.rpc("get_stale_contacts", { days_threshold: 14 }),
    ]);

    // Log any query errors (non-fatal; sections will show fallback content)
    if (newLeadsResult.error) console.error("send-daily-briefing: new leads query error", newLeadsResult.error);
    if (pipelineResult.error) console.error("send-daily-briefing: pipeline query error", pipelineResult.error);
    if (emailEventsResult.error) console.error("send-daily-briefing: email events query error", emailEventsResult.error);
    if (overdueDealsResult.error) console.error("send-daily-briefing: overdue deals query error", overdueDealsResult.error);
    if (pipelineSummaryResult.error) console.error("send-daily-briefing: pipeline summary query error", pipelineSummaryResult.error);
    if (activeContactsResult.error) console.error("send-daily-briefing: active contacts query error", activeContactsResult.error);
    if (staleContactsResult.error) console.error("send-daily-briefing: stale contacts query error", staleContactsResult.error);

    // Extract data with safe fallbacks
    const newLeads = newLeadsResult.data ?? [];
    const pipelineChanges = pipelineResult.data ?? [];
    const emailEvents = emailEventsResult.data ?? [];
    const overdueDeals = overdueDealsResult.data ?? [];
    const pipelineSummary = pipelineSummaryResult.data ?? [];
    const activeContactsCount = activeContactsResult.count ?? 0;
    const staleContacts = staleContactsResult.data ?? [];
    const staleCount = staleContacts.length;

    // Calculate pipeline MRR from v_pipeline_summary
    const pipelineMrr = pipelineSummary.reduce(
      (sum: number, row: { total_monthly: number }) => sum + (Number(row.total_monthly) || 0),
      0,
    );

    console.log("send-daily-briefing: data collected", {
      newLeads: newLeads.length,
      pipelineChanges: pipelineChanges.length,
      emailEvents: emailEvents.length,
      overdueDeals: overdueDeals.length,
      activeContacts: activeContactsCount,
      staleContacts: staleCount,
      pipelineMrr,
    });

    // ------------------------------------------------------------------
    // Build the email HTML
    // ------------------------------------------------------------------
    const dateString = formatDateLong(now);

    const bodyHtml = `
      <p style="margin:0 0 4px;font-size:20px;font-weight:700;color:#0f2942;">Good Morning, Katie</p>
      <p style="margin:0 0 24px;font-size:14px;color:#64748b;">${dateString}</p>

      ${buildNewLeadsSection(newLeads)}
      ${buildPipelineSection(pipelineChanges)}
      ${buildEmailSection(emailEvents)}
      ${buildActionItemsSection(overdueDeals, staleCount)}
      ${buildQuickStatsSection(activeContactsCount, pipelineMrr, staleCount)}
    `;

    const leadCount = newLeads.length;
    const subjectLine = `Daily Briefing: ${leadCount} new lead${leadCount === 1 ? "" : "s"}, ${formatCurrency(pipelineMrr)} pipeline MRR`;

    const preheader = `${leadCount} new lead${leadCount === 1 ? "" : "s"}, ${formatCurrency(pipelineMrr)} pipeline MRR, ${staleCount} stale contact${staleCount === 1 ? "" : "s"}`;

    const emailHtml = wrapBriefingEmail(bodyHtml, preheader);

    // ------------------------------------------------------------------
    // Send via Resend API
    // ------------------------------------------------------------------
    let emailSent = false;

    const resendResp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SmartFirm AIOS <katie@smartfirm.io>",
        to: ["katie@smartfirm.io"],
        subject: subjectLine,
        html: emailHtml,
      }),
    });

    const resendBody = await resendResp.json().catch(() => null);

    if (!resendResp.ok) {
      const errMsg =
        resendBody?.message ??
        resendBody?.error ??
        `Resend API ${resendResp.status}`;
      console.error("send-daily-briefing: Resend error:", errMsg);
    } else {
      emailSent = true;
      console.log("send-daily-briefing: email sent successfully", {
        resendId: resendBody?.id,
      });
    }

    // ------------------------------------------------------------------
    // Return summary
    // ------------------------------------------------------------------
    const summary = {
      lead_count: leadCount,
      pipeline_changes: pipelineChanges.length,
      email_events: emailEvents.length,
      overdue_deals: overdueDeals.length,
      stale_contacts: staleCount,
      active_contacts: activeContactsCount,
      pipeline_mrr: pipelineMrr,
    };

    console.log("send-daily-briefing: completed", summary);

    return new Response(
      JSON.stringify({
        success: true,
        summary,
        email_sent: emailSent,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      },
    );
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("send-daily-briefing: fatal error:", error);
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      },
    );
  }
});
