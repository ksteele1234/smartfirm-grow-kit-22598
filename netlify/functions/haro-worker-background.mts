// netlify/functions/haro-worker-background.mts
// Netlify Background Function: does the actual HARO/SOS processing
//
// Named with "-background" suffix so Netlify treats it as a background function
// (returns 202 immediately, runs for up to 15 minutes async).
//
// Workflow:
// 1. Fetch unread HARO/SOS emails from Gmail
// 2. Parse into individual reporter queries
// 3. AI-evaluate relevance (Claude API)
// 4. Draft responses for matches
// 5. Save drafts to Gmail
// 6. Send Telegram alert + email notification
// 7. Mark emails as processed

import type { Handler, HandlerEvent } from "@netlify/functions";
import { google } from "googleapis";
import Anthropic from "@anthropic-ai/sdk";

// ── Config ──────────────────────────────────────────────────

const CONFIG = {
  gmail: {
    clientId: process.env.GMAIL_CLIENT_ID!,
    clientSecret: process.env.GMAIL_CLIENT_SECRET!,
    redirectUri: process.env.GMAIL_REDIRECT_URI || "http://localhost:3000/auth/google/callback",
    refreshToken: process.env.GMAIL_REFRESH_TOKEN!,
    user: process.env.GMAIL_USER!,
  },
  anthropicApiKey: process.env.ANTHROPIC_API_KEY!,
  notificationEmail: process.env.NOTIFICATION_EMAIL!,
  telegram: {
    botToken: process.env.TELEGRAM_BOT_TOKEN || "",
    chatId: process.env.TELEGRAM_CHAT_ID || "",
  },
  timezone: process.env.TZ || "America/Los_Angeles",
  expert: {
    name: process.env.EXPERT_NAME || "Katie Steele",
    title: process.env.EXPERT_TITLE || "Founder & CEO",
    company: process.env.EXPERT_COMPANY || "SmartFirm.io",
    bio:
      process.env.EXPERT_BIO ||
      "Katie Steele is the Founder & CEO of SmartFirm.io, which provides human-first automation and marketing systems for accounting, bookkeeping, CPA, and tax preparation firms. She helps firms cut busywork, free up capacity, and improve client delivery so teams can grow without overwhelm. SmartFirm starts with a Business Process Audit & Roadmap, fixing workflows, internal handoffs, and communication before layering on automation and marketing. Services include automated intake and follow-up, client communication workflows, local SEO, AI-powered support bots, and lead capture and nurture systems. Before SmartFirm, Katie spent 10+ years as a management consultant specializing in business process reengineering, including leading Microsoft Dynamics 365 implementations for professional services firms. She also served as a turnaround consultant where she increased revenue 85% and reduced staff turnover 92% at a hospitality property, and advised a private equity group on portfolio companies with ~$30M in annual revenue. She holds a B.S. from the Cornell School of Hotel Administration and an M.A. from CUNY Graduate Center.",
  },
};

// ── Gmail ───────────────────────────────────────────────────

function getGmailClient() {
  const oauth2Client = new google.auth.OAuth2(
    CONFIG.gmail.clientId,
    CONFIG.gmail.clientSecret,
    CONFIG.gmail.redirectUri
  );
  oauth2Client.setCredentials({ refresh_token: CONFIG.gmail.refreshToken });
  return google.gmail({ version: "v1", auth: oauth2Client });
}

interface EmailMessage {
  id: string;
  threadId: string;
  from: string;
  to: string;
  subject: string;
  date: string;
  body: string;
}

async function getUnreadHaroEmails(): Promise<EmailMessage[]> {
  const gmail = getGmailClient();

  const query = [
    "is:unread",
    "(",
    "from:haro@helpareporter.com",
    "OR from:pitches@helpareporter.com",
    'OR subject:"HARO"',
    'OR subject:"Help a Reporter"',
    "OR from:sourceofsources.com",
    "OR from:peter@shankman.com",
    'OR subject:"Source of Sources"',
    ")",
  ].join(" ");

  const res = await gmail.users.messages.list({
    userId: "me",
    q: query,
    maxResults: 10,
  });

  if (!res.data.messages || res.data.messages.length === 0) return [];

  const emails: EmailMessage[] = [];
  for (const msg of res.data.messages) {
    const full = await gmail.users.messages.get({
      userId: "me",
      id: msg.id!,
      format: "full",
    });
    emails.push(parseGmailMessage(full.data));
  }
  return emails;
}

