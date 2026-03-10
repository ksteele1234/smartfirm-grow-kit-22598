import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// ---------------------------------------------------------------------------
// Generic Telegram notification Edge Function
// Accepts { message: string, parse_mode?: string } and sends via Telegram Bot API
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

    const message = typeof body?.message === "string" ? body.message.trim() : "";
    const parseMode = typeof body?.parse_mode === "string" ? body.parse_mode : undefined;

    if (!message) {
      return new Response(
        JSON.stringify({ success: false, error: "A non-empty 'message' field is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // ------------------------------------------------------------------
    // 2. Get Telegram credentials from environment
    // ------------------------------------------------------------------
    const telegramToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
    const telegramChatId = Deno.env.get("TELEGRAM_CHAT_ID");

    if (!telegramToken || !telegramChatId) {
      console.error("send-telegram-alert: missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
      return new Response(
        JSON.stringify({
          success: false,
          error: "Telegram credentials not configured. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.",
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // ------------------------------------------------------------------
    // 3. Send message via Telegram Bot API
    // ------------------------------------------------------------------
    const tgPayload: Record<string, string> = {
      chat_id: telegramChatId,
      text: message,
    };
    if (parseMode) {
      tgPayload.parse_mode = parseMode;
    }

    console.log("send-telegram-alert: sending message", {
      chat_id: telegramChatId,
      message_length: message.length,
      parse_mode: parseMode || "none",
    });

    const tgRes = await fetch(
      `https://api.telegram.org/bot${telegramToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tgPayload),
      },
    );

    if (!tgRes.ok) {
      const tgBody = await tgRes.text().catch(() => "");
      console.error("send-telegram-alert: Telegram API error", {
        status: tgRes.status,
        body: tgBody,
      });
      return new Response(
        JSON.stringify({
          success: false,
          error: `Telegram API returned ${tgRes.status}`,
          detail: tgBody,
        }),
        {
          status: 502,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    console.log("send-telegram-alert: message sent successfully");

    // ------------------------------------------------------------------
    // 4. Success response
    // ------------------------------------------------------------------
    return new Response(
      JSON.stringify({ success: true }),
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
    console.error("send-telegram-alert: unhandled error", msg, error);

    return new Response(
      JSON.stringify({ success: false, error: msg }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
