/**
 * Central Internal Links Configuration
 *
 * Maps every page to its related services, solutions, and tools.
 * Used by the RelatedContent component to render cross-linking sections.
 *
 * When adding a new page:
 * 1. Add its entry here with 2-3 related services, 1-2 solutions, 1-2 tools
 * 2. Update related pages to link back (bidirectional linking)
 */

export interface RelatedPageLink {
  title: string;
  description: string;
  href: string;
}

export interface PageRelationships {
  relatedServices?: RelatedPageLink[];
  relatedSolutions?: RelatedPageLink[];
  relatedTools?: RelatedPageLink[];
}

// =====================================================
// REUSABLE LINK DEFINITIONS
// Define each page link once, reference everywhere
// =====================================================

// --- Services ---
const SVC_MARKETING_AUTOMATION: RelatedPageLink = {
  title: "Marketing Automation",
  description: "Automated lead capture, nurture, and follow-up in one connected system",
  href: "/services/marketing-automation-for-accounting-firms/"
};
const SVC_LEAD_FOLLOWUP: RelatedPageLink = {
  title: "Automated Lead Follow-up",
  description: "Instant, personalized responses that convert more inquiries into clients",
  href: "/services/automated-lead-follow-up-for-accounting-firms/"
};
const SVC_EMAIL_MARKETING: RelatedPageLink = {
  title: "Email Marketing",
  description: "Targeted campaigns and newsletters that keep clients engaged year-round",
  href: "/services/email-marketing-for-accounting-firms/"
};
const SVC_SEO: RelatedPageLink = {
  title: "SEO for Accountants",
  description: "AI-powered local search optimization to rank higher and attract prospects",
  href: "/services/seo-for-accounting-firms/"
};
const SVC_CONTENT_MARKETING: RelatedPageLink = {
  title: "Content Marketing",
  description: "SEO-optimized content that builds authority and attracts qualified leads",
  href: "/services/content-marketing-for-accounting-firms/"
};
const SVC_WEBSITE_DESIGN: RelatedPageLink = {
  title: "Website Design",
  description: "Conversion-focused websites with built-in SEO foundations",
  href: "/services/website-design-for-accounting-firms/"
};
const SVC_SOCIAL_MEDIA: RelatedPageLink = {
  title: "Social Media Management",
  description: "Consistent social presence that builds trust and generates referrals",
  href: "/services/social-media-management-for-accounting-firms/"
};
const SVC_REVIEW_GEN: RelatedPageLink = {
  title: "Client Review Generation",
  description: "Automated review requests that build your online reputation",
  href: "/services/automated-review-generation-for-cpas/"
};
const SVC_REPUTATION: RelatedPageLink = {
  title: "Online Reputation Management",
  description: "Monitor and improve your firm's online presence across review platforms",
  href: "/services/reputation-management-for-cpa-firms/"
};
const SVC_BIZ_OPTIMIZATION: RelatedPageLink = {
  title: "Business Optimization",
  description: "Operational frameworks and process improvements for sustainable growth",
  href: "/services/business-optimization-for-accounting-firms/"
};
const SVC_TECHNOLOGY: RelatedPageLink = {
  title: "Technology Solutions",
  description: "Strategic technology consulting to modernize your firm's operations",
  href: "/services/technology-consulting-for-accounting-firms/"
};
const SVC_EXECUTIVE: RelatedPageLink = {
  title: "Fractional CIO Services",
  description: "Executive-level technology leadership without full-time overhead",
  href: "/services/fractional-cio-for-accounting-firms/"
};
const SVC_STRATEGY: RelatedPageLink = {
  title: "Strategy & Integration",
  description: "Unified marketing strategy that connects all your channels",
  href: "/services/marketing-strategy-integration-for-accounting-firms/"
};
const SVC_AI_ROADMAP: RelatedPageLink = {
  title: "AI Transformation Roadmap",
  description: "A structured plan to integrate AI into your firm's workflows",
  href: "/services/ai-transformation-roadmap-for-accounting-firms/"
};
const SVC_AI_PROCESS: RelatedPageLink = {
  title: "AI Process Optimization",
  description: "Apply AI to a single process and measure the impact before scaling",
  href: "/services/ai-process-optimization-for-accounting-firms/"
};
const SVC_ONBOARDING: RelatedPageLink = {
  title: "Client Onboarding Automation",
  description: "Streamline intake with automated workflows and document collection",
  href: "/services/client-onboarding-automation/"
};
const SVC_ADDONS: RelatedPageLink = {
  title: "Marketing Add-Ons",
  description: "Extend your marketing with targeted add-on services",
  href: "/services/marketing-add-ons-for-accounting-firms/"
};

