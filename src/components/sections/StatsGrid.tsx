const StatsGrid = () => {
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

  return (
    <section className="py-8 bg-transparent border-t border-b border-[#E2E8F0]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center py-6 px-4 ${
                // Border-right logic: show on desktop except last item, on tablet except even items
                index < 3 ? 'lg:border-r lg:border-[#E2E8F0]' : ''
              } ${
                index % 2 === 0 && index < 3 ? 'sm:border-r sm:border-[#E2E8F0] lg:border-r' : ''
              }`}
            >
              {/* The Number */}
              <div
                className="text-[56px] sm:text-[64px] lg:text-[72px] font-bold leading-none mb-3"
                style={{ color: '#4D869C' }}
              >
                {stat.number}
              </div>

              {/* The Unit (for stats 3 & 4 only) */}
              {stat.unit && (
                <div
                  className="text-2xl font-normal -mt-2"
                  style={{ color: '#718096' }}
                >
                  {stat.unit}
                </div>
              )}

              {/* The Label */}
              <div
                className="text-base sm:text-[15px] lg:text-base font-semibold leading-[1.4] max-w-[220px] mx-auto mt-3"
                style={{ color: '#1A202C' }}
              >
                {stat.label}
              </div>

              {/* The Context */}
              <div
                className="text-sm font-normal italic leading-[1.4] mt-2"
                style={{ color: '#718096' }}
              >
                {stat.context}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
