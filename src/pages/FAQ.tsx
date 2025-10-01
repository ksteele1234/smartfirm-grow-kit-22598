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
          answer: "AI-powered marketing automation for accounting firms involves using intelligent software and predictive technology to streamline, automate, and optimize marketing tasks and workflows. This includes AI-driven lead follow-up with behavioral triggers, predictive email campaigns, automated client onboarding sequences, intelligent review generation, and smart social media management - all specifically designed for CPAs, bookkeepers, and accounting professionals using data-driven insights."
        },
        {
          question: "How do I know if my accounting firm needs marketing automation?",
          answer: "If you're spending hours manually following up with leads, struggling to stay consistent with client communication, losing prospects to competitors, or feeling overwhelmed by marketing tasks, automation can help. Most accounting firms benefit if they want to grow beyond their current capacity or improve efficiency."
        },
        {
          question: "What's the typical ROI for accounting firm marketing automation?",
          answer: "Our clients typically see 250% more qualified leads, 150% better conversion rates, and save 15+ hours per week on manual tasks. Most accounting firms achieve positive ROI within 90 days, with many doubling their revenue within 12 months of implementation."
        },
        {
          question: "How long does it take to implement marketing automation?",
          answer: "Most accounting firms see their marketing automation systems fully operational within 30 days. Your website should be up sooner, then we build the automations around that. This includes lead generation setup, email sequences, CRM integration, and staff training. We work around your schedule to minimize disruption during tax season or busy periods."
        }
      ]
    },
    {
      category: "Services & Solutions",
      questions: [
        {
          question: "What marketing services do you provide specifically for CPAs?",
          answer: "We provide comprehensive marketing automation including automated lead follow-up, email marketing campaigns, SEO for accountants, social media management, client review generation, website design, and online reputation management. All services are tailored specifically for CPAs and accounting professionals."
        },
        {
          question: "Do you integrate with accounting software like QuickBooks?",
          answer: "Yes, we integrate seamlessly with QuickBooks, Xero, Drake, Lacerte, and popular practice management systems like Karbon, Canopy, and CCH. This ensures your marketing data flows directly into your existing workflows and client management systems."
        },
        {
          question: "Can you help with local SEO for my accounting practice?",
          answer: "Absolutely. Local SEO is crucial for accounting firms. We optimize your Google Business Profile, implement local keyword strategies, build local citations, and create location-specific content to help you rank higher when potential clients search for accountants in your area."
        },
        {
          question: "Do you provide website design for accounting firms?",
          answer: "Yes, we design modern, mobile-responsive websites specifically for accounting firms. Our websites include lead capture forms, client portals, service pages, and are optimized for search engines. All designs comply with professional standards and include necessary disclaimers."
        }
      ]
    },
    {
      category: "Industry Specific",
      questions: [
        {
          question: "Do you work with solo practitioners or just large firms?",
          answer: "We work with accounting practices of all sizes, from solo CPAs to firms with 50+ employees. Our solutions are scalable and can be customized for solo practitioners who need efficient, cost-effective automation or large firms requiring enterprise-level systems."
        },
        {
          question: "Can you help specialized practices like tax preparation or bookkeeping?",
          answer: "Yes, we have extensive experience with specialized practices including tax preparation, bookkeeping services, forensic accounting, wealth management, audit & assurance, and business advisory services. We tailor our approach to your specific niche and client base."
        },
        {
          question: "How do you handle compliance and professional standards?",
          answer: "All our marketing solutions comply with AICPA guidelines, state board regulations, and professional standards. We understand the unique compliance requirements for CPAs and ensure all communications maintain professional integrity while being effective at generating leads."
        },
        {
          question: "Do you understand the seasonal nature of accounting practices?",
          answer: "Absolutely. We understand tax season demands, quarterly deadlines, and year-end pressures. Our automation systems can adjust messaging and timing based on seasonal needs, ensuring appropriate communication throughout the year while respecting busy periods."
        }
      ]
    },
    {
      category: "Technology & Integration",
      questions: [
        {
          question: "What CRM systems do you recommend for accounting firms?",
          answer: "We work with various CRM systems including HubSpot, Pipedrive, and accounting-specific solutions like Karbon and Canopy. We'll recommend the best option based on your firm size, needs, and existing technology stack."
        },
        {
          question: "How secure are your marketing automation systems?",
          answer: "Security is paramount for accounting firms. We implement enterprise-grade security including encrypted communications, secure client portals, GDPR compliance, and regular security audits. All systems meet or exceed accounting industry security standards."
        },
        {
          question: "Can you help migrate from our current marketing tools?",
          answer: "Yes, we provide complete migration services from your existing marketing tools, CRM systems, or email platforms. We ensure no data is lost and minimize disruption to your ongoing marketing efforts during the transition."
        },
        {
          question: "Do you provide training for our team?",
          answer: "Comprehensive training is included with all implementations. We provide both initial training and ongoing support to ensure your team is comfortable using the new systems. Training can be conducted remotely or on-site based on your preference."
        }
      ]
    },
    {
      category: "Pricing & Support",
      questions: [
        {
          question: "How much does marketing automation cost for accounting firms?",
          answer: "Pricing varies based on firm size, services needed, and complexity. We offer packages starting from basic automation for solo practitioners to comprehensive enterprise solutions. Contact us for a custom quote based on your specific needs and goals."
        },
        {
          question: "Do you offer ongoing support after implementation?",
          answer: "Yes, ongoing support is crucial for success. We provide monthly optimization, performance reporting, strategy adjustments, unlimited technical support, and regular check-ins to ensure your systems continue delivering results."
        },
        {
          question: "What if the marketing automation doesn't work for my firm?",
          answer: "We're confident in our approach because it's specifically designed for accounting firms. We provide detailed performance tracking and regular optimization. If you're not seeing results, we'll adjust the strategy until you achieve your goals."
        },
        {
          question: "Can I cancel or modify my services?",
          answer: "Yes, our contracts are flexible. You can modify services as your needs change or cancel with appropriate notice. We want long-term partnerships, so we work with you to ensure our services continue meeting your firm's evolving needs."
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
        title="Frequently Asked Questions | SmartFirm"
        description="Common questions about SmartFirm's marketing automation, technology solutions, and services for accounting firms."
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
      <div className="bg-background border-b pt-20">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
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
      </div>
      
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-background to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed">
              Get answers to common questions about marketing automation, technology solutions, and growth strategies for accounting firms. Whether you're working with <a href="https://www.aicpa.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AICPA</a> standards or integrating with platforms like <a href="https://quickbooks.intuit.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">QuickBooks</a>, we provide solutions designed specifically for CPAs and accounting professionals.
            </p>
            
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
                SmartFirm specializes in helping accounting firms leverage technology and automation to grow their practices. Our solutions are built on proven methodologies that comply with professional standards while delivering measurable results. We understand the unique challenges accountants face and provide clear, practical answers to help you make informed decisions.
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