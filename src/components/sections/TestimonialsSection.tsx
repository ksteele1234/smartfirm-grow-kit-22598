import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      firm: "Johnson & Associates CPA",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      content: "SmartFirm transformed our lead generation completely. We went from struggling to find new clients to having a consistent pipeline of qualified prospects. The ROI has been incredible.",
      rating: 5,
      results: "+150% Lead Generation"
    },
    {
      name: "Michael Chen",
      firm: "TaxPro Services",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      content: "The automated follow-up system alone has saved us 20 hours per week. Our client retention has improved dramatically, and we're finally getting the 5-star reviews we deserve.",
      rating: 5,
      results: "95% Client Retention"
    },
    {
      name: "Emily Rodriguez",
      firm: "Rodriguez Accounting Group",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      content: "Working with SmartFirm was the best business decision we made this year. Their SEO strategy got us ranking #1 for 'CPA near me' and our website traffic tripled.",
      rating: 5,
      results: "+300% Website Traffic"
    },
    {
      name: "David Thompson",
      firm: "Thompson Financial Services",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      content: "The team at SmartFirm understands accounting firms. They didn't just give us generic marketing advice - they built a system that actually works for our industry.",
      rating: 5,
      results: "2.5x Revenue Growth"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-teal/5">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Trusted by
            <span className="text-teal block">Growing Firms</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what accounting firm owners are saying about their results with SmartFirm.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white shadow-soft border-border/50 overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Quote Icon */}
                <div className="lg:col-span-1 flex justify-center lg:justify-start">
                  <div className="relative">
                    <Quote className="h-16 w-16 text-primary/20" />
                    <img 
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 absolute -bottom-4 -right-4"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Stars */}
                  <div className="flex justify-center lg:justify-start space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg lg:text-xl text-text-secondary leading-relaxed italic text-center lg:text-left">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Attribution */}
                  <div className="text-center lg:text-left">
                    <div className="font-semibold text-foreground text-lg">
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
            </CardContent>
          </Card>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div className="text-center">
          <p className="text-sm text-text-light mb-8 font-medium">
            Trusted partners and industry leaders
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <div className="text-text-light font-bold text-xl">QuickBooks</div>
            <div className="text-text-light font-bold text-xl">Xero</div>
            <div className="text-text-light font-bold text-xl">TaxWise</div>
            <div className="text-text-light font-bold text-xl">ProConnect</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;