#!/usr/bin/env node
/**
 * Post-prerender validation script
 * Scans all generated HTML files and fails the build if any non-homepage page
 * has the homepage's canonical URL or title
 * 
 * UPDATED: Added specific FAQ page validation to ensure all FAQs are prerendered correctly
 * UPDATED: Added forbidden deprecated FAQ page detection - fails build if any exist
 */

const fs = require('fs');
const path = require('path');

// Import deprecated slugs from Single Source of Truth
const { ALL_DEPRECATED_FAQ_SLUGS } = require('../src/config/deprecatedFaqSlugs.cjs');

const distPath = path.resolve(__dirname, '../dist');
const faqContentPath = path.resolve(__dirname, '../src/data/faqContent.ts');
const homepageTitle = 'Accounting Firm Automation & Growth Systems | SmartFirm';
const homepageCanonical = 'https://smartfirm.io/';
const homepageCanonicalAlt = 'https://smartfirm.io';

/**
 * CRITICAL: Fail build if any deprecated FAQ pages were prerendered
 * This prevents 410 rules from being bypassed by static files
 */
function validateNoForbiddenFaqPages() {
  const errors = [];
  
  for (const slug of ALL_DEPRECATED_FAQ_SLUGS) {
    const forbiddenPath = path.join(distPath, 'faq', slug, 'index.html');
    if (fs.existsSync(forbiddenPath)) {
      errors.push(`FORBIDDEN: Deprecated FAQ page prerendered: /faq/${slug}/ - should return 410 Gone`);
    }
  }
  
  return errors;
}

/**
 * Validate that all sitemap URLs end with trailing slashes
 */
function validateSitemapTrailingSlashes() {
  const sitemapPath = path.resolve(__dirname, '../dist/sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.log('[Validate] Warning: sitemap.xml not found, skipping sitemap validation');
    return [];
  }
  
  const content = fs.readFileSync(sitemapPath, 'utf-8');
  const urlRegex = /<loc>([^<]+)<\/loc>/g;
  const errors = [];
  let match;
  
  while ((match = urlRegex.exec(content)) !== null) {
    const url = match[1];
    // Skip homepage which is just https://smartfirm.io/
    if (url === 'https://smartfirm.io/' || url === 'https://smartfirm.io') continue;
    
    // All other URLs must end with /
    if (!url.endsWith('/')) {
      errors.push(`Sitemap URL missing trailing slash: ${url}`);
    }
  }
  
  return errors;
}

function extractMetadata(html) {
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
                         html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
  
  return {
    title: titleMatch ? titleMatch[1] : null,
    canonical: canonicalMatch ? canonicalMatch[1] : null
  };
}

/**
 * Extract FAQ slugs from faqContent.ts to validate all are prerendered
 * Uses the same exclusion logic as prerender.cjs for consistency
 */
function extractExpectedFaqSlugs() {
  if (!fs.existsSync(faqContentPath)) {
    console.log('[Validate] Warning: faqContent.ts not found, skipping FAQ-specific validation');
    return [];
  }
  
  const content = fs.readFileSync(faqContentPath, 'utf-8');
  const slugRegex = /slug:\s*["']([^"']+)["']/g;
  const slugs = [];
  let match;
  
  // Create a Set of deprecated slugs for fast lookup
  const deprecatedSlugsSet = new Set(ALL_DEPRECATED_FAQ_SLUGS);
  
  while ((match = slugRegex.exec(content)) !== null) {
    const slug = match[1];
    // Filter out category slugs and deprecated slugs
    // Use explicit check against deprecated list instead of weak length heuristic
    if (slug.includes('-') && !deprecatedSlugsSet.has(slug)) {
      slugs.push(slug);
    }
  }
  
  return [...new Set(slugs)];
}

