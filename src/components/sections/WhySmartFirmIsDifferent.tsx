import { Building2, Settings, Target, Calendar, TrendingUp, Users, CheckCircle } from "lucide-react";
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeInUpVariants } from '@/lib/animationVariants';

const WhySmartFirmIsDifferent = () => {
  const heading = useScrollAnimation();
  
  const differentiators = [
    {
      icon: Building2,
      iconColor: "accent", // Using semantic token
      headline: "Accounting Firms Only",
      description: "We don't serve restaurants, dentists, or SaaS companies. Just CPAs, accounting firms, and bookkeepers. We understand busy season, utilization rates, and the compliance-to-advisory shift.",
      keyBenefit: "We speak your language"
    },
    {
      icon: Settings,
      iconColor: "accent", // Using semantic token
      headline: "Done-For-You Execution",
      description: "We build your marketing infrastructure together during setup, then run everything for you. After onboarding, your team invests ~2 hours monthly while we handle the rest.",
      keyBenefit: "Reclaim your time for billable work"
    },
    {
      icon: Target,
      iconColor: "accent", // Using semantic token
      headline: "Quality Client Focus",
      description: "We help you attract $5K-$15K advisory clients, not $500 tax-only leads. Our strategies target CFO-level decision makers who value expertise over cheap compliance.",
      keyBenefit: "Higher revenue per client"
    },
    {
      icon: Calendar,
      iconColor: "accent", // Using semantic token
      headline: "Built Around Your Chaos",
      description: "Tax season, audit deadlines, quarterly close—we get it. Our systems work 24/7 whether you're buried in extensions or enjoying a slower summer. Setup happens on your timeline.",
      keyBenefit: "Marketing that works when you can't"
    },
    {
      icon: TrendingUp,
      iconColor: "accent", // Using semantic token
      headline: "Real Metrics That Matter",
      description: "We track CAC (Client Acquisition Cost), LTV (Lifetime Value), and utilization rates—the same KPIs you use to run your firm. No fluffy vanity metrics.",
      keyBenefit: "Data you actually understand"
    },
    {
      icon: Users,
      iconColor: "accent", // Using semantic token
      headline: "Advisory-First Targeting",
      description: "Our strategies position you for high-value advisory work, not $500 tax-only clients. We target CFO-level decision makers who need ongoing strategic guidance.",
      keyBenefit: "Attract clients worth 10x more"
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-container-2xl">
        
        {/* Section Header */}
        <motion.div 
          ref={heading.ref}
          initial="hidden"
          animate={heading.isInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Why SmartFirm is Different
          </h2>
          <p className="text-xl text-text-secondary max-w-text-md mx-auto">
            Most agencies treat accounting firms like any other client. We don't.
          </p>
        </motion.div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            const delay = Math.min(index * 0.1, 0.4);
            return (
              <motion.div
                key={index}
                initial="hidden"
                animate={heading.isInView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                transition={{ delay }}
                className="bg-card border border-border rounded-2xl p-8 elevation-1 card-interactive"
              >
                {/* Icon */}
                <Icon 
                  className="w-10 h-10 mb-4 text-primary"
                  aria-hidden="true" 
                />
                
                {/* Heading */}
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {item.headline}
                </h3>
                
                {/* Description */}
                <p className="text-base text-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                
                {/* Key Benefit with checkmark */}
                <div className="flex items-start gap-2 mt-4">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold text-secondary">
                    {item.keyBenefit}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default WhySmartFirmIsDifferent;
