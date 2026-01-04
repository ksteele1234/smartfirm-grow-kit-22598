import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const DEFAULT_GOOGLE_SMARTPHONE_UA =
  "Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";

function json(data: unknown, init: ResponseInit = {}) {
  return new Response(JSON.stringify(data, null, 2), {
    ...init,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json; charset=utf-8",
      ...(init.headers ?? {}),
    },
  });
}

function isAllowedTarget(u: URL) {
  // Prevent SSRF: only allow checking your own site.
  return (u.protocol === "https:" || u.protocol === "http:") && u.hostname === "smartfirm.io";
}

function pickHeaders(headers: Headers) {
  const keep = new Set([
    "cache-control",
    "content-type",
    "content-length",
    "location",
    "server",
    "date",
    "age",
    "vary",
    "x-nf-request-id",
    "x-nf-site-id",
    "x-served-by",
    "via",
    "cf-ray",
    "cf-cache-status",
    "x-cache",
    "x-cache-hits",
  ]);

  const out: Record<string, string> = {};
  for (const [k, v] of headers.entries()) {
    const key = k.toLowerCase();
    if (keep.has(key)) out[key] = v;
  }
  return out;
}

async function probe(urlStr: string, ua: string, maxRedirects = 10) {
  const startUrl = new URL(urlStr);
  if (!isAllowedTarget(startUrl)) {
    return {
      error: "Only smartfirm.io URLs are allowed.",
      allowedHost: "smartfirm.io",
    };
  }

  const chain: Array<{
    url: string;
    status: number;
    headers: Record<string, string>;
  }> = [];

  let current = startUrl.toString();

  for (let i = 0; i <= maxRedirects; i++) {
    const res = await fetch(current, {
      method: "GET",
      redirect: "manual",
      headers: {
        "user-agent": ua,
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "accept-language": "en-US,en;q=0.9",
      },
    });

    const headers = pickHeaders(res.headers);
    chain.push({ url: current, status: res.status, headers });

    const location = res.headers.get("location");
    const isRedirect = res.status >= 300 && res.status < 400 && !!location;

    if (isRedirect) {
      const next = new URL(location!, current).toString();
      const nextUrl = new URL(next);
      if (!isAllowedTarget(nextUrl)) {
        return {
          error: "Redirected to a non-allowed host.",
          redirectedTo: next,
          chain,
        };
      }
      current = next;
      continue;
    }

    const text = await res.text();

    return {
      ok: res.ok,
      finalUrl: current,
      finalStatus: res.status,
      chain,
      bodyPreview: text.slice(0, 2000),
    };
  }

  return {
    error: `Exceeded max redirects (${maxRedirects}).`,
    chain,
  };
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const requestUrl = new URL(req.url);

    let target = requestUrl.searchParams.get("url") ?? "";
    let ua = requestUrl.searchParams.get("ua") ?? DEFAULT_GOOGLE_SMARTPHONE_UA;

    if (req.method === "POST") {
      const body = await req.json().catch(() => ({} as Record<string, unknown>));
      if (typeof body.url === "string") target = body.url;
      if (typeof body.ua === "string") ua = body.ua;
    }

    if (!target) {
      return json(
        {
          error: "Missing url",
          examples: [
            {
              method: "GET",
              url: "/functions/v1/url-probe?url=https://smartfirm.io/blog/accounting-firm-automation",
            },
            {
              method: "POST",
              body: { url: "https://smartfirm.io/blog/accounting-firm-automation" },
            },
          ],
        },
        { status: 400 },
      );
    }

    const result = await probe(target, ua, 10);
    const status = (result as { error?: string }).error ? 502 : 200;

    return json(
      {
        requestedAt: new Date().toISOString(),
        target,
        userAgent: ua,
        ...result,
      },
      { status },
    );
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return json({ error: msg }, { status: 500 });
  }
});

