# Deployment Guide for Programmatic SEO System

**Status:** Ready to Deploy
**Total Pages:** 236 (VoiceAI and AI chatbot pages removed)
**Timeline:** March 1 to August 17, 2026 (170 days, ~6 months)

---

## 📊 Publishing Schedule Summary

Your pages will publish with a natural, non-spammy cadence:

**8-Day Publishing Cycle:**
- Day 1: 3 pages
- Day 2: 1 page
- Day 3: 2 pages
- Day 4: 0 pages (break)
- Day 5: 2 pages
- Day 6: 1 page
- Day 7: 2 pages
- Day 8: 0 pages (break)

**Total:** 11 pages per 8-day cycle

**Timeline:**
- Start: March 1, 2026
- End: August 17, 2026
- Duration: **170 days (26 weeks, ~6 months)**
- First 3 pages: Published immediately
- Remaining 233 pages: Scheduled automatically

**Publishing Order:**
1. **Conversational Solutions** (60 pages) - Weeks 1-6
2. **Hybrid Pages** (24 pages) - Weeks 6-9
3. **Service Combinations** (21 pages) - Weeks 9-12
4. **Technical Services** (89 pages) - Weeks 12-21
5. **Profession Specific** (26 pages) - Weeks 21-24
6. **Alternatives** (16 pages) - Weeks 24-26

---

## 🚀 Deployment Steps

### Step 1: Set Up Netlify Build Hook (5 minutes)

#### What You Need to Do:

