import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GrowthAddOnsCard = () => {
  const services = [
    "Monthly blog posts",
    "Paid advertising management",
    "Newsletter writing",
    "Custom marketing campaigns",
    "Website Chatbot",
    "Voice AI to answer your phone, make appointments and route calls",
    "Social Media Content Plan & Management",
    "Trade Show Planning, Materials & Booth Design",
    "Client Retention & Loyalty Program"
  ];

  return (
    <div className="bg-white border-2 border-border rounded-card p-card md:p-card sm:p-card-sm elevation-1 hover:border-secondary hover-lift hover:elevation-2 color-transition self-start">
      {/* Icon Section */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center">
          <Sparkles className="w-12 h-12 text-accent" />
        </div>
      </div>

      {/* Headline */}
      <h3 className="text-2xl font-bold text-secondary text-center leading-[1.3] mb-4 font-heading">
        Growth Add-Ons & Custom Solutions
      </h3>

      {/* Description */}
      <p className="text-base text-foreground text-center leading-[1.6] mb-6">
        Already have your marketing foundation in place? Add ongoing content creation, social media management, paid advertising, or custom solutions tailored to your firm's growth goals.
      </p>

      {/* Services List Section */}
      <div className="mb-6">
        <h4 className="text-[15px] font-bold text-secondary-dark text-center mb-3">
          Available Services:
        </h4>
        <div className="flex flex-col gap-1.5">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <span className="text-[15px] text-text-secondary leading-[1.5]">
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
          className="bg-white hover:bg-background-subtle text-secondary border-2 border-secondary hover:border-accent text-base font-semibold py-3.5 px-7 rounded-card-sm transition-colors inline-block"
        >
          <Link to="/services/add-ons">
            Explore Add-On Services →
          </Link>
        </Button>
        
        <p className="text-sm text-text-secondary text-center mt-3">
          Not sure what you need?{" "}
          <Link 
            to="/get-started" 
            className="text-secondary underline hover:text-secondary-dark transition-colors"
          >
            Book a free strategy call
          </Link>
        </p>
      </div>
    </div>
  );
};

export default GrowthAddOnsCard;
