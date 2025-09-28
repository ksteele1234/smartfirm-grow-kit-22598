import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  User, 
  Users, 
  Building, 
  Building2, 
  Target, 
  Calculator,
  Star,
  TrendingUp,
  Shield,
  FileText,
  PieChart
} from "lucide-react";

const Industries = () => {
  const industryCategories = [
    {
      icon: <User className="h-8 w-8 text-primary-blue" />,
      title: "Solo CPAs Like You",
      description: "The Solo CPA's Survival Guide, Solo Practice Optimization, Personal Productivity Solutions, Growth Without Complexity.",
      link: "/industries/solo-cpas",
      size: "Solo Practice"
    },
    {
      icon: <Users className="h-8 w-8 text-primary-teal" />,
      title: "Small Accounting Firms (2-10 employees)",
      description: "Small Firm Challenges, Team Collaboration Solutions, Workflow Standardization.",
      link: "/industries/small-firms",
      size: "2-10 Employees"
    },
    {
      icon: <Building className="h-8 w-8 text-primary-blue" />,
      title: "Mid-Sized Accounting Firms (11-50 employees)",
      description: "Growth & Scalability, Advanced Automation, Leadership & Management.",
      link: "/industries/mid-sized-firms",
      size: "11-50 Employees"
    },
    {
      icon: <Building2 className="h-8 w-8 text-primary-teal" />,
      title: "Large Accounting Firms (50+ employees)",
      description: "Enterprise Solutions, Strategic Partnerships, Innovation & Future-Proofing.",
      link: "/industries/large-firms",
      size: "50+ Employees"
    }
  ];

  const specializedNiches = [
    {
      icon: <Shield className="h-6 w-6 text-primary-blue" />,
      title: "Forensic Accounting",
      link: "/industries/forensic-accounting"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary-teal" />,
      title: "Wealth Management",
      link: "/industries/wealth-management"
    },
    {
      icon: <FileText className="h-6 w-6 text-primary-blue" />,
      title: "Audit & Assurance",
      link: "/industries/audit-assurance"
    },
    {
      icon: <PieChart className="h-6 w-6 text-primary-teal" />,
      title: "Bookkeeping Services",
      link: "/industries/bookkeeping-services"
    },
    {
      icon: <Calculator className="h-6 w-6 text-primary-blue" />,
      title: "Tax Preparation",
      link: "/industries/tax-preparation"
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
              Tailored Marketing & Automation for Your Accounting Niche
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Every accounting specialization has unique challenges and opportunities. SmartFirm delivers customized solutions 
              that understand your specific industry needs, client expectations, and growth potential.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="section-padding">
          <div className="container mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
              Serving a Spectrum of Accounting Professionals
            </h2>
            <p className="text-lg text-text-secondary max-w-4xl mx-auto">
              From solo practitioners to large firms, from traditional accounting to specialized niches, we understand the distinct 
              challenges each segment faces. Our deep industry expertise ensures your marketing and automation strategies align 
              perfectly with your practice area and growth stage.
            </p>
          </div>
        </section>

        {/* Firm Size Categories */}
        <section className="section-padding bg-background-light">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue text-center mb-12">
              How We Help
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industryCategories.map((category, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-light-border">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-accent-light/20 w-fit">
                        {category.icon}
                      </div>
                      <span className="text-sm font-medium text-primary-teal bg-primary-teal/10 px-3 py-1 rounded-full">
                        {category.size}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-primary-blue mb-3">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-text-secondary leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary-blue group-hover:text-white transition-all duration-300"
                      asChild
                    >
                      <a href={category.link}>
                        {category.title.includes("Solo") ? "Solutions for Solo CPAs" : 
                         category.title.includes("Small") ? "Solutions for Small Firms" :
                         category.title.includes("Mid-Sized") ? "Solutions for Mid-Sized Firms" :
                         "Solutions for Large Firms"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Niches */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
                Specialized Niches
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Tailored strategies for specialized accounting practices with unique market dynamics and client needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {specializedNiches.map((niche, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-light-border text-center">
                  <CardHeader className="pb-2">
                    <div className="mx-auto mb-3 p-3 rounded-lg bg-accent-light/20 w-fit">
                      {niche.icon}
                    </div>
                    <CardTitle className="text-lg text-primary-blue mb-2">
                      {niche.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full group-hover:bg-primary-blue group-hover:text-white transition-all duration-300"
                      asChild
                    >
                      <a href={niche.link}>
                        Solutions for {niche.title}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Spotlight */}
        <section className="section-padding bg-background-light">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-elegant border-light-border">
                <CardHeader className="text-center pb-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-teal/10 text-primary-teal text-sm font-medium mb-4">
                    <Star className="h-4 w-4 mr-1" />
                    Industry Spotlight
                  </div>
                  <CardTitle className="text-3xl md:text-4xl text-primary-blue mb-4">
                    Growth Strategies for Tax Preparation Firms
                  </CardTitle>
                  <CardDescription className="text-lg text-text-secondary max-w-2xl mx-auto">
                    Tax season creates unique opportunities and challenges. Discover how seasonal firms are building 
                    year-round revenue streams and scaling beyond traditional tax preparation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary-teal flex items-center">
                        <Target className="h-5 w-5 mr-2" />
                        Key Opportunities:
                      </h4>
                      <ul className="space-y-2 text-text-secondary">
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-primary-teal mt-2 mr-3 flex-shrink-0"></div>
                          Year-round advisory services
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-primary-teal mt-2 mr-3 flex-shrink-0"></div>
                          Automated client retention
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-primary-teal mt-2 mr-3 flex-shrink-0"></div>
                          Strategic business planning
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-primary-teal mt-2 mr-3 flex-shrink-0"></div>
                          Technology integration
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-accent-light/30 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary-blue mb-3 flex items-center">
                        <Calculator className="h-5 w-5 mr-2" />
                        Industry Insights:
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-text-secondary">Revenue Growth Potential</span>
                          <span className="font-bold text-primary-blue">40-60%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-text-secondary">Client Retention Rate</span>
                          <span className="font-bold text-primary-blue">85%+</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-text-secondary">Off-Season Revenue</span>
                          <span className="font-bold text-primary-blue">+200%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <Button size="lg" className="bg-primary-blue hover:bg-primary-blue/90" asChild>
                      <a href="/industries/tax-preparation">
                        Explore Tax Firm Strategies
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
                <Building className="h-12 w-12 text-primary-teal mx-auto mb-6" />
                <blockquote className="text-xl text-text-primary italic mb-6">
                  "SmartFirm understood our niche from day one. As a forensic accounting firm, we have unique marketing 
                  challenges that most agencies can't grasp. Their industry-specific approach helped us reach the right 
                  clients and establish thought leadership in our field."
                </blockquote>
                <cite className="text-text-secondary">
                  — Jennifer Martinez, Martinez Forensic Accounting
                </cite>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-br from-primary-blue to-primary-teal text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Is Your Industry Ready for Smart Growth?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Discover tailored strategies designed for your accounting specialization. Let's discuss how industry-specific 
              solutions can accelerate your firm's growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary-blue hover:bg-white/90"
                asChild
              >
                <a href="/get-started">
                  Book an Industry-Specific Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-blue"
                asChild
              >
                <a href="/services">
                  View All Services
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

export default Industries;