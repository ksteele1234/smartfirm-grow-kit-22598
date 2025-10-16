import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ReadyToTransformSection from "@/components/sections/ReadyToTransformSection";
import StatsGrid from "@/components/sections/StatsGrid";
import FounderStory from "@/components/sections/FounderStory";
import WhySmartFirmIsDifferent from "@/components/sections/WhySmartFirmIsDifferent";
import FirmComparisonSection from "@/components/sections/FirmComparisonSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import HomepageFAQSection from "@/components/sections/HomepageFAQSection";

import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CompleteMarketingSolutions } from "@/components/sections/CompleteMarketingSolutions";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { CurvedSeparator } from "@/components/ui/curved-separator";
import { WaveDivider } from "@/components/ui/wave-divider";
import { ArrowRight, Play } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Marketing Automation for Accounting Firms | SmartFirm"
        description="Marketing automation for accounting firms and CPAs that delivers faster client intake, better follow-up, and measurable growth with proven strategies."
        image="/assets/og-default.webp"
        pageType="default"
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[{ name: "Home", url: "/" }]}
        faqs={[
          { question: "How is this different from other marketing agencies?", answer: "We only work with accounting firms: no restaurants, dentists, or tech startups. Our founder is a CPA who understands busy season, utilization rates, and the difference between $500 tax clients and $5K advisory retainers. We don't offer generic 'brand awareness' tactics. We build marketing infrastructure: websites that convert, Google profiles that rank, review systems that build trust, and dashboards that prove ROI." },
          { question: "How much time will my team need to invest?", answer: "During the initial 30-day setup, expect to invest 4-6 hours total across a few strategy sessions where we nail down your positioning, ideal clients, and messaging. We handle all the technical execution: website build, GBP optimization, system integrations. After launch, your team invests approximately 2 hours per month for performance reviews and content approval." },
          { question: "What kind of clients will we attract?", answer: "We target CFO-level decision makers and business owners looking for $5K-$15K advisory relationships, not $500 tax-only clients. Our strategies position you as a trusted advisor through thought leadership content, strategic SEO targeting high-value services, and referral partner programs with attorneys and financial advisors." },
          { question: "We've tried marketing before and got mixed results. Why will this work?", answer: "Most DIY marketing fails because firms lack the infrastructure. Random LinkedIn posts don't work without a website that converts visitors. Google ads waste money if your Business Profile isn't optimized. Email campaigns flop without proper tracking. We build the foundation first (website, local SEO, review systems, analytics) then layer on tactics." },
          { question: "How quickly will we see results?", answer: "The first thing we set up is your analytics and tracking (if you don't have them already), so you can see improvements from day 1. Your website and Google Business Profile optimization are complete within 14 days. The full Quick Start Package, including review systems, email automation, and tracking dashboards, is live within 30 days." },
          { question: "How do you prove what's working?", answer: "You get a real-time dashboard tracking website traffic, lead sources, Google rankings, review count, and cost-per-lead. Monthly reports show exactly where leads came from (Google search, referrals, direct traffic) and which marketing activities drove results." },
          { question: "What's the total investment?", answer: "The Quick Start Package is $6,999 one-time setup (early adopter pricing, regular $9,999) plus $999/month for ongoing management, optimization, and support. This includes everything: website, Google Business Profile, review system, email automation, performance tracking, and monthly reports. No hidden fees. Cancel anytime after the initial 30-day setup." },
          { question: "Can we cancel if it's not working?", answer: "Absolutely. After the initial 30-day setup period, you can cancel anytime with 30 days notice. We don't lock you into long-term contracts because we earn your business every month by delivering results." },
          { question: "Do you understand the accounting industry?", answer: "Yes. SmartFirm was founded by a CPA and a business turnaround specialist with 20+ years of experience. We've lived the reality of accounting firms: tax season chaos, managing utilization and realization rates, the challenge of shifting from compliance work to high-value advisory services." },
          { question: "What if we're in busy season?", answer: "We work around your schedule. If you're slammed during tax season (January-April), we can delay the setup start date or spread strategy sessions across several weeks. The technical work happens on our end regardless of your availability. Once systems are live, they run 24/7 whether you're buried in extensions or enjoying a slower summer." },
          { question: "What happens after the 30-day setup?", answer: "Your marketing infrastructure continues working on autopilot. We handle ongoing technical optimization: monitoring Google rankings, managing review responses, maintaining system integrations, and tracking performance. You receive monthly reports showing what's working and where we're focusing efforts." }
        ]}
      />
      <Header />

      <main>
        {/* Hero Section - Using dedicated component */}
        <HeroSection />

        {/* Section 2: Unified Credibility Section - Background A (White) */}
        <section className="py-20 bg-white">
          <StatsGrid />
          <FounderStory />
        </section>

        {/* Wave 1: Stats → Complete Marketing Solutions (white → blue) */}
        <WaveDivider fromColor="#ffffff" toColor="#243b55" direction="down" id="wave-1" />

        {/* Section 3: Complete Marketing Solutions - Background B (Blue Gradient) */}
        <CompleteMarketingSolutions />

        {/* Wave 2: Complete Marketing Solutions → Why SmartFirm (blue → white) */}
        <WaveDivider fromColor="#4a7ba7" toColor="#ffffff" direction="up" id="wave-2" />

        {/* Section 4: Why SmartFirm is Different - Background A (White) */}
        <WhySmartFirmIsDifferent />

        {/* Wave 3: Why SmartFirm → Ready to Transform (white → dark teal) */}
        <WaveDivider fromColor="#ffffff" toColor="#0a2e2e" direction="down" id="wave-3" />

        {/* Section 5: Ready to Transform - Background B (Soft Teal) */}
        <ReadyToTransformSection />

        {/* Wave 4: Ready to Transform → Firm Comparison (light teal → white) */}
        <WaveDivider fromColor="#134444" toColor="#ffffff" direction="up" id="wave-4" />

        {/* Section 6: Firm Comparison - Background A (White) */}
        <FirmComparisonSection />

        {/* Wave 5: Firm Comparison → FAQ (white → white, visual break) */}
        <WaveDivider fromColor="#ffffff" toColor="#ffffff" direction="down" id="wave-5" />

        {/* Section 7: FAQ - Background B (Soft Teal) */}
        <HomepageFAQSection />

        {/* Wave 6: FAQ → Final CTA (white → blue) */}
        <WaveDivider fromColor="#ffffff" toColor="#243b55" direction="up" id="wave-6" />

        {/* Section 8: Final CTA - Exception (Primary Blue Gradient) */}
        <FinalCTASection />

        {/* Wave 7: Final CTA → Footer (blue → deep teal) */}
        <WaveDivider fromColor="#4a7ba7" toColor="#0a2e2e" direction="down" id="wave-7" />
      </main>
      
      {/* Section 9: Footer - Background C (Soft Blue) */}
      <Footer />
    </div>
  );
};

export default Index;
