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

// SEO-critical routes to pre-render (static pages)
const prerenderRoutes = [
  // Homepage
  "/",
  
  // Main Navigation Pages
  "/solutions-expert-marketing-agency-for-accounting-firms",
  "/leading-marketing-services-for-accounting-firms",
  "/services/all-professional-marketing-services-for-accounting-firms",
  "/industries-expert-marketing-agency-for-accountants",
  "/resources",
  "/about",
  "/contact",
  "/get-started",
  "/quick-start-marketing-for-cpa-firms",
  
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
  
  // Legal Pages
  "/privacy",
  "/terms",
  "/cookies",
  "/faq",
];

// FAQ detail pages (108 FAQs from faqContent.ts)
const faqRoutes = [
  // Getting Started with SmartFirm
  "/faq/which-solution-right-for-accounting-firm",
  "/faq/combine-marketing-workflow-automation",
  "/faq/difference-smartfirm-vs-traditional-agencies",
  "/faq/how-quickly-see-results",
  "/faq/firms-of-all-sizes-minimum",
  "/faq/how-to-get-started",
  "/faq/pricing-structure",
  "/faq/do-you-offer-guarantees",
  // Industries We Serve
  "/faq/why-industry-specialization-matters",
  "/faq/firm-serves-multiple-industries",
  "/faq/marketing-different-tax-bookkeeping-advisory",
  "/faq/experience-with-specific-industry",
  "/faq/switch-industries-add-specializations",
  // Client Retention
  "/faq/good-client-retention-rate-accounting-firm",
  "/faq/common-reasons-accounting-firms-lose-clients",
  "/faq/automation-help-client-retention",
  "/faq/retention-strategies-seasonal-clients-tax",
  "/faq/roi-client-retention-vs-acquisition",
  "/faq/how-often-communicate-clients-retention",
  "/faq/technology-role-modern-retention-strategies",
  "/faq/measure-success-retention-efforts",
  // Scaling Your Firm
  "/faq/biggest-mistake-accounting-firms-scale",
  "/faq/scale-firm-without-hiring-staff",
  "/faq/when-accounting-firm-start-scaling",
  "/faq/systems-needed-scale-successfully",
  "/faq/what-are-growing-pains-firm",
  "/faq/grow-firm-without-sacrificing-quality-burnout",
  "/faq/difference-growth-vs-scaling",
  "/faq/when-firm-ready-to-grow",
  // Work Less, Earn More
  "/faq/work-less-earn-more-cpa-possible",
  "/faq/tasks-automated-accounting-firm",
  "/faq/transition-value-based-pricing-hourly",
  "/faq/automation-less-personal-clients",
  // Competing with Tech-Savvy Firms
  "/faq/technology-compete-tech-savvy-cpas",
  "/faq/cost-modernize-accounting-firm-technology",
  "/faq/existing-clients-care-new-technology",
  "/faq/how-long-implement-modern-systems",
  // Referrals & Reviews
  "/faq/asking-referrals-uncomfortable-avoid",
  "/faq/conversion-rate-referrals-vs-marketing",
  "/faq/automated-referral-systems-without-pushy",
  "/faq/how-long-build-referral-generation-system",
  "/faq/review-system-timing",
  "/faq/negative-review-response",
  "/faq/review-requests-annoying",
  "/faq/which-review-platforms",
  // Protect Your Practice
  "/faq/biggest-threats-accounting-firms-today",
  "/faq/need-cybersecurity-small-firm",
  "/faq/future-proof-practice-against-ai",
  "/faq/business-continuity-plan-cpas",
  // Tax Preparation Marketing
  "/faq/generate-revenue-outside-tax-season",
  "/faq/when-start-marketing-tax-season",
  "/faq/compete-turbotax-diy-tax-software",
  "/faq/marketing-strategies-attracting-tax-clients",
  // Bookkeeping Services Marketing
  "/faq/differentiate-bookkeeping-low-cost-competitors",
  "/faq/attract-small-business-clients-bookkeeping",
  "/faq/build-predictable-recurring-revenue-bookkeeping",
  "/faq/focus-industry-niche-bookkeeping-practice",
  // Business Advisory Marketing
  "/faq/position-business-advisor-not-accountant",
  "/faq/typical-pricing-business-advisory-services",
  "/faq/how-long-establish-thought-leadership",
  "/faq/content-attract-advisory-clients",
  // Client Onboarding Automation
  "/faq/implement-client-onboarding-automation",
  "/faq/onboarding-automation-practice-management",
  "/faq/customize-intake-forms-service-types",
  "/faq/client-incomplete-onboarding",
  "/faq/document-portal-security",
  "/faq/onboarding-time-savings",
  // Lead Follow-Up Automation
  "/faq/automated-lead-response-time",
  "/faq/lead-wants-real-person",
  "/faq/customize-follow-up-messages",
  "/faq/lead-unresponsive-sequence",
  // SEO & Local Search
  "/faq/seo-results-timeline",
  "/faq/seo-vs-google-ads",
  "/faq/blog-posts-seo-who-writes",
  "/faq/seo-competitive-market",
  // Website Design
  "/faq/website-design-timeline",
  "/faq/migrate-existing-content",
  "/faq/website-aicpa-compliance",
  "/faq/website-changes-after-launch",
  // Content Marketing
  "/faq/content-publishing-frequency",
  "/faq/content-topics",
  "/faq/content-planning-topics",
  "/faq/content-marketing-lead-timeline",
  // Email Marketing
  "/faq/email-frequency",
  "/faq/email-unsubscribe-complaints",
  "/faq/email-list-segmentation",
  "/faq/email-writing",
  // Social Media Management
  "/faq/social-platforms-managed",
  "/faq/social-posting-frequency-content",
  "/faq/social-content-creation",
  "/faq/social-engagement-responses",
  // Technology & Implementation
  "/faq/technology-implementation-timeline",
  "/faq/changing-existing-tools",
  "/faq/team-technology-resistance",
  "/faq/ongoing-technology-cost",
  "/faq/business-optimization-timeline",
  "/faq/major-changes-not-ready",
  // Executive & Advisory Services
  "/faq/difference-from-business-coach",
  "/faq/executive-services-time-commitment",
  "/faq/fractional-cio-services-included",
  "/faq/try-executive-services-pilot",
  // Add-On Services
  "/faq/add-services-quickstart",
  "/faq/add-on-pricing-options",
  "/faq/add-on-contract-commitment",
  // Tools & Calculators
  "/faq/how-tools-help-accounting-firm-grow",
  "/faq/assessments-really-free",
  "/faq/how-long-assessments-take",
  "/faq/what-happens-after-complete-assessment",
];


