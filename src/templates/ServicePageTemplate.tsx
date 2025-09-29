import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ServicePageData } from "@/types/cms";
import { CheckCircle, ArrowRight } from "lucide-react";
import { GeometricDivider, FloatingShapes, BackgroundPattern } from "@/components/ui/visual-accents";
import { EnhancedCard } from "@/components/ui/enhanced-card";

interface ServicePageTemplateProps {
  data: ServicePageData;
}

const ServicePageTemplate = ({ data }: ServicePageTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Key Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how this service transforms your accounting firm
            </p>
          </div>
          
          <GeometricDivider variant="lines" />
          
          {/* Asymmetrical Benefits Grid */}
          <div className="space-y-8">
            {/* First row - 2 cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {data.benefits.slice(0, 2).map((benefit, index) => {
                const variants = ["elevated", "gradient"];
                return (
                  <EnhancedCard key={index} variant={variants[index] as any} hoverEffect="lift">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </EnhancedCard>
                );
              })}
            </div>
            
            {/* Remaining cards offset */}
            {data.benefits.length > 2 && (
              <div className="grid md:grid-cols-3 gap-8 md:ml-12">
                {data.benefits.slice(2).map((benefit, index) => {
                  const variants = ["tilted", "outlined", "default"];
                  return (
                    <EnhancedCard key={index + 2} variant={variants[index % 3] as any} hoverEffect="scale">
                      <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                          <CheckCircle className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{benefit.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {benefit.description}
                        </CardDescription>
                      </CardContent>
                    </EnhancedCard>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
        <BackgroundPattern pattern="grid" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Features & Capabilities
            </h2>
          </div>
          
          <GeometricDivider variant="wave" />
          
          <div className="grid lg:grid-cols-2 gap-8">
            {data.features.map((feature, index) => {
              const hoverEffects = ["lift", "glow"];
              return (
                <EnhancedCard key={index} variant="elevated" hoverEffect={hoverEffects[index % 2] as any}>
                <CardHeader>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                {feature.details && (
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </EnhancedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{data.ctaTitle}</h2>
          <p className="text-xl opacity-90 mb-8">{data.ctaDescription}</p>
          <Button 
            size="lg" 
            variant="secondary"
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