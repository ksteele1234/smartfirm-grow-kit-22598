import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
        <section className="section-padding bg-gradient-to-br from-background to-background-light">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-blue mb-6">
              Comprehensive Solutions for Your Accounting Firm's Growth
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              From marketing automation to technology optimization, SmartFirm provides the tools and expertise you need to scale efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-blue hover:bg-primary-blue/90">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white">
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction to Services */}
        <section className="section-padding">
          <div className="container mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
              Our Core Service Areas
            </h2>
            <p className="text-lg text-text-secondary max-w-4xl mx-auto">
              SmartFirm takes a holistic approach to supporting accounting firms. Our comprehensive suite of services works together 
              to create a unified growth strategy that addresses every aspect of your practice, from marketing and technology 
              to business optimization and executive leadership.
            </p>
          </div>

          {/* Service Categories Grid */}
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-light-border h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 rounded-lg bg-accent-light/20 w-fit">
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl text-primary-blue mb-3">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-text-secondary leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary-blue group-hover:text-white transition-all duration-300"
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
        <section className="section-padding bg-background-light">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-elegant border-light-border">
                <CardHeader className="text-center pb-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-teal/10 text-primary-teal text-sm font-medium mb-4">
                    <Star className="h-4 w-4 mr-1" />
                    Spotlight Service
                  </div>
                  <CardTitle className="text-3xl md:text-4xl text-primary-blue mb-4">
                    Automated Lead Follow-up
                  </CardTitle>
                  <CardDescription className="text-lg text-text-secondary max-w-2xl mx-auto">
                    Turn prospects into clients with our sophisticated automated follow-up system. Never lose a lead again 
                    with personalized, timely communication that nurtures relationships and converts opportunities.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary-teal flex items-center">
                        <Target className="h-5 w-5 mr-2" />
                        Key Features:
                      </h4>
                      <ul className="space-y-2 text-text-secondary">
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-primary-teal mt-2 mr-3 flex-shrink-0"></div>
                          Personalized email sequences
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-primary-teal mt-2 mr-3 flex-shrink-0"></div>
                          Smart timing optimization
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-primary-teal mt-2 mr-3 flex-shrink-0"></div>
                          Lead scoring and prioritization
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-primary-teal mt-2 mr-3 flex-shrink-0"></div>
                          Automated appointment scheduling
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-accent-light/30 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary-blue mb-3 flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        Results:
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-text-secondary">Lead Response Rate</span>
                          <span className="font-bold text-primary-blue">+250%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-text-secondary">Conversion Rate</span>
                          <span className="font-bold text-primary-blue">+150%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-text-secondary">Time Saved/Week</span>
                          <span className="font-bold text-primary-blue">15+ Hours</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <Button size="lg" className="bg-primary-blue hover:bg-primary-blue/90" asChild>
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
                size="lg" 
                variant="secondary"
                className="bg-white text-primary-blue hover:bg-white/90"
                asChild
              >
                <a href="/get-started">
                  Book a Free Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-blue"
                asChild
              >
                <a href="/solutions">
                  Explore Our Solutions
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

export default Services;