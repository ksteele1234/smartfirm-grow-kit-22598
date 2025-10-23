import { useState, useEffect } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { StandardCard } from "@/components/ui/standard-card";
import { SolutionPageData } from "@/types/cms";
import { TrendingUp, Shield, Zap, Users, BarChart, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { 
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import SEO from "@/components/SEO";
import FaqAnswer from "@/components/faq/FaqAnswer";

const defaultSolutionFaqs = [
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


interface SolutionPageTemplateProps {
  data: SolutionPageData;
}

const SolutionPageTemplate = ({ data }: SolutionPageTemplateProps) => {
  const solutionsIndexPath = "/solutions-expert-marketing-agency-for-accounting-firms";
  const [showStickyFAB, setShowStickyFAB] = useState(false);
  const faqsToRender = data.faqs && data.faqs.length > 0 ? data.faqs : defaultSolutionFaqs;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setShowStickyFAB(scrollPercentage > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background" data-sf-fixed="headings entities">
      <SEO
        pageType="solution"
        title={data.title}
        description={(data.metaDescription || data.heroSubtitle || data.problemStatement).substring(0, 155)}
        canonicalUrl={data.canonicalUrl}
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Solutions", url: solutionsIndexPath },
          { name: data.title.replace(' | SmartFirm', ''), url: window.location.pathname }
        ]}
        faqs={faqsToRender}
      />
      <Header />
      
      <main id="main-content" role="main">
      <script id="sf-breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${window.location.origin}/` },
            { "@type": "ListItem", "position": 2, "name": "Solutions", "item": `${window.location.origin}${solutionsIndexPath}` },
            { "@type": "ListItem", "position": 3, "name": data.title.replace(' | SmartFirm', ''), "item": window.location.href }
          ]
        })}
      </script>
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-48 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-muted-blue">
        <nav id="sf-breadcrumbs" aria-label="Breadcrumb" className="absolute top-6 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb>
              <BreadcrumbList className="text-xs text-white/70">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="hover:text-white/90">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/40" />
                <BreadcrumbItem>
                  <BreadcrumbLink href={solutionsIndexPath} className="hover:text-white/90">Solutions</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/40" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white/70">
                    {data.title.replace(' | SmartFirm', '')}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </nav>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            {data.heroTitle}
          </h1>
          <div id="sf-keyword-intro">
            <p className="text-xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-md">
              {data.heroSubtitle}
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <Button variant="coral" size="hero" asChild>
              <a href="/get-started" aria-label="Book your strategy call">
                Book Your Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[80px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="section-padding relative bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                <Shield className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                The Challenge
              </span>
              <h2 className="mt-6 text-[26px] md:text-3xl font-heading font-bold text-[#0a2e2e] leading-tight">
                Why firms feel stuck
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#1e293b] leading-relaxed">
                {data.problemStatement}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Capacity strain", "Manual follow-up", "Reactive marketing"].map(challenge => (
                  <span key={challenge} className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    <CheckCircle className="h-3.5 w-3.5 text-[#14b8a6]" aria-hidden="true" />
                    {challenge}
                  </span>
                ))}
              </div>
            </article>
            <article className="relative overflow-hidden rounded-3xl border border-teal-100 bg-[#f0fdfa] p-8 shadow-[0_24px_60px_rgba(20,184,166,0.12)]">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-vibrant-teal px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-teal-sm">
                <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                Our Solution
              </span>
              <h2 className="mt-6 text-[26px] md:text-3xl font-heading font-bold text-[#0a2e2e] leading-tight">
                How SmartFirm unlocks momentum
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#1e293b] leading-relaxed">
                {data.solutionOverview}
              </p>
              {data.results?.length ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {data.results.slice(0, 2).map((result, index) => (
                    <div key={`${result.metric}-${index}`} className="rounded-2xl border border-white/40 bg-white/70 p-4 shadow-sm">
                      <div className="text-sm font-semibold text-[#0a2e2e]/80">{result.metric}</div>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-[#14b8a6]">{result.value}</span>
                      </div>
                      <p className="mt-2 text-xs text-[#334155] leading-snug">
                        {result.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
              <p className="mt-6 text-sm md:text-base text-[#334155]">
                Learn more about <a href="/leading-marketing-services-for-accounting-firms" data-sf="internal-add" className="text-[#0f766e] hover:text-[#115e59] underline underline-offset-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:ring-offset-2 rounded">our services</a>, explore <a href="/case-studies" data-sf="internal-add" className="text-[#0f766e] hover:text-[#115e59] underline underline-offset-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:ring-offset-2 rounded">success stories</a>, or review <a href="https://www.aicpa.org" data-sf="external-add" target="_blank" rel="noopener noreferrer" className="text-[#0f766e] hover:text-[#115e59] underline underline-offset-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:ring-offset-2 rounded">AICPA guidance</a>.
              </p>
            </article>
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
      <section className="section-padding bg-gradient-to-br from-[#243b55] to-[#4a7ba7] relative overflow-hidden">
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
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10 md:mb-14 space-y-4 md:space-y-6">
            <h2 className="text-[28px] md:text-4xl font-heading font-bold text-[#0a2e2e] leading-tight">
              How It Works
            </h2>
            <p className="text-base md:text-lg text-[#334155] max-w-[65ch] mx-auto">
              Our proven process gets you results quickly
            </p>
          </div>
          <ol className="relative mx-auto max-w-[700px] border-l border-slate-200 pl-6 md:pl-10 md:max-w-none">
            {data.howItWorks.map((step, index) => (
              <li key={step.step ?? index} className={`relative pb-10 md:pb-12 ${index === data.howItWorks.length - 1 ? "pb-0" : ""}`}>
                <span className="absolute -left-3 md:-left-4 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-vibrant-teal text-white text-lg font-semibold shadow-[0_10px_30px_rgba(20,184,166,0.35)]">
                  {String(step.step ?? index + 1).padStart(2, "0")}
                </span>
                <div className="ml-2 md:ml-4 rounded-2xl border border-slate-100 bg-white px-5 py-5 md:px-8 md:py-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-[#0a2e2e] leading-tight">
                      {step.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#f0fdfa] px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#0f766e]">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      Milestone {index + 1}
                    </span>
                  </div>
                  <p className="mt-3 text-base text-[#334155] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index !== data.howItWorks.length - 1 && (
                  <span className="absolute left-[-1.5px] top-12 h-full w-[3px] bg-gradient-to-b from-[#14b8a6] via-[#2dd4bf] to-transparent" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-white">
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
      <section id="sf-faqs" className="section-padding bg-white">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[28px] md:text-4xl font-heading font-bold text-[#0a2e2e] mb-10 md:mb-14 text-center leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 md:space-y-6">
            {faqsToRender.map((faq, index) => (
              <details key={index} className="border border-border rounded-lg p-4 md:p-6 bg-background group focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2" aria-expanded="false">
                <summary className="cursor-pointer font-semibold text-base md:text-lg text-foreground list-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
                  {faq.question}
                </summary>
                <div className="text-text-secondary mt-4 md:mt-6 space-y-4 max-w-[65ch]">
                  <FaqAnswer
                    text={faq.answer}
                    paragraphClassName="text-base leading-relaxed text-text-secondary"
                  />
                </div>
              </details>
            ))}
          </div>
        </div>
        <script id="sf-faq-jsonld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqsToRender.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })}
        </script>
      </section>

      {/* Final CTA Section */}
      <section 
        className="relative text-white overflow-hidden bg-gradient-deep-teal section-padding"
      >
        <div className="max-w-[800px] mx-auto text-center relative space-y-6 md:space-y-8">
          <h2 className="text-[28px] md:text-4xl font-heading font-bold text-white leading-tight">{data.ctaTitle}</h2>
          <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-[65ch] mx-auto">{data.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <Button size="lg" variant="coral" className="group w-full sm:w-auto px-10" asChild>
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
          <Button size="lg" variant="coral" className="group w-full" asChild>
            <a href="/get-started" aria-label="Get started now">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </Button>
        </div>
      )}
      </main>
      <Footer />
    </div>
  );
};

export default SolutionPageTemplate;
