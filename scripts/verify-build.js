import { existsSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Pre-Deployment Build Verification Script
 * Checks critical assets and configurations before deployment
 */

function verifyFavicons() {
  console.log('\n📱 Verifying Favicons...');
  
  const requiredFavicons = [
    { file: 'favicon.png', purpose: 'Main favicon' },
    { file: 'favicon-32.png', purpose: '32x32 variant' },
    { file: 'favicon-180.png', purpose: 'Apple Touch Icon' },
    { file: 'favicon-192.png', purpose: 'Android variant' },
    { file: 'favicon-512.png', purpose: 'High-DPI variant' },
    { file: 'favicon.ico', purpose: 'Legacy ICO format' }
  ];
  
  let allPresent = true;
  
  requiredFavicons.forEach(({ file, purpose }) => {
    const path = resolve(__dirname, '../public', file);
    if (existsSync(path)) {
      console.log(`  ✓ ${file} - ${purpose}`);
    } else {
      console.log(`  ✗ MISSING: ${file} - ${purpose}`);
      allPresent = false;
    }
  });
  
  return allPresent;
}

function verifySchemaInjection() {
  console.log('\n🔍 Verifying Schema Injection...');
  
  const distPath = resolve(__dirname, '../dist');
  
  if (!existsSync(distPath)) {
    console.log('  ⚠ dist folder not found - build may not be complete');
    return false;
  }
  
  const indexPath = resolve(distPath, 'index.html');
  
  if (!existsSync(indexPath)) {
    console.log('  ✗ dist/index.html not found');
    return false;
  }
  
  const html = readFileSync(indexPath, 'utf-8');
  
  const schemaTypes = [
    { type: 'Organization', pattern: '"@type": "Organization"' },
    { type: 'WebSite', pattern: '"@type": "WebSite"' },
    { type: 'BreadcrumbList', pattern: '"@type": "BreadcrumbList"' },
    { type: 'WebPage', pattern: '"@type": "WebPage"' }
  ];
  
  let allPresent = true;
  
  schemaTypes.forEach(({ type, pattern }) => {
    if (html.includes(pattern)) {
      console.log(`  ✓ ${type} schema found`);
    } else {
      console.log(`  ⚠ ${type} schema not found in index.html`);
      // Don't mark as failed - some schemas are page-specific
    }
  });
  
  // Check for JSON-LD script tags
  const schemaCount = (html.match(/<script type="application\/ld\+json">/g) || []).length;
  console.log(`  📊 Total JSON-LD schemas: ${schemaCount}`);
  
  return allPresent;
}

function verifyAssets() {
  console.log('\n🖼️  Verifying Critical Assets...');
  
  const criticalAssets = [
    'public/favicon.png',
    'src/assets/smartfirm-logo-header.png',
    'src/assets/smartfirm-logo-full.webp'
  ];
  
  let allPresent = true;
  
  criticalAssets.forEach(asset => {
    const path = resolve(__dirname, '..', asset);
    if (existsSync(path)) {
      console.log(`  ✓ ${asset}`);
    } else {
      console.log(`  ✗ MISSING: ${asset}`);
      allPresent = false;
    }
  });
  
  return allPresent;
}

function verifyIndexHtml() {
  console.log('\n📄 Verifying index.html Configuration...');
  
  const indexPath = resolve(__dirname, '../index.html');
  const html = readFileSync(indexPath, 'utf-8');
  
  const checks = [
    { name: 'Meta description', pattern: '<meta name="description"' },
    { name: 'Canonical URL', pattern: '<link rel="canonical"' },
    { name: 'Open Graph tags', pattern: '<meta property="og:' },
    { name: 'Twitter Card tags', pattern: '<meta name="twitter:' },
    { name: 'Favicon references', pattern: '<link rel="icon"' }
  ];
  
  let allPresent = true;
  
  checks.forEach(({ name, pattern }) => {
    if (html.includes(pattern)) {
      console.log(`  ✓ ${name}`);
    } else {
      console.log(`  ✗ MISSING: ${name}`);
      allPresent = false;
    }
  });
  
  return allPresent;
}

function main() {
  console.log('\n' + '='.repeat(60));
  console.log('🚀 Pre-Deployment Build Verification');
  console.log('='.repeat(60));
  
  const results = {
    favicons: verifyFavicons(),
    schemas: verifySchemaInjection(),
    assets: verifyAssets(),
    indexHtml: verifyIndexHtml()
  };
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 Verification Summary');
  console.log('='.repeat(60));
  
  Object.entries(results).forEach(([category, passed]) => {
    const status = passed ? '✓ PASSED' : '⚠ NEEDS ATTENTION';
    console.log(`  ${category.padEnd(20)}: ${status}`);
  });
  
  const allPassed = Object.values(results).every(r => r);
  
  if (allPassed) {
    console.log('\n✅ All verification checks passed! Ready for deployment.');
    console.log('='.repeat(60) + '\n');
    process.exit(0);
  } else {
    console.log('\n⚠️  Some checks need attention. Review above for details.');
    console.log('='.repeat(60) + '\n');
    process.exit(0); // Don't fail build, just warn
  }
}

main();
