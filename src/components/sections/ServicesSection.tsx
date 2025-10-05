import { ArrowRight, Mail, Search, Star, Users, Zap, Globe, Phone, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: "Automated Lead Follow-up",
      description: "Convert inquiries into clients with CPA-focused email & SMS automation.",
      link: "/services/automated-lead-follow-up"
    },
    {
      icon: Star,
      title: "Client Review Generation",
      description: "Build trust and referrals with more 5-star reviews.",
      link: "/services/client-review-generation"
    },
    {
      icon: Search,
      title: "SEO for Accounting Firms", 
      description: "Dominate local search and attract high-quality clients.",
      link: "/services/seo-for-accountants"
    },
    {
      icon: Mail,
      title: "Email Marketing for CPAs",
      description: "Keep leads and clients engaged with personalized campaigns.",
      link: "/services/email-marketing"
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Professional content that positions your firm as a trusted authority.",
      link: "/services/social-media-management"
    },
    {
      icon: Globe,
      title: "Website Optimization",
      description: "Modern, SEO-friendly websites for accountants that convert.",
      link: "/services/website-design"
    },
    {
      icon: Phone,
      title: "Marketing Automation",
      description: "Save time and scale faster with automation tailored for accountants.",
      link: "/services/marketing-automation"
    }
  ];

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container relative mx-auto px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[#0F172A] mb-6">
            Complete Marketing Solutions for 
            <span className="text-teal block">Accountants, CPAs, and Bookkeepers</span>
          </h2>
          <p className="text-xl text-[#6B7280] max-w-4xl mx-auto leading-relaxed mb-8">
            SmartFirm delivers marketing automation, SEO, and client growth strategies built specifically for accounting firms.
          </p>
        </div>

        {/* Services Grid - 3 cards per row */}
        <div className="space-y-12">
          {/* Row 1 */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => {
              const Icon = service.icon;
              return (
                <Link 
                  key={index}
                  to={service.link}
                  className="group bg-[#7AB2B2]/10 hover:bg-[#7AB2B2]/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border border-[#7AB2B2]/20"
                >
                  <div className="mb-4">
                    <Icon className="h-10 w-10 text-[#647FBC] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-[#7AB2B2]/30 to-transparent" />

          {/* Row 2 */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(3, 6).map((service, index) => {
              const Icon = service.icon;
              return (
                <Link 
                  key={index + 3}
                  to={service.link}
                  className="group bg-[#7AB2B2]/10 hover:bg-[#7AB2B2]/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border border-[#7AB2B2]/20"
                >
                  <div className="mb-4">
                    <Icon className="h-10 w-10 text-[#647FBC] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-[#7AB2B2]/30 to-transparent" />

          {/* Row 3 - Remaining card(s) */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(6).map((service, index) => {
              const Icon = service.icon;
              return (
                <Link 
                  key={index + 6}
                  to={service.link}
                  className="group bg-[#7AB2B2]/10 hover:bg-[#7AB2B2]/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border border-[#7AB2B2]/20"
                >
                  <div className="mb-4">
                    <Icon className="h-10 w-10 text-[#647FBC] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-teal/5 rounded-2xl p-8 lg:p-12 border border-border/50">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-[#0F172A] mb-4">
              Ready to Transform Your Marketing?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="dark-teal" size="lg" className="group" asChild>
                <a href="/get-started">
                  <Phone className="mr-2 h-5 w-5" />
                  Book My Free Growth Strategy Call
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