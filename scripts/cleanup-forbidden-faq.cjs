#!/usr/bin/env node
/**
 * Post-prerender cleanup: Delete any accidentally generated deprecated FAQ pages
 * This runs AFTER prerender.cjs and BEFORE validate-prerender.cjs
 * 
 * Defense-in-depth: Even if prerender.cjs fails to exclude a deprecated slug,
 * this script will clean it up before validation runs.
 */

const fs = require('fs');
const path = require('path');
const { ALL_DEPRECATED_FAQ_SLUGS } = require('../src/config/deprecatedFaqSlugs.cjs');

const distPath = path.resolve(__dirname, '../dist');

console.log('[Cleanup] Checking for accidentally prerendered deprecated FAQ pages...');
console.log(`[Cleanup] Checking ${ALL_DEPRECATED_FAQ_SLUGS.length} deprecated slugs`);

let deletedCount = 0;
const deletedPaths = [];

for (const slug of ALL_DEPRECATED_FAQ_SLUGS) {
  const dirPath = path.join(distPath, 'faq', slug);
  
  if (fs.existsSync(dirPath)) {
    try {
      fs.rmSync(dirPath, { recursive: true, force: true });
      deletedPaths.push(`/faq/${slug}/`);
      deletedCount++;
    } catch (err) {
      console.error(`[Cleanup] Failed to delete ${dirPath}: ${err.message}`);
    }
  }
}

if (deletedCount > 0) {
  console.log(`[Cleanup] ⚠ Removed ${deletedCount} deprecated FAQ directories that should not have been prerendered:`);
  deletedPaths.forEach(p => console.log(`  - ${p}`));
  console.log('[Cleanup] NOTE: This indicates prerender.cjs exclusion may need updating');
} else {
  console.log('[Cleanup] ✓ No deprecated FAQ pages found (prerender exclusion working correctly)');
}
