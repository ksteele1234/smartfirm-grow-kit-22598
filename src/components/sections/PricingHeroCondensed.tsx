import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import GrowthAddOnsCard from "./GrowthAddOnsCard";

const PricingHeroCondensed = () => {
  const features = [
    "Professional website (launch-ready)",
    "Google Business Profile optimization",
    "Yext business listing management (200+ sites)",
    "Automated lead follow-up system",
    "Client communication workflows",
    "Review generation system",
    "30-day white-glove implementation"
  ];

  return (
    <section className="relative bg-gradient-mesh-professional py-20 px-5 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 text-white">
          <h2 className="text-[40px] md:text-[48px] font-heading font-bold mb-4 leading-tight text-white">
            Transform Your Firm in 30 Days
          </h2>
          <p className="text-[20px] font-body text-white/90 max-w-3xl mx-auto leading-relaxed">
            Launch-ready marketing that starts working from day one
          </p>
        </div>

        {/* 2-Column Grid: Quick Start + Add-Ons */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Quick Start Pricing Card - Takes 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-[24px] p-[40px] md:p-[60px] shadow-2xl">
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge className="bg-gradient-to-r from-amber-400 to-amber-600 text-white border-0 shadow-lg px-4 py-1.5 text-sm font-semibold">
                Start Here
              </Badge>
            </div>

            {/* Pricing Display */}
            <div className="mb-8 pb-8 border-b border-slate-200">
              <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[48px] md:text-[72px] leading-none font-[800] font-heading text-slate-900">
                $1,200
              </span>
                <span className="text-[24px] md:text-[32px] font-[600] font-heading text-slate-600">
                  /month
                </span>
              </div>
              <div className="flex items-baseline gap-3 mb-3">
              <span className="text-[28px] md:text-[48px] font-[700] font-heading text-slate-900">
                +$14,500
              </span>
                <span className="text-[18px] md:text-[20px] font-[500] text-slate-600">
                  setup
                </span>
              </div>
              <p className="text-[16px] text-slate-600 font-body">
                One-time setup fee
              </p>
            </div>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 
                    className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" 
                    style={{ filter: 'drop-shadow(var(--glow-teal))' }}
                  />
                  <span className="text-[16px] font-body text-slate-700 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button 
              asChild
              size="lg"
              className="w-full bg-gradient-coral text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] text-[16px] font-semibold py-6"
            >
              <Link to="/quick-start-marketing-for-cpa-firms">
                Learn About the QuickStart Package
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Growth Add-Ons Card - Takes 1 column */}
          <div className="lg:col-span-1">
            <GrowthAddOnsCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHeroCondensed;
