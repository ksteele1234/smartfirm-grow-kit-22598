import { Link } from "react-router-dom";
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
import { Input } from "@/components/ui/input";
import { faqCategories, getAllFaqs } from "@/data/faqContent";
import { 
  ArrowRight,
  Search,
  MessageSquare,
  Phone,
  Mail,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import heroWaveBackground from "@/assets/hero-wave-background.webp";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredFAQs = faqCategories
    .map(category => ({
      ...category,
      questions: category.questions.filter(item => {
        if (!normalizedSearch) {
          return true;
        }
        const questionMatch = item.question.toLowerCase().includes(normalizedSearch);
        const answerMatch = item.answer.toLowerCase().includes(normalizedSearch);
        return questionMatch || answerMatch;
      })
    }))
    .filter(category => category.questions.length > 0);

  // All FAQs for structured data
  const allFAQs = getAllFaqs();

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Frequently Asked Questions | Accounting Firm Automation"
        description="Explore SmartFirm FAQs on SEO agency for accountants, PPC services for accounting firms, accounting firm reputation management service, and more."
        pageType="faq"
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" }
        ]}
        faqs={allFAQs}
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
                <BreadcrumbPage>FAQ</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
      
      <main>
        {/* Hero Section */}
        <section 
          className="relative py-16 md:py-section pb-32 md:pb-40 overflow-hidden"
        >
          {/* Hero background image with proper loading */}
          <img
            src={heroWaveBackground}
            alt=""
            role="presentation"
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover -z-10"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent z-0" />
          
          {/* Curved bottom edge */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 text-background">
            <svg className="relative block w-full h-[80px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
            </svg>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="text-display font-bold text-white mb-6 drop-shadow-lg">
              Frequently Asked Questions
            </h1>
            <div id="sf-keyword-intro">
              <p className="text-lead text-white/95 max-w-text-lg mx-auto mb-10 leading-relaxed drop-shadow-md">
                Get answers to common questions about marketing automation, SEO, PPC, and content marketing for accountants.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-text-sm mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted h-5 w-5" />
              <Input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg bg-white/95 backdrop-blur-sm border-white/20"
              />
            </div>
          </div>
        </section>


        {/* FAQ Content - Category-based Index */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-container-lg mx-auto">
              {filteredFAQs.map((category) => (
                <div key={category.slug} id={category.slug} className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    {category.category}
                  </h2>

                  <div className="space-y-3">
                    {category.questions.map((faq) => (
                      <Link
                        key={faq.slug}
                        to={`/faq/${faq.slug}`}
                        className="flex items-center justify-between gap-4 p-4 bg-background border rounded-lg hover:border-accent hover:bg-accent/5 transition-all duration-200 group"
                      >
                        <span className="text-foreground group-hover:text-accent transition-colors font-medium">
                          {faq.question}
                        </span>
                        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-accent flex-shrink-0 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {filteredFAQs.length === 0 && searchTerm && (
                <div className="text-center py-16">
                  <MessageSquare className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    No matching questions found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search terms or browse the categories above.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSearchTerm("")}
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-section md:py-28 bg-background-light">
          <div className="container mx-auto px-4">
            <div className="max-w-text-lg mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Can't find the answer you're looking for? Our team of accounting firm marketing experts is here to help.
              </p>
              
              <div className="grid md:grid-cols-2 gap-md mb-12">
                <div className="bg-background border rounded-xl p-6 text-center elevation-1 hover:elevation-2 transition-shadow">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Phone Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Speak directly with our team
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:5416583789">(541) 658-3789</a>
                  </Button>
                </div>

                <div className="bg-background border rounded-xl p-6 text-center elevation-1 hover:elevation-2 transition-shadow">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Email Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get detailed answers via email
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="mailto:contact@smartfirm.io">Send Email</a>
                  </Button>
                </div>
              </div>

                <Button id="faq-book-call-btn" size="lg" variant="hero" asChild>
                <a href="/get-started">
                  Book a Free Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
