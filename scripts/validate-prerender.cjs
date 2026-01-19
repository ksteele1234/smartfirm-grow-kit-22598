#!/usr/bin/env node
/**
 * Post-prerender validation script
 * Scans all generated HTML files and fails the build if any non-homepage page
 * has the homepage's canonical URL or title
 */

const fs = require('fs');
const path = require('path');

const distPath = path.resolve(__dirname, '../dist');
const homepageTitle = 'SmartFirm | Automation & AI for Accounting Firms';
const homepageCanonical = 'https://smartfirm.io/';
const homepageCanonicalAlt = 'https://smartfirm.io';

function extractMetadata(html) {
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
                         html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
  
  return {
    title: titleMatch ? titleMatch[1] : null,
    canonical: canonicalMatch ? canonicalMatch[1] : null
  };
}

function validatePrerenders() {
  const errors = [];
  const warnings = [];
  let totalPages = 0;
  let validPages = 0;
  
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
  
  // Report warnings (non-blocking)
  if (warnings.length > 0) {
    console.log(`\n[Validate] ⚠ Warnings (${warnings.length}):`);
    warnings.slice(0, 10).forEach(w => console.log(`  - ${w}`));
    if (warnings.length > 10) {
      console.log(`  ... and ${warnings.length - 10} more warnings`);
    }
  }
  
  // Report errors (blocking)
  if (errors.length > 0) {
    console.error(`\n[Validate] ❌ Found ${errors.length} pages with incorrect metadata:`);
    errors.slice(0, 20).forEach(e => console.error(`  - ${e}`));
    if (errors.length > 20) {
      console.error(`  ... and ${errors.length - 20} more errors`);
    }
    console.error(`\n[Validate] BUILD FAILED: ${errors.length} pages have homepage metadata`);
    console.error('[Validate] This means the SEO component is not receiving correct props during prerendering.');
    console.error('[Validate] Check that react-helmet is rendering metadata in the initial render, not via useEffect.');
    process.exit(1);
  }
  
  console.log(`\n[Validate] ✓ All ${validPages}/${totalPages} prerendered pages have correct metadata`);
}

validatePrerenders();
