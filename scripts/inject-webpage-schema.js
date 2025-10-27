import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Generate WebPage Schema
 */
function generateWebPageSchema(baseUrl, urlPath) {
  // Extract title from URL path
  const pathSegments = urlPath.split('/').filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1] || 'home';
  const title = lastSegment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const fullTitle = urlPath === '' || urlPath === '/' 
    ? 'SmartFirm.io - Marketing Automation for Accounting Firms'
    : `${title} | SmartFirm.io`;
  
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}${urlPath}#webpage`,
    "url": `${baseUrl}${urlPath}`,
    "name": fullTitle,
    "description": "Marketing automation, technology solutions, and business optimization for accounting firms",
    "isPartOf": {
      "@id": `${baseUrl}#website`
    },
    "about": {
      "@id": `${baseUrl}#organization`
    },
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "ReadAction",
      "target": [`${baseUrl}${urlPath}`]
    }
  };
}

/**
 * Inject WebPage schema into HTML file
 */
function injectSchemaIntoHTML(htmlPath, baseUrl, urlPath) {
  try {
    let html = readFileSync(htmlPath, 'utf-8');
    
    // Check if WebPage schema already exists (but not as part of other schemas)
    const webPageRegex = /"@type":\s*"WebPage"[^}]*"@id":\s*"[^"]*#webpage"/;
    if (webPageRegex.test(html)) {
      return false;
    }
    
    const schema = generateWebPageSchema(baseUrl, urlPath);
    const schemaString = JSON.stringify(schema, null, 2);
    const scriptTag = `<script type="application/ld+json">\n${schemaString}\n</script>`;
    
    // Inject before closing </head> tag
    if (html.includes('</head>')) {
      html = html.replace('</head>', `  ${scriptTag}\n  </head>`);
      writeFileSync(htmlPath, html, 'utf-8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`✗ Error processing ${htmlPath}:`, error.message);
    return false;
  }
}

/**
 * Recursively find all index.html files and their URL paths
 */
function findAllHtmlFiles(dir, baseDir = dir, fileList = []) {
  const files = readdirSync(dir);
  
  files.forEach(file => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    
    if (stat.isDirectory()) {
      findAllHtmlFiles(filePath, baseDir, fileList);
    } else if (file === 'index.html') {
      const relativePath = filePath.replace(baseDir, '').replace('/index.html', '');
      fileList.push({ path: filePath, urlPath: relativePath });
    }
  });
  
  return fileList;
}

/**
 * Main execution
 */
function main() {
  const baseUrl = process.env.VITE_SITE_URL || 'https://smartfirm.io';
  const distPath = resolve(__dirname, '../dist');
  
  console.log('\n🔧 Injecting WebPage Schema...\n');
  console.log(`Base URL: ${baseUrl}`);
  console.log(`Dist path: ${distPath}\n`);
  
  try {
    const allHtmlFiles = findAllHtmlFiles(distPath);
    let successCount = 0;
    let skippedCount = 0;
    
    allHtmlFiles.forEach(({ path, urlPath }) => {
      const injected = injectSchemaIntoHTML(path, baseUrl, urlPath);
      if (injected) {
        successCount++;
        console.log(`✓ Injected: ${urlPath || '/'}`);
      } else {
        skippedCount++;
      }
    });
    
    console.log('\n📊 Summary:');
    console.log(`   ✓ Successfully injected: ${successCount} pages`);
    console.log(`   ⊘ Skipped (already exists): ${skippedCount} pages`);
    console.log('');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('⚠ dist folder not found (build may not have completed yet)');
    } else {
      console.error('✗ Error:', error.message);
    }
  }
}

main();
