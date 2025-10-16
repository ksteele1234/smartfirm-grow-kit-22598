import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroWaveBackground from "@/assets/hero-wave-background.webp";

// Add keyframes for circle rotations and animations
const styles = `
  @keyframes rotateClockwise {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes rotateCounterClockwise {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }
  @keyframes gentlePulse {
    0%, 100% { 
      transform: scale(1); 
      box-shadow: 0 4px 24px rgba(251, 113, 133, 0.5); 
    }
    50% { 
      transform: scale(1.02); 
      box-shadow: 0 6px 32px rgba(251, 113, 133, 0.6); 
    }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes fadeInUp {
    from { 
      opacity: 0; 
      transform: translateY(20px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .animate-gentle-pulse {
      animation: gentlePulse 2s ease-in-out infinite;
    }
    .animate-fade-in {
      animation: fadeIn 500ms ease-out forwards;
    }
    .animate-fade-in-up {
      animation: fadeInUp 600ms ease-out forwards;
    }
    .animate-fade-in-up-delay-1 {
      animation: fadeInUp 600ms ease-out 100ms forwards;
      opacity: 0;
    }
    .animate-fade-in-up-delay-2 {
      animation: fadeInUp 600ms ease-out 200ms forwards;
      opacity: 0;
    }
    .animate-fade-in-up-delay-3 {
      animation: fadeInUp 600ms ease-out 300ms forwards;
      opacity: 0;
    }
    .animate-subhead {
      animation: fadeInUp 600ms ease-out 200ms forwards;
      opacity: 0;
    }
  }
  
  .stat-card {
    transition: all 300ms ease;
  }
  .stat-card:hover {
    transform: translateY(-4px) rotate(-1deg);
  }
  
  .stat-number {
    text-shadow: 0 2px 4px rgba(251, 191, 36, 0.3);
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
      {/* Digital Network Overlay - Dots & Connection Lines */}
      <svg 
        className="absolute inset-0 w-full h-full z-[1] pointer-events-none hidden lg:block"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Connection Lines - 10 lines connecting nearby dots */}
        <line x1="120" y1="180" x2="280" y2="210" stroke="#ffffff" strokeWidth="1" opacity="0.18" />
        <line x1="280" y1="210" x2="450" y2="160" stroke="#ffffff" strokeWidth="1" opacity="0.15" />
        <line x1="450" y1="160" x2="620" y2="140" stroke="#ffffff" strokeWidth="1" opacity="0.17" />
        <line x1="850" y1="250" x2="980" y2="320" stroke="#ffffff" strokeWidth="1" opacity="0.16" />
        <line x1="980" y1="320" x2="1050" y2="450" stroke="#ffffff" strokeWidth="1" opacity="0.19" />
        <line x1="180" y1="420" x2="340" y2="480" stroke="#ffffff" strokeWidth="1" opacity="0.15" />
        <line x1="550" y1="500" x2="720" y2="520" stroke="#ffffff" strokeWidth="1" opacity="0.18" />
        <line x1="720" y1="520" x2="890" y2="580" stroke="#ffffff" strokeWidth="1" opacity="0.17" />
        <line x1="350" y1="90" x2="520" y2="110" stroke="#ffffff" strokeWidth="1" opacity="0.16" />
        <line x1="780" y1="180" x2="920" y2="140" stroke="#ffffff" strokeWidth="1" opacity="0.20" />
        
        {/* Digital Dots - 28 white dots scattered throughout */}
        {/* Top section */}
        <circle cx="120" cy="180" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="280" cy="210" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="350" cy="90" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="450" cy="160" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="520" cy="110" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="620" cy="140" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="780" cy="180" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="850" cy="250" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="920" cy="140" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="1050" cy="200" r="2" fill="#ffffff" opacity="0.4" />
        
        {/* Middle section */}
        <circle cx="80" cy="320" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="180" cy="420" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="340" cy="480" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="480" cy="380" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="650" cy="350" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="980" cy="320" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="1120" cy="380" r="2" fill="#ffffff" opacity="0.4" />
        
        {/* Bottom section */}
        <circle cx="150" cy="550" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="280" cy="610" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="420" cy="580" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="550" cy="500" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="680" cy="630" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="720" cy="520" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="890" cy="580" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="950" cy="640" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="1050" cy="450" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="1100" cy="560" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="1150" cy="620" r="2" fill="#ffffff" opacity="0.4" />
      </svg>

      {/* Orbital Circle System */}
      <svg
        className="absolute right-[10%] top-[35%] w-[400px] h-[400px] z-[2] hidden lg:block"
        viewBox="0 0 400 400"
        style={{ 
          filter: 'drop-shadow(0 0 8px rgba(45, 212, 191, 0.4))',
          opacity: 0.5
        }}
      >
        {/* Circle 1 (r=100) - Rotates Clockwise with Dots */}
        <g style={{ transformOrigin: 'center', animation: 'rotateClockwise 30s linear infinite' }}>
          <circle cx="200" cy="200" r="100" stroke="#2dd4bf" strokeWidth="2" fill="none" opacity="0.5" />
          <circle cx="300" cy="200" r="3" fill="#5eead4" opacity="0.6" />
          <circle cx="270.71" cy="270.71" r="3" fill="#5eead4" opacity="0.6" />
          <circle cx="200" cy="300" r="3" fill="#5eead4" opacity="0.6" />
          <circle cx="129.29" cy="270.71" r="3" fill="#5eead4" opacity="0.6" />
          <circle cx="100" cy="200" r="3" fill="#5eead4" opacity="0.6" />
          <circle cx="129.29" cy="129.29" r="3" fill="#5eead4" opacity="0.6" />
          <circle cx="200" cy="100" r="3" fill="#5eead4" opacity="0.6" />
          <circle cx="270.71" cy="129.29" r="3" fill="#5eead4" opacity="0.6" />
        </g>
        
        {/* Circle 2 (r=140) - Rotates Counter-Clockwise with Dots */}
        <g style={{ transformOrigin: 'center', animation: 'rotateCounterClockwise 40s linear infinite' }}>
          <circle cx="200" cy="200" r="140" stroke="#2dd4bf" strokeWidth="1.5" fill="none" opacity="0.4" />
          <circle cx="340" cy="200" r="3" fill="#5eead4" opacity="0.6" />
          <circle cx="298.99" cy="298.99" r="3" fill="#5eead4" opacity="0.6" />
          <circle cx="200" cy="340" r="3" fill="#5eead4" opacity="0.6" />
          <circle cx="101.01" cy="298.99" r="3" fill="#5eead4" opacity="0.6" />
          <circle cx="60" cy="200" r="3" fill="#5eead4" opacity="0.6" />
          <circle cx="101.01" cy="101.01" r="3" fill="#5eead4" opacity="0.6" />
          <circle cx="200" cy="60" r="3" fill="#5eead4" opacity="0.6" />
          <circle cx="298.99" cy="101.01" r="3" fill="#5eead4" opacity="0.6" />
        </g>
        
        {/* Circle 3 (r=180) - Rotates Clockwise with Dots */}
        <g style={{ transformOrigin: 'center', animation: 'rotateClockwise 50s linear infinite' }}>
          <circle cx="200" cy="200" r="180" stroke="#2dd4bf" strokeWidth="1" fill="none" opacity="0.3" />
          <circle cx="380" cy="200" r="3" fill="#5eead4" opacity="0.6" />
          <circle cx="327.28" cy="327.28" r="3" fill="#5eead4" opacity="0.6" />
          <circle cx="200" cy="380" r="3" fill="#5eead4" opacity="0.6" />
          <circle cx="72.72" cy="327.28" r="3" fill="#5eead4" opacity="0.6" />
          <circle cx="20" cy="200" r="3" fill="#5eead4" opacity="0.6" />
          <circle cx="72.72" cy="72.72" r="3" fill="#5eead4" opacity="0.6" />
          <circle cx="200" cy="20" r="3" fill="#5eead4" opacity="0.6" />
          <circle cx="327.28" cy="72.72" r="3" fill="#5eead4" opacity="0.6" />
        </g>
      </svg>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 space-y-8">
            
            {/* Headline - Solid White */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-6 animate-fade-in">
              Predictable Growth for Accounting Firms Without Wasting Time on Marketing
            </h1>

            {/* Subheadline */}
            <div id="sf-keyword-intro" className="animate-subhead">
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
                className="px-10 py-4 text-lg font-bold rounded-xl animate-gentle-pulse hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
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
              className="animate-float animate-fade-in-up" 
              style={{ animationDelay: '0s' }}
            >
              <div className="stat-card bg-white/[0.08] backdrop-blur-[20px] rounded-2xl p-5 lg:p-6 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <p className="stat-number text-4xl font-extrabold bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent mb-1">
                  147
                </p>
                <p className="text-sm text-white/70 font-medium mb-2">New Leads</p>
                <p className="text-xs text-[#2dd4bf]">+32% this month</p>
              </div>
            </div>

            {/* Card 2: 94% Client Retention - Middle Right (offset) */}
            <div 
              className="animate-float animate-fade-in-up-delay-1 ml-0 lg:ml-8" 
              style={{ animationDelay: '1s' }}
            >
              <div className="stat-card bg-white/[0.08] backdrop-blur-[20px] rounded-2xl p-5 lg:p-6 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <p className="stat-number text-4xl font-extrabold bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent mb-1">
                  94%
                </p>
                <p className="text-sm text-white/70 font-medium mb-2">Client Retention</p>
                <p className="text-xs text-[#2dd4bf]">+8% improvement</p>
              </div>
            </div>

            {/* Card 3: $4.2K Avg Deal - Bottom Left */}
            <div 
              className="animate-float animate-fade-in-up-delay-2" 
              style={{ animationDelay: '2s' }}
            >
              <div className="stat-card bg-white/[0.08] backdrop-blur-[20px] rounded-2xl p-5 lg:p-6 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <p className="stat-number text-4xl font-extrabold bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent mb-1">
                  $4.2K
                </p>
                <p className="text-sm text-white/70 font-medium mb-2">Avg Deal Value</p>
                <p className="text-xs text-[#2dd4bf]">Per new client</p>
              </div>
            </div>

            {/* Card 4: 340% ROI - Bottom Right (smaller, hidden on mobile) */}
            <div 
              className="hidden lg:block animate-float animate-fade-in-up-delay-3 lg:ml-4" 
              style={{ animationDelay: '1.5s' }}
            >
              <div className="stat-card bg-white/[0.08] backdrop-blur-[20px] rounded-xl p-4 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
                <p className="stat-number text-2xl font-extrabold bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent mb-1">
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
