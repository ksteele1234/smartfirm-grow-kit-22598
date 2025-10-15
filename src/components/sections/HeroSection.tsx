import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroWaveBackground from "@/assets/hero-wave-background.webp";

// Add keyframes for circle rotations
const styles = `
  @keyframes rotateClockwise {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes rotateCounterClockwise {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }
`;

const HeroSection = () => {
  return (
    <>
      <style>{styles}</style>
      <section
      className="relative min-h-[600px] md:min-h-[700px] py-[120px] overflow-hidden"
      style={{ 
        backgroundImage: `url(${heroWaveBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Orbital Circle System */}
      <svg
        className="absolute left-[15%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] z-[6] hidden lg:block"
        viewBox="0 0 400 400"
        style={{ 
          filter: 'drop-shadow(0 0 10px rgba(45, 212, 191, 0.4))'
        }}
      >
        {/* Three Concentric Circles - Each rotates in different direction */}
        <g style={{ transformOrigin: 'center', animation: 'rotateClockwise 30s linear infinite' }}>
          <circle cx="200" cy="200" r="100" stroke="#2dd4bf" strokeWidth="2" fill="none" opacity="0.5" />
        </g>
        <g style={{ transformOrigin: 'center', animation: 'rotateCounterClockwise 40s linear infinite' }}>
          <circle cx="200" cy="200" r="140" stroke="#2dd4bf" strokeWidth="1.5" fill="none" opacity="0.4" />
        </g>
        <g style={{ transformOrigin: 'center', animation: 'rotateClockwise 50s linear infinite' }}>
          <circle cx="200" cy="200" r="180" stroke="#2dd4bf" strokeWidth="1" fill="none" opacity="0.3" />
        </g>
        
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
            
            {/* Headline - Solid White */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
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
    </>
  );
};

export default HeroSection;
