import { memo, lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import { useDeferredComponent } from "@/hooks/useDeferredComponent";

// CRITICAL: Load immediately for LCP (Largest Contentful Paint)
import HeroSection from "@/components/sections/HeroSection";

// IMPORTANT: Lazy load header/footer - they're not part of LCP
const Header = lazy(() => import("@/components/navigation/Header"));
const Footer = lazy(() => import("@/components/navigation/Footer"));

// ABOVE THE FOLD: Lazy load but prioritize (visible without scrolling)
const StatsGrid = lazy(() => import("@/components/sections/StatsGrid"));
const FounderStory = lazy(() => import("@/components/sections/FounderStory"));
const CompleteMarketingSolutions = lazy(() => import("@/components/sections/CompleteMarketingSolutions").then(module => ({ default: module.CompleteMarketingSolutions })));


// BELOW THE FOLD: Lazy load with lower priority (requires scrolling)
const PricingHeroCondensed = lazy(() => import("@/components/sections/PricingHeroCondensed"));
const WhySmartFirmIsDifferent = lazy(() => import("@/components/sections/WhySmartFirmIsDifferent"));
const FirmComparisonSection = lazy(() => import("@/components/sections/FirmComparisonSection"));
const FinalCTASection = lazy(() => import("@/components/sections/FinalCTASection"));
const HomepageFAQSection = lazy(() => import("@/components/sections/HomepageFAQSection"));

// Minimal loading fallback to prevent layout shift
const SectionLoader = () => (
  <div className="py-16 flex items-center justify-center" style={{ minHeight: '400px' }}>
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
);

// Minimal header/footer loader
const NavLoader = () => (
  <div style={{ minHeight: '80px' }} className="bg-background" />
);

const Index = memo(() => {
  // Load above-the-fold content after hero renders (100ms delay)
  const shouldRenderAboveFold = useDeferredComponent(100);
  
  // Load below-the-fold content when browser is idle (200ms delay)
  const shouldRenderBelowFold = useDeferredComponent(200);
  
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Expert Digital Marketing For Accounting Firms | SmartFirm"
        description="SmartFirm delivers expert digital marketing for accounting firms with done-for-you automation, SEO, websites, and retention systems to get & keep clients."
        pageImage="/assets/hero-wave-background.webp"
        pageType="default"
        noindex={false}
        dateModified={new Date().toISOString()}
        organizationType="ProfessionalService"
        showContactInfo={true}
        showAddress={true}
        faqs={[
          { question: "How is this different from other marketing agencies?", answer: "We only work with accounting firms: no restaurants, dentists, or tech startups. Our founder is a CPA who understands busy season, utilization rates, and the difference between $500 tax clients and $5K advisory retainers. We don't offer generic 'brand awareness' tactics. We build marketing infrastructure: websites that convert, Google profiles that rank, review systems that build trust, and dashboards that prove ROI." },
          { question: "How much time will my team need to invest?", answer: "During the initial 30-day setup, expect to invest 4-6 hours total across a few strategy sessions where we nail down your positioning, ideal clients, and messaging. We handle all the technical execution: website build, GBP optimization, system integrations. After launch, your team invests approximately 2 hours per month for performance reviews and content approval." },
          { question: "What kind of clients will we attract?", answer: "We target CFO-level decision makers and business owners looking for $5K-$15K advisory relationships, not $500 tax-only clients. Our strategies position you as a trusted advisor through thought leadership content, strategic SEO targeting high-value services, and referral partner programs with attorneys and financial advisors." },
          { question: "We've tried marketing before and got mixed results. Why will this work?", answer: "Most DIY marketing fails because firms lack the infrastructure. Random LinkedIn posts don't work without a website that converts visitors. Google ads waste money if your Business Profile isn't optimized. Email campaigns flop without proper tracking. We build the foundation first (website, local SEO, review systems, analytics) then layer on tactics." },
          { question: "How quickly will we see results?", answer: "The first thing we set up is your analytics and tracking (if you don't have them already), so you can see improvements from day 1. Your website and Google Business Profile optimization are complete within 14 days. The full Quick Start Package, including review systems, email automation, and tracking dashboards, is live within 30 days." },
          { question: "How do you prove what's working?", answer: "You get a real-time dashboard tracking website traffic, lead sources, Google rankings, review count, and cost-per-lead. Monthly reports show exactly where leads came from (Google search, referrals, direct traffic) and which marketing activities drove results." },
          { question: "What's the total investment?", answer: "The Quick Start Package is $12,500 one-time setup plus $999/month for ongoing management, optimization, and support. This includes everything: website, Google Business Profile, review system, email automation, performance tracking, and monthly reports. No hidden fees. Cancel anytime after the initial 30-day setup." },
          { question: "Can we cancel if it's not working?", answer: "Absolutely. After the initial 30-day setup period, you can cancel anytime with 30 days notice. We don't lock you into long-term contracts because we earn your business every month by delivering results." },
          { question: "Do you understand the accounting industry?", answer: "Yes. SmartFirm was founded by a CPA and a business turnaround specialist with 20+ years of experience. We've lived the reality of accounting firms: tax season chaos, managing utilization and realization rates, the challenge of shifting from compliance work to high-value advisory services." },
          { question: "What if we're in busy season?", answer: "We work around your schedule. If you're slammed during tax season (January-April), we can delay the setup start date or spread strategy sessions across several weeks. The technical work happens on our end regardless of your availability. Once systems are live, they run 24/7 whether you're buried in extensions or enjoying a slower summer." },
          { question: "What happens after the 30-day setup?", answer: "Your marketing infrastructure continues working on autopilot. We handle ongoing technical optimization: monitoring Google rankings, managing review responses, maintaining system integrations, and tracking performance. You receive monthly reports showing what's working and where we're focusing efforts." }
        ]}
      />
      
      {/* Header - Lazy loaded to reduce initial JS */}
      <Suspense fallback={<NavLoader />}>
        <Header />
      </Suspense>

      <main id="main-content" role="main">
        {/* CRITICAL: Hero Section loads immediately for optimal LCP */}
        <HeroSection />

        {/* ABOVE FOLD: Load after hero renders (100ms delay) */}
        {shouldRenderAboveFold && (
          <>
            {/* Section 2: Unified Credibility Section - Background A (White) */}
            <section className="bg-white section-padding" style={{ paddingTop: 'calc(var(--section-padding-y) - 40px)' }}>
              <Suspense fallback={<SectionLoader />}>
                <StatsGrid />
              </Suspense>
              <Suspense fallback={<SectionLoader />}>
                <FounderStory />
              </Suspense>
            </section>

            {/* Section 3: Complete Marketing Solutions - Background B (Blue Gradient) */}
            <Suspense fallback={<SectionLoader />}>
              <CompleteMarketingSolutions />
            </Suspense>
          </>
        )}

        {/* BELOW FOLD: Load when browser is idle (200ms delay) */}
        {shouldRenderBelowFold && (
          <>
            {/* Section 4: Why SmartFirm is Different - Background A (White) */}
            <Suspense fallback={<SectionLoader />}>
              <WhySmartFirmIsDifferent />
            </Suspense>

            {/* Section 5: Pricing Hero - Background B (Dark Gradient) */}
            <Suspense fallback={<SectionLoader />}>
              <PricingHeroCondensed />
            </Suspense>

            {/* Section 6: Firm Comparison - Background A (White) */}
            <Suspense fallback={<SectionLoader />}>
              <FirmComparisonSection />
            </Suspense>

            {/* Section 7: FAQ - Background B (Soft Teal) */}
            <Suspense fallback={<SectionLoader />}>
              <HomepageFAQSection />
            </Suspense>

            {/* Section 8: Final CTA - Exception (Primary Blue Gradient) */}
            <Suspense fallback={<SectionLoader />}>
              <FinalCTASection />
            </Suspense>
          </>
        )}
      </main>
      
      {/* Footer - Lazy loaded to reduce initial JS */}
      <Suspense fallback={<NavLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
});

Index.displayName = 'Index';

export default Index;