const distPath = path.resolve(__dirname, '../dist');

function getEnv(name) {
  return process.env[name] || process.env[name.replace(/^VITE_/, '')];
}

async function fetchPublishedBlogSlugs() {
  const baseUrl = getEnv('VITE_SUPABASE_URL');
  const anonKey =
    getEnv('VITE_SUPABASE_ANON_KEY') ||
    getEnv('VITE_SUPABASE_PUBLISHABLE_KEY') ||
    getEnv('SUPABASE_ANON_KEY');

  if (!baseUrl || !anonKey) {
    console.log('[Prerender] Blog slugs: missing env vars, skipping dynamic blog routes');
    return [];
  }

  try {
    const url = new URL(`${baseUrl}/rest/v1/blog_posts`);
    url.searchParams.set('select', 'slug');
    url.searchParams.set('status', 'eq.published');
    url.searchParams.set('publish_date', `lte.${new Date().toISOString()}`);

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
    return (Array.isArray(rows) ? rows : [])
      .map((r) => (r && r.slug ? String(r.slug) : ''))
      .filter(Boolean);
  } catch (e) {
    console.log(`[Prerender] Blog slugs: failed to fetch, skipping dynamic blog routes (${e.message || e})`);
    return [];
  }
}

async function fetchBlogTagSlugs() {
  const baseUrl = getEnv('VITE_SUPABASE_URL');
  const anonKey =
    getEnv('VITE_SUPABASE_ANON_KEY') ||
    getEnv('VITE_SUPABASE_PUBLISHABLE_KEY') ||
    getEnv('SUPABASE_ANON_KEY');

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
    return (Array.isArray(rows) ? rows : [])
      .map((r) => (r && r.slug ? String(r.slug) : ''))
      .filter(Boolean);
  } catch (e) {
    console.log(`[Prerender] Blog tags: failed to fetch, skipping tag routes (${e.message || e})`);
    return [];
  }
}

function ensureSpaFallbackPages(routes) {
  const sourceIndexPath = path.join(distPath, 'index.html');
  if (!fs.existsSync(sourceIndexPath)) return;

  const indexHtml = fs.readFileSync(sourceIndexPath, 'utf-8');

  for (const route of routes) {
    const outputPath =
      route === '/' ? path.join(distPath, 'index.html') : path.join(distPath, route, 'index.html');

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

  // Fetch published blog slugs dynamically
  const blogSlugs = await fetchPublishedBlogSlugs();
  const blogRoutes = ['/blog', ...blogSlugs.map((s) => `/blog/${s}`)];
  
  // Fetch blog tag slugs dynamically
  const tagSlugs = await fetchBlogTagSlugs();
  const tagRoutes = tagSlugs.map((s) => `/blog/tags/${s}`);
  
  // Combine static routes with dynamic blog/tag routes and static FAQ routes
  const allRoutes = [...prerenderRoutes, ...faqRoutes, ...blogRoutes, ...tagRoutes];
  
  // Ensure SPA fallback pages exist for all routes (prevents 404 on static hosts)
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

  console.log(`[Prerender] Starting prerender for ${allRoutes.length} routes (${prerenderRoutes.length} static + ${faqRoutes.length} FAQ + ${blogRoutes.length} blog + ${tagRoutes.length} tags)...`);

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

