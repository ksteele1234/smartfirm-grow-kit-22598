import QuickStartFeaturedCard from "./QuickStartFeaturedCard";
import GrowthAddOnsCard from "./GrowthAddOnsCard";
import { FloatingShapes } from "@/components/ui/visual-accents";

const ReadyToTransformSection = () => {
  return (
    <section className="py-20 bg-[#7AB2B2]/[0.12]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-bold text-[#0a2e2e] mb-4">
            Ready to Transform Your Firm's Marketing?
          </h2>
          <p className="text-[18px] lg:text-[20px] text-[#1e293b] max-w-[800px] mx-auto leading-[1.6]">
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
