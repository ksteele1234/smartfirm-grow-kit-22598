#!/usr/bin/env node
/**
 * Regenerates src/data/programmaticSeoPages.ts from data/programmatic-pages.json
 * and data/subcategory-content/ JSON files.
 *
 * Each page gets unique content from its subcategory content file, with audience
 * substitution and overrides for bookkeepers and tax preparers.
 *
 * Run after publish-scheduled-pages.js to update the React app data.
 * Called automatically by GitHub Actions daily.
 */

const fs = require('fs');
const path = require('path');

const pagesDataPath = path.resolve(__dirname, '../data/programmatic-pages.json');
const contentDir = path.resolve(__dirname, '../data/subcategory-content');
const outputPath = path.resolve(__dirname, '../src/data/programmaticSeoPages.ts');

if (!fs.existsSync(pagesDataPath)) {
  console.log('[regenerate-seo-data] No programmatic-pages.json found, skipping');
  process.exit(0);
}

const pages = JSON.parse(fs.readFileSync(pagesDataPath, 'utf8'));
console.log(`[regenerate-seo-data] Loaded ${pages.length} pages`);

// --- Category to template type mapping ---
const SOLUTION_CATEGORIES = new Set(['solutions-conversational', 'hybrid']);
const SERVICE_CATEGORIES = new Set(['services-technical', 'service-combinations', 'profession-specific', 'alternatives']);

function getTemplateType(category) {
  if (SOLUTION_CATEGORIES.has(category)) return 'solution';
  if (SERVICE_CATEGORIES.has(category)) return 'service';
  return 'service'; // fallback
}

function getContentDir(category) {
  return SOLUTION_CATEGORIES.has(category) ? 'solution' : 'service';
}

// --- Content file cache ---
const contentCache = {};

function loadContent(category, subcategory) {
  const dir = getContentDir(category);
  const key = `${dir}/${subcategory}`;
  if (contentCache[key]) return contentCache[key];

  const filePath = path.join(contentDir, dir, `${subcategory}.json`);
  if (!fs.existsSync(filePath)) {
    console.warn(`[regenerate-seo-data] WARNING: Missing content file: ${key}.json`);
    return null;
  }

  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  contentCache[key] = content;
  return content;
}

// --- Audience helpers ---
function getAudienceLabel(audience) {
  const map = {
    'CPAs': 'CPAs', 'accountants': 'Accountants', 'tax firms': 'Tax Firms',
    'bookkeepers': 'Bookkeepers', 'accounting firms': 'Accounting Firms',
    'tax preparers': 'Tax Preparers', 'solo CPAs': 'Solo CPAs',
    'virtual firms': 'Virtual Firms', 'cloud-first firms': 'Cloud First Firms',
    'modern practices': 'Modern Practices', 'remote-first firms': 'Remote First Firms',
    'high-growth firms': 'High Growth Firms', 'multi-partner firms': 'Multi Partner Firms'
  };
  return map[audience] || audience;
}

function getAudienceOverrideKey(targetAudience) {
  const lower = targetAudience.toLowerCase();
  if (lower === 'bookkeepers') return 'bookkeepers';
  if (lower === 'tax preparers') return 'tax preparers';
  return null; // CPAs, accounting firms, etc. use defaults
}

// Deep replace {audience} in any value
function replaceAudience(obj, audienceLabel) {
  if (typeof obj === 'string') {
    return obj.replace(/\{audience\}/g, audienceLabel);
  }
  if (Array.isArray(obj)) {
    return obj.map(item => replaceAudience(item, audienceLabel));
  }
  if (obj && typeof obj === 'object') {
    const result = {};
    for (const [k, v] of Object.entries(obj)) {
      if (k === 'audienceOverrides') continue; // strip overrides from output
      result[k] = replaceAudience(v, audienceLabel);
    }
    return result;
  }
  return obj;
}

// Apply audience overrides (merge override fields into content)
function applyOverrides(content, overrideKey) {
  if (!overrideKey || !content.audienceOverrides || !content.audienceOverrides[overrideKey]) {
    return content;
  }
  const overrides = content.audienceOverrides[overrideKey];
  return { ...content, ...overrides };
}

