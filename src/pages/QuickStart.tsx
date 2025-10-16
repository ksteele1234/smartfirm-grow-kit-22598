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
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe,
  MapPin,
  Cpu,
  Star,
  Mail,
  Search,
  Users,
  Building2,
  User,
  TrendingUp,
  Zap,
  Clock
} from "lucide-react";
import SEO from "@/components/SEO";
import { FloatingShapes, BackgroundPattern } from "@/components/ui/visual-accents";

const QuickStart = () => {
  const packageIncludes = [
    {
      icon: Globe,
      title: "Website Refresh or Launch",
      items: [
        "Profession-specific design for accountants, CPAs, and bookkeepers",
        "Conversion-optimized pages with clear CTAs",
        "Basic SEO setup for visibility"
      ]
    },
    {
      icon: MapPin,
      title: "Google Business Profile (GBP) Optimization",
      items: [
        "Setup or clean-up for local search visibility",
        "Branded descriptions and service listings",
        "Review request integration"
      ]
    },
    {
      icon: Cpu,
      title: "CRM Setup & Automations",
      items: [
        "Lead capture forms and chat integration",
        "Automated email/SMS follow-up sequences",
        "Appointment booking funnels"
      ]
    },
    {
      icon: Star,
      title: "Review Generation System",
      items: [
        "Automated requests after meetings or projects",
        "Direct links for easy 5-star submissions",
        "Reputation monitoring"
      ]
    },
    {
      icon: Mail,
      title: "Email Marketing Foundation",
      items: [
        "Nurture campaign for new leads",
        "Client retention drip campaigns",
        "Newsletter setup template"
      ]
    },
    {
      icon: Search,
      title: "Basic SEO Kickstart",
      items: [
        "On-page SEO for your top pages",
        "Local SEO improvements for CPAs and accountants",
        "Keyword-targeted meta descriptions"
      ]
    }
  ];

  const outcomes = [
    {
      icon: Globe,
      title: "Professional Online Presence",
      description: "New or optimized website plus fully set up Google Business Profile"
    },
    {
      icon: Zap,
      title: "Automated Follow-Up",
      description: "Systems that capture and nurture leads without manual effort"
    },
    {
      icon: Star,
      title: "Review System",
      description: "Build trust and drive referrals with automated review generation"
    },
    {
      icon: TrendingUp,
      title: "Initial SEO Traction",
      description: "Start appearing in local searches and boosting visibility"
    },
    {
      icon: Mail,
      title: "Clear Communication Systems",
      description: "Streamlined client communication and retention workflows"
    }
  ];

  const idealFor = [
    {
      icon: User,
      title: "Solo CPAs & Bookkeepers",
      description: "Who want to grow without becoming marketing experts"
    },
    {
      icon: Users,
      title: "Small Firms",
      description: "That need to compete with larger, tech-savvy practices"
    },
    {
      icon: Building2,
      title: "Growth-Oriented Accounting Firms",
      description: "Ready to scale with efficient systems"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="SmartFirm 30-Day Quick Start Package | Marketing Package for CPA Firms"
        description="Launch your accounting firm's marketing in 30 days with SmartFirm's Quick Start Package. A complete marketing package for CPA firms, including website design, GBP optimization, CRM automations, review generation, email marketing, and SEO."
        pageType="service"
        serviceName="30-Day Quick Start Package"
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Get Started", url: "/get-started" },
          { name: "Quick Start Package", url: "/quick-start-marketing-for-cpa-firms" }
        ]}
        faqs={[
          {
            question: "How long does implementation take?",
            answer: "The entire Quick Start Package is implemented within 30 days from start to finish."
          },
          {
            question: "What ongoing support is included?",
            answer: "The Quick Start includes 30 days of implementation support. For ongoing optimization, consider our Monthly Growth Program at $999/month."
          },
          {
            question: "Do I need technical skills?",
            answer: "No technical skills required. We handle all setup and provide training so you can manage your systems confidently."
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
                <BreadcrumbLink href="/get-started">Get Started</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Quick Start Package</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 via-background to-teal/10 overflow-hidden">
          <BackgroundPattern pattern="dots" className="opacity-20" />
          <FloatingShapes variant="circles" className="opacity-30" />
          <div className="container mx-auto px-4 text-center relative">
            <Badge className="mb-6 bg-gradient-to-r from-teal to-primary text-white">
              <Clock className="h-4 w-4 mr-2" />
              30-Day Implementation
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Get Started with a Marketing Package for CPA Firms in Just 30 Days
            </h1>
            
            <div id="sf-keyword-intro">
              <p className="text-xl text-text-secondary max-w-4xl mx-auto mb-10 leading-relaxed">
                The SmartFirm Quick Start Package gives accountants, CPAs, bookkeepers, and tax preparers everything they need to launch modern marketing systems — fast.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" variant="hero" className="group" asChild>
                <a href="/contact">
                  Book My Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <a href="#pricing">
                  Get Started with Quick Start
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                Why Choose the Quick Start?
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Your accounting firm doesn't need another complex tool — you need a system that works from day one. The SmartFirm 30-Day Quick Start Package is the most effective marketing package for CPA firms that want fast results and a strong foundation.
              </p>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                What's Included in the 30-Day Quick Start Package
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Six essential components to transform your accounting firm's marketing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {packageIncludes.map((item, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-background">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 rounded-lg bg-gradient-to-br from-primary/20 to-teal/20 w-fit">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-primary mb-4">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {item.items.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-teal mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Outcomes in 30 Days
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Here's what you'll have operational after your Quick Start implementation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {outcomes.map((outcome, index) => (
                <Card key={index} className="text-center border-border bg-gradient-to-br from-background to-primary/5 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 p-4 rounded-lg bg-gradient-to-br from-teal/20 to-primary/20 w-fit">
                      <outcome.icon className="h-8 w-8 text-teal" />
                    </div>
                    <CardTitle className="text-lg text-primary mb-3">
                      {outcome.title}
                    </CardTitle>
                    <CardDescription className="text-text-secondary leading-relaxed">
                      {outcome.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Who This Is For Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Who This Is For
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {idealFor.map((item, index) => (
                <Card key={index} className="text-center border-border bg-background hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-6">
                    <div className="mx-auto mb-4 p-4 rounded-lg bg-gradient-to-br from-primary/20 to-teal/20 w-fit">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-primary mb-3">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-text-secondary leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative py-[120px] md:py-[100px] bg-gradient-to-br from-[#0a2e2e] to-[#134444] overflow-hidden">
          {/* Orbital Circle System - 2 circles rotating opposite directions */}
          <svg className="absolute right-[15%] top-[20%] w-[400px] h-[400px] z-[1] hidden lg:block opacity-50">
            {/* Circle 1: Clockwise rotation */}
            <g style={{ transformOrigin: 'center' }} className="animate-rotate-clockwise">
              <circle cx="200" cy="200" r="120" stroke="#fb7185" strokeWidth="2" fill="none" />
              <circle cx="320" cy="200" r="4" fill="#fb7185" opacity="0.8" />
              <circle cx="283.14" cy="283.14" r="4" fill="#fb7185" opacity="0.8" />
              <circle cx="200" cy="320" r="4" fill="#fb7185" opacity="0.8" />
              <circle cx="116.86" cy="283.14" r="4" fill="#fb7185" opacity="0.8" />
              <circle cx="80" cy="200" r="4" fill="#fb7185" opacity="0.8" />
              <circle cx="116.86" cy="116.86" r="4" fill="#fb7185" opacity="0.8" />
              <circle cx="200" cy="80" r="4" fill="#fb7185" opacity="0.8" />
              <circle cx="283.14" cy="116.86" r="4" fill="#fb7185" opacity="0.8" />
            </g>
            
            {/* Circle 2: Counter-clockwise rotation */}
            <g style={{ transformOrigin: 'center' }} className="animate-rotate-counter">
              <circle cx="200" cy="200" r="160" stroke="#fb7185" strokeWidth="1.5" fill="none" />
              <circle cx="360" cy="200" r="4" fill="#fb7185" opacity="0.8" />
              <circle cx="313.14" cy="313.14" r="4" fill="#fb7185" opacity="0.8" />
              <circle cx="200" cy="360" r="4" fill="#fb7185" opacity="0.8" />
              <circle cx="86.86" cy="313.14" r="4" fill="#fb7185" opacity="0.8" />
              <circle cx="40" cy="200" r="4" fill="#fb7185" opacity="0.8" />
              <circle cx="86.86" cy="86.86" r="4" fill="#fb7185" opacity="0.8" />
              <circle cx="200" cy="40" r="4" fill="#fb7185" opacity="0.8" />
              <circle cx="313.14" cy="86.86" r="4" fill="#fb7185" opacity="0.8" />
            </g>
          </svg>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Start Growing Your Firm Today
              </h2>
            </div>
            
            <div className="max-w-[500px] mx-auto">
              <div className="relative bg-white/[0.08] backdrop-blur-[20px] border border-white/15 rounded-[24px] p-12 shadow-[0_0_48px_rgba(45,212,191,0.3),0_12px_48px_rgba(0,0,0,0.4)]">
                {/* Early Adopter Badge - Coral */}
                <div className="inline-block bg-gradient-to-r from-[#fb7185] to-[#f43f5e] text-white text-xs font-semibold px-3 py-1.5 rounded mb-6">
                  Early Adopter Pricing*
                </div>

                {/* Badge - Gold gradient */}
                <div className="inline-block bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] px-4 py-2 rounded-xl text-sm font-bold text-white mb-6 ml-2">
                  Start Here
                </div>
                
                {/* Price Display - $999 on top */}
                <div className="mb-8">
                  {/* Monthly Fee - Prominent */}
                  <div className="mb-4">
                    <div className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent mb-1 animate-subtle-pulse">
                      $999
                    </div>
                    <div className="text-base text-white/70">per month</div>
                  </div>

                  {/* Plus Sign */}
                  <div className="text-2xl font-bold text-white/40 text-center my-3">+</div>

                  {/* Setup Fee - Smaller */}
                  <div>
                    <div className="text-xs text-white/50 line-through mb-1">
                      Regular: $9,999
                    </div>
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent mb-1">
                      $6,999
                    </div>
                    <div className="text-sm text-white/60">One-time setup</div>
                  </div>
                </div>
                
                {/* Features List with Teal Checkmarks + Glow */}
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2dd4bf] flex-shrink-0 mt-0.5" style={{ filter: 'drop-shadow(0 0 4px rgba(45, 212, 191, 0.6))' }} />
                    <span className="text-base text-white leading-[1.8]">Professional website (launch-ready)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2dd4bf] flex-shrink-0 mt-0.5" style={{ filter: 'drop-shadow(0 0 4px rgba(45, 212, 191, 0.6))' }} />
                    <span className="text-base text-white leading-[1.8]">Google Business Profile optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2dd4bf] flex-shrink-0 mt-0.5" style={{ filter: 'drop-shadow(0 0 4px rgba(45, 212, 191, 0.6))' }} />
                    <span className="text-base text-white leading-[1.8]">Automated review generation system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2dd4bf] flex-shrink-0 mt-0.5" style={{ filter: 'drop-shadow(0 0 4px rgba(45, 212, 191, 0.6))' }} />
                    <span className="text-base text-white leading-[1.8]">Client communication workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2dd4bf] flex-shrink-0 mt-0.5" style={{ filter: 'drop-shadow(0 0 4px rgba(45, 212, 191, 0.6))' }} />
                    <span className="text-base text-white leading-[1.8]">Email marketing foundation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2dd4bf] flex-shrink-0 mt-0.5" style={{ filter: 'drop-shadow(0 0 4px rgba(45, 212, 191, 0.6))' }} />
                    <span className="text-base text-white leading-[1.8]">Performance tracking dashboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2dd4bf] flex-shrink-0 mt-0.5" style={{ filter: 'drop-shadow(0 0 4px rgba(45, 212, 191, 0.6))' }} />
                    <span className="text-base text-white leading-[1.8]">Monthly performance reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2dd4bf] flex-shrink-0 mt-0.5" style={{ filter: 'drop-shadow(0 0 4px rgba(45, 212, 191, 0.6))' }} />
                    <span className="text-base text-white leading-[1.8]">Ongoing support & optimization</span>
                  </li>
                </ul>
                
                {/* CTA Buttons */}
                <div className="flex flex-col gap-4">
                  {/* Primary CTA - Coral Gradient */}
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-[#fb7185] to-[#f43f5e] hover:from-[#f43f5e] hover:to-[#fb7185] text-white text-lg font-bold py-4 rounded-xl shadow-[0_4px_24px_rgba(251,113,133,0.6)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <a href="/get-started">Get Started</a>
                  </Button>
                  
                  {/* Secondary CTA - White Outline */}
                  <Button 
                    variant="outline"
                    asChild
                    className="w-full bg-transparent hover:bg-white/10 text-white border-2 border-white/30 text-lg font-semibold py-4 rounded-xl transition-all"
                  >
                    <a href="/contact">Book Your Call</a>
                  </Button>

                  {/* Urgency Note */}
                  <p className="text-xs text-white/60 text-center mt-2">
                    *for the next 3 firms only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary/95 to-teal text-white relative overflow-hidden">
          <FloatingShapes variant="circles" className="opacity-20" />
          <div className="container mx-auto px-4 text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Launch Your Firm's Marketing in 30 Days?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Book your free consultation today and see how SmartFirm's Quick Start Package can transform your accounting practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                variant="white-on-dark"
                className="group font-semibold"
                asChild
              >
                <a href="/get-started">
                  Book My Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="white-outline-on-dark"
                asChild
              >
                <a href="/contact">
                  Contact Us
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

export default QuickStart;
