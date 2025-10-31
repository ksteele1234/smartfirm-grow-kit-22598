import { ReactNode } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";
import FaqAnswer from "@/components/faq/FaqAnswer";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

interface ToolPageWrapperProps {
  title: string;
  description: string;
  pageTitle: string;
  intro?: string;
  children: ReactNode;
  faqs?: Array<{ question: string; answer: string }>;
}

const defaultFAQs = [
  {
    question: "How do these tools help my accounting firm?",
    answer: "Our free tools & calculators provide data-driven insights into your firm's efficiency, marketing ROI, and growth potential, helping you make informed decisions about where to invest your time and resources."
  },
  {
    question: "Are these assessments really free?",
    answer: "Yes, all our assessment tools are completely free with no obligation. We designed them to help accounting firms identify opportunities for improvement."
  },
  {
    question: "How long do the assessments take?",
    answer: "Most assessments take between 2-5 minutes to complete and provide instant results with personalized recommendations."
  },
  {
    question: "What happens after I complete an assessment?",
    answer: "You'll receive immediate results with actionable recommendations. Optionally, you can Book a Free Call to discuss your results and explore how SmartFirm can help implement improvements."
  }
];

export const ToolPageWrapper = ({
  title,
  description,
  pageTitle,
  intro,
  children,
  faqs = defaultFAQs
}: ToolPageWrapperProps) => {
  return (
    <div className="min-h-screen bg-background" data-sf-fixed="headings entities">
      <SEO
        title={title}
        description={description}
        pageType="default"
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Free Tools & Calculators", url: "/tools" },
          { name: pageTitle, url: window.location.pathname }
        ]}
        faqs={faqs}
      />
      <Header />
      
      {/* Breadcrumb */}
      <nav id="sf-breadcrumbs" className="bg-background-light border-b" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 lg:px-6 py-1.5">
          <Breadcrumb>
            <BreadcrumbList className="text-sm text-muted-foreground">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/tools">Free Tools & Calculators</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
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
            { "@type": "ListItem", "position": 2, "name": "Free Tools & Calculators", "item": `${window.location.origin}/tools` },
            { "@type": "ListItem", "position": 3, "name": pageTitle, "item": window.location.href }
          ]
        })}
      </script>

      <main className="py-8">
        <section className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center">{pageTitle}</h1>
          </div>
        </section>
        {/* Keyword Intro Section */}
        {intro && (
          <section className="py-8 bg-gradient-to-br from-background to-muted/30">
            <div className="container mx-auto px-4">
              <div id="sf-keyword-intro" className="max-w-text-lg mx-auto text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {intro}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
                  <span>Trusted by accounting professionals</span>
                  <span>•</span>
                  <span>View our <a href="/leading-marketing-services-for-accounting-firms" data-sf="internal-add" className="text-primary hover:underline">services</a></span>
                  <span>•</span>
                  <span>Read <a href="/success-stories" data-sf="internal-add" className="text-primary hover:underline">success stories</a></span>
                  <span>•</span>
                  <span>Trusted by <a href="https://www.aicpa.org" data-sf="external-add" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AICPA members</a></span>
                </div>
              </div>
            </div>
          </section>
        )}

        {children}

        {/* FAQ Section */}
        <section id="sf-faqs" className="py-16 md:py-section bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-text-md mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <details key={index} className="group border border-border rounded-card-sm p-card-sm bg-background">
                    <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <span className="ml-2 transform group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <FaqAnswer
                      text={faq.answer}
                      paragraphClassName="mt-4 text-muted-foreground leading-relaxed"
                    />
                  </details>
                ))}
              </div>
            </div>
          </div>
          <script id="sf-faq-jsonld" type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
              }))
            })}
          </script>
          <script id="sf-entity-jsonld" type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": title,
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "provider": {
                "@type": "Organization",
                "name": "SmartFirm",
                "url": typeof window !== 'undefined' ? window.location.origin : 'https://smartfirm.io'
              }
            })}
          </script>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ToolPageWrapper;
