import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import SEO from "@/components/SEO";
import FaqAnswer from "@/components/faq/FaqAnswer";
import { getFaqsForPath } from "@/data/faqContent";

const fallbackIndustryFaqs = [
  {
    question: "Do you have specific marketing solutions for solo CPAs versus large accounting firms?",
    answer: "Yes, we tailor our approach based on firm size. Solo CPAs get streamlined, cost-effective automation focused on efficiency. Small firms (2-10 employees) receive collaboration tools and standardized workflows. Large firms get enterprise-level solutions with advanced analytics and multi-office coordination."
  },
  {
    question: "How do marketing strategies differ for tax preparation versus bookkeeping services?",
    answer: "Tax preparation marketing focuses on seasonal campaigns, deadline reminders, and quick turnaround messaging. Bookkeeping services emphasize ongoing relationships, monthly value delivery, and business growth support. We customize lead magnets, email sequences, and service presentations for each specialization."
  },
  {
    question: "Can you help specialized practices like forensic accounting or wealth management?",
    answer: "Absolutely. Specialized practices require targeted marketing to reach specific audiences. We develop industry-specific content, networking automation, and thought leadership campaigns that position you as the expert in your niche while maintaining compliance with professional standards."
  },
  {
    question: "How do you handle marketing for accounting firms in different geographic markets?",
    answer: "We implement local SEO strategies, geo-targeted advertising, and community-specific content marketing. Whether you're in a major metropolitan area or a smaller market, we optimize your visibility for local searches and establish your firm as the go-to accounting practice in your area."
  },
  {
    question: "Do you understand the unique compliance requirements for different accounting specializations?",
    answer: "Yes, we're well-versed in industry regulations including AICPA guidelines, state board requirements, SEC regulations for audit firms, and IRS circular 230 for tax practitioners. All our marketing materials and automation sequences comply with professional standards and ethical requirements."
  },
  {
    question: "How do you help accounting firms differentiate from their competition?",
    answer: "We identify your unique value proposition and amplify it through strategic positioning, specialized content marketing, and targeted messaging. Whether it's your technology expertise, industry specialization, or client service approach, we help you stand out in a crowded marketplace."
  }
];

