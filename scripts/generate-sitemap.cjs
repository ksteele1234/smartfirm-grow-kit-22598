#!/usr/bin/env node
/**
 * Dynamic Sitemap Generator
 * Generates sitemap.xml with static routes + dynamic blog posts, tags, categories, and FAQ pages
 */

const fs = require('fs');
const path = require('path');

// Static routes from sitemapRoutes.ts
// Static routes from sitemapRoutes.ts
const staticRoutes = [
  // Homepage
  { path: '/', changefreq: 'weekly', priority: 1.0 },

  // Main Navigation Pages (canonical URLs - not redirects)
  { path: '/solutions/', changefreq: 'weekly', priority: 0.9 },
  { path: '/services/', changefreq: 'weekly', priority: 0.9 },
  { path: '/all-services/', changefreq: 'weekly', priority: 0.8 },
  { path: '/industries/', changefreq: 'weekly', priority: 0.9 },
  { path: '/resources/', changefreq: 'weekly', priority: 0.8 },
  { path: '/about/', changefreq: 'monthly', priority: 0.7 },
  { path: '/contact/', changefreq: 'monthly', priority: 0.8 },
  { path: '/get-started/', changefreq: 'weekly', priority: 0.9 },
  // REMOVED: /quick-start/ - deprecated page shows 404 with noindex

  // Solution Pages
  { path: '/solutions/scale-accounting-firm-successfully/', changefreq: 'weekly', priority: 0.8 },
  { path: '/solutions/stop-losing-clients-to-tech-savvy-cpas/', changefreq: 'weekly', priority: 0.8 },
  { path: '/solutions/get-more-referrals-without-asking/', changefreq: 'weekly', priority: 0.8 },
  { path: '/solutions/work-less-earn-more/', changefreq: 'weekly', priority: 0.8 },
  { path: '/solutions/grow-without-growing-pains/', changefreq: 'weekly', priority: 0.8 },
  { path: '/solutions/protect-practice-and-future/', changefreq: 'weekly', priority: 0.8 },

  // Service Pages
  { path: '/services/ai-transformation-roadmap/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/single-process-ai-transformation/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/marketing-automation-for-accounting-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/accounting-firm-technology-consulting/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/business-optimization-for-accounting-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/fractional-cio-for-accounting-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/automated-lead-follow-up-for-cpas/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/automated-review-generation-for-cpas/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/seo-for-accounting-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/social-media-management-for-cpas/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/email-marketing-for-cpas/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/professional-website-design-for-accounting-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/strategic-content-marketing-for-cpas/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/reputation-management-for-cpas/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/marketing-strategy-integration-for-accounting-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/add-ons/', changefreq: 'weekly', priority: 0.7 },

  // Industry Pages
  { path: '/industries/tax-preparation-marketing-solutions/', changefreq: 'weekly', priority: 0.8 },
  { path: '/industries/bookkeeping-services-marketing-automation/', changefreq: 'weekly', priority: 0.8 },
  { path: '/industries/business-advisory-marketing-services/', changefreq: 'weekly', priority: 0.8 },
  { path: '/industries/audit-assurance-marketing-agency/', changefreq: 'weekly', priority: 0.8 },

  // Tools & Calculators
  { path: '/tools/', changefreq: 'weekly', priority: 0.8 },
  { path: '/tools/efficiency-quiz/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/marketing-scorecard/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/roi-calculator/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/automation-readiness-quiz/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/workflow-bottleneck-finder/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/tech-stack-roi-calculator/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/client-lifetime-value-calculator/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/lead-generation-scorecard/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/modern-firm-quiz/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/growth-potential-scorecard/', changefreq: 'monthly', priority: 0.7 },

  // Funnel Pages
  { path: '/growth-calculator/', changefreq: 'weekly', priority: 0.8 },

  // Case Studies
  { path: '/case-studies/', changefreq: 'weekly', priority: 0.8 },
  { path: '/case-studies/payroll-automation-roi/', changefreq: 'monthly', priority: 0.7 },

  // Blog index
  { path: '/blog/', changefreq: 'daily', priority: 0.8 },

  // Legal Pages
  { path: '/privacy/', changefreq: 'yearly', priority: 0.3 },
  { path: '/terms/', changefreq: 'yearly', priority: 0.3 },
  { path: '/cookies/', changefreq: 'yearly', priority: 0.3 },
  { path: '/faq/', changefreq: 'monthly', priority: 0.7 },
];

