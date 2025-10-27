# SmartFirm.io Content Generation System

Complete implementation of the knowledge base-driven content generation system for ~190 pages.

## Architecture Overview

### Phase 1: Schema Markup Infrastructure ✅
- **Location**: `scripts/inject-*.js`
- **Purpose**: Inject structured data into built HTML
- **Schemas Implemented**:
  - Organization Schema (homepage, about, contact, get-started)
  - WebSite Schema (all pages)
  - BreadcrumbList Schema (all non-homepage pages)
  - Service Schema (service pages)
  - Article Schema (resource/blog pages)
  - WebPage Schema (all pages)

**Build Command**: `vite build && node scripts/inject-all-schemas.js`

### Phase 2: Content Generation System ✅
- **Location**: `src/lib/contentGenerator.ts`, `src/lib/pageGenerator.ts`
- **Features**:
  - CSV keyword mapping (resolves keywords per industry/page)
  - Persona-based content adaptation
  - Keyword density calculation and validation
  - Meta description generation
  - CTA generation by persona and page type

**Key Functions**:
```typescript
// Resolve keywords for a page
const keywords = resolveKeywordsForPage(pageName, industry);

// Generate complete page content
const content = generatePageContent({
  pageName: 'Stop Losing Clients',
  pageType: 'problem',
  industryFocus: 'CPA',
  primaryKeyword: 'CPA marketing automation',
  secondaryKeywords: ['client retention', 'lead generation']
});

// Validate keyword placement
const validation = validateKeywordPlacement(h1, intro, h2h3, meta, keyword);
```

### Phase 3: Enhanced Page Templates ✅
- **Location**: `src/templates/Enhanced*.tsx`
- **Templates**:
  - `EnhancedServicePageTemplate` - Service pages with content generation
  - `EnhancedSolutionPageTemplate` - Solution pages with content generation

**Usage**:
```tsx
<EnhancedServicePageTemplate 
  data={serviceData}
  contentConfig={{
    pageName: 'Marketing Automation',
    pageType: 'technical',
    industryFocus: 'Accounting Firm',
    primaryKeyword: 'marketing automation',
    secondaryKeywords: ['CRM integration', 'email marketing']
  }}
/>
```

### Phase 4: CMS Data Structures ✅
- **Location**: `src/data/cmsPages.ts`, `src/types/cms.ts`
- **Purpose**: Central repository for all page content
- **Structure**:
  - `ServicePageData` - Service page definitions
  - `SolutionPageData` - Solution page definitions
  - `IndustryPageData` - Industry page definitions
  - `SuccessStoryData` - Success story definitions
  - `ResourcePageData` - Resource/blog definitions

### Phase 5: Testing & Validation ✅
- **Location**: `src/utils/contentValidator.ts`, `src/utils/testContentGeneration.ts`
- **Validations**:
  - Brand color compliance (no gold/purple)
  - Messaging tone (no aggressive sales language)
  - Keyword density (≤2% primary keyword)
  - Heading structure (single H1, multiple H2s)
  - Meta description length (140-160 chars)

**Run Tests**:
```typescript
// In browser console (dev mode)
window.testContentGeneration()
```

## Content Generation Workflow

### 1. Define Page Content Config
```typescript
const config: ContentConfig = {
  pageName: 'Stop Losing Clients to Tech-Savvy CPAs',
  pageType: 'problem',
  industryFocus: 'CPA',
  primaryKeyword: 'CPA marketing automation',
  secondaryKeywords: ['client retention strategies', 'CPA lead generation'],
  personaTarget: 'nick_nashville_cpa'
};
```

### 2. Generate Content
```typescript
import { generatePageContent } from '@/lib/pageGenerator';

const content = generatePageContent(config);
// Returns: h1, intro, sections, meta, cta, validation
```

### 3. Validate Content
```typescript
import { validatePageContent } from '@/utils/contentValidator';

const validation = validatePageContent({
  html: renderedHTML,
  meta: { description, title },
  primaryKeyword: 'CPA marketing automation'
});

console.log(`Score: ${validation.score}/100`);
console.log(`Valid: ${validation.valid}`);
```

### 4. Render with Template
```tsx
<EnhancedServicePageTemplate 
  data={cmsData}
  contentConfig={config}
/>
```

## Keyword Resolution Strategy

The system follows this resolution order:

1. **Exact Match**: Find keyword mapping where `Landing Page` matches page name
2. **Category Match**: Find mapping where page name includes category
3. **Industry Selection**: Select keywords based on `industryFocus`:
   - CPA → `Keywords for CPAs`
   - Bookkeeper → `Keywords for Bookkeepers`
   - Tax Preparer → `Keywords for Tax Preparers`
   - Accounting Firm → `Keywords for Accounting Firms`
   - General → `Keywords for Accountants`
