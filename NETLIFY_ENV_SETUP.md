# Netlify Environment Variables Setup

## Immediate Action Required

Your sitemap generation script needs Supabase environment variables to fetch blog posts, tags, and categories during build. Without these, your sitemap will only have the 58 static routes.

---

## Step 1: Add Environment Variables to Netlify

1. Go to your Netlify dashboard: https://app.netlify.com
2. Select your SmartFirm site
3. Go to **Site settings** → **Environment variables**
4. Click **Add a variable** and add these two variables:

### Variable 1: VITE_SUPABASE_URL
```
Key: VITE_SUPABASE_URL
Value: https://ndjbkrzoreeoijxmkvdb.supabase.co
```

### Variable 2: VITE_SUPABASE_PUBLISHABLE_KEY
```
Key: VITE_SUPABASE_PUBLISHABLE_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kamJrcnpvcmVlb2lqeG1rdmRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0NTcyMDMsImV4cCI6MjA3NjAzMzIwM30.D2N6RnXh8TkgaYh_CHh324Vs8DTlkJMH5hVCiPaF4V8
```

5. Click **Save**

---

## Step 2: Trigger a New Deploy

After adding the environment variables:

1. Go to **Deploys** tab in Netlify
2. Click **Trigger deploy** → **Deploy site**
3. Wait for the build to complete (~2-3 minutes)

---

## Step 3: Verify the Sitemap

Once the deploy completes:

1. Visit: https://smartfirm.io/sitemap.xml
2. You should now see:
   - **58 static routes** (existing pages)
   - **3 blog post routes** (e.g., `/blog/accounting-firm-automation`)
   - **69 blog tag routes** (e.g., `/blog/tags/accounting-automation`)
   - **5 blog category routes** (e.g., `/blog/category/firm-automation`)
   - **85+ FAQ routes** (e.g., `/faq/which-solution-right-for-accounting-firm`)

**Total: ~220 URLs** (up from 59)

---

## What This Fixes

### Before (Current State)
- Sitemap: 59 URLs
- Blog posts: ❌ Not in sitemap
- Blog tags: ❌ Not in sitemap
- Blog categories: ❌ Not in sitemap
- FAQ pages: ❌ Not in sitemap

### After (With Env Vars)
- Sitemap: ~220 URLs
- Blog posts: ✅ In sitemap
- Blog tags: ✅ In sitemap
- Blog categories: ✅ In sitemap
- FAQ pages: ✅ In sitemap

---

## Troubleshooting

### If the sitemap still only has 59 URLs after deploy:

1. **Check the build logs:**
   - Go to Netlify **Deploys** tab
   - Click on the latest deploy
   - Scroll to the build logs
   - Look for lines starting with `[Sitemap]`
   - You should see:
     ```
     [Sitemap] Found 3 published blog posts
     [Sitemap] Found 69 blog tags
     [Sitemap] Found 5 blog categories
     [Sitemap] Generated 85 FAQ routes
     ```

2. **If you see "missing env vars" messages:**
   - Double-check the variable names are exactly:
     - `VITE_SUPABASE_URL` (not `SUPABASE_URL`)
     - `VITE_SUPABASE_PUBLISHABLE_KEY` (not `SUPABASE_ANON_KEY`)
   - Make sure there are no extra spaces in the values
   - Try triggering another deploy

3. **If blog posts show 0:**
   - Check your Supabase `blog_posts` table
   - Make sure posts have `status='published'`
   - Make sure `publish_date` is in the past

---

## Next Steps

After the sitemap is working:

1. **Submit to Google Search Console:**
   - Go to Google Search Console
   - Submit the updated sitemap: `https://smartfirm.io/sitemap.xml`
   - Monitor indexing progress

2. **Monitor indexing:**
   - Check GSC in 7-14 days
   - You should see ~220 URLs indexed (up from 59)
   - Blog posts and FAQs should start appearing in search results

3. **Optional: Migrate FAQs to Supabase**
   - See `FAQ_MIGRATION_GUIDE.md` for Phase 2 improvements
   - This makes FAQ management easier but isn't urgent

---

## Current Sitemap Status

**As of now:**
- Blog posts, tags, categories: Fetched from Supabase (needs env vars)
- FAQs: Generated from hardcoded data in sitemap script (works without env vars)

**After Supabase migration (Phase 2):**
- Everything fetched from Supabase
- Single source of truth
- Easier to manage

---

## Questions?

If you run into issues:
1. Check the Netlify build logs
2. Verify the env vars are set correctly
3. Make sure your Supabase tables have data
4. Trigger a fresh deploy after making changes
