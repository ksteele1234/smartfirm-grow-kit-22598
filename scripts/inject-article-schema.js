import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Determine if a path is a resource/blog page
 */
function isResourcePage(urlPath) {
  return urlPath.startsWith('/resources') || 
         urlPath.startsWith('/blog') ||
         urlPath.includes('/guides/') ||
         urlPath.includes('/articles/');
}

/**
 * Generate Article Schema for resource pages
 */
function generateArticleSchema(baseUrl, urlPath) {
  // Extract title from URL path
  const pathSegments = urlPath.split('/').filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];
  const title = lastSegment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${baseUrl}${urlPath}#article`,
    "headline": title,
    "url": `${baseUrl}${urlPath}`,
    "publisher": {
      "@id": `${baseUrl}#organization`
    },
    "author": {
      "@type": "Organization",
      "@id": `${baseUrl}#organization`
    },
    "datePublished": new Date().toISOString().split('T')[0],
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}${urlPath}`
    },
    "image": {
      "@type": "ImageObject",
      "url": `${baseUrl}/assets/og-default.webp`,
      "width": 1200,
      "height": 630
    },
    "articleSection": pathSegments[0] === 'resources' ? 'Resources' : 'Blog',
    "keywords": [
      "accounting firm marketing",
      "CPA marketing automation",
      "accounting practice growth"
    ]
  };
}

/**
 * Inject Article schema into HTML file
 */
function injectSchemaIntoHTML(htmlPath, baseUrl, urlPath) {
  try {
    if (!isResourcePage(urlPath)) {
      return false;
    }
    
    let html = readFileSync(htmlPath, 'utf-8');
    
    // Check if Article schema already exists
    if (html.includes('"@type": "Article"') && html.includes('"@id"')) {
      return false;
    }
    
    const schema = generateArticleSchema(baseUrl, urlPath);
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
  
  console.log('\n🔧 Injecting Article Schema...\n');
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
        console.log(`✓ Injected: ${urlPath}`);
      } else {
        skippedCount++;
      }
    });
    
    console.log('\n📊 Summary:');
    console.log(`   ✓ Successfully injected: ${successCount} pages`);
    console.log(`   ⊘ Skipped (not resource or exists): ${skippedCount} pages`);
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
