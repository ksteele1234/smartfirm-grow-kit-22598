import { 
  ContentConfig, 
  resolveKeywordsForPage, 
  generateMetaDescription,
  validateKeywordPlacement,
  adaptContentForPersona,
  generateCTAForPersona
} from './contentGenerator';

/**
 * Phase 2: Page Content Generator
 * Generates complete page content with proper keyword integration
 */

// Export ContentConfig for use in templates
export type { ContentConfig } from './contentGenerator';

export interface GeneratedPageContent {
  h1: string;
  intro: string;
  sections: Array<{
    h2: string;
    paragraphs: string[];
  }>;
  meta: {
    title: string;
    description: string;
  };
  cta: {
    label: string;
    url: string;
  };
  validation: {
    valid: boolean;
    errors: string[];
    warnings: string[];
  };
}

/**
 * Generate H1 with primary keyword
 */
function generateH1(primaryKeyword: string, pageType: string): string {
  const templates: Record<string, (kw: string) => string> = {
    problem: (kw) => `${kw.charAt(0).toUpperCase() + kw.slice(1)} That Solves Your Biggest Challenge`,
    technical: (kw) => `Professional ${kw.charAt(0).toUpperCase() + kw.slice(1)} Solutions`,
    industry: (kw) => `${kw.charAt(0).toUpperCase() + kw.slice(1)} for Your Practice`,
    success: (kw) => `How ${kw.charAt(0).toUpperCase() + kw.slice(1)} Transformed Results`,
    resource: (kw) => `Complete Guide to ${kw.charAt(0).toUpperCase() + kw.slice(1)}`,
    about: () => 'About SmartFirm.io',
    get_started: () => 'Get Started with SmartFirm.io'
  };
  
  const generator = templates[pageType] || templates.problem;
  return generator(primaryKeyword);
}

/**
 * Generate intro paragraph with primary keyword in first 150 words
 */
function generateIntro(
  primaryKeyword: string,
  secondaryKeywords: string[],
  pageType: string
): string {
  const templates: Record<string, string> = {
    problem: `Our ${primaryKeyword} helps accounting firms overcome critical challenges and achieve predictable growth. By combining ${secondaryKeywords[0] || 'proven strategies'} with ${secondaryKeywords[1] || 'automation technology'}, we deliver measurable outcomes that transform your practice. Unlike generic solutions, our approach is specifically designed for accounting professionals who need ${secondaryKeywords[2] || 'reliable results'}.`,
    technical: `${primaryKeyword.charAt(0).toUpperCase() + primaryKeyword.slice(1)} designed specifically for accounting firms. Our platform integrates ${secondaryKeywords[0] || 'marketing automation'}, ${secondaryKeywords[1] || 'client management'}, and ${secondaryKeywords[2] || 'analytics'} into one seamless solution. Built for CPAs and accounting professionals who demand professional-grade tools.`,
    industry: `Specialized ${primaryKeyword} tailored for your industry. We understand the unique challenges you face with ${secondaryKeywords[0] || 'client acquisition'}, ${secondaryKeywords[1] || 'retention'}, and ${secondaryKeywords[2] || 'growth'}. Our solutions are proven to work for accounting practices of all sizes.`,
    success: `Discover how ${primaryKeyword} helped firms achieve significant growth. Real results from ${secondaryKeywords[0] || 'marketing automation'}, proven ${secondaryKeywords[1] || 'strategies'}, and measurable ${secondaryKeywords[2] || 'outcomes'}.`,
    resource: `Everything you need to know about ${primaryKeyword}. This comprehensive guide covers ${secondaryKeywords[0] || 'best practices'}, ${secondaryKeywords[1] || 'implementation strategies'}, and ${secondaryKeywords[2] || 'proven frameworks'}.`
  };
  
  return templates[pageType] || templates.problem;
}

/**
 * Generate body sections with distributed secondary keywords
 */
