import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar, Clock, CheckCircle } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-teal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      <div className="container relative mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Headline */}
          <div className="space-y-6 mb-12">
            <h2 className="text-4xl lg:text-6xl font-heading font-bold leading-tight">
              Ready to Grow
              <span className="block text-accent-light">Your Firm?</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-blue-grey leading-relaxed max-w-3xl mx-auto">
              Book a free, no-obligation strategy call to see how SmartFirm can help you reach your goals.
            </p>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-accent-light flex-shrink-0" />
              <span className="text-white/90">Free 30-minute consultation</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-accent-light flex-shrink-0" />
              <span className="text-white/90">Custom growth strategy</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-accent-light flex-shrink-0" />
              <span className="text-white/90">No high-pressure sales</span>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-6 mb-12">
            <Button 
              variant="hero-secondary" 
              size="hero" 
              className="group text-xl px-12 py-6 h-auto"
            >
              <Calendar className="mr-3 h-6 w-6" />
              Book My Free Strategy Call
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex items-center justify-center space-x-2 text-white/80">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Usually within 24 hours</span>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/90 mb-4">
              Prefer to speak directly? Call us now:
            </p>
            <a 
              href="tel:+1-555-SMART-FIRM" 
              className="inline-flex items-center text-accent-light hover:text-white transition-colors font-semibold text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              (555) SMART-FIRM
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent-light mb-2">500+</div>
                <div className="text-white/80 text-sm">Firms Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-light mb-2">2.5x</div>
                <div className="text-white/80 text-sm">Average ROI</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-light mb-2">95%</div>
                <div className="text-white/80 text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-light mb-2">30</div>
                <div className="text-white/80 text-sm">Days to Results</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;