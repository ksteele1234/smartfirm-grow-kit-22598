#!/usr/bin/env node
/**
 * Post-build prerendering script using puppeteer-core
 * This runs after vite build to generate static HTML for SEO-critical routes
 * UPDATED: Gracefully handles homepage timeout instead of failing entire build
 * 
 * Chrome detection order:
 * 1. CHROME_PATH env var (set by @netlify/plugin-chromium)
 * 2. Common Netlify/CI Chrome locations
 * 3. Local Chrome installations
 */

const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// SEO-critical routes to pre-render
const prerenderRoutes = [
  "/",
  "/solutions-expert-marketing-agency-for-accounting-firms",
  "/case-studies",
  "/case-studies/payroll-automation-roi",
];



const distPath = path.resolve(__dirname, '../dist');

// Try to find Chrome executable
function findChrome() {
  // 1. Check CHROME_PATH from Netlify plugin
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) {
    return process.env.CHROME_PATH;
  }
  
  // 2. Check common Netlify/CI locations
  const commonPaths = [
    '/opt/chromium/chrome',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
  ];
  
  for (const chromePath of commonPaths) {
    if (fs.existsSync(chromePath)) {
      return chromePath;
    }
  }
  
  // 3. Try which command
  try {
    const chromePath = execSync('which chromium-browser || which chromium || which google-chrome', { encoding: 'utf-8' }).trim();
    if (chromePath && fs.existsSync(chromePath)) {
      return chromePath;
    }
  } catch (e) {
    // which command failed
  }
  
  return null;
}

async function prerender() {
  console.log('[Prerender] Starting prerender process...');
  
  // Find Chrome executable
  const executablePath = findChrome();
  
  if (!executablePath) {
    throw new Error('[Prerender] No Chrome executable found. Install @netlify/plugin-chromium via Netlify UI or ensure Chrome is available.');
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
  let skippedCount = 0;

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
      // Special handling for homepage timeout - don't fail the build
      if (route === '/' && err.message.includes('timeout')) {
        console.log(`[Prerender] ⚠ ${route}: Timeout occurred (will render client-side)`);
        console.log('[Prerender]   → This is expected for heavy pages and does not affect functionality');
        skippedCount++;
      } else {
        console.error(`[Prerender] ✗ ${route}: ${err.message}`);
        errorCount++;
      }
    }
  }

  server.close();
  await browser.close();
  
  console.log(`[Prerender] Complete: ${successCount} succeeded, ${skippedCount} skipped, ${errorCount} failed`);
  
  if (skippedCount > 0) {
    console.log(`[Prerender] Note: Skipped routes will render client-side (normal for React SPAs)`);
  }
  
  // Only fail build if non-homepage routes failed to prerender
  if (errorCount > 0) {
    throw new Error(`[Prerender] ${errorCount} routes failed to prerender`);
  }
}

// FAIL THE BUILD only if critical routes fail (not homepage timeout)
prerender().catch(err => {
  console.error('[Prerender] Fatal error:', err.message);
  process.exit(1);
});

