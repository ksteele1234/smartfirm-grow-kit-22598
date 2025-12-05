#!/usr/bin/env node
/**
 * Post-build prerendering script using puppeteer-core with Netlify's Chromium plugin
 * This runs after vite build to generate static HTML for SEO-critical routes
 * HARDENED: Fails build loudly if Chrome is missing or prerendering fails
 */

const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

// SEO-critical routes to pre-render
const prerenderRoutes = [
  "/",
  "/about",
  "/contact",
  "/get-started",
  "/faq",
  "/solutions-expert-marketing-agency-for-accounting-firms",
  "/services/marketing-automation-for-accounting-firms",
  "/services/seo-for-accounting-firms",
  "/services/professional-website-design-for-accounting-firms",
  "/services/email-marketing-for-cpas",
  "/services/strategic-content-marketing-for-cpas",
  "/services/social-media-management-for-cpas",
  "/services/accounting-firm-technology-consulting",
  "/services/business-optimization-for-accounting-firms",
  "/services/ai-transformation-roadmap",
  "/services/single-process-ai-transformation",
  "/case-studies",
  "/case-studies/payroll-automation-roi",
];

const distPath = path.resolve(__dirname, '../dist');

async function prerender() {
  console.log('[Prerender] Starting prerender process...');
  
  // FAIL FAST if Chrome not available - do not skip silently
  const executablePath = process.env.CHROME_PATH;
  if (!executablePath) {
    throw new Error('[Prerender] CHROME_PATH not set. Chromium plugin missing or not loaded.');
  }
  
  console.log(`[Prerender] Using Chrome at: ${executablePath}`);
  
  const browser = await puppeteer.launch({
    executablePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  console.log(`[Prerender] Starting prerender for ${prerenderRoutes.length} routes...`);

  // Start a simple static server for the dist folder
  const { createServer } = require('http');
  const handler = require('serve-handler');
  
  const server = createServer((req, res) => {
    return handler(req, res, {
      public: distPath,
      rewrites: [{ source: '**', destination: '/index.html' }],
    });
  });

  await new Promise(resolve => server.listen(3000, resolve));
  console.log('[Prerender] Dev server started on port 3000');

  let successCount = 0;
  let errorCount = 0;

  for (const route of prerenderRoutes) {
    try {
      const page = await browser.newPage();
      const url = `http://localhost:3000${route}`;
      
      await page.goto(url, { 
        waitUntil: 'networkidle0',
        timeout: 30000,
      });

      // Wait for React to render
      await page.waitForSelector('#root', { timeout: 10000 });
      
      // Get the rendered HTML
      const html = await page.content();
      
      // Determine output path - writes to dist/<route>/index.html
      const outputPath = route === '/' 
        ? path.join(distPath, 'index.html')
        : path.join(distPath, route, 'index.html');
      
      // Ensure directory exists
      const outputDir = path.dirname(outputPath);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      // Write the prerendered HTML
      fs.writeFileSync(outputPath, html);
      console.log(`[Prerender] ✓ ${route}`);
      successCount++;
      
      await page.close();
    } catch (err) {
      console.error(`[Prerender] ✗ ${route}: ${err.message}`);
      errorCount++;
    }
  }

  server.close();
  await browser.close();
  
  console.log(`[Prerender] Complete: ${successCount} succeeded, ${errorCount} failed`);
  
  // Fail build if any routes failed to prerender
  if (errorCount > 0) {
    throw new Error(`[Prerender] ${errorCount} routes failed to prerender`);
  }
}

// FAIL THE BUILD if prerender fails - exit with code 1
prerender().catch(err => {
  console.error('[Prerender] Fatal error:', err.message);
  process.exit(1);
});
