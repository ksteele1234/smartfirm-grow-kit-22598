import { ArrowRight, Check } from "lucide-react";
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
    <div className="relative bg-white border-[3px] border-[#4D869C] rounded-xl p-6 md:p-8 lg:p-12 shadow-[0_8px_24px_rgba(77,134,156,0.12)] hover:translate-y-[-4px] hover:shadow-[0_12px_32px_rgba(77,134,156,0.15)] transition-all duration-300 self-start">
      {/* "Start Here" Badge - Top Right */}
      <div className="absolute -top-3 right-6 bg-[#4D869C] text-white text-sm font-bold px-4 py-2 rounded-full shadow-[0_4px_12px_rgba(77,134,156,0.3)] z-10">
        Start Here
      </div>

      {/* Early Adopter Badge */}
      <div className="inline-block bg-[#FAFDD6] text-[#405D5D] text-xs font-semibold px-3 py-1.5 border border-[#4D869C] rounded mb-6">
        Early Adopter Pricing
      </div>

      {/* Package Label */}
      <div className="text-sm font-semibold text-[#4D869C] uppercase tracking-wide mb-3">
        30-Day Quick Start Package
      </div>

      {/* Headline */}
      <h3 className="text-2xl lg:text-[28px] font-bold text-[#334260] leading-[1.3] mb-4 font-heading">
        Everything You Need to Launch Your Marketing in 30 Days
      </h3>

      {/* Description */}
      <p className="text-base lg:text-[17px] text-[#333333] leading-[1.6] mb-6">
        Build your marketing foundation with a professional website, Google Business Profile optimization, review system, and automated client communications—all set up and working in 30 days.
      </p>

      {/* Pricing Box */}
      <div className="bg-[#F8F9FA] rounded-lg p-6 mb-6">
        <div className="text-sm text-[#666666] line-through mb-2">
          Typical Value: $12,000+
        </div>
        <div className="flex items-baseline gap-3 mb-2">
          <div className="text-[40px] lg:text-[48px] font-bold text-[#647FBC] leading-none">
            $6,999
          </div>
          <div className="text-base font-medium text-[#666666]">
            One-time setup
          </div>
        </div>
        <div className="text-2xl font-semibold text-[#334260] mt-2 mb-1">
          + $999/month
        </div>
        <div className="text-sm text-[#666666]">
          Ongoing management & support
        </div>
      </div>

      {/* What's Included */}
      <div className="mb-6">
        <h4 className="text-base font-bold text-[#334260] mb-3">
          What's Included:
        </h4>
        <div className="flex flex-col gap-2">
          {includedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <Check className="w-[18px] h-[18px] text-[#4D869C] flex-shrink-0" />
              <span className="text-[15px] text-[#333333] leading-[1.4]">
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
          className="w-full bg-[#4D869C] hover:bg-[#405D5D] text-white text-lg font-bold py-4 px-8 rounded-lg shadow-[0_4px_12px_rgba(77,134,156,0.25)] transition-all hover:-translate-y-0.5"
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
              className="w-full bg-white hover:bg-[#F8F9FA] text-[#4D869C] border-2 border-[#4D869C] text-base font-semibold py-3.5 px-8 rounded-lg transition-colors"
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
      </div>
    </div>
  );
};

export default QuickStartFeaturedCard;
