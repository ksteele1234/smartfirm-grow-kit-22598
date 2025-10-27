import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Generate breadcrumb items from URL path
 */
function generateBreadcrumbItems(baseUrl, urlPath) {
  const pathSegments = urlPath.split('/').filter(Boolean);
  const items = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": baseUrl
    }
  ];
  
  let currentPath = baseUrl;
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    items.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": name,
      "item": currentPath
    });
  });
  
  return items;
}

/**
 * Generate BreadcrumbList Schema
 */
function generateBreadcrumbSchema(baseUrl, urlPath) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": generateBreadcrumbItems(baseUrl, urlPath)
  };
}

/**
 * Inject Breadcrumb schema into HTML file
 */
function injectSchemaIntoHTML(htmlPath, baseUrl, urlPath) {
  try {
    let html = readFileSync(htmlPath, 'utf-8');
    
    // Skip homepage - no breadcrumbs needed
    if (urlPath === '' || urlPath === '/') {
      return false;
    }
    
    // Check if BreadcrumbList schema already exists
    if (html.includes('"@type": "BreadcrumbList"')) {
      return false;
    }
    
    const schema = generateBreadcrumbSchema(baseUrl, urlPath);
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
  
  console.log('\n🔧 Injecting Breadcrumb Schema...\n');
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
    console.log(`   ⊘ Skipped (homepage or exists): ${skippedCount} pages`);
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
