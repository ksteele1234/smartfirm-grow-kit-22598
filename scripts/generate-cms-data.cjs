/**
 * Converts programmatic-pages.json + generated markdown content
 * into ServicePageData objects for the existing ServicePageTemplate.
 *
 * Outputs: src/data/programmaticSeoPages.ts in the website repo
 */

const fs = require('fs');
const path = require('path');

const pagesDataPath = path.join(__dirname, '../../New SmartFirm Website 2026Feb/20260216_NewSmartFirmWebsite/data/programmatic-pages.json');
const generatedPagesDir = path.join(__dirname, '../generated-pages');
const outputPath = path.join(__dirname, '../../New SmartFirm Website 2026Feb/20260216_NewSmartFirmWebsite/src/data/programmaticSeoPages.ts');

const pages = JSON.parse(fs.readFileSync(pagesDataPath, 'utf8'));

console.log(`📖 Loaded ${pages.length} pages\n`);

function getAudienceLabel(audience) {
  const map = {
    'CPAs': 'CPAs',
    'accountants': 'Accountants',
    'tax firms': 'Tax Firms',
    'bookkeepers': 'Bookkeepers',
    'accounting firms': 'Accounting Firms',
    'tax preparers': 'Tax Preparers',
    'solo CPAs': 'Solo CPAs',
    'virtual firms': 'Virtual Firms',
    'cloud-first firms': 'Cloud First Firms',
    'modern practices': 'Modern Practices',
    'remote-first firms': 'Remote First Firms',
    'high-growth firms': 'High Growth Firms',
    'multi-partner firms': 'Multi Partner Firms'
  };
  return map[audience] || audience;
}

function getBreadcrumbParent(category) {
  const map = {
    'services-technical': { name: 'Services', url: '/services/' },
    'solutions-conversational': { name: 'Solutions', url: '/solutions/' },
    'hybrid': { name: 'Services', url: '/services/' },
    'profession-specific': { name: 'Solutions', url: '/solutions/' },
    'alternatives': { name: 'Solutions', url: '/solutions/' },
    'service-combinations': { name: 'Services', url: '/services/' }
  };
  return map[category] || { name: 'Services', url: '/services/' };
}

function getBenefits(page) {
  const audience = getAudienceLabel(page.targetAudience);

  switch (page.category) {
    case 'services-technical':
      return [
        {
          title: 'Done For You Implementation',
          description: `We handle strategy, setup, and ongoing management of your ${page.subcategory.replace(/-/g, ' ')} so you can focus on billable client work.`
        },
        {
          title: 'Custom Built For Your Practice',
          description: 'Every solution is designed around your specific technology stack, processes, and goals. No cookie cutter templates.'
        },
        {
          title: 'Accounting Firm Expertise',
          description: 'We work exclusively with accounting firms and understand busy season, utilization, and the compliance to advisory shift.'
        },
        {
          title: 'No Long Term Contracts',
          description: 'Month to month after initial setup. We earn your business by delivering results, not locking you into agreements.'
        }
      ];

    case 'solutions-conversational':
      return [
        {
          title: 'Stop the Manual Struggle',
          description: 'Replace inconsistent manual processes with automated systems that run reliably without your constant attention.'
        },
        {
          title: 'Built For Accounting Firms',
          description: `We understand the unique challenges ${audience} face, from busy season demands to client communication expectations.`
        },
        {
          title: 'Complete Done For You Service',
          description: 'From strategy and tool selection to configuration and ongoing management. No technical expertise required on your end.'
        },
        {
          title: 'Sustainable Results',
          description: 'Unlike manual approaches that fail when you get busy, our automated systems keep working consistently year round.'
        }
      ];

    case 'hybrid':
      return [
        {
          title: 'Results Without The Hassle',
          description: 'Get measurable outcomes from expertly configured systems without investing your limited time in DIY setup.'
        },
        {
          title: 'Accounting Industry Expertise',
          description: 'We understand busy season, utilization rates, and how to target the right clients for your practice.'
        },
        {
          title: 'Transparent Approach',
          description: 'We focus on real metrics tied to real business outcomes. No vague brand awareness promises.'
        },
        {
          title: 'Flexible Engagement',
          description: 'No long term contracts. Month to month after initial setup because we earn your business by delivering results.'
        }
      ];

    case 'profession-specific':
      return [
        {
          title: `Designed For ${audience}`,
          description: 'Not generic automation adapted to fit. Solutions built specifically for your practice model, workflows, and client base.'
        },
        {
          title: 'Custom Solutions, Not Templates',
          description: 'Every implementation is designed around your specific processes. We work with how you actually operate.'
        },
        {
          title: 'Done For You Approach',
          description: 'We handle all strategy, implementation, and ongoing management. You focus on serving clients.'
        },
        {
          title: 'No Long Term Contracts',
          description: 'Month to month after initial setup. We earn your business by delivering results for your specific practice.'
        }
      ];

    case 'alternatives':
      return [
        {
          title: 'Expert Implementation',
          description: 'We use powerful platforms on your behalf. You get the benefits without the months of learning curve and technical setup.'
        },
        {
          title: 'Ongoing Management',
          description: 'We handle optimization, troubleshooting, and updates. You just see the results without managing the tools yourself.'
        },
        {
          title: 'Accounting Firm Focus',
          description: 'We understand your industry, your clients, and your busy season. Solutions are designed for how accounting firms work.'
        },
        {
          title: 'Better Results, Less Work',
          description: 'Expertly configured systems deliver better outcomes than partially set up DIY tools.'
        }
      ];

    case 'service-combinations':
      return [
        {
          title: 'Integrated System',
          description: 'Services work together as a unified system, eliminating gaps and manual work between disconnected tools.'
        },
        {
          title: 'Better Together',
          description: 'Integrated services deliver more than the sum of separate implementations. Data flows seamlessly between systems.'
        },
        {
          title: 'Single Partner',
          description: 'One team managing everything instead of coordinating multiple vendors. Simpler, more effective, more accountable.'
        },
        {
          title: 'Cost Effective',
          description: 'Package pricing is typically more cost effective than implementing services separately.'
        }
      ];

    default:
      return [
        {
          title: 'Done For You',
          description: 'We handle everything from strategy to implementation to ongoing management.'
        },
        {
          title: 'Accounting Firm Expertise',
          description: 'We work exclusively with accounting firms and understand your unique challenges.'
        },
        {
          title: 'Custom Solutions',
          description: 'Every implementation is designed specifically for your practice.'
        },
        {
          title: 'No Long Term Contracts',
          description: 'Month to month after initial setup. We earn your business by delivering results.'
        }
      ];
  }
}

function getFeatures(page) {
  const isKarbonRelevant = ['onboarding', 'workflow', 'practice-management'].some(
    kw => (page.subcategory || '').includes(kw)
  );

  const features = [
    {
      title: 'Discovery & Assessment',
      description: 'We start by understanding your current processes, technology stack, and specific goals before recommending any solution.',
      details: [
        'Current workflow analysis',
        'Technology stack assessment',
        'Goal alignment and prioritization'
      ]
    },
    {
      title: 'Custom Design & Implementation',
      description: 'Every solution is built specifically for your practice. We handle all technical work so you can focus on clients.',
      details: [
        'Custom automation design',
        'Integration with existing tools',
        'Testing and quality assurance'
      ]
    },
    {
      title: 'Training & Launch',
      description: 'We ensure your team is comfortable with the new systems before going live, with hands on training customized to your workflow.',
      details: [
        'Team training sessions',
        'Documentation for your processes',
        'Phased rollout approach'
      ]
    },
    {
      title: 'Ongoing Support & Optimization',
      description: 'After launch, we continue to optimize and support your systems. No long term contracts because we earn your business by delivering results.',
      details: [
        'Continuous optimization',
        'Technical support',
        'Month to month flexibility'
      ]
    }
  ];

  return features;
}

function getFaqs(page) {
  const isKarbonRelevant = ['onboarding', 'workflow', 'practice-management'].some(
    kw => (page.subcategory || '').includes(kw)
  );

  const faqs = [
    {
      question: 'How long does implementation take?',
      answer: 'Timeline varies based on your current systems and scope of automation. We start with a discovery process to understand your needs and provide a realistic timeline for your specific situation.',
      category: 'Implementation'
    },
    {
      question: 'What if we are not tech savvy?',
      answer: 'That is exactly why we exist. Our done for you approach means you do not need technical expertise. We handle strategy, implementation, and optimization based on your needs.',
      category: 'Implementation'
    },
    {
      question: 'Do we need to sign a long term contract?',
      answer: 'No. We work month to month after the initial implementation period. We earn your business by delivering results.',
      category: 'Pricing & ROI'
    },
    {
      question: 'How involved does our team need to be?',
      answer: 'Your involvement varies depending on the solution we design together. We handle the technical work, but you will need to provide input on your processes and approve the approach that works best for your practice.',
      category: 'Implementation'
    },
    {
      question: 'Can this work with our existing software?',
      answer: 'We design solutions around your current technology stack. During discovery, we assess your tools and create a plan that integrates with what you already use.',
      category: 'Implementation'
    }
  ];

  if (page.category === 'hybrid' || page.category === 'alternatives') {
    faqs.push({
      question: 'How is this different from DIY tools like GoHighLevel or HubSpot?',
      answer: 'We actually use GoHighLevel and other powerful platforms as part of our solutions. The difference is we handle all the setup, configuration, and ongoing management for you. You get the benefits of these tools without the months of learning curve and technical work required to use them effectively.',
      category: 'General'
    });
  }

  if (isKarbonRelevant) {
    faqs.push({
      question: 'What practice management platforms do you integrate with?',
      answer: 'We work with most major practice management platforms including Karbon, Canopy, and others. For firms looking to upgrade, we often recommend Karbon as it is built specifically for accounting and bookkeeping firms and integrates well with automation workflows. We design solutions around whatever platform works best for your needs.',
      category: 'Implementation'
    });
  }

  return faqs;
}

