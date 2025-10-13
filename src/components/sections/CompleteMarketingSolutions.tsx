import { MapPin, Star, Monitor, TrendingUp, Mail, Settings, BarChart3, Rocket } from 'lucide-react';

export const CompleteMarketingSolutions = () => {
  return (
    <section className="relative py-20 md:py-16 sm:py-12 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-[-100px] right-[-200px] w-[600px] h-[600px] rounded-full bg-[#7AB2B2] opacity-[0.08] pointer-events-none" />
      <div className="absolute top-[15%] left-[8%] w-2 h-2 rounded-full bg-[#7AB2B2] opacity-[0.12]" />
      <div className="absolute top-[35%] right-[12%] w-2 h-2 rounded-full bg-[#7AB2B2] opacity-[0.12]" />
      <div className="absolute top-[60%] left-[5%] w-2 h-2 rounded-full bg-[#7AB2B2] opacity-[0.12]" />
      <div className="absolute top-[25%] right-[25%] w-2 h-2 rounded-full bg-[#7AB2B2] opacity-[0.12]" />
      <div className="absolute top-[75%] left-[18%] w-2 h-2 rounded-full bg-[#7AB2B2] opacity-[0.12]" />
      <div className="absolute top-[50%] right-[6%] w-2 h-2 rounded-full bg-[#7AB2B2] opacity-[0.12]" />
      <div className="absolute top-[85%] left-[40%] w-2 h-2 rounded-full bg-[#7AB2B2] opacity-[0.12]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-12">
          <h2 className="text-[40px] md:text-[36px] sm:text-[32px] font-bold text-[#1A202C] mb-4">
            Complete Marketing Solutions for Accountants, CPAs, and Bookkeepers
          </h2>
          <p className="text-xl md:text-lg sm:text-base text-[#4A5568] leading-relaxed max-w-[800px] mx-auto">
            The foundational marketing infrastructure most firms don't have—or have set up wrong. We build it right, make it work together, and automate it.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-8 sm:gap-6">
          {/* Featured Card 1 */}
          <div className="group relative min-h-[340px] md:min-h-[320px] sm:min-h-[300px] p-10 md:p-8 sm:p-6 bg-white border-[3px] border-[#7AB2B2] rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out hover:translate-y-[-8px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:border-[#91ADC8] cursor-pointer focus:outline-none focus:ring-3 focus:ring-[#7AB2B2] focus:ring-offset-2 active:sm:scale-[0.98]" tabIndex={0}>
            <span className="absolute top-4 right-4 bg-[#7AB2B2] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              Core Service
            </span>
            <div className="flex flex-col gap-4">
              <div className="relative w-[72px] h-[72px] md:w-[60px] md:h-[60px] sm:w-[56px] sm:h-[56px] rounded-full bg-gradient-to-br from-[#7AB2B2] to-[#4D869C] flex items-center justify-center">
                <MapPin className="w-8 h-8 md:w-7 md:h-7 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
                <Star className="absolute top-1 right-1 w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl md:text-xl sm:text-lg font-bold text-[#1A202C] mb-3">
                  Get Found By Local Clients
                </h3>
                <p className="text-[17px] md:text-base sm:text-[15px] text-[#4A5568] leading-relaxed">
                  Complete GBP optimization and local SEO so you rank when prospects search 'CPA near me' or 'tax accountant [your city]'. Most firms leave this money on the table.
                </p>
              </div>
            </div>
          </div>

          {/* Featured Card 2 */}
          <div className="group relative min-h-[340px] md:min-h-[320px] sm:min-h-[300px] p-10 md:p-8 sm:p-6 bg-white border-[3px] border-[#7AB2B2] rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out hover:translate-y-[-8px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:border-[#91ADC8] cursor-pointer focus:outline-none focus:ring-3 focus:ring-[#7AB2B2] focus:ring-offset-2 active:sm:scale-[0.98]" tabIndex={0}>
            <span className="absolute top-4 right-4 bg-[#7AB2B2] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              Core Service
            </span>
            <div className="flex flex-col gap-4">
              <div className="relative w-[72px] h-[72px] md:w-[60px] md:h-[60px] sm:w-[56px] sm:h-[56px] rounded-full bg-gradient-to-br from-[#7AB2B2] to-[#4D869C] flex items-center justify-center">
                <Monitor className="w-8 h-8 md:w-7 md:h-7 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
                <TrendingUp className="absolute top-1 right-1 w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl md:text-xl sm:text-lg font-bold text-[#1A202C] mb-3">
                  Website That Converts + Full Tracking
                </h3>
                <p className="text-[17px] md:text-base sm:text-[15px] text-[#4A5568] leading-relaxed">
                  Clean, professional site built to convert visitors to calls—plus analytics that show exactly where leads come from. No more guessing what's working.
                </p>
              </div>
            </div>
          </div>

          {/* Supporting Card 3 */}
          <div className="group min-h-[300px] md:min-h-[280px] sm:min-h-[260px] p-8 md:p-6 sm:p-5 bg-white border-2 border-[#E2E8F0] rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out hover:border-[#7AB2B2] hover:translate-y-[-4px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] cursor-pointer focus:outline-none focus:ring-3 focus:ring-[#7AB2B2] focus:ring-offset-2 active:sm:scale-[0.98]" tabIndex={0}>
            <div className="flex flex-col gap-3">
              <div className="w-[56px] h-[56px] md:w-[48px] md:h-[48px] sm:w-[44px] sm:h-[44px] rounded-full bg-[#E6F7F7] flex items-center justify-center">
                <Star className="w-7 h-7 md:w-6 md:h-6 sm:w-5 sm:h-5 text-[#7AB2B2]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl md:text-lg sm:text-base font-bold text-[#1A202C] mb-2.5">
                  Automated Review Generation
                </h3>
                <p className="text-base md:text-[15px] sm:text-sm text-[#4A5568] leading-relaxed">
                  Systematic follow-up that gets more 5-star reviews from happy clients. Builds trust and improves local search rankings.
                </p>
              </div>
            </div>
          </div>

          {/* Supporting Card 4 */}
          <div className="group min-h-[300px] md:min-h-[280px] sm:min-h-[260px] p-8 md:p-6 sm:p-5 bg-white border-2 border-[#E2E8F0] rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out hover:border-[#7AB2B2] hover:translate-y-[-4px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] cursor-pointer focus:outline-none focus:ring-3 focus:ring-[#7AB2B2] focus:ring-offset-2 active:sm:scale-[0.98]" tabIndex={0}>
            <div className="flex flex-col gap-3">
              <div className="relative w-[56px] h-[56px] md:w-[48px] md:h-[48px] sm:w-[44px] sm:h-[44px] rounded-full bg-[#E6F7F7] flex items-center justify-center">
                <Mail className="w-7 h-7 md:w-6 md:h-6 sm:w-5 sm:h-5 text-[#7AB2B2]" aria-hidden="true" />
                <Settings className="absolute bottom-0 right-0 w-3.5 h-3.5 text-[#7AB2B2]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl md:text-lg sm:text-base font-bold text-[#1A202C] mb-2.5">
                  Professional Email & SMS Workflows
                </h3>
                <p className="text-base md:text-[15px] sm:text-sm text-[#4A5568] leading-relaxed">
                  Automated appointment reminders, follow-ups, and client nurture sequences. Stay top-of-mind without lifting a finger.
                </p>
              </div>
            </div>
          </div>

          {/* Supporting Card 5 */}
          <div className="group min-h-[300px] md:min-h-[280px] sm:min-h-[260px] p-8 md:p-6 sm:p-5 bg-white border-2 border-[#E2E8F0] rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out hover:border-[#7AB2B2] hover:translate-y-[-4px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] cursor-pointer focus:outline-none focus:ring-3 focus:ring-[#7AB2B2] focus:ring-offset-2 active:sm:scale-[0.98] lg:col-span-2" tabIndex={0}>
            <div className="flex flex-col gap-3">
              <div className="w-[56px] h-[56px] md:w-[48px] md:h-[48px] sm:w-[44px] sm:h-[44px] rounded-full bg-[#E6F7F7] flex items-center justify-center">
                <BarChart3 className="w-7 h-7 md:w-6 md:h-6 sm:w-5 sm:h-5 text-[#7AB2B2]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl md:text-lg sm:text-base font-bold text-[#1A202C] mb-2.5">
                  Your Marketing Command Center
                </h3>
                <p className="text-base md:text-[15px] sm:text-sm text-[#4A5568] leading-relaxed">
                  Real-time dashboard showing website traffic, lead sources, review stats, and ROI. Finally know what's driving growth.
                </p>
              </div>
            </div>
          </div>

          {/* Foundation Card 6 */}
          <div className="lg:col-span-2 flex flex-col sm:flex-row items-start gap-8 sm:gap-6 p-8 sm:py-6 sm:px-12 bg-[#F7FAFC] border border-dashed border-[#7AB2B2] rounded-xl focus:outline-none focus:ring-3 focus:ring-[#7AB2B2] focus:ring-offset-2" tabIndex={0}>
            <div className="flex-shrink-0 w-[64px] h-[64px] md:w-[56px] md:h-[56px] sm:w-[52px] sm:h-[52px] rounded-full bg-[#E6F7F7] flex items-center justify-center">
              <Rocket className="w-8 h-8 md:w-7 md:h-7 sm:w-6 sm:h-6 text-[#7AB2B2]" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <span className="inline-block text-xs text-[#718096] font-semibold uppercase tracking-wider mb-2">
                Included in Onboarding
              </span>
              <h3 className="text-xl md:text-lg font-bold text-[#1A202C] mb-2">
                Foundation Setup: Strategy + Integration
              </h3>
              <p className="text-base md:text-[15px] text-[#4A5568] leading-relaxed">
                2-hour deep dive into your firm, ideal clients, and competitive landscape. Then we build everything to work together seamlessly—not a disconnected tech mess.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
