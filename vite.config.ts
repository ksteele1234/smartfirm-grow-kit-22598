import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";
import sitemap from "vite-plugin-sitemap";
import { htmlPrerender } from "vite-plugin-html-prerender";
import { sitemapRoutes } from "./src/config/sitemapRoutes";

// SEO-critical routes to pre-render (canonical slugs only)
const prerenderRoutes = [
  "/",
  "/about",
  "/contact",
  "/get-started",
  "/faq",
  "/solutions-expert-marketing-agency-for-accounting-firms",
  "/services/marketing-automation-for-accounting-firms",
  "/services/seo-for-accounting-firms",
  "/services/professional-website-design-for-accounting-firms",
  "/services/email-marketing-for-cpas",
  "/services/strategic-content-marketing-for-cpas",
  "/services/social-media-management-for-cpas",
  "/services/accounting-firm-technology-consulting",
  "/services/business-optimization-for-accounting-firms",
  "/services/ai-transformation-roadmap",
  "/services/single-process-ai-transformation",
  "/case-studies",
  "/case-studies/payroll-automation-roi",
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
mode === "production" && htmlPrerender({
      staticDir: path.resolve(__dirname, "dist"),
      routes: prerenderRoutes,
      selector: "#root",
    }),
    // Custom plugin to log prerender completion status
    mode === "production" && {
      name: 'prerender-status-logger',
      closeBundle() {
        console.log('[Prerender] Build pipeline completed. Check logs above for Chrome/Puppeteer errors.');
        console.log('[Prerender] If Chrome missing, switch to puppeteer-core + @netlify/plugin-chromium');
      }
    },
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
          'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
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
