import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const PricingHeroFull = () => {
  const featuresColumn1 = [
    "Professional website (launch-ready)",
    "Google Business Profile optimization",
    "Yext business listing management (200+ sites)",
    "Automated review generation system",
    "Client communication workflows",
    "Email marketing foundation",
    "Performance tracking dashboard",
    "Monthly performance reports",
    "Ongoing support & optimization"
  ];

  const featuresColumn2 = [
    "One-month subscription included",
    "White glove onboarding",
    "24/7 Real-human tech support",
    "Unlimited Users",
    "Unlimited Contacts",
    "Unlimited Email Addresses",
    "Unlimited Domains"
  ];

  return (
    <section className="relative bg-gradient-mesh-professional py-20 px-5 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 text-white">
          <h2 className="text-[40px] md:text-[48px] font-heading font-bold mb-4 leading-tight text-white">
            Start Growing Your Firm Today
          </h2>
          <p className="text-[20px] font-body text-white/90 max-w-3xl mx-auto leading-relaxed">
            Everything you need to transform your firm in 30 days
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-[24px] p-[40px] md:p-[60px] shadow-2xl">
          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Badge className="bg-gradient-to-r from-amber-400 to-amber-600 text-white border-0 shadow-lg px-4 py-1.5 text-sm font-semibold">
              Start Here
            </Badge>
          </div>

          {/* Pricing Display */}
          <div className="mb-10 pb-10 border-b border-slate-200">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[48px] md:text-[72px] leading-none font-[800] font-heading text-slate-900">
                $999
              </span>
              <span className="text-[24px] md:text-[32px] font-[600] font-heading text-slate-600">
                /month
              </span>
            </div>
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-[28px] md:text-[48px] font-[700] font-heading text-slate-900">
                +$12,500
              </span>
              <span className="text-[18px] md:text-[20px] font-[500] text-slate-600">
                setup
              </span>
            </div>
            <p className="text-[16px] text-slate-600 font-body">
              One-time setup fee
            </p>
          </div>

          {/* What's Included Section */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="text-[24px] font-heading font-bold text-slate-900">
                What's Included
              </h3>
            </div>

            {/* Two-Column Features Grid */}
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              {/* Column 1 */}
              <div className="space-y-4">
                {featuresColumn1.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 
                      className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" 
                      style={{ filter: 'drop-shadow(var(--glow-teal))' }}
                    />
                    <span className="text-[16px] font-body text-slate-700 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                {featuresColumn2.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 
                      className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" 
                      style={{ filter: 'drop-shadow(var(--glow-teal))' }}
                    />
                    <span className="text-[16px] font-body text-slate-700 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            asChild
            size="lg"
            className="w-full bg-gradient-coral text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] text-[16px] font-semibold py-6"
          >
            <Link to="/get-started">
              Book a Free Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>

        </div>
      </div>
    </section>
  );
};

export default PricingHeroFull;
