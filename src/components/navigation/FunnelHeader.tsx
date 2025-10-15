import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import smartFirmLogo from "@/assets/smartfirm-logo-full.webp";

export const FunnelHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={smartFirmLogo} 
              alt="SmartFirm.io" 
              className="h-[60px] w-auto"
            />
          </Link>
          
          <a 
            href="mailto:contact@smartfirm.io" 
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="font-semibold text-lg">contact@smartfirm.io</span>
          </a>
        </div>
      </div>
    </header>
  );
};
