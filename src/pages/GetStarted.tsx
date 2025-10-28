import { useEffect, useState } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { 
  Calendar, 
  Zap, 
  Phone, 
  Users, 
  BookOpen, 
  Handshake,
  ArrowRight,
  CheckCircle2,
  Quote,
  Star,
  Clock,
  Target,
  ChevronDown
} from "lucide-react";
import SEO from "@/components/SEO";
import FaqAnswer from "@/components/faq/FaqAnswer";

const GetStarted = () => {
  const [openFaqItem, setOpenFaqItem] = useState<number | null>(null);
  useEffect(() => {
    // Load the booking script
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
  const engagementOptions = [
    {
      icon: Calendar,
      title: "Free Consultation",
      description: "Discuss your firm's goals with an accountant marketing specialist and walk away with a clear roadmap — no obligation.",
      benefits: ["Personalized strategy session", "Identify growth opportunities", "Custom roadmap for your firm", "No sales pressure"],
      cta: "Book a Call",
      popular: true
    },
    {
      icon: Zap,
      title: "Quick Start Program", 
      description: "Launch fast with our 30-day package, including website refresh, GBP optimization, CRM automations, and an accounting firm lead generation service.",
      benefits: ["Immediate results", "30-day implementation", "Proven growth systems installed", "Fast ROI foundation"],
      details: [
        "Fresh, conversion-focused website (or optimization of existing site)",
        "Google Business Profile setup & optimization for local visibility",
        "CRM setup with automated lead capture & follow-up sequences",
        "Review generation system to build trust",
        "Email nurture campaigns for client retention",
        "Basic SEO optimization to start attracting organic leads"
      ],
      cta: "View Quick Start"
    },
    {
      icon: Phone,
      title: "Contact Us Directly",
      description: "Need answers about marketing packages for CPA firms or SEO strategy? Call or email us anytime.",
      benefits: ["Instant answers", "Multiple contact options", "Expert guidance", "Quick response times"],
      cta: "Contact Us"
    }
  ];

  const supportOptions = [
    {
      icon: BookOpen,
      title: "Client Support & Resources",
      description: "Already a client? Access our knowledge base, tutorials, and client portal for ongoing support.",
      cta: "Visit Support"
    },
    {
      icon: Handshake,
      title: "Explore Partnership Opportunities", 
      description: "Interested in collaborating? Learn about our referral, technology, and joint venture programs.",
      cta: "Become a Partner"
    }
  ];

  return (
    <div className="min-h-screen bg-background" data-sf-fixed="headings entities">
      <SEO
        title="Get Started with Marketing for Accounting Firms | SmartFirm"
        description="Get started with SmartFirm's marketing packages for CPA firms. Choose a free consultation, Quick Start program, or contact us directly."
        pageType="default"
        noindex={false}
        dateModified={new Date().toISOString()}
        organizationType="ProfessionalService"
        showContactInfo={true}
        showAddress={true}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Get Started", url: "/get-started" }
        ]}
        faqs={[
          {
            question: "How do I get started?",
            answer: "Book a free strategy call. We'll evaluate your current situation, understand your firm's goals, and create a custom growth plan."
          },
          {
            question: "What is the pricing structure?",
            answer: "Pricing is customized by firm size, services, and objectives. We offer flexible packages and payment options. You'll receive transparent pricing during your consultation."
          },
          {
            question: "Do you offer guarantees?",
            answer: "We don't make one-size-fits-all guarantees. Instead, we set clear success metrics with you, then continuously optimize to help you achieve them. Most clients see improvements in efficiency and lead flow within the first 90 days."
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
                <BreadcrumbPage>Get Started</BreadcrumbPage>
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
            { "@type": "ListItem", "position": 2, "name": "Get Started", "item": window.location.href }
          ]
        })}
      </script>
      
      <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-teal py-section pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Get Started with Marketing for Your Accounting Firm
          </h1>
          <div id="sf-keyword-intro">
            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-10">
              Whether you're exploring digital marketing for CPA firms or ready for automation, SmartFirm makes it simple to get started.
            </p>
          </div>
        </div>
        <div className="px-4 md:px-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 elevation-1 w-full max-w-container-3xl mx-auto">
              <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/1IIG0vYonSNZxTHPcaZp" 
                style={{width: '100%', border: 'none', overflow: 'hidden', borderRadius: '8px', minHeight: '600px'}}
                scrolling="no" 
                id="KLvW5plbvzaBvLcQYv7k_1759007988370"
                title="Book Your Free Consultation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-section bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every accounting firm is at a different stage of growth. That's why we offer multiple ways to get started, from free consultations to quick-win programs, all so you can move forward at your own pace.
          </p>
        </div>
      </section>

      {/* Engagement Options Section */}
      <section className="py-section bg-background-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Choose Your Starting Point
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the engagement option that best fits your current needs and comfort level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {engagementOptions.map((option, index) => (
              <Card key={index} className={`elevation-1 hover:elevation-2 transition-shadow relative ${option.popular ? 'ring-2 ring-primary' : ''}`}>
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg flex items-center justify-center">
                    <option.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading text-primary">
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-center">
                    {option.description}
                  </p>
                  
                  <div className="space-y-3">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  {option.details && option.details.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <h4 className="text-sm font-semibold text-primary mb-3">Includes:</h4>
                      <ul className="space-y-2">
                        {option.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-2">
                            <div className="dot-accent mt-1.5 flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <Button 
                    className="w-full group" 
                    variant={option.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <a href={option.title === "Quick Start Program" ? "/quick-start-marketing-for-cpa-firms" : option.title === "Contact Us Directly" ? "/contact" : "/get-started"}>
                      {option.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Partnership Options */}
      <section className="py-section bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Additional Resources & Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Already a client or looking for partnership opportunities? We've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supportOptions.map((option, index) => (
              <Card key={index} className="elevation-1 hover:elevation-2 transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg flex items-center justify-center">
                    <option.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-heading text-primary">
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <p className="text-muted-foreground">
                    {option.description}
                  </p>
                  <Button variant="outline" className="group">
                    {option.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-section bg-background-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Client Success Story</Badge>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              See How Others Started Their Journey
            </h2>
          </div>
          
          <Card className="max-w-4xl mx-auto elevation-1">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <Quote className="w-12 h-12 text-primary mb-6" />
                  <blockquote className="text-xl text-foreground mb-6 italic">
                    "I was hesitant about working with a consulting firm, but SmartFirm's free consultation gave me clarity on exactly what I needed to grow. 
                    Within a few months, we streamlined our processes and started seeing consistent client growth. The best decision I made for my practice."
                  </blockquote>
                  <div className="space-y-2">
                    <h4 className="font-heading font-semibold text-primary text-lg">
                      David Martinez
                    </h4>
                    <p className="text-muted-foreground">
                      Owner, Martinez Tax & Accounting Services
                    </p>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-muted-foreground text-sm ml-2">5.0 out of 5</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg p-8 text-center">
                  <Target className="w-16 h-16 text-primary mx-auto mb-4" />
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-heading font-bold text-primary">Streamlined</div>
                      <div className="text-sm text-muted-foreground">Systems in Under 90 Days</div>
                    </div>
                    <div>
                      <div className="text-2xl font-heading font-bold text-primary">Consistent</div>
                      <div className="text-sm text-muted-foreground">New Client Growth</div>
                    </div>
                    <div>
                      <div className="text-2xl font-heading font-bold text-primary">$0</div>
                      <div className="text-sm text-muted-foreground">Upfront Consultation Cost</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-section bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              What Happens After You Get Started?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's a simple overview of our proven process from initial contact to transformation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Initial Contact", description: "Reach out via your preferred method", icon: Phone },
                { step: "02", title: "Discovery Call", description: "We understand your unique challenges", icon: Users },
                { step: "03", title: "Custom Strategy", description: "Receive a tailored action plan", icon: Target },
                { step: "04", title: "Implementation", description: "Execute with ongoing support", icon: CheckCircle2 }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-teal rounded-full flex items-center justify-center text-white font-heading font-bold text-lg">
                      {item.step}
                    </div>
                    <item.icon className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    {index < 3 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-teal transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <h3 className="font-heading font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="sf-faqs" className="py-[100px] md:py-[80px] bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Common Questions About Getting Started
            </h2>
          </div>
          
          <div className="max-w-container-lg mx-auto space-y-4">
            {[
              {
                question: "How do I get started?",
                answer: "Book a free strategy call. We'll evaluate your current situation, understand your firm's goals, and create a custom growth plan."
              },
              {
                question: "What is the pricing structure?",
                answer: "Pricing is customized based on your firm size and specific requirements. We offer flexible packages for solo practitioners, small firms, and enterprise-level practices. Contact us for a detailed quote."
              },
              {
                question: "Do you offer guarantees?",
                answer: "We don't make one-size-fits-all guarantees. Instead, we set clear success metrics with you, then continuously optimize to help you achieve them. Most clients see improvements in efficiency and lead flow within the first 90 days."
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
                    className={`overflow-hidden transition-all duration-300 ${
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
        <script id="sf-faq-jsonld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I get started?",
                "acceptedAnswer": { "@type": "Answer", "text": "Book a free strategy call to discuss your firm's specific needs and goals." }
              },
              {
                "@type": "Question",
                "name": "What is the pricing structure?",
                "acceptedAnswer": { "@type": "Answer", "text": "Pricing is customized based on your firm size and specific requirements. Contact us for a detailed quote." }
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

      {/* Final CTA Section */}
      <section className="py-section bg-gradient-to-br from-teal to-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Still Unsure Where to Begin?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let us guide you. Our team is here to help you find the perfect starting point for your firm's growth journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center space-x-2 text-white">
                <Clock className="w-5 h-5" />
                <span>Free 30-minute consultation</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <CheckCircle2 className="w-5 h-5" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Target className="w-5 h-5" />
                <span>Customized recommendations</span>
              </div>
            </div>

            <Button variant="white-on-dark" size="hero" className="mb-6">
              <Users className="w-5 h-5 mr-2" />
              Speak to an Advisor
            </Button>
            
            <p className="text-white/80 text-sm">
              Join hundreds of accounting firms who have already started their transformation with SmartFirm.
            </p>
          </div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  );
};

export default GetStarted;
