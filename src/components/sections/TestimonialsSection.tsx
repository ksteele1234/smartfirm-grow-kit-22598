import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import danImage from "@/assets/testimonial-dan.webp";
import joannaImage from "@/assets/testimonial-joanna.webp";
import jennImage from "@/assets/testimonial-jenn.webp";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Dan",
      firm: "CPA Firm Owner",
      image: danImage,
      content: "SmartFirm's automation saved us hours each week and helped us streamline client communication.",
      rating: 5,
      logo: "CPA Firm A"
    },
    {
      name: "Joanna",
      firm: "Accounting Practice Manager", 
      image: joannaImage,
      content: "The team brought clarity to our marketing and helped us attract consistent leads.",
      rating: 5,
      logo: "TaxPro Services"
    },
    {
      name: "Jenn",
      firm: "Tax Advisory Partner",
      image: jennImage, 
      content: "We've seen measurable improvements in client retention with their systems.",
      rating: 5,
      logo: "Business Advisory LLC"
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
    <section className="relative py-16 pb-32 md:pb-40 bg-secondary overflow-hidden">
      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 text-background">
        <svg className="relative block w-full h-[80px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="container relative mx-auto px-4 lg:px-6 z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6 drop-shadow-lg">
            Trusted by Accounting Firms Nationwide
          </h2>
          <p className="text-lg text-white/95 max-w-text-sm mx-auto drop-shadow-md">
            See what firm owners are saying about their growth with SmartFirm
          </p>
        </div>

        {/* Client Logos in Grayscale */}
        <div className="flex flex-wrap justify-center items-center gap-md lg:gap-lg mb-12 opacity-40">
          <div className="text-white font-semibold text-lg grayscale">CPA Firm A</div>
          <div className="text-white font-semibold text-lg grayscale">Accounting Plus</div>
          <div className="text-white font-semibold text-lg grayscale">TaxPro Services</div>
          <div className="text-white font-semibold text-lg grayscale">Business Advisory LLC</div>
          <div className="text-white font-semibold text-lg grayscale">Financial Partners</div>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-on-dark color-transition">
            <div className="space-y-8">
              {/* Quote Icon */}
              <div className="flex justify-center">
                <Quote className="h-12 w-12 text-white/40" />
              </div>

              {/* Content */}
              <blockquote className="text-xl lg:text-2xl text-white leading-relaxed text-center max-w-3xl mx-auto">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author Info with Stars */}
              <div className="flex flex-col items-center space-y-4">
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-3 border-on-dark-strong shadow-lg"
                />
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <div className="font-semibold text-lg text-white">
                      {currentTestimonial.name}
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent-muted text-accent-muted" />
                      ))}
                    </div>
                  </div>
                  <div className="text-white/80">
                    {currentTestimonial.firm}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevTestimonial}
                  className="w-10 h-10 p-0 text-white hover:bg-white/20 border border-on-dark-strong"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                
                {/* Carousel Indicators */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full color-transition ${
                        index === currentIndex 
                          ? 'bg-white w-8' 
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextTestimonial}
                  className="w-10 h-10 p-0 text-white hover:bg-white/20 border border-on-dark-strong"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Stats */}
        <div className="grid md:grid-cols-3 gap-md max-w-4xl mx-auto mt-12">
          <div className="text-center">
            <div className="text-4xl font-heading font-bold text-white mb-2">98%</div>
            <div className="text-white/90">Client Satisfaction</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-heading font-bold text-white mb-2">250%</div>
            <div className="text-white/90">Lead Growth</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-heading font-bold text-white mb-2">90 Days</div>
            <div className="text-white/90">To Positive ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;