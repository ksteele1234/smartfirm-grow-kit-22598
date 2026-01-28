
# Remove /industries/business-advisory-marketing-services/ Page (Return 410 Gone)

## Summary
Remove the erroneous `/industries/business-advisory-marketing-services/` page that's causing 6 SEO errors. This page should never have existed - SmartFirm doesn't offer this service.

---

## Good News: 410 IS Supported

Upon verification, Netlify **does support HTTP 410** in `_redirects`. The existing file already uses 410 rules for 68 deprecated FAQ pages (lines 135-205). We will use 410 for proper SEO signaling.

---

## Files to Modify (6 files)

### 1. `public/_redirects` (line 88)
**Change 301 redirect to 410 Gone**

Current:
```
/industries/business-advisory-marketing-services  /industries/business-advisory/  301
```

New:
```
/industries/business-advisory-marketing-services  /gone.html  410!
/industries/business-advisory-marketing-services/  /gone.html  410!
```

The `!` force modifier ensures the rule wins even if static files exist.

---

### 2. `src/App.tsx` (line 229)
**Remove React Router Navigate redirect**

Delete this line:
```typescript
<Route path="/industries/business-advisory-marketing-services" element={<Navigate to="/industries/business-advisory" replace />} />
```

---

### 3. `scripts/generate-sitemap.cjs` (line 60)
**Remove from sitemap staticRoutes array**

Delete this line:
```javascript
{ path: '/industries/business-advisory-marketing-services/', changefreq: 'weekly', priority: 0.8 },
```

---

### 4. `scripts/prerender.cjs` (line 69)
**Remove from prerenderRoutes array**

Delete this line:
```javascript
"/industries/business-advisory-marketing-services",
```

---

### 5. `src/config/sitemapRoutes.ts` (line 57)
**Remove from sitemapRoutes array**

Delete this line:
```typescript
{ path: '/industries/business-advisory-marketing-services', changefreq: 'weekly', priority: 0.8 },
```

---

### 6. `scripts/generate-content-audit.cjs` (line 51)
**Remove from content audit URLs array**

Delete this line:
```javascript
"/industries/business-advisory-marketing-services/",
```

---

## Verification Confirmed

The `gone.html` page already has proper noindex meta tag:
```html
<meta name="robots" content="noindex, nofollow">
```

---

## Post-Deployment Verification

```bash
# Test 1: Confirm 410 status code
curl -I https://smartfirm.io/industries/business-advisory-marketing-services/
# Expected: HTTP/2 410

# Test 2: Confirm NOT in sitemap
curl -s https://smartfirm.io/sitemap.xml | grep "business-advisory-marketing-services"
# Expected: (no results)

# Test 3: Confirm noindex meta tag present
curl -s https://smartfirm.io/industries/business-advisory-marketing-services/ | grep -i "noindex"
# Expected: <meta name="robots" content="noindex, nofollow">

# Test 4: Confirm gone.html content is served
curl -s https://smartfirm.io/industries/business-advisory-marketing-services/ | grep -i "has been removed"
# Expected: "This Page Has Been Removed"
```

---

## Expected Impact

Resolves 6 SEO issues from Ahrefs audit:

| Issue Type | Description |
|------------|-------------|
| ❌ Error | Orphan page (no internal links) |
| ❌ Error | Missing title tag |
| ⚠️ Warning | Missing H1 tag |
| ⚠️ Warning | Missing meta description |
| ⚠️ Warning | Low word count |
| ⚠️ Warning | No outgoing links |

All 6 issues will be resolved once Google receives the 410 response and removes the URL from its index.
