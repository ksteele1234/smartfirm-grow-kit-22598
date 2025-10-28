# SmartFirm.io Design System Guide

## Overview

This guide documents the SmartFirm.io design system implemented in `src/index.css`. It provides a comprehensive reference for developers and designers working on the project.

---

## Core Principles

1. **Semantic First**: Always use semantic tokens (`--primary`, `--accent`) instead of color primitives
2. **Mobile First**: Design for mobile, enhance for desktop
3. **Accessibility**: Maintain WCAG AA contrast ratios and proper focus states
4. **Consistency**: Use the design system utilities rather than inline styles
5. **Performance**: Leverage CSS variables for efficient theme switching

---

## Color System

### Brand Colors (Primitives)
**⚠️ Do not use directly in components**

```css
/* Deep Teal */
--deep-teal-start: 180 74% 11%    /* #0a2e2e */
--deep-teal-end: 180 62% 16%      /* #134444 */

/* Vibrant Teal */
--vibrant-teal-start: 174 75% 41% /* #14b8a6 */
--vibrant-teal-end: 172 79% 47%   /* #2dd4bf */

/* Coral (CTA) */
--coral-start: 347 89% 73%        /* #fb7185 */
--coral-end: 349 89% 60%          /* #f43f5e */
```

### Semantic Tokens
**✅ Use these in components**

```css
--primary: Vibrant teal - Main brand color
--secondary: Muted blue - Supporting elements
--accent: Coral - CTAs and high-priority actions
--muted: Light slate - Subtle backgrounds
--foreground: Text dark - Primary text color
```

### Usage Examples

```tsx
// ✅ CORRECT
<div className="bg-primary text-primary-foreground">
<h2 className="text-primary">Heading</h2>

// ❌ WRONG
<div style={{ color: 'hsl(var(--vibrant-teal-start))' }}>
```

---

## Typography System

### Type Scale

| Class | Mobile | Desktop | Use Case |
|-------|--------|---------|----------|
| `text-display` | 3rem (48px) | 3.75rem (60px) | Hero headlines |
| `h1` | 2.25rem (36px) | 3rem (48px) | Page titles |
| `h2` | 1.875rem (30px) | 2.25rem (36px) | Section headings |
| `h3` | 1.25rem (20px) | 1.5rem (24px) | Subsection headings |
| `text-lead` | 1.25rem (20px) | 1.5rem (24px) | Large body text |
| `body` | 1rem (16px) | 1rem (16px) | Standard paragraphs |
| `text-small` | 0.875rem (14px) | 0.875rem (14px) | Small print |

### Font Families

- **Headings**: Poppins (bold, modern)
- **Body**: DM Sans (clean, readable)

### Letter Spacing

- Display text: `-0.03em` (tighter for impact)
- H1: `-0.02em`
- H2-H3: `-0.01em`
- Body: `normal`

### Usage Examples

```tsx
<h1 className="text-display text-balance">
  Scale Your Accounting Firm
</h1>

<p className="text-lead text-pretty text-muted-foreground">
  Supporting description with optimal readability
</p>
```

---

## Border System

### Semantic Border Colors

**✅ Use these border utilities based on background context:**

```css
/* Light backgrounds */
border-border          /* Default border for cards and inputs on light backgrounds */

/* Dark backgrounds */
border-on-dark-subtle  /* Subtle white border (10% opacity) for minimal separation */
border-on-dark         /* Standard white border (20% opacity) for clear definition */
border-on-dark-strong  /* Prominent white border (30% opacity) for emphasis */
```

### Usage Examples

```tsx
// ✅ CORRECT - Use semantic border tokens
<div className="border border-on-dark rounded-lg">
  Content on dark background
</div>

<Card className="border border-border">
  Content on light background
</Card>

// ❌ WRONG - Don't hardcode border colors
<div className="border border-white/20">
<div className="border border-gray-200">
```

### Border Width

Use standard Tailwind border width utilities:
- `border` - 1px (default)
- `border-2` - 2px (emphasis)
- `border-4` - 4px (strong emphasis, rarely used)

---

## Shadow & Elevation System

### Elevation Levels

| Level | Class | Use Case | Example |
|-------|-------|----------|---------|
| 1 | `elevation-1` | Flat cards, minimal depth | Info cards |
| 2 | `elevation-2` | Standard cards, resting state | Service cards |
| 3 | `elevation-3` | Hover/focus states | Interactive cards |
| 4 | `elevation-4` | Modals, dialogs | Overlays |

### Branded Shadows

```css
.shadow-teal-sm  /* Subtle teal hint */
.shadow-teal-md  /* Medium teal shadow */
.shadow-teal-lg  /* Strong teal shadow for hover */
```

### Glow Effects

