#!/usr/bin/env node
/**
 * Post-build prerendering script using puppeteer-core
 * This runs after vite build to generate static HTML for SEO-critical routes
 * UPDATED: Gracefully handles homepage timeout instead of failing entire build
 * UPDATED: Dynamically generates FAQ routes from faqContent.ts source of truth
 * UPDATED: Fixed path.join bug for routes starting with /
 * UPDATED: Imports deprecated slugs from Single Source of Truth
 * 
 * Chrome detection order:
 * 1. CHROME_PATH env var (set by @netlify/plugin-chromium)
 * 2. Common Netlify/CI Chrome locations
 * 3. Local Chrome installations
 */

const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');
const http = require('http');
const handler = require('serve-handler');

// Import deprecated slugs from Single Source of Truth
const { ALL_DEPRECATED_FAQ_SLUGS } = require('../src/config/deprecatedFaqSlugs.cjs');

const prerenderRoutes = [
  // Homepage
  "/",

  // Main Navigation Pages
  "/solutions",
  "/services",
  "/all-services",
  "/industries",
  "/resources",
  "/about",
  "/contact",
  "/get-started",
  "/quick-start",

  // Solution Pages
  "/solutions/scale-accounting-firm-successfully",
  "/solutions/stop-losing-clients-to-tech-savvy-cpas",
  "/solutions/get-more-referrals-without-asking",
  "/solutions/work-less-earn-more",
  "/solutions/grow-without-growing-pains",
  "/solutions/protect-practice-and-future",

  // Service Pages
  "/services/ai-transformation-roadmap",
  "/services/single-process-ai-transformation",
  "/services/marketing-automation-for-accounting-firms",
  "/services/accounting-firm-technology-consulting",
  "/services/business-optimization-for-accounting-firms",
  "/services/fractional-cio-for-accounting-firms",
  "/services/automated-lead-follow-up-for-cpas",
  "/services/automated-review-generation-for-cpas",
  "/services/seo-for-accounting-firms",
  "/services/social-media-management-for-cpas",
  "/services/email-marketing-for-cpas",
  "/services/professional-website-design-for-accounting-firms",
  "/services/strategic-content-marketing-for-cpas",
  "/services/reputation-management-for-cpas",
  "/services/marketing-strategy-integration-for-accounting-firms",
  "/services/add-ons",

  // Industry Pages
  "/industries/tax-preparation-marketing-solutions",
  "/industries/bookkeeping-services-marketing-automation",
  "/industries/business-advisory-marketing-services",
  "/industries/audit-assurance-marketing-agency",

  // Tools & Calculators
  "/tools",
  "/tools/efficiency-quiz",
  "/tools/marketing-scorecard",
  "/tools/roi-calculator",
  "/tools/automation-readiness-quiz",
  "/tools/workflow-bottleneck-finder",
  "/tools/tech-stack-roi-calculator",
  "/tools/client-lifetime-value-calculator",
  "/tools/lead-generation-scorecard",
  "/tools/modern-firm-quiz",
  "/tools/growth-potential-scorecard",
  "/tools/seo-audit",
  "/tools/page-grader",
  "/tools/advanced-seo-qa",

  // Funnel Pages
  "/growth-calculator",

  // Case Studies
  "/case-studies",
  "/case-studies/payroll-automation-roi",

  // Blog (needs prerendering to get correct canonical)
  "/blog",

  // Legal Pages
  "/privacy",
  "/terms",
  "/cookies",
  "/faq",
];

/**
 * Dynamically fetch blog tags from Supabase for prerendering
 * This ensures tag pages get correct canonical URLs
 */
async function fetchBlogTagSlugs() {
  const baseUrl = process.env.VITE_SUPABASE_URL;
  const anonKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || 
                  process.env.VITE_SUPABASE_ANON_KEY ||
                  process.env.SUPABASE_ANON_KEY;
  
  if (!baseUrl || !anonKey) {
    console.log('[Prerender] Blog tags: missing env vars, skipping tag routes');
    return [];
  }
  
  try {
    const url = new URL(`${baseUrl}/rest/v1/blog_tags`);
    url.searchParams.set('select', 'slug');
    
    const res = await fetch(url.toString(), {
      headers: {
        apikey: anonKey,
        authorization: `Bearer ${anonKey}`,
      },
    });
    
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    
    const rows = await res.json();
    const slugs = Array.isArray(rows) ? rows.map(r => r.slug) : [];
    console.log(`[Prerender] Extracted ${slugs.length} blog tag slugs`);
    return slugs.map(slug => `/blog/tags/${slug}`);
  } catch (e) {
    console.log(`[Prerender] Blog tags: failed to fetch (${e.message || e})`);
    return [];
  }
}

