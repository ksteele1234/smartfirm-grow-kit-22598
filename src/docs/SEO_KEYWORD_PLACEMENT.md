# SEO Keyword Placement Best Practice

## Overview
This document defines the mandatory keyword placement strategy for all SmartFirm pages to maximize SEO effectiveness and search engine visibility.

## The 5 Critical Placements

Every page MUST include its target keyword in these 5 locations:

### 1. Page Title (Meta Title)
- **Location**: `<SEO title="..." />` component
- **Format**: `[Primary Keyword] | SmartFirm`
- **Example**: `Marketing Automation for Accounting Firms | SmartFirm`
- **Character limit**: 50-60 characters

### 2. Meta Description
- **Location**: `<SEO description="..." />` component
- **Requirement**: Include primary keyword naturally in the first sentence
- **Example**: `Marketing automation for accounting firms and CPAs that delivers faster client intake, better follow-up, and measurable growth.`
- **Character limit**: 140-160 characters

### 3. URL (Slug)
- **Location**: File path and routing
- **Format**: Kebab-case with keyword
- **Examples**: 
  - `/marketing-automation`
  - `/cpa-marketing`
  - `/accounting-firm-solutions`

### 4. H1 Heading
- **Location**: Main page heading
- **Requirement**: Primary keyword must appear in H1
- **Example**: `Marketing Automation for Accounting Firms`
- **Note**: Only ONE H1 per page

### 5. Beginning of First Sentence
- **Location**: First paragraph of main content
- **Implementation**: Wrap in `<div id="sf-keyword-intro">` for tracking
- **Requirement**: Primary keyword appears within first 10-15 words
- **Example**: 
```tsx
<div id="sf-keyword-intro">
  <p>Marketing automation for accounting firms designed by SmartFirm 
  helps CPAs generate more leads and retain clients longer.</p>
</div>
```

## Implementation Pattern

### Standard Page Structure
```tsx
const MyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="[Primary Keyword] | SmartFirm"
        description="[Primary keyword] [benefit/value proposition with keyword]"
        pageType="default"
      />
      <Header />
      
      <main>
        <section className="hero-section">
          <h1>[Primary Keyword] Headline</h1>
          <div id="sf-keyword-intro">
            <p>[Primary keyword] [rest of compelling intro sentence].</p>
          </div>
        </section>
        
        {/* Rest of page content */}
      </main>
      
      <Footer />
    </div>
  );
};
```

### Template Usage
For pages using templates (SolutionPageTemplate, ServicePageTemplate, etc.):

```tsx
const data = {
  title: "Primary Keyword Solution",
  metaDescription: "Primary keyword description starting with the keyword",
  heroTitle: "Primary Keyword Headline",
  heroSubtitle: "Primary keyword appears in first sentence of subtitle",
  // ... rest of data
};
```

Templates automatically wrap `heroSubtitle` in `<div id="sf-keyword-intro">`.

## Keyword Density Guidelines

- **Primary keyword**: 1-2% density (appears 3-5 times per 500 words)
- **H1**: Use primary keyword once
- **H2/H3**: Use variations and secondary keywords
- **First paragraph**: Primary keyword in first sentence
- **Throughout content**: Natural placement, avoid keyword stuffing

## Examples by Page Type

### Homepage
- **Primary**: `Marketing automation for accounting firms`
- **Title**: `Marketing Automation for Accounting Firms | SmartFirm`
- **H1**: `Marketing Automation for Accounting Firms That Delivers Predictable Growth`
- **First sentence**: `Marketing automation for accounting firms designed by SmartFirm helps accountants, CPAs, bookkeepers...`

### Solution Page
- **Primary**: `CPA marketing automation`
- **Title**: `CPA Marketing Automation That Stops Client Loss | SmartFirm`
- **H1**: `CPA Marketing Automation That Stops Client Loss`
- **First sentence**: `CPA marketing automation prevents client loss through modern systems and professional automation...`

### Service Page
- **Primary**: `Marketing automation services`
- **Title**: `Marketing Automation Services for Accounting Firms | SmartFirm`
- **H1**: `Marketing Automation Services for Accounting Firms`
- **First sentence**: `Marketing automation services for accounting firms include intelligent lead generation and AI-driven technology...`

### Industry Page
- **Primary**: `Marketing for accountants`
- **Title**: `Marketing for Accountants: Industry-Specific Solutions | SmartFirm`
- **H1**: `Marketing for Accountants: Solutions for Your Niche`
- **First sentence**: `Marketing for accountants requires understanding unique challenges in each specialization...`

## Verification Checklist

Before publishing any page, verify:

- [ ] Target keyword in page title
- [ ] Target keyword in meta description (first 20 words)
- [ ] URL slug contains keyword or variation
- [ ] H1 heading contains target keyword
- [ ] First sentence starts with or prominently features target keyword
- [ ] `id="sf-keyword-intro"` div wraps first paragraph
- [ ] Natural keyword integration (not forced or stuffed)
- [ ] Keyword density under 2%

## Common Mistakes to Avoid

1. **Generic titles**: ❌ "Services | SmartFirm" → ✓ "Marketing Automation Services for Accounting Firms | SmartFirm"
2. **Keyword buried**: ❌ "We understand the challenges you face. Marketing automation can help." → ✓ "Marketing automation for accounting firms helps solve your biggest challenges."
3. **Missing sf-keyword-intro**: ❌ `<p>First paragraph</p>` → ✓ `<div id="sf-keyword-intro"><p>First paragraph</p></div>`
4. **No keyword in H1**: ❌ "Welcome to Our Services" → ✓ "Marketing Automation Services for Accounting Firms"
5. **Keyword stuffing**: ❌ "Marketing automation for accounting firms provides accounting firm marketing automation..." → ✓ "Marketing automation for accounting firms helps CPAs streamline lead generation and client retention."

## Maintenance

- Review keyword placement quarterly
- Update based on keyword research and performance data
- Maintain consistency across all ~190 pages
- Use keyword mapping CSV to align industry-specific terms

## References

- Knowledge Base: `website_kb.json` - keyword_page_mapping section
- Keyword Data: `src/data/keywords.csv`
- SEO Component: `src/components/SEO.tsx`
- Templates: `src/templates/` directory
