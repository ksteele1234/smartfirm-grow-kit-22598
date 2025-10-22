import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroWaveBackground from "@/assets/hero-wave-background.webp";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { useIsMobile } from "@/hooks/use-mobile";

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
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
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
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
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
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  }
  
  .stat-number {
    text-shadow: 0 2px 4px rgba(251, 191, 36, 0.3);
  }

  /* Clip-path for wave-shaped hero bottom */
  .hero-wave-clip {
    clip-path: url(#hero-wave-desktop);
  }

  @media (max-width: 768px) {
    .hero-wave-clip {
      clip-path: url(#hero-wave-mobile);
    }
  }
`;

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  // Counter animations (trigger on page load)
  const leads = useCounterAnimation(147, { triggerOnLoad: true, duration: 2000 });
  const retention = useCounterAnimation(94, { triggerOnLoad: true, duration: 2000, isPercentage: true });
  const avgDeal = useCounterAnimation(4.2, { triggerOnLoad: true, duration: 2000, isDollar: true, decimals: 1 });
  const roi = useCounterAnimation(340, { triggerOnLoad: true, duration: 2000, isPercentage: true });

  return (
    <>
      <style>{styles}</style>

      {/* Hidden SVG for clip-path definitions */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          {/* Desktop clip-path (120px wave) */}
          <clipPath id="hero-wave-desktop" clipPathUnits="objectBoundingBox">
            <path d="M0,0 L1,0 L1,0.92 Q0.75,1 0.5,0.92 T0,0.92 Z" />
          </clipPath>

          {/* Mobile clip-path (80px wave) */}
          <clipPath id="hero-wave-mobile" clipPathUnits="objectBoundingBox">
            <path d="M0,0 L1,0 L1,0.88 Q0.75,1 0.5,0.88 T0,0.88 Z" />
          </clipPath>
        </defs>
      </svg>
      
      <section
      className="relative min-h-[600px] md:min-h-[700px] -mt-[72px] pt-[120px] pb-24 md:pb-32 overflow-hidden hero-wave-clip"
      style={{
        backgroundImage: `url(${heroWaveBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Content Container */}
      <div className="relative container mx-auto px-6 lg:px-12" style={{ zIndex: 10 }}>
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 space-y-8">
            
            {/* Headline - Solid White */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6 animate-fade-in">
              Predictable Growth for Accounting Firms Without Wasting Time on Marketing
            </h1>

            {/* Subheadline */}
            <div id="sf-keyword-intro" className="animate-subhead">
              <p className="text-xl leading-relaxed max-w-[600px] mb-8 font-medium" style={{ color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)' }}>
                SmartFirm provides expert digital marketing for accounting firms, CPAs, bookkeepers, and tax preparers. We handle your entire operation through marketing automation, lead nurture, and SEO services designed to get you more accounting clients and help you keep them longer.
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
              <div className="stat-card backdrop-blur-[10px] rounded-2xl p-5 lg:p-6 border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.3)]" style={{ background: 'rgba(255, 255, 255, 0.35)' }}>
                <p className="stat-number text-4xl font-extrabold bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent mb-1">
                  {leads.count}
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
              <div className="stat-card backdrop-blur-[10px] rounded-2xl p-5 lg:p-6 border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.3)]" style={{ background: 'rgba(255, 255, 255, 0.35)' }}>
                <p className="stat-number text-4xl font-extrabold bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent mb-1">
                  {retention.count}
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
              <div className="stat-card backdrop-blur-[10px] rounded-2xl p-5 lg:p-6 border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.3)]" style={{ background: 'rgba(255, 255, 255, 0.35)' }}>
                <p className="stat-number text-4xl font-extrabold bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent mb-1">
                  {avgDeal.count}
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
              <div className="stat-card backdrop-blur-[10px] rounded-xl p-4 border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.25)]" style={{ background: 'rgba(255, 255, 255, 0.35)' }}>
                <p className="stat-number text-2xl font-extrabold bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent mb-1">
                  {roi.count}
                </p>
                <p className="text-xs text-white/70 font-medium">ROI</p>
              </div>
            </div>

          </div>

        </div>
      </div>
      </section>
    </>
  );
};

export default HeroSection;