/**
 * Dynamically extract all FAQ slugs from faqContent.ts
 * This ensures prerendering stays in sync with the source of truth
 */
function extractFaqSlugsFromSource() {
  const faqContentPath = path.resolve(__dirname, '../src/data/faqContent.ts');
  
  if (!fs.existsSync(faqContentPath)) {
    console.error('[Prerender] ERROR: faqContent.ts not found at', faqContentPath);
    process.exit(1);
  }
  
  const content = fs.readFileSync(faqContentPath, 'utf-8');
  
  // Extract all slug values from the file using regex
  // Matches: slug: "some-slug-value"
  const slugRegex = /slug:\s*["']([^"']+)["']/g;
  const allSlugs = [];
  const filteredOut = [];
  let match;
  
  // Known ACTIVE category slugs to exclude (these are not individual FAQ pages)
  const activeCategorySlugs = new Set([
    'getting-started',
    'industries', 
    'client-retention',
    'scale-firm',
    'work-less-earn-more',
    'stop-losing-clients-tech-savvy',
    'referrals',
    'online-visibility',
    'marketing-automation',
    'technology',
    'workflow-automation',
    'ai-transformation',
    'pricing-budgeting',
    'advisory-services',
    'referrals-reviews',
    'online-visibility-seo',
    'lead-generation',
    'client-experience',
    'pricing-billing',
    'technology-implementation',
    'business-advisory',
  ]);
  
  // Combine active categories + deprecated slugs for complete exclusion
  const allExcludedSlugs = new Set([
    ...activeCategorySlugs,
    ...ALL_DEPRECATED_FAQ_SLUGS, // From Single Source of Truth
  ]);
  
  while ((match = slugRegex.exec(content)) !== null) {
    const slug = match[1];
    
    // Skip all excluded slugs (active categories + deprecated)
    if (allExcludedSlugs.has(slug)) {
      filteredOut.push({ slug, reason: 'excluded (category or deprecated)' });
      continue;
    }
    
    // All remaining slugs with hyphens are FAQ question slugs
    if (slug.includes('-')) {
      allSlugs.push(slug);
    } else {
      filteredOut.push({ slug, reason: 'no hyphen (likely not a question slug)' });
    }
  }
  
  // Remove duplicates (in case any appear in multiple places)
  const uniqueSlugs = [...new Set(allSlugs)];
  
  // Log extracted vs filtered for debugging
  console.log(`[Prerender] Extracted ${uniqueSlugs.length} FAQ slugs from faqContent.ts`);
  console.log(`[Prerender] Excluded ${filteredOut.length} slugs (${ALL_DEPRECATED_FAQ_SLUGS.length} deprecated + active categories)`);
  if (filteredOut.length > 0 && filteredOut.length <= 30) {
    filteredOut.forEach(({ slug, reason }) => {
      console.log(`  - "${slug}" (${reason})`);
    });
  }
  
  return uniqueSlugs.map(slug => `/faq/${slug}`);
}

// Generate FAQ routes dynamically from source
const faqRoutes = extractFaqSlugsFromSource();

const distPath = path.resolve(__dirname, '../dist');

/**
 * Get environment variable, checking both with and without VITE_ prefix
 */
function getEnv(name) {
  return process.env[name] || process.env[`VITE_${name}`];
}

/**
 * Fetch published blog post slugs from Supabase
 */
async function fetchPublishedBlogSlugs() {
  const supabaseUrl = getEnv('SUPABASE_URL');
  const supabaseKey = getEnv('SUPABASE_PUBLISHABLE_KEY');

  if (!supabaseUrl || !supabaseKey) {
    console.log('[Prerender] Supabase credentials not found, skipping blog routes');
    return [];
  }

  try {
    const today = new Date().toISOString().split('T')[0];
    const response = await fetch(
      `${supabaseUrl}/rest/v1/blog_posts?select=slug,publish_date&status=eq.published&publish_date=lte.${today}`,
      {
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
      }
    );

    if (!response.ok) {
      console.log('[Prerender] Failed to fetch blog posts:', response.status);
      return [];
    }

    const posts = await response.json();
    console.log(`[Prerender] Found ${posts.length} published blog posts`);
    return posts.map((post) => `/blog/${post.slug}`);
  } catch (err) {
    console.log('[Prerender] Error fetching blog posts:', err.message);
    return [];
  }
}

