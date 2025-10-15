import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] py-20 md:py-[120px] overflow-hidden">
      {/* Base Layer - Solid Deep Teal */}
      <div className="absolute inset-0 bg-[#0a2e2e] z-0" />

      {/* Wave Layer 2 - Large wave from bottom-left (#134444) - ~40% height */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-[40%] z-[1]" 
        preserveAspectRatio="none" 
        viewBox="0 0 1200 400"
      >
        <path 
          d="M0,400 C300,350 500,320 700,340 C900,360 1100,350 1200,320 L1200,400 Z" 
          fill="#134444"
        />
      </svg>

      {/* Wave Layer 3 - Mid wave from bottom-right (#1a5555) - ~35% height */}
      <svg 
        className="absolute bottom-0 right-0 w-full h-[35%] z-[2]" 
        preserveAspectRatio="none" 
        viewBox="0 0 1200 350"
      >
        <path 
          d="M0,250 C200,280 400,300 600,280 C800,260 1000,240 1200,260 L1200,350 L0,350 Z" 
          fill="#1a5555"
        />
      </svg>

      {/* Wave Layer 4 - Accent wave from top-right (#14b8a6 at 15% opacity) - ~25% height - Desktop only */}
      <svg 
        className="hidden md:block absolute top-0 right-0 w-full h-[25%] z-[3]" 
        preserveAspectRatio="none" 
        viewBox="0 0 1200 250"
      >
        <path 
          d="M1200,0 C900,50 700,80 500,60 C300,40 100,20 0,40 L0,0 Z" 
          fill="#14b8a6" 
          fillOpacity="0.15"
        />
      </svg>

      {/* Orbital Circle 1 - Top Right */}
      <svg 
        className="absolute top-20 right-10 w-32 h-32 z-[2] opacity-20 hidden lg:block" 
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="40" stroke="#2dd4bf" strokeWidth="1" fill="none" />
        <circle cx="50" cy="50" r="30" stroke="#2dd4bf" strokeWidth="1" fill="none" />
        <circle cx="50" cy="50" r="20" stroke="#2dd4bf" strokeWidth="1" fill="none" />
      </svg>

      {/* Orbital Circle 2 - Bottom Left */}
      <svg 
        className="absolute bottom-40 left-10 w-24 h-24 z-[1] opacity-20 hidden lg:block" 
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="35" stroke="#2dd4bf" strokeWidth="1" fill="none" />
        <circle cx="50" cy="50" r="25" stroke="#2dd4bf" strokeWidth="1" fill="none" />
      </svg>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 space-y-8">
            
            {/* Headline with Gradient */}
            <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight bg-gradient-to-r from-white via-teal-200 to-teal-400 bg-clip-text text-transparent mb-6">
              Predictable Growth for Accounting Firms Without Wasting Time on Marketing
            </h1>

            {/* Subheadline */}
            <div id="sf-keyword-intro">
              <p className="text-xl text-white/70 leading-relaxed max-w-[600px] mb-8">
                SmartFirm is the best marketing agency for accountants, CPAs, bookkeepers, and tax preparers. We deliver marketing automation, lead generation, and SEO services designed to get more accounting clients and keep them longer.
              </p>
            </div>

            {/* Trust Badges with Gold Bullets */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <span className="text-white text-sm font-medium">40+ Years Combined Experience</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#fbbf24]" />
              <span className="text-white text-sm font-medium">50+ Companies Supported</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#fbbf24]" />
              <span className="text-white text-sm font-medium">Up in 30 Days</span>
            </div>

            {/* CTA Button - Enhanced Coral */}
            <div className="flex justify-start">
              <Button 
                variant="coral" 
                size="lg"
                className="px-10 py-4 text-lg font-bold rounded-xl shadow-[0_4px_24px_rgba(251,113,133,0.5)] hover:-translate-y-0.5 hover:shadow-[0_6px_32px_rgba(251,113,133,0.6)] transition-all duration-300 w-full sm:w-auto"
                asChild
              >
                <a href="/get-started" className="inline-flex items-center justify-center gap-2">
                  Get Your Free Growth Plan
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Glassmorphism Metric Cards */}
          <div className="order-1 lg:order-2 relative space-y-6">
            
            {/* Card 1: Revenue Growth */}
            <div 
              className="animate-float" 
              style={{ animationDelay: '0s' }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-[0_8px_32px_rgba(20,184,166,0.15)]">
                <p className="text-teal-300 text-sm font-medium mb-2">Average Revenue Growth</p>
                <p className="text-[#fbbf24] text-4xl font-bold mb-1">+47%</p>
                <p className="text-white/70 text-xs">Within first 12 months</p>
              </div>
            </div>

            {/* Card 2: Client Acquisition */}
            <div 
              className="animate-float ml-0 lg:ml-8" 
              style={{ animationDelay: '0.5s' }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-[0_8px_32px_rgba(20,184,166,0.15)]">
                <p className="text-teal-300 text-sm font-medium mb-2">New Clients Per Month</p>
                <p className="text-[#fbbf24] text-4xl font-bold mb-1">12-18</p>
                <p className="text-white/70 text-xs">Consistent qualified leads</p>
              </div>
            </div>

            {/* Card 3: Time Saved */}
            <div 
              className="animate-float" 
              style={{ animationDelay: '1s' }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-[0_8px_32px_rgba(20,184,166,0.15)]">
                <p className="text-teal-300 text-sm font-medium mb-2">Time Saved on Marketing</p>
                <p className="text-[#fbbf24] text-4xl font-bold mb-1">15+ hrs</p>
                <p className="text-white/70 text-xs">Per week automated</p>
              </div>
            </div>

            {/* Card 4: Client Retention (smaller) */}
            <div 
              className="animate-float ml-0 lg:ml-4" 
              style={{ animationDelay: '1.5s' }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-[0_8px_32px_rgba(20,184,166,0.1)]">
                <p className="text-teal-300 text-xs font-medium mb-1">Client Retention Rate</p>
                <p className="text-[#fbbf24] text-2xl font-bold">94%</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Curved Divider */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          className="relative block w-full h-[80px] md:h-[120px]" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" 
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
