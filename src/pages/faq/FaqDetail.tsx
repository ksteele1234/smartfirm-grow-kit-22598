import { useParams, Link } from "react-router-dom";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { getFaqBySlug, getRelatedFaqs } from "@/data/faqContent";
import FaqAnswer from "@/components/faq/FaqAnswer";
import { ArrowLeft, ArrowRight, HelpCircle } from "lucide-react";
import NotFound from "@/pages/NotFound";

const FaqDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <NotFound />;
  }

  const result = getFaqBySlug(slug);

  if (!result) {
    return <NotFound />;
  }

  const { faq, category } = result;
  const relatedFaqs = getRelatedFaqs(slug, 3);

  // Generate QAPage structured data
  const qaSchema = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": faq.question,
      "text": faq.question,
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "upvoteCount": 0
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${faq.question} | SmartFirm FAQ`}
        description={faq.answer.slice(0, 155) + "..."}
        pageType="faq"
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq/" },
          { name: category.category, url: `/faq/#${category.slug}` },
          { name: faq.question.slice(0, 50), url: `/faq/${slug}/` }
        ]}
      />

      {/* Inject QAPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(qaSchema) }}
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
                <BreadcrumbLink href="/faq/">FAQ</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/faq/#${category.slug}`}>{category.category}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="max-w-[200px] truncate">{faq.question}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>

      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-container-md mx-auto">
            {/* Back link */}
            <Link
              to="/faq/"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all FAQs
            </Link>

            {/* Category badge */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                {category.category}
              </span>
            </div>

            {/* Question */}
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 leading-tight">
              {faq.question}
            </h1>

            {/* Answer */}
            <div className="prose prose-lg max-w-none mb-12">
              <FaqAnswer
                text={faq.answer}
                paragraphClassName="text-lg text-foreground leading-relaxed mb-4"
                linkClassName="text-accent hover:underline"
              />
            </div>

            {/* Related Questions */}
            {relatedFaqs.length > 0 && (
              <div className="border-t pt-12 mt-12">
                <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
                  <HelpCircle className="h-6 w-6" />
                  Related Questions
                </h2>
                <div className="space-y-4">
                  {relatedFaqs.map((relatedFaq) => (
                    <Link
                      key={relatedFaq.slug}
                      to={`/faq/${relatedFaq.slug}/`}
                      className="block p-4 bg-background-light border rounded-lg hover:border-accent transition-colors group"
                    >
                      <span className="text-foreground group-hover:text-accent transition-colors font-medium">
                        {relatedFaq.question}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="border-t pt-12 mt-12">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Still have questions?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Book a free strategy call to discuss your accounting firm's unique needs.
                </p>
                <Button size="lg" variant="hero" asChild>
                  <Link to="/get-started/">
                    Book a Free Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FaqDetail;
