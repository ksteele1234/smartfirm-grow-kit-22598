import { Helmet } from 'react-helmet';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import { ServicePageData } from '@/types/cms';
import { CheckCircle, ArrowRight, Settings, Clock, DollarSign, MessageCircle } from 'lucide-react';
import AccordionFAQ from '@/components/sections/AccordionFAQ';
import FinalCTASection from '@/components/sections/FinalCTASection';
import { generatePageContent, type ContentConfig } from '@/lib/pageGenerator';
import { useEffect, useState, useMemo } from 'react';
import { StandardCard } from '@/components/ui/standard-card';
import { 
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage 
} from '@/components/ui/breadcrumb';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

/**
 * Phase 3: Enhanced Service Page Template
 * Integrates content generation and keyword optimization
 */

interface EnhancedServicePageProps {
  data: ServicePageData;
  contentConfig?: ContentConfig;
}

const heroStyles = `
  @keyframes rotateClockwise {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes rotateClockwiseBottomRight {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes rotateCounterClockwise {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }
  
  @keyframes bubble-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }
  
  @keyframes pulse-dot {
    0%, 100% { 
      transform: scale(1); 
      opacity: 0.6; 
    }
    50% { 
      transform: scale(1.5); 
      opacity: 1; 
    }
  }
`;

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

export function EnhancedServicePageTemplate({ data, contentConfig }: EnhancedServicePageProps) {
  const [generatedContent, setGeneratedContent] = useState<ReturnType<typeof generatePageContent> | null>(null);
  const servicesIndexPath = "/leading-marketing-services-for-accounting-firms";

  useEffect(() => {
    if (contentConfig) {
      const content = generatePageContent(contentConfig);
      setGeneratedContent(content);
      
      if (import.meta.env.DEV && !content.validation.valid) {
        console.warn('Content validation issues:', content.validation);
      }
    }
  }, [contentConfig]);

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

  const canonicalUrl = data.canonicalUrl || `https://smartfirm.io/services/${data.slug}`;

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
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main id="main-content" role="main">
          {/* Hero Section with Orbital Graphics */}
          <section className="hero-section relative pt-24 pb-32 min-h-[unset] px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-muted-blue">
            <style>{heroStyles}</style>
            
            {/* Breadcrumbs */}
            <nav id="sf-breadcrumbs" className="absolute top-0 left-0 right-0 pt-4 z-20" aria-label="Breadcrumb">
              <div className="max-w-[1400px] mx-auto px-4">
                <Breadcrumb>
                  <BreadcrumbList className="text-xs text-white/60">
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/" className="hover:text-white/80">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-white/40" />
                    <BreadcrumbItem>
                      <BreadcrumbLink href={servicesIndexPath} className="hover:text-white/80">Services</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-white/40" />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-white/60">{data.title.replace(' for Accounting Firms', '').replace(' | SmartFirm', '')}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </nav>
            
            <div className="hero-container max-w-[1400px] mx-auto relative flex items-center justify-center min-h-[unset] pt-1">
              {/* Hero Content */}
              <div className="hero-content relative z-10 text-center max-w-[800px] px-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {generatedContent?.h1 || data.heroTitle}
                </motion.h1>
                
                <div id="sf-keyword-intro">
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="text-lg md:text-xl text-white/90 leading-relaxed mb-8"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {generatedContent?.intro || data.heroSubtitle || data.heroDescription}
                  </motion.p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                  <Button 
                    size="lg"
                    className="px-8 py-4 md:px-8 md:py-4 text-lg font-bold bg-gradient-coral text-white rounded-xl glow-coral hover-lift transition-all duration-200"
                    asChild
                  >
                    <a href="/get-started">
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
                
                {/* SET 1: CENTER/MAIN - ALL TEAL */}
                <div className="orbital-circle-set-1">
                  <div 
                    className="absolute top-1/2 left-1/2"
                    style={{ transform: 'translate(calc(-50% + 500px), -50%)' }}
                  >
                    {/* Outer Circle (400px) */}
                    <div 
                      className="absolute w-[400px] h-[400px] border-[3px] border-primary-soft rounded-full"
                      style={{ top: 'calc(50% - 200px)', left: 'calc(50% - 200px)', animation: 'rotateClockwise 60s linear infinite' }}
                    >
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                        const radians = (angle * Math.PI) / 180;
                        const x = Math.cos(radians) * 200;
                        const y = Math.sin(radians) * 200;
                        return (
                          <div 
                            key={`outer-${i}`}
                            className="absolute w-2 h-2 rounded-full dot-primary -ml-1 -mt-1" 
                            style={{ 
                              left: `calc(50% + ${x}px)`, 
                              top: `calc(50% + ${y}px)`, 
                              animation: `pulse-dot 2s ease-in-out infinite ${i * 0.2}s` 
                            }} 
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="sf-benefits" className="section-padding bg-white">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                  {generatedContent?.sections[0]?.h2 || 'Key Benefits'}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.benefits.map((benefit, index) => (
                  <StandardCard
                    key={index}
                    icon={CheckCircle}
                    title={benefit.title}
                    description={benefit.description}
                    variant="default"
                    className="bg-card elevation-2"
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="sf-features" className="section-padding bg-muted/30">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                  {generatedContent?.sections[1]?.h2 || 'How It Works'}
                </h2>
              </div>
              <div className="space-y-6">
                {data.features.map((feature, index) => (
                  <div key={index} className="bg-card p-8 rounded-xl elevation-2">
                    <h3 className="text-2xl font-semibold mb-4 text-primary">{feature.title}</h3>
                    <p className="text-lg text-muted-foreground mb-4">{feature.description}</p>
                    {feature.details && feature.details.length > 0 && (
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          {faqsWithFallback.length > 0 && (
            <section id="sf-faqs" className="section-padding bg-white">
              <div className="max-w-[1000px] mx-auto">
                <div className="text-center mb-14">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                    Frequently Asked Questions
                  </h2>
                </div>
                <div className="space-y-8">
                  {faqGroups.map(({ category, items }) => (
                    <div key={category}>
                      <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
                      <AccordionFAQ faqs={items} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section id="sf-final-cta">
            <FinalCTASection
              title={generatedContent?.cta.label || data.ctaTitle || "Ready to Transform Your Practice?"}
              description={data.ctaDescription || "Book a free strategy call to discuss your goals."}
              primaryButtonText={generatedContent?.cta.label || data.ctaButtonText || "Get Started"}
              primaryButtonLink={generatedContent?.cta.url || data.ctaButtonLink || "/get-started"}
            />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
