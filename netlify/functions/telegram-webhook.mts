// netlify/functions/telegram-webhook.mts
// Netlify Function: handles incoming Telegram webhook POST requests
//
// This makes the @SmartFirmAIOS_bot two-way. Katie can send commands via
// Telegram to query the CRM and take actions directly from her phone.
//
// Security:
//   1. Validates ?secret= query parameter against TELEGRAM_WEBHOOK_SECRET
//   2. Validates chat_id from incoming message matches TELEGRAM_CHAT_ID
//   3. Always returns 200 to Telegram (prevents retries)
//
// Setup:
//   Call the Telegram setWebhook API once:
//   https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://smartfirm.io/.netlify/functions/telegram-webhook?secret=<SECRET>

import type { Handler, HandlerEvent } from "@netlify/functions";
import { createClient } from "@supabase/supabase-js";

// ── Config ──────────────────────────────────────────────────

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "";
const TELEGRAM_WEBHOOK_SECRET = process.env.TELEGRAM_WEBHOOK_SECRET || "";
const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

// ── Supabase client (service role, bypasses RLS) ────────────

function getSupabase() {
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
}

// ── Telegram API helper ─────────────────────────────────────

async function sendTelegramMessage(text: string, parseMode: string = "HTML"): Promise<void> {
  try {
    // Telegram limits messages to 4096 characters
    const chunks = splitMessage(text, 4096);
    for (const chunk of chunks) {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: chunk,
          parse_mode: parseMode,
          disable_web_page_preview: true,
        }),
      });
    }
  } catch (err: any) {
    console.error("[TELEGRAM-WEBHOOK] Failed to send reply:", err.message);
  }
}

function splitMessage(text: string, maxLen: number): string[] {
  if (text.length <= maxLen) return [text];
  const chunks: string[] = [];
  let remaining = text;
  while (remaining.length > 0) {
    if (remaining.length <= maxLen) {
      chunks.push(remaining);
      break;
    }
    // Try to split at a newline near the limit
    let splitAt = remaining.lastIndexOf("\n", maxLen);
    if (splitAt < maxLen * 0.5) splitAt = maxLen;
    chunks.push(remaining.substring(0, splitAt));
    remaining = remaining.substring(splitAt);
  }
  return chunks;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ── Command Handlers ────────────────────────────────────────

async function handlePipeline(): Promise<string> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("v_pipeline_summary")
    .select("*");

  if (error) throw new Error(`Pipeline query failed: ${error.message}`);
  if (!data || data.length === 0) return "<b>Pipeline Summary</b>\n\nNo deals in the pipeline.";

  const stageLabels: Record<string, string> = {
    discovery: "Discovery",
    proposal: "Proposal",
    negotiation: "Negotiation",
    closed_won: "Closed Won",
    closed_lost: "Closed Lost",
  };

  let totalMonthly = 0;
  let totalDeals = 0;
  const lines = data.map((row: any) => {
    const label = stageLabels[row.stage] || row.stage;
    const monthly = Number(row.total_monthly || 0);
    const count = Number(row.deal_count || 0);
    const prob = Number(row.avg_probability || 0);
    totalMonthly += monthly;
    totalDeals += count;
    return `  ${label}: ${count} deal${count !== 1 ? "s" : ""} ($${monthly.toLocaleString()}/mo, ${prob}% avg prob)`;
  });

  return [
    "<b>Pipeline Summary</b>",
    "",
    ...lines,
    "",
    `<b>Total:</b> ${totalDeals} deals, $${totalMonthly.toLocaleString()}/mo`,
  ].join("\n");
}