/**
 * Dynamically extract all FAQ slugs from faqContent.ts
 * This ensures sitemap stays in sync with the source of truth
 */
function extractFaqSlugsFromSource() {
  const faqContentPath = path.resolve(__dirname, '../src/data/faqContent.ts');
  
  if (!fs.existsSync(faqContentPath)) {
    console.error('[Sitemap] ERROR: faqContent.ts not found at', faqContentPath);
    process.exit(1);
  }
  
  const content = fs.readFileSync(faqContentPath, 'utf-8');
  
  const slugRegex = /slug:\s*["']([^"']+)["']/g;
  const allSlugs = [];
  let match;
  
  // Known category slugs to exclude (these are not individual FAQ pages)
  const categorySlugs = new Set([
    'getting-started', 'industries', 'client-retention', 'scale-firm',
    'work-less-earn-more', 'stop-losing-clients-tech-savvy', 'referrals',
    'online-visibility', 'marketing-automation', 'technology',
    'workflow-automation', 'ai-transformation', 'pricing-budgeting',
    'advisory-services', 'referrals-reviews', 'online-visibility-seo',
    'lead-generation', 'client-experience', 'pricing-billing',
    'technology-implementation', 'business-advisory'
  ]);
  
  while ((match = slugRegex.exec(content)) !== null) {
    const slug = match[1];
    if (!categorySlugs.has(slug) && slug.includes('-')) {
      allSlugs.push(slug);
    }
  }
  
  const uniqueSlugs = [...new Set(allSlugs)];

  // Safeguard: fail build if no slugs extracted (indicates parsing error)
  if (uniqueSlugs.length === 0) {
    console.error('[Sitemap] ERROR: No FAQ slugs extracted from faqContent.ts - check regex parsing');
    process.exit(1);
  }

  // Warning if fewer than expected (should be 100+)
  if (uniqueSlugs.length < 50) {
    console.warn(`[Sitemap] WARNING: Only ${uniqueSlugs.length} FAQ slugs found - expected 100+`);
  }

  console.log(`[Sitemap] Extracted ${uniqueSlugs.length} FAQ slugs from faqContent.ts`);
  return uniqueSlugs;
}

const HOSTNAME = 'https://smartfirm.io';

function getEnv(name) {
  return process.env[name] || process.env[name.replace(/^VITE_/, '')];
}

async function fetchPublishedBlogPosts() {
  const baseUrl = getEnv('VITE_SUPABASE_URL');
  const anonKey =
    getEnv('VITE_SUPABASE_ANON_KEY') ||
    getEnv('VITE_SUPABASE_PUBLISHABLE_KEY') ||
    getEnv('SUPABASE_ANON_KEY');

  // Debug logging
  console.log('[Sitemap Debug] VITE_SUPABASE_URL:', baseUrl ? 'SET' : 'MISSING');
  console.log('[Sitemap Debug] VITE_SUPABASE_PUBLISHABLE_KEY:', getEnv('VITE_SUPABASE_PUBLISHABLE_KEY') ? 'SET' : 'MISSING');
  console.log('[Sitemap Debug] All env keys:', Object.keys(process.env).filter(k => k.includes('SUPABASE')).join(', '));

  if (!baseUrl || !anonKey) {
    console.log('[Sitemap] Blog posts: missing env vars, skipping dynamic blog routes');
    return [];
  }

  try {
    const url = new URL(`${baseUrl}/rest/v1/blog_posts`);
    url.searchParams.set('select', 'slug,publish_date,updated_at');
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
    return Array.isArray(rows) ? rows : [];
  } catch (e) {
    console.log(`[Sitemap] Blog posts: failed to fetch (${e.message || e})`);
    return [];
  }
}

