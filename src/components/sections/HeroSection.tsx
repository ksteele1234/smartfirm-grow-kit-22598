import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] py-20 md:py-[120px] overflow-hidden">
      {/* Base Layer - Dark Navy Blue */}
      <div className="absolute inset-0 bg-[#0a2440] z-0" />

      {/* WAVE 1 - Bottom Blue Foundation (Mid blue gradient) */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-[65%] z-[1]" 
        viewBox="0 0 1440 650" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave1grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2a5a8a" />
            <stop offset="100%" stopColor="#3d7ab8" />
          </linearGradient>
        </defs>
        <path 
          d="M-100,650 C200,480 450,400 700,450 C950,500 1200,520 1540,460 L1540,650 L-100,650 Z"
          fill="url(#wave1grad)"
        />
      </svg>

      {/* WAVE 2 - Blue-Teal Blend (Transition Layer with multiply blend) */}
      <svg 
        className="absolute bottom-0 right-0 w-full h-[60%] z-[2] mix-blend-multiply" 
        viewBox="0 0 1440 600" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave2grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e5570" />
            <stop offset="100%" stopColor="#2a7a8a" />
          </linearGradient>
        </defs>
        <path 
          d="M1540,600 C1200,420 850,360 550,410 C300,450 100,480 -100,420 L-100,600 L1540,600 Z"
          fill="url(#wave2grad)"
        />
      </svg>

      {/* WAVE 3 - Bright Teal Accent (THE ENERGY WAVE with screen blend) */}
      <svg 
        className="absolute top-0 left-0 w-full h-[50%] z-[3] mix-blend-screen" 
        viewBox="0 0 1440 500" 
        preserveAspectRatio="none"
        style={{ filter: 'drop-shadow(0 0 30px rgba(45, 212, 191, 0.4))' }}
      >
        <defs>
          <linearGradient id="wave3grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#2dd4bf" />
          </linearGradient>
        </defs>
        <path 
          d="M-100,0 C150,140 500,200 800,160 C1100,120 1350,80 1540,120 L1540,0 L-100,0 Z"
          fill="url(#wave3grad)"
          fillOpacity="0.8"
        />
      </svg>

      {/* WAVE 4 - Cyan to Light Blue Accent (Top Highlight with lighten blend) */}
      <svg 
        className="absolute top-0 right-0 w-full h-[45%] z-[4] mix-blend-lighten" 
        viewBox="0 0 1440 450" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave4grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5eead4" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>
        </defs>
        <path 
          d="M1540,0 C1300,100 1050,140 750,110 C500,80 250,50 -100,80 L-100,0 L1540,0 Z"
          fill="url(#wave4grad)"
          fillOpacity="0.6"
        />
      </svg>

      {/* Orbital Circle System - Right Side (Energy tech aesthetic) */}
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
