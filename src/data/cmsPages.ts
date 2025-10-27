import { ServicePageData, SolutionPageData, IndustryPageData } from '@/types/cms';

/**
 * Phase 4: CMS Data Structures
 * Central repository for all page content with keyword optimization
 */

// Example Service Pages with full CMS data
export const servicePages: Record<string, ServicePageData> = {
  'marketing-automation': {
    id: 'marketing-automation',
    title: 'Marketing Automation for Accounting Firms | SmartFirm.io',
    slug: 'marketing-automation',
    metaDescription: 'Comprehensive marketing automation solutions that help accounting firms attract, nurture, and convert clients on autopilot.',
    canonicalUrl: 'https://smartfirm.io/services/marketing-automation',
    heroTitle: 'Marketing Automation for Accounting Firms',
    heroSubtitle: 'Attract, nurture, and convert clients on autopilot',
    heroDescription: 'Our marketing automation platform is specifically designed for accounting firms to streamline client acquisition and retention.',
    content: {},
    benefits: [
      {
        title: 'Automated Lead Nurturing',
        description: 'Never lose a lead again with automated follow-up sequences that nurture prospects into clients.'
      },
      {
        title: 'Client Retention Workflows',
        description: 'Keep clients engaged year-round with automated check-ins, newsletters, and value-added content.'
      },
      {
        title: 'Performance Analytics',
        description: 'Track every metric that matters with comprehensive dashboards and reporting.'
      }
    ],
    features: [
      {
        title: 'Email Marketing Campaigns',
        description: 'Design and deploy professional email campaigns that resonate with your audience.',
        details: [
          'Pre-built templates for accounting firms',
          'A/B testing capabilities',
          'Behavioral triggers and automation'
        ]
      },
      {
        title: 'CRM Integration',
        description: 'Seamlessly integrate with your existing tools and workflows.',
        details: [
          'QuickBooks and Xero integration',
          'Calendar and booking sync',
          'Two-way data synchronization'
        ]
      }
    ],
    ctaTitle: 'Ready to Automate Your Marketing?',
    ctaDescription: 'Schedule a demo to see how our marketing automation platform can transform your firm.',
    ctaButtonText: 'Book Your Demo',
    ctaButtonLink: '/get-started'
  }
};

// Example Solution Pages
export const solutionPages: Record<string, SolutionPageData> = {
  'client-retention': {
    id: 'client-retention',
    title: 'Client Retention Strategies for Accounting Firms | SmartFirm.io',
    slug: 'client-retention',
    metaDescription: 'Proven client retention strategies that help accounting firms reduce churn and increase lifetime value.',
    canonicalUrl: 'https://smartfirm.io/solutions/client-retention',
    heroTitle: 'Client Retention Strategies That Work',
    heroSubtitle: 'Keep more clients, grow more revenue',
    problemStatement: 'Losing clients to competitors? Our proven retention strategies help accounting firms build lasting relationships.',
    solutionOverview: 'A comprehensive approach to client engagement, communication, and value delivery.',
    content: {},
    problemSolutionPairs: [
      {
        problem: 'Clients only hear from you during tax season',
        solution: 'Automated year-round engagement campaigns that provide consistent value'
      },
      {
        problem: 'No systematic follow-up process',
        solution: 'Structured retention workflows with timing and messaging optimized for accounting firms'
      }
    ],
    keyBenefits: [
      {
        title: 'Reduce Client Churn',
        description: 'Systematic engagement reduces attrition by up to 40%',
        points: [
          'Proactive communication calendars',
          'Value-added content delivery',
          'Automated check-ins and surveys'
        ]
      },
      {
        title: 'Increase Lifetime Value',
        description: 'Engaged clients buy more services and refer more often',
        points: [
          'Cross-sell and upsell automation',
          'Referral generation systems',
          'Service expansion workflows'
        ]
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Segment Your Client Base',
        description: 'Organize clients by service type, engagement level, and growth potential'
      },
      {
        step: 2,
        title: 'Deploy Retention Campaigns',
        description: 'Launch automated workflows tailored to each segment'
      },
      {
        step: 3,
        title: 'Monitor & Optimize',
        description: 'Track engagement metrics and continuously improve your approach'
      }
    ],
    results: [
      {
        metric: 'Client Retention',
        value: '94%',
        description: 'Average retention rate for firms using our system'
      },
      {
        metric: 'Revenue Growth',
        value: '32%',
        description: 'Average increase in revenue per client'
      },
      {
        metric: 'Referral Rate',
        value: '3x',
        description: 'Increase in client referrals'
      }
    ],
    ctaTitle: 'Start Retaining More Clients Today',
    ctaDescription: 'See how our retention system can transform your practice'
  }
};

// Example Industry Pages
export const industryPages: Record<string, IndustryPageData> = {
  'cpa-firms': {
    id: 'cpa-firms',
    title: 'Marketing Solutions for CPA Firms | SmartFirm.io',
    slug: 'cpa-firms',
    metaDescription: 'Specialized marketing and automation solutions designed specifically for CPA firms to attract and retain high-value clients.',
    canonicalUrl: 'https://smartfirm.io/industries/cpa-firms',
    heroTitle: 'Marketing Solutions for CPA Firms',
    heroSubtitle: 'Specialized strategies for CPA practices',
    industryOverview: 'CPA firms face unique challenges in client acquisition and retention. Our solutions are specifically designed for your needs.',
    content: {},
    challenges: [
      {
        title: 'Attracting High-Value Clients',
        description: 'Traditional marketing fails to attract the right prospects',
        solution: 'Targeted campaigns and positioning that resonates with ideal clients'
      },
      {
        title: 'Competing with Larger Firms',
        description: 'Big firms have bigger budgets and more resources',
        solution: 'Technology and automation that levels the playing field'
      }
    ],
    services: [
      {
        title: 'CPA Marketing Automation',
        description: 'Automated client acquisition and retention systems',
        link: '/services/marketing-automation'
      },
      {
        title: 'SEO for CPAs',
        description: 'Rank higher for high-intent CPA searches',
        link: '/services/seo-for-accountants'
      }
    ],
    caseStudies: [
      {
        title: 'Regional CPA Firm Doubles Revenue',
        client: 'Mid-sized CPA practice',
        result: '127% revenue growth in 18 months',
        link: '/success-stories'
      }
    ],
    ctaTitle: 'Ready to Transform Your CPA Firm?',
    ctaDescription: 'See how firms like yours are achieving predictable growth'
  }
};
