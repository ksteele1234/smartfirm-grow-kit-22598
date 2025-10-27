import { Helmet } from 'react-helmet';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import { SolutionPageData } from '@/types/cms';
import { CheckCircle, TrendingUp } from 'lucide-react';
import AccordionFAQ from '@/components/sections/AccordionFAQ';
import FinalCTASection from '@/components/sections/FinalCTASection';
import { generatePageContent, type ContentConfig } from '@/lib/pageGenerator';
import { useEffect, useState } from 'react';

/**
 * Phase 3: Enhanced Solution Page Template
 * Integrates content generation and keyword optimization
 */

interface EnhancedSolutionPageProps {
  data: SolutionPageData;
  contentConfig?: ContentConfig;
}

export function EnhancedSolutionPageTemplate({ data, contentConfig }: EnhancedSolutionPageProps) {
  const [generatedContent, setGeneratedContent] = useState<ReturnType<typeof generatePageContent> | null>(null);

  useEffect(() => {
    if (contentConfig) {
      const content = generatePageContent(contentConfig);
      setGeneratedContent(content);
      
      if (import.meta.env.DEV && !content.validation.valid) {
        console.warn('Content validation issues:', content.validation);
      }
    }
  }, [contentConfig]);

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
                {generatedContent?.intro || data.problemStatement}
              </p>
            </div>
          </div>
        </section>

        {/* Problem-Solution Pairs */}
        {data.problemSolutionPairs && data.problemSolutionPairs.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">
                {generatedContent?.sections[0]?.h2 || 'The Challenge & Our Solution'}
              </h2>
              <div className="max-w-4xl mx-auto space-y-8">
                {data.problemSolutionPairs.map((pair, index) => (
                  <div key={index} className="bg-card p-8 rounded-lg border border-border">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-semibold text-lg mb-3 text-destructive">
                          The Problem
                        </h3>
                        <p className="text-muted-foreground">{pair.problem}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-3 text-accent">
                          Our Solution
                        </h3>
                        <p className="text-muted-foreground">{pair.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Key Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              {generatedContent?.sections[1]?.h2 || 'Key Benefits'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {data.keyBenefits.map((benefit, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground mb-3">{benefit.description}</p>
                      {benefit.points && benefit.points.length > 0 && (
                        <ul className="space-y-1">
                          {benefit.points.map((point, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-accent">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              {generatedContent?.sections[2]?.h2 || 'How It Works'}
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {data.howItWorks.map((step, index) => (
                <div key={index} className="flex gap-6 bg-card p-6 rounded-lg border border-border">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    {step.subheading && (
                      <p className="text-sm text-accent mb-2">{step.subheading}</p>
                    )}
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              Proven Results
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {data.results.map((result, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border text-center">
                  <TrendingUp className="w-8 h-8 text-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{result.value}</div>
                  <div className="font-semibold mb-2">{result.metric}</div>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
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
          primaryButtonText={generatedContent?.cta.label || "Get Started Today"}
          primaryButtonLink={generatedContent?.cta.url || "/get-started"}
        />

        <Footer />
      </div>
    </>
  );
}
