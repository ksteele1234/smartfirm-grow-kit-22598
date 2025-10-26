import type { Config } from "tailwindcss";

// @ts-ignore
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

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
        // Aurora Background Colors - Using exact palette
        "aurora-1": "#647FBC",
        "aurora-2": "#647FBC", 
        "aurora-3": "#647FBC",
        "aurora-4": "#7AB2B2",
        "aurora-5": "#FAFDD6",
        
        border: "hsl(var(--border))",
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
        // New color system
        'deep-teal': {
          start: '#0a2e2e',
          end: '#134444',
          DEFAULT: '#0a2e2e',
        },
        'muted-blue': {
          start: '#243b55',
          end: '#4a7ba7',
          DEFAULT: '#243b55',
        },
        'vibrant-teal': {
          start: '#14b8a6',
          end: '#2dd4bf',
          DEFAULT: '#14b8a6',
        },
        'bright-cyan': '#5eead4',
        coral: {
          start: '#fb7185',
          end: '#f43f5e',
          DEFAULT: '#fb7185',
        },
        gold: {
          start: '#fbbf24',
          end: '#f59e0b',
          DEFAULT: '#fbbf24',
        },
        slate: {
          50: '#f8fafc',
          600: '#475569',
          900: '#0f172a',
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
      backgroundImage: {
        'gradient-deep-teal': 'linear-gradient(135deg, #0a2e2e, #134444)',
        'gradient-muted-blue': 'linear-gradient(135deg, #243b55, #4a7ba7)',
        'gradient-vibrant-teal': 'linear-gradient(135deg, #14b8a6, #2dd4bf)',
        'gradient-coral': 'linear-gradient(135deg, #fb7185, #f43f5e)',
        'gradient-gold': 'linear-gradient(135deg, #fbbf24, #f59e0b)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
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