import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Generate WebSite Schema with SearchAction
 */
function generateWebSiteSchema(baseUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}#website`,
    "url": baseUrl,
    "name": "SmartFirm.io",
    "description": "Marketing automation, technology solutions, and business optimization for accounting firms",
    "publisher": {
      "@id": `${baseUrl}#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en-US"
  };
}

/**
 * Inject WebSite schema into HTML file
 */
function injectSchemaIntoHTML(htmlPath, schema) {
  try {
    let html = readFileSync(htmlPath, 'utf-8');
    
    const schemaString = JSON.stringify(schema, null, 2);
    const scriptTag = `<script type="application/ld+json">\n${schemaString}\n</script>`;
    
    // Check if WebSite schema already exists
    if (html.includes('"@type": "WebSite"') && html.includes('"@id"')) {
      return false;
    }
    
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
 * Recursively find all index.html files
 */
function findAllHtmlFiles(dir, fileList = []) {
  const files = readdirSync(dir);
  
  files.forEach(file => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    
    if (stat.isDirectory()) {
      findAllHtmlFiles(filePath, fileList);
    } else if (file === 'index.html') {
      fileList.push(filePath);
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
  
  console.log('\n🔧 Injecting WebSite Schema...\n');
  console.log(`Base URL: ${baseUrl}`);
  console.log(`Dist path: ${distPath}\n`);
  
  const schema = generateWebSiteSchema(baseUrl);
  
  try {
    const allHtmlFiles = findAllHtmlFiles(distPath);
    let successCount = 0;
    let skippedCount = 0;
    
    allHtmlFiles.forEach(htmlPath => {
      const injected = injectSchemaIntoHTML(htmlPath, schema);
      if (injected) {
        successCount++;
        const relativePath = htmlPath.replace(distPath, '');
        console.log(`✓ Injected: ${relativePath}`);
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