async function fetchBlogTags() {
  const baseUrl = getEnv('VITE_SUPABASE_URL');
  const anonKey =
    getEnv('VITE_SUPABASE_ANON_KEY') ||
    getEnv('VITE_SUPABASE_PUBLISHABLE_KEY') ||
    getEnv('SUPABASE_ANON_KEY');

  if (!baseUrl || !anonKey) {
    console.log('[Sitemap] Blog tags: missing env vars, skipping tag routes');
    return [];
  }

  try {
    const url = new URL(`${baseUrl}/rest/v1/blog_tags`);
    url.searchParams.set('select', 'slug,created_at');

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
    return Array.isArray(rows) ? rows : [];
  } catch (e) {
    console.log(`[Sitemap] Blog tags: failed to fetch (${e.message || e})`);
    return [];
  }
}

async function fetchBlogCategories() {
  const baseUrl = getEnv('VITE_SUPABASE_URL');
  const anonKey =
    getEnv('VITE_SUPABASE_ANON_KEY') ||
    getEnv('VITE_SUPABASE_PUBLISHABLE_KEY') ||
    getEnv('SUPABASE_ANON_KEY');

  if (!baseUrl || !anonKey) {
    console.log('[Sitemap] Blog categories: missing env vars, skipping category routes');
    return [];
  }

  try {
    const url = new URL(`${baseUrl}/rest/v1/blog_categories`);
    url.searchParams.set('select', 'slug,created_at');

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
    return Array.isArray(rows) ? rows : [];
  } catch (e) {
    console.log(`[Sitemap] Blog categories: failed to fetch (${e.message || e})`);
    return [];
  }
}

function generateFaqRoutes() {
  const slugs = extractFaqSlugsFromSource();
  return slugs.map(slug => ({
    path: `/faq/${slug}/`,
    changefreq: 'monthly',
    priority: 0.5,
  }));
}

function generateSitemapXml(routes) {
  const urlEntries = routes.map(route => {
    const lastmod = route.lastmod || new Date().toISOString().split('T')[0];
    return `  <url>
    <loc>${HOSTNAME}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

async function main() {
  console.log('\n📍 Generating Dynamic Sitemap...\n');

  // Fetch published blog posts
  const blogPosts = await fetchPublishedBlogPosts();
  console.log(`[Sitemap] Found ${blogPosts.length} published blog posts`);

  // Fetch blog tags
  const blogTags = await fetchBlogTags();
  console.log(`[Sitemap] Found ${blogTags.length} blog tags`);

  // Fetch blog categories
  const blogCategories = await fetchBlogCategories();
  console.log(`[Sitemap] Found ${blogCategories.length} blog categories`);

  // Generate FAQ routes
  const faqRoutes = generateFaqRoutes();
  console.log(`[Sitemap] Generated ${faqRoutes.length} FAQ routes`);

  // Convert blog posts to sitemap routes
  const blogRoutes = blogPosts.map(post => ({
    path: `/blog/${post.slug}/`,
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: post.updated_at ? post.updated_at.split('T')[0] : post.publish_date?.split('T')[0],
  }));

  // Convert tags to sitemap routes
  const tagRoutes = blogTags.map(tag => ({
    path: `/blog/tags/${tag.slug}/`,
    changefreq: 'weekly',
    priority: 0.6,
    lastmod: tag.created_at ? tag.created_at.split('T')[0] : undefined,
  }));

  // Combine static + dynamic routes
  const allRoutes = [...staticRoutes, ...blogRoutes, ...tagRoutes, ...faqRoutes];

  // Generate sitemap XML
  const sitemapXml = generateSitemapXml(allRoutes);

  // Write to dist folder
  const distPath = path.resolve(__dirname, '../dist');
  const sitemapPath = path.join(distPath, 'sitemap.xml');

  if (!fs.existsSync(distPath)) {
    console.log('[Sitemap] dist folder not found, creating...');
    fs.mkdirSync(distPath, { recursive: true });
  }

  fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');

  console.log(`\n✅ Sitemap generated: ${sitemapPath}`);
  console.log(`   Total URLs: ${allRoutes.length}`);
  console.log(`   - Static: ${staticRoutes.length}`);
  console.log(`   - Blog posts: ${blogRoutes.length}`);
  console.log(`   - Tags: ${tagRoutes.length}`);
  console.log(`   - FAQ pages: ${faqRoutes.length}`);
  console.log('');
}

main().catch(err => {
  console.error('[Sitemap] Error:', err.message);
  process.exit(1);
});
