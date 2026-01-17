import { useMemo, useRef } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { ServicePageData } from "@/types/cms";
import { CheckCircle, ArrowRight, Settings, Clock, DollarSign, MessageCircle } from "lucide-react";
import { StandardCard } from "@/components/ui/standard-card";
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage
} from "@/components/ui/breadcrumb";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import FaqAnswer from "@/components/faq/FaqAnswer";

const heroStyles = `
  @keyframes bubble-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }
  
  @keyframes pulse-button {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.95; }
  }
  
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
`;

interface ServicePageTemplateProps {
  data: ServicePageData;
  beforeFinalCta?: React.ReactNode;
}

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

const defaultServiceFaqs = [
  {
    question: "How long does implementation take?",
    answer: "Most service implementations are completed within 2-4 weeks, with initial results visible in the first month.",
    category: "Implementation"
  },
  {
    question: "What integrations are supported?",
    answer: "We integrate with leading accounting platforms including QuickBooks, Xero, and popular CRM systems.",
    category: "ROI & Integrations"
  },
  {
    question: "Is training included?",
    answer: "Yes, we provide comprehensive onboarding and training for your team to ensure smooth adoption.",
    category: "Support"
  }
];

const inferFaqCategory = (question: string): string => {
  const normalized = question.toLowerCase();
  if (normalized.includes("price") || normalized.includes("roi") || normalized.includes("budget")) {
    return "Pricing & ROI";
  }
  if (normalized.includes("integrat") || normalized.includes("timeline") || normalized.includes("launch")) {
    return "Implementation";
  }
  if (normalized.includes("support") || normalized.includes("training") || normalized.includes("onboarding")) {
    return "Support";
  }
  return "General";
};

