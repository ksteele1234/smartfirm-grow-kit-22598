import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GrowthAddOnsCard = () => {
  const services = [
    "Monthly blog posts",
    "Social media content",
    "Paid advertising management",
    "Newsletter writing",
    "Custom marketing campaigns"
  ];

  return (
    <div className="bg-white border-2 border-[#E2E8F0] rounded-xl p-card md:p-card sm:p-card-sm shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:border-[#0F4C5C] hover:translate-y-[-4px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-300 self-start">
      {/* Icon Section */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-[rgba(20,184,166,0.15)] flex items-center justify-center">
          <Sparkles className="w-12 h-12 text-[#14b8a6]" />
        </div>
      </div>

      {/* Headline */}
      <h3 className="text-2xl font-bold text-[#243b55] text-center leading-[1.3] mb-4 font-heading">
        Growth Add-Ons & Custom Solutions
      </h3>

      {/* Description */}
      <p className="text-base text-[#333333] text-center leading-[1.6] mb-6">
        Already have your marketing foundation in place? Add ongoing content creation, social media management, paid advertising, or custom solutions tailored to your firm's growth goals.
      </p>

      {/* Services List Section */}
      <div className="mb-6">
        <h4 className="text-[15px] font-bold text-[#0f766e] text-center mb-3">
          Available Services:
        </h4>
        <div className="flex flex-col gap-1.5">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <span className="text-[15px] text-[#666666] leading-[1.5]">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center">
        <Button 
          asChild
          className="bg-white hover:bg-[#F8F9FA] text-[#0F4C5C] border-2 border-[#0F4C5C] hover:border-[#14b8a6] text-base font-semibold py-3.5 px-7 rounded-lg transition-colors inline-block"
        >
          <Link to="/services/add-ons">
            Explore Add-On Services →
          </Link>
        </Button>
        
        <p className="text-sm text-[#666666] text-center mt-3">
          Not sure what you need?{" "}
          <Link 
            to="/get-started" 
            className="text-[#0F4C5C] underline hover:text-[#405D5D] transition-colors"
          >
            Book a free strategy call
          </Link>
        </p>
      </div>
    </div>
  );
};

export default GrowthAddOnsCard;
