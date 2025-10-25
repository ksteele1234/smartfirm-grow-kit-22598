import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IndustryPageData } from "@/types/cms";
import { CheckCircle, ArrowRight, Building, Users, Shield } from "lucide-react";
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import SEO from "@/components/SEO";
import FaqAnswer from "@/components/faq/FaqAnswer";


interface IndustryPageTemplateProps {
  data: IndustryPageData;
}

const IndustryPageTemplate = ({ data }: IndustryPageTemplateProps) => {
  const industriesIndexPath = "/industries-expert-marketing-agency-for-accountants";
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
  const defaultIndustryMetrics = [
    {
      label: "Average pipeline lift",
      value: "37%",
      description: "Increase in qualified opportunities within the first 90 days."
    },
    {
      label: "Time saved per partner",
      value: "12 hrs",
      description: "Freed from manual follow-up and nurture workflows every month."
    },
    {
      label: "Lead-to-client conversion",
      value: "3.2x",
      description: "Improvement driven by industry-specific nurture journeys."
    }
  ];
  const metricsToRender = data.industryMetrics && data.industryMetrics.length > 0 ? data.industryMetrics : defaultIndustryMetrics;
  const faqsToRender = data.faqs && data.faqs.length > 0 ? data.faqs : defaultFAQs;

  return (
    <div className="min-h-screen bg-background" data-sf-fixed="headings entities">
      <SEO
        pageType="industry"
        title={data.title}
        description={(data.heroSubtitle || data.industryOverview).substring(0, 155)}
        canonicalUrl={data.canonicalUrl}
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Industries", url: industriesIndexPath },
          { name: data.title.replace(' | SmartFirm', ''), url: window.location.pathname }
        ]}
        faqs={faqsToRender}
      />
      <Header />
      
      <main id="main-content" role="main">
      {/* Breadcrumbs */}
      <nav id="sf-breadcrumbs" className="bg-background-light border-b" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 lg:px-6 py-1.5">
          <Breadcrumb>
            <BreadcrumbList className="text-sm text-muted-foreground">
              <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink href={industriesIndexPath}>Industries</BreadcrumbLink>
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
            { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${window.location.origin}${industriesIndexPath}` },
            { "@type": "ListItem", "position": 3, "name": data.title.replace(' | SmartFirm', ''), "item": window.location.href }
          ]
        })}
      </script>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-muted-blue pt-32">
        <div className="relative z-10 mx-auto max-w-4xl text-center px-4">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-on-dark-heading mb-6 drop-shadow-lg">
            {data.heroTitle}
          </h1>
          <div id="sf-keyword-intro">
            <p className="text-xl font-sans text-on-dark-body mb-8 max-w-3xl mx-auto drop-shadow-md leading-[1.6]">
              {data.heroSubtitle}
            </p>
          </div>
          <Button size="lg" variant="secondary" className="group">
            Get Industry-Specific Solutions
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Industry Overview Section */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Industry Overview
            </h2>
            <p className="text-lg font-sans text-foreground max-w-4xl mx-auto leading-[1.6]">
              {data.industryOverview}
            </p>
            <p className="mt-4 font-sans text-foreground text-center leading-[1.6]">
              View <a href="/leading-marketing-services-for-accounting-firms" data-sf="internal-add" className="text-primary hover:text-primary/80 underline">our services</a>, explore <a href="/case-studies" data-sf="internal-add" className="text-primary hover:text-primary/80 underline">success stories</a>, or learn from <a href="https://www.aicpa.org" data-sf="external-add" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">AICPA best practices</a>.
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
      <section className="section-padding bg-muted">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Common Challenges & Our Solutions
            </h2>
          </div>
          <div className="grid gap-6">
            {data.challenges.map((challenge, index) => (
              <Card key={index} className="bg-background">
                <CardHeader>
                  <CardTitle className="text-xl font-heading flex items-start gap-3">
                    <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-destructive font-bold">!</span>
                    </div>
                    {challenge.title}
                  </CardTitle>
                  <CardDescription className="text-base font-sans text-foreground ml-11 leading-[1.6]">
                    {challenge.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="ml-11">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Our Solution:</h3>
                    <p className="font-sans text-foreground leading-[1.6]">{challenge.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Specialized Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Building className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base font-sans text-foreground mb-4 leading-[1.6]">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <a href={service.link}>Explore {service.title}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-muted">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Success Stories
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {data.caseStudies.map((study, index) => (
              <Card key={index} className="bg-background">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-heading">{study.title}</CardTitle>
                      <CardDescription className="font-sans text-foreground">{study.client}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-foreground leading-[1.6] mb-4">{study.result}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={study.link}>Read {study.client} Success Story</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="sf-faqs" className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqsToRender.map((faq, index) => (
              <details key={index} className="border border-border rounded-lg p-4 bg-background">
                <summary className="cursor-pointer font-semibold">{faq.question}</summary>
                <div className="text-foreground mt-2 space-y-3 leading-[1.6]">
                  <FaqAnswer
                    text={faq.answer}
                    paragraphClassName="text-base leading-[1.6] text-foreground"
                  />
                </div>
              </details>
            ))}
          </div>
        </div>
        <script id="sf-faq-jsonld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqsToRender.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })}
        </script>
      </section>

      {/* Final CTA Section */}
      <section 
        className="relative bg-background section-padding"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-heading font-bold">{data.ctaTitle}</h2>
          <p className="text-xl font-sans text-foreground leading-[1.6]">{data.ctaDescription}</p>
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
      </main>
      
      <Footer />
    </div>
  );
};

export default IndustryPageTemplate;