// --- Solutions ---
const SOL_SCALE: RelatedPageLink = {
  title: "Scale Your Firm",
  description: "Grow your practice without proportional stress or hiring",
  href: "/solutions/scale-accounting-firm-without-chaos/"
};
const SOL_STOP_LOSING: RelatedPageLink = {
  title: "Stop Losing Clients",
  description: "Stay ahead of tech-savvy competitors with modern client experiences",
  href: "/solutions/stop-losing-clients-to-tech-savvy-cpas/"
};
const SOL_REFERRALS: RelatedPageLink = {
  title: "Get More Referrals",
  description: "Build a referral engine that works without asking clients directly",
  href: "/solutions/get-more-referrals-for-cpa-firm-without-asking/"
};
const SOL_WORK_LESS: RelatedPageLink = {
  title: "Work Less, Earn More",
  description: "Reclaim hours each week by automating routine tasks",
  href: "/solutions/work-less-earn-more-as-a-cpa/"
};
const SOL_GROW: RelatedPageLink = {
  title: "Grow Without Growing Pains",
  description: "Expand capacity and revenue without operational chaos",
  href: "/solutions/grow-accounting-firm-without-growing-pains/"
};
const SOL_PROTECT: RelatedPageLink = {
  title: "Protect Your Practice",
  description: "Safeguard your firm with resilient technology and continuity planning",
  href: "/solutions/protect-accounting-practice-from-data-breaches/"
};
const SOL_ONBOARDING: RelatedPageLink = {
  title: "Fix Client Onboarding",
  description: "Solve intake bottlenecks and deliver a consistent first impression",
  href: "/solutions/client-onboarding-problems/"
};

// --- Tools ---
const TOOL_EFFICIENCY: RelatedPageLink = {
  title: "Efficiency Assessment",
  description: "Identify bottlenecks and inefficiencies in your current workflows",
  href: "/tools/accounting-firm-efficiency-assessment/"
};
const TOOL_MARKETING_ASSESS: RelatedPageLink = {
  title: "Marketing Assessment",
  description: "Evaluate your firm's marketing strengths and gaps",
  href: "/tools/marketing-assessment-for-accountants/"
};
const TOOL_ROI_CALC: RelatedPageLink = {
  title: "Marketing ROI Calculator",
  description: "Estimate the return on your marketing investment",
  href: "/tools/marketing-roi-calculator-for-accounting-firms/"
};
const TOOL_AUTOMATION_READY: RelatedPageLink = {
  title: "Automation Readiness Quiz",
  description: "Find out how ready your firm is for automation",
  href: "/tools/automation-readiness-assessment-for-accountants/"
};
const TOOL_WORKFLOW: RelatedPageLink = {
  title: "Workflow Audit Tool",
  description: "Map and optimize your firm's key workflows",
  href: "/tools/accounting-firm-workflow-audit-tool/"
};
const TOOL_TECH_ROI: RelatedPageLink = {
  title: "Technology ROI Calculator",
  description: "Calculate the return on your technology investments",
  href: "/tools/accounting-firm-technology-roi-calculator/"
};
const TOOL_CLV: RelatedPageLink = {
  title: "Client Lifetime Value Calculator",
  description: "Understand the long-term value of your client relationships",
  href: "/tools/client-lifetime-value-calculator-for-accountants/"
};
const TOOL_LEAD_SCORE: RelatedPageLink = {
  title: "Lead Generation Scorecard",
  description: "Score your firm's lead generation effectiveness",
  href: "/tools/lead-generation-scorecard-for-accounting-firms/"
};
const TOOL_MODERN_FIRM: RelatedPageLink = {
  title: "Modern Firm Assessment",
  description: "See how your firm compares to modern practice standards",
  href: "/tools/modern-accounting-firm-assessment/"
};
const TOOL_GROWTH: RelatedPageLink = {
  title: "Growth Scorecard",
  description: "Assess your firm's readiness to scale",
  href: "/tools/accounting-firm-growth-scorecard/"
};
const TOOL_SEO_AUDIT: RelatedPageLink = {
  title: "SEO Audit",
  description: "Check how your accounting firm website performs in search",
  href: "/tools/seo-audit/"
};
const TOOL_PAGE_GRADER: RelatedPageLink = {
  title: "Page Grader",
  description: "Score any page for SEO and conversion readiness",
  href: "/tools/page-grader/"
};

