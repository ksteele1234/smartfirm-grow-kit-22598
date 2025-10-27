import { Helmet } from 'react-helmet';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import { SolutionPageData } from '@/types/cms';
import { TrendingUp, Shield, Zap, Users, BarChart, Clock, ArrowRight, CheckCircle, XCircle, Search, Settings, Sparkles, BarChart3 } from 'lucide-react';
import AccordionFAQ from '@/components/sections/AccordionFAQ';
import FinalCTASection from '@/components/sections/FinalCTASection';
import { generatePageContent, type ContentConfig } from '@/lib/pageGenerator';
import { useEffect, useState } from 'react';
import { StandardCard } from '@/components/ui/standard-card';
import { 
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage 
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';

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

interface EnhancedSolutionPageProps {
  data: SolutionPageData;
  contentConfig?: ContentConfig;
}

export function EnhancedSolutionPageTemplate({ data, contentConfig }: EnhancedSolutionPageProps) {
  const [generatedContent, setGeneratedContent] = useState<ReturnType<typeof generatePageContent> | null>(null);
  const solutionsIndexPath = "/solutions-expert-marketing-agency-for-accounting-firms";
  const [showStickyFAB, setShowStickyFAB] = useState(false);

  useEffect(() => {
    if (contentConfig) {
      const content = generatePageContent(contentConfig);
      setGeneratedContent(content);
      
      if (import.meta.env.DEV && !content.validation.valid) {
        console.warn('Content validation issues:', content.validation);
      }
    }
  }, [contentConfig]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setShowStickyFAB(scrollPercentage > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqsToRender = data.faqs && data.faqs.length > 0 ? data.faqs : defaultSolutionFaqs;
  const defaultHearingSignals = [
    "Leads wait 24+ hours before they hear back from the firm.",
    "Partners juggle intake manually, so nothing feels consistent.",
    "Marketing activity spikes only when the pipeline starts drying up."
  ];
  const hearingSignals = data.hearingSignals?.length ? data.hearingSignals : defaultHearingSignals;
  const canonicalUrl = data.canonicalUrl || `https://smartfirm.io/solutions/${data.slug}`;

  return (
    <>
      <Helmet>
        <title>{generatedContent?.meta.title || data.title}</title>
        <meta 
          name="description" 
          content={generatedContent?.meta.description || data.metaDescription} 
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={generatedContent?.meta.title || data.title} />
        <meta property="og:description" content={generatedContent?.meta.description || data.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main id="main-content" role="main">
          {/* Hero Section */}
          <section className="relative pt-36 pb-[124px] px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-muted-blue text-on-dark-body">
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
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-on-dark-heading mb-6 drop-shadow-lg">
                {generatedContent?.h1 || data.heroTitle}
              </h1>
              <div id="sf-keyword-intro">
                <p className="text-xl font-sans text-on-dark-body mb-8 max-w-3xl mx-auto drop-shadow-md leading-[1.6]">
                  {generatedContent?.intro || data.heroSubtitle}
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
          <section className="section-padding relative bg-white -mt-6 pt-[20px] md:pt-[40px] lg:pt-[60px]">
            <div className="max-w-[1200px] mx-auto">
              <div className="relative grid gap-6 md:gap-8 md:grid-cols-2">
                <div
                  className="hidden md:block absolute inset-y-6 left-1/2 w-[3px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#cffafe] to-transparent rounded-full pointer-events-none"
                  aria-hidden="true"
                />
                <article className="relative flex h-full flex-col overflow-hidden rounded-3xl elevation-2 bg-card p-8">
                  <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    <Shield className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                    The Challenge
                  </span>
                  <h2 className="mt-6 text-[26px] md:text-3xl font-heading font-bold leading-tight">
                    {generatedContent?.sections[0]?.h2 || 'Why firms feel stuck'}
                  </h2>
                  <p className="mt-4 text-base md:text-lg font-sans text-foreground leading-[1.6]">
                    {data.problemStatement}
                  </p>
                  <div className="mt-8 rounded-2xl elevation-1 bg-muted px-6 py-6">
                    <p className="text-sm font-semibold tracking-wide uppercase">What we keep hearing</p>
                    <ul className="mt-4 space-y-3 text-sm text-foreground leading-[1.6]">
                      {hearingSignals.map((signal) => (
                        <li key={signal} className="flex items-start gap-3">
                          <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" aria-hidden="true" />
                          <span>{signal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
                <article className="relative flex h-full flex-col overflow-hidden rounded-3xl elevation-2 bg-gradient-to-br from-accent/5 via-background to-accent/10 p-8 glow-cyan">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-vibrant-teal px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white glow-cyan">
                    <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                    Our Solution
                  </span>
                  <h2 className="mt-6 text-[26px] md:text-3xl font-heading font-bold leading-tight">
                    How SmartFirm unlocks momentum
                  </h2>
                  <p className="mt-4 text-base md:text-lg font-sans text-foreground leading-[1.6]">
                    {data.solutionOverview}
                  </p>
                  {data.results?.length ? (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {data.results.map(result => (
                        <span key={`result-badge-${result.metric}-${result.value}`} className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-primary shadow-sm border border-white/60">
                          <CheckCircle className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                          {result.value}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </article>
              </div>
            </div>
          </section>

          {/* Key Benefits Section */}
          <section className="section-padding bg-gradient-deep-teal relative overflow-hidden pt-[40px] md:pt-[52px]">
            <div className="max-w-[1200px] mx-auto relative">
              <div className="text-center mb-10 md:mb-14 space-y-4 md:space-y-6">
                <h2 className="text-[28px] md:text-4xl font-heading font-bold text-on-dark-heading leading-tight">
                  {generatedContent?.sections[1]?.h2 || 'Key Benefits'}
                </h2>
              </div>
              
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
                      className="bg-white/95 backdrop-blur-sm space-y-6 border-white/60 text-left"
                      titleClassName="group-hover:text-primary/80"
                      iconClassName="text-primary"
                      descriptionClassName="text-left max-w-none text-foreground leading-[1.6]"
                      headerClassName="pb-3"
                      contentWrapperClassName="space-y-4 p-5 md:p-6 pt-0"
                    >
                      {benefit.points?.length ? (
                        <ul className="text-sm text-foreground leading-[1.6] space-y-2 list-disc pl-5">
                          {benefit.points.map((point, bulletIndex) => (
                            <li key={`benefit-${index}-bullet-${bulletIndex}`}>{point}</li>
                          ))}
                        </ul>
                      ) : null}
                    </StandardCard>
                  );
                })}
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="section-padding bg-white">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center mb-10 md:mb-14 space-y-4 md:space-y-6">
                <h2 className="text-[28px] md:text-4xl font-heading font-bold leading-tight">
                  {generatedContent?.sections[2]?.h2 || 'How It Works'}
                </h2>
              </div>
              <div className="hidden md:flex items-center justify-between mb-12 relative">
                <span className="absolute left-[6%] right-[6%] top-6 h-[3px] bg-gradient-teal" aria-hidden="true" />
                {[{ label: "Audit", icon: Search }, { label: "Implement", icon: Settings }, { label: "Automate", icon: Sparkles }, { label: "Optimize", icon: BarChart3 }].map((milestone) => {
                  const IconComp = milestone.icon;
                  return (
                    <div key={milestone.label} className="flex flex-col items-center text-center relative z-10 flex-1">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/5 text-primary glow-cyan">
                        <IconComp className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <span className="mt-4 text-sm font-semibold uppercase tracking-wide text-primary">{milestone.label}</span>
                    </div>
                  );
                })}
              </div>
              <ol className="relative mx-auto max-w-[700px] border-l border pl-6 md:pl-10 md:max-w-none">
                {data.howItWorks.map((step, index) => (
                  <li key={step.step ?? index} className={`relative pb-10 md:pb-12 ${index === data.howItWorks.length - 1 ? "pb-0" : ""}`}>
                    <span className="absolute -left-3 md:-left-4 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-vibrant-teal text-white text-lg font-semibold shadow-[0_10px_30px_rgba(20,184,166,0.35)]">
                      {step.step}
                    </span>
                    <div className="ml-4 md:ml-6">
                      <h3 className="text-xl md:text-2xl font-heading font-semibold mb-2 text-primary">{step.title}</h3>
                      {step.subheading && <p className="text-sm font-medium text-accent mb-2">{step.subheading}</p>}
                      <p className="text-base md:text-lg text-foreground leading-[1.6]">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Results Section */}
          <section className="section-padding bg-muted/30">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center mb-10 md:mb-14">
                <h2 className="text-[28px] md:text-4xl font-heading font-bold mb-4">Proven Results</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {data.results.map((result, index) => (
                  <div key={index} className="bg-card p-8 rounded-xl elevation-2 text-center">
                    <TrendingUp className="w-10 h-10 text-accent mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">{result.value}</div>
                    <div className="font-semibold text-lg mb-2">{result.metric}</div>
                    <p className="text-sm text-muted-foreground">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          {faqsToRender.length > 0 && (
            <section className="section-padding bg-white">
              <div className="max-w-[1000px] mx-auto">
                <div className="text-center mb-14">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                    Frequently Asked Questions
                  </h2>
                </div>
                <AccordionFAQ faqs={faqsToRender} />
              </div>
            </section>
          )}

          {/* CTA Section */}
          <FinalCTASection
            title={generatedContent?.cta.label || data.ctaTitle || "Ready to Transform Your Practice?"}
            description={data.ctaDescription || "Book a strategy call today."}
            primaryButtonText={generatedContent?.cta.label || "Get Started Today"}
            primaryButtonLink={generatedContent?.cta.url || "/get-started"}
          />
        </main>

        {/* Sticky FAB */}
        {showStickyFAB && (
          <div className="fixed bottom-8 right-8 z-50">
            <Button 
              variant="coral" 
              size="lg" 
              className="shadow-[0_10px_40px_rgba(251,113,133,0.4)] hover-lift"
              asChild
            >
              <a href="/get-started">
                Book Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}
