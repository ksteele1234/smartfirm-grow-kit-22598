import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Zap, Settings, TrendingUp, Users, Package, Mail, Star, Target, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

const Services = () => {
  const serviceCategories = [{
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "AI-Powered Marketing Automation",
    description: "Intelligent Lead Generation with predictive scoring, AI-driven Website & SEO optimization, Automated Review & Reputation Management with sentiment analysis, Smart Social Media campaigns with behavioral targeting.",
    link: "/services/marketing-automation"
  }, {
    icon: <Settings className="h-8 w-8 text-teal" />,
    title: "AI-Ready Technology Solutions",
    description: "Intelligent Tech Stack Optimization and AI-enhanced Business Process Automation to streamline your firm's operations with predictive analytics and automated workflows.",
    link: "/services/technology-solutions"
  }, {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "AI-Driven Business Intelligence",
    description: "Predictive Process Improvement and AI-powered Executive Dashboards that provide actionable insights to optimize your firm's performance and forecast growth opportunities.",
    link: "/services/business-optimization"
  }, {
    icon: <Users className="h-8 w-8 text-teal" />,
    title: "Strategic AI Consulting",
    description: "Fractional CIO Services with AI strategy development and data-driven CFO Services leveraging predictive financial modeling and performance analytics.",
    link: "/services/executive-services"
  }, {
    icon: <Package className="h-8 w-8 text-primary" />,
    title: "AI-Enhanced Service Packages",
    description: "Intelligent Marketing Starter Package, AI-Ready Tech Optimizer, Predictive Business Growth Package, Smart Executive Suite, Complete AI Transformation Package.",
    link: "/services/packages"
  }];
  
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Marketing Automation Services for Accounting Firms | SmartFirm"
        description="Marketing automation services for accounting firms including lead generation, client retention, and business optimization that drive measurable growth."
        pageType="service"
        serviceName="Marketing Automation & Technology Solutions"
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" }
        ]}
      />
      <Header />
      <nav id="sf-breadcrumbs" className="bg-background-light border-b" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 lg:px-6 py-1.5">
          <Breadcrumb>
            <BreadcrumbList className="text-sm text-muted-foreground">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 pb-32 md:pb-40 bg-[#0F4C5C] overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0" style={{ backgroundImage: 'url(/src/assets/page-header-background.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
          {/* Curved bottom edge */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
            <svg className="relative block w-full h-[80px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="#ffffff" />
            </svg>
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg">Marketing Automation Services for Accounting Firms</h1>
            <div id="sf-keyword-intro">
              <p className="text-lg md:text-xl text-white/95 max-w-4xl mx-auto mb-10 leading-relaxed drop-shadow-md">
                Marketing automation services for accounting firms include intelligent lead generation, AI-driven technology optimization, and data-driven expertise to scale your practice efficiently.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/all-services">
                  Explore All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Link to="/get-started">Book a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction to Services */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Our Core Service Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              SmartFirm takes a holistic approach to supporting accounting firms. Our comprehensive suite of services works together 
              to create a unified growth strategy that addresses every aspect of your practice, from marketing and technology 
              to business optimization and executive leadership.
            </p>
          </div>

          {/* Service Categories Grid - Full Width Distribution */}
          <div className="container mx-auto px-4">
            {/* First row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
              {serviceCategories.slice(0, 3).map((category, index) => <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border h-full bg-gradient-to-br from-background to-primary/5">
                  <CardHeader className="text-center pb-6 px-8 pt-8">
                    <div className="mx-auto mb-6 p-4 rounded-lg bg-gradient-to-br from-primary/20 to-teal/20 w-fit">
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl text-foreground mb-4">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 mt-auto px-8 pb-8">
                    <Button variant="outline" className="w-full" asChild>
                      <a href={category.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>)}
            </div>
            
            {/* Second row - 2 cards taking full width */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {serviceCategories.slice(3).map((category, index) => <Card key={index + 3} className="group hover:shadow-lg transition-all duration-300 border-border h-full bg-gradient-to-br from-background to-teal/5">
                  <CardHeader className="text-center pb-6 px-8 pt-8">
                    <div className="mx-auto mb-6 p-4 rounded-lg bg-gradient-to-br from-teal/20 to-primary/20 w-fit">
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl text-foreground mb-4">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 mt-auto px-8 pb-8">
                    <Button variant="outline" className="w-full" asChild>
                      <a href={category.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Benefits of Working with SmartFirm</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Accounting firms choose SmartFirm for a unified growth system that blends marketing automation, integrated technology, and data-driven strategy. We reduce manual work, improve follow-up, and turn more visitors into booked consultations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                You’ll get a clear roadmap, hands-on implementation, and ongoing optimization—so results improve over time without adding headcount. Implementation is guided and designed around busy seasons to minimize disruption.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Service Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="shadow-lg border-border bg-background">
                <CardHeader className="text-center pb-8 px-10 pt-10">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal/10 text-teal text-sm font-medium mb-6">
                    <Star className="h-4 w-4 mr-2" />
                    Spotlight Service
                  </div>
                  <CardTitle className="text-3xl md:text-4xl text-foreground mb-6">
                    AI-Powered Marketing Automation
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Transform your accounting firm's marketing with intelligent automation that works 24/7. From predictive lead scoring to 
                    automated email campaigns and smart social media management, our AI-driven system helps you attract, nurture, and convert 
                    more clients while you focus on serving them.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8 px-10 pb-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h4 className="font-semibold text-teal flex items-center text-lg">
                        <Target className="h-5 w-5 mr-2" />
                        Key Features:
                      </h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-teal mt-2 mr-4 flex-shrink-0"></div>
                          Personalized email sequences
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-teal mt-2 mr-4 flex-shrink-0"></div>
                          Smart timing optimization
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-teal mt-2 mr-4 flex-shrink-0"></div>
                          Lead scoring and prioritization
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-teal mt-2 mr-4 flex-shrink-0"></div>
                          Automated appointment scheduling
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-accent/30 p-8 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-6 flex items-center text-lg">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        Results:
                      </h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Lead Response Rate</span>
                          <span className="font-bold text-primary">+250%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Conversion Rate</span>
                          <span className="font-bold text-primary">+150%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Time Saved/Week</span>
                          <span className="font-bold text-primary">15+ Hours</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-6">
                    <Button variant="hero" size="lg" asChild>
                      <a href="/services/automated-lead-follow-up">
                        Learn More About This Service
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary/5 to-teal/5 p-8 md:p-12 rounded-lg border border-border">
                <div className="mb-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                  </div>
                  <blockquote className="text-lg md:text-xl text-muted-foreground italic mb-6">
                    "SmartFirm's services transformed how we operate. Their automated systems handle tasks that used to take us hours, 
                    and our client satisfaction has never been higher. We've grown 40% this year alone."
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <div>
                      <div className="font-semibold text-foreground">Sarah Johnson</div>
                      <div className="text-sm text-muted-foreground">— David Thompson, Thompson Financial Services</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary to-teal text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Accounting Firm?
            </h2>
            <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
              Discover how our tailored services can drive your growth and efficiency. Let's discuss your specific needs and create a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="white-on-dark" size="lg" asChild>
                <a href="/get-started">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="white-outline-on-dark" size="lg" asChild>
                <a href="/solutions">
                  Explore Our Solutions
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                  Frequently Asked Questions About Our Services
                </h2>
                <p className="text-lg text-muted-foreground">
                  Common questions accounting firms have about our marketing automation and technology solutions.
                </p>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-sm">
                    What marketing automation services do you provide for accounting firms?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We provide comprehensive marketing automation including automated lead follow-up, email marketing campaigns, client review generation, SEO for accountants, social media management, and website design. Our services are specifically tailored for CPAs, bookkeepers, and accounting firms of all sizes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-sm">
                    How long does it take to implement marketing automation for my CPA firm?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Most accounting firms see their marketing automation systems fully operational within 30. Your website should be up sooner, then we build the automations around that. This includes lead generation setup, email sequences, CRM integration, and staff training. We work around your schedule to minimize disruption during tax season or busy periods.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-sm">
                    Do you integrate with accounting software like QuickBooks and Xero?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, our technology solutions integrate seamlessly with popular accounting software including QuickBooks, Xero, Drake, Lacerte, and practice management systems like Karbon and Canopy. This ensures your marketing data flows directly into your existing workflows.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-sm">
                    Is marketing automation compliant with accounting industry regulations?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Absolutely. All our marketing automation solutions comply with AICPA guidelines, state board regulations, and data privacy laws. We understand the unique compliance requirements for CPAs and ensure all communications maintain professional standards.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-sm">
                    Do you provide ongoing support after implementing marketing automation?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we provide comprehensive ongoing support including monthly optimization, performance reporting, strategy adjustments, and unlimited technical support. Our team continuously monitors your systems to ensure optimal performance and growth.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
