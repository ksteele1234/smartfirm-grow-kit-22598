import type { Config } from "tailwindcss";

// @ts-ignore
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
// @ts-ignore
const typography = require("@tailwindcss/typography");

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '3rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        "border-on-dark-subtle": "var(--border-on-dark-subtle)",
        "border-on-dark": "var(--border-on-dark)",
        "border-on-dark-strong": "var(--border-on-dark-strong)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // SmartFirm Brand Colors
        "primary-blue": "hsl(var(--primary-blue))",
        "secondary-blue": "hsl(var(--secondary-blue))",
        "primary-teal": "hsl(var(--primary-teal))",
        "light-teal": "hsl(var(--light-teal))",
        "accent-light": "hsl(var(--accent-light))",
        "dark-teal": "hsl(var(--dark-teal))",
        "dark-blue": "hsl(var(--dark-blue))",
        "slate-navy": "hsl(var(--slate-navy))",
        "light-border": "hsl(220 13% 91%)",
        teal: {
          DEFAULT: "hsl(var(--teal))",
          foreground: "hsl(var(--teal-foreground))",
          light: "hsl(var(--light-teal))",
        },
        "text-secondary": "hsl(var(--text-secondary))",
        "text-light": "hsl(var(--text-light))",
        "background-light": "hsl(var(--background-light))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
        sans: ['var(--font-body)'],
      },
      boxShadow: {
        'soft': 'var(--shadow-soft)',
        'card': 'var(--shadow-card)',
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        'teal-sm': 'var(--shadow-teal-sm)',
        'teal-md': 'var(--shadow-teal-md)',
        'teal-lg': 'var(--shadow-teal-lg)',
        'glow-teal': 'var(--glow-teal)',
        'glow-coral': 'var(--glow-coral)',
        'glow-cyan': 'var(--glow-cyan)',
        'glow-gold': 'var(--glow-gold)',
      },
      maxWidth: {
        'container-xs': 'var(--container-xs)',
        'container-sm': 'var(--container-sm)',
        'container-md': 'var(--container-md)',
        'container-lg': 'var(--container-lg)',
        'container-content': 'var(--container-content)',
        'container-xl': 'var(--container-xl)',
        'container-2xl': 'var(--container-2xl)',
        'container-3xl': 'var(--container-3xl)',
        'text-sm': 'var(--text-container-sm)',
        'text-md': 'var(--text-container-md)',
        'text-lg': 'var(--text-container-lg)',
        'text-xl': 'var(--text-container-xl)',
      },
      spacing: {
        'section': 'var(--spacing-section)',
        'section-sm': 'var(--spacing-section-sm)',
        'section-lg': 'var(--spacing-section-lg)',
        'card': 'var(--spacing-card)',
        'card-sm': 'var(--spacing-card-sm)',
      },
      gap: {
        'sm': 'var(--gap-sm)',
        'md': 'var(--gap-md)',
        'lg': 'var(--gap-lg)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        'card-sm': 'var(--radius-card-sm)',
        'card': 'var(--radius-card)',
        'card-lg': 'var(--radius-card-lg)',
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: "50% 50%" },
          to: { backgroundPosition: "350% 50%" },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "scale-hover": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.02)" }
        },
        "magnetic": {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(var(--mouse-x, 0), var(--mouse-y, 0))" }
        },
        "rotateClockwise": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "rotateCounterClockwise": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" }
        },
        "subtlePulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.95" }
        }
      },
      animation: {
        aurora: "aurora 240s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "scale-hover": "scale-hover 0.2s ease-out",
        "magnetic": "magnetic 0.15s ease-out",
        "rotate-clockwise": "rotateClockwise 30s linear infinite",
        "rotate-counter": "rotateCounterClockwise 40s linear infinite",
        "subtle-pulse": "subtlePulse 3.5s ease-in-out infinite"
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-headings': 'hsl(var(--heading-primary))',
            '--tw-prose-body': 'hsl(var(--slate-dark))',
            '--tw-prose-links': 'hsl(var(--primary))',
            'h1': {
              fontSize: '2rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: '800',
              lineHeight: '1.3',
              marginTop: '1.5em',
              marginBottom: '0.5em',
              color: 'hsl(var(--heading-primary))',
            },
            'h2': {
              fontSize: '1.5rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              lineHeight: '1.35',
              marginTop: '1.25em',
              marginBottom: '0.5em',
              color: 'hsl(var(--heading-primary))',
            },
            'h3': {
              fontSize: '1.25rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: '600',
              lineHeight: '1.4',
              marginTop: '1em',
              marginBottom: '0.5em',
              color: 'hsl(var(--heading-secondary))',
            },
            'h4': {
              fontSize: '1.125rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: '600',
              lineHeight: '1.45',
              marginTop: '1em',
              marginBottom: '0.5em',
              color: 'hsl(var(--heading-secondary))',
            },
            'h5, h6': {
              fontSize: '1rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: '600',
              color: 'hsl(var(--heading-secondary))',
            },
            'p': {
              marginTop: '1em',
              marginBottom: '1em',
              lineHeight: '1.7',
            },
            'a': {
              color: 'hsl(var(--primary))',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          },
        },
        lg: {
          css: {
            'h1': { fontSize: '2.5rem' },
            'h2': { fontSize: '2rem' },
            'h3': { fontSize: '1.5rem' },
            'h4': { fontSize: '1.25rem' },
            'h5, h6': { fontSize: '1.125rem' },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), typography, addVariablesForColors],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}