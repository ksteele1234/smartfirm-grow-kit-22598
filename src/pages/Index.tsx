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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="SmartFirm | Marketing & Automation for Finance Firms"
        description="Marketing automation for accounting firms. Get faster client intake, better follow-up, and measurable growth with SmartFirm."
        pageType="default"
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[{ name: "Home", url: "/" }]}
        faqs={[
          { question: "How do I get started?", answer: "Book a free strategy call to discuss your firm's specific needs and goals." },
          { question: "What is the pricing structure?", answer: "Pricing is customized based on your firm size and specific requirements. Contact us for a detailed quote." },
          { question: "Do you offer guarantees?", answer: "We align on clear success metrics and provide ongoing support to ensure your satisfaction." }
        ]}
      />
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Home</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <main>
        <h1 className="sr-only">Marketing Automation for Accounting Firms</h1>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <SolutionsSection />

        {/* Homepage FAQ Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="border border-border rounded-lg p-4 bg-background-light/40">
                  <summary className="cursor-pointer font-medium text-foreground">How do I get started?</summary>
                  <div className="text-muted-foreground mt-2">Book a free strategy call to discuss your firm's specific needs and goals.</div>
                </details>
                <details className="border border-border rounded-lg p-4 bg-background-light/40">
                  <summary className="cursor-pointer font-medium text-foreground">What is the pricing structure?</summary>
                  <div className="text-muted-foreground mt-2">Pricing is customized based on your firm size and specific requirements. Contact us for a detailed quote.</div>
                </details>
                <details className="border border-border rounded-lg p-4 bg-background-light/40">
                  <summary className="cursor-pointer font-medium text-foreground">Do you offer guarantees?</summary>
                  <div className="text-muted-foreground mt-2">We align on clear success metrics and provide ongoing support to ensure your satisfaction.</div>
                </details>
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