function generateSections(
  primaryKeyword: string,
  secondaryKeywords: string[],
  pageType: string
): Array<{ h2: string; paragraphs: string[] }> {
  const sectionTemplates: Record<string, Array<{ h2: string; content: string }>> = {
    problem: [
      {
        h2: `Why ${secondaryKeywords[0]?.charAt(0).toUpperCase() + secondaryKeywords[0]?.slice(1) || 'This Solution'} Works`,
        content: `Traditional approaches fail because they aren't designed for accounting firms. Our ${primaryKeyword} addresses the specific needs of CPAs and accounting professionals. Through ${secondaryKeywords[1] || 'proven methods'}, we deliver results that matter.`
      },
      {
        h2: 'Proven Results for Accounting Firms',
        content: `Firms using our ${secondaryKeywords[2] || 'solutions'} see measurable improvements in client acquisition, retention, and revenue. The combination of technology and strategy creates sustainable growth.`
      },
      {
        h2: 'How It Works',
        content: `Our systematic approach ensures successful implementation. From initial setup through ongoing optimization, we support your firm every step of the way with ${secondaryKeywords[3] || 'expert guidance'}.`
      }
    ],
    technical: [
      {
        h2: `Key Features of Our ${primaryKeyword.charAt(0).toUpperCase() + primaryKeyword.slice(1)}`,
        content: `Built specifically for accounting firms, our platform includes ${secondaryKeywords[0] || 'automation'}, ${secondaryKeywords[1] || 'analytics'}, and seamless integrations with your existing tools.`
      },
      {
        h2: 'Integration & Setup',
        content: `Works with QuickBooks, Xero, and other accounting platforms. Our ${secondaryKeywords[2] || 'streamlined setup'} gets you running quickly without disrupting your practice.`
      },
      {
        h2: 'Support & Training',
        content: `Comprehensive onboarding and ongoing support ensure your team maximizes value from ${secondaryKeywords[3] || 'the platform'}.`
      }
    ],
    industry: [
      {
        h2: `Challenges Facing ${primaryKeyword.charAt(0).toUpperCase() + primaryKeyword.slice(1)} Professionals`,
        content: `Your industry faces unique obstacles with ${secondaryKeywords[0] || 'client acquisition'} and ${secondaryKeywords[1] || 'retention'}. We've developed specialized solutions that address these specific needs.`
      },
      {
        h2: 'Tailored Solutions',
        content: `Our approach combines ${secondaryKeywords[2] || 'industry expertise'} with proven technology to deliver results that matter for your practice.`
      },
      {
        h2: 'Success Stories',
        content: `Firms like yours have achieved significant growth using our ${secondaryKeywords[3] || 'specialized approach'}. See real results from accounting professionals.`
      }
    ]
  };
  
  const sections = sectionTemplates[pageType] || sectionTemplates.problem;
  
  return sections.map(s => ({
    h2: s.h2,
    paragraphs: [s.content]
  }));
}

/**
 * Generate complete page content
 */
export function generatePageContent(config: ContentConfig): GeneratedPageContent {
  // Resolve keywords
  const keywords = resolveKeywordsForPage(config.pageName, config.industryFocus);
  const primaryKeyword = config.primaryKeyword || keywords.primary;
  const secondaryKeywords = config.secondaryKeywords.length > 0 
    ? config.secondaryKeywords 
    : keywords.secondary;
  
  // Generate content sections
  const h1 = generateH1(primaryKeyword, config.pageType);
  let intro = generateIntro(primaryKeyword, secondaryKeywords, config.pageType);
  const sections = generateSections(primaryKeyword, secondaryKeywords, config.pageType);
  
  // Adapt for persona if specified
  if (config.personaTarget) {
    intro = adaptContentForPersona(intro, config.personaTarget);
  }
  
  // Generate meta
  const metaDescription = generateMetaDescription(
    primaryKeyword,
    'Achieve predictable growth and operational excellence'
  );
  const metaTitle = `${h1} | SmartFirm.io`;
  
  // Generate CTA
  const cta = config.personaTarget
    ? generateCTAForPersona(config.personaTarget, config.pageType)
    : { label: 'Get Started Today', url: '/get-started' };
  
  // Validate keyword placement
  const validation = validateKeywordPlacement(
    h1,
    intro,
    sections.map(s => s.h2),
    metaDescription,
    primaryKeyword
  );
  
  return {
    h1,
    intro,
    sections,
    meta: {
      title: metaTitle,
      description: metaDescription
    },
    cta,
    validation
  };
}

/**
 * Batch generate content for multiple pages
 */
export function batchGeneratePages(configs: ContentConfig[]): GeneratedPageContent[] {
  return configs.map(config => generatePageContent(config));
}
