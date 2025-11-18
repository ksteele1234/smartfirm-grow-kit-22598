import { memo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroStatsCards from "./HeroStatsCards";

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
      opacity: 1;
    }
    50% { 
      opacity: 0.95;
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
      animation: gentlePulse 3.5s ease-in-out infinite;
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
    text-shadow: 0 2px 4px hsl(var(--gold-start) / 0.3);
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

const HeroSection = memo(() => {

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
      
      <section className="relative min-h-[600px] md:min-h-[700px] -mt-[72px] pt-[120px] pb-24 md:pb-32 overflow-hidden hero-wave-clip">
      {/* Hero background image - responsive with priority loading */}
      <img
        src="/assets/hero-wave-background-mobile.webp"
        srcSet="/assets/hero-wave-background-mobile.webp 375w,
                /assets/hero-wave-background-tablet.webp 768w,
                /assets/hero-wave-background-desktop.webp 1920w"
        sizes="100vw"
        alt=""
        role="presentation"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        width="1920"
        height="700"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        style={{ objectPosition: 'center' }}
      />

      {/* Content Container - 2 Column Grid */}
      <div className="relative container mx-auto px-6 lg:px-12" style={{ zIndex: 10 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center max-w-7xl mx-auto">
          
          {/* Left Column: Headline, Subhead, CTA */}
          <div className="text-center lg:text-left">
            {/* Headline - Solid White */}
            <h1 className="text-display font-bold leading-[1.1] tracking-tight text-white mb-6 animate-fade-in">
              Predictable Growth for Accounting Firms Without Wasting Time on Marketing
            </h1>

            {/* Subheadline */}
            <div id="sf-keyword-intro" className="animate-subhead">
              <p className="text-lead leading-relaxed max-w-[600px] mb-8 font-medium text-on-dark-body drop-shadow-md mx-auto lg:mx-0">
                Digital marketing for accounting firms that actually works: Tired of lost leads, slow follow-ups, and clients slipping away? SmartFirm removes those roadblocks so your firm grows and retains clients effortlessly.
              </p>
            </div>

            {/* Trust Badges with Gold Bullets */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <span className="text-white text-sm font-medium">40+ Years Combined Experience</span>
              <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
              <span className="text-white text-sm font-medium">50+ Companies Supported</span>
              <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
              <span className="text-white text-sm font-medium">Up in 30 Days</span>
            </div>

            {/* CTA Button - Enhanced Coral */}
            <div className="flex justify-center lg:justify-start pb-16 md:pb-10">
              <Button 
                variant="coral" 
                size="lg"
                className="px-10 py-4 text-lg font-bold rounded-card animate-gentle-pulse hover-lift w-full sm:w-auto"
                asChild
              >
                <a href="/get-started" className="inline-flex items-center justify-center gap-2">
                  Book a Free Call
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Stat Cards */}
          <div className="hidden lg:block">
            <HeroStatsCards />
          </div>
        </div>
      </div>
      </section>
    </>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
