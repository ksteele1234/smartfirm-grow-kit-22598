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
        title="SmartFirm | Marketing & Automation for Finance Firms"
        description="Automated marketing for CPAs and accounting firms. Faster client intake, better follow-up, measurable growth."
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
        <HeroSection />
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

        {/* Why Choose SmartFirm Section */}
        <section className="py-16 bg-gradient-to-br from-teal/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Why Accounting Firms Choose SmartFirm
              </h2>
              <div className="space-y-4 text-lg text-text-secondary mb-8">
                <p className="flex items-start space-x-3">
                  <span className="text-teal text-2xl">✓</span>
                  <span className="text-left">Built specifically for accountants, CPAs, bookkeepers, and tax preparers</span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-teal text-2xl">✓</span>
                  <span className="text-left">40+ years of combined business and marketing optimization experience</span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-teal text-2xl">✓</span>
                  <span className="text-left">Proven ability to help firms generate leads, retain clients, and scale efficiently</span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-teal text-2xl">✓</span>
                  <span className="text-left">Systems and automation up and running in under 30 days</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="group" asChild>
                  <a href="/get-started">
                    Book My Free Growth Strategy Call
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

        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