// NOTE: fetchBlogTagSlugs is defined earlier in the file (lines 107-139)
// It uses /blog/tags/ (plural) which matches the actual route

/**
 * Convert a route to a relative path safe for path.join
 * Fixes the bug where routes starting with / are treated as absolute paths
 */
function routeToRelativePath(route) {
  if (route === '/') {
    return '';
  }
  // Remove leading slash to prevent path.join from treating it as absolute
  return route.replace(/^\/+/, '');
}

/**
 * Create SPA fallback pages for routes that might not get prerendered
 * This ensures the routes work even if prerendering fails
 */
function ensureSpaFallbackPages(routes) {
  const sourceIndexPath = path.join(distPath, 'index.html');
  if (!fs.existsSync(sourceIndexPath)) return;

  const indexHtml = fs.readFileSync(sourceIndexPath, 'utf-8');

  for (const route of routes) {
    const relativePath = routeToRelativePath(route);
    const outputPath = relativePath === '' 
      ? path.join(distPath, 'index.html') 
      : path.join(distPath, relativePath, 'index.html');

    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Only write if missing (don't overwrite real prerenders)
    if (!fs.existsSync(outputPath)) {
      fs.writeFileSync(outputPath, indexHtml);
      console.log(`[Prerender] SPA fallback page created: ${route}`);
    }
  }
}

/**
 * Find Chrome executable path
 */
function findChrome() {
  // Check environment variable first (set by @netlify/plugin-chromium)
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) {
    return process.env.CHROME_PATH;
  }

  // Check common Netlify/CI Chrome locations
  const netlifyPaths = [
    '/opt/buildhome/.chromium-for-rendering/chrome',
    '/opt/buildhome/.cache/puppeteer/chrome/linux-*/chrome-linux*/chrome',
    '/opt/build/repo/node_modules/chromium/lib/chromium/chrome-linux/chrome',
  ];

  for (const chromePath of netlifyPaths) {
    if (chromePath.includes('*')) {
      // Handle glob patterns
      const dir = path.dirname(chromePath.split('*')[0]);
      if (fs.existsSync(dir)) {
        const entries = fs.readdirSync(dir);
        for (const entry of entries) {
          const fullPath = path.join(dir, entry);
          if (fs.statSync(fullPath).isDirectory()) {
            const subEntries = fs.readdirSync(fullPath);
            for (const subEntry of subEntries) {
              if (subEntry.startsWith('chrome-linux')) {
                const chromeBin = path.join(fullPath, subEntry, 'chrome');
                if (fs.existsSync(chromeBin)) {
                  return chromeBin;
                }
              }
            }
          }
        }
      }
    } else if (fs.existsSync(chromePath)) {
      return chromePath;
    }
  }

  // Check common local Chrome locations
  const localPaths = [
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  ];

  for (const chromePath of localPaths) {
    if (fs.existsSync(chromePath)) {
      return chromePath;
    }
  }

  return null;
}

/**
 * Main prerender function
 */
