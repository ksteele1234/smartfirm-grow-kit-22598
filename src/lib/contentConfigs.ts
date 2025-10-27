import { ContentConfig } from './pageGenerator';

/**
 * Content generation configs for all pages
 * Maps page identifiers to their keyword and persona targeting
 */

export const serviceContentConfigs: Record<string, ContentConfig> = {
  'marketing-automation': {
    pageName: 'Marketing Automation',
    pageType: 'technical',
    industryFocus: 'Accounting Firm',
    primaryKeyword: 'marketing automation for accounting firms',
    secondaryKeywords: [
      'accounting firm marketing',
      'automated client acquisition',
      'CRM integration',
      'lead nurturing'
    ],
    personaTarget: 'grace_icp_growth_cpa_owner'
  },
  'seo-for-accountants': {
    pageName: 'SEO for Accountants',
    pageType: 'technical',
    industryFocus: 'CPA',
    primaryKeyword: 'SEO for accountants',
    secondaryKeywords: [
      'local SEO for CPAs',
      'accounting firm SEO',
      'CPA search engine optimization',
      'accountant website optimization'
    ],
    personaTarget: 'nick_nashville_cpa'
  },
  'website-design': {
    pageName: 'Website Design',
    pageType: 'technical',
    industryFocus: 'Accounting Firm',
    primaryKeyword: 'website design for accounting firms',
    secondaryKeywords: [
      'accounting website development',
      'CPA website design',
      'professional accounting websites',
      'conversion-optimized websites'
    ]
  },
  'email-marketing': {
    pageName: 'Email Marketing',
    pageType: 'technical',
    industryFocus: 'Accounting Firm',
    primaryKeyword: 'email marketing for accountants',
    secondaryKeywords: [
      'accounting newsletter campaigns',
      'client email automation',
      'CPA email marketing',
      'automated email sequences'
    ]
  },
  'content-marketing': {
    pageName: 'Content Marketing',
    pageType: 'technical',
    industryFocus: 'CPA',
    primaryKeyword: 'content marketing for accounting firms',
    secondaryKeywords: [
      'accounting blog writing',
      'CPA content strategy',
      'financial content creation',
      'thought leadership'
    ]
  }
};

export const solutionContentConfigs: Record<string, ContentConfig> = {
  'client-retention': {
    pageName: 'Client Retention',
    pageType: 'problem',
    industryFocus: 'Accounting Firm',
    primaryKeyword: 'client retention strategies',
    secondaryKeywords: [
      'reduce client churn',
      'client engagement',
      'loyalty programs',
      'retention automation'
    ],
    personaTarget: 'grace_icp_growth_cpa_owner'
  },
  'stop-losing-clients': {
    pageName: 'Stop Losing Clients to Tech-Savvy CPAs',
    pageType: 'problem',
    industryFocus: 'CPA',
    primaryKeyword: 'CPA marketing automation',
    secondaryKeywords: [
      'client retention strategies',
      'CPA lead generation',
      'competitive advantage',
      'technology adoption'
    ],
    personaTarget: 'nick_nashville_cpa'
  },
  'scale-firm': {
    pageName: 'Scale Your Firm',
    pageType: 'problem',
    industryFocus: 'Accounting Firm',
    primaryKeyword: 'scale accounting firm',
    secondaryKeywords: [
      'firm growth strategies',
      'operational efficiency',
      'scaling without hiring',
      'practice expansion'
    ],
    personaTarget: 'grace_icp_growth_cpa_owner'
  },
  'work-less-earn-more': {
    pageName: 'Work Less, Earn More',
    pageType: 'problem',
    industryFocus: 'Small Firm',
    primaryKeyword: 'accounting firm efficiency',
    secondaryKeywords: [
      'work-life balance',
      'automation tools',
      'passive revenue',
      'leverage technology'
    ],
    personaTarget: 'betty_bookkeeper'
  }
};

export const industryContentConfigs: Record<string, ContentConfig> = {
  'tax-preparation': {
    pageName: 'Tax Preparation Services',
    pageType: 'industry',
    industryFocus: 'Tax Preparer',
    primaryKeyword: 'marketing for tax preparers',
    secondaryKeywords: [
      'tax preparation marketing',
      'tax season lead generation',
      'tax preparer client acquisition',
      'tax service automation'
    ]
  },
  'bookkeeping-services': {
    pageName: 'Bookkeeping Services',
    pageType: 'industry',
    industryFocus: 'Bookkeeper',
    primaryKeyword: 'bookkeeping marketing',
    secondaryKeywords: [
      'bookkeeper lead generation',
      'bookkeeping firm growth',
      'virtual bookkeeping',
      'bookkeeper client acquisition'
    ],
    personaTarget: 'betty_bookkeeper'
  },
  'cpa-firms': {
    pageName: 'CPA Firms',
    pageType: 'industry',
    industryFocus: 'CPA',
    primaryKeyword: 'CPA firm marketing',
    secondaryKeywords: [
      'CPA lead generation',
      'accounting firm growth',
      'CPA client acquisition',
      'professional services marketing'
    ]
  }
};