async function handleLeads(): Promise<string> {
  const supabase = getSupabase();
  const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString();

  const { data, error } = await supabase
    .from("contacts")
    .select("first_name, last_name, email, company_name, source, created_at")
    .eq("stage", "lead")
    .gte("created_at", weekAgo)
    .order("created_at", { ascending: false });

  if (error) throw new Error(`Leads query failed: ${error.message}`);
  if (!data || data.length === 0) return "<b>New Leads (7 days)</b>\n\nNo new leads this week.";

  const lines = data.map((c: any, i: number) => {
    const name = [c.first_name, c.last_name].filter(Boolean).join(" ");
    const company = c.company_name ? ` (${escapeHtml(c.company_name)})` : "";
    const src = c.source ? ` [${c.source}]` : "";
    const date = new Date(c.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" });
    return `${i + 1}. <b>${escapeHtml(name)}</b>${company}${src}\n   ${escapeHtml(c.email)} (${date})`;
  });

  return [
    `<b>New Leads (last 7 days)</b>`,
    `${data.length} lead${data.length !== 1 ? "s" : ""} found`,
    "",
    ...lines,
  ].join("\n");
}

async function handleContacts(searchTerm: string): Promise<string> {
  if (!searchTerm.trim()) {
    return "Usage: <code>/contacts &lt;name&gt;</code>\n\nSearch contacts by name or company.";
  }

  const supabase = getSupabase();
  const term = `%${searchTerm.trim()}%`;

  const { data, error } = await supabase
    .from("contacts")
    .select("first_name, last_name, email, company_name, stage, phone, source")
    .or(`first_name.ilike.${term},last_name.ilike.${term},company_name.ilike.${term}`)
    .order("updated_at", { ascending: false })
    .limit(10);

  if (error) throw new Error(`Contacts search failed: ${error.message}`);
  if (!data || data.length === 0) return `No contacts found matching "<b>${escapeHtml(searchTerm)}</b>".`;

  const stageLabels: Record<string, string> = {
    lead: "Lead",
    subscriber: "Subscriber",
    qualified: "Qualified",
    opportunity: "Opportunity",
    proposal_sent: "Proposal Sent",
    negotiation: "Negotiation",
    closed_won: "Closed Won",
    closed_lost: "Closed Lost",
    client: "Client",
  };

  const lines = data.map((c: any, i: number) => {
    const name = [c.first_name, c.last_name].filter(Boolean).join(" ");
    const company = c.company_name ? `\n   Company: ${escapeHtml(c.company_name)}` : "";
    const stage = stageLabels[c.stage] || c.stage;
    const phone = c.phone ? `\n   Phone: ${escapeHtml(c.phone)}` : "";
    return `${i + 1}. <b>${escapeHtml(name)}</b> [${stage}]${company}\n   ${escapeHtml(c.email)}${phone}`;
  });

  return [
    `<b>Contact Search:</b> "${escapeHtml(searchTerm)}"`,
    `${data.length} result${data.length !== 1 ? "s" : ""}`,
    "",
    ...lines,
  ].join("\n");
}

async function handleStatus(): Promise<string> {
  const supabase = getSupabase();

  // Count contacts by stage
  const { data: contacts, error: e1 } = await supabase
    .from("contacts")
    .select("stage");
  if (e1) throw new Error(`Status query failed: ${e1.message}`);

  const stageCounts: Record<string, number> = {};
  let totalContacts = 0;
  for (const c of contacts || []) {
    stageCounts[c.stage] = (stageCounts[c.stage] || 0) + 1;
    totalContacts++;
  }

  const stageLabels: Record<string, string> = {
    lead: "Lead",
    subscriber: "Subscriber",
    qualified: "Qualified",
    opportunity: "Opportunity",
    proposal_sent: "Proposal Sent",
    negotiation: "Negotiation",
    closed_won: "Closed Won",
    closed_lost: "Closed Lost",
    client: "Client",
  };

  // Pipeline value
  const { data: pipeline, error: e2 } = await supabase
    .from("v_pipeline_summary")
    .select("*");
  if (e2) throw new Error(`Pipeline query failed: ${e2.message}`);

  const totalMonthly = (pipeline || []).reduce(
    (sum: number, row: any) => sum + Number(row.total_monthly || 0),
    0
  );
  const totalDeals = (pipeline || []).reduce(
    (sum: number, row: any) => sum + Number(row.deal_count || 0),
    0
  );

  // New leads this week
  const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString();
  const { count: newLeads, error: e3 } = await supabase
    .from("contacts")
    .select("*", { count: "exact", head: true })
    .eq("stage", "lead")
    .gte("created_at", weekAgo);
  if (e3) throw new Error(`New leads query failed: ${e3.message}`);

  const stageLines = Object.entries(stageLabels)
    .filter(([key]) => stageCounts[key])
    .map(([key, label]) => `  ${label}: ${stageCounts[key]}`);

  return [
    "<b>CRM Status Overview</b>",
    "",
    `<b>Contacts:</b> ${totalContacts} total`,
    ...stageLines,
    "",
    `<b>Pipeline:</b> ${totalDeals} deals, $${totalMonthly.toLocaleString()}/mo`,
    `<b>New leads this week:</b> ${newLeads || 0}`,
  ].join("\n");
}

async function handleAddNote(args: string): Promise<string> {
  // Parse: /addnote email@example.com This is the note text
  const parts = args.trim().split(/\s+/);
  if (parts.length < 2) {
    return "Usage: <code>/addnote email@example.com Your note text here</code>";
  }

  const email = parts[0];
  const noteText = parts.slice(1).join(" ");

  if (!email.includes("@")) {
    return "First argument must be a valid email address.\n\nUsage: <code>/addnote email@example.com Your note text here</code>";
  }

  const supabase = getSupabase();

  // Find the contact by email
  const { data: contact, error: findError } = await supabase
    .from("contacts")
    .select("id, first_name, last_name, email")
    .eq("email", email.toLowerCase())
    .single();

  if (findError || !contact) {
    return `No contact found with email <b>${escapeHtml(email)}</b>.`;
  }

  // Insert activity log entry
  const { error: insertError } = await supabase.from("activity_log").insert({
    contact_id: contact.id,
    activity_type: "note_added",
    description: noteText,
  });

  if (insertError) throw new Error(`Failed to add note: ${insertError.message}`);

  const name = [contact.first_name, contact.last_name].filter(Boolean).join(" ");
  return `Note added for <b>${escapeHtml(name)}</b> (${escapeHtml(contact.email)}):\n"${escapeHtml(noteText)}"`;
}

async function handleStage(args: string): Promise<string> {
  // Parse: /stage email@example.com new_stage
  const parts = args.trim().split(/\s+/);
  if (parts.length < 2) {
    return [
      "Usage: <code>/stage email@example.com new_stage</code>",
      "",
      "Valid stages: lead, subscriber, qualified, opportunity, proposal_sent, negotiation, closed_won, closed_lost, client",
    ].join("\n");
  }

  const email = parts[0];
  const newStage = parts[1].toLowerCase();

  if (!email.includes("@")) {
    return "First argument must be a valid email address.\n\nUsage: <code>/stage email@example.com new_stage</code>";
  }

  const validStages = [
    "lead", "subscriber", "qualified", "opportunity",
    "proposal_sent", "negotiation", "closed_won", "closed_lost", "client",
  ];

  if (!validStages.includes(newStage)) {
    return [
      `"<b>${escapeHtml(newStage)}</b>" is not a valid stage.`,
      "",
      `Valid stages: ${validStages.join(", ")}`,
    ].join("\n");
  }

  const supabase = getSupabase();

  // Find the contact
  const { data: contact, error: findError } = await supabase
    .from("contacts")
    .select("id, first_name, last_name, email, stage")
    .eq("email", email.toLowerCase())
    .single();

  if (findError || !contact) {
    return `No contact found with email <b>${escapeHtml(email)}</b>.`;
  }

  const oldStage = contact.stage;
  if (oldStage === newStage) {
    const name = [contact.first_name, contact.last_name].filter(Boolean).join(" ");
    return `<b>${escapeHtml(name)}</b> is already in the "${newStage}" stage.`;
  }

  // Update the contact stage
  const { error: updateError } = await supabase
    .from("contacts")
    .update({ stage: newStage, updated_at: new Date().toISOString() })
    .eq("id", contact.id);

  if (updateError) throw new Error(`Failed to update stage: ${updateError.message}`);

  // Log the activity
  const stageLabels: Record<string, string> = {
    lead: "Lead", subscriber: "Subscriber", qualified: "Qualified",
    opportunity: "Opportunity", proposal_sent: "Proposal Sent",
    negotiation: "Negotiation", closed_won: "Closed Won",
    closed_lost: "Closed Lost", client: "Client",
  };

  const { error: logError } = await supabase.from("activity_log").insert({
    contact_id: contact.id,
    activity_type: "deal_stage_changed",
    description: `Stage changed from ${stageLabels[oldStage] || oldStage} to ${stageLabels[newStage] || newStage} (via Telegram)`,
    metadata: { old_stage: oldStage, new_stage: newStage, source: "telegram_bot" },
  });

  if (logError) {
    console.error("[TELEGRAM-WEBHOOK] Failed to log activity:", logError.message);
  }

  const name = [contact.first_name, contact.last_name].filter(Boolean).join(" ");
  return `Stage updated for <b>${escapeHtml(name)}</b>:\n${stageLabels[oldStage] || oldStage} -> ${stageLabels[newStage] || newStage}`;
}

function handleHelp(): string {
  return [
    "<b>SmartFirm AIOS Bot Commands</b>",
    "",
    "/pipeline - Pipeline summary (deals by stage)",
    "/leads - New leads from last 7 days",
    "/contacts &lt;name&gt; - Search contacts by name/company",
    "/status - CRM stats overview",
    "/addnote &lt;email&gt; &lt;note&gt; - Add a note to a contact",
    "/stage &lt;email&gt; &lt;stage&gt; - Change a contact's stage",
    "/help - Show this help message",
    "",
    "Stages: lead, subscriber, qualified, opportunity, proposal_sent, negotiation, closed_won, closed_lost, client",
  ].join("\n");
}

// ── Command Router ──────────────────────────────────────────

async function routeCommand(text: string): Promise<string> {
  const trimmed = text.trim();

  // Extract command and arguments
  // Handles both "/command" and "/command@BotName" formats
  const match = trimmed.match(/^\/(\w+)(?:@\w+)?\s*([\s\S]*)?$/);
  if (!match) {
    return "I didn't recognize that command. Type /help for available commands.";
  }

  const command = match[1].toLowerCase();
  const args = (match[2] || "").trim();

  switch (command) {
    case "pipeline":
      return handlePipeline();
    case "leads":
      return handleLeads();
    case "contacts":
    case "contact":
    case "search":
      return handleContacts(args);
    case "status":
    case "stats":
      return handleStatus();
    case "addnote":
    case "note":
      return handleAddNote(args);
    case "stage":
      return handleStage(args);
    case "help":
    case "start":
      return handleHelp();
    default:
      return `Unknown command: /${escapeHtml(command)}\n\nType /help for available commands.`;
  }
}

// ── Netlify Handler ─────────────────────────────────────────

const handler: Handler = async (event: HandlerEvent) => {
  // Always return 200 to Telegram to prevent retries
  const ok = { statusCode: 200, body: JSON.stringify({ ok: true }) };

  try {
    // Only accept POST requests
    if (event.httpMethod !== "POST") {
      console.log("[TELEGRAM-WEBHOOK] Non-POST request, ignoring");
      return ok;
    }

    // Validate webhook secret from query parameter
    const params = event.queryStringParameters || {};
    if (TELEGRAM_WEBHOOK_SECRET && params.secret !== TELEGRAM_WEBHOOK_SECRET) {
      console.warn("[TELEGRAM-WEBHOOK] Invalid webhook secret");
      return ok;
    }

    // Parse the Telegram update
    if (!event.body) {
      console.warn("[TELEGRAM-WEBHOOK] Empty body");
      return ok;
    }

    const update = JSON.parse(event.body);
    const message = update.message;

    if (!message || !message.text) {
      // Not a text message (could be an edit, callback, etc.). Ignore.
      return ok;
    }

    // Validate chat_id: only process messages from Katie
    const chatId = String(message.chat?.id || "");
    if (chatId !== TELEGRAM_CHAT_ID) {
      console.warn(`[TELEGRAM-WEBHOOK] Unauthorized chat_id: ${chatId}`);
      return ok;
    }

    console.log(`[TELEGRAM-WEBHOOK] Command received: ${message.text}`);

    // Route the command and send the response
    const response = await routeCommand(message.text);
    await sendTelegramMessage(response);

    return ok;
  } catch (err: any) {
    console.error("[TELEGRAM-WEBHOOK] Error:", err.message, err.stack);

    // Try to send an error message to Telegram
    try {
      await sendTelegramMessage(`Something went wrong processing your command. Error: ${escapeHtml(err.message || "Unknown error")}`);
    } catch {
      // If even the error message fails, just log it
    }

    // Always return 200 to Telegram
    return ok;
  }
};

export { handler };