function validatePrerenders() {
  const errors = [];
  const warnings = [];
  let totalPages = 0;
  let validPages = 0;
  
  // Track found FAQ pages for validation
  const foundFaqSlugs = new Set();
  
  // FIRST: Check for forbidden deprecated FAQ pages
  console.log('[Validate] Checking for forbidden deprecated FAQ pages...');
  const forbiddenErrors = validateNoForbiddenFaqPages();
  if (forbiddenErrors.length > 0) {
    console.error(`\n[Validate] ❌ CRITICAL: ${forbiddenErrors.length} deprecated FAQ pages were prerendered:`);
    forbiddenErrors.forEach(e => console.error(`  - ${e}`));
    console.error('\n[Validate] These pages should return 410 Gone, not 200 OK');
    console.error('[Validate] The cleanup-forbidden-faq.cjs script should have removed these');
    console.error('[Validate] Check that scripts/prerender.cjs is excluding ALL_DEPRECATED_FAQ_SLUGS');
    errors.push(...forbiddenErrors);
  } else {
    console.log(`[Validate] ✓ No forbidden deprecated FAQ pages found (checked ${ALL_DEPRECATED_FAQ_SLUGS.length} slugs)`);
  }
  
  // Recursively find all index.html files
  function walkDir(dir) {
    if (!fs.existsSync(dir)) {
      console.log(`[Validate] Warning: Directory ${dir} does not exist`);
      return;
    }
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (file === 'index.html') {
        const relativePath = path.relative(distPath, dir);
        const route = relativePath === '' ? '/' : `/${relativePath}`;
        
        totalPages++;
        
        // Track FAQ pages
        if (route.startsWith('/faq/') && route !== '/faq') {
          const slug = route.replace('/faq/', '').replace(/\/$/, '');
          foundFaqSlugs.add(slug);
        }
        
        // Skip homepage
        if (route === '/') {
          validPages++;
          continue;
        }
        
        const html = fs.readFileSync(fullPath, 'utf-8');
        const { title, canonical } = extractMetadata(html);
        
        let hasError = false;
        
        // Check for homepage canonical on non-homepage
        if (canonical === homepageCanonical || canonical === homepageCanonicalAlt) {
          errors.push(`${route}: Has homepage canonical URL (${canonical})`);
          hasError = true;
        }
        
        // Check for homepage title on non-homepage
        if (title === homepageTitle) {
          errors.push(`${route}: Has homepage title`);
          hasError = true;
        }
        
        // Check for missing metadata
        if (!canonical) {
          warnings.push(`${route}: Missing canonical URL`);
        }
        
        if (!title) {
          warnings.push(`${route}: Missing title`);
        }
        
        if (!hasError) {
          validPages++;
        }
      }
    }
  }
  
  console.log('[Validate] Starting prerender validation...');
  walkDir(distPath);
  
  // Validate FAQ coverage
  const expectedFaqSlugs = extractExpectedFaqSlugs();
  const missingFaqSlugs = expectedFaqSlugs.filter(slug => !foundFaqSlugs.has(slug));
  
  if (expectedFaqSlugs.length > 0) {
    console.log(`\n[Validate] FAQ Coverage: ${foundFaqSlugs.size}/${expectedFaqSlugs.length} FAQs prerendered`);
    
    if (missingFaqSlugs.length > 0) {
      console.log(`[Validate] ⚠ Missing ${missingFaqSlugs.length} FAQ pages:`);
      missingFaqSlugs.slice(0, 10).forEach(slug => console.log(`  - /faq/${slug}`));
      if (missingFaqSlugs.length > 10) {
        console.log(`  ... and ${missingFaqSlugs.length - 10} more`);
      }
      // Add as warnings, not errors (they will still work via SPA fallback)
      missingFaqSlugs.forEach(slug => warnings.push(`/faq/${slug}: Not prerendered (will use SPA fallback)`));
    }
  }
  
  // Report warnings (non-blocking)
  if (warnings.length > 0) {
    console.log(`\n[Validate] ⚠ Warnings (${warnings.length}):`);
    warnings.slice(0, 10).forEach(w => console.log(`  - ${w}`));
    if (warnings.length > 10) {
      console.log(`  ... and ${warnings.length - 10} more warnings`);
    }
  }
  
  // Validate sitemap trailing slashes
  const sitemapErrors = validateSitemapTrailingSlashes();
  if (sitemapErrors.length > 0) {
    console.error(`\n[Validate] ❌ Sitemap has ${sitemapErrors.length} URLs without trailing slashes:`);
    sitemapErrors.slice(0, 10).forEach(e => console.error(`  - ${e}`));
    if (sitemapErrors.length > 10) {
      console.error(`  ... and ${sitemapErrors.length - 10} more`);
    }
    errors.push(...sitemapErrors);
  } else {
    console.log('[Validate] ✓ All sitemap URLs have trailing slashes');
  }
  
  // Report errors (blocking)
  if (errors.length > 0) {
    console.error(`\n[Validate] ❌ Found ${errors.length} total errors:`);
    errors.slice(0, 20).forEach(e => console.error(`  - ${e}`));
    if (errors.length > 20) {
      console.error(`  ... and ${errors.length - 20} more errors`);
    }
    console.error(`\n[Validate] BUILD FAILED: Prerender validation failed`);
    console.error('[Validate] Fix the above issues before deploying.');
    process.exit(1);
  }
  
  console.log(`\n[Validate] ✓ All ${validPages}/${totalPages} prerendered pages have correct metadata`);
}

validatePrerenders();