// --- Build page data ---
function buildSolutionPageData(page, content) {
  const audienceLabel = getAudienceLabel(page.targetAudience);
  const overrideKey = getAudienceOverrideKey(page.targetAudience);

  // Apply audience overrides before audience label replacement
  const merged = applyOverrides(content, overrideKey);

  return replaceAudience({
    id: page.slug,
    title: page.title,
    slug: page.slug,
    metaDescription: page.metaDescription,
    canonicalUrl: `https://smartfirm.io/grow/${page.slug}/`,
    content: null,
    templateType: 'solution',
    heroTitle: page.h1 || page.title,
    heroSubtitle: merged.heroSubtitleTemplate || page.metaDescription,
    problemStatement: merged.problemStatement,
    solutionOverview: merged.solutionOverview,
    problemSolutionPairs: merged.problemSolutionPairs || [],
    hearingSignals: merged.hearingSignals || [],
    keyBenefits: merged.keyBenefits || [],
    howItWorks: merged.howItWorks || [],
    results: merged.results || [],
    faqs: merged.faqs || [],
    ctaTitle: merged.ctaTitle || 'Ready to Get Started?',
    ctaDescription: merged.ctaDescription || 'Book a free call with our team. We will show you exactly how we can help your practice.'
  }, audienceLabel);
}

function buildServicePageData(page, content) {
  const audienceLabel = getAudienceLabel(page.targetAudience);
  const overrideKey = getAudienceOverrideKey(page.targetAudience);

  // Apply audience overrides before audience label replacement
  const merged = applyOverrides(content, overrideKey);

  return replaceAudience({
    id: page.slug,
    title: page.title,
    slug: page.slug,
    metaDescription: page.metaDescription,
    canonicalUrl: `https://smartfirm.io/grow/${page.slug}/`,
    content: null,
    templateType: 'service',
    heroTitle: page.h1 || page.title,
    heroSubtitle: merged.heroSubtitleTemplate || page.metaDescription,
    heroDescription: merged.heroDescription || page.metaDescription,
    benefits: merged.benefits || [],
    features: merged.features || [],
    faqs: merged.faqs || [],
    ctaTitle: merged.ctaTitle || 'Ready to Scale Your Practice?',
    ctaDescription: merged.ctaDescription || 'Book a free call with our team. We will show you exactly how we can help your practice.',
    ctaButtonText: 'Book Your Free Call',
    ctaButtonLink: '/get-started/'
  }, audienceLabel);
}

// --- Fallback for pages with missing content files ---
function buildFallbackServiceData(page) {
  const audienceLabel = getAudienceLabel(page.targetAudience);
  const subcategoryLabel = (page.subcategory || '').replace(/-/g, ' ');
  return {
    id: page.slug,
    title: page.title,
    slug: page.slug,
    metaDescription: page.metaDescription,
    canonicalUrl: `https://smartfirm.io/grow/${page.slug}/`,
    content: null,
    templateType: 'service',
    heroTitle: page.h1 || page.title,
    heroSubtitle: page.metaDescription,
    heroDescription: page.metaDescription,
    benefits: [
      { title: 'Done For You Implementation', description: `We handle strategy, setup, and ongoing management of your ${subcategoryLabel} so you can focus on billable client work.` },
      { title: 'Built For Your Practice', description: 'Every solution is designed around your specific technology stack, processes, and goals.' },
      { title: 'Accounting Firm Expertise', description: `We work exclusively with accounting firms and understand the unique challenges ${audienceLabel} face.` }
    ],
    features: [
      { title: 'Discovery and Assessment', description: 'We start by understanding your current processes, technology stack, and specific goals before recommending any solution.', details: ['Current workflow analysis', 'Technology stack assessment', 'Goal alignment'] },
      { title: 'Custom Implementation', description: 'Every solution is built specifically for your practice. We handle all technical work so you can focus on clients.', details: ['Custom automation design', 'Integration with existing tools', 'Testing and quality assurance'] },
      { title: 'Ongoing Support', description: 'After launch, we continue to optimize and support your systems with month to month flexibility.', details: ['Continuous optimization', 'Technical support', 'Regular check ins'] }
    ],
    faqs: [
      { question: 'How long does implementation take?', answer: 'Timeline varies based on your current systems and scope. We provide a realistic timeline during discovery.' },
      { question: 'Do we need to sign a long term contract?', answer: 'No. We work month to month after the initial implementation period.' },
      { question: 'Can this work with our existing software?', answer: 'We design solutions around your current technology stack and assess your tools during discovery.' }
    ],
    ctaTitle: 'Ready to Scale Your Practice?',
    ctaDescription: 'Book a free call with our team. We will show you exactly how we can help your practice.',
    ctaButtonText: 'Book Your Free Call',
    ctaButtonLink: '/get-started/'
  };
}

// --- Generate TypeScript ---
let missingContentCount = 0;
const pageDataEntries = [];

pages.forEach(page => {
  const templateType = getTemplateType(page.category);
  const content = loadContent(page.category, page.subcategory);

  let data;
  if (!content) {
    missingContentCount++;
    data = buildFallbackServiceData(page);
  } else if (templateType === 'solution') {
    data = buildSolutionPageData(page, content);
  } else {
    data = buildServicePageData(page, content);
  }

  pageDataEntries.push({ page, data, templateType });
});

