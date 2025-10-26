# FAQ Structured Data Testing Guide

## ✅ Implementation Complete

FAQ structured data has been implemented using a hybrid approach:
- **Build-time injection**: `scripts/inject-faq-schema.js` injects schema into HTML during build
- **Runtime validation**: `SEO.tsx` checks for existing schema and only adds if missing
- **Pre-rendering**: Netlify plugin pre-renders critical pages including `/faq`

---

## 🧪 Testing Steps

### 1. Local Build Test

```bash
# Build the project
npm run build

# Check if FAQ schema is in the built HTML
cat dist/faq/index.html | grep "application/ld+json"

# Or search for FAQPage specifically
cat dist/faq/index.html | grep "FAQPage"
```

**Expected Result**: Should see `<script type="application/ld+json">` with FAQPage schema

---

### 2. Local Preview Test

```bash
# Start local preview server
npm run preview

# Then visit http://localhost:4173/faq

# Open browser DevTools Console
# Look for: "[SEO] FAQ schema already exists in DOM"
```

**Expected Result**: FAQ schema should be in initial HTML, React should skip injection

---

### 3. Deploy to Netlify Staging

```bash
# After pushing to Git, Netlify will build automatically

# Once deployed, test with curl:
curl -s https://newsmartfirmwebsite.netlify.app/faq | grep "application/ld+json"

# Or check for FAQPage:
curl -s https://newsmartfirmwebsite.netlify.app/faq | grep "FAQPage"
```

**Expected Result**: FAQ schema should be present in the HTML response (no JavaScript execution)

---

### 4. Google Rich Results Test

1. Visit: https://search.google.com/test/rich-results
2. Enter URL: `https://newsmartfirmwebsite.netlify.app/faq`
3. Click "Test URL"

**Expected Results**:
- ✅ Valid FAQPage schema detected
- ✅ 50+ questions found
- ✅ No errors or warnings
- ✅ Eligible for rich results

---

### 5. Schema.org Validator

1. Visit: https://validator.schema.org/
2. Select "URL" tab
3. Enter: `https://newsmartfirmwebsite.netlify.app/faq`
4. Click "Run Test"

**Expected Result**: Schema validates with no errors

---

### 6. View Page Source (Manual Check)

1. Visit: https://newsmartfirmwebsite.netlify.app/faq
2. Right-click → "View Page Source" (or Ctrl+U / Cmd+U)
3. Search for `application/ld+json`

**Expected Result**: You should see the FAQ schema in the `<head>` section before any `<script>` tags that load React

---

## 🔍 What to Look For

### Valid FAQ Schema Structure

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://smartfirm.io/faq#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "@id": "https://smartfirm.io/faq#question-1",
      "name": "How do I know which solution is right for my accounting firm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start by identifying your biggest challenge..."
      }
    }
    // ... more questions
  ]
}
```

### Key Elements to Verify

- ✅ `@context`: Must be `"https://schema.org"`
- ✅ `@type`: Must be `"FAQPage"`
- ✅ `@id`: Unique identifier for the page
- ✅ `mainEntity`: Array of Question objects
- ✅ Each Question has unique `@id` like `#question-1`, `#question-2`, etc.
- ✅ Each Question has `name` (the question text)
- ✅ Each Question has `acceptedAnswer` with `@type: "Answer"` and `text`

---

## 🐛 Troubleshooting

### Issue: No schema in curl output

**Possible causes**:
1. Build script didn't run → Check `package.json` has `"build": "vite build && node scripts/inject-faq-schema.js"`
2. FAQ page wasn't generated → Check if `/faq` route is properly configured
3. Injection script failed → Run `npm run build` locally and check for errors

**Fix**: 
```bash
npm run build
# Look for: "✅ Injected FAQ schema into..."
```

---

### Issue: Duplicate schemas in DOM

**Symptom**: Google Rich Results Test shows duplicate questions

**Fix**: The React component checks for existing schema and skips injection. Clear browser cache and test again.

---

### Issue: Schema not validating

**Check**:
- JSON syntax (no trailing commas)
- All required fields present (`@type`, `name`, `acceptedAnswer`)
- URLs are absolute (not relative)
- Text fields are properly escaped

---

### Issue: Pre-rendering not working

**Symptom**: `curl` shows minimal HTML without schema

**Checks**:
1. Verify `netlify.toml` has `/faq` in pre-render routes
2. Check Netlify build logs for pre-render plugin activity
3. Ensure `netlify-plugin-prerender-spa` is installed

---

## 📊 Success Metrics

After implementation, you should achieve:

✅ **Schema in initial HTML**: `curl` output includes FAQ schema  
✅ **Google Rich Results eligible**: Test shows "Eligible for rich results"  
✅ **Schema.org validation**: No errors or warnings  
✅ **No duplicate schemas**: Only one FAQPage schema per page  
✅ **Proper question IDs**: Each question has unique `@id`  
✅ **Fast build time**: Build completes in under 2 minutes  
✅ **No runtime errors**: Console shows no schema-related errors  

---

## 🚀 Next Steps

Once FAQ schema is working, extend to other pages:

1. **Service pages**: Add Service schema
2. **Solution pages**: Add WebPage + HowTo schema  
3. **Industry pages**: Add WebPage schema
4. **About page**: Enhanced Organization schema
5. **Success stories**: Article schema with case study markup

Use the same hybrid approach:
- Create page-specific injection scripts
- Update build process
- Add validation in SEO component

---

## 📝 Maintenance Notes

### Updating FAQ Content

To update FAQs:
1. Edit `src/data/faqContent.ts` (single source of truth)
2. Update `scripts/inject-faq-schema.js` FAQ data (keep in sync)
3. Run `npm run build`
4. Deploy

**Future improvement**: Have injection script read from `faqContent.ts` directly (requires TypeScript compilation in build script)

### Monitoring

Periodically check:
- Google Search Console → Enhancements → FAQs
- Google Rich Results Test
- Schema.org Validator
- Lighthouse SEO score

---

## 📚 Resources

- [Google FAQ Rich Results Guide](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- [Schema.org FAQPage Specification](https://schema.org/FAQPage)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
