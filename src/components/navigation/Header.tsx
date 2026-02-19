import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/ui/optimized-image";
import smartFirmLogo from "@/assets/smartfirm-logo-header.png";
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
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for header effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const marketingServices = [
    {
      title: "Marketing Automation",
      href: "/services/marketing-automation-for-accounting-firms/",
      description: "SmartFirm marketing automation for accountants, CPAs, and bookkeepers that attracts more leads and converts them into clients."
    },
    {
      title: "Strategy & Integration",
      href: "/services/marketing-strategy-integration-for-accounting-firms/",
      description: "Connect your marketing infrastructure with custom roadmaps and seamless integrations."
    },
    {
      title: "SEO for Accountants",
      href: "/services/seo-for-accounting-firms/",
      description: "SEO for accounting firms and CPAs that improves local rankings and drives qualified leads."
    },
    {
      title: "Website Design",
      href: "/services/website-design-for-accounting-firms/",
      description: "Modern, SEO-optimized websites for CPAs and accountants that convert visitors into clients."
    },
    {
      title: "Content Marketing",
      href: "/services/content-marketing-for-accounting-firms/",
      description: "Strategic content that establishes thought leadership and attracts ideal clients through education."
    },
    {
      title: "Social Media Management",
      href: "/services/social-media-management-for-accounting-firms/",
      description: "Consistent, professional content that positions your firm as a trusted expert."
    },
    {
      title: "Email Marketing",
      href: "/services/email-marketing-for-accounting-firms/",
      description: "Targeted campaigns that nurture leads, improve client retention, and drive repeat business."
    },
    {
      title: "Automated Lead Follow-up",
      href: "/services/automated-lead-follow-up-for-accounting-firms/",
      description: "Convert more leads with CPA-focused email and SMS automation that responds instantly."
    },
    {
      title: "Client Review Generation",
      href: "/services/automated-review-generation-for-cpas/",
      description: "Boost your reputation with automated review requests that increase referrals and 5-star ratings."
    },
    {
      title: "Online Reputation Management",
      href: "/services/reputation-management-for-cpa-firms/",
      description: "Monitor, protect, and elevate your firm's online reputation with automated review generation."
    }
  ];

  const operationsServices = [
    {
      title: "AI Transformation Roadmap",
      href: "/services/ai-transformation-roadmap-for-accounting-firms/",
      description: "Strategic AI implementation plan for accounting firms ready to transform their operations."
    },
    {
      title: "Single Process AI Transformation",
      href: "/services/ai-process-optimization-for-accounting-firms/",
      description: "Focus on one critical process and transform it completely with AI."
    },
    {
      title: "Client Onboarding Automation",
      href: "/services/client-onboarding-automation/",
      description: "Streamline client intake with automated welcome emails, document collection, and reminders."
    },
    {
      title: "Technology Solutions",
      href: "/services/technology-consulting-for-accounting-firms/",
      description: "Optimize your CPA tech stack with automation tools and smarter workflows that scale."
    },
    {
      title: "Business Optimization",
      href: "/services/business-optimization-for-accounting-firms/",
      description: "Drive firm growth with streamlined processes, KPI dashboards, and data-driven decisions."
    },
    {
      title: "Executive Services",
      href: "/services/fractional-cio-for-accounting-firms/",
      description: "Fractional CIO and CFO expertise tailored to accounting firms that want growth without full-time costs."
    }
  ];

  const solutions = [
    // Main Solutions
    {
      title: "Stay Ahead of Tech-Savvy CPAs",
      href: "/solutions/stop-losing-clients-to-tech-savvy-cpas/",
      description: "Compete and win with accounting marketing automation, SEO, and digital-first systems tailored for firms like yours."
    },
    {
      title: "Get More Referrals Without Asking",
      href: "/solutions/get-more-referrals-for-cpa-firm-without-asking/",
      description: "Transform satisfied clients into steady referrals with review generation and social media marketing for accountants."
    },
    {
      title: "Work Less, Earn More",
      href: "/solutions/work-less-earn-more-as-a-cpa/",
      description: "Boost profitability through CPA marketing automation that cuts busywork and frees your team's time."
    },
    {
      title: "Grow Without the Growing Pains",
      href: "/solutions/grow-accounting-firm-without-growing-pains/",
      description: "Scale your accounting firm with proven lead generation strategies and efficient tech automation."
    },
    {
      title: "Protect Your Practice & Your Future",
      href: "/solutions/protect-accounting-practice-from-data-breaches/",
      description: "Safeguard your firm with secure systems, SEO visibility, and future-ready marketing strategies."
    },
    // Specific Areas
    {
      title: "I want to scale my firm",
      href: "/solutions/scale-accounting-firm-without-chaos/",
      description: "Grow capacity and revenue using automation for accountants and CPAs without ballooning overhead."
    },
    {
      title: "I need better client retention",
      href: "/solutions/stop-losing-clients-to-tech-savvy-cpas/",
      description: "Improve retention with email marketing, client review generation, and proactive engagement strategies."
    },
    {
      title: "I'm losing clients during onboarding",
      href: "/solutions/client-onboarding-problems/",
      description: "Stop losing new clients to a broken onboarding process—create a flawless first impression every time."
    }
  ];

  // Use canonical long-slug URLs to avoid redirects and ensure proper SEO linking
  const industries = [
    {
      name: "Tax Preparation",
      slug: "automation-for-tax-preparation-firms",
      description: "Specialized marketing and SEO for tax preparers to generate leads and grow during peak seasons and beyond."
    },
    {
      name: "Bookkeeping Services",
      slug: "marketing-for-bookkeeping-firms",
      description: "Proven digital marketing for bookkeepers that attracts clients, builds trust, and scales revenue."
    },
    {
      name: "Business Advisory",
      slug: "business-advisory",
      description: "Marketing strategies for advisory firms that position you as the go-to growth partner for business clients."
    },
    {
      name: "Audit & Assurance",
      slug: "marketing-for-audit-firms",
      description: "SEO and visibility campaigns for CPAs and audit firms designed to build authority and long-term trust."
    }
  ];

  return (
    <header className={cn(
      "bg-white sticky top-0 z-50 color-transition",
      "h-[72px] border-b",
      isScrolled
        ? "backdrop-blur-lg shadow-elevation-1 border-border"
        : "border-border"
    )}>
      <div className="container mx-auto px-6 lg:px-12 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <OptimizedImage
                src={smartFirmLogo}
                alt="SmartFirm - Marketing and Automation for Accounting Firms"
                width={300}
                height={63}
                loading="lazy"
                className="h-[66px] w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className={cn(
                  "group inline-flex h-10 w-max items-center justify-center px-4 py-2",
                  "text-base font-medium text-slate-700 transition-colors duration-200",
                  "hover:text-primary focus:text-primary focus:outline-none"
                )}>
                  HOME
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "h-10 w-max bg-transparent px-4 py-2",
                  "text-base font-medium text-slate-700 transition-colors duration-200",
                  "hover:text-primary focus:text-primary",
                  "data-[state=open]:text-primary"
                )}>
                  <a href="/services/" className="flex items-center">
                    SERVICES
                  </a>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-card-sm w-full max-w-[700px] lg:w-[700px] grid-cols-2 bg-background border border-border elevation-3 z-50">
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-3">Marketing Services</h4>
                      <div className="grid gap-2">
                        {marketingServices.map((service) => (
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
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-3">Operations & AI</h4>
                      <div className="grid gap-2">
                        {operationsServices.map((service) => (
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
                <NavigationMenuTrigger className={cn(
                  "h-10 w-max bg-transparent px-4 py-2",
                  "text-base font-medium text-slate-700 transition-colors duration-200",
                  "hover:text-primary focus:text-primary",
                  "data-[state=open]:text-primary"
                )}>
                  <a href="/solutions/" className="flex items-center">
                    SOLUTIONS
                  </a>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-card-sm w-full max-w-[600px] lg:w-[600px] grid-cols-1">
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
                <NavigationMenuTrigger className={cn(
                  "h-10 w-max bg-transparent px-4 py-2",
                  "text-base font-medium text-slate-700 transition-colors duration-200",
                  "hover:text-primary focus:text-primary",
                  "data-[state=open]:text-primary"
                )}>
                  <a href="/industries/" className="flex items-center">
                    INDUSTRIES
                  </a>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-card-sm w-full max-w-[400px] lg:w-[400px] grid-cols-1">
                    {industries.map((industry) => (
                      <NavigationMenuLink
                        key={industry.slug}
                        href={`/industries/${industry.slug}/`}
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

              <NavigationMenuItem>
                <NavigationMenuLink href="/tools/" className={cn(
                  "group inline-flex h-10 w-max items-center justify-center px-4 py-2",
                  "text-base font-medium text-slate-700 transition-colors duration-200",
                  "hover:text-primary focus:text-primary focus:outline-none"
                )}>
                  FREE TOOLS
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/marketing-agency-for-accounting-firms/" className={cn(
                  "group inline-flex h-10 w-max items-center justify-center px-4 py-2",
                  "text-base font-medium text-slate-700 transition-colors duration-200",
                  "hover:text-primary focus:text-primary focus:outline-none"
                )}>
                  ABOUT US
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/accounting-firm-automation-consultation/" className={cn(
                  "group inline-flex h-10 w-max items-center justify-center px-4 py-2",
                  "text-base font-medium text-slate-700 transition-colors duration-200",
                  "hover:text-primary focus:text-primary focus:outline-none"
                )}>
                  CONTACT
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              id="header-book-call-btn"
              variant="coral"
              size="default"
              asChild
              className="uppercase text-sm font-bold tracking-wide px-6 py-2.5"
            >
              <a href="/get-started-accounting-firm-automation/">BOOK A FREE CALL</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border bg-background" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-4 items-center">
              <a href="/" className="text-slate-700 hover:text-primary transition-colors duration-200 font-medium">
                HOME
              </a>
              <a href="/services/" className="text-slate-700 hover:text-primary transition-colors duration-200 font-medium">
                SERVICES
              </a>
              <a href="/solutions/" className="text-slate-700 hover:text-primary transition-colors duration-200 font-medium">
                SOLUTIONS
              </a>
              <a href="/industries/" className="text-slate-700 hover:text-primary transition-colors duration-200 font-medium">
                INDUSTRIES
              </a>
              <a href="/tools/" className="text-slate-700 hover:text-primary transition-colors duration-200 font-medium">
                FREE TOOLS
              </a>
              <a href="/marketing-agency-for-accounting-firms/" className="text-slate-700 hover:text-primary transition-colors duration-200 font-medium">
                ABOUT US
              </a>
              <a href="/accounting-firm-automation-consultation/" className="text-slate-700 hover:text-primary transition-colors duration-200 font-medium">
                CONTACT
              </a>
              <Button
                id="mobile-header-book-call-btn"
                variant="coral"
                size="default"
                className="mt-4 uppercase text-sm font-bold tracking-wide"
                asChild
              >
                <a href="/get-started-accounting-firm-automation/">BOOK A FREE CALL</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
