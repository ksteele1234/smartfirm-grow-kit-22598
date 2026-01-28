#!/usr/bin/env node
/**
 * Content Audit Script
 * Crawls the local build to extract SEO and content metrics for every page.
 * Outputs: content_audit_v2.csv
 */

const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// --- 1. CONFIGURATION & ROUTES ---

// Copying routes from prerender.cjs to ensure coverage
const prerenderRoutes = [
    "/",
    "/solutions-expert-marketing-agency-for-accounting-firms/",
    "/leading-marketing-services-for-accounting-firms/",
    "/services/all-professional-marketing-services-for-accounting-firms/",
    "/industries-expert-marketing-agency-for-accountants/",
    "/resources/",
    "/about/",
    "/contact/",
    "/get-started/",
    "/quick-start-marketing-for-cpa-firms/",
    "/solutions/scale-accounting-firm-successfully/",
    "/solutions/stop-losing-clients-to-tech-savvy-cpas/",
    "/solutions/get-more-referrals-without-asking/",
    "/solutions/work-less-earn-more/",
    "/solutions/grow-without-growing-pains/",
    "/solutions/protect-practice-and-future/",
    "/services/ai-transformation-roadmap/",
    "/services/single-process-ai-transformation/",
    "/services/marketing-automation-for-accounting-firms/",
    "/services/accounting-firm-technology-consulting/",
    "/services/business-optimization-for-accounting-firms/",
    "/services/fractional-cio-for-accounting-firms/",
    "/services/automated-lead-follow-up-for-cpas/",
    "/services/automated-review-generation-for-cpas/",
    "/services/seo-for-accounting-firms/",
    "/services/social-media-management-for-cpas/",
    "/services/email-marketing-for-cpas/",
    "/services/professional-website-design-for-accounting-firms/",
    "/services/strategic-content-marketing-for-cpas/",
    "/services/reputation-management-for-cpas/",
    "/services/marketing-strategy-integration-for-accounting-firms/",
    "/services/add-ons/",
    "/industries/tax-preparation-marketing-solutions/",
    "/industries/bookkeeping-services-marketing-automation/",
    
    "/industries/audit-assurance-marketing-agency/",
    "/tools/",
    "/tools/efficiency-quiz/",
    "/tools/marketing-scorecard/",
    "/tools/roi-calculator/",
    "/tools/automation-readiness-quiz/",
    "/tools/workflow-bottleneck-finder/",
    "/tools/tech-stack-roi-calculator/",
    "/tools/client-lifetime-value-calculator/",
    "/tools/lead-generation-scorecard/",
    "/tools/modern-firm-quiz/",
    "/tools/growth-potential-scorecard/",
    "/tools/seo-audit/",
    "/tools/page-grader/",
    "/tools/advanced-seo-qa/",
    "/growth-calculator/",
    "/case-studies/",
    "/case-studies/payroll-automation-roi/",
    "/privacy/",
    "/terms/",
    "/cookies/",
    "/faq/",
];

const distPath = path.resolve(__dirname, '../dist');

// --- 2. HELPER FUNCTIONS ---

function getEnv(name) {
    return process.env[name] || process.env[name.replace(/^VITE_/, '')];
}

