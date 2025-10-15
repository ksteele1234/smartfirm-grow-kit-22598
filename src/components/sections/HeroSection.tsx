import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] py-[120px] overflow-hidden bg-[#0a1929]">
      {/* WAVE 1 - Darkest Bottom Foundation */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-[70%] z-[1]" 
        viewBox="0 0 1440 700" 
        preserveAspectRatio="none"
      >
        <path 
          d="M 0,700 C 360,520 720,480 1080,550 C 1200,580 1320,650 1440,700 L 1440,700 L 0,700 Z"
          fill="#1e3a52"
        />
      </svg>

      {/* WAVE 2 - Mid-Dark with Gradient */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-[65%] z-[2] opacity-95" 
        viewBox="0 0 1440 700" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave2grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2d5a7b" />
            <stop offset="100%" stopColor="#3d6a8f" />
          </linearGradient>
        </defs>
        <path 
          d="M 0,700 C 300,580 600,520 900,580 C 1100,620 1280,680 1440,700 L 1440,700 L 0,700 Z"
          fill="url(#wave2grad)"
        />
      </svg>

      {/* Orbital Circle System - Keeping for now (will refine in Part 3) */}
      <div className="absolute top-1/4 right-[10%] w-[360px] h-[360px] z-[5] hidden lg:block">
        {/* Outer circle with dots - 60s rotation */}
        <svg 
          className="absolute inset-0 animate-[spin_60s_linear_infinite]" 
          viewBox="0 0 360 360"
        >
          <circle cx="180" cy="180" r="180" stroke="#2dd4bf" strokeWidth="2" fill="none" opacity="0.4" />
          {/* Dots on outer circle */}
          <circle cx="180" cy="0" r="4" fill="#2dd4bf" opacity="0.6" />
          <circle cx="360" cy="180" r="4" fill="#2dd4bf" opacity="0.6" />
          <circle cx="180" cy="360" r="4" fill="#2dd4bf" opacity="0.6" />
          <circle cx="0" cy="180" r="4" fill="#2dd4bf" opacity="0.6" />
        </svg>
        
        {/* Inner circle with dots - 90s reverse rotation */}
        <svg 
          className="absolute inset-0 animate-[spin_90s_linear_infinite] [animation-direction:reverse]" 
          viewBox="0 0 360 360"
        >
          <circle cx="180" cy="180" r="120" stroke="#2dd4bf" strokeWidth="2" fill="none" opacity="0.4" />
          {/* Dots on inner circle */}
          <circle cx="180" cy="60" r="4" fill="#2dd4bf" opacity="0.6" />
          <circle cx="300" cy="180" r="4" fill="#2dd4bf" opacity="0.6" />
          <circle cx="180" cy="300" r="4" fill="#2dd4bf" opacity="0.6" />
          <circle cx="60" cy="180" r="4" fill="#2dd4bf" opacity="0.6" />
        </svg>
      </div>

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
            
            {/* Card 1: +147 New Leads - Top Left */}
            <div 
              className="animate-float" 
              style={{ animationDelay: '0s' }}
            >
              <div className="bg-white/[0.08] backdrop-blur-[20px] rounded-2xl p-5 lg:p-6 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <p className="text-4xl font-extrabold bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent mb-1">
                  147
                </p>
                <p className="text-sm text-white/70 font-medium mb-2">New Leads</p>
                <p className="text-xs text-[#2dd4bf]">+32% this month</p>
              </div>
            </div>

            {/* Card 2: 94% Client Retention - Middle Right (offset) */}
            <div 
              className="animate-float ml-0 lg:ml-8" 
              style={{ animationDelay: '1s' }}
            >
              <div className="bg-white/[0.08] backdrop-blur-[20px] rounded-2xl p-5 lg:p-6 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <p className="text-4xl font-extrabold bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent mb-1">
                  94%
                </p>
                <p className="text-sm text-white/70 font-medium mb-2">Client Retention</p>
                <p className="text-xs text-[#2dd4bf]">+8% improvement</p>
              </div>
            </div>

            {/* Card 3: $4.2K Avg Deal - Bottom Left */}
            <div 
              className="animate-float" 
              style={{ animationDelay: '2s' }}
            >
              <div className="bg-white/[0.08] backdrop-blur-[20px] rounded-2xl p-5 lg:p-6 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <p className="text-4xl font-extrabold bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent mb-1">
                  $4.2K
                </p>
                <p className="text-sm text-white/70 font-medium mb-2">Avg Deal Value</p>
                <p className="text-xs text-[#2dd4bf]">Per new client</p>
              </div>
            </div>

            {/* Card 4: 340% ROI - Bottom Right (smaller, hidden on mobile) */}
            <div 
              className="hidden lg:block animate-float lg:ml-4" 
              style={{ animationDelay: '1.5s' }}
            >
              <div className="bg-white/[0.08] backdrop-blur-[20px] rounded-xl p-4 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
                <p className="text-2xl font-extrabold bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent mb-1">
                  340%
                </p>
                <p className="text-xs text-white/70 font-medium">ROI</p>
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
