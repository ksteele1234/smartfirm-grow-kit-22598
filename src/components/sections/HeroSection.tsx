import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-teal/5 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      
      <div className="container relative mx-auto px-4 lg:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-primary leading-tight">
                Marketing and Automation for
                <span className="text-teal block">
                  Ambitious Accounting Firms
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl lg:text-2xl text-text-secondary leading-relaxed font-body">
                Stop wasting time on marketing that doesn't work. SmartFirm helps you attract more clients and grow your firm with less effort.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-text-light">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal rounded-full"></div>
                <span className="text-sm font-medium">500+ Firms Served</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">2.5x Average ROI</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal rounded-full"></div>
                <span className="text-sm font-medium">30 Day Results</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="hero" className="group">
                Get Your Free Growth Plan
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                See Our Services
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8">
              <p className="text-sm text-text-light mb-4 font-medium">
                Trusted by leading accounting firms nationwide
              </p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-text-light font-semibold text-lg">CPA Firm A</div>
                <div className="text-text-light font-semibold text-lg">Accounting Plus</div>
                <div className="text-text-light font-semibold text-lg">TaxPro Services</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 bg-white p-4 rounded-xl shadow-soft border border-border z-10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal/20 rounded-lg flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-teal" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Lead Generation</div>
                    <div className="text-xs text-text-secondary">+240% increase</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-xl shadow-soft border border-border z-10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Play className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Client Retention</div>
                    <div className="text-xs text-text-secondary">95% satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Main Visual */}
              <div className="bg-gradient-to-br from-primary/10 to-teal/10 rounded-2xl p-8 backdrop-blur-sm border border-border/50">
                <div className="space-y-4">
                  <div className="h-4 bg-primary/20 rounded-full w-3/4"></div>
                  <div className="h-4 bg-teal/20 rounded-full w-1/2"></div>
                  <div className="h-4 bg-blue-grey/20 rounded-full w-2/3"></div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="h-20 bg-white/80 rounded-lg shadow-card"></div>
                    <div className="h-20 bg-white/80 rounded-lg shadow-card"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;