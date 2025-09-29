import { useState, useEffect } from "react";
import { StandardCard } from "@/components/ui/standard-card";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GeometricDivider } from "@/components/ui/visual-accents";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Michael Chen",
      firm: "TaxPro Services",
      image: "/placeholder.svg",
      content: "SmartFirm's automated follow-up saved us 20+ hours a week. Within three months, our client retention jumped to 95%, and we finally started collecting the 5-star reviews we deserved.",
      rating: 5,
      results: "95% Client Retention"
    },
    {
      name: "Sarah Williams",
      firm: "CPA Consulting Group", 
      image: "/placeholder.svg",
      content: "The ROI has been incredible. We're getting qualified leads consistently, and the automated systems run everything in the background while we focus on client work.",
      rating: 5,
      results: "3x Lead Generation"
    },
    {
      name: "David Rodriguez",
      firm: "Accounting Plus LLC",
      image: "/placeholder.svg", 
      content: "Their SEO work got us ranking #1 for 'CPA near me' in our area. We went from 2-3 new clients per month to 15+ qualified inquiries. Game changer for our practice.",
      rating: 5,
      results: "500% Inquiry Increase"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-teal/5 to-primary/5 relative overflow-hidden">
      <div className="container relative mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Trusted by Growing
            <span className="text-teal block">Accounting Firms</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it—here's what firm owners are saying:
          </p>
        </div>

        <GeometricDivider variant="dots" />

        {/* Featured Testimonial */}
        <div className="max-w-5xl mx-auto mb-16">
          <StandardCard
            icon={Quote}
            title={currentTestimonial.results}
            description=""
            variant="featured"
            className="relative"
          >
            <div className="space-y-6">
              {/* Stars */}
              <div className="flex justify-center space-x-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl lg:text-2xl text-text-primary leading-relaxed text-center max-w-3xl mx-auto">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <div className="font-semibold text-lg text-foreground">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-text-light">
                      {currentTestimonial.firm}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevTestimonial}
                    className="w-10 h-10 p-0"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextTestimonial}
                    className="w-10 h-10 p-0"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </StandardCard>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 scale-feedback color-transition ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* Results Overview */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <StandardCard
            title="Client Satisfaction"
            description="Average rating from accounting firms using SmartFirm's marketing automation systems."
            className="text-center"
          >
            <div className="text-3xl font-heading font-bold text-primary">98%</div>
          </StandardCard>
          
          <StandardCard
            title="Lead Growth"
            description="Average increase in qualified leads within 90 days of implementation."
            variant="popular"
            className="text-center"
          >
            <div className="text-3xl font-heading font-bold text-primary">250%</div>
          </StandardCard>
          
          <StandardCard
            title="ROI Achievement"
            description="Firms see positive ROI within the first quarter of working with SmartFirm."
            className="text-center"
          >
            <div className="text-3xl font-heading font-bold text-primary">ROI+</div>
          </StandardCard>
        </div>

        {/* Partner Logos */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="text-center text-text-light text-sm mb-8 font-medium">
            Trusted by leading accounting firms nationwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            <div className="text-text-light font-semibold text-lg">CPA Firm A</div>
            <div className="text-text-light font-semibold text-lg">Accounting Plus</div>
            <div className="text-text-light font-semibold text-lg">TaxPro Services</div>
            <div className="text-text-light font-semibold text-lg">Business Advisory LLC</div>
            <div className="text-text-light font-semibold text-lg">Financial Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;