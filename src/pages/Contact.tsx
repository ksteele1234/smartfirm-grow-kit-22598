import { useEffect, useState } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, CheckCircle, ChevronDown } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import FaqAnswer from "@/components/faq/FaqAnswer";
import SEO from "@/components/SEO";

const Contact = () => {
  const [openFaqItem, setOpenFaqItem] = useState<number | null>(null);
  
  useEffect(() => {
    // Load the form script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background" data-sf-fixed="headings entities">
      <SEO
        title="Contact SmartFirm | Firm Automation & Growth Systems"
        description="Contact SmartFirm to learn about firm automation, workflow optimization, and growth systems for accounting firms. Schedule a consultation today."
        pageType="default"
        noindex={false}
        dateModified={new Date().toISOString()}
        organizationType="ProfessionalService"
        showContactInfo={true}
        showAddress={true}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact Us", url: "/contact" }
        ]}
        faqs={[
          {
            question: "How do I get started?",
            answer: "Book a Free Call. We'll learn about your firm's goals, challenges, and needs, then create a custom plan tailored to your practice."
          },
          {
            question: "What is the pricing structure?",
            answer: "Pricing is customized based on firm size and requirements. We offer flexible packages for solo practitioners, small firms, and larger practices. After your strategy call, we'll provide a clear proposal that fits your goals and budget."
          },
          {
            question: "Do you offer guarantees?",
            answer: "We don't believe in one-size-fits-all promises. Instead, we align on measurable success metrics with you, then provide ongoing support and continuous optimization to help you reach them."
          },
          {
            question: "How quickly can we launch?",
            answer: "We can typically have your core marketing automation up and running in under 30 days. We'll start by optimizing your website and Google Business Profile to build the base you need to succeed."
          },
          {
            question: "Do you only work with accounting firms?",
            answer: "Our focus is accountants, CPAs, bookkeepers, and tax preparers. However, our team's 40+ years of combined experience across multiple industries means we bring proven business and marketing expertise into every engagement."
          }
        ]}
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
                <BreadcrumbPage>Contact Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
      
      <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-deep-teal pt-32 pb-24 pb-32 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden z-0" style={{ backgroundImage: 'url(/assets/page-header-background.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 text-background">
          <svg className="relative block w-full h-[80px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 drop-shadow-lg">
            Contact SmartFirm for Firm Automation & Growth Systems
          </h1>
          <div id="sf-keyword-intro">
            <p className="text-xl text-white/95 max-w-text-lg mx-auto leading-relaxed drop-shadow-md">
              Ready to hire a marketing agency for accounting firms that understands compliance, deadlines, and growth? Contact SmartFirm today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 max-w-container-3xl mx-auto">
            
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're comparing accounting firm marketing services pricing or ready to launch a complete growth campaign, our team provides clarity, guidance, and results.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <Card className="elevation-1 card-interactive">
                  <CardContent className="p-6">
                     <div className="flex items-center space-x-4">
                       <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg flex items-center justify-center">
                         <Phone className="h-6 w-6 text-primary" />
                       </div>
                      <div>
                         <h3 className="font-heading font-semibold text-primary">Phone</h3>
                         <p className="text-muted-foreground">(541) 658-3789</p>
                         <p className="text-sm text-muted-foreground">Monday–Friday: 9 AM–6 PM PT</p>
                       </div>
                     </div>
                  </CardContent>
                </Card>

                <Card className="elevation-1 card-interactive">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-primary">Email</h3>
                        <p className="text-muted-foreground">contact@smartfirm.io</p>
                        <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="elevation-1 card-interactive">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                         <h3 className="font-heading font-semibold text-primary">Location</h3>
                         <p className="text-muted-foreground">Eugene, OR</p>
                         <p className="text-sm text-muted-foreground">Serving accounting firms across the United States.</p>
                       </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="elevation-1 card-interactive">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg flex items-center justify-center">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-primary">Business Hours</h3>
                        <div className="text-muted-foreground">
                          <div>Monday - Friday: 9 AM - 6 PM</div>
                          <div>Saturday - Sunday: Closed</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="elevation-1 card-interactive">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-primary">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="min-h-[600px]">
                    <iframe  
                      src="https://api.leadconnectorhq.com/widget/form/R9iCUNna996pH7StYk0b"  
                      style={{width: '100%', height: '100%', border: 'none', borderRadius: '3px', minHeight: '600px'}}
                      id="inline-R9iCUNna996pH7StYk0b"   
                      data-layout="{'id':'INLINE'}"  
                      data-trigger-type="alwaysShow"  
                      data-trigger-value=""  
                      data-activation-type="alwaysActivated"  
                      data-activation-value=""  
                      data-deactivation-type="neverDeactivate"  
                      data-deactivation-value=""  
                      data-form-name="SmartFirm Contact Form"  
                      data-height="879"  
                      data-layout-iframe-id="inline-R9iCUNna996pH7StYk0b"  
                      data-form-id="R9iCUNna996pH7StYk0b"  
                      title="SmartFirm Contact Form"  
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SmartFirm Section */}
      <section className="py-section md:py-28 bg-background-light">
        <div className="container mx-auto px-6">
          <div className="max-w-text-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
              Why Choose SmartFirm for Your Accounting Practice?
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-16">
              When you contact SmartFirm, you're reaching out to a team that specializes in helping accountants, CPAs, bookkeepers, and tax preparers grow with marketing automation and modern systems. Here's what sets us apart:
            </p>

            <div className="space-y-8">
              <Card className="elevation-1 card-interactive">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                        Industry-Specific Expertise
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We focus on accounting firms, so we understand your compliance needs, workflows, and growth goals. Our solutions are built for CPAs, bookkeepers, and tax professionals, not generic small businesses, this gives us (and our customers) and edge over the competition.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="elevation-1 card-interactive">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                        Experience You Can Trust
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        With 40+ years of combined experience and 50+ companies supported across industries, we know what it takes to help firms implement systems that generate leads, improve client retention, and scale efficiently.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="elevation-1 card-interactive">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                        Comprehensive Support
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        From your first consultation to long-term optimization, you'll have a dedicated team guiding you every step of the way. We don't disappear after launch, we continuously refine and improve your systems to keep you growing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="elevation-1 card-interactive">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                        Fast Implementation
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We respect your time. Most systems are fully operational in under 30 days, and we work around busy tax seasons or reporting periods to minimize disruption to your practice.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="sf-faqs" className="py-[100px] md:py-[80px] bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-container-lg mx-auto space-y-4">
            {[
              {
                question: "How do I get started?",
                answer: "Book a Free Call. We'll learn about your firm's goals, challenges, and needs, then create a custom plan tailored to your practice."
              },
              {
                question: "What is the pricing structure?",
                answer: "Pricing is customized based on firm size and requirements. We offer flexible packages for solo practitioners, small firms, and larger practices. After your strategy call, we'll provide a clear proposal that fits your goals and budget."
              },
              {
                question: "Do you offer guarantees?",
                answer: "We don't believe in one-size-fits-all promises. Instead, we align on measurable success metrics with you, then provide ongoing support and continuous optimization to help you reach them."
              },
              {
                question: "How quickly can we launch?",
                answer: "We can typically have your core marketing automation up and running in under 30 days. We'll start by optimizing your website and Google Business Profile to build the base you need to succeed."
              },
              {
                question: "Do you only work with accounting firms?",
                answer: "Our focus is accountants, CPAs, bookkeepers, and tax preparers. However, our team's 40+ years of combined experience across multiple industries means we bring proven business and marketing expertise into every engagement."
              }
            ].map((faq, index) => {
              const isOpen = openFaqItem === index;
              
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl elevation-1 hover:elevation-2 card-interactive transition-shadow duration-200"
                >
                  <button
                    onClick={() => setOpenFaqItem(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer group"
                  >
                    <span className="text-lg font-semibold text-secondary group-hover:text-primary transition-colors duration-200">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden color-transition ${
                      isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <FaqAnswer
                        text={faq.answer}
                        paragraphClassName="text-base text-foreground leading-[1.7]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  );
};

export default Contact;
