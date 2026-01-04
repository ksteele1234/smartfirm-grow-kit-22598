#!/usr/bin/env node
/**
 * Breadcrumb & CollectionPage Schema Injector
 * Injects BreadcrumbList schema into blog posts and tag pages
 * Injects CollectionPage schema into tag pages
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
    console.log('[Breadcrumb Schema] Missing env vars, skipping blog posts');
    return [];
  }

  try {
    const url = new URL(`${baseUrl}/rest/v1/blog_posts`);
    url.searchParams.set('select', 'slug,title');
    url.searchParams.set('status', 'eq.published');
    url.searchParams.set('publish_date', `lte.${new Date().toISOString()}`);

    const res = await fetch(url.toString(), {
      headers: {
        apikey: anonKey,
        authorization: `Bearer ${anonKey}`,
      },
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const rows = await res.json();
    return Array.isArray(rows) ? rows : [];
  } catch (e) {
    console.log(`[Breadcrumb Schema] Failed to fetch blog posts (${e.message || e})`);
    return [];
  }
}

async function fetchBlogTags() {
  const baseUrl = getEnv('VITE_SUPABASE_URL');
  const anonKey =
    getEnv('VITE_SUPABASE_ANON_KEY') ||
    getEnv('VITE_SUPABASE_PUBLISHABLE_KEY') ||
    getEnv('SUPABASE_ANON_KEY');

  if (!baseUrl || !anonKey) {
    console.log('[Breadcrumb Schema] Missing env vars, skipping tags');
    return [];
  }

  try {
    const url = new URL(`${baseUrl}/rest/v1/blog_tags`);
    url.searchParams.set('select', 'id,slug,name,description');

    const res = await fetch(url.toString(), {
      headers: {
        apikey: anonKey,
        authorization: `Bearer ${anonKey}`,
      },
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const rows = await res.json();
    return Array.isArray(rows) ? rows : [];
  } catch (e) {
    console.log(`[Breadcrumb Schema] Failed to fetch tags (${e.message || e})`);
    return [];
  }
}

async function fetchPostsForTag(tagId) {
  const baseUrl = getEnv('VITE_SUPABASE_URL');
  const anonKey =
    getEnv('VITE_SUPABASE_ANON_KEY') ||
    getEnv('VITE_SUPABASE_PUBLISHABLE_KEY') ||
    getEnv('SUPABASE_ANON_KEY');

  if (!baseUrl || !anonKey) return [];

  try {
    // First get post IDs for this tag
    const tagUrl = new URL(`${baseUrl}/rest/v1/blog_post_tags`);
    tagUrl.searchParams.set('select', 'post_id');
    tagUrl.searchParams.set('tag_id', `eq.${tagId}`);

    const tagRes = await fetch(tagUrl.toString(), {
      headers: {
        apikey: anonKey,
        authorization: `Bearer ${anonKey}`,
      },
    });

    if (!tagRes.ok) return [];
    const tagRows = await tagRes.json();
    if (!Array.isArray(tagRows) || tagRows.length === 0) return [];

    const postIds = tagRows.map(r => r.post_id);
    
    // Fetch post details
    const postsUrl = new URL(`${baseUrl}/rest/v1/blog_posts`);
    postsUrl.searchParams.set('select', 'slug,title');
    postsUrl.searchParams.set('id', `in.(${postIds.join(',')})`);
    postsUrl.searchParams.set('status', 'eq.published');
    postsUrl.searchParams.set('publish_date', `lte.${new Date().toISOString()}`);

    const postsRes = await fetch(postsUrl.toString(), {
      headers: {
        apikey: anonKey,
        authorization: `Bearer ${anonKey}`,
      },
    });

    if (!postsRes.ok) return [];
    const posts = await postsRes.json();
    return Array.isArray(posts) ? posts : [];
  } catch (e) {
    return [];
  }
}

function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

function generateCollectionPageSchema(tag, posts) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${HOSTNAME}/blog/tags/${tag.slug}#collection`,
    "name": `${tag.name} Articles`,
    "description": tag.description || `Articles about ${tag.name} for accounting professionals`,
    "url": `${HOSTNAME}/blog/tags/${tag.slug}`,
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${HOSTNAME}#website`,
      "name": "SmartFirm",
      "url": HOSTNAME
    },
    "about": {
      "@type": "Thing",
      "name": tag.name
    },
    "numberOfItems": posts.length
  };

  if (posts.length > 0) {
    schema.mainEntity = {
      "@type": "ItemList",
      "numberOfItems": posts.length,
      "itemListElement": posts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `${HOSTNAME}/blog/${post.slug}`,
        "name": post.title
      }))
    };
  }

  return schema;
}

function injectSchemaIntoHtml(htmlPath, schemas, schemaTypes) {
  try {
    if (!fs.existsSync(htmlPath)) return 'not_found';
    
    let html = fs.readFileSync(htmlPath, 'utf-8');
    let injected = false;
    
    for (let i = 0; i < schemas.length; i++) {
      const schema = schemas[i];
      const schemaType = schemaTypes[i];
      
      // Check if this schema type already exists
      if (html.includes(`"@type":"${schemaType}"`) || html.includes(`"@type": "${schemaType}"`)) {
        continue;
      }
      
      const schemaString = JSON.stringify(schema, null, 2);
      const scriptTag = `<script type="application/ld+json">\n${schemaString}\n</script>`;
      
      if (html.includes('</head>')) {
        html = html.replace('</head>', `  ${scriptTag}\n  </head>`);
        injected = true;
      }
    }
    
    if (injected) {
      fs.writeFileSync(htmlPath, html, 'utf-8');
      return 'injected';
    }
    return 'skipped';
  } catch (error) {
    console.error(`[Schema] Error processing ${htmlPath}:`, error.message);
    return 'error';
  }
}

async function main() {
  console.log('\n🧭 Injecting Breadcrumb & CollectionPage Schemas...\n');
  
  const blogPosts = await fetchPublishedBlogPosts();
  const blogTags = await fetchBlogTags();
  
  console.log(`[Schema] Found ${blogPosts.length} published blog posts`);
  console.log(`[Schema] Found ${blogTags.length} blog tags`);
  
  let blogSuccess = 0;
  let blogSkipped = 0;
  let tagSuccess = 0;
  let tagSkipped = 0;
  
  // Inject BreadcrumbList into blog posts
  console.log('\n📝 Blog Posts:');
  for (const post of blogPosts) {
    const htmlPath = path.join(distPath, 'blog', post.slug, 'index.html');
    
    const breadcrumbItems = [
      { name: 'Home', url: HOSTNAME },
      { name: 'Blog', url: `${HOSTNAME}/blog` },
      { name: post.title, url: `${HOSTNAME}/blog/${post.slug}` }
    ];
    
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
    const result = injectSchemaIntoHtml(htmlPath, [breadcrumbSchema], ['BreadcrumbList']);
    
    if (result === 'injected') {
      console.log(`  ✓ ${post.slug}`);
      blogSuccess++;
    } else if (result === 'not_found') {
      console.log(`  ⊘ ${post.slug} (HTML not found)`);
      blogSkipped++;
    } else {
      console.log(`  ⊘ ${post.slug} (already exists)`);
      blogSkipped++;
    }
  }
  
  // Inject BreadcrumbList + CollectionPage into tag pages
  console.log('\n🏷️  Tag Pages:');
  for (const tag of blogTags) {
    const htmlPath = path.join(distPath, 'blog', 'tags', tag.slug, 'index.html');
    
    const breadcrumbItems = [
      { name: 'Home', url: HOSTNAME },
      { name: 'Blog', url: `${HOSTNAME}/blog` },
      { name: 'Tags', url: `${HOSTNAME}/blog` },
      { name: tag.name, url: `${HOSTNAME}/blog/tags/${tag.slug}` }
    ];
    
    const posts = await fetchPostsForTag(tag.id);
    
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
    const collectionSchema = generateCollectionPageSchema(tag, posts);
    
    const result = injectSchemaIntoHtml(
      htmlPath, 
      [breadcrumbSchema, collectionSchema], 
      ['BreadcrumbList', 'CollectionPage']
    );
    
    if (result === 'injected') {
      console.log(`  ✓ ${tag.slug} (${posts.length} posts)`);
      tagSuccess++;
    } else if (result === 'not_found') {
      console.log(`  ⊘ ${tag.slug} (HTML not found)`);
      tagSkipped++;
    } else {
      console.log(`  ⊘ ${tag.slug} (already exists)`);
      tagSkipped++;
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`   Blog Posts: ${blogSuccess} injected, ${blogSkipped} skipped`);
  console.log(`   Tag Pages:  ${tagSuccess} injected, ${tagSkipped} skipped`);
  console.log('');
}

main().catch(err => {
  console.error('[Schema] Error:', err.message);
  process.exit(1);
});
