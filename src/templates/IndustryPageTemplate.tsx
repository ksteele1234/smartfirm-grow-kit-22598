import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IndustryPageData } from "@/types/cms";
import { CheckCircle, ArrowRight, Building, Users } from "lucide-react";
import SEO from "@/components/SEO";

interface IndustryPageTemplateProps {
  data: IndustryPageData;
}

const IndustryPageTemplate = ({ data }: IndustryPageTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={data.title}
        description={data.heroSubtitle || data.industryOverview}
      />
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/20 to-primary/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {data.heroTitle}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {data.heroSubtitle}
          </p>
          <Button size="lg" className="group">
            Get Industry-Specific Solutions
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Industry Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Industry Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              {data.industryOverview}
            </p>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Common Challenges & Our Solutions
            </h2>
          </div>
          <div className="space-y-8">
            {data.challenges.map((challenge, index) => (
              <Card key={index} className="bg-background">
                <CardHeader>
                  <CardTitle className="text-xl flex items-start gap-3">
                    <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-destructive font-bold">!</span>
                    </div>
                    {challenge.title}
                  </CardTitle>
                  <CardDescription className="text-base ml-11">
                    {challenge.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="ml-11">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Our Solution:</h4>
                    <p className="text-muted-foreground">{challenge.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Specialized Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Building className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <a href={service.link}>Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {data.caseStudies.map((study, index) => (
              <Card key={index} className="bg-background">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{study.title}</CardTitle>
                      <CardDescription>{study.client}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{study.result}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={study.link}>Read Full Story</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{data.ctaTitle}</h2>
          <p className="text-xl opacity-90 mb-8">{data.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="group">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              View All Services
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default IndustryPageTemplate;