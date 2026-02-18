import { keywordMappings, type KeywordMapping } from '@/data/keywordMappings';

/**
 * Phase 2: Content Generation System
 * Handles keyword mapping, persona targeting, and content adaptation
 */

export interface PersonaConfig {
  id: string;
  name: string;
  industry: string[];
  tone: string;
  preferredCTAs: string[];
  keyObjections: string[];
}

export interface ContentConfig {
  pageName: string;
  pageType: 'problem' | 'technical' | 'industry' | 'success' | 'resource' | 'about' | 'get_started';
  industryFocus: 'CPA' | 'Small Firm' | 'Bookkeeper' | 'Tax Preparer' | 'Accounting Firm' | 'General';
  primaryKeyword: string;
  secondaryKeywords: string[];
  personaTarget?: string;
  density?: number;
}

/**
 * Get keyword mappings (pre-parsed at build time)
 */
export function loadKeywordMappings(): KeywordMapping[] {
  return keywordMappings;
}

/**
 * Resolve keywords for a specific page and industry
 */
export function resolveKeywordsForPage(
  pageName: string,
  industry: ContentConfig['industryFocus']
): { primary: string; secondary: string[] } {
  const mappings = loadKeywordMappings();
  
  // Find exact match by landing page
  let mapping = mappings.find(m => 
    m.landingPage.toLowerCase().includes(pageName.toLowerCase())
  );
  
  // If no exact match, find by category
  if (!mapping) {
    mapping = mappings.find(m => 
      pageName.toLowerCase().includes(m.category.toLowerCase())
    );
  }
  
  if (!mapping) {
    return {
      primary: 'marketing for accountants',
      secondary: ['accounting firm growth', 'CPA marketing automation']
    };
  }
  
  // Select keywords based on industry
  let industryKeywords = '';
  switch (industry) {
    case 'CPA':
      industryKeywords = mapping.cpas;
      break;
    case 'Bookkeeper':
      industryKeywords = mapping.bookkeepers;
      break;
    case 'Tax Preparer':
      industryKeywords = mapping.taxPreparers;
      break;
    case 'Accounting Firm':
      industryKeywords = mapping.accountingFirms;
      break;
    default:
      industryKeywords = mapping.accountants;
  }
  
  // Parse keywords
  const keywordList = industryKeywords
    .split(',')
    .map(k => k.trim())
    .filter(k => k.length > 0);
  
  return {
    primary: keywordList[0] || mapping.rootKeywords.split(',')[0]?.trim() || 'marketing for accountants',
    secondary: keywordList.slice(1, 5)
  };
}

/**
 * Generate meta description with keyword integration
 */
export function generateMetaDescription(
  primaryKeyword: string,
  benefit: string,
  maxLength: number = 160
): string {
  const template = `${benefit} with ${primaryKeyword}. Proven strategies for accounting firms.`;
  
  if (template.length <= maxLength) {
    return template;
  }
  
  // Truncate if too long
  return template.substring(0, maxLength - 3) + '...';
}

/**
 * Calculate keyword density
 */
export function calculateKeywordDensity(text: string, keyword: string): number {
  const words = text.toLowerCase().split(/\s+/);
  const keywordWords = keyword.toLowerCase().split(/\s+/);
  
  let occurrences = 0;
  for (let i = 0; i <= words.length - keywordWords.length; i++) {
    const phrase = words.slice(i, i + keywordWords.length).join(' ');
    if (phrase === keywordWords.join(' ')) {
      occurrences++;
    }
  }
  
  return (occurrences / words.length) * 100;
}

/**
 * Validate keyword placement
 */
export function validateKeywordPlacement(
  h1: string,
  intro: string,
  h2h3: string[],
  meta: string,
  primaryKeyword: string
): {
  valid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  // Check H1
  if (!h1.toLowerCase().includes(primaryKeyword.toLowerCase())) {
    errors.push('Primary keyword missing from H1');
  }
  
  // Check intro (first 150 words)
  const introWords = intro.split(/\s+/).slice(0, 150).join(' ');
  if (!introWords.toLowerCase().includes(primaryKeyword.toLowerCase())) {
    errors.push('Primary keyword missing from intro (first 150 words)');
  }
  
  // Check H2/H3
  const hasKeywordInSubhead = h2h3.some(h => 
    h.toLowerCase().includes(primaryKeyword.toLowerCase())
  );
  if (!hasKeywordInSubhead) {
    warnings.push('Primary keyword missing from H2/H3 subheads');
  }
  
  // Check meta description
  if (!meta.toLowerCase().includes(primaryKeyword.toLowerCase())) {
    errors.push('Primary keyword missing from meta description');
  }
  
  // Check density
  const fullText = `${h1} ${intro} ${h2h3.join(' ')}`;
  const density = calculateKeywordDensity(fullText, primaryKeyword);
  if (density > 2.0) {
    warnings.push(`Keyword density too high: ${density.toFixed(2)}% (max 2%)`);
  }
  
  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Adapt content tone for persona
 */
export function adaptContentForPersona(
  content: string,
  personaId: string
): string {
  // Persona-specific tone adaptations
  const adaptations: Record<string, (text: string) => string> = {
    grace_icp_growth_cpa_owner: (text) => {
      // Professional, data-backed, confident
      return text
        .replace(/we help/gi, 'we deliver measurable outcomes for')
        .replace(/easy/gi, 'streamlined')
        .replace(/simple/gi, 'efficient');
    },
    betty_bookkeeper: (text) => {
      // Clear, friendly, no jargon
      return text
        .replace(/leverage/gi, 'use')
        .replace(/optimize/gi, 'improve')
        .replace(/sophisticated/gi, 'effective');
    },
    nick_nashville_cpa: (text) => {
      // Direct, outcome-first
      return text
        .replace(/consider/gi, 'get')
        .replace(/potentially/gi, '')
        .replace(/might/gi, 'will');
    }
  };
  
  const adapter = adaptations[personaId];
  return adapter ? adapter(content) : content;
}

/**
 * Generate CTA based on persona and page type
 */
export function generateCTAForPersona(
  personaId: string,
  pageType: ContentConfig['pageType']
): { label: string; url: string } {
  const ctaMap: Record<string, Record<string, { label: string; url: string }>> = {
    grace_icp_growth_cpa_owner: {
      problem: { label: 'Book Strategy Call', url: '/get-started-accounting-firm-automation' },
      technical: { label: 'See How It Works', url: '/get-started-accounting-firm-automation' },
      industry: { label: 'Request Pilot', url: '/get-started-accounting-firm-automation' }
    },
    betty_bookkeeper: {
      problem: { label: 'Start with Starter Plan', url: '/get-started-accounting-firm-automation' },
      technical: { label: 'See Templates', url: '/resources' },
      industry: { label: 'View Simple Setup', url: '/get-started-accounting-firm-automation' }
    },
    nick_nashville_cpa: {
      problem: { label: 'See 10-Min Demo', url: '/get-started-accounting-firm-automation' },
      technical: { label: 'Audit My Funnel', url: '/tools' },
      industry: { label: 'Book Quick Call', url: '/get-started-accounting-firm-automation' }
    }
  };
  
  return ctaMap[personaId]?.[pageType] || {
    label: 'Get Started Today',
    url: '/get-started-accounting-firm-automation'
  };
}
