import { useCounterAnimation } from "@/hooks/useCounterAnimation";

const StatsGrid = () => {
  // Counter animations (trigger on load or scroll)
  const stat1 = useCounterAnimation(73, { isPercentage: true, duration: 2000, triggerOnLoad: true });
  const stat2 = useCounterAnimation(40, { isPercentage: true, duration: 2000, triggerOnLoad: true });
  const stat3 = useCounterAnimation(14, { duration: 2000, triggerOnLoad: true });
  const stat4 = useCounterAnimation(2, { duration: 2000, triggerOnLoad: true });

  const stats = [
    {
      number: "73%",
      unit: null,
      label: "Of prospects check Google before contacting a CPA",
      context: "If you're not ranking, you're invisible",
    },
    {
      number: "40%",
      unit: null,
      label: "Increase in qualified leads with optimized GBP",
      context: "Most firms never optimize their profile",
    },
    {
      number: "14",
      unit: "Days",
      label: "To launch your new website",
      context: "Full marketing infrastructure in 4-6 weeks",
    },
    {
      number: "2",
      unit: "Hours",
      label: "Monthly time after setup",
      context: "Initial onboarding requires more, then hands-off",
    },
  ];

  const counters = [stat1, stat2, stat3, stat4];

  return (
    <section className="pt-6 pb-8 md:pt-8 md:pb-8 bg-white" ref={stat1.ref || undefined}>
      <div className="container mx-auto px-6 md:px-12 max-w-container-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card-transform bg-white border border-slate-200 rounded-2xl p-10 md:p-12 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(20, 184, 166, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
              }}
            >
              {/* The Number with Gold Gradient */}
              <div
                className="text-5xl md:text-6xl font-extrabold leading-none mb-3 text-gradient-gold"
                style={{ 
                  textShadow: '0 2px 4px rgba(251, 191, 36, 0.2)',
                  fontWeight: 800
                }}
              >
                {counters[index].count}
              </div>

              {/* The Unit (for stats 3 & 4 only) */}
              {stat.unit && (
                <div className="text-xl font-medium text-slate-600 -mt-1 mb-3">
                  {stat.unit}
                </div>
              )}

              {/* The Label */}
              <div className="text-base font-medium text-slate-600 leading-relaxed">
                {stat.label}
              </div>

              {/* The Context */}
              <div className="text-sm font-normal italic text-slate-500 leading-relaxed mt-2">
                {stat.context}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .stat-card-transform {
            animation: fadeInUp 600ms ease-out forwards;
            opacity: 0;
          }
          .stat-card-transform:nth-child(1) {
            animation-delay: 100ms;
          }
          .stat-card-transform:nth-child(2) {
            animation-delay: 200ms;
          }
          .stat-card-transform:nth-child(3) {
            animation-delay: 300ms;
          }
          .stat-card-transform:nth-child(4) {
            animation-delay: 400ms;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default StatsGrid;
