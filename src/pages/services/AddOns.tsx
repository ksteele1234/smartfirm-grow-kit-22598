import { ArrowRight, CheckCircle2, Bot, Phone, PenTool, Target, Megaphone, FileText, MessageSquare, Presentation, Heart } from "lucide-react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import SEO from "@/components/SEO";
import { FloatingShapes, BackgroundPattern } from "@/components/ui/visual-accents";

const AddOns = () => {
  const addOnServices = [
    {
      icon: FileText,
      title: "Monthly Blog Posts",
      description: "Drive organic traffic with high-quality, SEO-optimized blog content tailored to your accounting niche.",
      features: [
        "4-8 professionally written blog posts per month",
        "SEO keyword optimization for accounting firms",
        "Industry-specific topics and thought leadership",
        "Editorial calendar and content planning"
      ]
    },
    {
      icon: Megaphone,
      title: "Paid Advertising Management",
      description: "Maximize your ROI with expertly managed Google Ads, LinkedIn, and Facebook campaigns.",
      features: [
        "Campaign strategy and ad copy creation",
        "Budget optimization and bid management",
        "Conversion tracking and reporting",
        "Monthly performance analysis and refinement"
      ]
    },
    {
      icon: PenTool,
      title: "Newsletter Writing",
      description: "Keep clients engaged and informed with professionally crafted email newsletters.",
      features: [
        "Compelling newsletter content creation",
        "Tax updates and financial insights",
        "Client retention-focused messaging",
        "Monthly or bi-weekly distribution schedule"
      ]
    },
    {
      icon: Target,
      title: "Custom Marketing Campaigns",
      description: "Launch targeted campaigns for tax season, year-end planning, or special service offerings.",
      features: [
        "Full campaign strategy and planning",
        "Multi-channel execution (email, social, ads)",
        "Landing page creation and optimization",
        "Campaign analytics and ROI tracking"
      ]
    },
    {
      icon: Bot,
      title: "Website Chatbot",
      description: "Capture leads 24/7 with an intelligent chatbot that answers questions and schedules consultations.",
      features: [
        "AI-powered chat responses",
        "Lead qualification and capture",
        "Appointment scheduling integration",
        "Custom training on your services and FAQs"
      ]
    },
    {
      icon: Phone,
      title: "Voice AI Phone System",
      description: "Never miss a call with AI that answers phones, makes appointments, and routes calls intelligently.",
      features: [
        "24/7 call answering and screening",
        "Automated appointment booking",
        "Intelligent call routing to team members",
        "Call transcription and CRM integration"
      ]
    },
    {
      icon: MessageSquare,
      title: "Social Media Content Plan & Management",
      description: "Build your brand with consistent, engaging social media content across all platforms.",
      features: [
        "Content strategy and editorial calendar",
        "Professional post creation (3-5 posts/week)",
        "Platform management (LinkedIn, Facebook, Instagram)",
        "Engagement monitoring and community management"
      ]
    },
    {
      icon: Presentation,
      title: "Trade Show Planning, Materials & Booth Design",
      description: "Make a lasting impression at industry events with professionally designed booths and strategic event planning.",
      features: [
        "Complete booth design and graphics",
        "Pre-event marketing and promotion strategy",
        "Branded collateral and takeaway materials",
        "Lead capture system and post-event follow-up"
      ]
    },
    {
      icon: Heart,
      title: "Client Retention & Loyalty Program",
      description: "Keep your best clients engaged and reduce churn with automated touchpoints and strategic retention campaigns.",
      features: [
        "Automated milestone and anniversary campaigns",
        "Exclusive client-only content and resources",
        "Quarterly check-in and satisfaction surveys",
        "Referral incentive program setup and management"
      ]
    }
  ];

  const benefits = [
    {
      title: "Pay Only for What You Need",
      description: "Choose individual add-ons or bundle multiple services. No long-term commitments required."
    },
    {
      title: "Scale Your Marketing",
      description: "Start with foundational services, then add channels as your practice grows and budget allows."
    },
    {
      title: "Expert Execution",
      description: "Access specialized expertise in each channel without hiring full-time staff or agencies."
    },
    {
      title: "Seamless Integration",
      description: "All add-ons work together with your Quick Start package and existing marketing systems."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Marketing Add-Ons for Accounting Firms | SmartFirm"
        description="Marketing add-ons for accounting firms: blogs, paid ads, newsletters, chatbots, voice AI, social media, trade shows, and retention programs. Scale at your pace."
        canonicalUrl="https://smartfirm.io/services/add-ons"
        pageType="service"
        serviceName="Growth Add-Ons & Custom Marketing Solutions"
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/leading-marketing-services-for-accounting-firms" },
          { name: "Add-Ons", url: "/services/add-ons" }
        ]}
        faqs={[
          {
            question: "Can I add these services to my existing Quick Start package?",
            answer: "Yes! All add-on services are designed to integrate seamlessly with your Quick Start package or can be purchased independently for firms with existing marketing foundations."
          },
          {
            question: "What are the pricing options for add-ons?",
            answer: "Each add-on service is priced individually based on scope and frequency. Contact us for a custom quote tailored to your specific needs and budget."
          },
          {
            question: "Do I need to commit to a long-term contract?",
            answer: "No. Add-on services are month-to-month with no long-term commitments required. Scale up or down as your needs change."
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
                <BreadcrumbLink href="/leading-marketing-services-for-accounting-firms">Services</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Add-Ons</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
      
      <main>
        {/* Hero Section */}
        <section className="relative py-section md:py-28 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
          <BackgroundPattern pattern="dots" className="opacity-20" />
          <FloatingShapes variant="circles" className="opacity-30" />
          <div className="container mx-auto px-4 text-center relative">
            <Badge className="mb-6 bg-gradient-vibrant-teal text-white">
              Flexible & Scalable
            </Badge>
            
            <h1 className="text-display font-bold text-primary mb-6">
              Marketing Add-Ons for Accounting Firms
            </h1>
            
            <div id="sf-keyword-intro">
              <p className="text-xl text-muted-foreground max-w-text-lg mx-auto mb-10 leading-relaxed">
                Scale your marketing with flexible add-on services: blogs, paid ads, newsletters, chatbots, social media, and more. No long-term commitments required.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-sm justify-center">
              <Button size="lg" variant="hero" className="group" asChild>
                <a href="/contact">
                  Request Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <a href="/quick-start-marketing-for-cpa-firms">
                  View Quick Start Package
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Add-Ons Section */}
        <section className="py-16 md:py-section bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Choose Add-On Services?
              </h2>
              <p className="text-lg text-muted-foreground max-w-text-sm mx-auto">
                Scale your marketing at your own pace with specialized services that complement your existing foundation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md max-w-container-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-border bg-gradient-to-br from-background to-primary/5">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary mb-3 flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      {benefit.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Available Add-Ons Section */}
        <section className="py-16 md:py-section bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Available Add-On Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-text-sm mx-auto">
                Choose from our comprehensive suite of specialized marketing services for accounting firms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md max-w-container-3xl mx-auto">
              {addOnServices.map((service, index) => (
                <Card key={index} className="group card-interactive border-border bg-background">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 w-fit">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-primary mb-3">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-[120px] md:py-[100px] bg-gradient-deep-teal overflow-hidden">
          <FloatingShapes variant="circles" className="opacity-20" />
          <div className="container mx-auto px-4 text-center relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Scale Your Marketing?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-text-sm mx-auto leading-relaxed">
              Let's discuss which add-on services will drive the best results for your accounting firm.
            </p>
            <div className="flex flex-col sm:flex-row gap-sm justify-center">
              <Button 
                size="lg" 
                variant="white-on-dark"
                className="group font-semibold"
                asChild
              >
                <a href="/contact">
                  Request Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="white-outline-on-dark"
                asChild
              >
                <a href="/get-started">
                  Book Strategy Call
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

export default AddOns;
