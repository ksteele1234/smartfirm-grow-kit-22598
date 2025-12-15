import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const webhookUrl =
  "https://services.leadconnectorhq.com/hooks/HWYLT2eSYyS0OaDGKN2O/webhook-trigger/e6d26e85-1ed3-4550-add5-2882f05329ef";

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ success: false, error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json().catch(() => null);

    const emailRaw = typeof body?.email === "string" ? body.email.trim() : "";
    const clientCount = Number.isFinite(body?.client_count) ? Number(body.client_count) : Number.parseInt(String(body?.client_count ?? "0"), 10);
    const avgFee = Number.isFinite(body?.avg_fee) ? Number(body.avg_fee) : Number.parseInt(String(body?.avg_fee ?? "2500"), 10);
    const calculatedRevenue = Number.isFinite(body?.calculated_revenue)
      ? Number(body.calculated_revenue)
      : Number.parseInt(String(body?.calculated_revenue ?? "0"), 10);
    const source = typeof body?.source === "string" ? body.source.trim().slice(0, 100) : "calculator-lead-magnet";

    if (!emailRaw || emailRaw.length > 255 || !isValidEmail(emailRaw)) {
      return new Response(JSON.stringify({ success: false, error: "Invalid email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!Number.isFinite(clientCount) || clientCount < 0 || clientCount > 1_000_000) {
      return new Response(JSON.stringify({ success: false, error: "Invalid client_count" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!Number.isFinite(avgFee) || avgFee < 0 || avgFee > 1_000_000) {
      return new Response(JSON.stringify({ success: false, error: "Invalid avg_fee" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!Number.isFinite(calculatedRevenue) || calculatedRevenue < 0 || calculatedRevenue > 100_000_000_000) {
      return new Response(JSON.stringify({ success: false, error: "Invalid calculated_revenue" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const emailDomain = emailRaw.includes("@") ? emailRaw.split("@")[1] : "";

    console.log("ghl-reactivation-webhook: forwarding lead", {
      client_count: clientCount,
      avg_fee: avgFee,
      calculated_revenue: calculatedRevenue,
      source,
      email_domain: emailDomain,
      ip: req.headers.get("x-forwarded-for") ?? req.headers.get("cf-connecting-ip") ?? "unknown",
    });

    const forwardPayload = {
      email: emailRaw,
      client_count: clientCount,
      avg_fee: avgFee,
      calculated_revenue: calculatedRevenue,
      source,
      timestamp: new Date().toISOString(),
    };

    const resp = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(forwardPayload),
    });

    const responseText = await resp.text().catch(() => "");

    console.log("ghl-reactivation-webhook: webhook response", {
      status: resp.status,
      ok: resp.ok,
      response_preview: responseText.slice(0, 200),
    });

    return new Response(
      JSON.stringify({
        success: resp.ok,
        status: resp.status,
        webhook_response: responseText,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    console.error("ghl-reactivation-webhook: error", msg);

    return new Response(JSON.stringify({ success: false, error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
