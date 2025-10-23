import { test, expect } from "@playwright/test";

test.describe("Forms & analytics smoke", () => {
  test("Get Started embeds booking form and loads analytics", async ({ page }) => {
    await page.goto("/get-started", { waitUntil: "networkidle" });

    // Confirm LeadConnector script injects iframe
    await expect(
      page.frameLocator('iframe[src*="leadconnectorhq"]').locator("body")
    ).toBeVisible({ timeout: 15000 });

    // Check GTM / GA beacon (look for GTM or Google Analytics requests)
    const hasAnalyticsRequest = await captureAnalyticsRequest(page);
    expect(
      hasAnalyticsRequest,
      "Expected at least one GTM/GA analytics request on get-started"
    ).toBeTruthy();
  });

  test("Contact page embeds contact form", async ({ page }) => {
    await page.goto("/contact", { waitUntil: "networkidle" });

    await expect(
      page.frameLocator('iframe[src*="leadconnectorhq"]').locator("body")
    ).toBeVisible({ timeout: 15000 });
  });
});

async function captureAnalyticsRequest(page) {
  return new Promise<boolean>((resolve) => {
    const analyticsHosts = [
      "www.googletagmanager.com",
      "www.google-analytics.com",
      "gtm.smartfirm.io",
    ];

    const listener = (request) => {
      try {
        const url = new URL(request.url());
        if (analyticsHosts.some((host) => url.hostname.includes(host))) {
          page.off("request", listener);
          resolve(true);
        }
      } catch {
        // ignore malformed URLs
      }
    };

    page.on("request", listener);
    // If nothing matched after timeout, resolve false
    setTimeout(() => {
      page.off("request", listener);
      resolve(false);
    }, 10000);
  });
}