1. **Go to Netlify Dashboard**
   - Log in to [netlify.com](https://netlify.com)
   - Select your SmartFirm website

2. **Create Build Hook**
   - Go to: Site Settings > Build & Deploy > Build Hooks
   - Click "Add build hook"
   - Name: `Programmatic SEO Auto Publish`
   - Branch: `main` (or your primary branch)
   - Click "Save"

3. **Copy the Webhook URL**
   - You'll get a URL like: `https://api.netlify.com/build_hooks/[id]`
   - **Copy this URL** - you'll need it for Step 2

---

### Step 2: Add GitHub Secret (2 minutes)

#### What You Need to Do:

1. **Go to Your GitHub Repository**
   - Navigate to your SmartFirm website GitHub repo
   - This is: `New SmartFirm Website 2026Feb/20260216_NewSmartFirmWebsite`

2. **Add Secret**
   - Go to: Settings > Secrets and variables > Actions
   - Click "New repository secret"
   - Name: `NETLIFY_BUILD_HOOK`
   - Secret: Paste the webhook URL from Step 1
   - Click "Add secret"

---

### Step 3: Copy Generated Pages to Website (10 minutes)

#### What You Need to Do:

You have two options:

**Option A: Copy Markdown Files Directly**

```bash
# Copy all generated pages to your website content directory
cp -r "C:/Users/KatieSteele-Stratis/Repo Clones/smartfirm-grow-kit-22598/generated-pages/*" "C:/Users/KatieSteele-Stratis/Repo Clones/New SmartFirm Website 2026Feb/20260216_NewSmartFirmWebsite/content/"
```

**Option B: Reference from Next.js** (Recommended)

The generated markdown files are ready to be consumed by Next.js with gray-matter:

```javascript
// Example: pages/solutions/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getStaticPaths() {
  const pagesData = JSON.parse(
    fs.readFileSync('data/programmatic-pages.json', 'utf8')
  );

  const solutionsPages = pagesData.filter(
    p => p.category === 'solutions-conversational' && p.published
  );

  const paths = solutionsPages.map(page => ({
    params: { slug: page.slug }
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const pagesData = JSON.parse(
    fs.readFileSync('data/programmatic-pages.json', 'utf8')
  );

  const page = pagesData.find(p => p.slug === params.slug);

  if (!page || !page.published) {
    return { notFound: true };
  }

  // Read the markdown content
  const contentPath = path.join(
    process.cwd(),
    'path/to/generated-pages',
    page.category,
    `${page.slug}.md`
  );

  const fileContent = fs.readFileSync(contentPath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    props: { frontmatter: data, content },
    revalidate: 3600 // Revalidate every hour
  };
}
```

---

### Step 4: Test the Automation (5 minutes)

#### What You Need to Do:

1. **Manually Test the Publishing Script**

```bash
cd "C:/Users/KatieSteele-Stratis/Repo Clones/New SmartFirm Website 2026Feb/20260216_NewSmartFirmWebsite"
node scripts/publish-scheduled-pages.js
```

Expected output:
```
📊 SUMMARY STATISTICS:
   Total pages: 236
   Published: 3
   Unpublished: 233
   Progress: 1.3%
```

2. **Manually Trigger GitHub Action**
   - Go to your GitHub repo
   - Click "Actions" tab
   - Select "Publish Scheduled Pages" workflow
   - Click "Run workflow"
   - Select branch: `main`
   - Click "Run workflow"

3. **Verify It Works**
   - Check that the workflow completes successfully
   - Verify Netlify rebuild was triggered

---

### Step 5: Commit and Push to GitHub (2 minutes)

#### What You Need to Do:

```bash
cd "C:/Users/KatieSteele-Stratis/Repo Clones/New SmartFirm Website 2026Feb/20260216_NewSmartFirmWebsite"

git add .
git commit -m "Add programmatic SEO system with 236 pages and daily auto-publishing"
git push origin main
```

---

## 📋 What Happens After Deployment

### Daily Automation (Runs Automatically at 9 AM UTC)

Every day, GitHub Actions will:

1. **Check Today's Date**
   - Compare against `publishDate` in `programmatic-pages.json`

2. **Publish Ready Pages**
   - Update `published: false` to `published: true` for pages whose date has arrived
   - Following the natural cadence (3, 1, 2, 0, 2, 1, 2, 0 pattern)

3. **Commit Changes**
   - Auto-commit updated `programmatic-pages.json` to GitHub

4. **Trigger Netlify Rebuild**
   - Your site rebuilds with newly published pages
   - New pages go live automatically

5. **Update Sitemap**
   - Sitemap updates with new pages
   - Google crawls and indexes them

### What You See:

**GitHub:**
- Daily commits: "Publish scheduled pages for 2026-03-XX"
- Action logs showing what was published

**Netlify:**
- Daily builds triggered automatically
- New pages appear on your live site

**Google Search Console:**
- New pages appear in sitemap
- Indexing begins automatically

---

## 📁 File Locations

### In This Repo (smartfirm-grow-kit-22598):
- **Generated pages:** `generated-pages/` (236 markdown files)
- **Generation script:** `scripts/generate-all-pages.cjs`
- **Documentation:**
  - `CONTENT_PRINCIPLES.md` - Content guidelines
  - `AFFILIATE_STRATEGY.md` - Karbon affiliate strategy
  - `examples/sample-pages.md` - 3 complete examples
  - `ALL_PAGES_GENERATED.md` - Generation summary
  - `DEPLOYMENT_GUIDE.md` - This file

### In Website Repo (New SmartFirm Website):
- **Page database:** `data/programmatic-pages.json` (236 pages with schedule)
- **GitHub Actions:** `.github/workflows/publish-pages.yml` (updated to daily)
- **Publishing script:** `scripts/publish-scheduled-pages.js`

---

## ✅ Pre-Launch Checklist

Before March 1, 2026:

- [ ] Set up Netlify build hook
- [ ] Add `NETLIFY_BUILD_HOOK` to GitHub secrets
- [ ] Copy/integrate generated pages into website
- [ ] Create Next.js dynamic routes for all 6 categories:
  - [ ] `/solutions/[slug].js` - Conversational
  - [ ] `/services/[slug].js` - Hybrid
  - [ ] `/packages/[slug].js` - Service combinations
  - [ ] `/services/technical/[slug].js` - Technical
  - [ ] `/for/[slug].js` - Profession specific
  - [ ] `/vs/[slug].js` - Alternatives
- [ ] Test publishing script locally
- [ ] Test GitHub Actions workflow manually
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics tracking
- [ ] Commit and push all changes to GitHub

---

## 🔄 Monitoring & Maintenance

### Daily (Automated):
✅ GitHub Actions runs at 9 AM UTC
✅ Pages publish according to schedule
✅ Netlify rebuilds automatically
✅ Sitemap updates

### Weekly (Manual - Recommended):
- Check GitHub Actions logs for any errors
- Review Google Search Console for indexing status
- Monitor organic impressions for new pages

### Monthly (Manual):
- Analyze traffic by page category
- Review conversion rates
- Update underperforming pages if needed

---

## 📊 Expected Results Timeline

### Month 1 (March 2026):
- ~45 pages published
- Google begins indexing
- Initial organic impressions
- Baseline metrics established

### Month 2 (April 2026):
- ~90 pages published (38% complete)
- Long-tail keyword rankings appear
- Organic traffic increasing
- First conversions from programmatic pages

### Month 3 (May 2026):
- ~135 pages published (57% complete)
- Established rankings
- Consistent organic traffic flow
- ROI positive

### Months 4-6 (June-August 2026):
- All 236 pages published
- Dominating long-tail accounting automation keywords
- Scalable evergreen traffic
- Significant lead generation

---

## 🎯 What Makes This System Special

1. **Completely Automated**
   - No manual publishing needed
   - Runs daily at 9 AM UTC
   - Natural, non-spammy cadence

2. **SEO Optimized**
   - Unique titles and meta descriptions
   - H1 with target keywords
   - Optimized URL structure
   - Internal linking strategy
   - Schema-ready

3. **Conversion Focused**
   - Clear CTAs throughout
   - FAQ sections address objections
   - Social proof and outcomes
   - Consultative positioning

4. **Brand Consistent**
   - SmartFirm voice throughout
   - Tool-agnostic positioning
   - Done for you emphasis
   - Transparent approach

5. **Legally Compliant**
   - Karbon affiliate links with FTC disclosure
   - Properly disclosed on ~20 practice management pages

---

## 🆘 Troubleshooting

### GitHub Actions Not Running:
- Check `.github/workflows/publish-pages.yml` is committed
- Verify cron schedule: `'0 9 * * *'` (daily at 9 AM UTC)
- Manually trigger from Actions tab to test

### Netlify Not Rebuilding:
- Verify `NETLIFY_BUILD_HOOK` secret is set correctly
- Check secret value is the full webhook URL
- Test webhook manually: `curl -X POST [your-webhook-url]`

### Pages Not Publishing:
- Check dates in `programmatic-pages.json`
- Verify script runs: `node scripts/publish-scheduled-pages.js`
- Check GitHub Actions logs for errors

### Pages Not Indexing:
- Submit sitemap to Google Search Console
- Verify robots.txt allows crawling
- Check page is actually published (`published: true`)
- Give Google 1-2 weeks for initial indexing

---

## 📞 What to Do Next

1. **Complete Steps 1-5 Above** - Set up automation
2. **Test Everything** - Run manual tests before launch
3. **Submit Sitemap** - To Google Search Console
4. **Monitor Launch** - Watch first few days closely
5. **Sit Back and Relax** - System runs automatically for 6 months!

---

## ✨ Summary

You now have:
- ✅ 236 high-quality programmatic pages
- ✅ Natural publishing cadence (not spammy)
- ✅ Fully automated daily publishing
- ✅ 6-month rollout schedule (March 1 - August 17, 2026)
- ✅ SEO optimized content
- ✅ Conversion focused
- ✅ Brand consistent
- ✅ Legally compliant (affiliate disclosures)

**All you need to do:**
1. Complete the 5 setup steps above
2. Let the automation run
3. Watch your organic traffic grow!

---

**Questions?** Review the documentation files or reach out if you need clarification on any steps.

**Ready to dominate long-tail accounting automation keywords!** 🚀
