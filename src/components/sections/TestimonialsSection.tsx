import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { GeometricDivider, BackgroundPattern } from "@/components/ui/visual-accents";
import { EnhancedCard } from "@/components/ui/enhanced-card";

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

        {/* Testimonial Carousel - Offset Layout */}
        <div className="max-w-5xl mx-auto">
          <EnhancedCard 
            variant="elevated" 
            hoverEffect="glow" 
            className="overflow-hidden"
          >
            <CardContent className="p-8 lg:p-12">
              <div className="relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="h-8 w-8 text-primary" />
                </div>

                {/* Testimonial Content */}
                <div className="space-y-6">
                  {/* Stars */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-xl lg:text-2xl text-text-primary leading-relaxed text-center max-w-3xl mx-auto">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center justify-center space-x-4">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="text-center">
                      <div className="font-semibold text-lg text-foreground">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-text-light">
                        {testimonials[currentIndex].firm}
                      </div>
                      <div className="inline-block mt-2 px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium">
                        {testimonials[currentIndex].results}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </EnhancedCard>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
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