async function prerender() {
  console.log('[Prerender] Starting prerendering process...');
  console.log(`[Prerender] Static routes: ${prerenderRoutes.length}`);
  console.log(`[Prerender] FAQ routes: ${faqRoutes.length}`);

  // Fetch dynamic routes from Supabase
  const blogRoutes = await fetchPublishedBlogSlugs();
  const tagRoutes = await fetchBlogTagSlugs();

  // Combine all routes
  const allRoutes = [...prerenderRoutes, ...faqRoutes, ...blogRoutes, ...tagRoutes];
  console.log(`[Prerender] Total routes to prerender: ${allRoutes.length}`);

  // Create SPA fallback pages first
  ensureSpaFallbackPages(allRoutes);

  // Find Chrome executable
  const executablePath = findChrome();
  if (!executablePath) {
    throw new Error('[Prerender] No Chrome executable found. Install @netlify/plugin-chromium via Netlify UI or ensure Chrome is available.');
  }

  console.log(`[Prerender] Using Chrome at: ${executablePath}`);

  const browser = await puppeteer.launch({
    executablePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-web-security'],
  });

  // Start local server to serve the built files
  const server = http.createServer((req, res) => {
    return handler(req, res, {
      public: distPath,
      cleanUrls: true,
      trailingSlash: true,
    });
  });

  await new Promise((resolve) => server.listen(3000, resolve));
  console.log('[Prerender] Local server started on port 3000');

  let successCount = 0;
  let errorCount = 0;
  let skippedCount = 0;

  for (const route of allRoutes) {
    try {
      const page = await browser.newPage();
      const url = `http://localhost:3000${route}`;

      await page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: 60000,
      });

      // Wait for React to render
      await page.waitForSelector('#root', { timeout: 10000 });

      // Wait for correct canonical URL AND title to be present (ensures react-helmet has rendered)
      // This is critical for SEO - we must have correct metadata before capturing HTML
      // FAIL FAST: If metadata is wrong, throw an error instead of capturing bad HTML
      const HOMEPAGE_TITLE = 'Accounting Firm Automation & Growth Systems | SmartFirm';
      
      if (route !== '/') {
        const expectedCanonical = `https://smartfirm.io${route}`;
        const expectedCanonicalWithSlash = `https://smartfirm.io${route}/`;
        
        try {
          await page.waitForFunction(
            (expected, expectedSlash, homepageTitle) => {
              const canonical = document.querySelector('link[rel="canonical"]');
              const title = document.title;
              
              // Must have correct canonical
              if (!canonical) return false;
              const href = canonical.getAttribute('href');
              const hasCorrectCanonical = href === expected || href === expectedSlash;
              
              // Must NOT have homepage title (ensures page-specific title rendered)
              const hasUniqueTitle = title && title !== homepageTitle && title.trim() !== '';
              
              return hasCorrectCanonical && hasUniqueTitle;
            },
            { timeout: 15000 },
            expectedCanonical,
            expectedCanonicalWithSlash,
            HOMEPAGE_TITLE
          );
        } catch (metadataErr) {
          // FAIL the prerender for this route - don't capture wrong metadata
          const actualTitle = await page.title();
          const actualCanonical = await page.$eval('link[rel="canonical"]', el => el.getAttribute('href')).catch(() => 'not found');
          console.error(`[Prerender] ❌ ${route}: Metadata not rendered correctly`);
          console.error(`[Prerender]   → Title: "${actualTitle}" (expected: NOT "${HOMEPAGE_TITLE}")`);
          console.error(`[Prerender]   → Canonical: "${actualCanonical}" (expected: "${expectedCanonicalWithSlash}")`);
          throw new Error(`Metadata timeout for ${route}: Title or canonical is incorrect`);
        }
      }

      // NOTE: Blog post tags are now rendered via static TagCloud component
      // No need to wait for async tag fetching - all 70+ tags render immediately

      // Wait for blog post grid to render on /blog/ page
      const isBlogIndex = route === '/blog' || route === '/blog/';
      if (isBlogIndex) {
        try {
          // Wait for blog post cards to appear in the grid
          await page.waitForFunction(
            () => {
              // Look for blog post links in the posts grid
              const postLinks = document.querySelectorAll('a[href^="/blog/"][href$="/"]');
              // Filter to only actual post links (not /blog/ itself, not /blog/tags/)
              const actualPostLinks = Array.from(postLinks).filter(link => {
                const href = link.getAttribute('href');
                return href && 
                       href !== '/blog/' && 
                       !href.includes('/blog/tags/') &&
                       href.match(/^\/blog\/[a-z0-9-]+\/$/);
              });
              // We expect at least 5 posts (currently have 9)
              return actualPostLinks.length >= 5;
            },
            { timeout: 15000 }
          );
          
          // Count and log the blog post links
          const postCount = await page.$$eval(
            'a[href^="/blog/"][href$="/"]',
            links => links.filter(l => {
              const href = l.getAttribute('href');
              return href && 
                     href !== '/blog/' && 
                     !href.includes('/blog/tags/') &&
                     href.match(/^\/blog\/[a-z0-9-]+\/$/);
            }).length
          );
          console.log(`[Prerender] ✓ /blog/: ${postCount} blog post link(s) captured`);
        } catch (blogErr) {
          console.log(`[Prerender] ⚠ /blog/: Blog posts wait timeout - capturing anyway`);
        }
      }

      // Get the rendered HTML
      const html = await page.content();

      // Determine output path - use relative path to fix the bug
      const relativePath = routeToRelativePath(route);
      const outputPath = relativePath === ''
        ? path.join(distPath, 'index.html')
        : path.join(distPath, relativePath, 'index.html');

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

  await browser.close();
  server.close();

  console.log(`\n[Prerender] Complete: ${successCount} success, ${errorCount} errors, ${skippedCount} skipped`);

  // Don't fail build for errors - routes will fall back to SPA
  if (errorCount > 0) {
    console.log('[Prerender] Note: Failed routes will use SPA fallback (client-side rendering)');
  }
}

prerender().catch((err) => {
  console.error('[Prerender] Fatal error:', err.message);
  process.exit(1);
});
