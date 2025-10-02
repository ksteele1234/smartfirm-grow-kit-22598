import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IndustryPageData } from "@/types/cms";
import { CheckCircle, ArrowRight, Building, Users } from "lucide-react";
import { 
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import SEO from "@/components/SEO";

interface IndustryPageTemplateProps {
  data: IndustryPageData;
}

const IndustryPageTemplate = ({ data }: IndustryPageTemplateProps) => {
  const defaultFAQs = [
    {
      question: "Do you work with firms like mine?",
      answer: "Yes, we specialize in serving firms in your industry with tailored solutions for your unique challenges."
    },
    {
      question: "What makes your approach different?",
      answer: "We combine industry expertise with proven automation to deliver measurable results for accounting firms."
    },
    {
      question: "How do you ensure compliance?",
      answer: "All our solutions are designed with accounting industry standards and compliance requirements in mind."
    }
  ];

  return (
    <div className="min-h-screen bg-background" data-sf-fixed="headings entities">
      <SEO
        pageType="industry"
        title={data.title}
        description={(data.heroSubtitle || data.industryOverview).substring(0, 155)}
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industries" },
          { name: data.title.replace(' | SmartFirm', ''), url: window.location.pathname }
        ]}
        faqs={defaultFAQs}
      />
      <Header />
      
      {/* Breadcrumbs */}
      <nav id="sf-breadcrumbs" className="px-4 sm:px-6 lg:px-8 py-3 border-b border-border/50 bg-background-light/60" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/industries">Industries</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{data.title.replace(' | SmartFirm', '')}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
      <script id="sf-breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${window.location.origin}/` },
            { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${window.location.origin}/industries` },
            { "@type": "ListItem", "position": 3, "name": data.title.replace(' | SmartFirm', ''), "item": window.location.href }
          ]
        })}
      </script>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/20 to-primary/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {data.heroTitle}
          </h1>
          <div id="sf-keyword-intro">
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {data.heroSubtitle}
            </p>
          </div>
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
            <p className="mt-4 text-muted-foreground text-center">
              View <a href="/services" data-sf="internal-add" className="text-primary hover:underline">our services</a>, explore <a href="/case-studies" data-sf="internal-add" className="text-primary hover:underline">success stories</a>, or learn from <a href="https://www.aicpa.org" data-sf="external-add" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AICPA best practices</a>.
            </p>
          </div>
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
            "description": data.industryOverview
          })}
        </script>
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
                    <h3 className="font-semibold text-primary mb-2">Our Solution:</h3>
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

      {/* FAQs Section */}
      <section id="sf-faqs" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {defaultFAQs.map((faq, index) => (
              <details key={index} className="border border-border rounded-lg p-4 bg-background">
                <summary className="cursor-pointer font-medium text-foreground">{faq.question}</summary>
                <div className="text-muted-foreground mt-2">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
        <script id="sf-faq-jsonld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": defaultFAQs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })}
        </script>
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