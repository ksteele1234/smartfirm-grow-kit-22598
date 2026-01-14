import { ArrowRight, Mail, Search, Star, Users, Zap, Globe, Phone, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: "Automated Lead Follow-up",
      description: "Convert inquiries into clients with CPA-focused email & SMS automation.",
      link: "/services/automated-lead-follow-up-for-cpas"
    },
    {
      icon: Star,
      title: "Client Review Generation",
      description: "Build trust and referrals with more 5-star reviews.",
      link: "/services/automated-review-generation-for-cpas"
    },
    {
      icon: Search,
      title: "SEO for Accounting Firms",
      description: "Dominate local search and attract high-quality clients.",
      link: "/services/seo-for-accounting-firms"
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Professional content that positions your firm as a trusted authority.",
      link: "/services/social-media-management-for-cpas"
    },
    {
      icon: Globe,
      title: "Website Optimization",
      description: "Modern, SEO-friendly websites for accountants that convert.",
      link: "/services/professional-website-design-for-accounting-firms"
    },
    {
      icon: Phone,
      title: "Marketing Automation",
      description: "Save time and scale faster with automation tailored for accountants.",
      link: "/services/marketing-automation-for-accounting-firms"
    }
  ];

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container relative mx-auto px-4 lg:px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Complete Marketing Solutions for Accountants, CPAs, and Bookkeepers
          </h2>
          <p className="text-lead text-muted-foreground max-w-text-lg mx-auto leading-relaxed mb-8">
            From SEO and PPC services for accounting firms to review generation and website optimization. SmartFirm offers marketing packages for CPA firms that convert prospects into long-term clients.
          </p>
        </div>

        {/* Services Grid - 3 cards per row */}
        <div className="space-y-12">
          {/* Row 1 */}
          <div className="grid md:grid-cols-3 gap-sm">
            {services.slice(0, 3).map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-accent/10 hover:bg-accent/20 rounded-card-lg p-6 hover:elevation-3 border border-accent/20 color-transition"
                >
                  <div className="mb-4">
                    <Icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-3 gap-sm">
            {services.slice(3, 6).map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index + 3}
                  to={service.link}
                  className="group bg-accent/10 hover:bg-accent/20 rounded-card-lg p-6 hover:elevation-3 border border-accent/20 color-transition"
                >
                  <div className="mb-4">
                    <Icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-card-lg p-8 lg:p-12 border border-border/50">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4">
              Ready to Transform Your Marketing?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button id="services-section-book-call-btn" variant="vibrant-teal" size="lg" className="group" asChild>
                <a href="/get-started">
                  <Phone className="mr-2 h-5 w-5" />
                  Book a Free Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="default" size="lg" className="group" asChild>
                <a href="#how-it-works">
                  <Eye className="mr-2 h-5 w-5" />
                  Show Me How It Works
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;