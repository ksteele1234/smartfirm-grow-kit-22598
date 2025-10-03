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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  ArrowRight,
  Search,
  HelpCircle,
  MessageSquare,
  Phone,
  Mail
} from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is AI-powered marketing automation for accounting firms?",
          answer: "AI-powered marketing automation uses intelligent software to streamline, automate, and optimize marketing workflows. Examples include automated lead follow-up, predictive email campaigns, client onboarding sequences, review generation, and social media scheduling — all designed for accountants, CPAs, and bookkeepers."
        },
        {
          question: "How do I know if my accounting firm needs marketing automation?",
          answer: "If you're spending hours manually following up with leads, struggling to stay consistent with client communication, or losing prospects to competitors, automation can help. Most firms benefit if they want to grow beyond current capacity or improve efficiency."
        },
        {
          question: "What's the typical ROI for accounting firm marketing automation?",
          answer: "While results vary, most firms see measurable improvements within the first quarter — including time saved, more consistent lead follow-up, and stronger client retention. The real ROI comes from freeing up staff time and converting more prospects into paying clients."
        },
        {
          question: "How long does it take to implement marketing automation?",
          answer: "Most firms can have their systems operational within 30 days. This includes lead capture, email sequences, CRM setup, and staff training. We also work around tax season and busy deadlines to minimize disruption."
        }
      ]
    },
    {
      category: "Services & Solutions",
      questions: [
        {
          question: "What marketing services do you provide for CPAs?",
          answer: "Our services include automated lead follow-up, email marketing, SEO for accountants, social media management, client review generation, website design, and reputation management. All solutions are tailored to accounting professionals."
        },
        {
          question: "Do you integrate with accounting software like QuickBooks?",
          answer: "Yes. We integrate with QuickBooks, Xero, Drake, Lacerte, and practice management systems like Karbon, Canopy, and CCH to ensure smooth workflows."
        },
        {
          question: "Can you help with local SEO for my practice?",
          answer: "Absolutely. We optimize your Google Business Profile, implement local keyword strategies, build citations, and create location-specific content so you rank higher in local searches."
        },
        {
          question: "Do you provide website design for accounting firms?",
          answer: "Yes. We design mobile-responsive, SEO-ready websites with lead capture forms, service pages, and client portals. Every site is optimized for compliance and professionalism."
        }
      ]
    },
    {
      category: "Industry Specific",
      questions: [
        {
          question: "Do you work with solo practitioners or just large firms?",
          answer: "We work with firms of all sizes — from solo CPAs to practices with dozens of staff. Our solutions are scalable, cost-effective for small practices, and robust enough for larger firms."
        },
        {
          question: "Can you help specialized practices like tax preparation or bookkeeping?",
          answer: "Yes. We tailor our strategies for tax preparers, bookkeepers, business advisory services, audit and assurance firms, and other specialized practices."
        },
        {
          question: "How do you handle compliance and professional standards?",
          answer: "All solutions comply with AICPA guidelines, state board rules, and professional ethics. We maintain compliance while delivering effective marketing outcomes."
        },
        {
          question: "Do you understand the seasonal nature of accounting practices?",
          answer: "Yes. We adjust campaigns for tax season, quarterly deadlines, and year-end periods, ensuring messaging stays relevant without overwhelming your team."
        }
      ]
    },
    {
      category: "Technology & Integration",
      questions: [
        {
          question: "How secure are your systems?",
          answer: "Security is critical. We provide encrypted communications, secure portals, GDPR compliance, and regular audits — exceeding typical accounting industry standards."
        },
        {
          question: "Can you help migrate from our current tools?",
          answer: "Yes. We manage full migrations from legacy systems or email tools, ensuring data integrity and minimal disruption."
        },
        {
          question: "Do you provide training?",
          answer: "Yes. We include full onboarding and ongoing training, offered remotely or on-site, so your team feels confident using the new systems."
        }
      ]
    },
    {
      category: "Pricing & Support",
      questions: [
        {
          question: "How much does marketing automation cost for accounting firms?",
          answer: "Pricing depends on firm size, services, and complexity. Our Quick Start Package begins at $4999, with ongoing monthly monitoring and support for $999. We'll provide a clear proposal during your consultation."
        },
        {
          question: "Do you offer ongoing support?",
          answer: "Yes. We include monthly optimization, performance reporting, and unlimited technical support. We continuously improve your systems for long-term growth."
        },
        {
          question: "What if marketing automation doesn't work for my firm?",
          answer: "Our approach is built specifically for accounting firms. We measure performance, share clear reports, and adjust strategies as needed until you achieve sustainable growth."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  // Flatten all FAQs for structured data
  const allFAQs = faqCategories.flatMap(category => category.questions);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Frequently Asked Questions | Marketing Automation for Accounting Firms"
        description="Get answers to common questions about marketing automation, SEO, CRM integration, and growth strategies for accountants, CPAs, bookkeepers, and tax preparers."
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
        <section className="py-20 md:py-28 bg-gradient-to-br from-background to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">
              Frequently Asked Questions for Accounting Firm Marketing Automation
            </h1>
            <div id="sf-keyword-intro">
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed">
                Get answers to common questions about marketing automation, technology solutions, and growth strategies for accounting firms. Whether you're working with AICPA standards or integrating with platforms like QuickBooks, SmartFirm provides solutions designed specifically for CPAs, bookkeepers, and tax professionals.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </section>

        {/* Introduction Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                SmartFirm specializes in helping accounting firms use technology and automation to grow. Our solutions follow professional standards while delivering measurable results. We understand the unique challenges accountants face and provide clear, practical answers to help you make informed decisions.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 flex items-center">
                    <HelpCircle className="h-6 w-6 mr-3" />
                    {category.category}
                  </h2>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${categoryIndex}-${index}`}
                        className="border border-border rounded-lg px-6 bg-background"
                      >
                        <AccordionTrigger className="text-left text-sm">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}

              {filteredFAQs.length === 0 && searchTerm && (
                <div className="text-center py-16">
                  <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
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
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Can't find the answer you're looking for? Our team of accounting firm marketing experts is here to help.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="text-center p-6">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Live Chat</CardTitle>
                    <CardDescription>
                      Chat with our experts in real-time
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Start Chat
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Phone Support</CardTitle>
                    <CardDescription>
                      Speak directly with our team
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="tel:5416583789">(541) 658-3789</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Email Support</CardTitle>
                    <CardDescription>
                      Get detailed answers via email
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="mailto:contact@smartfirm.io">Send Email</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Button size="lg" variant="hero" asChild>
                <a href="/get-started">
                  Get Started Today
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