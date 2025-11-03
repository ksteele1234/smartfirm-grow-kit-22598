import { memo, useMemo } from 'react';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';

const HeroStatsCards = memo(() => {
  const counterConfig = useMemo(
    () => ({
      leads: { value: 312, isDollar: false, isPercentage: true },
      retention: { value: 94, isDollar: false, isPercentage: true },
      avgDeal: { value: 4850, isDollar: true, isPercentage: false },
      roi: { value: 427, isDollar: false, isPercentage: true },
    }),
    []
  );

  const leads = useCounterAnimation(counterConfig.leads.value, {
    duration: 2000,
    isPercentage: counterConfig.leads.isPercentage,
    isDollar: counterConfig.leads.isDollar,
  });

  const retention = useCounterAnimation(counterConfig.retention.value, {
    duration: 2000,
    isPercentage: counterConfig.retention.isPercentage,
    isDollar: counterConfig.retention.isDollar,
  });

  const avgDeal = useCounterAnimation(counterConfig.avgDeal.value, {
    duration: 2000,
    isPercentage: counterConfig.avgDeal.isPercentage,
    isDollar: counterConfig.avgDeal.isDollar,
  });

  const roi = useCounterAnimation(counterConfig.roi.value, {
    duration: 2000,
    isPercentage: counterConfig.roi.isPercentage,
    isDollar: counterConfig.roi.isDollar,
  });

  return (
    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      <div
        ref={leads.ref}
        className="glass-card p-4 md:p-6 rounded-card-lg text-center transform hover:scale-105 transition-all duration-300 shadow-hero-card animate-fade-in"
        style={{ animationDelay: '0.1s' }}
      >
        <div className="text-3xl md:text-4xl font-extrabold text-gradient-gold mb-2">
          {leads.count}
        </div>
        <div className="text-white text-xs md:text-sm font-medium opacity-90">
          Lead Increase
        </div>
      </div>

      <div
        ref={retention.ref}
        className="glass-card p-4 md:p-6 rounded-card-lg text-center transform hover:scale-105 transition-all duration-300 shadow-hero-card animate-fade-in"
        style={{ animationDelay: '0.2s' }}
      >
        <div className="text-3xl md:text-4xl font-extrabold text-gradient-gold mb-2">
          {retention.count}
        </div>
        <div className="text-white text-xs md:text-sm font-medium opacity-90">
          Client Retention
        </div>
      </div>

      <div
        ref={avgDeal.ref}
        className="glass-card p-4 md:p-6 rounded-card-lg text-center transform hover:scale-105 transition-all duration-300 shadow-hero-card animate-fade-in"
        style={{ animationDelay: '0.3s' }}
      >
        <div className="text-3xl md:text-4xl font-extrabold text-gradient-gold mb-2">
          {avgDeal.count}
        </div>
        <div className="text-white text-xs md:text-sm font-medium opacity-90">
          Avg. Deal Size
        </div>
      </div>

      <div
        ref={roi.ref}
        className="glass-card p-4 md:p-6 rounded-card-lg text-center transform hover:scale-105 transition-all duration-300 shadow-hero-card animate-fade-in"
        style={{ animationDelay: '0.4s' }}
      >
        <div className="text-3xl md:text-4xl font-extrabold text-gradient-gold mb-2">
          {roi.count}
        </div>
        <div className="text-white text-xs md:text-sm font-medium opacity-90">
          ROI on Marketing
        </div>
      </div>
    </div>
  );
});

HeroStatsCards.displayName = 'HeroStatsCards';

export default HeroStatsCards;
