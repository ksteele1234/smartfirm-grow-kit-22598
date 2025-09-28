import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Mail, Search, Star, Users, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: "Automated Lead Follow-up",
      description: "Never lose a prospect again with our intelligent follow-up sequences that convert leads into clients."
    },
    {
      icon: Star,
      title: "Client Review Generation",
      description: "Build trust and credibility with automated systems that generate authentic 5-star reviews."
    },
    {
      icon: Search,
      title: "SEO for Accounting Firms",
      description: "Dominate local search results and attract high-value clients actively searching for CPA services and accounting expertise."
    },
    {
      icon: Mail,
      title: "Email Marketing for CPAs",
      description: "Nurture client relationships and stay top-of-mind with targeted email marketing campaigns designed specifically for accounting practices."
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Establish thought leadership and build your brand across all major social platforms."
    },
    {
      icon: Globe,
      title: "Website Optimization",
      description: "Convert more visitors into clients with high-performing websites designed for accounting firms."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Complete Marketing Solutions for
            <span className="text-teal block">Accounting Firms & CPAs</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From lead generation for accounting firms to client retention strategies, our marketing automation delivers everything you need to grow your practice consistently.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-soft transition-all duration-300 border-border/50 hover:border-primary/20 bg-background">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-teal/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-teal/20 transition-all duration-300">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-text-secondary leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-teal/5 rounded-2xl p-8 lg:p-12 border border-border/50">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4">
              Ready to Transform Your Marketing?
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Let's discuss how our marketing system can help you achieve your growth goals. Book a free strategy call today.
            </p>
            <Button variant="hero" size="lg" className="group">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;