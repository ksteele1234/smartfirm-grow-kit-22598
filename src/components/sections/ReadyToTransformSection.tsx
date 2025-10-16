import QuickStartFeaturedCard from "./QuickStartFeaturedCard";
import GrowthAddOnsCard from "./GrowthAddOnsCard";
import { FloatingShapes } from "@/components/ui/visual-accents";

const ReadyToTransformSection = () => {
  return (
    <section className="relative pt-2.5 pb-2.5 md:pt-5 md:pb-5 bg-gradient-to-br from-[#0a2e2e] to-[#134444] overflow-hidden">
      {/* Orbital Circle System - 2 circles rotating opposite directions */}
      <svg className="absolute right-[10%] top-[15%] w-[400px] h-[400px] z-[1] hidden lg:block opacity-50">
        {/* Circle 1: Clockwise rotation */}
        <g style={{ transformOrigin: 'center' }} className="animate-rotate-clockwise">
          <circle cx="200" cy="200" r="120" stroke="#fb7185" strokeWidth="2" fill="none" />
          <circle cx="320" cy="200" r="4" fill="#fb7185" opacity="0.8" />
          <circle cx="283.14" cy="283.14" r="4" fill="#fb7185" opacity="0.8" />
          <circle cx="200" cy="320" r="4" fill="#fb7185" opacity="0.8" />
          <circle cx="116.86" cy="283.14" r="4" fill="#fb7185" opacity="0.8" />
          <circle cx="80" cy="200" r="4" fill="#fb7185" opacity="0.8" />
          <circle cx="116.86" cy="116.86" r="4" fill="#fb7185" opacity="0.8" />
          <circle cx="200" cy="80" r="4" fill="#fb7185" opacity="0.8" />
          <circle cx="283.14" cy="116.86" r="4" fill="#fb7185" opacity="0.8" />
        </g>
        
        {/* Circle 2: Counter-clockwise rotation */}
        <g style={{ transformOrigin: 'center' }} className="animate-rotate-counter">
          <circle cx="200" cy="200" r="160" stroke="#fb7185" strokeWidth="1.5" fill="none" />
          <circle cx="360" cy="200" r="4" fill="#fb7185" opacity="0.8" />
          <circle cx="313.14" cy="313.14" r="4" fill="#fb7185" opacity="0.8" />
          <circle cx="200" cy="360" r="4" fill="#fb7185" opacity="0.8" />
          <circle cx="86.86" cy="313.14" r="4" fill="#fb7185" opacity="0.8" />
          <circle cx="40" cy="200" r="4" fill="#fb7185" opacity="0.8" />
          <circle cx="86.86" cy="86.86" r="4" fill="#fb7185" opacity="0.8" />
          <circle cx="200" cy="40" r="4" fill="#fb7185" opacity="0.8" />
          <circle cx="313.14" cy="86.86" r="4" fill="#fb7185" opacity="0.8" />
        </g>
      </svg>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        {/* Section Header - WHITE TEXT */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-bold text-white mb-4">
            Start Growing Your Firm Today
          </h2>
          <p className="text-[18px] lg:text-[20px] text-white/80 max-w-[800px] mx-auto leading-[1.6]">
            Start with our proven Quick Start package or explore custom solutions for your firm
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[6fr_4fr] gap-10">
          <QuickStartFeaturedCard />
          <GrowthAddOnsCard />
        </div>
      </div>
    </section>
  );
};

export default ReadyToTransformSection;
