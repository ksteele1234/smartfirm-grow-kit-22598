import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { StandardCard } from "@/components/ui/standard-card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Star, 
  Search, 
  Mail, 
  Users, 
  Globe, 
  Smartphone,
  Settings,
  TrendingUp,
  Award,
  ArrowRight,
  Phone
} from "lucide-react";
import { GeometricDivider, FloatingShapes, BackgroundPattern } from "@/components/ui/visual-accents";
import SEO from "@/components/SEO";
import { 
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage 
} from "@/components/ui/breadcrumb";

const AllServices = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Marketing Automation",
      description: "Comprehensive marketing automation platform designed specifically for accounting firms. Streamline your entire marketing process from lead capture to client conversion.",
      href: "/services/marketing-automation"
    },
    {
      icon: Settings,
      title: "Technology Solutions",
      description: "Modern technology infrastructure and integrations that connect your practice management tools, accounting software, and marketing systems seamlessly.",
      href: "/services/technology-solutions"
    },
    {
      icon: TrendingUp,
      title: "Business Optimization",
      description: "Strategic consulting and implementation services to optimize your firm's operations, workflows, and growth trajectory for maximum efficiency.",
      href: "/services/business-optimization"
    },
    {
      icon: Award,
      title: "Executive Services",
      description: "High-touch strategic services for firm leaders including growth planning, market positioning, and executive coaching tailored to accounting practices.",
      href: "/services/executive-services"
    },
    {
      icon: Zap,
      title: "Automated Lead Follow-Up",
      description: "Intelligent follow-up sequences via email, SMS, and voicemail that convert inquiries into booked calls within 24-48 hours. Never lose a lead again.",
      href: "/services/automated-lead-follow-up"
    },
    {
      icon: Star,
      title: "Client Review Generation",
      description: "Automated review request system that builds credibility and attracts more clients. Triple your 5-star reviews in 90 days with proven workflows.",
      href: "/services/client-review-generation"
    },
    {
      icon: Search,
      title: "SEO for Accountants",
      description: "Dominate local search results and Google Maps. Our accounting-specific SEO strategies bring in qualified leads actively searching for your services.",
      href: "/services/seo-for-accountants"
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Done-for-you social media content and management. Establish thought leadership on LinkedIn, Facebook, and other platforms while we handle everything.",
      href: "/services/social-media-management"
    },
    {
      icon: Mail,
      title: "Email Marketing for CPAs",
      description: "Personalized email campaigns that keep clients engaged year-round. Improve retention rates and create upsell opportunities with strategic nurture sequences.",
      href: "/services/email-marketing"
    },
    {
      icon: Globe,
      title: "Website Design",
      description: "Conversion-optimized websites built specifically for accounting firms. Secure client portals, mobile-responsive design, and compliance-ready infrastructure.",
      href: "/services/website-design"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="All Services | SmartFirm"
        description="Complete suite of marketing, technology, and optimization services for accounting firms. Lead generation to client retention."
        pageType="service"
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "All Services", url: "/services/all" }
        ]}
      />
      <Header />
      
      {/* Breadcrumbs */}
      <div className="px-4 sm:px-6 lg:px-8 py-3 border-b border-border/50 bg-background-light/60">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/services">Services</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>All Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
        <FloatingShapes variant="circles" />
        <BackgroundPattern pattern="dots" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              Complete Suite of Services for
              <span className="text-teal block mt-2">Accounting Firms</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              From marketing automation to technology solutions, we provide everything your accounting firm needs to attract clients, streamline operations, and scale sustainably.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <GeometricDivider variant="lines" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <StandardCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
                variant={index === 0 ? "featured" : index === 5 ? "popular" : "default"}
                className="scale-feedback color-transition h-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-12 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Benefits of Working with SmartFirm</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-xl font-semibold text-foreground mb-2">Growth Outcomes</p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Predictable pipeline with automation that follows up 24/7</li>
                <li>Higher close rates from faster response and better nurturing</li>
                <li>Improved client retention through consistent touchpoints</li>
              </ul>
            </div>
            <div>
              <p className="text-xl font-semibold text-foreground mb-2">Operational Wins</p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Less tool-juggling with integrated systems that your team will use</li>
                <li>Clear reporting and dashboards in plain English</li>
                <li>Processes that scale without adding headcount</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="pt-8 pb-8 px-4 sm:px-6 lg:px-8 bg-background-light/50 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-lg font-semibold text-foreground mb-2">1) Strategy Call</p>
              <p className="text-text-secondary">We assess your current funnel, tools, and goals to uncover the highest-impact opportunities.</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground mb-2">2) Implementation</p>
              <p className="text-text-secondary">We configure automations, integrations, and content—done for you—to launch quickly.</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground mb-2">3) Optimize & Scale</p>
              <p className="text-text-secondary">We measure results, refine campaigns, and expand what works across services and offices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="pt-8 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="border border-border rounded-lg p-4 bg-background">
              <summary className="cursor-pointer font-medium text-foreground">How fast can we get live?</summary>
              <div className="text-muted-foreground mt-2">Most firms launch within 2–4 weeks, with early wins often in the first 30 days.</div>
            </details>
            <details className="border border-border rounded-lg p-4 bg-background">
              <summary className="cursor-pointer font-medium text-foreground">Will this integrate with our tools?</summary>
              <div className="text-muted-foreground mt-2">Yes—QuickBooks, Xero, Google/Microsoft, and practice tools like Karbon and Canopy.</div>
            </details>
            <details className="border border-border rounded-lg p-4 bg-background">
              <summary className="cursor-pointer font-medium text-foreground">Is training provided?</summary>
              <div className="text-muted-foreground mt-2">We include team training and documentation so adoption sticks.</div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/95 to-teal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Practice?</p>
          <p className="text-xl opacity-90 mb-8 text-white/90">
            Let's create a customized growth plan for your firm. Book a free strategy call to discover which services will have the biggest impact on your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="group" asChild>
              <a href="/get-started">
                <Phone className="mr-2 h-5 w-5" />
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <a href="/contact">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllServices;
