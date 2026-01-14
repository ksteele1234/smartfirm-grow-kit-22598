#!/usr/bin/env node
/**
 * Dynamic Sitemap Generator
 * Generates sitemap.xml with static routes + dynamic blog posts, tags, categories, and FAQ pages
 */

const fs = require('fs');
const path = require('path');

// Static routes from sitemapRoutes.ts
const staticRoutes = [
  // Homepage
  { path: '/', changefreq: 'weekly', priority: 1.0 },

  // Main Navigation Pages
  { path: '/solutions-expert-marketing-agency-for-accounting-firms/', changefreq: 'weekly', priority: 0.9 },
  { path: '/leading-marketing-services-for-accounting-firms/', changefreq: 'weekly', priority: 0.9 },
  { path: '/services/all-professional-marketing-services-for-accounting-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/industries-expert-marketing-agency-for-accountants/', changefreq: 'weekly', priority: 0.9 },
  { path: '/resources/', changefreq: 'weekly', priority: 0.8 },
  { path: '/about/', changefreq: 'monthly', priority: 0.7 },
  { path: '/contact/', changefreq: 'monthly', priority: 0.8 },
  { path: '/get-started/', changefreq: 'weekly', priority: 0.9 },
  { path: '/quick-start-marketing-for-cpa-firms/', changefreq: 'weekly', priority: 0.8 },

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
  { path: '/tools/seo-audit/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/page-grader/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/advanced-seo-qa/', changefreq: 'monthly', priority: 0.7 },

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

// FAQ categories and questions (mirrors src/data/faqContent.ts)
const faqCategories = [
  {
    slug: 'getting-started',
    questions: [
      'which-solution-right-for-accounting-firm',
      'combine-marketing-workflow-automation',
      'difference-smartfirm-vs-traditional-agencies',
      'how-quickly-see-results',
      'firms-of-all-sizes-minimum',
      'how-to-get-started',
      'pricing-structure',
      'do-you-offer-guarantees',
    ],
  },
  {
    slug: 'industries',
    questions: [
      'why-industry-specialization-matters',
      'firm-serves-multiple-industries',
      'marketing-different-tax-bookkeeping-advisory',
      'experience-with-specific-industry',
      'switch-industries-add-specializations',
    ],
  },
  {
    slug: 'client-retention',
    questions: [
      'good-client-retention-rate-accounting-firm',
      'common-reasons-accounting-firms-lose-clients',
      'automation-help-client-retention',
      'retention-strategies-seasonal-clients-tax',
      'roi-client-retention-vs-acquisition',
      'how-often-communicate-clients-retention',
      'technology-role-modern-retention-strategies',
      'measure-success-retention-efforts',
    ],
  },
  {
    slug: 'scale-firm',
    questions: [
      'biggest-mistake-accounting-firms-scale',
      'scale-firm-without-hiring-staff',
      'when-accounting-firm-start-scaling',
      'systems-needed-scale-successfully',
      'what-are-growing-pains-firm',
      'grow-firm-without-sacrificing-quality-burnout',
      'difference-growth-vs-scaling',
      'when-firm-ready-to-grow',
    ],
  },
  {
    slug: 'work-less-earn-more',
    questions: [
      'work-less-earn-more-cpa-possible',
      'tasks-automated-accounting-firm',
      'transition-value-based-pricing-hourly',
      'automation-less-personal-clients',
    ],
  },
  {
    slug: 'stop-losing-clients-tech-savvy',
    questions: [
      'technology-compete-tech-savvy-cpa',
      'online-presence-client-attraction',
      'catch-up-technology-competitors',
      'differentiate-tech-savvy-competitors',
    ],
  },
  {
    slug: 'referrals-reviews',
    questions: [
      'increase-referrals-without-asking',
      'how-many-google-reviews-needed',
      'get-more-client-reviews',
      'automate-review-collection-process',
      'respond-negative-reviews',
      'referral-vs-other-leads',
    ],
  },
  {
    slug: 'online-visibility-seo',
    questions: [
      'how-long-seo-results-accountants',
      'local-seo-accounting-firms',
      'should-accountant-blog',
      'optimize-google-business-profile',
      'seo-vs-paid-ads-accountants',
      'most-important-seo-factors-accounting',
    ],
  },
  {
    slug: 'lead-generation',
    questions: [
      'how-many-leads-expect-monthly',
      'best-lead-sources-accounting-firms',
      'improve-website-conversion-rate',
      'should-buy-leads',
      'nurture-leads-not-ready',
      'cost-per-lead-accounting-industry',
    ],
  },
  {
    slug: 'marketing-automation',
    questions: [
      'what-is-marketing-automation-accounting',
      'automate-marketing-tasks',
      'high-level-crm-accounting',
      'email-marketing-automation-accountants',
      'marketing-automation-roi',
      'get-started-marketing-automation',
    ],
  },
  {
    slug: 'workflow-automation',
    questions: [
      'difference-marketing-workflow-automation',
      'automate-client-onboarding',
      'workflow-automation-tools-accountants',
      'time-savings-workflow-automation',
      'automate-document-collection',
      'automation-replace-staff',
    ],
  },
  {
    slug: 'client-experience',
    questions: [
      'improve-client-experience-accounting',
      'client-portal-benefits',
      'communication-preferences-clients',
      'client-satisfaction-measurement',
      'onboarding-experience-matters',
    ],
  },
  {
    slug: 'pricing-billing',
    questions: [
      'value-based-pricing-accounting',
      'price-accounting-services',
      'raise-fees-without-losing-clients',
      'offer-payment-plans',
      'subscription-pricing-accountants',
    ],
  },
  {
    slug: 'technology-implementation',
    questions: [
      'essential-technology-modern-accounting',
      'choose-practice-management-software',
      'integrate-accounting-systems',
      'cybersecurity-accounting-firms',
      'cloud-vs-desktop-accounting-software',
      'ai-accounting-profession',
    ],
  },
  {
    slug: 'business-advisory',
    questions: [
      'transition-compliance-advisory',
      'advisory-services-offer',
      'price-advisory-services',
      'clients-need-advisory-services',
      'advisory-skills-needed',
    ],
  },
];

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
  const routes = [];

  // Add FAQ category pages
  faqCategories.forEach(category => {
    routes.push({
      path: `/faq/${category.slug}/`,
      changefreq: 'monthly',
      priority: 0.6,
    });

    // Add individual FAQ question pages
    category.questions.forEach(questionSlug => {
      routes.push({
        path: `/faq/${questionSlug}/`,
        changefreq: 'monthly',
        priority: 0.5,
      });
    });
  });

  return routes;
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

  // Convert categories to sitemap routes
  const categoryRoutes = blogCategories.map(category => ({
    path: `/blog/category/${category.slug}/`,
    changefreq: 'weekly',
    priority: 0.6,
    lastmod: category.created_at ? category.created_at.split('T')[0] : undefined,
  }));

  // Combine static + dynamic routes
  const allRoutes = [...staticRoutes, ...blogRoutes, ...tagRoutes, ...categoryRoutes, ...faqRoutes];

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
  console.log(`   - Categories: ${categoryRoutes.length}`);
  console.log(`   - FAQ pages: ${faqRoutes.length}`);
  console.log('');
}

main().catch(err => {
  console.error('[Sitemap] Error:', err.message);
  process.exit(1);
});
