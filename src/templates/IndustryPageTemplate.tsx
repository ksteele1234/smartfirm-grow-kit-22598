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
        faqs={defaultFAQs}
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
      <section
          className="relative overflow-hidden section-padding pt-32"
          style={{
            background: 'linear-gradient(135deg, #00133d 0%, #002d5c 100%)'
          }}
        >
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            {data.heroTitle}
          </h1>
          <div id="sf-keyword-intro">
            <p className="text-xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-md">
              {data.heroSubtitle}
            </p>
          </div>
          <Button size="lg" variant="secondary" className="group bg-white text-[#243b55] hover:bg-white/90">
            Get Industry-Specific Solutions
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Industry Overview Section */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a2e2e] mb-6">
              Industry Overview
            </h2>
            <p className="text-lg text-[#334155] max-w-4xl mx-auto">
              {data.industryOverview}
            </p>
            <p className="mt-4 text-[#334155] text-center">
              View <a href="/leading-marketing-services-for-accounting-firms" data-sf="internal-add" className="text-[#14b8a6] hover:text-[#2dd4bf] underline">our services</a>, explore <a href="/case-studies" data-sf="internal-add" className="text-[#14b8a6] hover:text-[#2dd4bf] underline">success stories</a>, or learn from <a href="https://www.aicpa.org" data-sf="external-add" target="_blank" rel="noopener noreferrer" className="text-[#14b8a6] hover:text-[#2dd4bf] underline">AICPA best practices</a>.
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
      <section className="bg-[#f8fafc] section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a2e2e] mb-4">
              Common Challenges & Our Solutions
            </h2>
          </div>
          <div className="grid gap-6">
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
                  <div className="bg-[#14b8a6]/5 p-4 rounded-lg">
                    <h3 className="font-semibold text-[#14b8a6] mb-2">Our Solution:</h3>
                    <p className="text-muted-foreground">{challenge.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a2e2e] mb-4">
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
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
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
      <section className="bg-[#f8fafc] section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a2e2e] mb-4">
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
                      <CardTitle className="text-lg">{study.title}</CardTitle>
                      <CardDescription>{study.client}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{study.result}</p>
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
      <section id="sf-faqs" className="bg-gradient-to-br from-[#243b55] to-[#4a7ba7] section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {defaultFAQs.map((faq, index) => (
              <details key={index} className="border border-white/20 rounded-lg p-4 bg-white">
                <summary className="cursor-pointer font-medium text-[#1e293b]">{faq.question}</summary>
                <div className="text-[#334155] mt-2">{faq.answer}</div>
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
      <section 
        className="relative text-white overflow-hidden section-padding"
        style={{
          background: 'linear-gradient(135deg, #00133d 0%, #002d5c 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{data.ctaTitle}</h2>
          <p className="text-xl text-white/90 mb-8">{data.ctaDescription}</p>
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