function parseGmailMessage(message: any): EmailMessage {
  const headers = message.payload.headers;
  const getHeader = (name: string) =>
    headers.find((h: any) => h.name.toLowerCase() === name.toLowerCase())?.value || "";

  let body = "";
  if (message.payload.body?.data) {
    body = Buffer.from(message.payload.body.data, "base64").toString("utf-8");
  } else if (message.payload.parts) {
    const textPart = message.payload.parts.find((p: any) => p.mimeType === "text/plain");
    const htmlPart = message.payload.parts.find((p: any) => p.mimeType === "text/html");
    const part = textPart || htmlPart;
    if (part?.body?.data) {
      body = Buffer.from(part.body.data, "base64").toString("utf-8");
    }
  }

  return {
    id: message.id,
    threadId: message.threadId,
    from: getHeader("From"),
    to: getHeader("To"),
    subject: getHeader("Subject"),
    date: getHeader("Date"),
    body,
  };
}

async function createDraftReply({
  to,
  subject,
  body,
  inReplyTo,
  threadId,
}: {
  to: string;
  subject: string;
  body: string;
  inReplyTo?: string;
  threadId?: string;
}) {
  const gmail = getGmailClient();
  const replySubject = subject.startsWith("Re:") ? subject : `Re: ${subject}`;

  const rawMessage = [
    `From: ${CONFIG.gmail.user}`,
    `To: ${to}`,
    `Subject: ${replySubject}`,
    inReplyTo ? `In-Reply-To: ${inReplyTo}` : "",
    inReplyTo ? `References: ${inReplyTo}` : "",
    "Content-Type: text/plain; charset=UTF-8",
    "",
    body,
  ]
    .filter(Boolean)
    .join("\r\n");

  const encodedMessage = Buffer.from(rawMessage)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const draft = await gmail.users.drafts.create({
    userId: "me",
    requestBody: { message: { raw: encodedMessage, threadId: threadId || undefined } },
  });

  console.log(`[GMAIL] Draft created: ${draft.data.id}`);
  return draft.data;
}

async function markAsRead(messageId: string) {
  const gmail = getGmailClient();
  await gmail.users.messages.modify({
    userId: "me",
    id: messageId,
    requestBody: { removeLabelIds: ["UNREAD"] },
  });
}

async function addLabel(messageId: string, labelName: string) {
  const gmail = getGmailClient();
  const labelsRes = await gmail.users.labels.list({ userId: "me" });
  let label = labelsRes.data.labels?.find((l: any) => l.name === labelName);

  if (!label) {
    const created = await gmail.users.labels.create({
      userId: "me",
      requestBody: { name: labelName, labelListVisibility: "labelShow", messageListVisibility: "show" },
    });
    label = created.data;
  }

  await gmail.users.messages.modify({
    userId: "me",
    id: messageId,
    requestBody: { addLabelIds: [label!.id!] },
  });
}

// ── HARO Parser ─────────────────────────────────────────────

interface HaroQuery {
  category: string;
  summary: string;
  fullText: string;
  reporterName: string;
  outlet: string;
  deadline: string;
  requirements: string;
  contactEmail: string;
  sourceEmail: string;
  _emailId?: string;
  _threadId?: string;
  _emailFrom?: string;
  _emailSubject?: string;
}

function stripHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<\/div>/gi, "\n")
    .replace(/<\/tr>/gi, "\n")
    .replace(/<\/li>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function extractField(text: string, pattern: RegExp): string | null {
  const match = text.match(pattern);
  return match ? match[1].trim() : null;
}

function extractFirstSentence(text: string): string {
  const cleaned = text.replace(/\n/g, " ").trim();
  const match = cleaned.match(/^(.{20,200}?[.!?])\s/);
  return match ? match[1] : cleaned.substring(0, 200);
}

function extractQueryFromSection(section: string): HaroQuery | null {
  const text = section.trim();
  if (text.length < 30) return null;

  const category = extractField(text, /category[:\s]+(.+)/i) || extractField(text, /topic[:\s]+(.+)/i) || "";
  const summary =
    extractField(text, /summary[:\s]+(.+)/i) ||
    extractField(text, /subject[:\s]+(.+)/i) ||
    extractField(text, /query[:\s]+(.+)/i) ||
    extractFirstSentence(text);
  const reporterName = extractField(text, /(?:reporter|journalist|name)[:\s]+(.+)/i) || extractField(text, /(?:from|by)[:\s]+(.+)/i) || "";
  const outlet = extractField(text, /(?:outlet|publication|media|for)[:\s]+(.+)/i) || "";
  const deadline = extractField(text, /(?:deadline|due|respond by|date)[:\s]+(.+)/i) || "";
  const requirements = extractField(text, /(?:requirements?|looking for|seeking|needs?)[:\s]+(.+)/i) || "";
  const emailMatch = text.match(/[\w.+-]+@[\w-]+\.[\w.]+/);

  return {
    category: category.trim(),
    summary: summary.trim(),
    fullText: text,
    reporterName: reporterName.trim(),
    outlet: outlet.trim(),
    deadline: deadline.trim(),
    requirements: requirements.trim(),
    contactEmail: emailMatch ? emailMatch[0] : "",
    sourceEmail: "",
  };
}

function parseHaroEmail(emailBody: string, emailSubject: string = ""): HaroQuery[] {
  const queries: HaroQuery[] = [];
  const text = stripHtml(emailBody);

  // Try splitting by common separators
  const separators = [/\n-{3,}\n/g, /\n\*{3,}\n/g, /\n={3,}\n/g, /\n_{3,}\n/g, /\nQuery\s*#?\d+/gi, /\n\d+\.\s+(?=[A-Z])/g, /\n(?=Category:)/gi, /\n(?=Summary:)/gi];

  let sections: string[] = [text];
  for (const sep of separators) {
    const parts = text.split(sep).filter((s) => s.trim().length > 30);
    if (parts.length > 1) {
      sections = parts;
      break;
    }
  }

  for (const section of sections) {
    const query = extractQueryFromSection(section);
    if (query && query.summary) {
      query.sourceEmail = emailSubject;
      queries.push(query);
    }
  }

  if (queries.length === 0 && text.trim().length > 50) {
    queries.push({
      category: "",
      summary: text.substring(0, 200).trim(),
      fullText: text.trim(),
      reporterName: "",
      outlet: "",
      deadline: "",
      requirements: "",
      contactEmail: "",
      sourceEmail: emailSubject,
    });
  }

  return queries;
}

// ── AI Evaluator ────────────────────────────────────────────

function extractText(response: any): string | null {
  if (!response) return null;
  const content = response.content;
  if (Array.isArray(content) && content.length === 0) return null;
  if (Array.isArray(content) && content.length > 0) {
    const block = content[0];
    if (typeof block === "string") return block;
    if (block.text) return block.text;
  }
  if (typeof content === "string") return content;
  return null;
}

async function evaluateRelevance(query: HaroQuery, anthropic: Anthropic) {
  const prompt = `You are a strict filter deciding if a reporter's HARO query is worth responding to for a specific expert.

EXPERT: ${CONFIG.expert.name}, ${CONFIG.expert.title} at ${CONFIG.expert.company}
WHAT THEY DO: Marketing and workflow automation specifically for accounting, bookkeeping, CPA, and tax preparation firms.

THE QUERY MUST be directly about one of these topics to score above 50:
- Marketing, SEO, lead generation, or client acquisition for professional services (especially accounting/CPA/tax/bookkeeping firms)
- Business process automation, workflow automation, or AI tools for small businesses or professional services
- Running, growing, or scaling an accounting/bookkeeping/CPA/tax firm
- Technology adoption, digital transformation, or SaaS tools for small professional services firms
- Women founders, women in tech, or bootstrapping a business (only if the query specifically asks for this angle)
- Turnaround management or business consulting (only if the query specifically asks for this)

REJECT (score 0, relevant false) if:
- The topic is only tangentially related
- You have to stretch to make a connection
- The query is about a field the expert doesn't directly work in
- The expert could technically answer but wouldn't be the RIGHT expert

Be strict. If you're on the fence, reject it.

REPORTER'S QUERY:
${query.fullText || query.summary}

Respond in this exact JSON format (no markdown, no code fences):
If not relevant: {"relevant": false, "score": 0}
If relevant: {"relevant": true, "score": 50-100, "reason": "One sentence on why this is a strong fit"}`;

  try {
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 200,
      messages: [{ role: "user", content: prompt }],
    });

    const text = extractText(response);
    if (!text) return { relevant: false, score: 0 };

    const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    return JSON.parse(cleaned);
  } catch {
    return { relevant: false, score: 0 };
  }
}