async function fetchPublishedBlogSlugs() {
    const baseUrl = getEnv('VITE_SUPABASE_URL');
    const anonKey = getEnv('VITE_SUPABASE_ANON_KEY') || getEnv('VITE_SUPABASE_PUBLISHABLE_KEY') || getEnv('SUPABASE_ANON_KEY');

    if (!baseUrl || !anonKey) {
        console.log('[Audit] Blog slugs: missing env vars, skipping dynamic blog routes');
        return [];
    }

    try {
        const url = new URL(`${baseUrl}/rest/v1/blog_posts`);
        url.searchParams.set('select', 'slug');
        url.searchParams.set('status', 'eq.published');

        const res = await fetch(url.toString(), {
            headers: { apikey: anonKey, authorization: `Bearer ${anonKey}` },
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const rows = await res.json();
        return (Array.isArray(rows) ? rows : [])
            .map((r) => (r && r.slug ? String(r.slug) : ''))
            .filter(Boolean);
    } catch (e) {
        console.log(`[Audit] Blog slugs: failed to fetch (${e.message}), skipping`);
        return [];
    }
}

async function fetchBlogTagSlugs() {
    const baseUrl = getEnv('VITE_SUPABASE_URL');
    const anonKey = getEnv('VITE_SUPABASE_ANON_KEY') || getEnv('VITE_SUPABASE_PUBLISHABLE_KEY') || getEnv('SUPABASE_ANON_KEY');
    if (!baseUrl || !anonKey) return [];

    try {
        const url = new URL(`${baseUrl}/rest/v1/blog_tags`);
        url.searchParams.set('select', 'slug');
        const res = await fetch(url.toString(), { headers: { apikey: anonKey, authorization: `Bearer ${anonKey}` } });
        if (!res.ok) return [];
        const rows = await res.json();
        return (Array.isArray(rows) ? rows : []).map(r => r?.slug).filter(Boolean);
    } catch { return []; }
}

function findChrome() {
    if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) return process.env.CHROME_PATH;
    const commonPaths = [
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        '/opt/chromium/chrome',
        '/usr/bin/chromium-browser',
        '/usr/bin/chromium',
        '/usr/bin/google-chrome',
        '/usr/bin/google-chrome-stable'
    ];
    for (const p of commonPaths) if (fs.existsSync(p)) return p;
    try {
        const p = execSync('which chromium-browser || which chromium || which google-chrome', { encoding: 'utf-8' }).trim();
        if (p && fs.existsSync(p)) return p;
    } catch { }
    return null;
}

// --- 3. MAIN SCRIPT ---

async function runAudit() {
    console.log('[Audit] Starting content audit...');

    // 1. Gather Routes
    const blogSlugs = await fetchPublishedBlogSlugs();
    const blogRoutes = ['/blog/', ...blogSlugs.map(s => `/blog/${s}/`)];
    const tagSlugs = await fetchBlogTagSlugs();
    const tagRoutes = tagSlugs.map(s => `/blog/tags/${s}/`);

    const allRoutes = [...prerenderRoutes, ...blogRoutes, ...tagRoutes];
    console.log(`[Audit] Identified ${allRoutes.length} pages to audit.`);

    // 2. Start Server
    const { createServer } = require('http');
    const handler = require('serve-handler');
    const server = createServer((req, res) => handler(req, res, { public: distPath, rewrites: [{ source: '**', destination: '/index.html' }] }));
    await new Promise(resolve => server.listen(3000, resolve));
    console.log('[Audit] Local server running on port 3000');

    // 3. Launch Browser
    const executablePath = findChrome();
    if (!executablePath) throw new Error('Chrome not found. Please install Chrome or set CHROME_PATH.');

    console.log(`[Audit] Using Chrome at ${executablePath}`);
    const browser = await puppeteer.launch({
        executablePath,
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
    });

    // 4. Crawl & Extract
    const results = [];
    // CSV Header
    results.push(['Slug', 'Page Title', 'Meta Title', 'Meta Description', 'H1', 'First Paragraph']);

    for (const route of allRoutes) {
        try {
            const page = await browser.newPage();
            await page.goto(`http://localhost:3000${route}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
            // Wait for SEO to update title or content
            // Often in SPAs title updates slightly after render
            await new Promise(r => setTimeout(r, 1000)); // Increased to 1s for safety

            const data = await page.evaluate(() => {
                const title = document.title || '';
                const metaTitle = document.querySelector('meta[property="og:title"]')?.content || document.title || '';
                const metaDesc = document.querySelector('meta[name="description"]')?.content || '';
                const h1 = document.querySelector('h1')?.innerText?.replace(/\n/g, ' ') || '';

                // Try to find the first meaningful paragraph
                // Prioritize hero/intro text over nav
                const p = document.querySelector('main p, article p, .content p, p:not(nav p)');
                const firstSentence = p ? p.innerText.replace(/\n/g, ' ').substring(0, 150) + (p.innerText.length > 150 ? '...' : '') : '';

                return { title, metaTitle, metaDesc, h1, firstSentence };
            });

            results.push([
                route,
                `"${data.title.replace(/"/g, '""')}"`,
                `"${data.metaTitle.replace(/"/g, '""')}"`,
                `"${data.metaDesc.replace(/"/g, '""')}"`,
                `"${data.h1.replace(/"/g, '""')}"`,
                `"${data.firstSentence.replace(/"/g, '""')}"`
            ]);

            console.log(`[Audit] Scanned ${route} - ${data.title ? 'OK' : 'Empty Title'}`);
            await page.close();
        } catch (e) {
            console.error(`[Audit] Failed ${route}: ${e.message}`);
            results.push([route, 'ERROR', '', '', '', e.message]);
        }
    }

    // 5. Cleanup & Save
    server.close();
    await browser.close();

    const csvContent = results.map(row => row.join(',')).join('\n');
    fs.writeFileSync('content_audit_v2.csv', csvContent);
    console.log('[Audit] Saved to content_audit_v2.csv');
}

runAudit().catch(console.error).then(() => process.exit(0));
