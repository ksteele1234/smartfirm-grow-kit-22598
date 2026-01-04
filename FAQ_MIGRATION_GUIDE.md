# FAQ Migration to Supabase - Phase 2 Guide

## Overview

**Current State (Working):**
- 108 FAQs stored in `src/data/faqContent.ts`
- FAQs hardcoded in sitemap script (`scripts/generate-sitemap.cjs`)
- FAQs ARE in sitemap ✅
- Two places to update when adding/editing FAQs

**After Migration (Better):**
- 108 FAQs in Supabase `faqs` table
- Sitemap fetches FAQs from Supabase dynamically
- Single source of truth
- Easier to manage (edit via database instead of code)

---

## Why Migrate?

1. **Single source of truth** - FAQs only in Supabase, not duplicated in code
2. **Easier management** - Edit FAQs via Supabase dashboard, no code changes
3. **Consistency** - All content (blog, FAQs) managed the same way
4. **Scalability** - Easy to add new FAQs without touching code
5. **Admin tools** - Can build FAQ management UI later

---

## Prerequisites

- Supabase project: `ndjbkrzoreeoijxmkvdb`
- Environment variables already set in Netlify (from Phase 1)
- Access to Supabase SQL Editor

---

## Step 1: Create the FAQs Table in Supabase

1. Go to Supabase dashboard: https://supabase.com/dashboard
2. Select project: `ndjbkrzoreeoijxmkvdb`
3. Go to **SQL Editor**
4. Click **New Query**
5. Copy contents of `migrations/create-faqs-table.sql`
6. Paste and click **Run**

This creates:
- `faqs` table with proper schema
- Indexes for fast lookups
- Row Level Security policies
- Auto-update trigger for `updated_at`

---

## Step 2: Extract FAQs (Already Done)

The FAQs have been extracted to `faqs-migration.json` (108 FAQs).

If you need to re-extract after updating the TypeScript file:

```bash
cd /path/to/smartfirm-grow-kit-22598
node scripts/extract-faqs-for-migration.cjs
```

---

## Step 3: Migrate FAQs to Supabase

```bash
cd /path/to/smartfirm-grow-kit-22598
export $(cat .env | xargs)
node scripts/migrate-faqs-to-supabase.cjs
```

This will insert all 108 FAQs into Supabase.

**If you get an error:**
- Make sure the `faqs` table exists (Step 1)
- Check your `.env` file has correct Supabase credentials
- Verify RLS policies allow inserts

---

## Step 4: Update Sitemap Script to Fetch FAQs from Supabase

**File to edit:** `scripts/generate-sitemap.cjs`

### 4a. Add fetchFAQs function

Find the `fetchBlogCategories()` function (around line 336) and add this AFTER it:

```javascript
async function fetchFAQs() {
  const baseUrl = getEnv('VITE_SUPABASE_URL');
  const anonKey =
    getEnv('VITE_SUPABASE_ANON_KEY') ||
    getEnv('VITE_SUPABASE_PUBLISHABLE_KEY') ||
    getEnv('SUPABASE_ANON_KEY');

  if (!baseUrl || !anonKey) {
    console.log('[Sitemap] FAQs: missing env vars, skipping FAQ routes');
    return [];
  }

  try {
    const url = new URL(`${baseUrl}/rest/v1/faqs`);
    url.searchParams.set('select', 'slug,updated_at');
    url.searchParams.set('is_published', 'eq.true');

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
    console.log(`[Sitemap] FAQs: failed to fetch (${e.message || e})`);
    return [];
  }
}
```

### 4b. Replace generateFaqRoutes() function

Find the `generateFaqRoutes()` function (around line 371) and **DELETE IT ENTIRELY**.

### 4c. Update main() function

Find this section in `main()`:

```javascript
// Generate FAQ routes
const faqRoutes = generateFaqRoutes();
console.log(`[Sitemap] Generated ${faqRoutes.length} FAQ routes`);
```

