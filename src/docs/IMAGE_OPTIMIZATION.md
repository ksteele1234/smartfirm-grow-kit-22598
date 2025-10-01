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

All images in the following components have been optimized:
- ✅ Header logo
- ✅ Footer logo  
- ✅ 404 page (piggy bank)
- ✅ About page (team members)

## TODO

Images that still need optimization:
- [ ] Hero background images
- [ ] Testimonial photos
- [ ] Service page graphics
- [ ] Case study images
- [ ] Resource thumbnails
