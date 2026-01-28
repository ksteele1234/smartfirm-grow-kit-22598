/**
 * Sitemap Routes Configuration
 * All routes for sitemap.xml generation via vite-plugin-sitemap
 * Excludes utility pages (404, 500, thank-you) and redirects
 */

export interface SitemapRoute {
  path: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const sitemapRoutes: SitemapRoute[] = [
  // Homepage
  { path: '/', changefreq: 'weekly', priority: 1.0 },

  // Main Navigation Pages
  { path: '/solutions/', changefreq: 'weekly', priority: 0.9 },
  { path: '/services/', changefreq: 'weekly', priority: 0.9 },
  { path: '/all-services/', changefreq: 'weekly', priority: 0.8 },
  { path: '/industries/', changefreq: 'weekly', priority: 0.9 },
  { path: '/resources/', changefreq: 'weekly', priority: 0.8 },
  { path: '/about/', changefreq: 'monthly', priority: 0.7 },
  { path: '/contact/', changefreq: 'monthly', priority: 0.8 },
  { path: '/get-started/', changefreq: 'weekly', priority: 0.9 },
  { path: '/quick-start/', changefreq: 'weekly', priority: 0.8 },

  // Solution Pages
  { path: '/solutions/scale-accounting-firm-successfully', changefreq: 'weekly', priority: 0.8 },
  { path: '/solutions/stop-losing-clients-to-tech-savvy-cpas', changefreq: 'weekly', priority: 0.8 },
  { path: '/solutions/get-more-referrals-without-asking', changefreq: 'weekly', priority: 0.8 },
  { path: '/solutions/work-less-earn-more', changefreq: 'weekly', priority: 0.8 },
  { path: '/solutions/grow-without-growing-pains', changefreq: 'weekly', priority: 0.8 },
  { path: '/solutions/protect-practice-and-future', changefreq: 'weekly', priority: 0.8 },

  // Service Pages (including NEW AI transformation pages)
  { path: '/services/ai-transformation-roadmap', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/single-process-ai-transformation', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/marketing-automation-for-accounting-firms', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/accounting-firm-technology-consulting', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/business-optimization-for-accounting-firms', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/fractional-cio-for-accounting-firms', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/automated-lead-follow-up-for-cpas', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/automated-review-generation-for-cpas', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/seo-for-accounting-firms', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/social-media-management-for-cpas', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/email-marketing-for-cpas', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/professional-website-design-for-accounting-firms', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/strategic-content-marketing-for-cpas', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/reputation-management-for-cpas', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/marketing-strategy-integration-for-accounting-firms', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/add-ons', changefreq: 'weekly', priority: 0.7 },

  // Industry Pages
  { path: '/industries/tax-preparation-marketing-solutions', changefreq: 'weekly', priority: 0.8 },
  { path: '/industries/bookkeeping-services-marketing-automation', changefreq: 'weekly', priority: 0.8 },
  
  { path: '/industries/audit-assurance-marketing-agency', changefreq: 'weekly', priority: 0.8 },

  // Tools & Calculators
  { path: '/tools', changefreq: 'weekly', priority: 0.8 },
  { path: '/tools/efficiency-quiz', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/marketing-scorecard', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/roi-calculator', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/automation-readiness-quiz', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/workflow-bottleneck-finder', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/tech-stack-roi-calculator', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/client-lifetime-value-calculator', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/lead-generation-scorecard', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/modern-firm-quiz', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/growth-potential-scorecard', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/seo-audit', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/page-grader', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/advanced-seo-qa', changefreq: 'monthly', priority: 0.7 },

  // Funnel Pages
  { path: '/growth-calculator', changefreq: 'weekly', priority: 0.8 },

  // Case Studies
  { path: '/case-studies', changefreq: 'weekly', priority: 0.8 },
  { path: '/case-studies/payroll-automation-roi', changefreq: 'monthly', priority: 0.7 },

  // Legal Pages
  { path: '/privacy', changefreq: 'yearly', priority: 0.3 },
  { path: '/terms', changefreq: 'yearly', priority: 0.3 },
  { path: '/cookies', changefreq: 'yearly', priority: 0.3 },
  { path: '/faq', changefreq: 'monthly', priority: 0.7 },
];

// Export for validation and debugging
export const sitemapRoutesCount = sitemapRoutes.length;
export const sitemapRoutePaths = sitemapRoutes.map(r => r.path);
