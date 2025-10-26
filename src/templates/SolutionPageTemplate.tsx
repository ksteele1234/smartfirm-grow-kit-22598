import { useState, useEffect } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { StandardCard } from "@/components/ui/standard-card";
import { SolutionPageData } from "@/types/cms";
import { TrendingUp, Shield, Zap, Users, BarChart, Clock, ArrowRight, CheckCircle, XCircle, Search, Settings, Sparkles, BarChart3 } from "lucide-react";
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
  const defaultHearingSignals = [
    "Leads wait 24+ hours before they hear back from the firm.",
    "Partners juggle intake manually, so nothing feels consistent.",
    "Marketing activity spikes only when the pipeline starts drying up."
  ];
  const hearingSignals = data.hearingSignals?.length ? data.hearingSignals : defaultHearingSignals;
  const defaultHowItWorksSubheadings = ["Audit", "Implement", "Automate", "Optimize"];

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
            {data.heroTitle}
          </h1>
          <div id="sf-keyword-intro">
            <p className="text-xl font-sans text-on-dark-body mb-8 max-w-3xl mx-auto drop-shadow-md leading-[1.6]">
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
                Why firms feel stuck
              </h2>
              <p className="mt-4 text-base md:text-lg font-sans text-foreground leading-[1.6]">
                {data.problemStatement}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Capacity strain", "Manual follow-up", "Reactive marketing"].map(challenge => (
                  <span key={challenge} className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-foreground">
                    <XCircle className="h-3.5 w-3.5 text-destructive" aria-hidden="true" />
                    {challenge}
                  </span>
                ))}
              </div>
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
                <p className="mt-4 text-xs text-muted-foreground">Themes pulled from discovery calls with SmartFirm prospects in 2025.</p>
              </div>
              {data.problemSolutionPairs?.length ? (
                <div className="mt-8">
                  <p className="text-sm font-semibold uppercase tracking-wide">Problems we hear every week</p>
                  <ul className="mt-4 space-y-4 text-sm leading-[1.6] text-foreground">
                    {data.problemSolutionPairs.map((pair, index) => (
                      <li key={`problem-${index}`} className="rounded-xl elevation-1 bg-muted px-4 py-4">
                        <span className="block font-semibold">Problem</span>
                        <span className="mt-1 block text-foreground">{pair.problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
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
              {data.problemSolutionPairs?.length ? (
                <div className="mt-8 rounded-2xl glass-card-light px-6 py-6">
                  <p className="text-sm font-semibold uppercase tracking-wide">What we hear after the systems go live</p>
                  <ul className="mt-4 space-y-3 text-sm text-foreground leading-[1.6]">
                    {data.problemSolutionPairs.map((pair, index) => (
                      <li key={`after-${index}`} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                        <span>{pair.solution}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-primary/70">Insights from post-implementation debriefs with SmartFirm client teams.</p>
                </div>
              ) : null}
              {data.problemSolutionPairs?.length ? (
                <div className="mt-8">
                  <p className="text-sm font-semibold uppercase tracking-wide">How we tackle each roadblock</p>
                  <ul className="mt-4 space-y-4 text-sm leading-[1.6] text-foreground">
                    {data.problemSolutionPairs.map((pair, index) => (
                      <li key={`solution-${index}`} className="rounded-xl glass-card-light px-4 py-4">
                        <span className="block font-semibold">Solution</span>
                        <span className="mt-1 block text-foreground">{pair.solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          </div>
        </div>
          <div className="mt-7 flex flex-col items-center gap-3 text-center">
          <Button variant="coral" size="lg" className="hover-lift animate-gentle-pulse" asChild>
            <a href="/get-started">Book Your Strategy Call</a>
          </Button>
          <a
            href="/case-studies"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors story-link"
          >
            See how firms apply this ?
          </a>
          <p className="text-xs text-muted-foreground max-w-[640px] mt-1">
            These snapshots come from documented client engagements&mdash;ask us about the full stories during your discovery call. Curious how we structure delivery? Explore <a href="/leading-marketing-services-for-accounting-firms" className="underline underline-offset-2 hover:text-primary story-link">our service playbooks</a>.
          </p>
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
      <section className="section-padding bg-gradient-deep-teal relative overflow-hidden pt-[40px] md:pt-[52px]">
        <div className="max-w-[1200px] mx-auto relative">
          <div className="text-center mb-10 md:mb-14 space-y-4 md:space-y-6">
            <h2 className="text-[28px] md:text-4xl font-heading font-bold text-on-dark-heading leading-tight">
              Key Benefits
            </h2>
            <p className="text-base md:text-lg font-sans text-on-dark-body max-w-[65ch] mx-auto leading-[1.6]">
              See how our solution transforms your practice with more clarity, capacity, and consistency.
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
              How It Works
            </h2>
            <p className="text-base md:text-lg font-sans text-foreground max-w-[65ch] mx-auto leading-[1.6]">
              Our proven process gets you results quickly
            </p>
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
                  {String(step.step ?? index + 1).padStart(2, "0")}
                </span>
                <div className="ml-2 md:ml-4 rounded-2xl border border-slate-100 bg-white px-5 py-5 md:px-8 md:py-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">{step.subheading ?? defaultHowItWorksSubheadings[index] ?? `Step ${index + 1}`}</span>
                  <div className="mt-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl md:text-2xl font-heading font-semibold leading-tight">
                      {step.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      Milestone {index + 1}
                    </span>
                  </div>
                  <p className="mt-3 text-base font-sans text-[#333333] leading-[1.6]">
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

      {/* FAQs Section */}
      <section id="sf-faqs" className="section-padding bg-gradient-muted-blue">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[28px] md:text-4xl font-heading font-bold text-on-dark-heading mb-10 md:mb-14 text-center leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 md:space-y-6">
            {faqsToRender.map((faq, index) => (
              <details key={index} className="border border-border rounded-lg p-4 md:p-6 bg-background group focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2" aria-expanded="false">
                <summary className="cursor-pointer font-semibold text-base md:text-lg text-[#4D869C] list-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
                  {faq.question}
                </summary>
                <div className="text-text-secondary mt-4 md:mt-6 space-y-4 max-w-[65ch]">
                  <FaqAnswer
                    text={faq.answer}
                    paragraphClassName="text-base leading-[1.6] text-[#333333]"
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

      {/* Combined CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[720px] mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#647FBC] leading-tight">
            {data.ctaTitle}
          </h2>
          <p className="text-base md:text-lg font-sans text-[#333333] leading-[1.6]">
            {data.ctaDescription}
          </p>
          <Button size="lg" variant="coral" className="px-10" asChild>
            <a href="/get-started">Book Your Strategy Call</a>
          </Button>
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

