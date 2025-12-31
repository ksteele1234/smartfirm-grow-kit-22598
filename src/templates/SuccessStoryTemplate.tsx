import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SuccessStoryData } from "@/types/cms";
import { Quote, TrendingUp, ArrowRight, Building } from "lucide-react";
import SEO from "@/components/SEO";

interface SuccessStoryTemplateProps {
  data: SuccessStoryData;
}

const SuccessStoryTemplate = ({ data }: SuccessStoryTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={data.title}
        description={data.testimonial.quote || `${data.clientName} success story - ${data.industry}`}
        pageType="success-story"
        articleHeadline={data.title}
        datePublished={data.publishDate || new Date().toISOString()}
        pageImage={data.clientLogo || '/assets/og-default.webp'}
        author={data.testimonial.author}
      />
      <Header />
      <main id="main-content" role="main">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-lg items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                {data.industry}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {data.title}
              </h1>
              <div className="flex items-center gap-4 mb-8">
                {data.clientLogo && (
                  <img 
                    src={data.clientLogo} 
                    alt={`${data.clientName} company logo`}
                    className="h-12 object-contain"
                  />
                )}
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {data.clientName}
                  </h2>
                  <p className="text-muted-foreground">{data.industry} Firm</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-background/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Quote className="h-5 w-5 text-primary" />
                    Client Testimonial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-lg italic text-muted-foreground mb-4">
                    "{data.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    {data.testimonial.image && (
                      <img 
                        src={data.testimonial.image} 
                        alt={`${data.testimonial.author}, ${data.testimonial.position} - testimonial headshot`}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-foreground">
                        {data.testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {data.testimonial.position}, {data.testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              The Challenge
            </h2>
            <p className="text-lg text-muted-foreground">
              {data.challenge}
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Solution
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {data.solution}
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {data.services.map((service, index) => (
                <Badge key={index} variant="outline">
                  {service}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Measurable Results
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-md">
            {data.results.map((result, index) => (
              <Card key={index} className="text-center hover:elevation-3 transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-primary">
                    {result.value}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold">
                    {result.metric}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {result.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Used Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Services That Made the Difference
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {data.services.map((service, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Building className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="font-semibold text-foreground">{service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            See how we can help your firm grow with proven marketing strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group">
              Book Your Strategy Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              View More Success Stories
            </Button>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStoryTemplate;
