import QuickStartFeaturedCard from "./QuickStartFeaturedCard";
import GrowthAddOnsCard from "./GrowthAddOnsCard";
import { FloatingShapes } from "@/components/ui/visual-accents";

const ReadyToTransformSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary via-primary/95 to-teal relative overflow-hidden">
      <FloatingShapes variant="circles" className="opacity-20" />
      
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
        {/* Additional geometric accent */}
        <div className="absolute top-1/4 right-16 w-32 h-32 border-2 border-white/10 rounded-full"></div>
        <div className="absolute bottom-1/4 left-16 w-24 h-24 border border-white/10 transform rotate-45"></div>
      </div>

      <div className="container relative mx-auto px-6 max-w-[1200px]">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-bold text-white mb-4 font-heading">
            Ready to Transform Your Firm's Marketing?
          </h2>
          <p className="text-[18px] lg:text-[20px] text-white/90 max-w-[800px] mx-auto leading-[1.6]">
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
