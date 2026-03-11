// netlify/functions/haro-check.mts
// Netlify Scheduled Function: lightweight trigger that kicks off the background worker
//
// Problem: Scheduled functions have a 30-second timeout, but the HARO workflow
// takes 3-5+ minutes (95 queries x AI evaluation). Background functions get 15 minutes.
//
// Solution: This scheduled function just triggers haro-worker-background via HTTP.
// The background function returns 202 immediately and processes asynchronously.
//
// Schedule: weekdays at key times (UTC, converted from Pacific):
//   HARO 2:25 AM PDT = 9:25 UTC
//   SOS  3:45 AM PDT = 10:45 UTC
//   HARO 9:25 AM PDT = 16:25 UTC
//   SOS  10:45 AM PDT = 17:45 UTC
//   HARO 2:25 PM PDT = 21:25 UTC

import { schedule } from "@netlify/functions";

const handler = schedule("25 9,11,16,18,21 * * 1-5", async () => {
  const siteUrl = process.env.URL || process.env.DEPLOY_URL;

  if (!siteUrl) {
    console.error("[SCHEDULER] No site URL available (URL or DEPLOY_URL env vars)");
    return { statusCode: 500, body: "No site URL configured" };
  }

  const workerUrl = `${siteUrl}/.netlify/functions/haro-worker-background`;

  try {
    console.log(`[SCHEDULER] Triggering background worker at ${workerUrl}`);

    const response = await fetch(workerUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        trigger: "scheduled",
        timestamp: new Date().toISOString(),
      }),
    });

    // Background functions return 202 Accepted immediately
    console.log(`[SCHEDULER] Background worker triggered: HTTP ${response.status}`);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Background worker triggered",
        workerStatus: response.status,
      }),
    };
  } catch (err: any) {
    console.error(`[SCHEDULER] Failed to trigger worker:`, err.message);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
});

export { handler };
