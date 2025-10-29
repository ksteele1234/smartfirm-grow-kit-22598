import { Building2, Settings, Target, BarChart3 } from "lucide-react";

const WhatMakesUsDifferent = () => {
  const pillars = [
    {
      icon: Building2,
      headline: "Accounting Firms Only",
      description: "We don't serve restaurants, dentists, or SaaS companies. Just CPAs, accounting firms, and bookkeepers. We understand busy season, utilization rates, and the compliance-to-advisory shift.",
      keyBenefit: "We speak your language"
    },
    {
      icon: Settings,
      headline: "Done-For-You Execution",
      description: "We build your marketing infrastructure together during setup, then run everything for you. After onboarding, your team invests ~2 hours monthly while we handle the rest.",
      keyBenefit: "Reclaim your time for billable work"
    },
    {
      icon: Target,
      headline: "Quality Client Focus",
      description: "We help you attract $5K-$15K advisory clients, not $500 tax-only leads. Our strategies target CFO-level decision makers who value expertise over cheap compliance.",
      keyBenefit: "Higher revenue per client"
    },
    {
      icon: BarChart3,
      headline: "Transparent ROI Tracking",
      description: "Monthly dashboard showing website traffic, lead sources, cost-per-lead, and revenue attribution. No vague 'brand awareness' metrics—just clear numbers tied to growth.",
      keyBenefit: "Know exactly what's working"
    }
  ];

  return (
    <section className="py-section bg-background-subtle">
      <div className="container mx-auto px-6 max-w-container-2xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[36px] sm:text-[32px] font-bold text-primary mb-4">
            What Makes SmartFirm Different
          </h2>
          <p className="text-[20px] sm:text-[18px] font-normal text-foreground leading-relaxed max-w-text-md mx-auto">
            Most agencies treat accounting firms like any other client. We don't.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-border rounded-xl p-10 md:p-8 sm:p-6 text-center min-h-[380px] elevation-1 hover:border-secondary hover-lift hover:elevation-2 color-transition flex flex-col"
              >
                {/* Icon Container */}
                <div className="flex justify-center mb-6">
                  <div className="w-[72px] h-[72px] rounded-full bg-light-teal/20 border-2 border-secondary flex items-center justify-center">
                    <Icon className="w-9 h-9 text-secondary" aria-hidden="true" />
                  </div>
                </div>

                {/* Headline */}
                <h3 className="text-[22px] font-bold text-secondary mb-4 text-left">
                  {pillar.headline}
                </h3>

                {/* Description */}
                <p className="text-base font-normal text-foreground leading-relaxed flex-grow text-left">
                  {pillar.description}
                </p>

                {/* Key Benefit */}
                <p className="text-[15px] font-semibold text-secondary mt-4 text-left">
                  {pillar.keyBenefit}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
