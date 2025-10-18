import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const QuickStartFeaturedCard = () => {
  const includedItems = [
    "Professional website (launch-ready)",
    "Google Business Profile optimization",
    "Automated review generation system",
    "Client communication workflows",
    "Email marketing foundation",
    "Performance tracking dashboard",
    "Monthly performance reports",
    "Ongoing support & optimization"
  ];

  return (
    <div className="relative bg-white/[0.08] backdrop-blur-[20px] border border-white/15 rounded-[24px] p-12 shadow-[0_0_48px_rgba(45,212,191,0.3),0_12px_48px_rgba(0,0,0,0.4)] transition-all duration-300 self-start">
      {/* Early Adopter Badge - Coral */}
      <div className="inline-block bg-gradient-to-r from-[#fb7185] to-[#f43f5e] text-white text-xs font-semibold px-3 py-1.5 rounded mb-6">
        Early Adopter Pricing*
      </div>

      {/* Badge - Gold gradient */}
      <div className="inline-block bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] px-4 py-2 rounded-xl text-sm font-bold text-white mb-6 ml-2">
        Start Here
      </div>

      {/* Package Label */}
      <div className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-3">
        30-Day Quick Start Package
      </div>

      {/* Headline */}
      <h3 className="text-2xl lg:text-[28px] font-bold text-white leading-[1.3] mb-4 font-heading">
        Everything You Need to Launch Your Marketing in 30 Days
      </h3>

      {/* Description */}
      <p className="text-base lg:text-[17px] text-white/80 leading-[1.6] mb-6">
        Build your marketing foundation with a professional website, Google Business Profile optimization, review system, and automated client communications—all set up and working in 30 days.
      </p>

      {/* Price Display - $999 on top */}
      <div className="mb-6">
        {/* Monthly Fee - Prominent */}
        <div className="mb-4">
          <div className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent mb-1 animate-subtle-pulse">
            $999
          </div>
          <div className="text-base text-white/70">per month</div>
        </div>

        {/* Plus Sign */}
        <div className="text-2xl font-bold text-white/40 text-center my-3">+</div>

        {/* Setup Fee - Smaller */}
        <div>
          <div className="text-xs text-white/50 line-through mb-1">
            Regular: $9,999
          </div>
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent mb-1">
            $6,999
          </div>
          <div className="text-sm text-white/60">One-time setup</div>
        </div>
      </div>

      {/* What's Included */}
      <div className="mb-6">
        <h4 className="text-base font-bold text-[#2dd4bf] mb-3">
          What's Included:
        </h4>
        <div className="flex flex-col gap-2">
          {includedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <CheckCircle2 
                className="w-[18px] h-[18px] text-[#2dd4bf] flex-shrink-0" 
                style={{ filter: 'drop-shadow(0 0 4px rgba(45, 212, 191, 0.6))' }} 
              />
              <span className="text-[15px] text-white leading-[1.4]">
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
          className="w-full bg-gradient-to-r from-[#fb7185] to-[#f43f5e] hover:from-[#f43f5e] hover:to-[#fb7185] text-white text-lg font-bold py-4 px-8 rounded-xl shadow-[0_4px_24px_rgba(251,113,133,0.6)] transition-all duration-300 hover:-translate-y-0.5"
        >
          <Link to="/quick-start-marketing-for-cpa-firms-marketing-package-for-cpa-firms">
            Start Your Quick Start
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>

        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline"
              className="w-full bg-transparent hover:bg-white/10 text-white border-2 border-white/30 text-base font-semibold py-3.5 px-8 rounded-xl transition-colors"
            >
              Book Free Strategy Call
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[900px] w-full p-0 overflow-hidden">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/1IIG0vYonSNZxTHPcaZp"
              style={{ width: '100%', height: '700px', border: 'none' }}
              title="Book Free Strategy Call"
            />
          </DialogContent>
        </Dialog>

        {/* Urgency Note */}
        <p className="text-xs text-white/60 text-center mt-2">
          *for the next 3 firms only
        </p>
      </div>
    </div>
  );
};

export default QuickStartFeaturedCard;
