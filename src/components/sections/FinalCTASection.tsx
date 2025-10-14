import { Button } from "@/components/ui/button";
import { Building2, ShieldCheck, Calendar, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTASection = () => {
  const trustElements = [
    {
      icon: Building2,
      headline: "40+ Companies Already Building",
      description: "Join accounting firms from coast to coast who chose to stop guessing and start growing systematically."
    },
    {
      icon: ShieldCheck,
      headline: "No Long-Term Contracts",
      description: "Cancel anytime after the initial 30-day setup. We earn your business every month."
    },
    {
      icon: Calendar,
      headline: "Results in 30 Days",
      description: "Your marketing foundation live and working—website launched, GBP optimized, systems automated."
    }
  ];

  return (
    <section className="relative py-[60px] md:py-20 lg:py-[100px] px-6 bg-gradient-to-b from-[hsl(218,38%,56%)] to-[hsl(195,35%,45%)] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
      </div>

      <div className="container relative mx-auto max-w-[1200px]">
        <div className="max-w-[900px] mx-auto text-center">
          {/* Main Headline */}
          <h2 className="text-[36px] md:text-[40px] lg:text-[48px] font-bold text-white leading-tight mb-5">
            Are You Serious About Scaling to $1M?
          </h2>

          {/* Subheadline */}
          <p className="text-[18px] md:text-[20px] lg:text-[22px] font-normal text-white/90 leading-relaxed max-w-[800px] mx-auto mb-12">
            Join 40+ companies building the marketing foundation that drives consistent growth. Early adopter pricing ends soon—start now and see results in 30 days.
          </p>

          {/* Trust Elements Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 max-w-[1000px] mx-auto mb-12 px-10">
            {trustElements.map((element, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="mb-4 w-20 h-20 rounded-full bg-[hsl(67,95%,90%)]/15 flex items-center justify-center">
                  <element.icon className="h-12 w-12 text-[hsl(67,95%,90%)]" />
                </div>
                
                {/* Headline */}
                <h3 className="text-[20px] font-bold text-white mb-2">
                  {element.headline}
                </h3>
                
                {/* Description */}
                <p className="text-[16px] font-normal text-white/85 leading-relaxed">
                  {element.description}
                </p>
              </div>
            ))}
          </div>

          {/* Dual CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-5 justify-center mb-6 max-w-[700px] mx-auto">
            {/* Primary CTA */}
            <div className="flex flex-col items-center">
              <Button
                size="lg"
                asChild
                className="md:w-[320px] w-full py-[18px] px-9 text-lg font-bold bg-[hsl(67,95%,90%)] text-[hsl(218,35%,30%)] hover:bg-white hover:scale-[1.02] shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all duration-300 rounded-lg"
              >
                <Link to="/quick-start-marketing-for-cpa-firms">
                  Start Your Quick Start →
                </Link>
              </Button>
              <p className="text-[13px] text-white/80 mt-2">
                $6,999 + $999/mo • Early Adopter Rate
              </p>
            </div>

            {/* Secondary CTA */}
            <div className="flex flex-col items-center">
              <Button
                size="lg"
                asChild
                className="md:w-[320px] w-full py-[18px] px-9 text-lg font-bold bg-transparent text-white border-2 border-white hover:bg-white/10 transition-all duration-300 rounded-lg"
              >
                <Link to="/get-started">
                  Book Free Strategy Call
                </Link>
              </Button>
              <p className="text-[13px] text-white/80 mt-2">
                30 minutes • No pitch, just clarity
              </p>
            </div>
          </div>

          {/* Urgency Note */}
          <div className="max-w-[600px] mx-auto mt-6 text-center">
            <p className="text-[15px] font-semibold text-[hsl(67,95%,90%)] leading-relaxed flex items-center justify-center gap-2">
              <Zap className="h-4 w-4 flex-shrink-0" />
              <span>Early adopter pricing limited to the next 10 firms. Lock in your rate before we increase to $9,999.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
