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
  { path: '/automation-and-marketing-services-for-accounting-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/industries/', changefreq: 'weekly', priority: 0.9 },
  { path: '/resources/', changefreq: 'weekly', priority: 0.8 },
  { path: '/marketing-agency-for-accounting-firms/', changefreq: 'monthly', priority: 0.7 },
  { path: '/accounting-firm-automation-consultation/', changefreq: 'monthly', priority: 0.8 },
  { path: '/get-started-accounting-firm-automation/', changefreq: 'weekly', priority: 0.9 },
  { path: '/quick-start-automation-package-for-cpa-firms/', changefreq: 'weekly', priority: 0.8 },

  // Solution Pages
  { path: '/solutions/scale-accounting-firm-without-chaos/', changefreq: 'weekly', priority: 0.8 },
  { path: '/solutions/stop-losing-clients-to-tech-savvy-cpas/', changefreq: 'weekly', priority: 0.8 },
  { path: '/solutions/get-more-referrals-for-cpa-firm-without-asking/', changefreq: 'weekly', priority: 0.8 },
  { path: '/solutions/work-less-earn-more-as-a-cpa/', changefreq: 'weekly', priority: 0.8 },
  { path: '/solutions/grow-accounting-firm-without-growing-pains/', changefreq: 'weekly', priority: 0.8 },
  { path: '/solutions/protect-accounting-practice-from-data-breaches/', changefreq: 'weekly', priority: 0.8 },
  { path: '/solutions/client-onboarding-problems/', changefreq: 'weekly', priority: 0.8 },

  // Service Pages (including NEW AI transformation pages)
  { path: '/services/ai-transformation-roadmap-for-accounting-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/ai-process-optimization-for-accounting-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/marketing-automation-for-accounting-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/technology-consulting-for-accounting-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/business-optimization-for-accounting-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/fractional-cio-for-accounting-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/automated-lead-follow-up-for-accounting-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/automated-review-generation-for-cpas/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/seo-for-accounting-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/social-media-management-for-accounting-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/email-marketing-for-accounting-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/website-design-for-accounting-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/content-marketing-for-accounting-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/reputation-management-for-cpa-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/marketing-strategy-integration-for-accounting-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/services/marketing-add-ons-for-accounting-firms/', changefreq: 'weekly', priority: 0.7 },
  { path: '/services/client-onboarding-automation/', changefreq: 'weekly', priority: 0.8 },

  // Industry Pages
  { path: '/industries/automation-for-tax-preparation-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/industries/marketing-for-bookkeeping-firms/', changefreq: 'weekly', priority: 0.8 },
  { path: '/industries/business-advisory/', changefreq: 'weekly', priority: 0.8 },
  { path: '/industries/marketing-for-audit-firms/', changefreq: 'weekly', priority: 0.8 },

  // Tools & Calculators
  { path: '/tools/', changefreq: 'weekly', priority: 0.8 },
  { path: '/tools/accounting-firm-efficiency-assessment/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/marketing-assessment-for-accountants/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/marketing-roi-calculator-for-accounting-firms/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/automation-readiness-assessment-for-accountants/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/accounting-firm-workflow-audit-tool/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/accounting-firm-technology-roi-calculator/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/client-lifetime-value-calculator-for-accountants/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/lead-generation-scorecard-for-accounting-firms/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/modern-accounting-firm-assessment/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/accounting-firm-growth-scorecard/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/seo-audit/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/page-grader/', changefreq: 'monthly', priority: 0.7 },
  { path: '/tools/advanced-seo-qa/', changefreq: 'monthly', priority: 0.7 },

  // Funnel Pages
  { path: '/accounting-firm-growth-calculator/', changefreq: 'weekly', priority: 0.8 },

  // Case Studies
  { path: '/case-studies/', changefreq: 'weekly', priority: 0.8 },
  { path: '/case-studies/payroll-automation-roi-for-accounting-firms/', changefreq: 'monthly', priority: 0.7 },

  // Legal Pages
  { path: '/privacy-policy/', changefreq: 'yearly', priority: 0.3 },
  { path: '/terms-of-service/', changefreq: 'yearly', priority: 0.3 },
  { path: '/cookie-policy/', changefreq: 'yearly', priority: 0.3 },
  { path: '/faq/', changefreq: 'monthly', priority: 0.7 },
];

// Export for validation and debugging
export const sitemapRoutesCount = sitemapRoutes.length;
export const sitemapRoutePaths = sitemapRoutes.map(r => r.path);