```css
.glow-teal   /* Teal button glow */
.glow-coral  /* Coral CTA glow */
.glow-cyan   /* Accent highlight */
.glow-gold   /* Premium element glow */
```

### Usage Examples

```tsx
// Standard card
<div className="elevation-2 rounded-lg p-6">

// Interactive card with hover
<div className="elevation-2 hover-lift hover:elevation-3">

// CTA button with glow
<button className="bg-accent glow-coral">
```

---

## Gradient System

### Linear Gradients (135deg diagonal)

```css
.bg-gradient-vibrant-teal  /* Primary brand gradient */
.bg-gradient-coral         /* CTA gradient */
.bg-gradient-muted-blue    /* Supporting gradient */
.bg-gradient-deep-teal     /* Dark backgrounds */
```

### Advanced Gradients

```css
.bg-gradient-radial-teal      /* Hero sections */
.bg-gradient-mesh-professional /* Multi-color sophisticated */
.bg-gradient-animated         /* Subtle motion for CTAs */
```

### Text Gradients

```css
.text-gradient-teal   /* Brand-colored text */
.text-gradient-coral  /* Accent text */
.text-gradient-gold   /* Premium highlights */
```

### Usage Examples

```tsx
// Hero section background
<section className="bg-gradient-radial-teal">

// Gradient heading
<h2 className="text-gradient-teal font-bold">

// Animated CTA
<button className="bg-gradient-animated">
```

---

## Hover & Interaction States

### Hover Effects

| Class | Effect | Best For |
|-------|--------|----------|
| `hover-lift` | Translate up 4px | Cards, buttons |
| `hover-shadow-teal` | Teal shadow on hover | Brand elements |
| `hover-shadow-coral` | Coral shadow on hover | CTAs |
| `hover-glow-coral` | Glow effect | Primary buttons |
| `hover-brighten` | 8% brightness increase | Images, cards |
| `hover-scale-sm` | Scale to 105% | Icons, small elements |
| `hover-scale-lg` | Scale to 110% | Feature highlights |

### Interactive Card Pattern

**✅ Use `card-interactive` for all interactive cards:**

```tsx
// Standard interactive card - includes hover-lift and elevation changes
<div className="card-interactive elevation-2 rounded-lg p-6">
  {/* Automatically combines hover-lift + elevation-3 on hover */}
</div>

// With Card component
<Card className="card-interactive border-border bg-background">
  {/* Content */}
</Card>
```

**Transition utilities are built-in - no need to add `transition-all duration-300`**

---

## Glass-Morphism Effects

### Glass Card Variants

```css
.glass-card       /* Strong blur + high opacity */
.glass-card-light /* Subtle blur + lower opacity */
```

### Usage Examples

```tsx
// Premium feature card
<div className="glass-card p-8 rounded-2xl">
  <h3>Premium Feature</h3>
</div>

// Overlay card
<div className="glass-card-light backdrop-blur-professional">
```

---

## Border Glow Effects

### Glow Variants

```css
.border-glow-teal   /* Teal border with glow on hover */
.border-glow-coral  /* Coral border with glow on hover */
```

### Usage Examples

```tsx
// Interactive feature card
<div className="border-glow-teal rounded-lg p-6">
  Hover to see glow effect
</div>

// CTA card
<div className="border-glow-coral rounded-lg p-8">
  Premium call-to-action
</div>
```

---

## Entrance Animations

### Animation Classes

| Class | Duration | Easing | Use Case |
|-------|----------|--------|----------|
| `animate-slide-up` | 0.6s | Spring | Cards, sections |
| `animate-fade-in-delayed` | 0.8s | Ease-out | Hero content |
| `animate-scale-in` | 0.4s | Spring | Modal entry |
| `animate-float` | 4s loop | Ease-in-out | Stat cards |

### Stagger Delays

```css
.delay-100  /* 100ms delay */
.delay-200  /* 200ms delay */
.delay-300  /* 300ms delay */
.delay-400  /* 400ms delay */
.delay-500  /* 500ms delay */
```

### Usage Examples

```tsx
// Staggered card reveal
<div className="animate-slide-up delay-100">Card 1</div>
<div className="animate-slide-up delay-200">Card 2</div>
<div className="animate-slide-up delay-300">Card 3</div>

// Hero content fade-in
<h1 className="animate-fade-in-delayed">
  Welcome to SmartFirm
</h1>
```

---

## Focus States (Accessibility)

### Focus Ring Utilities

```css
.focus-ring-teal   /* Teal focus ring for brand elements */
.focus-ring-coral  /* Coral focus ring for CTAs */
```

### Usage Examples

```tsx
// Interactive link
<a href="..." className="focus-ring-teal">
  Learn More
</a>

// Primary button
<button className="focus-ring-coral">
  Get Started
</button>
```

---

## Special Effects

### Pulse Animation

