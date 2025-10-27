import { Helmet } from 'react-helmet';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import { ServicePageData } from '@/types/cms';
import { CheckCircle } from 'lucide-react';
import AccordionFAQ from '@/components/sections/AccordionFAQ';
import FinalCTASection from '@/components/sections/FinalCTASection';
import { generatePageContent, type ContentConfig } from '@/lib/pageGenerator';
import { useEffect, useState } from 'react';

/**
 * Phase 3: Enhanced Service Page Template
 * Integrates content generation and keyword optimization
 */

interface EnhancedServicePageProps {
  data: ServicePageData;
  contentConfig?: ContentConfig;
}

export function EnhancedServicePageTemplate({ data, contentConfig }: EnhancedServicePageProps) {
  const [generatedContent, setGeneratedContent] = useState<ReturnType<typeof generatePageContent> | null>(null);

  useEffect(() => {
    if (contentConfig) {
      const content = generatePageContent(contentConfig);
      setGeneratedContent(content);
      
      // Log validation results in development
      if (import.meta.env.DEV && !content.validation.valid) {
        console.warn('Content validation issues:', content.validation);
      }
    }
  }, [contentConfig]);

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
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                {generatedContent?.h1 || data.heroTitle}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {data.heroSubtitle}
              </p>
              <p className="text-lg leading-relaxed">
                {generatedContent?.intro || data.heroDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              {generatedContent?.sections[0]?.h2 || 'Key Benefits'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.benefits.map((benefit, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              {generatedContent?.sections[1]?.h2 || 'How It Works'}
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {data.features.map((feature, index) => (
                <div key={index} className="bg-card p-8 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  {feature.details && feature.details.length > 0 && (
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{detail}</span>
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
        {data.faqs && data.faqs.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">
                Frequently Asked Questions
              </h2>
              <div className="max-w-3xl mx-auto">
                <AccordionFAQ faqs={data.faqs} />
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <FinalCTASection
          title={generatedContent?.cta.label || data.ctaTitle}
          description={data.ctaDescription}
          primaryButtonText={generatedContent?.cta.label || data.ctaButtonText}
          primaryButtonLink={generatedContent?.cta.url || data.ctaButtonLink}
        />

        <Footer />
      </div>
    </>
  );
}