async function draftResponse(query: HaroQuery, anthropic: Anthropic) {
  const prompt = `A reporter posted a HARO query. Katie Steele (Founder & CEO of SmartFirm.io, marketing and workflow automation for accounting/CPA/bookkeeping/tax firms) is going to respond. Create a RESPONSE OUTLINE she can use.

REPORTER'S QUERY:
Category: ${query.category || "Not specified"}
Summary: ${query.summary || "Not specified"}
Full query: ${query.fullText || query.summary}
Reporter: ${query.reporterName || "Not specified"}
Outlet: ${query.outlet || "Not specified"}
Requirements: ${query.requirements || "Not specified"}

KATIE'S BACKGROUND:
${CONFIG.expert.bio}

Generate the outline in this format:

TO: [reporter name if known]
RE: [which query this responds to]
OUTLET: [publication if known]
DEADLINE: [deadline if mentioned]

SUGGESTED ANGLE:
[1-2 sentences on Katie's unique perspective]

OUTLINE:
1. OPEN: [how to open]
2. MAIN POINT: [single most important thing]
3. SUPPORTING POINT: [strengthening point]
4. PERSONAL STORY PROMPT: [specific prompt for Katie]
5. CLOSE: [how to wrap up]

QUOTABLE SOUNDBITE IDEAS:
[2-3 punchy phrases]

SIGNATURE:
Katie Steele
Founder & CEO, SmartFirm.io
smartfirm.io | linkedin.com/in/katiesteele
steelekatie3@gmail.com`;

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-5-20250929",
    max_tokens: 800,
    messages: [{ role: "user", content: prompt }],
  });

  const text = extractText(response);
  if (!text) throw new Error("Empty response");
  return text.trim();
}

// ── Telegram ────────────────────────────────────────────────

async function sendTelegramAlert(results: any[], skippedCount: number) {
  const { botToken, chatId } = CONFIG.telegram;
  if (!botToken || !chatId) return;
  if (results.length === 0) return;

  const matchList = results
    .map((r: any, i: number) => {
      const outlet = r.query.outlet ? ` (${r.query.outlet})` : "";
      return `${i + 1}. <b>${escapeHtml(r.query.summary.substring(0, 80))}</b>${outlet}\n   Score: ${r.evaluation.score}/100`;
    })
    .join("\n\n");

  const message = `<b>HARO/SOS Alert</b>\n${results.length} match${results.length === 1 ? "" : "es"} found (${skippedCount} skipped)\n\n${matchList}\n\nDrafts are in your Gmail. Review and send!`;

  try {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: "HTML", disable_web_page_preview: true }),
    });
    console.log("[TELEGRAM] Alert sent");
  } catch (err: any) {
    console.error("[TELEGRAM] Failed:", err.message);
  }
}

// ── Email Notification ──────────────────────────────────────

async function sendNotificationEmail(results: any[], totalQueries: number, skippedCount: number) {
  if (results.length === 0) return;

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.log("[EMAIL] No RESEND_API_KEY, skipping email notification");
    return;
  }

  const queryRows = results
    .map(
      (r: any, i: number) =>
        `<tr style="border-bottom:1px solid #e0e0e0"><td style="padding:12px;vertical-align:top"><strong style="color:#0A7265">${i + 1}. ${escapeHtml(r.query.summary.substring(0, 100))}</strong><br/><span style="color:#666;font-size:13px">${r.query.outlet ? `Outlet: ${escapeHtml(r.query.outlet)} | ` : ""}${r.query.reporterName ? `Reporter: ${escapeHtml(r.query.reporterName)} | ` : ""}${r.query.deadline ? `Deadline: ${escapeHtml(r.query.deadline)}` : ""}</span><br/><span style="color:#333;font-size:13px">Relevance: <strong>${r.evaluation.score}/100</strong></span><br/><br/><span style="font-size:13px;color:#444"><strong>Draft preview:</strong><br/>${escapeHtml(r.draftText.substring(0, 200))}...</span></td></tr>`
    )
    .join("");

  const html = `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:640px;margin:0 auto;color:#333"><div style="background:#0A7265;color:white;padding:20px;border-radius:8px 8px 0 0"><h2 style="margin:0">HARO/SOS Response Drafts Ready</h2><p style="margin:8px 0 0;opacity:0.9">${results.length} relevant match${results.length === 1 ? "" : "es"} out of ${totalQueries} total${skippedCount > 0 ? ` (${skippedCount} skipped)` : ""}</p></div><div style="background:#f8f9fa;padding:16px;border-left:1px solid #e0e0e0;border-right:1px solid #e0e0e0"><p style="margin:0;color:#666;font-size:14px">Draft responses have been saved to your Gmail Drafts folder. Review each one, personalize if needed, and hit send.</p></div><table style="width:100%;border-collapse:collapse;border:1px solid #e0e0e0">${queryRows}</table><div style="background:#f8f9fa;padding:16px;border:1px solid #e0e0e0;border-radius:0 0 8px 8px"><p style="margin:0;font-size:13px;color:#888">Processed at ${new Date().toLocaleString("en-US", { timeZone: CONFIG.timezone })}<br/>Powered by SmartFirm AIOS</p></div></div>`;

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "SmartFirm AIOS <notifications@smartfirm.io>",
        to: [CONFIG.notificationEmail],
        subject: `HARO Alert: ${results.length} match${results.length === 1 ? "" : "es"} ready for review`,
        html,
      }),
    });
    console.log("[EMAIL] Notification sent via Resend");
  } catch (err: any) {
    console.error("[EMAIL] Failed:", err.message);
  }
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// ── Main Workflow ───────────────────────────────────────────

