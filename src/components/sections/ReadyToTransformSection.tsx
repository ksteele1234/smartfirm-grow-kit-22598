import QuickStartFeaturedCard from "./QuickStartFeaturedCard";
import GrowthAddOnsCard from "./GrowthAddOnsCard";
import { FloatingShapes } from "@/components/ui/visual-accents";

const ReadyToTransformSection = () => {
  return (
    <section className="relative bg-gradient-deep-teal overflow-hidden section-padding">
      <div className="mx-auto max-w-container-2xl relative z-10">
        {/* Section Header - WHITE TEXT */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-bold text-on-dark-heading mb-4">
            Start Growing Your Firm Today
          </h2>
          <p className="text-[18px] lg:text-[20px] text-on-dark-muted max-w-container-lg mx-auto leading-[1.6]">
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
