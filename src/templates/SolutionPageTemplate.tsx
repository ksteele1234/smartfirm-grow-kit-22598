import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { StandardCard } from "@/components/ui/standard-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SolutionPageData } from "@/types/cms";
import { CheckCircle2, ArrowRight, Target } from "lucide-react";
import { 
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import SEO from "@/components/SEO";

interface SolutionPageTemplateProps {
  data: SolutionPageData;
}

const SolutionPageTemplate = ({ data }: SolutionPageTemplateProps) => {
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
      <section className="relative py-24 pb-32 md:pb-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#4D869C] via-[#7AB2B2] to-[#91ADC8] overflow-hidden">
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg className="relative block w-full h-[80px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            {data.heroTitle}
          </h1>
          <div id="sf-keyword-intro">
            <p className="text-xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-md">
              {data.heroSubtitle}
            </p>
          </div>
          <Button size="lg" variant="secondary" className="group bg-white text-[#4D869C] hover:bg-white/90" asChild>
            <a href="/get-started">
              Get Your Solution
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-14 md:py-20 px-8 md:px-[72px] relative bg-background">
        <div className="max-w-[1200px] mx-auto">
          {/* Asymmetrical layout with accent line */}
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-14 items-start">
            <div className="relative space-y-6">
              <h2 className="text-[32px] md:text-4xl font-heading font-bold text-primary leading-tight">
                The Challenge
              </h2>
              <p className="text-base md:text-lg text-text-primary leading-relaxed max-w-[65ch]">
                {data.problemStatement}
              </p>
            </div>
            <div className="relative space-y-6">
              <h2 className="text-[32px] md:text-4xl font-heading font-bold text-primary leading-tight">
                Our Solution
              </h2>
              <p className="text-base md:text-lg text-text-primary leading-relaxed max-w-[65ch]">
                {data.solutionOverview}
              </p>
              <p className="text-sm md:text-base text-text-secondary">
                Learn more about <a href="/services" data-sf="internal-add" className="text-primary hover:underline">our services</a>, explore <a href="/case-studies" data-sf="internal-add" className="text-primary hover:underline">success stories</a>, or read <a href="https://www.aicpa.org" data-sf="external-add" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AICPA guidance</a>.
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
      <section className="py-14 md:py-20 px-8 md:px-[72px] bg-background-light relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative">
          <div className="text-center mb-14 space-y-6">
            <h2 className="text-[32px] md:text-4xl font-heading font-bold text-primary leading-tight">
              Key Benefits
            </h2>
            <p className="text-base md:text-lg text-text-secondary max-w-[65ch] mx-auto">
              See how our solution transforms your practice
            </p>
          </div>
          
          {/* Dynamic grid based on number of benefits */}
          <div className={`grid gap-6 ${data.keyBenefits.length === 4 ? 'md:grid-cols-2 lg:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
            {data.keyBenefits.map((benefit, index) => {
              const icons = [CheckCircle2, Target, CheckCircle2];
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
      <section className="py-14 md:py-20 px-8 md:px-[72px] bg-background">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14 space-y-6">
            <h2 className="text-[32px] md:text-4xl font-heading font-bold text-primary leading-tight">
              How It Works
            </h2>
            <p className="text-base md:text-lg text-text-secondary max-w-[65ch] mx-auto">
              Our proven process gets you results quickly
            </p>
          </div>
          {/* Dynamic grid based on number of steps */}
          <div className={`grid gap-6 ${data.howItWorks.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
            {data.howItWorks.map((step, index) => (
              <StandardCard
                key={index}
                title={step.title}
                description={step.description}
                variant="default"
                className="text-center bg-background space-y-6"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
              </StandardCard>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-14 md:py-20 px-8 md:px-[72px] bg-background-light">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14 space-y-6">
            <h2 className="text-[32px] md:text-4xl font-heading font-bold text-primary leading-tight">
              Proven Results
            </h2>
            <p className="text-base md:text-lg text-text-secondary max-w-[65ch] mx-auto">
              Real outcomes from real clients
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
                className="text-center bg-background space-y-6"
              >
                <div className="text-4xl font-bold text-primary mb-6">
                  {result.value}
                </div>
              </StandardCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="sf-faqs" className="py-14 md:py-20 px-8 md:px-[72px] bg-background">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[32px] md:text-4xl font-heading font-bold text-primary mb-14 text-center leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {defaultFAQs.map((faq, index) => (
              <details key={index} className="border border-border rounded-lg p-6 bg-background">
                <summary className="cursor-pointer font-semibold text-base md:text-lg text-foreground">{faq.question}</summary>
                <div className="text-text-secondary text-base mt-6 leading-relaxed max-w-[65ch]">{faq.answer}</div>
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
      <section className="py-14 md:py-20 px-8 md:px-[72px] bg-gradient-to-br from-primary via-primary/95 to-teal text-white relative overflow-hidden">
        <div className="max-w-[800px] mx-auto text-center relative space-y-6">
          <h2 className="text-[32px] md:text-4xl font-heading font-bold text-white leading-tight">{data.ctaTitle}</h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-[65ch] mx-auto">{data.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="white-on-dark" className="group font-semibold">
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SolutionPageTemplate;