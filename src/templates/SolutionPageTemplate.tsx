import { useState, useEffect } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { StandardCard } from "@/components/ui/standard-card";
import { SolutionPageData } from "@/types/cms";
import { TrendingUp, Shield, Zap, Users, BarChart, Clock, ArrowRight } from "lucide-react";
import { 
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import SEO from "@/components/SEO";


interface SolutionPageTemplateProps {
  data: SolutionPageData;
}

const SolutionPageTemplate = ({ data }: SolutionPageTemplateProps) => {
  const [showStickyFAB, setShowStickyFAB] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setShowStickyFAB(scrollPercentage > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const defaultFAQs = [
    {
      question: "How quickly will I see results?",
      answer: "Most firms see measurable improvements within 30-60 days of implementation."
    },
    {
      question: "What support is included?",
      answer: "All solutions include dedicated support, regular check-ins, and ongoing optimization."
    },
    {
      question: "Can this scale with my firm?",
      answer: "Yes, our solutions are designed to grow with your firm from 5 to 50+ employees."
    }
  ];

  return (
    <div className="min-h-screen bg-background" data-sf-fixed="headings entities">
      <SEO
        pageType="solution"
        title={data.title}
        description={(data.metaDescription || data.heroSubtitle || data.problemStatement).substring(0, 155)}
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions" },
          { name: data.title.replace(' | SmartFirm', ''), url: window.location.pathname }
        ]}
        faqs={defaultFAQs}
      />
      <Header />
      
      {/* Breadcrumbs */}
      <nav id="sf-breadcrumbs" className="bg-background-light border-b" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 lg:px-6 py-1.5">
          <Breadcrumb>
            <BreadcrumbList className="text-sm text-muted-foreground">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{data.title.replace(' | SmartFirm', '')}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
      <script id="sf-breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${window.location.origin}/` },
            { "@type": "ListItem", "position": 2, "name": "Solutions", "item": `${window.location.origin}/solutions` },
            { "@type": "ListItem", "position": 3, "name": data.title.replace(' | SmartFirm', ''), "item": window.location.href }
          ]
        })}
      </script>
      
      {/* Hero Section */}
      <section className="relative pt-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#243b55] to-[#4a7ba7] overflow-hidden wave-bottom">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            {data.heroTitle}
          </h1>
          <div id="sf-keyword-intro">
            <p className="text-xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-md">
              {data.heroSubtitle}
            </p>
          </div>
          <Button size="lg" variant="secondary" className="group bg-white text-primary hover:bg-white/90 font-semibold shadow-lg px-2.5 mr-3" asChild>
            <a href="/get-started" aria-label="Get started with your custom solution">
              See How This Works for You
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </Button>
          <a href="/case-studies" className="text-white/90 hover:text-white underline underline-offset-4 text-base font-medium mt-4 inline-block transition-colors">
            View Success Stories
          </a>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="pt-10 md:pt-20 px-4 md:px-[72px] relative bg-white wave-bottom">
        <div className="max-w-[1200px] mx-auto">
          {/* Asymmetrical layout with accent line */}
          <div className="grid lg:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-10 md:gap-y-14 items-start">
            <div className="relative space-y-4 md:space-y-6">
              <h2 className="text-[28px] md:text-4xl font-heading font-bold text-[#0a2e2e] leading-tight">
                The Challenge
              </h2>
              <p className="text-base md:text-lg text-[#1e293b] leading-relaxed max-w-[65ch]">
                {data.problemStatement}
              </p>
            </div>
            <div className="relative space-y-4 md:space-y-6">
              <h2 className="text-[28px] md:text-4xl font-heading font-bold text-[#0a2e2e] leading-tight">
                Our Solution
              </h2>
              <p className="text-base md:text-lg text-[#1e293b] leading-relaxed max-w-[65ch]">
                {data.solutionOverview}
              </p>
              <p className="text-sm md:text-base text-[#334155]">
                Learn more about <a href="/services" data-sf="internal-add" className="text-[#14b8a6] hover:text-[#2dd4bf] underline underline-offset-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:ring-offset-2 rounded">our services</a>, explore <a href="/case-studies" data-sf="internal-add" className="text-[#14b8a6] hover:text-[#2dd4bf] underline underline-offset-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:ring-offset-2 rounded">success stories</a>, or read <a href="https://www.aicpa.org" data-sf="external-add" target="_blank" rel="noopener noreferrer" className="text-[#14b8a6] hover:text-[#2dd4bf] underline underline-offset-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:ring-offset-2 rounded">AICPA guidance</a>.
              </p>
            </div>
          </div>
        </div>
        <script id="sf-entity-jsonld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": data.title,
            "provider": {
              "@type": "Organization",
              "name": "SmartFirm",
              "url": window.location.origin
            },
            "description": data.solutionOverview
          })}
        </script>
      </section>

      {/* Key Benefits Section */}
      <section className="pt-10 md:pt-20 px-4 md:px-[72px] bg-gradient-to-br from-[#243b55] to-[#4a7ba7] relative overflow-hidden wave-bottom">
        <div className="max-w-[1200px] mx-auto relative">
          <div className="text-center mb-10 md:mb-14 space-y-4 md:space-y-6">
            <h2 className="text-[28px] md:text-4xl font-heading font-bold text-white leading-tight">
              Key Benefits
            </h2>
            <p className="text-base md:text-lg text-white/80 max-w-[65ch] mx-auto">
              See how our solution transforms your practice<sup className="text-xs"><a href="#proof-methodology" className="text-primary hover:underline">1</a></sup>
            </p>
          </div>
          
          {/* Dynamic grid based on number of benefits */}
          <div className={`grid gap-6 ${data.keyBenefits.length === 4 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
            {data.keyBenefits.map((benefit, index) => {
              const icons = [TrendingUp, Shield, Zap, Users, BarChart, Clock];
              const IconComponent = icons[index % icons.length];
              return (
              <StandardCard
                key={index}
                icon={IconComponent}
                title={benefit.title}
                description={benefit.description}
                variant="default"
                className="bg-background space-y-6"
              />
            );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="pt-10 md:pt-20 px-4 md:px-[72px] bg-white wave-bottom">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10 md:mb-14 space-y-4 md:space-y-6">
            <h2 className="text-[28px] md:text-4xl font-heading font-bold text-[#0a2e2e] leading-tight">
              How It Works
            </h2>
            <p className="text-base md:text-lg text-[#334155] max-w-[65ch] mx-auto">
              Our proven process gets you results quickly
            </p>
          </div>
          {/* Dynamic grid based on number of steps */}
          <div className={`grid gap-6 ${data.howItWorks.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
            {data.howItWorks.map((step, index) => (
              <div key={index} className="border border-[#E5E7EB] rounded-xl bg-background transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] cursor-pointer group">
                <div className="p-4 md:p-6 space-y-4 md:space-y-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-teal text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg" aria-label={`Step ${step.step}`}>
                    {step.step}
                  </div>
                  <h3 className="text-[20px] md:text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-base text-text-primary leading-relaxed max-w-[65ch] mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="pt-10 md:pt-20 px-4 md:px-[72px] bg-white wave-bottom">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10 md:mb-14 space-y-4 md:space-y-6">
            <h2 className="text-[28px] md:text-4xl font-heading font-bold text-[#0a2e2e] leading-tight">
              Proven Results
            </h2>
            <p className="text-base md:text-lg text-[#334155] max-w-[65ch] mx-auto">
              Real outcomes from real clients<sup className="text-xs"><a href="#proof-methodology" className="text-primary hover:underline">1</a></sup>
            </p>
          </div>
          {/* Dynamic grid based on number of results */}
          <div className={`grid gap-6 ${data.results.length === 3 ? 'md:grid-cols-1 lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
            {data.results.map((result, index) => (
              <StandardCard
                key={index}
                title={result.metric}
                description={result.description}
                variant="default"
                className="text-center bg-background space-y-4 md:space-y-6"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
                  {result.value}
                </div>
              </StandardCard>
            ))}
          </div>
          
          {/* Proof Methodology */}
          <div id="proof-methodology" className="mt-10 md:mt-16 p-4 md:p-6 bg-background border border-border rounded-lg">
            <p className="text-sm text-text-secondary leading-relaxed">
              <sup>1</sup> Results based on aggregated client data from firms implementing our solutions over a 12-month period. Individual results may vary based on firm size, market conditions, and implementation quality.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="sf-faqs" className="pt-10 md:pt-20 px-4 md:px-[72px] bg-white wave-bottom">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[28px] md:text-4xl font-heading font-bold text-[#0a2e2e] mb-10 md:mb-14 text-center leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 md:space-y-6">
            {defaultFAQs.map((faq, index) => (
              <details key={index} className="border border-border rounded-lg p-4 md:p-6 bg-background group focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2" aria-expanded="false">
                <summary className="cursor-pointer font-semibold text-base md:text-lg text-foreground list-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
                  {faq.question}
                </summary>
                <div className="text-text-secondary text-base mt-4 md:mt-6 leading-relaxed max-w-[65ch]">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
        <script id="sf-faq-jsonld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": defaultFAQs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })}
        </script>
      </section>

      {/* Final CTA Section */}
      <section 
        className="relative pt-16 px-4 md:px-[72px] text-white overflow-hidden wave-top wave-bottom"
        style={{
          background: 'linear-gradient(135deg, #165c6c 0%, #2d8a99 100%)'
        }}
      >
        <div className="max-w-[800px] mx-auto text-center relative space-y-6 md:space-y-8">
          <h2 className="text-[28px] md:text-4xl font-heading font-bold text-white leading-tight">{data.ctaTitle}</h2>
          <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-[65ch] mx-auto">{data.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <Button size="lg" variant="secondary" className="group bg-white text-primary hover:bg-white/90 font-semibold shadow-lg w-full sm:w-auto px-10" asChild>
              <a href="/get-started" aria-label="Book your strategy call now">
                Book Your Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Button>
            <a href="/case-studies" className="text-white hover:text-white/80 underline underline-offset-4 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded">
              View Case Studies
            </a>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      {showStickyFAB && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-lg p-4 animate-fade-in">
          <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold" asChild>
            <a href="/get-started" aria-label="Get started now">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </a>
          </Button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SolutionPageTemplate;