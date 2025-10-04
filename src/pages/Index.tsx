import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Marketing Automation for Accounting Firms | SmartFirm"
        description="Marketing automation for accounting firms and CPAs that delivers faster client intake, better follow-up, and measurable growth with proven strategies."
        pageType="default"
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[{ name: "Home", url: "/" }]}
        faqs={[
          { question: "How do I get started?", answer: "Book a free strategy call. We'll learn about your firm's goals and create a custom plan." },
          { question: "What is the pricing structure?", answer: "Pricing is customized based on your firm size, services, and goals. Most firms see positive ROI in their first quarter." },
          { question: "Do you offer guarantees?", answer: "We don't believe in one-size-fits-all guarantees. Instead, we align with you on measurable success metrics and provide ongoing support to make sure you meet your goals." },
          { question: "How fast can I launch?", answer: "We can have your marketing automation systems up and running in under 30 days." },
          { question: "Do you work with firms outside of accounting?", answer: "Yes, we've supported 50+ companies across industries, but our focus is delivering solutions tailored to accounting firms, CPAs, bookkeepers, and tax preparers." }
        ]}
      />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-teal/10 py-20 md:py-28 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Predictable Growth for Accounting Firms Without Wasting Time on Marketing
              </h1>
              <div id="sf-keyword-intro">
                <p className="text-lg md:text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
                  SmartFirm is the best marketing agency for accountants, CPAs, bookkeepers, and tax preparers. We deliver marketing automation, lead generation, and SEO services designed to get more accounting clients and keep them longer.
                </p>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 mb-10 text-text-secondary">
                <div className="flex items-center gap-2">
                  <span className="text-teal text-xl">✓</span>
                  <span>40+ years combined experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal text-xl">✓</span>
                  <span>50+ businesses supported with scalable growth systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal text-xl">✓</span>
                  <span>Backed by positive CPA marketing agency reviews and client results</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="group" asChild>
                  <a href="/get-started">
                    Book a Marketing Consultation for Your Accounting Firm
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="group" asChild>
                  <a href="#how-it-works">
                    <Play className="mr-2 h-5 w-5" />
                    Show Me the System
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Complete Accounting Firm Marketing Services
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                From SEO and PPC services for accounting firms to review generation and website optimization, SmartFirm offers marketing packages for CPA firms that convert prospects into long-term clients.
              </p>
            </div>
          </div>
        </section>
        
        <ServicesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <SolutionsSection />

        {/* Homepage FAQ Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="border border-border rounded-lg p-4 bg-background-light/40">
                  <summary className="cursor-pointer font-medium text-foreground">How do I get started?</summary>
                  <div className="text-muted-foreground mt-2">Book a free strategy call. We'll learn about your firm's goals and create a custom plan.</div>
                </details>
                <details className="border border-border rounded-lg p-4 bg-background-light/40">
                  <summary className="cursor-pointer font-medium text-foreground">What is the pricing structure?</summary>
                  <div className="text-muted-foreground mt-2">Pricing is customized based on your firm size, services, and goals. Most firms see positive ROI in their first quarter.</div>
                </details>
                <details className="border border-border rounded-lg p-4 bg-background-light/40">
                  <summary className="cursor-pointer font-medium text-foreground">Do you offer guarantees?</summary>
                  <div className="text-muted-foreground mt-2">We don't believe in one-size-fits-all guarantees. Instead, we align with you on measurable success metrics and provide ongoing support to make sure you meet your goals.</div>
                </details>
                <details className="border border-border rounded-lg p-4 bg-background-light/40">
                  <summary className="cursor-pointer font-medium text-foreground">How fast can I launch?</summary>
                  <div className="text-muted-foreground mt-2">We can have your marketing automation systems up and running in under 30 days.</div>
                </details>
                <details className="border border-border rounded-lg p-4 bg-background-light/40">
                  <summary className="cursor-pointer font-medium text-foreground">Do you work with firms outside of accounting?</summary>
                  <div className="text-muted-foreground mt-2">Yes, we've supported 50+ companies across industries, but our focus is delivering solutions tailored to accounting firms, CPAs, bookkeepers, and tax preparers.</div>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-teal/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Ready to Grow Your Accounting Firm?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Book a marketing consultation for your accounting firm today and see why SmartFirm is trusted as the best marketing agency for accountants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="group" asChild>
                  <a href="/get-started">
                    Book a Marketing Consultation for Your Accounting Firm
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
