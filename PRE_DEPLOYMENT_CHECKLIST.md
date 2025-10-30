# Pre-Deployment Checklist

This checklist should be completed before deploying SmartFirm.io to production.

## ✅ Critical Assets

### Favicons
- [x] `favicon.png` - Main favicon (512x512)
- [x] `favicon-32.png` - 32x32 variant
- [x] `favicon-180.png` - Apple Touch Icon (180x180)
- [x] `favicon-192.png` - Android variant (192x192)
- [x] `favicon-512.png` - High-DPI variant (512x512)
- [x] `favicon.ico` - Legacy ICO format (multi-size)
- [x] All favicons use NEW teal SmartFirm logo
- [x] `index.html` references all sizes correctly

### Logos & Images
- [x] Header logo loads correctly (`smartfirm-logo-header.png`)
- [x] Footer logo (if used) loads correctly
- [x] All actively used logos have proper alt text
- [x] Unused SVG logos archived to `/src/assets/legacy/`
- [ ] No broken image references in components
- [ ] All hero images optimized and using WebP
- [ ] All images have descriptive alt text

## 🔍 SEO & Schema

### Structured Data (JSON-LD)
- [x] Build process runs `inject-all-schemas.js`
- [ ] FAQ schema present on `/faq` page
- [ ] Organization schema on homepage
- [ ] Breadcrumb schema on subpages
- [ ] Service schema on service pages
- [ ] Article schema on blog/resource pages
- [ ] WebPage schema on all pages
- [ ] Test with [Google Rich Results Test](https://search.google.com/test/rich-results)

### Meta Tags
- [ ] All pages have unique meta titles
- [ ] All pages have unique meta descriptions (140-160 chars)
- [ ] Canonical URLs set correctly on all pages
- [ ] Open Graph tags present (og:title, og:description, og:image, og:url)
- [ ] Twitter Card tags present (twitter:card, twitter:title, twitter:description)
- [ ] Sitemap.xml accessible at `/sitemap.xml`
- [ ] Robots.txt configured correctly at `/robots.txt`

## ⚡ Performance

### Image Optimization
- [x] Vite imagetools plugin configured for WebP generation
- [ ] Images lazy-loaded where appropriate (use `loading="lazy"`)
- [ ] Hero images marked as priority (use `loading="eager"`)
- [ ] All images use optimized formats (WebP primary, PNG/JPG fallback)
- [ ] Image dimensions specified to prevent layout shift

### Bundle Optimization
- [ ] Main bundle < 500KB
- [ ] Vendor chunks properly split (check `vite.config.ts`)
- [ ] Tree-shaking working (no unused dependencies bundled)
- [ ] Console logs removed in production build
- [ ] Source maps disabled in production (or uploaded to error tracking)

### Loading Performance
- [ ] First Contentful Paint (FCP) < 1.8s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Time to Interactive (TTI) < 3.8s
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Test with [PageSpeed Insights](https://pagespeed.web.dev/)

## ♿ Accessibility

### WCAG Compliance
- [ ] Color contrast meets WCAG AA standards (4.5:1 for normal text, 3:1 for large)
- [ ] All images have alt text (or `role="presentation"` for decorative)
- [ ] All interactive elements keyboard accessible (tab navigation works)
- [ ] Focus indicators visible on all interactive elements
- [ ] ARIA labels present where needed (e.g., icon buttons)
- [ ] Skip-to-content link present and functional
- [ ] Form labels properly associated with inputs
- [ ] Error messages announced to screen readers

### Testing
- [ ] Test with keyboard only (no mouse)
- [ ] Test with screen reader (NVDA, JAWS, or VoiceOver)
- [ ] Run accessibility audit in Chrome DevTools
- [ ] Test with [WAVE browser extension](https://wave.webaim.org/extension/)

## 🔧 Functionality

### Core Features
- [ ] All CTA buttons work and link to correct destinations
- [ ] Contact forms submit correctly
- [ ] Form validation works properly
- [ ] Navigation menus work on desktop
- [ ] Mobile navigation (hamburger menu) works
- [ ] All internal links work (no 404s)
- [ ] All external links open in new tab (`target="_blank"`)
- [ ] Search functionality works (if implemented)

### Responsive Design
- [ ] Test on mobile (< 640px)
- [ ] Test on tablet (640px - 1023px)
- [ ] Test on desktop (>= 1024px)
- [ ] Test on ultra-wide (>= 1920px)
- [ ] No horizontal scrolling on any breakpoint
- [ ] Touch targets > 44x44px on mobile

### Browser Compatibility
- [ ] Chrome (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Edge (latest 2 versions)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

## 🔒 Security & Privacy

### Headers & Configuration
- [ ] HTTPS enforced (all HTTP redirects to HTTPS)
- [ ] Security headers configured (CSP, X-Frame-Options, etc.)
- [ ] No sensitive data in client-side code
- [ ] Environment variables properly configured
- [ ] API keys not exposed in frontend code

### Forms & Data
- [ ] CSRF protection on forms (if applicable)
- [ ] Form inputs sanitized and validated
- [ ] Privacy policy link present and correct
- [ ] Terms of service link present and correct
- [ ] Cookie consent implemented (if using analytics cookies)

## 📊 Analytics & Tracking

### Implementation
- [ ] Google Analytics configured (or alternative)
- [ ] Conversion tracking set up for key CTAs
- [ ] Event tracking implemented for important actions
- [ ] Error tracking configured (e.g., Sentry)
- [ ] Analytics respect user privacy choices

## 🚀 Deployment

### Pre-Deploy
- [x] Run `npm run build` successfully
- [x] Run `node scripts/verify-build.js` - all checks pass
- [ ] Review build warnings (address critical ones)
- [ ] Test built site locally (`npm run preview`)
- [ ] Check dist/ folder size (should be reasonable)

### Post-Deploy
- [ ] Verify site loads correctly at production URL
- [ ] Test critical user journeys (homepage → CTA → thank you)
- [ ] Check that all pages resolve correctly (no 404s)
- [ ] Verify SSL certificate working
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor error logs for first 24 hours
- [ ] Test contact form submissions reach correct destination

## 📋 Content Quality

### Copy & Messaging
- [ ] No placeholder text (e.g., "Lorem ipsum")
- [ ] No typos in headings or key copy
- [ ] Phone numbers formatted consistently
- [ ] Email addresses valid and monitored
- [ ] Business address correct
- [ ] Social media links point to correct accounts

### Legal & Compliance
- [ ] Privacy policy up to date
- [ ] Terms of service up to date
- [ ] Cookie policy present (if applicable)
- [ ] Copyright year correct
- [ ] All claims and statistics backed by data

## 🎯 Conversion Optimization

### CTAs
- [ ] Primary CTA visible above fold on all key pages
- [ ] CTA copy is action-oriented and clear
- [ ] CTA buttons use brand coral color (#FB7185)
- [ ] Multiple conversion paths available
- [ ] Thank you pages set up for all forms

### Trust Signals
- [ ] Testimonials section present
- [ ] Client logos or case studies visible
- [ ] Contact information easily accessible
- [ ] Social proof elements present
- [ ] Professional imagery throughout

## 🏁 Final Sign-Off

### Stakeholder Approval
- [ ] Design approved by stakeholders
- [ ] Copy reviewed and approved
- [ ] Functionality tested by QA
- [ ] Legal/compliance reviewed
- [ ] Final walkthrough completed

### Launch Readiness
- [ ] DNS records ready (if custom domain)
- [ ] Redirects configured (if replacing old site)
- [ ] Monitoring and alerts set up
- [ ] Rollback plan prepared
- [ ] Team briefed on launch

---

## Automated Verification

Run the automated build verification script:

```bash
npm run build
node scripts/verify-build.js
```

This checks:
- ✅ All favicon variants present
- ✅ Schema injection successful
- ✅ Critical assets exist
- ✅ index.html properly configured

## Quick Test Commands

```bash
# Build and verify
npm run build && node scripts/verify-build.js

# Preview production build locally
npm run preview

# Run accessibility audit
npm run test:a11y

# Check bundle size
npm run build -- --mode production
```

---

**Last Updated:** 2025-10-30  
**Version:** 1.0.0
