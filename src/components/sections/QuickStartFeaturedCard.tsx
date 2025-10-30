import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const QuickStartFeaturedCard = () => {
  const includedItems = [
    "Professional website (launch-ready)",
    "Google Business Profile optimization",
    "Yext business listing management (200+ sites)",
    "Automated review generation system",
    "Client communication workflows",
    "Email marketing foundation",
    "Performance tracking dashboard",
    "Monthly performance reports",
    "Ongoing support & optimization",
    "One-month subscription included",
    "White glove onboarding",
    "24/7 Real-human tech support",
    "Unlimited Users",
    "Unlimited Contacts",
    "Unlimited Email Addresses",
    "Unlimited Domains"
  ];

  return (
    <div className="relative glass-card elevation-3 rounded-[24px] p-12 hover-lift self-start">
      {/* Early Adopter Badge - Coral */}
      <div className="inline-block bg-gradient-coral text-white text-xs font-semibold px-3 py-1.5 rounded mb-6">
        Early Adopter Pricing*
      </div>

      {/* Badge - Gold gradient */}
      <div className="inline-block bg-gradient-gold px-4 py-2 rounded-card text-sm font-bold text-white mb-6 ml-2">
        Start Here
      </div>

      {/* Package Label */}
      <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
        30-Day Quick Start Package
      </div>

      {/* Headline */}
      <h3 className="text-2xl lg:text-[28px] font-bold text-primary leading-[1.3] mb-4 font-heading">
        Everything You Need to Launch Your Marketing in 30 Days
      </h3>

      {/* Description */}
      <p className="text-base lg:text-[17px] text-muted-foreground leading-[1.6] mb-6">
        Build your marketing foundation with a professional website, Google Business Profile optimization, review system, and automated client communications—all set up and working in 30 days.
      </p>

      {/* Price Display - $999 on top */}
      <div className="mb-6">
        {/* Monthly Fee - Prominent */}
        <div className="mb-4">
          <div className="text-6xl md:text-7xl font-extrabold text-gradient-gold mb-1 animate-subtle-pulse">
            $999
          </div>
          <div className="text-base text-muted-foreground">per month</div>
        </div>

        {/* Plus Sign */}
        <div className="text-2xl font-bold text-muted-foreground/40 text-center my-3">+</div>

        {/* Setup Fee - Smaller */}
        <div>
          <div className="text-xs text-muted-foreground line-through mb-1">
            Regular: $9,999
          </div>
          <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-1">
            $6,999
          </div>
          <div className="text-sm text-muted-foreground">One-time setup</div>
        </div>
      </div>

      {/* What's Included */}
      <div className="mb-6">
        <h4 className="text-base font-bold text-primary mb-3">
          What's Included:
        </h4>
        <div className="flex flex-col gap-2">
          {includedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <CheckCircle2 
                className="w-[18px] h-[18px] text-primary flex-shrink-0 glow-cyan" 
              />
              <span className="text-[15px] text-foreground leading-[1.4]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-4">
        <Button 
          asChild
          className="w-full bg-gradient-coral hover:bg-gradient-animated text-white text-lg font-bold py-4 px-8 rounded-card glow-coral hover-lift"
        >
          <Link to="/quick-start-marketing-for-cpa-firms">
            Start Your Quick Start
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>

        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline"
              className="w-full text-base font-semibold py-3.5 px-8 rounded-card"
            >
              Book Free Strategy Call
            </Button>
          </DialogTrigger>
...
        </Dialog>

        {/* Urgency Note */}
        <p className="text-xs text-muted-foreground text-center mt-2">
          *for the next 3 firms only
        </p>
      </div>
    </div>
  );
};

export default QuickStartFeaturedCard;
