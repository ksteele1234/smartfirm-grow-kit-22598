import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  ArrowRight, 
  Zap, 
  Settings, 
  TrendingUp, 
  Users, 
  Package, 
  Mail, 
  Star,
  Target,
  BarChart3
} from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Marketing Automation",
      description: "Lead Generation & Follow-up, Website & SEO, Review & Reputation Management, Social Media & Advertising, Marketing Technology, Support & Optimization.",
      link: "/services/marketing-automation"
    },
    {
      icon: <Settings className="h-8 w-8 text-teal" />,
      title: "Technology Solutions", 
      description: "Tech Stack Optimization and Business Process Automation to streamline your firm's operations and improve efficiency.",
      link: "/services/technology-solutions"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Business Optimization",
      description: "Process Improvement and Executive Dashboards to help you make data-driven decisions and optimize your firm's performance.",
      link: "/services/business-optimization"
    },
    {
      icon: <Users className="h-8 w-8 text-teal" />,
      title: "Executive Services",
      description: "Fractional CIO Services and Fractional CFO Services providing executive-level expertise without the full-time commitment.",
      link: "/services/executive-services"
    },
    {
      icon: <Package className="h-8 w-8 text-primary" />,
      title: "Service Packages",
      description: "Marketing Starter Package, Tech Optimizer Package, Business Growth Package, Executive Suite Package, Complete Transformation Package.",
      link: "/services/packages"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-background to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">
              Comprehensive Solutions for Your Accounting Firm's Growth
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed">
              From marketing automation to technology optimization, SmartFirm provides the tools and expertise you need to scale efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="cta-primary" size="lg">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="cta-outline" size="lg">
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction to Services */}
        <section className="py-20 md:py-28">
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

          {/* Service Categories Grid */}
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {serviceCategories.map((category, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border h-full bg-background">
                  <CardHeader className="text-center pb-6 px-8 pt-8">
                    <div className="mx-auto mb-6 p-4 rounded-lg bg-accent/30 w-fit">
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
                    <Button 
                      variant="cta-outline" 
                      className="w-full"
                      asChild
                    >
                      <a href={category.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Service Section */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="shadow-lg border-border bg-background">
                <CardHeader className="text-center pb-8 px-10 pt-10">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal/10 text-teal text-sm font-medium mb-6">
                    <Star className="h-4 w-4 mr-2" />
                    Spotlight Service
                  </div>
                  <CardTitle className="text-3xl md:text-4xl text-foreground mb-6">
                    Automated Lead Follow-up
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Turn prospects into clients with our sophisticated automated follow-up system. Never lose a lead again 
                    with personalized, timely communication that nurtures relationships and converts opportunities.
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
                    <Button variant="cta-primary" size="lg" asChild>
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
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-accent-light/20 p-8 rounded-lg border border-accent-light">
                <Mail className="h-12 w-12 text-primary-teal mx-auto mb-6" />
                <blockquote className="text-xl text-text-primary italic mb-6">
                  "SmartFirm's services transformed how we operate. Their automated systems handle tasks that used to take us hours, 
                  and their strategic guidance helped us identify growth opportunities we never saw before. It's like having a whole 
                  team of experts working for our firm."
                </blockquote>
                <cite className="text-text-secondary">
                  — David Thompson, Thompson Financial Services
                </cite>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-br from-primary-blue to-primary-teal text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Firm?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Discover how our tailored services can drive your growth and efficiency. Let's discuss your specific needs and create a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="white-on-dark"
                size="lg" 
                asChild
              >
                <a href="/get-started">
                  Book a Free Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="outline-on-dark"
                size="lg"
                asChild
              >
                <a href="/solutions">
                  Explore Our Solutions
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-28">
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
                  <AccordionTrigger className="text-left">
                    What marketing automation services do you provide for accounting firms?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We provide comprehensive marketing automation including automated lead follow-up, email marketing campaigns, client review generation, SEO for accountants, social media management, and website design. Our services are specifically tailored for CPAs, bookkeepers, and accounting firms of all sizes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    How long does it take to implement marketing automation for my CPA firm?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Most accounting firms see their marketing automation systems fully operational within 30-60 days. This includes lead generation setup, email sequences, CRM integration, and staff training. We work around your schedule to minimize disruption during tax season or busy periods.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    Do you integrate with accounting software like QuickBooks and Xero?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, our technology solutions integrate seamlessly with popular accounting software including QuickBooks, Xero, Drake, Lacerte, and practice management systems like Karbon and Canopy. This ensures your marketing data flows directly into your existing workflows.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    What kind of ROI can accounting firms expect from marketing automation?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our clients typically see a 250% increase in qualified leads, 150% improvement in conversion rates, and save 15+ hours per week on manual marketing tasks. Most accounting firms achieve positive ROI within 90 days of implementation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    Is marketing automation compliant with accounting industry regulations?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Absolutely. All our marketing automation solutions comply with AICPA guidelines, state board regulations, and data privacy laws. We understand the unique compliance requirements for CPAs and ensure all communications maintain professional standards.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
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