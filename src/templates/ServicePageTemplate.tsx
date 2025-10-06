import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ServicePageData } from "@/types/cms";
import { CheckCircle, ArrowRight } from "lucide-react";
import { GeometricDivider, FloatingShapes, BackgroundPattern } from "@/components/ui/visual-accents";
import { StandardCard } from "@/components/ui/standard-card";
import { 
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import SEO from "@/components/SEO";

interface ServicePageTemplateProps {
  data: ServicePageData;
}

const ServicePageTemplate = ({ data }: ServicePageTemplateProps) => {
  const defaultFAQs = [
    {
      question: "How long does implementation take?",
      answer: "Most service implementations are completed within 2-4 weeks, with initial results visible in the first month."
    },
    {
      question: "What integrations are supported?",
      answer: "We integrate with leading accounting platforms including QuickBooks, Xero, and popular CRM systems."
    },
    {
      question: "Is training included?",
      answer: "Yes, we provide comprehensive onboarding and training for your team to ensure smooth adoption."
    }
  ];

  return (
    <div className="min-h-screen bg-background" data-sf-fixed="headings entities">
      <SEO
        pageType="service"
        serviceName={data.title.replace(' for Accounting Firms', '').replace(' for Finance Firms', '')}
        audience="accounting firms"
        title={data.title}
        description={(data.heroDescription || data.heroSubtitle).substring(0, 155)}
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: data.title.replace(' for Accounting Firms', '').replace(' | SmartFirm', ''), url: window.location.pathname }
        ]}
        faqs={defaultFAQs}
      />
      <Header />
      
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
                <BreadcrumbLink href="/services">Services</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{data.title.replace(' for Accounting Firms', '').replace(' | SmartFirm', '')}</BreadcrumbPage>
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
            { "@type": "ListItem", "position": 2, "name": "Services", "item": `${window.location.origin}/services` },
            { "@type": "ListItem", "position": 3, "name": data.title.replace(' for Accounting Firms', '').replace(' | SmartFirm', ''), "item": window.location.href }
          ]
        })}
      </script>
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#647FBC] via-[#4D869C] to-[#7AB2B2] overflow-hidden">
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg className="relative block w-full h-[80px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-[1.2]">
                {data.heroTitle}
              </h1>
              <div id="sf-keyword-intro">
                <p className="text-xl text-white/95 mb-6 drop-shadow-md">
                  {data.heroSubtitle}
                </p>
              </div>
              <p className="text-lg text-white/90 mb-8 drop-shadow-md">
                {data.heroDescription}
              </p>
              <p className="text-white/85 mb-8 drop-shadow-md">
                Discover <a href="/solutions" data-sf="internal-add" className="text-white underline hover:text-white/80">our solutions</a>, read <a href="/case-studies" data-sf="internal-add" className="text-white underline hover:text-white/80">client success stories</a>, or learn from <a href="https://www.aicpa.org" data-sf="external-add" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80">AICPA resources</a>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="group bg-white text-[#647FBC] hover:bg-white/90">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                  Learn More
                </Button>
              </div>
            </div>
            {data.heroImage && (
              <div className="relative">
                <img 
                  src={data.heroImage} 
                  alt={data.heroTitle}
                  className="rounded-lg shadow-xl"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 relative">
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
            "description": data.heroDescription
          })}
        </script>
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