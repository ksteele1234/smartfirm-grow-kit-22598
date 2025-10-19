# Image Optimization Guidelines

## Best Practices

All images used in SmartFirm.io must follow these optimization guidelines for performance and SEO.

### File Format & Size
- **Format**: Convert all images to WebP format
- **Hero Images**: Target < 150KB
- **Inline Images**: Target < 100KB

### Required Attributes
All images must include:
- `width` and `height` attributes (explicit dimensions)
- `loading="lazy"` (except hero images)
- `decoding="async"`
- Descriptive `alt` text

### Alt Text Convention
Use this format for auto-generated alt text:
```
"{{what is shown}} for {{page context}}"
```

**Examples:**
- `"Marketing automation dashboard for accounting firms"`
- `"Katie Steele professional headshot for SmartFirm team member"`
- `"Cracked piggy bank smiling for 404 error page"`

### Decorative Images
For purely decorative images (no semantic value):
- `role="presentation"`
- `alt=""`

## Using the OptimizedImage Component

SmartFirm provides a reusable `OptimizedImage` component that enforces all best practices:

```tsx
import OptimizedImage from "@/components/ui/optimized-image";

// Standard usage
<OptimizedImage 
  src={imageSource} 
  alt="Descriptive alt text"
  width={800}
  height={600}
  description="What is shown"
  context="page context"
/>

// Hero image (priority loading)
<OptimizedImage 
  src={heroImage} 
  alt="Hero image description"
  width={1920}
  height={1080}
  priority
/>

// Decorative image
<OptimizedImage 
  src={decorativeElement} 
  width={200}
  height={200}
  decorative
/>
```

## Component Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `src` | string | Yes | Image source URL |
| `width` | number | Yes | Image width in pixels |
| `height` | number | Yes | Image height in pixels |
| `alt` | string | No* | Manual alt text (overrides auto-generated) |
| `description` | string | No* | What is shown (for auto alt text) |
| `context` | string | No* | Page context (for auto alt text) |
| `priority` | boolean | No | Load eagerly (hero images) |
| `decorative` | boolean | No | Marks as decorative (no alt needed) |

\*Either `alt` OR (`description` + `context`) OR `decorative` must be provided.

## Conversion Checklist

When adding or updating images:

- [ ] Convert to WebP format
- [ ] Optimize file size (< 150KB hero, < 100KB inline)
- [ ] Use `OptimizedImage` component
- [ ] Set explicit width/height
- [ ] Provide descriptive alt text or mark as decorative
- [ ] Set `priority` for hero images
- [ ] Test loading performance

## Tools

**Recommended converters:**
- [Squoosh](https://squoosh.app/) - Online image optimizer
- [ImageMagick](https://imagemagick.org/) - CLI tool
- [WebP Converter](https://developers.google.com/speed/webp)

**Command line conversion:**
```bash
# Convert to WebP
cwebp input.png -q 80 -o output.webp

# Batch convert
for file in *.png; do cwebp "$file" -q 80 -o "${file%.png}.webp"; done
```

## Current Status

All images across the site have been optimized to WebP format:
- ✅ Header logo (smartfirm-logo-full.webp)
- ✅ Footer logo (smartfirm-logo-gradient.webp)
- ✅ Hero background (hero-wave-background.webp)
- ✅ 404 page (404-piggy-bank.webp)
- ✅ About page team members (katie-steele.webp, brian-hellewell.webp, grace-mendez.webp, yvonne-galicia.webp)
- ✅ Testimonial photos (testimonial-dan.webp, testimonial-joanna.webp, testimonial-jenn.webp)
- ✅ OG image (og-default.webp)
- ✅ All marketing assets (meeting-photo.webp, woman-pointing-blazer.webp)
- ✅ Charts and graphics (revenue-growth-chart.svg)

## Compression Guidelines

All WebP images follow these compression standards:
- **Hero/Background Images**: < 150KB
- **Profile Photos**: < 80KB
- **Inline Graphics**: < 100KB
- **Icons/Logos**: SVG preferred, or < 50KB WebP

## Performance Impact

WebP optimization provides:
- ~30-40% smaller file sizes vs PNG
- ~25-35% smaller vs JPEG
- Faster page loads
- Better Core Web Vitals scores
