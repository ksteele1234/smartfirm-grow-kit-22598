#!/usr/bin/env node
/**
 * Post-build prerendering script using puppeteer-core with Netlify's Chromium
 * This runs after vite build to generate static HTML for SEO-critical routes
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
  // Get Chrome path from Netlify plugin or skip if not available
  const executablePath = process.env.CHROME_PATH || process.env.PUPPETEER_EXECUTABLE_PATH;
  
  if (!executablePath) {
    console.log('[Prerender] No Chrome executable found (CHROME_PATH/PUPPETEER_EXECUTABLE_PATH not set)');
    console.log('[Prerender] Skipping prerendering - site will use client-side rendering');
    return;
  }

  console.log(`[Prerender] Using Chrome at: ${executablePath}`);
  
  let browser;
  try {
    browser = await puppeteer.launch({
      executablePath,
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--disable-web-security',
        '--disable-features=IsolateOrigins,site-per-process',
      ],
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
        
        // Determine output path
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
    console.log(`[Prerender] Complete: ${successCount} succeeded, ${errorCount} failed`);
    
  } catch (err) {
    console.error('[Prerender] Browser launch failed:', err.message);
    if (err.message.includes('Chrome') || err.message.includes('chromium') || err.message.includes('executable')) {
      console.error('[Prerender] Chrome executable not found or failed to launch');
    }
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

prerender().catch(err => {
  console.error('[Prerender] Fatal error:', err);
  // Don't fail the build if prerendering fails
  process.exit(0);
});
