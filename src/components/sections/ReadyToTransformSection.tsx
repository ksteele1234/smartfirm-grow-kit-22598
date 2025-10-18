import QuickStartFeaturedCard from "./QuickStartFeaturedCard";
import GrowthAddOnsCard from "./GrowthAddOnsCard";
import { FloatingShapes } from "@/components/ui/visual-accents";

const ReadyToTransformSection = () => {
  return (
    <section className="relative pt-2.5 md:pt-5 bg-gradient-to-br from-[#0a2e2e] to-[#134444] overflow-hidden wave-bottom">
      {/* Orbital Circle System - 3 circles rotating in lower right corner */}
      <svg 
        className="absolute w-[400px] h-[400px] z-[1] hidden lg:block opacity-90"
        style={{ right: 'calc(8% + 120px)', bottom: 'calc(8% - 80px)' }}
      >
        {/* Circle 1 (r=100): Clockwise rotation, 30s */}
        <g style={{ transformOrigin: 'center', animation: 'rotateClockwise 30s linear infinite' }}>
          <circle cx="200" cy="200" r="100" stroke="#7e3943" strokeWidth="2" fill="none" />
          <circle cx="300" cy="200" r="3" fill="#7e3943" opacity="0.8" />
          <circle cx="270.71" cy="270.71" r="3" fill="#7e3943" opacity="0.8" />
          <circle cx="200" cy="300" r="3" fill="#7e3943" opacity="0.8" />
          <circle cx="129.29" cy="270.71" r="3" fill="#7e3943" opacity="0.8" />
          <circle cx="100" cy="200" r="3" fill="#7e3943" opacity="0.8" />
          <circle cx="129.29" cy="129.29" r="3" fill="#7e3943" opacity="0.8" />
          <circle cx="200" cy="100" r="3" fill="#7e3943" opacity="0.8" />
          <circle cx="270.71" cy="129.29" r="3" fill="#7e3943" opacity="0.8" />
        </g>
        
        {/* Circle 2 (r=140): Counter-clockwise rotation, 40s */}
        <g style={{ transformOrigin: 'center', animation: 'rotateCounterClockwise 40s linear infinite' }}>
          <circle cx="200" cy="200" r="140" stroke="#7e3943" strokeWidth="1.5" fill="none" />
          <circle cx="340" cy="200" r="3" fill="#7e3943" opacity="0.8" />
          <circle cx="299" cy="299" r="3" fill="#7e3943" opacity="0.8" />
          <circle cx="200" cy="340" r="3" fill="#7e3943" opacity="0.8" />
          <circle cx="101" cy="299" r="3" fill="#7e3943" opacity="0.8" />
          <circle cx="60" cy="200" r="3" fill="#7e3943" opacity="0.8" />
          <circle cx="101" cy="101" r="3" fill="#7e3943" opacity="0.8" />
          <circle cx="200" cy="60" r="3" fill="#7e3943" opacity="0.8" />
          <circle cx="299" cy="101" r="3" fill="#7e3943" opacity="0.8" />
        </g>
        
        {/* Circle 3 (r=180): Clockwise rotation, 50s */}
        <g style={{ transformOrigin: 'center', animation: 'rotateClockwise 50s linear infinite' }}>
          <circle cx="200" cy="200" r="180" stroke="#7e3943" strokeWidth="1" fill="none" opacity="0.7" />
          <circle cx="380" cy="200" r="3" fill="#7e3943" opacity="0.7" />
          <circle cx="327.28" cy="327.28" r="3" fill="#7e3943" opacity="0.7" />
          <circle cx="200" cy="380" r="3" fill="#7e3943" opacity="0.7" />
          <circle cx="72.72" cy="327.28" r="3" fill="#7e3943" opacity="0.7" />
          <circle cx="20" cy="200" r="3" fill="#7e3943" opacity="0.7" />
          <circle cx="72.72" cy="72.72" r="3" fill="#7e3943" opacity="0.7" />
          <circle cx="200" cy="20" r="3" fill="#7e3943" opacity="0.7" />
          <circle cx="327.28" cy="72.72" r="3" fill="#7e3943" opacity="0.7" />
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
