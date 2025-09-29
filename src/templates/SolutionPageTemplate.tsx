import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SolutionPageData } from "@/types/cms";
import { CheckCircle, ArrowRight, TrendingUp } from "lucide-react";
import { GeometricDivider, FloatingShapes, BackgroundPattern, AccentLine } from "@/components/ui/visual-accents";
import { EnhancedCard } from "@/components/ui/enhanced-card";

interface SolutionPageTemplateProps {
  data: SolutionPageData;
}

const SolutionPageTemplate = ({ data }: SolutionPageTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-teal/10 overflow-hidden">
        <FloatingShapes variant="squares" />
        <BackgroundPattern pattern="dots" className="opacity-30" />
        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            {data.heroTitle}
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
            {data.heroSubtitle}
          </p>
          <Button size="lg" variant="hero" className="group bg-gradient-to-r from-primary to-teal hover:from-primary/90 hover:to-teal/90 text-white" asChild>
            <a href="/get-started">
              Get Your Solution
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-r from-background to-secondary/5">
        <div className="max-w-7xl mx-auto">
          {/* Asymmetrical layout with accent line */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <h2 className="text-3xl font-bold text-primary mb-6">
                The Challenge
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                {data.problemStatement}
              </p>
            </div>
            <div className="relative lg:ml-8">
              <AccentLine orientation="vertical" className="absolute -left-4 top-0 h-full hidden lg:block" />
              <h2 className="text-3xl font-bold text-teal mb-6">
                Our Solution
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                {data.solutionOverview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal/5 to-primary/5 relative overflow-hidden">
        <BackgroundPattern pattern="dots" className="opacity-20" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Key Benefits
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              See how our solution transforms your practice
            </p>
          </div>
          
          <GeometricDivider variant="zigzag" />
          
          {/* Dynamic grid based on number of benefits */}
          <div className={`grid gap-8 ${data.keyBenefits.length === 4 ? 'md:grid-cols-2 lg:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
            {data.keyBenefits.map((benefit, index) => {
              const variants = ["elevated", "gradient", "outlined"];
              const hoverEffects = ["lift", "glow", "scale"];
              return (
                <EnhancedCard 
                  key={index} 
                  variant={variants[index % 3] as any}
                  hoverEffect={hoverEffects[index % 3] as any}
                  className="bg-gradient-to-br from-background to-primary/5"
                >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-teal/20 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary mb-3">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-text-secondary leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                  </CardContent>
                </EnhancedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Our proven process gets you results quickly
            </p>
          </div>
          {/* Dynamic grid based on number of steps */}
          <div className={`grid gap-8 ${data.howItWorks.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
            {data.howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-teal text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Real outcomes from real clients
            </p>
          </div>
          {/* Dynamic grid based on number of results */}
          <div className={`grid gap-8 ${data.results.length === 3 ? 'md:grid-cols-1 lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
            {data.results.map((result, index) => (
              <Card key={index} className="bg-gradient-to-br from-background to-teal/5 text-center border-border/50 shadow-card hover:shadow-soft transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-4xl font-bold text-gradient bg-gradient-to-r from-primary to-teal bg-clip-text text-transparent">
                    {result.value}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary mt-2">
                    {result.metric}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-text-secondary leading-relaxed">
                    {result.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/95 to-teal text-white relative overflow-hidden">
        <FloatingShapes variant="circles" className="opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl font-bold mb-6 text-white">{data.ctaTitle}</h2>
          <p className="text-xl opacity-90 mb-10 text-white/90 leading-relaxed">{data.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="white-on-dark" className="group font-semibold">
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="white-outline-on-dark">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SolutionPageTemplate;