// --- Build output ---
let output = `// AUTO-GENERATED by scripts/regenerate-seo-data.cjs
// Do not edit manually - regenerate instead
import type { ServicePageData, SolutionPageData } from "@/types/cms";

type ProgrammaticServicePage = ServicePageData & { templateType: 'service' };
type ProgrammaticSolutionPage = SolutionPageData & { templateType: 'solution' };
export type ProgrammaticPageData = ProgrammaticServicePage | ProgrammaticSolutionPage;

export interface ProgrammaticPageMeta {
  slug: string;
  category: string;
  subcategory: string;
  targetAudience: string;
  published: boolean;
  publishDate: string;
  focusKeyword: string;
  templateType: 'service' | 'solution';
}

export const programmaticPageIndex: ProgrammaticPageMeta[] = [\n`;

pages.forEach((page, i) => {
  const templateType = getTemplateType(page.category);
  output += `  { slug: ${JSON.stringify(page.slug)}, category: ${JSON.stringify(page.category)}, subcategory: ${JSON.stringify(page.subcategory || '')}, targetAudience: ${JSON.stringify(page.targetAudience)}, published: ${page.published}, publishDate: ${JSON.stringify(page.publishDate)}, focusKeyword: ${JSON.stringify(page.focusKeyword)}, templateType: ${JSON.stringify(templateType)} }`;
  output += i < pages.length - 1 ? ',\n' : '\n';
});

output += `];\n\nexport const programmaticPages: Record<string, ProgrammaticPageData> = {\n`;

pageDataEntries.forEach(({ data }, i) => {
  output += `  ${JSON.stringify(data.slug)}: ${JSON.stringify(data, null, 2).split('\n').map((line, li) => li === 0 ? line : '  ' + line).join('\n')}`;
  output += i < pageDataEntries.length - 1 ? ',\n' : '\n';
});

output += `};\n`;

fs.writeFileSync(outputPath, output, 'utf8');

// --- Validation ---
console.log('\n[regenerate-seo-data] === Validation ===');

// Check for missing content files
if (missingContentCount > 0) {
  console.warn(`[regenerate-seo-data] WARNING: ${missingContentCount} pages used fallback content (missing content files)`);
}

// Check solution pages have required fields
let solutionIssues = 0;
pageDataEntries.forEach(({ data, templateType }) => {
  if (templateType === 'solution') {
    if (!data.problemStatement || data.problemStatement.length < 20) {
      console.warn(`[regenerate-seo-data] WARNING: ${data.slug} has empty/short problemStatement`);
      solutionIssues++;
    }
    if (!data.hearingSignals || data.hearingSignals.length === 0) {
      console.warn(`[regenerate-seo-data] WARNING: ${data.slug} has no hearingSignals`);
      solutionIssues++;
    }
    if (!data.results || data.results.length === 0) {
      console.warn(`[regenerate-seo-data] WARNING: ${data.slug} has no results`);
      solutionIssues++;
    }
  }
});

// Check content uniqueness across subcategories
const benefitTitles = new Set();
const faqQuestions = new Set();
const featureTitles = new Set();

Object.keys(contentCache).forEach(key => {
  const c = contentCache[key];
  if (c.keyBenefits) c.keyBenefits.forEach(b => benefitTitles.add(b.title));
  if (c.benefits) c.benefits.forEach(b => benefitTitles.add(b.title));
  if (c.faqs) c.faqs.forEach(f => faqQuestions.add(f.question));
  if (c.features) c.features.forEach(f => featureTitles.add(f.title));
});

// Summary stats
const publishedCount = pages.filter(p => p.published).length;
const solutionCount = pageDataEntries.filter(e => e.templateType === 'solution').length;
const serviceCount = pageDataEntries.filter(e => e.templateType === 'service').length;
const contentFilesLoaded = Object.keys(contentCache).length;

console.log(`[regenerate-seo-data] Content files loaded: ${contentFilesLoaded}`);
console.log(`[regenerate-seo-data] Solution pages: ${solutionCount}`);
console.log(`[regenerate-seo-data] Service pages: ${serviceCount}`);
console.log(`[regenerate-seo-data] Unique benefit titles: ${benefitTitles.size}`);
console.log(`[regenerate-seo-data] Unique FAQ questions: ${faqQuestions.size}`);
console.log(`[regenerate-seo-data] Unique feature titles: ${featureTitles.size}`);
if (solutionIssues === 0) {
  console.log(`[regenerate-seo-data] All solution pages have required fields`);
}
console.log(`[regenerate-seo-data] Generated ${pages.length} pages (${publishedCount} published)`);
console.log(`[regenerate-seo-data] Output: src/data/programmaticSeoPages.ts (${(Buffer.byteLength(output, 'utf8') / 1024).toFixed(0)} KB)`);