async function runHaroWorkflow() {
  const startTime = Date.now();
  console.log(`[HARO] Workflow started at ${new Date().toISOString()}`);

  // Step 1: Fetch unread emails
  console.log("[HARO] Fetching unread HARO/SOS emails...");
  const emails = await getUnreadHaroEmails();

  if (emails.length === 0) {
    console.log("[HARO] No unread HARO/SOS emails. Done.");
    return { success: true, emailsFound: 0, queriesFound: 0, draftsCreated: 0 };
  }
  console.log(`[HARO] Found ${emails.length} unread email(s)`);

  // Step 2: Parse into queries
  const allQueries: HaroQuery[] = [];
  for (const email of emails) {
    const queries = parseHaroEmail(email.body, email.subject);
    console.log(`[HARO] "${email.subject}" -> ${queries.length} queries`);
    for (const q of queries) {
      q._emailId = email.id;
      q._threadId = email.threadId;
      q._emailFrom = email.from;
      q._emailSubject = email.subject;
    }
    allQueries.push(...queries);
  }
  console.log(`[HARO] Total queries: ${allQueries.length}`);

  if (allQueries.length === 0) {
    for (const email of emails) {
      await markAsRead(email.id);
      await addLabel(email.id, "HARO-Processed");
    }
    return { success: true, emailsFound: emails.length, queriesFound: 0, draftsCreated: 0 };
  }

  // Step 3-4: AI evaluate and draft
  const anthropic = new Anthropic({ apiKey: CONFIG.anthropicApiKey });
  const results: any[] = [];

  for (const query of allQueries) {
    console.log(`[AI] Evaluating: "${query.summary.substring(0, 60)}..."`);
    const evaluation = await evaluateRelevance(query, anthropic);

    if (!evaluation.relevant || evaluation.score < 50) {
      console.log(`[AI] Skip (score: ${evaluation.score})`);
      continue;
    }

    console.log(`[AI] MATCH (score: ${evaluation.score})`);
    try {
      const draftText = await draftResponse(query, anthropic);
      results.push({ query, evaluation, draftText });
    } catch (err: any) {
      console.error(`[AI] Draft failed:`, err.message);
    }
    // Small delay between AI calls to avoid rate limiting
    await new Promise((r) => setTimeout(r, 500));
  }

  const skippedCount = allQueries.length - results.length;

  // Step 5: Create Gmail drafts
  for (const result of results) {
    try {
      const replyTo = result.query.contactEmail || result.query._emailFrom;
      await createDraftReply({
        to: replyTo,
        subject: result.query._emailSubject || `Re: ${result.query.summary.substring(0, 60)}`,
        body: result.draftText,
        threadId: result.query._threadId,
      });
    } catch (err: any) {
      console.error(`[HARO] Draft failed:`, err.message);
    }
  }

  // Step 6: Send notifications
  await sendNotificationEmail(results, allQueries.length, skippedCount);
  await sendTelegramAlert(results, skippedCount);

  // Step 7: Mark processed
  for (const email of emails) {
    try {
      await markAsRead(email.id);
      await addLabel(email.id, "HARO-Processed");
    } catch (err: any) {
      console.error(`[HARO] Label failed:`, err.message);
    }
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`[HARO] Done in ${elapsed}s: ${emails.length} emails -> ${allQueries.length} queries -> ${results.length} drafts`);

  return { success: true, emailsFound: emails.length, queriesFound: allQueries.length, draftsCreated: results.length, skipped: skippedCount };
}

// ── Netlify Background Handler ──────────────────────────────
// Background functions return 202 immediately and run async for up to 15 minutes

const handler: Handler = async (event: HandlerEvent) => {
  console.log("[HARO-WORKER] Background function invoked");

  try {
    const result = await runHaroWorkflow();
    console.log("[HARO-WORKER] Result:", JSON.stringify(result));
    // Note: for background functions, the return value is logged but not sent to the caller
    return { statusCode: 200, body: JSON.stringify(result) };
  } catch (err: any) {
    console.error("[HARO-WORKER] Workflow failed:", err.message, err.stack);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};

export { handler };
