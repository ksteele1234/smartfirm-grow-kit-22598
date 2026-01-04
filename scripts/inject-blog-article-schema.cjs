#!/usr/bin/env node
/**
 * Blog Article Schema Injector
 * Fetches real blog post data from Supabase and injects accurate Article schema
 */

const fs = require('fs');
const path = require('path');

const HOSTNAME = 'https://smartfirm.io';
const distPath = path.resolve(__dirname, '../dist');

function getEnv(name) {
  return process.env[name] || process.env[name.replace(/^VITE_/, '')];
}

async function fetchPublishedBlogPosts() {
  const baseUrl = getEnv('VITE_SUPABASE_URL');
  const anonKey =
    getEnv('VITE_SUPABASE_ANON_KEY') ||
    getEnv('VITE_SUPABASE_PUBLISHABLE_KEY') ||
    getEnv('SUPABASE_ANON_KEY');

  if (!baseUrl || !anonKey) {
    console.log('[Article Schema] Missing env vars, skipping');
    return [];
  }

  try {
    const url = new URL(`${baseUrl}/rest/v1/blog_posts`);
    url.searchParams.set('select', 'slug,title,excerpt,meta_description,publish_date,updated_at,featured_image');
    url.searchParams.set('status', 'eq.published');
    url.searchParams.set('publish_date', `lte.${new Date().toISOString()}`);

    const res = await fetch(url.toString(), {
      headers: {
        apikey: anonKey,
        authorization: `Bearer ${anonKey}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const rows = await res.json();
    return Array.isArray(rows) ? rows : [];
  } catch (e) {
    console.log(`[Article Schema] Failed to fetch blog posts (${e.message || e})`);
    return [];
  }
}

function generateArticleSchema(post) {
  const publishDate = post.publish_date ? post.publish_date.split('T')[0] : new Date().toISOString().split('T')[0];
  const modifiedDate = post.updated_at ? post.updated_at.split('T')[0] : publishDate;
  
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${HOSTNAME}/blog/${post.slug}#article`,
    "headline": post.title,
    "description": post.meta_description || post.excerpt || '',
    "url": `${HOSTNAME}/blog/${post.slug}`,
    "datePublished": publishDate,
    "dateModified": modifiedDate,
    "publisher": {
      "@type": "Organization",
      "@id": `${HOSTNAME}#organization`,
      "name": "SmartFirm",
      "url": HOSTNAME,
      "logo": {
        "@type": "ImageObject",
        "url": `${HOSTNAME}/favicon-512.png`,
        "width": 512,
        "height": 512
      }
    },
    "author": {
      "@type": "Organization",
      "@id": `${HOSTNAME}#organization`,
      "name": "SmartFirm"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${HOSTNAME}/blog/${post.slug}`
    },
    "image": {
      "@type": "ImageObject",
      "url": post.featured_image || `${HOSTNAME}/assets/og-default.webp`,
      "width": 1200,
      "height": 630
    },
    "articleSection": "Blog",
    "inLanguage": "en-US",
    "keywords": [
      "accounting firm automation",
      "CPA marketing",
      "accounting practice growth",
      "accounting firm technology"
    ]
  };
}

function injectSchemaIntoHtml(htmlPath, schema) {
  try {
    let html = fs.readFileSync(htmlPath, 'utf-8');
    
    // Check if Article schema already exists
    if (html.includes('"@type":"Article"') || html.includes('"@type": "Article"')) {
      return false;
    }
    
    const schemaString = JSON.stringify(schema, null, 2);
    const scriptTag = `<script type="application/ld+json">\n${schemaString}\n</script>`;
    
    // Inject before closing </head> tag
    if (html.includes('</head>')) {
      html = html.replace('</head>', `  ${scriptTag}\n  </head>`);
      fs.writeFileSync(htmlPath, html, 'utf-8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`[Article Schema] Error processing ${htmlPath}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('\n📰 Injecting Blog Article Schema...\n');
  
  const blogPosts = await fetchPublishedBlogPosts();
  console.log(`[Article Schema] Found ${blogPosts.length} published blog posts`);
  
  let successCount = 0;
  let skippedCount = 0;
  let errorCount = 0;
  
  for (const post of blogPosts) {
    const htmlPath = path.join(distPath, 'blog', post.slug, 'index.html');
    
    if (!fs.existsSync(htmlPath)) {
      console.log(`  ⊘ ${post.slug} (HTML not found - may not be prerendered yet)`);
      skippedCount++;
      continue;
    }
    
    const schema = generateArticleSchema(post);
    const injected = injectSchemaIntoHtml(htmlPath, schema);
    
    if (injected) {
      console.log(`  ✓ ${post.slug}`);
      successCount++;
    } else {
      console.log(`  ⊘ ${post.slug} (schema already exists)`);
      skippedCount++;
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`   ✓ Injected: ${successCount}`);
  console.log(`   ⊘ Skipped: ${skippedCount}`);
  if (errorCount > 0) {
    console.log(`   ✗ Errors: ${errorCount}`);
  }
  console.log('');
}

main().catch(err => {
  console.error('[Article Schema] Error:', err.message);
  process.exit(1);
});
