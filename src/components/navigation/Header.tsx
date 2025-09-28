import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import smartFirmLogo from "@/assets/smartfirm-logo-gradient.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className={cn(
                  "group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none"
                )}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger asChild>
                  <a href="/services" className="group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none">
                    Services
                  </a>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[500px] grid-cols-2">
                    {services.map((service) => (
                      <NavigationMenuLink
                        key={service}
                        href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{service}</div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          {service === "Automated Lead Follow-up" && "Convert more prospects with automated email sequences"}
                          {service === "Client Review Generation" && "Get more positive reviews and testimonials"}
                          {service === "SEO for Accountants" && "Rank higher in local search results"}
                          {service === "Social Media Management" && "Professional social media presence"}
                          {service === "Email Marketing" && "Nurture leads with targeted campaigns"}
                          {service === "Website Design" && "Modern, conversion-optimized websites"}
                        </p>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger asChild>
                  <a href="/solutions" className="group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none">
                    Solutions
                  </a>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[500px] grid-cols-1">
                    {solutions.map((solution) => (
                      <NavigationMenuLink
                        key={solution}
                        href={`/solutions/${solution.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{solution}</div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          {solution === "I need more leads" && "Generate qualified prospects consistently"}
                          {solution === "I want to scale my firm" && "Grow without proportional overhead increase"}
                          {solution === "I'm losing clients to competitors" && "Strengthen your competitive position"}
                          {solution === "I need better client retention" && "Keep clients engaged and loyal"}
                        </p>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger asChild>
                  <a href="/industries" className="group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none">
                    Industries
                  </a>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] grid-cols-1">
                    {industries.map((industry) => (
                      <NavigationMenuLink
                        key={industry}
                        href={`/industries/${industry.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{industry}</div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          {industry === "Tax Preparation" && "Specialized marketing for tax professionals"}
                          {industry === "Bookkeeping Services" && "Growth strategies for bookkeepers"}
                          {industry === "Business Advisory" && "Marketing for advisory services"}
                          {industry === "Audit & Assurance" && "Professional services marketing"}
                        </p>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/success-stories" className={cn(
                  "group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none"
                )}>
                  Success Stories
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/about" className={cn(
                  "group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none"
                )}>
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/contact" className={cn(
                  "group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none"
                )}>
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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