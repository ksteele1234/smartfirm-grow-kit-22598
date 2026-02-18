import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";
// Sitemap generation handled by scripts/generate-sitemap.cjs post-build
// import sitemap from "vite-plugin-sitemap";
// import { sitemapRoutes } from "./src/config/sitemapRoutes";

// SEO-critical routes (for prerendering) - must match actual component routes in App.tsx
export const prerenderRoutes = [
  // Homepage
  "/",

  // Main Navigation Pages
  "/solutions",
  "/services",
  "/automation-and-marketing-services-for-accounting-firms",
  "/industries",
  "/resources",
  "/marketing-agency-for-accounting-firms",
  "/accounting-firm-automation-consultation",
  "/get-started-accounting-firm-automation",
  "/quick-start-automation-package-for-cpa-firms",

  // Solution Pages
  "/solutions/scale-accounting-firm-without-chaos",
  "/solutions/stop-losing-clients-to-tech-savvy-cpas",
  "/solutions/get-more-referrals-for-cpa-firm-without-asking",
  "/solutions/work-less-earn-more-as-a-cpa",
  "/solutions/grow-accounting-firm-without-growing-pains",
  "/solutions/protect-accounting-practice-from-data-breaches",
  "/solutions/client-onboarding-problems",

  // Service Pages
  "/services/ai-transformation-roadmap-for-accounting-firms",
  "/services/ai-process-optimization-for-accounting-firms",
  "/services/marketing-automation-for-accounting-firms",
  "/services/technology-consulting-for-accounting-firms",
  "/services/business-optimization-for-accounting-firms",
  "/services/fractional-cio-for-accounting-firms",
  "/services/automated-lead-follow-up-for-accounting-firms",
  "/services/automated-review-generation-for-cpas",
  "/services/seo-for-accounting-firms",
  "/services/social-media-management-for-accounting-firms",
  "/services/email-marketing-for-accounting-firms",
  "/services/website-design-for-accounting-firms",
  "/services/content-marketing-for-accounting-firms",
  "/services/reputation-management-for-cpa-firms",
  "/services/marketing-strategy-integration-for-accounting-firms",
  "/services/marketing-add-ons-for-accounting-firms",
  "/services/client-onboarding-automation",

  // Offer Pages
  "/ai-transformation-offer",
  "/list-reactivation-offer",

  // Industry Pages
  "/industries/automation-for-tax-preparation-firms",
  "/industries/marketing-for-bookkeeping-firms",
  "/industries/business-advisory",
  "/industries/marketing-for-audit-firms",

  // Tools & Calculators
  "/tools",
  "/tools/accounting-firm-efficiency-assessment",
  "/tools/marketing-assessment-for-accountants",
  "/tools/marketing-roi-calculator-for-accounting-firms",
  "/tools/automation-readiness-assessment-for-accountants",
  "/tools/accounting-firm-workflow-audit-tool",
  "/tools/accounting-firm-technology-roi-calculator",
  "/tools/client-lifetime-value-calculator-for-accountants",
  "/tools/lead-generation-scorecard-for-accounting-firms",
  "/tools/modern-accounting-firm-assessment",
  "/tools/accounting-firm-growth-scorecard",
  "/tools/seo-audit",
  "/tools/page-grader",
  "/tools/advanced-seo-qa",

  // Funnel Pages
  "/accounting-firm-growth-calculator",

  // Case Studies
  "/case-studies",
  "/case-studies/payroll-automation-roi-for-accounting-firms",

  // Legal Pages
  "/privacy-policy",
  "/terms-of-service",
  "/cookie-policy",
  "/faq",
  "/reactivation-terms",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        // Auto-generate WebP versions for imported images
        return new URLSearchParams({
          format: 'webp',
          quality: '80'
        });
      }
    }),
    // Sitemap plugin removed - using post-build script instead (scripts/generate-sitemap.cjs)
    // This prevents build failures from premature dist/ directory access
    // NOTE: Prerendering temporarily disabled - using post-build script instead
    // Will be handled by scripts/prerender.js using puppeteer-core + Netlify chromium
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-dialog'],
          'utils': ['clsx', 'tailwind-merge', 'date-fns'],
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
      },
    },
  },
}));
