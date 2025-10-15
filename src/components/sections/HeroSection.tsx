import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] py-[120px] overflow-hidden bg-[#0a1929]">
      {/* WAVE 1 - Darkest Bottom Foundation */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-[63%] md:h-[70%] z-[1]"
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
        className="absolute bottom-0 left-0 w-full h-[59%] md:h-[65%] z-[2] opacity-95 hidden md:block" 
        viewBox="0 0 1440 700" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave2grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2d5a7b" />
            <stop offset="50%" stopColor="#356382" />
            <stop offset="100%" stopColor="#3d6a8f" />
          </linearGradient>
        </defs>
        <path 
          d="M 0,700 C 300,580 600,520 900,580 C 1100,620 1280,680 1440,700 L 1440,700 L 0,700 Z"
          fill="url(#wave2grad)"
        />
      </svg>

      {/* WAVE 3 - Mid-Bright Teal (Valley Wave from Top) */}
      <svg 
        className="absolute top-0 left-0 w-full h-[50%] md:h-[55%] z-[3] opacity-90 mix-blend-screen" 
        viewBox="0 0 1440 700" 
        preserveAspectRatio="none"
        style={{ filter: 'drop-shadow(0 10px 40px rgba(45, 212, 191, 0.3))' }}
      >
        <defs>
          <linearGradient id="wave3grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" />
            <stop offset="50%" stopColor="#20c5b3" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
        <path 
          d="M 0,0 C 360,180 720,220 1080,160 C 1200,120 1320,60 1440,0 L 1440,0 L 0,0 Z"
          fill="url(#wave3grad)"
        />
      </svg>

      {/* WAVE 4 - Brightest Cyan Accent (Right Side Signature Element) ⭐ */}
      <svg 
        className="absolute top-0 right-0 w-full h-[41%] md:h-[45%] z-[4] opacity-75 mix-blend-lighten" 
        viewBox="0 0 1440 700" 
        preserveAspectRatio="none"
        style={{ filter: 'drop-shadow(0 10px 50px rgba(94, 234, 212, 0.4))' }}
      >
        <defs>
          <linearGradient id="wave4grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5eead4" />
            <stop offset="50%" stopColor="#6ce9d6" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>
        </defs>
        <path 
          d="M 576,0 C 720,280 900,300 1080,220 C 1200,160 1320,80 1440,0 L 1440,0 L 576,0 Z"
          fill="url(#wave4grad)"
        />
      </svg>

      {/* Orbital Circle System - Part 3 Implementation */}
      <svg 
        className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] z-[6] hidden lg:block animate-[spin_60s_linear_infinite]" 
        viewBox="0 0 400 400"
        style={{ filter: 'drop-shadow(0 0 10px rgba(45, 212, 191, 0.4))' }}
      >
        {/* Three Concentric Circles */}
        <circle cx="200" cy="200" r="100" stroke="#2dd4bf" strokeWidth="2" fill="none" opacity="0.5" />
        <circle cx="200" cy="200" r="140" stroke="#2dd4bf" strokeWidth="1.5" fill="none" opacity="0.4" />
        <circle cx="200" cy="200" r="180" stroke="#2dd4bf" strokeWidth="1" fill="none" opacity="0.3" />
        
        {/* 24 Dots - Circle 1 (r=100) at 45° intervals */}
        <circle cx="300" cy="200" r="3" fill="#5eead4" opacity="0.6" />
        <circle cx="270.71" cy="270.71" r="3" fill="#5eead4" opacity="0.6" />
        <circle cx="200" cy="300" r="3" fill="#5eead4" opacity="0.6" />
        <circle cx="129.29" cy="270.71" r="3" fill="#5eead4" opacity="0.6" />
        <circle cx="100" cy="200" r="3" fill="#5eead4" opacity="0.6" />
        <circle cx="129.29" cy="129.29" r="3" fill="#5eead4" opacity="0.6" />
        <circle cx="200" cy="100" r="3" fill="#5eead4" opacity="0.6" />
        <circle cx="270.71" cy="129.29" r="3" fill="#5eead4" opacity="0.6" />
        
        {/* 24 Dots - Circle 2 (r=140) at 45° intervals */}
        <circle cx="340" cy="200" r="3" fill="#5eead4" opacity="0.6" />
        <circle cx="298.99" cy="298.99" r="3" fill="#5eead4" opacity="0.6" />
        <circle cx="200" cy="340" r="3" fill="#5eead4" opacity="0.6" />
        <circle cx="101.01" cy="298.99" r="3" fill="#5eead4" opacity="0.6" />
        <circle cx="60" cy="200" r="3" fill="#5eead4" opacity="0.6" />
        <circle cx="101.01" cy="101.01" r="3" fill="#5eead4" opacity="0.6" />
        <circle cx="200" cy="60" r="3" fill="#5eead4" opacity="0.6" />
        <circle cx="298.99" cy="101.01" r="3" fill="#5eead4" opacity="0.6" />
        
        {/* 24 Dots - Circle 3 (r=180) at 45° intervals */}
        <circle cx="380" cy="200" r="3" fill="#5eead4" opacity="0.6" />
        <circle cx="327.28" cy="327.28" r="3" fill="#5eead4" opacity="0.6" />
        <circle cx="200" cy="380" r="3" fill="#5eead4" opacity="0.6" />
        <circle cx="72.72" cy="327.28" r="3" fill="#5eead4" opacity="0.6" />
        <circle cx="20" cy="200" r="3" fill="#5eead4" opacity="0.6" />
        <circle cx="72.72" cy="72.72" r="3" fill="#5eead4" opacity="0.6" />
        <circle cx="200" cy="20" r="3" fill="#5eead4" opacity="0.6" />
        <circle cx="327.28" cy="72.72" r="3" fill="#5eead4" opacity="0.6" />
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
