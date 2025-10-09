import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/ui/optimized-image";
import smartFirmLogo from "@/assets/smartfirm-logo-full.png";
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
    // Main Service Categories
    { 
      title: "Marketing Automation", 
      href: "/services/marketing-automation",
      description: "SmartFirm marketing automation for accountants, CPAs, and bookkeepers that attracts more leads and converts them into clients."
    },
    { 
      title: "Technology Solutions", 
      href: "/services/technology-solutions",
      description: "Optimize your CPA tech stack with automation tools and smarter workflows that scale."
    },
    { 
      title: "Business Optimization", 
      href: "/services/business-optimization",
      description: "Drive firm growth with streamlined processes, KPI dashboards, and data-driven decisions."
    },
    { 
      title: "Executive Services", 
      href: "/services/executive-services",
      description: "Fractional CIO and CFO expertise tailored to accounting firms that want growth without full-time costs."
    },
    // Individual Services
    { 
      title: "Automated Lead Follow-up", 
      href: "/services/automated-lead-follow-up",
      description: "Convert more leads with CPA-focused email and SMS automation that responds instantly."
    },
    { 
      title: "Client Review Generation", 
      href: "/services/client-review-generation",
      description: "Boost your reputation with automated review requests that increase referrals and 5-star ratings."
    },
    { 
      title: "SEO for Accountants", 
      href: "/services/seo-for-accountants",
      description: "SEO for accounting firms and CPAs that improves local rankings and drives qualified leads."
    },
    { 
      title: "Social Media Management", 
      href: "/services/social-media-management",
      description: "Consistent, professional content that positions your firm as a trusted expert."
    },
    { 
      title: "Email Marketing", 
      href: "/services/email-marketing",
      description: "Targeted campaigns that nurture leads, improve client retention, and drive repeat business."
    },
    { 
      title: "Website Design", 
      href: "/services/website-design",
      description: "Modern, SEO-optimized websites for CPAs and accountants that convert visitors into clients."
    }
  ];

  const solutions = [
    // Main Solutions
    { 
      title: "Stay Ahead of Tech-Savvy CPAs", 
      href: "/solutions/stop-losing-clients-to-tech-savvy-cpas",
      description: "Compete and win with accounting marketing automation, SEO, and digital-first systems tailored for firms like yours."
    },
    { 
      title: "Get More Referrals Without Asking", 
      href: "/solutions/get-more-referrals-without-asking",
      description: "Transform satisfied clients into steady referrals with review generation and social media marketing for accountants."
    },
    { 
      title: "Work Less, Earn More", 
      href: "/solutions/work-less-earn-more",
      description: "Boost profitability through CPA marketing automation that cuts busywork and frees your team's time."
    },
    { 
      title: "Grow Without the Growing Pains", 
      href: "/solutions/grow-without-growing-pains",
      description: "Scale your accounting firm with proven lead generation strategies and efficient tech automation."
    },
    { 
      title: "Protect Your Practice & Your Future", 
      href: "/solutions/protect-practice-and-future",
      description: "Safeguard your firm with secure systems, SEO visibility, and future-ready marketing strategies."
    },
    // Specific Areas
    { 
      title: "I need more leads", 
      href: "/solutions/lead-generation",
      description: "Generate qualified accounting firm leads with targeted SEO and digital advertising."
    },
    { 
      title: "I want to scale my firm", 
      href: "/solutions/scale-firm",
      description: "Grow capacity and revenue using automation for accountants and CPAs without ballooning overhead."
    },
    { 
      title: "I need better client retention", 
      href: "/solutions/client-retention",
      description: "Improve retention with email marketing, client review generation, and proactive engagement strategies."
    },
    { 
      title: "Advanced Client Retention Strategies", 
      href: "/solutions/retention-strategies",
      description: "Protect your book of business with CPA-focused marketing automation and loyalty systems."
    }
  ];

  const industries = [
    { 
      name: "Tax Preparation", 
      slug: "tax-preparation",
      description: "Specialized marketing and SEO for tax preparers to generate leads and grow during peak seasons and beyond."
    },
    { 
      name: "Bookkeeping Services", 
      slug: "bookkeeping-services",
      description: "Proven digital marketing for bookkeepers that attracts clients, builds trust, and scales revenue."
    },
    { 
      name: "Business Advisory", 
      slug: "business-advisory",
      description: "Marketing strategies for advisory firms that position you as the go-to growth partner for business clients."
    },
    { 
      name: "Audit & Assurance", 
      slug: "audit-assurance",
      description: "SEO and visibility campaigns for CPAs and audit firms designed to build authority and long-term trust."
    }
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
                width={300}
                height={63}
                priority
                className="h-[66px] w-auto"
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
                  HOME
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 w-max bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary data-[state=open]:text-primary">
                  <a href="/services" className="flex items-center">
                    SERVICES
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
                    SOLUTIONS
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
                    INDUSTRIES
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
                          {industry.description}
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
                  CASE STUDIES
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/about" className={cn(
                  "group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none"
                )}>
                  ABOUT US
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/contact" className={cn(
                  "group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none"
                )}>
                  CONTACT
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="dark-teal" size="default" asChild>
              <a href="/get-started">GET STARTED</a>
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
                HOME
              </a>
              <a href="/services" className="text-foreground hover:text-primary transition-colors font-medium">
                SERVICES
              </a>
              <a href="/solutions" className="text-foreground hover:text-primary transition-colors font-medium">
                SOLUTIONS
              </a>
              <a href="/industries" className="text-foreground hover:text-primary transition-colors font-medium">
                INDUSTRIES
              </a>
              <a href="/case-studies" className="text-foreground hover:text-primary transition-colors font-medium hidden">
                CASE STUDIES
              </a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
                ABOUT US
              </a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
                CONTACT
              </a>
              <Button variant="dark-teal" size="default" className="w-full mt-4" asChild>
                <a href="/get-started">GET STARTED</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;