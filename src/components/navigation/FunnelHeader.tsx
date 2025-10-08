import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FunnelHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/src/assets/smartfirm-logo.svg" 
              alt="SmartFirm.io" 
              className="h-8 w-auto"
            />
          </Link>
          
          <a 
            href="tel:15416583789" 
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span className="font-semibold text-lg">1-541-658-3789</span>
          </a>
        </div>
      </div>
    </header>
  );
};