4. **Fallback**: Use root keywords if no industry-specific keywords available

## Persona-Based Adaptations

### Grace (ICP - Growth CPA Owner)
- **Tone**: Professional, data-backed, confident
- **Adaptations**: "we deliver measurable outcomes" vs "we help"
- **CTAs**: "Book Strategy Call", "See How It Works", "Request Pilot"

### Betty (Bookkeeper)
- **Tone**: Clear, friendly, no jargon
- **Adaptations**: "use" vs "leverage", "improve" vs "optimize"
- **CTAs**: "Start with Starter Plan", "See Templates"

### Nick (Nashville CPA)
- **Tone**: Direct, outcome-first
- **Adaptations**: "get" vs "consider", "will" vs "might"
- **CTAs**: "See 10-Min Demo", "Audit My Funnel"

## Validation Checklist

✅ **Required Placements**:
- Primary keyword in H1
- Primary keyword in intro (first 150 words)
- Primary keyword in at least one H2/H3
- Primary keyword in meta description

✅ **Density Caps**:
- Primary keyword: ≤2% of total words
- Max 2 repeats per paragraph

✅ **Brand Compliance**:
- No forbidden colors (#FFD700, #5F0F40)
- No aggressive sales language
- No specific personal names/characteristics
- No exact revenue claims

✅ **SEO Best Practices**:
- Single H1 heading
- Multiple H2 subheadings
- Meta description 140-160 characters
- Semantic HTML structure

## Schema Injection Details

### Organization Schema
- **Pages**: Homepage, About, Contact, Get Started
- **Properties**: name, logo, description, contactPoint, makesOffer, knowsAbout

### WebSite Schema
- **Pages**: All pages
- **Properties**: url, name, publisher, SearchAction

### Service Schema
- **Pages**: Service pages only
- **Properties**: name, description, serviceType, provider, audience, hasOfferCatalog

### BreadcrumbList Schema
- **Pages**: All non-homepage pages
- **Generation**: Automatic from URL path

### Article Schema
- **Pages**: Resource/blog pages (paths starting with /resources, /blog, /guides, /articles)
- **Properties**: headline, author, datePublished, publisher

### WebPage Schema
- **Pages**: All pages
- **Properties**: url, name, description, isPartOf, about

## File Structure

```
src/
├── lib/
│   ├── contentGenerator.ts      # Keyword mapping, persona adaptation
│   └── pageGenerator.ts          # Page content generation
├── templates/
│   ├── EnhancedServicePageTemplate.tsx
│   └── EnhancedSolutionPageTemplate.tsx
├── data/
│   ├── cmsPages.ts               # CMS content repository
│   └── keywords.csv              # Keyword mappings
├── types/
│   └── cms.ts                    # TypeScript interfaces
└── utils/
    ├── contentValidator.ts       # Validation functions
    └── testContentGeneration.ts  # Test suite

scripts/
├── inject-all-schemas.js         # Orchestrator
├── inject-faq-schema.js          # FAQ schema
├── inject-organization-schema.js # Organization schema
├── inject-website-schema.js      # WebSite schema
├── inject-breadcrumb-schema.js   # Breadcrumb schema
├── inject-service-schema.js      # Service schema
├── inject-article-schema.js      # Article schema
└── inject-webpage-schema.js      # WebPage schema
```

## Next Steps: Scaling to 190 Pages

### 1. Populate CMS Data
Expand `src/data/cmsPages.ts` with all 190 pages following the hierarchy.

### 2. Create Dynamic Routes
Use the template router to map URLs to CMS data:
```tsx
<Route path="/services/:slug" element={
  <EnhancedServicePageTemplate 
    data={servicePages[slug]}
    contentConfig={generateConfig(slug)}
  />
} />
```

### 3. Batch Content Generation
Generate all page content upfront for review:
```typescript
const allConfigs = generateAllPageConfigs();
const allContent = batchGeneratePages(allConfigs);
```

### 4. Pre-build Validation
Run validation on all pages before deployment:
```bash
npm run validate-content
```

## Development Commands

```bash
# Build with schema injection
npm run build

# Test content generation (in browser console)
window.testContentGeneration()

# Validate a single page
import { validatePageContent } from '@/utils/contentValidator';
const result = validatePageContent(pageData);
console.log(result);
```

## Performance Considerations

- **CSV Parsing**: Cached after first load
- **Content Generation**: Memoized per config
- **Schema Injection**: Post-build (no runtime overhead)
- **Validation**: Development only (removed in production)

## Compliance Notes

All generated content automatically adheres to:
- SmartFirm brand guidelines (colors, voice, tone)
- SEO best practices (keyword placement, density, meta tags)
- Persona targeting (tone adaptation, CTA selection)
- Schema.org structured data standards
