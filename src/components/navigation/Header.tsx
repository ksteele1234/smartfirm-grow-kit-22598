import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import smartFirmLogo from "@/assets/smartfirm-logo-gradient.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    "Automated Lead Follow-up",
    "Client Review Generation", 
    "SEO for Accountants",
    "Social Media Management",
    "Email Marketing",
    "Website Design"
  ];

  const solutions = [
    "I need more leads",
    "I want to scale my firm", 
    "I'm losing clients to competitors",
    "I need better client retention"
  ];

  const industries = [
    "Tax Preparation",
    "Bookkeeping Services",
    "Business Advisory",
    "Audit & Assurance"
  ];

  return (
    <header className="bg-background-light/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src={smartFirmLogo} 
                alt="SmartFirm - Marketing and Automation for Accounting Firms" 
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors font-medium">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-soft">
                {services.map((service) => (
                  <DropdownMenuItem key={service} className="hover:bg-accent">
                    <a href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}>
                      {service}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors font-medium">
                <a href="/solutions" className="flex items-center">
                  Solutions <ChevronDown className="ml-1 h-4 w-4" />
                </a>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-soft">
                {solutions.map((solution) => (
                  <DropdownMenuItem key={solution} className="hover:bg-accent">
                    <a href={`/solutions/${solution.toLowerCase().replace(/\s+/g, '-')}`}>
                      {solution}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors font-medium">
                Industries <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-soft">
                {industries.map((industry) => (
                  <DropdownMenuItem key={industry} className="hover:bg-accent">
                    <a href={`/industries/${industry.toLowerCase().replace(/\s+/g, '-')}`}>
                      {industry}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/resources" className="text-foreground hover:text-primary transition-colors font-medium">
              Resources
            </a>
            <a href="/success-stories" className="text-foreground hover:text-primary transition-colors font-medium">
              Success Stories
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="hero" size="default" asChild>
              <a href="/get-started">Get Started</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="/services" className="text-foreground hover:text-primary transition-colors font-medium">
                Services
              </a>
              <a href="/solutions" className="text-foreground hover:text-primary transition-colors font-medium">
                Solutions
              </a>
              <a href="/industries" className="text-foreground hover:text-primary transition-colors font-medium">
                Industries
              </a>
              <a href="/resources" className="text-foreground hover:text-primary transition-colors font-medium">
                Resources
              </a>
              <a href="/success-stories" className="text-foreground hover:text-primary transition-colors font-medium">
                Success Stories
              </a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
                About Us
              </a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
              <Button variant="hero" size="default" className="w-full mt-4" asChild>
                <a href="/get-started">Get Started</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;