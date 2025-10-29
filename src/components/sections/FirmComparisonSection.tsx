import { XCircle, TrendingUp, X, Check } from "lucide-react";
import { CheckmarkIcon } from "@/components/ui/checkmark-icon";
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeInUpVariants } from '@/lib/animationVariants';

const FirmComparisonSection = () => {
  const heading = useScrollAnimation();
  
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
    <section className="bg-white overflow-hidden section-padding">
      <div className="mx-auto max-w-container-2xl">
        {/* Section Header */}
        <motion.div 
          ref={heading.ref}
          initial="hidden"
          animate={heading.isInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            The $1M Question
          </div>
          <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-bold text-primary leading-tight max-w-text-lg mx-auto mb-6 font-heading">
            What Separates Firms Stuck at $400K from Those Scaling to $1M?
          </h2>
          <p className="text-[18px] lg:text-[20px] text-text-secondary leading-relaxed max-w-text-md mx-auto mb-16">
            It's not about working harder. It's about having the right marketing infrastructure.
          </p>
        </motion.div>

        {/* Split-Screen Comparison */}
        <div className="max-w-container-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
            {/* Left Column - Stuck at $400K-$600K */}
            <motion.div 
              initial="hidden"
              animate={heading.isInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              transition={{ delay: 0 }}
              className="bg-background-subtle border border-border rounded-card-lg p-card elevation-1 hover-lift hover:elevation-2 color-transition"
            >
              <div className="flex items-start gap-3 mb-6">
                <XCircle className="w-10 h-10 flex-shrink-0 text-text-tertiary mt-1" />
                <h3 className="text-[24px] lg:text-[28px] font-bold text-text-tertiary text-left">
                  Firms Stuck at $400K-$600K
                </h3>
              </div>
              
              <div className="space-y-4">
                {stuckCharacteristics.map((characteristic, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-6 h-6 flex-shrink-0 text-text-tertiary mt-0.5" />
                    <p className="text-base text-text-secondary leading-[1.7] text-left">
                      {characteristic}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Scaling to $1M+ */}
            <motion.div 
              initial="hidden"
              animate={heading.isInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-primary/5 to-accent/10 border-2 border-primary rounded-2xl p-card card-interactive"
            >
              <div className="inline-block bg-gradient-vibrant-teal px-4 py-2 rounded-card-sm mb-5">
                <span className="text-sm font-bold text-on-dark-heading">The SmartFirm Way</span>
              </div>
              
              <div className="flex items-start gap-3 mb-6">
                <TrendingUp className="w-10 h-10 flex-shrink-0 text-accent mt-1" />
                <h3 className="text-[24px] lg:text-[28px] font-bold text-primary text-left">
                  Firms Scaling to $1M+
                </h3>
              </div>
              
              <div className="space-y-4">
                {scalingCharacteristics.map((characteristic, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckmarkIcon variant="solid" className="w-6 h-6 flex-shrink-0 mt-0.5 text-accent glow-cyan" />
                    <p className="text-base text-foreground leading-[1.7] font-medium text-left">
                      {characteristic}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirmComparisonSection;
