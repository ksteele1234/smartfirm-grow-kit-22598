/**
 * Single Source of Truth for all deprecated FAQ paths (CommonJS version)
 * Used by: prerender.cjs, generate-sitemap.cjs, validate-prerender.cjs, cleanup-forbidden-faq.cjs
 * 
 * These URLs return 410 Gone status via public/_redirects
 * They must NOT be prerendered or included in sitemap
 * 
 * KEEP IN SYNC WITH: src/config/deprecatedFaqSlugs.ts
 */

// 55 deprecated individual FAQ question slugs
const DEPRECATED_FAQ_QUESTION_SLUGS = [
  'advisory-services-offer',
  'advisory-skills-needed',
  'ai-accounting-profession',
  'automate-client-onboarding',
  'automate-document-collection',
  'automate-marketing-tasks',
  'automate-review-collection-process',
  'automation-replace-staff',
  'best-lead-sources-accounting-firms',
  'catch-up-technology-competitors',
  'choose-practice-management-software',
  'client-portal-benefits',
  'client-satisfaction-measurement',
  'clients-need-advisory-services',
  'cloud-vs-desktop-accounting-software',
  'communication-preferences-clients',
  'cost-per-lead-accounting-industry',
  'cybersecurity-accounting-firms',
  'difference-marketing-workflow-automation',
  'differentiate-tech-savvy-competitors',
  'email-marketing-automation-accountants',
  'essential-technology-modern-accounting',
  'get-more-client-reviews',
  'get-started-marketing-automation',
  'high-level-crm-accounting',
  'how-long-seo-results-accountants',
  'how-many-google-reviews-needed',
  'how-many-leads-expect-monthly',
  'improve-client-experience-accounting',
  'improve-website-conversion-rate',
  'increase-referrals-without-asking',
  'integrate-accounting-systems',
  'local-seo-accounting-firms',
  'marketing-automation-roi',
  'most-important-seo-factors-accounting',
  'nurture-leads-not-ready',
  'offer-payment-plans',
  'onboarding-experience-matters',
  'online-presence-client-attraction',
  'optimize-google-business-profile',
  'price-accounting-services',
  'price-advisory-services',
  'raise-fees-without-losing-clients',
  'referral-vs-other-leads',
  'respond-negative-reviews',
  'seo-vs-paid-ads-accountants',
  'should-accountant-blog',
  'should-buy-leads',
  'subscription-pricing-accountants',
  'technology-compete-tech-savvy-cpa',
  'time-savings-workflow-automation',
  'transition-compliance-advisory',
  'value-based-pricing-accounting',
  'what-is-marketing-automation-accounting',
  'workflow-automation-tools-accountants',
];

// 13 deprecated FAQ category slugs
const DEPRECATED_FAQ_CATEGORY_SLUGS = [
  'bookkeeping-services',
  'add-ons',
  'tax-preparation',
  'website-design',
  'social-media',
  'protect-practice-future',
  'email-marketing',
  'seo-local-search',
  'tools-calculators',
  'content-marketing',
  'lead-follow-up',
  'executive-services',
  'client-onboarding',
];

// Combined set for convenience (68 total)
const ALL_DEPRECATED_FAQ_SLUGS = [
  ...DEPRECATED_FAQ_QUESTION_SLUGS,
  ...DEPRECATED_FAQ_CATEGORY_SLUGS,
];

module.exports = {
  DEPRECATED_FAQ_QUESTION_SLUGS,
  DEPRECATED_FAQ_CATEGORY_SLUGS,
  ALL_DEPRECATED_FAQ_SLUGS,
};