```css
.pulse-teal  /* Pulsing teal glow for CTAs */
```

### Inner Glow

```css
.inner-glow-teal  /* Subtle inner shadow */
```

### Usage Examples

```tsx
// Attention-grabbing CTA
<button className="bg-accent pulse-teal">
  Limited Time Offer
</button>

// Premium card
<div className="inner-glow-teal p-8">
  Premium content
</div>
```

---

## Layout Utilities

### Section Spacing

```css
.section-padding   /* Responsive vertical padding */
.section-container /* Max-width container with padding */
```

### Grid & Flex Gap Tokens

Use semantic gap tokens for consistent spacing in grid and flex layouts:

```tsx
// ✅ CORRECT - Use semantic gap tokens
<div className="grid md:grid-cols-3 gap-sm">    {/* 24px - tight spacing */}
<div className="grid md:grid-cols-2 gap-md">    {/* 32px - standard spacing */}
<div className="grid lg:grid-cols-2 gap-lg">    {/* 48px - spacious layout */}

// ❌ WRONG - Don't hardcode gap values
<div className="grid md:grid-cols-3 gap-6">
<div className="grid md:grid-cols-2 gap-8">
<div className="grid lg:grid-cols-2 gap-12">
```

**Gap Token Reference:**
- `gap-sm`: 1.5rem (24px) - Tight grid spacing, compact layouts
- `gap-md`: 2rem (32px) - Standard grid spacing, most common
- `gap-lg`: 3rem (48px) - Spacious layouts, breathing room

### Usage Examples

```tsx
// Standard section
<section className="section-padding">
  <div className="section-container">
    <div className="grid md:grid-cols-3 gap-md">
      {/* Content */}
    </div>
  </div>
</section>

// Responsive gap sizing
<div className="grid md:grid-cols-2 gap-sm lg:gap-md">
  {/* Tighter on mobile, standard on desktop */}
</div>
```

---

## Best Practices

### Do's ✅

- Use semantic tokens for colors
- Apply elevation system for depth
- Use entrance animations for user delight
- Combine utilities for compound effects
- Test dark mode variants
- Ensure proper contrast ratios
- Use `card-interactive` for all interactive cards
- Use `hover-lift` for standard lift effects
- Use `color-transition` for smooth color/border/shadow changes
- Avoid redundant `transition-all duration-300` - utilities include transitions

### Don'ts ❌

- Don't use color primitives directly
- Don't hardcode shadows
- Don't override design system values
- Don't create inline gradients
- Don't skip focus states
- Don't nest too many animations
- Don't use `transition-all duration-300` manually - use semantic utilities
- Don't hardcode `hover:translate-y-` - use `hover-lift` instead
- Don't combine multiple transition properties - use `color-transition`
- Don't hardcode gap values (`gap-6`, `gap-8`, `gap-12`) - use semantic gap tokens (`gap-sm`, `gap-md`, `gap-lg`)
- Don't hardcode border colors (`border-white/20`, `border-gray-200`, `border-slate-200`) - use semantic border tokens (`border-on-dark`, `border-border`)

---

## Migration from Legacy Code

If you encounter old color variables:

```css
/* OLD (deprecated) */
--primary-blue
--secondary-blue
--light-teal
--dark-teal

/* NEW (use instead) */
--primary
--secondary
--vibrant-teal-start
--deep-teal-start
```

---

## Component Examples

### Hero Section

```tsx
<section className="bg-gradient-radial-teal section-padding">
  <div className="section-container">
    <h1 className="text-display text-balance animate-fade-in-delayed">
      Transform Your Accounting Firm
    </h1>
    <p className="text-lead text-pretty text-on-dark-body">
      Professional marketing automation built for CPAs
    </p>
    <button className="bg-accent hover-glow-coral focus-ring-coral">
      Get Started
    </button>
  </div>
</section>
```

### Feature Card

```tsx
<div className="card-interactive elevation-2 rounded-lg p-6">
  <div className="elevation-1 rounded-full w-12 h-12 flex items-center justify-center bg-primary/10">
    <Icon className="text-primary" />
  </div>
  <h3 className="text-gradient-teal">Feature Name</h3>
  <p className="text-muted-foreground">Feature description</p>
</div>
```

### Premium CTA Card

```tsx
<div className="glass-card border-glow-coral p-8 rounded-2xl">
  <h3 className="text-display text-gradient-coral">
    Ready to Scale?
  </h3>
  <button className="bg-gradient-animated pulse-teal">
    Book Strategy Call
  </button>
</div>
```

---

## Support

For questions or suggestions about the design system:
- Review component examples in `/src/templates/`
- Check UX recommendations in `/src/docs/UX_TEMPLATE_RECOMMENDATIONS.md`
- Refer to accessibility standards in `/src/docs/ACCESSIBILITY_AUDIT.md`
