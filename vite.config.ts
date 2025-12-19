import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";
import sitemap from "vite-plugin-sitemap";
import { sitemapRoutes } from "./src/config/sitemapRoutes";

// SEO-critical routes (for future prerendering) - 57 total, matches sitemap
export const prerenderRoutes = [
  // Homepage
  "/",
  
  // Main Navigation Pages
  "/solutions-expert-marketing-agency-for-accounting-firms",
  "/leading-marketing-services-for-accounting-firms",
  "/services/all-professional-marketing-services-for-accounting-firms",
  "/industries-expert-marketing-agency-for-accountants",
  "/resources",
  "/about",
  "/contact",
  "/get-started",
  "/quick-start-marketing-for-cpa-firms",
  
  // Solution Pages
  "/solutions/scale-accounting-firm-successfully",
  "/solutions/stop-losing-clients-to-tech-savvy-cpas",
  "/solutions/get-more-referrals-without-asking",
  "/solutions/work-less-earn-more",
  "/solutions/grow-without-growing-pains",
  "/solutions/protect-practice-and-future",
  
  // Service Pages
  "/services/ai-transformation-roadmap",
  "/services/single-process-ai-transformation",
  "/services/marketing-automation-for-accounting-firms",
  "/services/accounting-firm-technology-consulting",
  "/services/business-optimization-for-accounting-firms",
  "/services/fractional-cio-for-accounting-firms",
  "/services/automated-lead-follow-up-for-cpas",
  "/services/automated-review-generation-for-cpas",
  "/services/seo-for-accounting-firms",
  "/services/social-media-management-for-cpas",
  "/services/email-marketing-for-cpas",
  "/services/professional-website-design-for-accounting-firms",
  "/services/strategic-content-marketing-for-cpas",
  "/services/reputation-management-for-cpas",
  "/services/marketing-strategy-integration-for-accounting-firms",
  "/services/add-ons",
  
  // Industry Pages
  "/industries/tax-preparation-marketing-solutions",
  "/industries/bookkeeping-services-marketing-automation",
  "/industries/business-advisory-marketing-services",
  "/industries/audit-assurance-marketing-agency",
  
  // Tools & Calculators
  "/tools",
  "/tools/efficiency-quiz",
  "/tools/marketing-scorecard",
  "/tools/roi-calculator",
  "/tools/automation-readiness-quiz",
  "/tools/workflow-bottleneck-finder",
  "/tools/tech-stack-roi-calculator",
  "/tools/client-lifetime-value-calculator",
  "/tools/lead-generation-scorecard",
  "/tools/modern-firm-quiz",
  "/tools/growth-potential-scorecard",
  "/tools/seo-audit",
  "/tools/page-grader",
  "/tools/advanced-seo-qa",
  
  // Funnel Pages
  "/growth-calculator",
  
  // Case Studies
  "/case-studies",
  "/case-studies/payroll-automation-roi",
  
  // Legal Pages
  "/privacy",
  "/terms",
  "/cookies",
  "/faq",
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
    sitemap({
      hostname: 'https://smartfirm.io',
      dynamicRoutes: sitemapRoutes.map(route => route.path),
      readable: true, // Format XML for readability
    }),
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