function getHeroSubtitle(page) {
  switch (page.category) {
    case 'services-technical':
      return `Done for you ${page.subcategory.replace(/-/g, ' ')} built specifically for ${getAudienceLabel(page.targetAudience)}. Reclaim 10 to 15 hours per week and focus on billable work while we handle the implementation.`;
    case 'solutions-conversational':
      return `The answer is automation. Let SmartFirm build and manage your system so you can focus on what you do best: serving clients and growing your practice.`;
    case 'hybrid':
      return `Get results without the hassle with done for you solutions designed exclusively for accounting firms.`;
    case 'profession-specific':
      return `Done for you automation built specifically for ${getAudienceLabel(page.targetAudience)}. Focus on serving clients while we handle the strategy, implementation, and ongoing management.`;
    case 'alternatives':
      return `Done for you automation designed exclusively for accounting firms. Get all the benefits of powerful automation tools without the DIY setup, learning curve, or ongoing management burden.`;
    case 'service-combinations':
      return `Get comprehensive automation that delivers results across multiple areas of your practice. Done for you implementation designed exclusively for accounting firms.`;
    default:
      return page.metaDescription;
  }
}

function getCtaTitle(page) {
  switch (page.category) {
    case 'solutions-conversational':
      return 'Ready to Stop Struggling and Start Growing?';
    case 'alternatives':
      return 'Ready to Get Better Results?';
    case 'service-combinations':
      return 'Ready to Implement a Complete Solution?';
    default:
      return 'Ready to Scale Your Practice?';
  }
}

// Build the TypeScript output
let output = `// AUTO-GENERATED: Programmatic SEO page data
// Generated by scripts/generate-cms-data.cjs
// Do not edit manually - regenerate instead

import { ServicePageData } from "@/types/cms";

export interface ProgrammaticPageMeta {
  slug: string;
  category: string;
  subcategory: string;
  targetAudience: string;
  published: boolean;
  publishDate: string;
  focusKeyword: string;
}

export const programmaticPageIndex: ProgrammaticPageMeta[] = [\n`;

pages.forEach((page, i) => {
  output += `  { slug: ${JSON.stringify(page.slug)}, category: ${JSON.stringify(page.category)}, subcategory: ${JSON.stringify(page.subcategory || '')}, targetAudience: ${JSON.stringify(page.targetAudience)}, published: ${page.published}, publishDate: ${JSON.stringify(page.publishDate)}, focusKeyword: ${JSON.stringify(page.focusKeyword)} }`;
  output += i < pages.length - 1 ? ',\n' : '\n';
});

output += `];\n\n`;
output += `export const programmaticPages: Record<string, ServicePageData> = {\n`;

pages.forEach((page, i) => {
  const parent = getBreadcrumbParent(page.category);
  const benefits = getBenefits(page);
  const features = getFeatures(page);
  const faqs = getFaqs(page);
  const heroSubtitle = getHeroSubtitle(page);
  const ctaTitle = getCtaTitle(page);

  output += `  ${JSON.stringify(page.slug)}: {\n`;
  output += `    id: ${JSON.stringify(page.slug)},\n`;
  output += `    title: ${JSON.stringify(page.title)},\n`;
  output += `    slug: ${JSON.stringify(page.slug)},\n`;
  output += `    metaDescription: ${JSON.stringify(page.metaDescription)},\n`;
  output += `    canonicalUrl: ${JSON.stringify(`https://smartfirm.io/grow/${page.slug}/`)},\n`;
  output += `    content: null,\n`;
  output += `    heroTitle: ${JSON.stringify(page.h1 || page.title)},\n`;
  output += `    heroSubtitle: ${JSON.stringify(heroSubtitle)},\n`;
  output += `    heroDescription: ${JSON.stringify(page.metaDescription)},\n`;
  output += `    benefits: ${JSON.stringify(benefits, null, 6).replace(/\n/g, '\n    ')},\n`;
  output += `    features: ${JSON.stringify(features, null, 6).replace(/\n/g, '\n    ')},\n`;
  output += `    faqs: ${JSON.stringify(faqs, null, 6).replace(/\n/g, '\n    ')},\n`;
  output += `    ctaTitle: ${JSON.stringify(ctaTitle)},\n`;
  output += `    ctaDescription: "Book a free call with our team. We will show you exactly how we can help your practice.",\n`;
  output += `    ctaButtonText: "Book Your Free Call",\n`;
  output += `    ctaButtonLink: "/get-started/"\n`;
  output += `  }`;
  output += i < pages.length - 1 ? ',\n' : '\n';
});

output += `};\n`;

// Write the file
fs.writeFileSync(outputPath, output, 'utf8');

console.log(`✅ Generated ${pages.length} ServicePageData objects`);
console.log(`📁 Output: ${outputPath}`);
console.log(`📊 File size: ${(Buffer.byteLength(output, 'utf8') / 1024).toFixed(0)} KB\n`);