**Replace it with:**

```javascript
// Fetch FAQs from Supabase
const faqs = await fetchFAQs();
console.log(`[Sitemap] Found ${faqs.length} FAQs`);
```

### 4d. Add FAQ route conversion

Find this section (after blog routes and tag routes):

```javascript
// Convert tags to sitemap routes
const tagRoutes = blogTags.map(tag => ({
  path: `/blog/tags/${tag.slug}`,
  changefreq: 'weekly',
  priority: 0.6,
  lastmod: tag.created_at ? tag.created_at.split('T')[0] : undefined,
}));
```

**Add AFTER it:**

```javascript
// Convert FAQs to sitemap routes
const faqRoutes = faqs.map(faq => ({
  path: `/faq/${faq.slug}`,
  changefreq: 'monthly',
  priority: 0.5,
  lastmod: faq.updated_at ? faq.updated_at.split('T')[0] : undefined,
}));
```

### 4e. Update allRoutes

The `allRoutes` line should already include `faqRoutes`, so no change needed:

```javascript
const allRoutes = [...staticRoutes, ...blogRoutes, ...tagRoutes, ...categoryRoutes, ...faqRoutes];
```

### 4f. Update console.log

Find the console.log that shows the sitemap summary and make sure it includes FAQs:

```javascript
console.log(`   - FAQ pages: ${faqRoutes.length}`);
```

---

## Step 5: Remove Hardcoded FAQ Data from Sitemap Script

Find the `faqCategories` constant (around line 92) that has all the hardcoded FAQ data.

**DELETE IT ENTIRELY** (it's about 280 lines of hardcoded FAQ data).

---

## Step 6: Update FAQ Pages to Use Supabase

**Files to update:**
- `src/pages/FAQ.tsx` (main FAQ listing page)
- `src/pages/FAQAnswer.tsx` (individual FAQ answer page)

These currently import from `src/data/faqContent.ts`. They need to fetch from Supabase instead.

**This step requires React/TypeScript changes.** I can help with this if needed.

---

## Step 7: Test Locally

```bash
cd /path/to/smartfirm-grow-kit-22598
export $(cat .env | xargs)
node scripts/generate-sitemap.cjs
```

You should see:
```
[Sitemap] Found 3 published blog posts
[Sitemap] Found 69 blog tags
[Sitemap] Found 5 blog categories
[Sitemap] Found 108 FAQs
✅ Sitemap generated
   Total URLs: ~243
```

---

## Step 8: Deploy

```bash
git add .
git commit -m "Migrate FAQs to Supabase and update sitemap to fetch dynamically"
git push origin main
```

Netlify will rebuild with the updated sitemap.

---

## Verification

After deployment:

1. **Sitemap:** https://smartfirm.io/sitemap.xml
   - Should have ~243 URLs
   - Should include `/faq/{slug}` URLs

2. **FAQ pages:** https://smartfirm.io/faq
   - All FAQs should display correctly
   - Individual FAQ pages should work

---

## Benefits After Migration

1. ✅ Single source of truth (FAQs only in Supabase)
2. ✅ Easier to manage (edit via Supabase dashboard)
3. ✅ No code changes needed to add/edit FAQs
4. ✅ Consistent with blog content management
5. ✅ Can build admin UI later if needed

---

## Rollback Plan

If something goes wrong:

1. **Revert the code:**
   ```bash
   git revert HEAD
   git push origin main
   ```

2. **FAQs will still work** (they're still in TypeScript file)

3. **Sitemap will use hardcoded FAQs** again

---

## Current Status

- ✅ Phase 1: Netlify env vars set, blog posts/tags/categories in sitemap
- ⏳ Phase 2: FAQ migration to Supabase (this guide)

---

## Questions?

If you need help with:
- React component updates
- Supabase queries
- Testing the migration
- Debugging issues

Just ask!