const Industries = () => {
  const industriesIndexPath = "/industries-expert-marketing-agency-for-accountants";
  const industriesFaqs = getFaqsForPath(industriesIndexPath);
  const faqsToRender = industriesFaqs.length ? industriesFaqs : fallbackIndustryFaqs;
  const industryCategories = [
    {
      icon: <User className="h-8 w-8 text-primary" />,
      title: "Solo CPAs Like You",
      description: "The Solo CPA's Survival Guide, Solo Practice Optimization, Personal Productivity Solutions, Growth Without Complexity.",
      link: "/get-started",
      size: "Solo Practice"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Small Accounting Firms (2-10 employees)",
      description: "Small Firm Challenges, Team Collaboration Solutions, Workflow Standardization.",
      link: "/get-started",
      size: "2-10 Employees"
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Mid-Sized Accounting Firms (11-50 employees)",
      description: "Growth & Scalability, Advanced Automation, Leadership & Management.",
      link: "/get-started",
      size: "11-50 Employees"
    },
    {
      icon: <Building2 className="h-8 w-8 text-accent" />,
      title: "Large Accounting Firms (50+ employees)",
      description: "Enterprise Solutions, Strategic Partnerships, Innovation & Future-Proofing.",
      link: "/get-started",
      size: "50+ Employees"
    }
  ];

  const specializedNiches = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Forensic Accounting",
      link: "/get-started"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-accent" />,
      title: "Wealth Management",
      link: "/get-started"
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Audit & Assurance",
      link: "/industries/audit-assurance"
    },
    {
      icon: <PieChart className="h-6 w-6 text-accent" />,
      title: "Bookkeeping Services",
      link: "/industries/bookkeeping-services"
    },
    {
      icon: <Calculator className="h-6 w-6 text-primary" />,
      title: "Tax Preparation",
      link: "/industries/tax-preparation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Firm Automation by Industry | SmartFirm"
        description="Firm automation and growth solutions for solo CPAs, small firms, bookkeepers, tax prep, and business advisory practices with proven results."
        canonicalUrl="https://smartfirm.io/industries-expert-marketing-agency-for-accountants"
        pageType="industry"
        faqs={faqsToRender}
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Industries", url: industriesIndexPath }
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
                <BreadcrumbPage>Industries</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 pb-48 md:pb-[220px] bg-gradient-deep-teal overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0" style={{ backgroundImage: 'url(/assets/page-header-background.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
          {/* Curved bottom edge */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 text-background">
            <svg className="relative block w-full h-[80px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="text-display font-bold text-white mb-6 drop-shadow-lg">
              Firm Automation by Industry: Solutions for Your Niche
            </h1>
            <div id="sf-keyword-intro">
              <p className="text-lead text-white/95 max-w-text-lg mx-auto leading-relaxed drop-shadow-md">
                Marketing for accountants requires understanding unique challenges and opportunities in each specialization. SmartFirm delivers AI-driven, customized solutions with predictive analytics that understand your specific industry needs, intelligent client targeting, and data-driven growth potential.
              </p>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-sm justify-center">
              <Button variant="coral" size="hero" asChild>
                <a href="/get-started">
                  Book Your Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="white-outline-on-dark" size="hero" asChild>
                <a href="/leading-marketing-services-for-accounting-firms">
                  Explore Services
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-section">
          <div className="container mx-auto px-4">
            <div className="max-w-text-lg mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
                Serving a Spectrum of Accounting Professionals
              </h2>
              <p className="text-lg text-muted-foreground text-center leading-relaxed">
                From solo practitioners to large firms, from traditional accounting to specialized niches, we understand the distinct 
                challenges each segment faces. Our deep industry expertise ensures your marketing and automation strategies align 
                perfectly with your practice area and growth stage.
              </p>
              <p className="text-lg text-muted-foreground text-center leading-relaxed">
                Whether you're a solo CPA looking to streamline operations, a small firm aiming to compete with larger practices, or an established firm seeking to modernize your marketing approach, SmartFirm delivers industry-specific solutions that drive results. We've helped hundreds of accounting professionals across all specializations achieve measurable growth through targeted strategies and proven methodologies.
              </p>
            </div>
          </div>
        </section>

        {/* Firm Size Categories */}
        <section className="py-16 md:py-section bg-background-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              How We Help
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
              {industryCategories.map((category, index) => (
                <Card key={index} className="group hover:elevation-2 border card-interactive">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-accent/10 w-fit">
                        {category.icon}
                      </div>
                      <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {category.size}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-primary mb-3">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-white color-transition"
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
        <section className="py-16 md:py-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Specialized Niches
              </h2>
              <p className="text-lg text-muted-foreground max-w-text-sm mx-auto">
                Tailored strategies for specialized accounting practices with unique market dynamics and client needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-sm">
              {specializedNiches.map((niche, index) => (
                <Card key={index} className="group hover:elevation-2 border text-center card-interactive">
                  <CardHeader className="pb-2">
                    <div className="mx-auto mb-3 p-3 rounded-lg bg-accent/10 w-fit">
                      {niche.icon}
                    </div>
                    <CardTitle className="text-lg text-primary mb-2">
                      {niche.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-white color-transition"
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
        <section className="py-16 md:py-section bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-text-lg mx-auto">
              <Card className="elevation-2 border card-interactive">
                <CardHeader className="text-center pb-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                    <Star className="h-4 w-4 mr-1" />
                    Industry Spotlight
                  </div>
                  <CardTitle className="text-3xl md:text-4xl text-primary mb-4">
                    Growth Strategies for Tax Preparation Firms
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground max-w-text-sm mx-auto">
                    Tax season creates unique opportunities and challenges. Discover how seasonal firms are building 
                    year-round revenue streams and scaling beyond traditional tax preparation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-accent flex items-center">
                        <Target className="h-5 w-5 mr-2" />
                        Key Opportunities:
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <div className="dot-accent mt-2 mr-3 flex-shrink-0"></div>
                          Year-round advisory services
                        </li>
                        <li className="flex items-start">
                          <div className="dot-accent mt-2 mr-3 flex-shrink-0"></div>
                          Automated client retention
                        </li>
                        <li className="flex items-start">
                          <div className="dot-accent mt-2 mr-3 flex-shrink-0"></div>
                          Strategic business planning
                        </li>
                        <li className="flex items-start">
                          <div className="dot-accent mt-2 mr-3 flex-shrink-0"></div>
                          Technology integration
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted p-6 rounded-lg">
                      <h3 className="font-semibold text-primary mb-3 flex items-center">
                        <Calculator className="h-5 w-5 mr-2" />
                        Industry Insights:
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Revenue Growth Potential</span>
                          <span className="font-bold text-primary">40-60%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Client Retention Rate</span>
                          <span className="font-bold text-primary">85%+</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Off-Season Revenue</span>
                          <span className="font-bold text-primary">+200%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
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
            <div className="max-w-text-md mx-auto text-center">
              <div className="bg-accent/10 p-8 rounded-lg border">
                <Building className="h-12 w-12 text-accent mx-auto mb-6" />
                <blockquote className="text-xl text-foreground italic mb-6">
                  "SmartFirm understood our niche from day one. As a forensic accounting firm, we have unique marketing 
                  challenges that most agencies can't grasp. Their industry-specific approach helped us reach the right 
                  clients and establish thought leadership in our field."
                </blockquote>
                <cite className="text-muted-foreground">
                  — Jennifer Martinez, Martinez Forensic Accounting
                </cite>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-vibrant-teal text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Is Your Industry Ready for Smart Growth?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-text-sm mx-auto">
              Discover tailored strategies designed for your accounting specialization. Let's discuss how industry-specific 
              solutions can accelerate your firm's growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="white-on-dark"
                asChild
              >
                <a href="/get-started">
                  Book an Industry-Specific Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="white-outline-on-dark"
                asChild
              >
                <a href="/leading-marketing-services-for-accounting-firms">
                  View All Services
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-section md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-text-lg mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                  Industry-Specific FAQ for Accounting Professionals
                </h2>
                <p className="text-lg text-muted-foreground">
                  Common questions about tailored marketing solutions for different types of accounting practices and specializations.
                </p>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqsToRender.map((faq, index) => (
                  <AccordionItem
                    key={faq.question}
                    value={`industries-faq-${index}`}
                    className="border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left text-sm">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <FaqAnswer
                        text={faq.answer}
                        paragraphClassName="text-muted-foreground leading-relaxed"
                      />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