const ServicePageTemplate = ({ data, beforeFinalCta }: ServicePageTemplateProps) => {
  const servicesIndexPath = "/services/";
  const finalCtaRef = useRef<HTMLElement | null>(null);

  const faqsWithFallback = useMemo(() => {
    const source = (data.faqs && data.faqs.length > 0 ? data.faqs : defaultServiceFaqs);
    return source.map(faq => ({
      ...faq,
      category: faq.category ?? inferFaqCategory(faq.question)
    }));
  }, [data.faqs]);

  const faqGroups = useMemo(() => {
    const groups = new Map<string, Array<(typeof faqsWithFallback)[number]>>();
    faqsWithFallback.forEach(faq => {
      const category = faq.category ?? "General";
      if (!groups.has(category)) {
        groups.set(category, [] as Array<(typeof faqsWithFallback)[number]>);
      }
      groups.get(category)!.push(faq);
    });
    return Array.from(groups.entries()).map(([category, items]) => ({ category, items }));
  }, [faqsWithFallback]);

  const quickActions = useMemo(() => ([
    {
      label: "Implementation Timeline",
      description: "Understand your launch milestones",
      href: "#sf-benefits",
      Icon: Clock
    },
    {
      label: "Pricing Approach",
      description: "See how we scope investment",
      href: "#sf-features",
      Icon: DollarSign
    },
    {
      label: "FAQs",
      description: "Get answers for your team",
      href: "#sf-faqs",
      Icon: MessageCircle
    },
    {
      label: data.ctaButtonText || "Book a Free Call",
      description: "Connect with a strategist",
      href: "#sf-final-cta",
      Icon: ArrowRight
    }
  ]), [data.ctaButtonText]);

  return (
    <div className="min-h-screen bg-background" data-sf-fixed="headings entities">
      <SEO
        pageType="service"
        serviceName={data.title.replace(' for Accounting Firms', '').replace(' for Finance Firms', '')}
        audience="accounting firms"
        title={data.title}
        description={(data.heroDescription || data.heroSubtitle).substring(0, 155)}
        canonicalUrl={data.canonicalUrl}
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: servicesIndexPath },
          { name: data.title.replace(' for Accounting Firms', '').replace(' | SmartFirm', ''), url: window.location.pathname }
        ]}
        faqs={faqsWithFallback}
      />
      <Header />

      <main id="main-content" role="main">
        {/* Hero Section - Blue Gradient Background */}
        <section
          className="hero-section relative pt-24 pb-32 min-h-[unset] px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-muted-blue"
        >
          <style>{heroStyles}</style>

          {/* Breadcrumbs */}
          <nav id="sf-breadcrumbs" className="absolute top-0 left-0 right-0 pt-4 z-20" aria-label="Breadcrumb">
            <div className="max-w-container-3xl mx-auto px-4">
              <Breadcrumb>
                <BreadcrumbList className="text-xs text-white/60">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="hover:text-white/80">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-white/40" />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/services/" className="hover:text-white/80">Services</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-white/40" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-white/60">{data.title.replace(' for Accounting Firms', '').replace(' | SmartFirm', '')}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </nav>

          <div className="hero-container max-w-container-3xl mx-auto relative flex items-center justify-center min-h-[unset] pt-1">
            {/* Hero Content - Centered */}
            <div className="hero-content relative z-10 text-center max-w-container-lg px-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {data.heroTitle}
              </motion.h1>

              <div id="sf-keyword-intro">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  className="text-lg md:text-xl text-white/90 leading-relaxed mb-8"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {data.heroSubtitle}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <Button
                  id="service-hero-book-call-btn"
                  size="lg"
                  className="px-8 py-4 md:px-8 md:py-4 text-lg font-bold bg-gradient-coral text-white rounded-xl glow-coral hover-lift"
                  asChild
                >
                  <a href="/get-started/">
                    Book a Free Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Hero Graphics - Orbital Circles */}
            <div className="hero-graphics absolute inset-0 z-[1] pointer-events-none">
              {/* Glass Bubble with Settings Icon */}
              <div
                className="absolute top-10 left-[190px] w-[120px] h-[120px] md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[100px] glass-card-light rounded-full flex items-center justify-center elevation-3 z-[15]"
                style={{ animation: 'bubble-float 4s ease-in-out infinite' }}
              >
                <Settings className="w-[50px] h-[50px] md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] text-primary glow-cyan" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-[80px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" className="fill-background" />
            </svg>
          </div>

        </section>


        {/* Persistent Quick Actions for decision-makers
      <nav
        aria-label="Service quick actions"
        className="hidden xl:flex flex-col gap-3 fixed top-32 right-10 z-30 w-[260px]"
      >
        {quickActions.map(({ label, description, href, Icon }) => (
          <a
            key={label}
            href={href}
            className="group flex items-start gap-3 rounded-xl border border-border bg-white/90 backdrop-blur-sm px-4 py-3 elevation-1 hover-lift hover:elevation-2 color-transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-vibrant-teal text-white shadow-teal-sm transition-transform group-hover:scale-105">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-slate-900">{label}</span>
              <span className="block text-xs text-slate-500">{description}</span>
            </span>
          </a>
        ))}
      </nav>

      Mobile quick links 
      <div className="xl:hidden border-b border-border/60 bg-white/95 px-4 py-3 backdrop-blur-sm">
        <div className="flex gap-3 overflow-x-auto">
          {quickActions.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="whitespace-nowrap rounded-full border border-border px-4 py-2 text-sm font-medium text-slate-700 elevation-1 transition-colors hover:border-slate-300 hover:bg-slate-50"
            >
              {label}
            </a>
          ))}
        </div>
      </div>*/}

        {/* Benefits Section - White Background */}
        <section
          id="sf-benefits"
          className="pt-[20px] md:pt-[40px] lg:pt-[20px] pb-[60px] md:pb-[80px] lg:pb-[100px] bg-background-light relative px-6 md:px-12"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
                className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Key Benefits
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: isMobile ? 0.4 : 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-base md:text-lg text-[hsl(var(--text-dark))] max-w-3xl mx-auto leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Discover how this service transforms your accounting firm
              </motion.p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-md">
              {data.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: isMobile ? 0.4 : 0.6,
                    delay: isMobile ? Math.min(index * 0.1, 0.3) : index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <StandardCard
                    icon={CheckCircle}
                    title={benefit.title}
                    description={benefit.description}
                    variant={
                      benefit.title === "Executive Dashboards" ? "popular" :
                        index === 1 ? "featured" :
                          "default"
                    }
                  >
                    {benefit.details && (
                      <div className="mt-4">
                        <ul className="space-y-2">
                          {benefit.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                              <span className="text-sm text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </StandardCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section - Teal Background */}
        <section
          id="sf-features"
          className="pt-[20px] md:pt-[40px] lg:pt-[60px] pb-[60px] md:pb-[80px] lg:pb-[100px] bg-gradient-deep-teal relative px-6 md:px-12"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
                className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Features & Capabilities
              </motion.h2>
            </div>
            {/* Features Grid */}
            <div className="grid lg:grid-cols-2 gap-md">
              {data.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: isMobile ? 0.4 : 0.6,
                    delay: isMobile ? Math.min(index * 0.1, 0.3) : index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <StandardCard
                    title={feature.title}
                    description={feature.description}
                    variant={index === 1 ? "featured" : "default"}
                  >
                    {feature.details && (
                      <div className="mt-4">
                        <ul className="space-y-2">
                          {feature.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                              <span className="text-sm text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </StandardCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Optional content before Final CTA */}
        {beforeFinalCta}

        {/* Final CTA Section - Blue Gradient Background */}
        <section
          id="sf-final-cta"
          ref={finalCtaRef}
          className="relative py-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden bg-gradient-muted-blue"
        >
          <div className="max-w-4xl mx-auto text-center pb-8 md:pb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {data.ctaTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {data.ctaDescription}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Button
                size="lg"
                variant="coral"
                className="px-8 py-4 text-lg font-bold color-transition group"
                asChild
              >
                <a href={data.ctaButtonLink}>
                  {data.ctaButtonText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FAQs Section - White Background (Moved after Final CTA) */}
        <section
          id="sf-faqs"
          className="pt-[40px] md:pt-[60px] lg:pt-[40px] pb-[60px] md:pb-[80px] lg:pb-[100px] bg-white px-6 md:px-12"
        >

          <div className="max-w-4xl mx-auto">
            {/* Decorative centered line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-32 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"
            />

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-6">
              {faqGroups.map(({ category, items }, groupIndex) => (
                <div key={category} className="rounded-2xl border border-border bg-white/80 p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-primary mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {category}
                  </h3>
                  <div className="space-y-3">
                    {items.map((faq, itemIndex) => {
                      const staggerIndex = groupIndex * 5 + itemIndex;
                      return (
                        <motion.details
                          key={`${category}-${faq.question}`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{
                            duration: isMobile ? 0.35 : 0.5,
                            delay: isMobile
                              ? Math.min(staggerIndex * 0.08, 0.32)
                              : staggerIndex * 0.08,
                            ease: "easeOut"
                          }}
                          className="group border border-border rounded-xl bg-white px-5 py-4 elevation-1 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
                          onToggle={(event) => {
                            if (event.currentTarget.open && finalCtaRef.current) {
                              window.requestAnimationFrame(() => {
                                finalCtaRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                              });
                            }
                          }}
                        >
                          <summary className="cursor-pointer list-none text-base font-semibold text-primary flex items-center justify-between gap-4">
                            <span>{faq.question}</span>
                            <ArrowRight className="h-4 w-4 text-accent transition-transform group-open:rotate-90" aria-hidden="true" />
                          </summary>
                          <div
                            className="text-foreground mt-3 leading-relaxed space-y-3"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            <FaqAnswer
                              text={faq.answer}
                              paragraphClassName="text-foreground leading-relaxed"
                            />
                          </div>
                        </motion.details>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
