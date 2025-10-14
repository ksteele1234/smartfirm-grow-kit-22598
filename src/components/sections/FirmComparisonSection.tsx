import { XCircle, TrendingUp, X, Check } from "lucide-react";
import { CheckmarkIcon } from "@/components/ui/checkmark-icon";

const FirmComparisonSection = () => {
  const stuckCharacteristics = [
    "Relying on word-of-mouth and referrals only",
    "Generic website with no clear positioning",
    "Inconsistent social media with no strategy",
    "No lead nurture system—prospects go cold",
    "Manually following up with every inquiry",
    "Competing on price instead of value"
  ];

  const scalingCharacteristics = [
    "Automated lead generation with SEO & content",
    "Authority-building website with clear service tiers",
    "Strategic content that attracts ideal clients",
    "Email sequences that educate and convert",
    "CRM automation that nurtures every lead",
    "Premium positioning that attracts high-value clients"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="text-sm font-semibold text-[#4D869C] uppercase tracking-wider mb-3">
            The $1M Question
          </div>
          <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-bold text-[#334260] leading-tight max-w-[900px] mx-auto mb-4 font-heading">
            What Separates Firms Stuck at $400K from Those Scaling to $1M?
          </h2>
          <p className="text-[18px] lg:text-[20px] text-[#666666] leading-relaxed max-w-[800px] mx-auto mb-12 lg:mb-16">
            It's not about working harder. It's about having the right marketing infrastructure.
          </p>
        </div>

        {/* Split-Screen Comparison */}
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">
            {/* Left Column - Stuck at $400K-$600K */}
            <div className="bg-[#F8F9FA] border-2 border-[#E2E8F0] rounded-xl lg:rounded-r-none p-8 lg:p-10">
              <div className="mb-6">
                <XCircle className="w-12 h-12 mb-4 text-[#718096]" />
                <h3 className="text-[24px] lg:text-[28px] font-bold text-[#334260]">
                  Firms Stuck at $400K-$600K
                </h3>
              </div>
              
              <div className="space-y-4">
                {stuckCharacteristics.map((characteristic, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-6 h-6 flex-shrink-0 text-[#718096] mt-0.5" />
                    <p className="text-base text-[#333333] leading-relaxed">
                      {characteristic}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Scaling to $1M+ */}
            <div className="bg-white border-2 border-[#4D869C] rounded-xl lg:rounded-l-none p-8 lg:p-10 shadow-[0_8px_24px_rgba(77,134,156,0.12)]">
              <div className="mb-6">
                <TrendingUp className="w-12 h-12 mb-4 text-[#4D869C]" />
                <h3 className="text-[24px] lg:text-[28px] font-bold text-[#4D869C]">
                  Firms Scaling to $1M+
                </h3>
              </div>
              
              <div className="space-y-4">
                {scalingCharacteristics.map((characteristic, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckmarkIcon variant="solid" className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <p className="text-base text-[#333333] leading-relaxed font-medium">
                      {characteristic}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirmComparisonSection;
