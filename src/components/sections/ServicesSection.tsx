import { StandardCard } from "@/components/ui/standard-card";
import { ArrowRight, Mail, Search, Star, Users, Zap, Globe, Phone, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GeometricDivider, FloatingShapes, BackgroundPattern } from "@/components/ui/visual-accents";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: "Automated Lead Follow-up",
      description: "Convert inquiries into clients with CPA-focused email & SMS automation."
    },
    {
      icon: Star,
      title: "Client Review Generation",
      description: "Build trust and referrals with more 5-star reviews."
    },
    {
      icon: Search,
      title: "SEO for Accounting Firms", 
      description: "Dominate local search and attract high-quality clients."
    },
    {
      icon: Mail,
      title: "Email Marketing for CPAs",
      description: "Keep leads and clients engaged with personalized campaigns."
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Professional content that positions your firm as a trusted authority."
    },
    {
      icon: Globe,
      title: "Website Optimization",
      description: "Modern, SEO-friendly websites for accountants that convert."
    },
    {
      icon: Phone,
      title: "Marketing Automation",
      description: "Save time and scale faster with automation tailored for accountants."
    }
  ];

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <BackgroundPattern pattern="dots" />
      <div className="container relative mx-auto px-4 lg:px-6">
        <FloatingShapes variant="circles" />
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Complete Marketing Solutions for 
            <span className="text-teal block">Accountants, CPAs, and Bookkeepers</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
            SmartFirm delivers marketing automation, SEO, and client growth strategies built specifically for accounting firms.
          </p>
        </div>

        <GeometricDivider variant="lines" />

        {/* Services Grid - Consistent Layout */}
        <div className="grid gap-8 mb-12 stagger-container">
          {/* First Row - 2 cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.slice(0, 2).map((service, index) => (
              <StandardCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                variant={index === 1 ? "featured" : "default"}
                className="scale-feedback color-transition"
              />
            ))}
          </div>
          
          {/* Second Row - 2 cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.slice(2, 4).map((service, index) => (
              <StandardCard
                key={index + 2}
                icon={service.icon}
                title={service.title}
                description={service.description}
                className="scale-feedback color-transition"
              />
            ))}
          </div>
          
          {/* Third Row - 3 cards offset */}
          <div className="grid md:grid-cols-3 gap-8 md:ml-12">
            {services.slice(4).map((service, index) => (
              <StandardCard
                key={index + 4}
                icon={service.icon}
                title={service.title}
                description={service.description}
                variant={index === 1 ? "popular" : "default"}
                className="scale-feedback color-transition"
              />
            ))}
          </div>
        </div>

        <GeometricDivider variant="wave" />

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-teal/5 rounded-2xl p-8 lg:p-12 border border-border/50">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4">
              Ready to Transform Your Marketing?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="/get-started">
                  <Phone className="mr-2 h-5 w-5" />
                  Book My Free Growth Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group" asChild>
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