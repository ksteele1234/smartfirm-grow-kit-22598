import { Calendar, TrendingUp, Target } from "lucide-react";

const SkepticismCallout = () => {
  const features = [
    {
      icon: Calendar,
      text: "We work around your chaos",
    },
    {
      icon: TrendingUp,
      text: "We track what matters: CAC, LTV, utilization",
    },
    {
      icon: Target,
      text: "We target advisory clients, not tax-only leads",
    },
  ];

  return (
    <section className="py-8 bg-transparent">
      <div className="container mx-auto px-6 max-w-container-content">
        <div className="rounded-xl p-10 md:p-8 sm:p-6 border-2 border-border bg-card elevation-1 card-interactive">
          {/* Headline */}
          <h2 className="text-[32px] md:text-[28px] sm:text-2xl font-bold mb-4 text-foreground leading-[1.2]">
            Most Marketing Agencies Don't Understand Accounting Firms. We Do.
          </h2>

          {/* Body Text */}
          <p className="text-lg md:text-[17px] sm:text-base font-normal max-w-text-lg text-foreground leading-[1.7]">
            Generic marketing agencies treat you like any other business. But accounting firms operate differently—busy season chaos, utilization rates, the difference between $500 tax clients and $5K advisory retainers. We're founded by a CPA and a business turnaround specialist who've lived this reality.
          </p>

          {/* Icon Grid */}
          <div className="flex flex-wrap gap-md mt-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 transition-opacity hover:opacity-80"
                >
                  <Icon
                    className="w-6 h-6 flex-shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-[15px] font-medium text-muted-foreground">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkepticismCallout;
