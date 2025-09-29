import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar, Clock, CheckCircle } from "lucide-react";
import { FloatingShapes } from "@/components/ui/visual-accents";

const FinalCTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-teal relative overflow-hidden">
      <FloatingShapes variant="circles" className="opacity-20" />
      
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
        {/* Additional geometric accent */}
        <div className="absolute top-1/4 right-16 w-32 h-32 border-2 border-white/10 rounded-full"></div>
        <div className="absolute bottom-1/4 left-16 w-24 h-24 border border-white/10 transform rotate-45"></div>
      </div>

      <div className="container relative mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Headline */}
          <div className="space-y-6 mb-12">
            <h2 className="text-4xl lg:text-6xl font-heading font-bold leading-tight">
              Why Firms Choose
              <span className="block text-accent-light">SmartFirm</span>
            </h2>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-accent-light flex-shrink-0" />
              <span className="text-white/90">Cloud-Native & Secure</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-accent-light flex-shrink-0" />
              <span className="text-white/90">100% Client Satisfaction Rate</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-accent-light flex-shrink-0" />
              <span className="text-white/90">Results in 30 Days or Less</span>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/90 mb-4">
              Prefer to speak directly? Call us at <a 
                href="tel:+15416583789" 
                className="inline-flex items-center text-accent-light hover:text-white transition-colors font-semibold"
              >
                541-658-3789
              </a>
            </p>
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