// =====================================================
// PAGE RELATIONSHIP MAP
// =====================================================

const internalLinks: Record<string, PageRelationships> = {

  // ========================
  // SERVICE PAGES (17)
  // ========================

  "/services/marketing-automation-for-accounting-firms": {
    relatedServices: [SVC_LEAD_FOLLOWUP, SVC_EMAIL_MARKETING, SVC_ONBOARDING],
    relatedSolutions: [SOL_SCALE, SOL_WORK_LESS],
    relatedTools: [TOOL_AUTOMATION_READY, TOOL_ROI_CALC]
  },

  "/services/automated-lead-follow-up-for-accounting-firms": {
    relatedServices: [SVC_MARKETING_AUTOMATION, SVC_EMAIL_MARKETING, SVC_SEO],
    relatedSolutions: [SOL_SCALE, SOL_REFERRALS],
    relatedTools: [TOOL_LEAD_SCORE, TOOL_ROI_CALC]
  },

  "/services/email-marketing-for-accounting-firms": {
    relatedServices: [SVC_MARKETING_AUTOMATION, SVC_CONTENT_MARKETING, SVC_REVIEW_GEN],
    relatedSolutions: [SOL_STOP_LOSING, SOL_REFERRALS],
    relatedTools: [TOOL_CLV, TOOL_MARKETING_ASSESS]
  },

  "/services/seo-for-accounting-firms": {
    relatedServices: [SVC_CONTENT_MARKETING, SVC_WEBSITE_DESIGN, SVC_REPUTATION],
    relatedSolutions: [SOL_REFERRALS, SOL_SCALE],
    relatedTools: [TOOL_SEO_AUDIT, TOOL_PAGE_GRADER]
  },

  "/services/content-marketing-for-accounting-firms": {
    relatedServices: [SVC_SEO, SVC_SOCIAL_MEDIA, SVC_EMAIL_MARKETING],
    relatedSolutions: [SOL_REFERRALS, SOL_STOP_LOSING],
    relatedTools: [TOOL_SEO_AUDIT, TOOL_MARKETING_ASSESS]
  },

  "/services/website-design-for-accounting-firms": {
    relatedServices: [SVC_SEO, SVC_CONTENT_MARKETING, SVC_LEAD_FOLLOWUP],
    relatedSolutions: [SOL_STOP_LOSING, SOL_SCALE],
    relatedTools: [TOOL_PAGE_GRADER, TOOL_SEO_AUDIT]
  },

  "/services/social-media-management-for-accounting-firms": {
    relatedServices: [SVC_CONTENT_MARKETING, SVC_REPUTATION, SVC_EMAIL_MARKETING],
    relatedSolutions: [SOL_REFERRALS, SOL_STOP_LOSING],
    relatedTools: [TOOL_MARKETING_ASSESS, TOOL_LEAD_SCORE]
  },

  "/services/automated-review-generation-for-cpas": {
    relatedServices: [SVC_REPUTATION, SVC_SEO, SVC_EMAIL_MARKETING],
    relatedSolutions: [SOL_REFERRALS, SOL_STOP_LOSING],
    relatedTools: [TOOL_MARKETING_ASSESS, TOOL_MODERN_FIRM]
  },

  "/services/reputation-management-for-cpa-firms": {
    relatedServices: [SVC_REVIEW_GEN, SVC_SEO, SVC_SOCIAL_MEDIA],
    relatedSolutions: [SOL_REFERRALS, SOL_PROTECT],
    relatedTools: [TOOL_MARKETING_ASSESS, TOOL_MODERN_FIRM]
  },

  "/services/business-optimization-for-accounting-firms": {
    relatedServices: [SVC_TECHNOLOGY, SVC_STRATEGY, SVC_ONBOARDING],
    relatedSolutions: [SOL_GROW, SOL_WORK_LESS],
    relatedTools: [TOOL_EFFICIENCY, TOOL_WORKFLOW]
  },

  "/services/technology-consulting-for-accounting-firms": {
    relatedServices: [SVC_BIZ_OPTIMIZATION, SVC_EXECUTIVE, SVC_AI_ROADMAP],
    relatedSolutions: [SOL_PROTECT, SOL_GROW],
    relatedTools: [TOOL_TECH_ROI, TOOL_AUTOMATION_READY]
  },

  "/services/fractional-cio-for-accounting-firms": {
    relatedServices: [SVC_TECHNOLOGY, SVC_BIZ_OPTIMIZATION, SVC_AI_ROADMAP],
    relatedSolutions: [SOL_PROTECT, SOL_SCALE],
    relatedTools: [TOOL_TECH_ROI, TOOL_MODERN_FIRM]
  },

  "/services/marketing-strategy-integration-for-accounting-firms": {
    relatedServices: [SVC_MARKETING_AUTOMATION, SVC_SEO, SVC_CONTENT_MARKETING],
    relatedSolutions: [SOL_GROW, SOL_SCALE],
    relatedTools: [TOOL_MARKETING_ASSESS, TOOL_ROI_CALC]
  },

  "/services/ai-transformation-roadmap-for-accounting-firms": {
    relatedServices: [SVC_AI_PROCESS, SVC_TECHNOLOGY, SVC_BIZ_OPTIMIZATION],
    relatedSolutions: [SOL_WORK_LESS, SOL_SCALE],
    relatedTools: [TOOL_AUTOMATION_READY, TOOL_TECH_ROI]
  },

  "/services/ai-process-optimization-for-accounting-firms": {
    relatedServices: [SVC_AI_ROADMAP, SVC_TECHNOLOGY, SVC_MARKETING_AUTOMATION],
    relatedSolutions: [SOL_WORK_LESS, SOL_GROW],
    relatedTools: [TOOL_AUTOMATION_READY, TOOL_EFFICIENCY]
  },

  "/services/client-onboarding-automation": {
    relatedServices: [SVC_MARKETING_AUTOMATION, SVC_LEAD_FOLLOWUP, SVC_BIZ_OPTIMIZATION],
    relatedSolutions: [SOL_ONBOARDING, SOL_SCALE],
    relatedTools: [TOOL_WORKFLOW, TOOL_EFFICIENCY]
  },

  "/services/marketing-add-ons-for-accounting-firms": {
    relatedServices: [SVC_MARKETING_AUTOMATION, SVC_STRATEGY, SVC_EMAIL_MARKETING],
    relatedSolutions: [SOL_GROW, SOL_SCALE],
    relatedTools: [TOOL_MARKETING_ASSESS, TOOL_ROI_CALC]
  },

  // ========================
  // SOLUTION PAGES (7)
  // ========================

  "/solutions/scale-accounting-firm-without-chaos": {
    relatedServices: [SVC_MARKETING_AUTOMATION, SVC_ONBOARDING, SVC_BIZ_OPTIMIZATION],
    relatedSolutions: [SOL_WORK_LESS, SOL_GROW],
    relatedTools: [TOOL_GROWTH, TOOL_EFFICIENCY]
  },

  "/solutions/stop-losing-clients-to-tech-savvy-cpas": {
    relatedServices: [SVC_EMAIL_MARKETING, SVC_WEBSITE_DESIGN, SVC_SOCIAL_MEDIA],
    relatedSolutions: [SOL_REFERRALS, SOL_PROTECT],
    relatedTools: [TOOL_MODERN_FIRM, TOOL_MARKETING_ASSESS]
  },

  "/solutions/get-more-referrals-for-cpa-firm-without-asking": {
    relatedServices: [SVC_REVIEW_GEN, SVC_SEO, SVC_CONTENT_MARKETING],
    relatedSolutions: [SOL_STOP_LOSING, SOL_SCALE],
    relatedTools: [TOOL_LEAD_SCORE, TOOL_CLV]
  },

  "/solutions/work-less-earn-more-as-a-cpa": {
    relatedServices: [SVC_MARKETING_AUTOMATION, SVC_LEAD_FOLLOWUP, SVC_TECHNOLOGY],
    relatedSolutions: [SOL_SCALE, SOL_GROW],
    relatedTools: [TOOL_EFFICIENCY, TOOL_AUTOMATION_READY]
  },

  "/solutions/grow-accounting-firm-without-growing-pains": {
    relatedServices: [SVC_BIZ_OPTIMIZATION, SVC_STRATEGY, SVC_MARKETING_AUTOMATION],
    relatedSolutions: [SOL_SCALE, SOL_WORK_LESS],
    relatedTools: [TOOL_GROWTH, TOOL_WORKFLOW]
  },

  "/solutions/protect-accounting-practice-from-data-breaches": {
    relatedServices: [SVC_TECHNOLOGY, SVC_EXECUTIVE, SVC_BIZ_OPTIMIZATION],
    relatedSolutions: [SOL_STOP_LOSING, SOL_GROW],
    relatedTools: [TOOL_TECH_ROI, TOOL_MODERN_FIRM]
  },

  "/solutions/client-onboarding-problems": {
    relatedServices: [SVC_ONBOARDING, SVC_MARKETING_AUTOMATION, SVC_LEAD_FOLLOWUP],
    relatedSolutions: [SOL_SCALE, SOL_WORK_LESS],
    relatedTools: [TOOL_WORKFLOW, TOOL_EFFICIENCY]
  },

  // ========================
  // INDUSTRY PAGES (4)
  // ========================

  "/industries/automation-for-tax-preparation-firms": {
    relatedServices: [SVC_MARKETING_AUTOMATION, SVC_SEO, SVC_EMAIL_MARKETING],
    relatedSolutions: [SOL_SCALE, SOL_WORK_LESS],
    relatedTools: [TOOL_AUTOMATION_READY, TOOL_ROI_CALC]
  },

  "/industries/marketing-for-bookkeeping-firms": {
    relatedServices: [SVC_SEO, SVC_CONTENT_MARKETING, SVC_SOCIAL_MEDIA],
    relatedSolutions: [SOL_REFERRALS, SOL_GROW],
    relatedTools: [TOOL_MARKETING_ASSESS, TOOL_LEAD_SCORE]
  },

  "/industries/business-advisory": {
    relatedServices: [SVC_STRATEGY, SVC_CONTENT_MARKETING, SVC_EXECUTIVE],
    relatedSolutions: [SOL_SCALE, SOL_GROW],
    relatedTools: [TOOL_GROWTH, TOOL_CLV]
  },

  "/industries/marketing-for-audit-firms": {
    relatedServices: [SVC_REPUTATION, SVC_WEBSITE_DESIGN, SVC_SEO],
    relatedSolutions: [SOL_PROTECT, SOL_REFERRALS],
    relatedTools: [TOOL_MODERN_FIRM, TOOL_MARKETING_ASSESS]
  },

  // ========================
  // TOOL PAGES (13)
  // ========================

  "/tools/accounting-firm-efficiency-assessment": {
    relatedServices: [SVC_BIZ_OPTIMIZATION, SVC_TECHNOLOGY, SVC_ONBOARDING],
    relatedSolutions: [SOL_WORK_LESS, SOL_SCALE]
  },

  "/tools/marketing-assessment-for-accountants": {
    relatedServices: [SVC_STRATEGY, SVC_MARKETING_AUTOMATION, SVC_SEO],
    relatedSolutions: [SOL_REFERRALS, SOL_GROW]
  },

  "/tools/marketing-roi-calculator-for-accounting-firms": {
    relatedServices: [SVC_MARKETING_AUTOMATION, SVC_SEO, SVC_EMAIL_MARKETING],
    relatedSolutions: [SOL_SCALE, SOL_GROW]
  },

  "/tools/automation-readiness-assessment-for-accountants": {
    relatedServices: [SVC_MARKETING_AUTOMATION, SVC_AI_ROADMAP, SVC_TECHNOLOGY],
    relatedSolutions: [SOL_WORK_LESS, SOL_SCALE]
  },

  "/tools/accounting-firm-workflow-audit-tool": {
    relatedServices: [SVC_BIZ_OPTIMIZATION, SVC_ONBOARDING, SVC_TECHNOLOGY],
    relatedSolutions: [SOL_WORK_LESS, SOL_ONBOARDING]
  },

  "/tools/accounting-firm-technology-roi-calculator": {
    relatedServices: [SVC_TECHNOLOGY, SVC_EXECUTIVE, SVC_AI_ROADMAP],
    relatedSolutions: [SOL_PROTECT, SOL_GROW]
  },

  "/tools/client-lifetime-value-calculator-for-accountants": {
    relatedServices: [SVC_EMAIL_MARKETING, SVC_REVIEW_GEN, SVC_LEAD_FOLLOWUP],
    relatedSolutions: [SOL_STOP_LOSING, SOL_REFERRALS]
  },

  "/tools/lead-generation-scorecard-for-accounting-firms": {
    relatedServices: [SVC_SEO, SVC_LEAD_FOLLOWUP, SVC_CONTENT_MARKETING],
    relatedSolutions: [SOL_REFERRALS, SOL_SCALE]
  },

  "/tools/modern-accounting-firm-assessment": {
    relatedServices: [SVC_TECHNOLOGY, SVC_MARKETING_AUTOMATION, SVC_WEBSITE_DESIGN],
    relatedSolutions: [SOL_STOP_LOSING, SOL_GROW]
  },

  "/tools/accounting-firm-growth-scorecard": {
    relatedServices: [SVC_STRATEGY, SVC_BIZ_OPTIMIZATION, SVC_MARKETING_AUTOMATION],
    relatedSolutions: [SOL_SCALE, SOL_GROW]
  },

  "/tools/seo-audit": {
    relatedServices: [SVC_SEO, SVC_CONTENT_MARKETING, SVC_WEBSITE_DESIGN],
    relatedSolutions: [SOL_REFERRALS, SOL_SCALE]
  },

  "/tools/page-grader": {
    relatedServices: [SVC_WEBSITE_DESIGN, SVC_SEO, SVC_CONTENT_MARKETING],
    relatedSolutions: [SOL_STOP_LOSING, SOL_REFERRALS]
  },

  "/tools/advanced-seo-qa": {
    relatedServices: [SVC_SEO, SVC_CONTENT_MARKETING, SVC_WEBSITE_DESIGN],
    relatedSolutions: [SOL_REFERRALS, SOL_SCALE]
  },

  // ========================
  // HUB & STANDALONE PAGES
  // ========================

  "/marketing-agency-for-accounting-firms": {
    // About page
    relatedServices: [SVC_STRATEGY, SVC_MARKETING_AUTOMATION, SVC_SEO],
    relatedSolutions: [SOL_SCALE, SOL_GROW],
    relatedTools: [TOOL_MARKETING_ASSESS]
  },

  "/case-studies": {
    relatedServices: [SVC_MARKETING_AUTOMATION, SVC_BIZ_OPTIMIZATION, SVC_TECHNOLOGY],
    relatedSolutions: [SOL_SCALE, SOL_WORK_LESS]
  },

  "/case-studies/payroll-automation-roi-for-accounting-firms": {
    relatedServices: [SVC_BIZ_OPTIMIZATION, SVC_TECHNOLOGY, SVC_MARKETING_AUTOMATION],
    relatedSolutions: [SOL_WORK_LESS, SOL_SCALE],
    relatedTools: [TOOL_EFFICIENCY, TOOL_TECH_ROI]
  },

  "/resources": {
    relatedServices: [SVC_STRATEGY, SVC_MARKETING_AUTOMATION],
    relatedSolutions: [SOL_SCALE, SOL_GROW],
    relatedTools: [TOOL_MARKETING_ASSESS, TOOL_AUTOMATION_READY]
  },
};

/**
 * Get relationships for a page by its pathname.
 * Normalizes the path by removing trailing slashes for consistent lookup.
 */
export function getRelationships(pathname: string): PageRelationships {
  const normalized = pathname.replace(/\/+$/, "");
  return internalLinks[normalized] || {};
}

export default internalLinks;
