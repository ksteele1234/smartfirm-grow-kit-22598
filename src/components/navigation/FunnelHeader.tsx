import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import OptimizedImage from "@/components/ui/optimized-image";
import smartFirmLogo from "@/assets/smartfirm-logo-header.png";

export const FunnelHeader = () => {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-[76px]">
          <Link to="/" className="flex-shrink-0">
            <OptimizedImage 
              src={smartFirmLogo} 
              alt="SmartFirm - Marketing and Automation for Accounting Firms" 
              width={240}
              height={60}
              priority
              className="h-[60px] w-auto"
            />
          </Link>
          
          <div className="flex-1" />
          
          <a 
            href="tel:+15416583789" 
            className="flex-shrink-0 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span className="font-semibold text-lg hidden md:inline">(541) 658-3789</span>
          </a>
        </div>
      </div>
    </header>
  );
};
