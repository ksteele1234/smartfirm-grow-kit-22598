import { useEffect } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, CheckCircle, Users, Target, Zap } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import SEO from "@/components/SEO";

const Contact = () => {
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
        title="Contact Us | SmartFirm"
        description="Transform your accounting firm's marketing. Speak with experts who understand the challenges of accounting practices."
        pageType="default"
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact Us", url: "/contact" }
        ]}
        faqs={[
          {
            question: "How do I get started?",
            answer: "Book a free strategy call to discuss your firm's specific needs and goals. Simply fill out our contact form or call us directly at (541) 658-3789."
          },
          {
            question: "What is the pricing structure?",
            answer: "Pricing is customized based on your firm size and specific requirements. Contact us for a detailed quote tailored to your needs."
          },
          {
            question: "Do you offer guarantees?",
            answer: "We stand behind our work with clear success metrics and ongoing support to ensure your satisfaction."
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
      <script id="sf-breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${window.location.origin}/` },
            { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": window.location.href }
          ]
        })}
      </script>
      
      <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-teal pt-32 pb-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
            Contact SmartFirm
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your accounting firm's marketing? Get in touch with our team of experts who understand the unique challenges of accounting practices.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 max-w-7xl mx-auto">
            
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-text-secondary mb-8">
                  Whether you're ready to get started or just have questions about our services, we're here to help. Our team specializes in marketing solutions designed specifically for accounting firms.
                </p>
                <p className="text-text-secondary">
                  Read <a href="/case-studies" data-sf="internal-add" className="text-primary hover:underline">success stories</a>, view <a href="/services" data-sf="internal-add" className="text-primary hover:underline">our services</a>, or explore <a href="https://www.aicpa.org" data-sf="external-add" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AICPA resources</a>.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                     <div>
                        <h3 className="font-heading font-semibold text-primary">Phone</h3>
                        <p className="text-text-secondary">(541) 658-3789</p>
                        <p className="text-sm text-text-light">Monday - Friday: 9 AM - 6 PM PST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-primary">Email</h3>
                        <p className="text-text-secondary">contact@smartfirm.io</p>
                        <p className="text-sm text-text-light">We respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-primary">Location</h3>
                        <p className="text-text-secondary">Eugene, OR</p>
                        <p className="text-sm text-text-light">Serving accounting firms nationwide</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg flex items-center justify-center">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-primary">Business Hours</h3>
                        <div className="text-text-secondary">
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
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-primary">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-text-secondary">
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
                      data-form-name="Lovable Contact Us"  
                      data-height="879"  
                      data-layout-iframe-id="inline-R9iCUNna996pH7StYk0b"  
                      data-form-id="R9iCUNna996pH7StYk0b"  
                      title="Lovable Contact Us"  
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact SmartFirm Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">
              Why Choose SmartFirm for Your Accounting Practice?
            </h2>
            <p className="text-lg text-text-secondary mb-12 text-center">
              When you contact SmartFirm, you're reaching out to a team that specializes exclusively in helping accounting firms grow. Here's what makes us different:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Industry-Specific Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary">
                    We work exclusively with accounting firms, so we understand your unique challenges, compliance requirements, and growth opportunities. Our solutions are tailored specifically for CPAs, bookkeepers, and tax professionals.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Proven Track Record</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary">
                    Our clients typically see 250% more qualified leads, save 15+ hours per week, and achieve positive ROI within 90 days. We have a proven process that delivers measurable results for accounting practices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Comprehensive Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary">
                    From initial consultation to ongoing optimization, we provide dedicated support at every step. You'll work with a team that's committed to your firm's long-term success and growth.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Fast Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary">
                    We respect your busy schedule. Most systems are fully operational within 30 days, and we work around tax season or other peak periods to minimize disruption to your practice.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="sf-faqs" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <details className="group border border-border rounded-lg p-6 bg-background">
                <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex items-center justify-between">
                  How do I get started?
                  <span className="ml-2 transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-text-secondary leading-relaxed">
                  Book a free strategy call to discuss your firm's specific needs and goals. Simply fill out our contact form or call us directly at (541) 658-3789. We'll schedule a convenient time to understand your challenges and recommend the best path forward.
                </p>
              </details>

              <details className="group border border-border rounded-lg p-6 bg-background">
                <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex items-center justify-between">
                  What is the pricing structure?
                  <span className="ml-2 transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-text-secondary leading-relaxed">
                  Pricing is customized based on your firm size and specific requirements. We offer packages for solo practitioners, small firms, and larger practices. Contact us for a detailed quote tailored to your needs and budget.
                </p>
              </details>

              <details className="group border border-border rounded-lg p-6 bg-background">
                <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex items-center justify-between">
                  Do you offer guarantees?
                  <span className="ml-2 transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-text-secondary leading-relaxed">
                  We stand behind our work with clear success metrics and ongoing support to ensure your satisfaction. We track key performance indicators and make continuous optimizations to ensure you achieve your growth goals.
                </p>
              </details>
            </div>
          </div>
        </div>
        <script id="sf-faq-jsonld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I get started?",
                "acceptedAnswer": { "@type": "Answer", "text": "Book a free strategy call to discuss your firm's specific needs and goals. Simply fill out our contact form or call us directly at (541) 658-3789." }
              },
              {
                "@type": "Question",
                "name": "What is the pricing structure?",
                "acceptedAnswer": { "@type": "Answer", "text": "Pricing is customized based on your firm size and specific requirements. Contact us for a detailed quote tailored to your needs." }
              },
              {
                "@type": "Question",
                "name": "Do you offer guarantees?",
                "acceptedAnswer": { "@type": "Answer", "text": "We stand behind our work with clear success metrics and ongoing support to ensure your satisfaction." }
              }
            ]
          })}
        </script>
      </section>

      </main>

      <Footer />
    </div>
  );
};

export default Contact;