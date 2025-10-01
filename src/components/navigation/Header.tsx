import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/ui/optimized-image";
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
    // Top-tier Service Categories
    { 
      title: "Marketing Automation", 
      href: "/services/marketing-automation",
      description: "Complete marketing automation platform for accounting firms"
    },
    { 
      title: "Technology Solutions", 
      href: "/services/technology-solutions",
      description: "Tech stack optimization and business process automation"
    },
    { 
      title: "Business Optimization", 
      href: "/services/business-optimization",
      description: "Process improvement and executive dashboards"
    },
    { 
      title: "Executive Services", 
      href: "/services/executive-services",
      description: "Fractional CIO and CFO services for growing firms"
    },
    // Individual Services
    { 
      title: "Automated Lead Follow-up", 
      href: "/services/automated-lead-follow-up",
      description: "Convert more prospects with automated email sequences"
    },
    { 
      title: "Client Review Generation", 
      href: "/services/client-review-generation",
      description: "Get more positive reviews and testimonials"
    },
    { 
      title: "SEO for Accountants", 
      href: "/services/seo-for-accountants",
      description: "Rank higher in local search results"
    },
    { 
      title: "Social Media Management", 
      href: "/services/social-media-management",
      description: "Professional social media presence"
    },
    { 
      title: "Email Marketing", 
      href: "/services/email-marketing",
      description: "Nurture leads with targeted campaigns"
    },
    { 
      title: "Website Design", 
      href: "/services/website-design",
      description: "Modern, conversion-optimized websites"
    }
  ];

  const solutions = [
    // Main Solution Categories
    { 
      title: "Stop Losing Clients to Tech-Savvy CPAs", 
      href: "/solutions/stop-losing-clients-to-tech-savvy-cpas",
      description: "Stay competitive with modern systems and automation"
    },
    { 
      title: "Get More Referrals Without Asking", 
      href: "/solutions/get-more-referrals-without-asking",
      description: "Turn satisfied clients into active advocates"
    },
    { 
      title: "Work Less, Earn More", 
      href: "/solutions/work-less-earn-more",
      description: "Maximize profitability through automation"
    },
    { 
      title: "Grow Without the Growing Pains", 
      href: "/solutions/grow-without-growing-pains",
      description: "Scale smoothly with efficient systems"
    },
    { 
      title: "Protect Your Practice & Your Future", 
      href: "/solutions/protect-practice-and-future",
      description: "Safeguard against threats and future-proof your firm"
    },
    // Specific Solution Areas
    { 
      title: "I need more leads", 
      href: "/solutions/lead-generation",
      description: "Generate qualified prospects consistently"
    },
    { 
      title: "I want to scale my firm", 
      href: "/solutions/scale-firm",
      description: "Grow without proportional overhead increase"
    },
    { 
      title: "I need better client retention", 
      href: "/solutions/client-retention",
      description: "Keep clients engaged and loyal"
    },
    { 
      title: "Advanced Client Retention Strategies", 
      href: "/solutions/retention-strategies",
      description: "Strengthen your competitive position"
    }
  ];

  const industries = [
    { name: "Tax Preparation", slug: "tax-preparation" },
    { name: "Bookkeeping Services", slug: "bookkeeping-services" },
    { name: "Business Advisory", slug: "business-advisory" },
    { name: "Audit & Assurance", slug: "audit-assurance" }
  ];

  return (
    <header className="bg-background-light/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <OptimizedImage 
                src={smartFirmLogo} 
                alt="SmartFirm - Marketing and Automation for Accounting Firms"
                width={150}
                height={32}
                priority
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
                <NavigationMenuTrigger className="h-10 w-max bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary data-[state=open]:text-primary">
                  <a href="/services" className="flex items-center">
                    Services
                  </a>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[600px] grid-cols-1 bg-background border border-border shadow-lg z-50">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-primary mb-2">Main Service Categories</h4>
                      <div className="grid gap-2">
                        {services.slice(0, 4).map((service) => (
                          <NavigationMenuLink
                            key={service.title}
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <h4 className="text-sm font-semibold text-primary mb-2">Individual Services</h4>
                      <div className="grid gap-2">
                        {services.slice(4).map((service) => (
                          <NavigationMenuLink
                            key={service.title}
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 w-max bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary data-[state=open]:text-primary">
                  <a href="/solutions" className="flex items-center">
                    Solutions
                  </a>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[600px] grid-cols-1">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-primary mb-2">Main Solutions</h4>
                      <div className="grid gap-2">
                        {solutions.slice(0, 5).map((solution) => (
                          <NavigationMenuLink
                            key={solution.title}
                            href={solution.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{solution.title}</div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {solution.description}
                            </p>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <h4 className="text-sm font-semibold text-primary mb-2">Specific Areas</h4>
                      <div className="grid gap-2">
                        {solutions.slice(5).map((solution) => (
                          <NavigationMenuLink
                            key={solution.title}
                            href={solution.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{solution.title}</div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {solution.description}
                            </p>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 w-max bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary data-[state=open]:text-primary">
                  <a href="/industries" className="flex items-center">
                    Industries
                  </a>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] grid-cols-1">
                    {industries.map((industry) => (
                      <NavigationMenuLink
                        key={industry.slug}
                        href={`/industries/${industry.slug}`}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{industry.name}</div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          {industry.name === "Tax Preparation" && "Specialized marketing for tax professionals"}
                          {industry.name === "Bookkeeping Services" && "Growth strategies for bookkeepers"}
                          {industry.name === "Business Advisory" && "Marketing for advisory services"}
                          {industry.name === "Audit & Assurance" && "Professional services marketing"}
                        </p>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="hidden">
                <NavigationMenuLink href="/case-studies" className={cn(
                  "group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none"
                )}>
                  Case Studies
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
              <a href="/case-studies" className="text-foreground hover:text-primary transition-colors font-medium hidden">
                Case Studies
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