import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ServicePageData } from "@/types/cms";
import { CheckCircle, ArrowRight } from "lucide-react";
import { GeometricDivider, FloatingShapes, BackgroundPattern } from "@/components/ui/visual-accents";
import { StandardCard } from "@/components/ui/standard-card";
import SEO from "@/components/SEO";

interface ServicePageTemplateProps {
  data: ServicePageData;
}

const ServicePageTemplate = ({ data }: ServicePageTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        pageType="service"
        serviceName={data.title.replace(' for Accounting Firms', '').replace(' for Finance Firms', '')}
        audience="accounting firms"
        title={data.title}
        description={(data.heroDescription || data.heroSubtitle).substring(0, 155)}
        noindex={false}
      />
      <Header />
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
        <FloatingShapes variant="circles" />
        <BackgroundPattern pattern="dots" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {data.heroTitle}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {data.heroSubtitle}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {data.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            {data.heroImage && (
              <div className="relative">
                <img 
                  src={data.heroImage} 
                  alt={data.heroTitle}
                  className="rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Key Benefits
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Discover how this service transforms your accounting firm
            </p>
          </div>
          
          <GeometricDivider variant="lines" />
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {data.benefits.map((benefit, index) => (
              <StandardCard
                key={index}
                icon={CheckCircle}
                title={benefit.title}
                description={benefit.description}
                variant={index === 1 ? "featured" : index === 3 ? "popular" : "default"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/10 relative overflow-hidden">
        <BackgroundPattern pattern="grid" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Features & Capabilities
            </h2>
          </div>
          
          <GeometricDivider variant="wave" />
          
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            {data.features.map((feature, index) => (
              <StandardCard
                key={index}
                title={feature.title}
                description={feature.description}
                variant={index === 1 ? "featured" : "default"}
              >
                {feature.details && (
                  <div className="mt-4">
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-text-secondary">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </StandardCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/95 to-teal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-light-teal">{data.ctaTitle}</h2>
          <p className="text-xl opacity-90 mb-8 text-white/90">{data.ctaDescription}</p>
          <Button 
            size="lg" 
            variant="white-on-dark"
            className="group"
            asChild
          >
            <a href={data.ctaButtonLink}>
              {data.ctaButtonText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicePageTemplate;