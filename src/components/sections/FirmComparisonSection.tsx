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
    <section className="py-20 lg:py-[100px] bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="text-sm font-semibold text-[#0F4C5C] uppercase tracking-wider mb-3">
            The $1M Question
          </div>
          <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-bold text-[#0a2e2e] leading-tight max-w-[900px] mx-auto mb-6 font-heading">
            What Separates Firms Stuck at $400K from Those Scaling to $1M?
          </h2>
          <p className="text-[18px] lg:text-[20px] text-[#475569] leading-relaxed max-w-[700px] mx-auto mb-16">
            It's not about working harder. It's about having the right marketing infrastructure.
          </p>
        </div>

        {/* Split-Screen Comparison */}
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Stuck at $400K-$600K */}
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-10 shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:translate-y-[-2px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)] transition-all duration-300">
              <div className="flex items-start gap-3 mb-6">
                <XCircle className="w-10 h-10 flex-shrink-0 text-[#64748b] mt-1" />
                <h3 className="text-[24px] lg:text-[28px] font-bold text-[#64748b] text-left">
                  Firms Stuck at $400K-$600K
                </h3>
              </div>
              
              <div className="space-y-4">
                {stuckCharacteristics.map((characteristic, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-6 h-6 flex-shrink-0 text-[#64748b] mt-0.5" />
                    <p className="text-base text-[#475569] leading-[1.7] text-left">
                      {characteristic}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Scaling to $1M+ */}
            <div className="bg-gradient-to-br from-[#f0fdfa] to-[#ccfbf1] border-2 border-[#14b8a6] rounded-2xl p-10 shadow-[0_8px_24px_rgba(20,184,166,0.15)] hover:translate-y-[-4px] hover:shadow-[0_12px_32px_rgba(20,184,166,0.25)] transition-all duration-300">
              <div className="inline-block bg-gradient-to-r from-[#14b8a6] to-[#2dd4bf] px-4 py-2 rounded-lg mb-5">
                <span className="text-sm font-bold text-white">The SmartFirm Way</span>
              </div>
              
              <div className="flex items-start gap-3 mb-6">
                <TrendingUp className="w-10 h-10 flex-shrink-0 text-[#14b8a6] mt-1" />
                <h3 className="text-[24px] lg:text-[28px] font-bold text-[#0a2e2e] text-left">
                  Firms Scaling to $1M+
                </h3>
              </div>
              
              <div className="space-y-4">
                {scalingCharacteristics.map((characteristic, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckmarkIcon variant="solid" className="w-6 h-6 flex-shrink-0 mt-0.5 text-[#14b8a6] drop-shadow-[0_0_8px_rgba(20,184,166,0.4)]" />
                    <p className="text-base text-[#0f172a] leading-[1.7] font-medium text-left">
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
