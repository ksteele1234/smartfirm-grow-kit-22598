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
      description: "Turn inquiries into booked calls fast. Our system sends emails, texts, and voicemails for you. Works with QuickBooks, Xero, Karbon, and Canopy."
    },
    {
      icon: Star,
      title: "Client Review Generation",
      description: "Get more 5-star reviews. Our automated requests help firms triple their reviews in 90 days. Build trust and keep clients longer."
    },
    {
      icon: Search,
      title: "SEO for Accounting Firms", 
      description: "Show up when clients search. Rank higher on Google Maps and local search. Get more qualified leads ready to hire you."
    },
    {
      icon: Mail,
      title: "Email Marketing for CPAs",
      description: "Stay in touch with personalized email campaigns. Keep clients coming back. Boost renewals and sell more services."
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Build your brand on LinkedIn and Facebook. We create and post content for you. Become the expert your clients trust."
    },
    {
      icon: Globe,
      title: "Website Optimization",
      description: "Turn website visitors into clients. Get a fast, mobile-friendly site with secure client portals. Built for accounting firms."
    },
    {
      icon: Phone,
      title: "Marketing Automation",
      description: "Put your marketing on autopilot. Nurture leads and engage clients automatically. Grow your practice while you focus on accounting."
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
            <span className="text-teal block">Accounting Firms & CPAs</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
            Grow your practice with marketing automation designed specifically for accountants. From lead generation for accounting firms to client retention strategies, SmartFirm delivers a done-for-you system that consistently wins new clients, keeps them engaged, and frees up your time.
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
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Let's map out a growth plan built for your firm. With SmartFirm's done-for-you marketing automation, you'll get predictable growth, stronger client retention, and systems that scale with your firm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="/get-started">
                  <Phone className="mr-2 h-5 w-5" />
                  Book Your Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group" asChild>
                <Link to="/services/all">
                  <Eye className="mr-2 h-5 w-5" />
                  Explore All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;