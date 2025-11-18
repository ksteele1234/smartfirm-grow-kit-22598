import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import OptimizedImage from "@/components/ui/optimized-image";
import smartFirmLogo from "@/assets/smartfirm-logo-white.png";

const Footer = () => {
  const services = [
    { name: "Automated Lead Follow-up", slug: "automated-lead-follow-up-for-cpas" },
    { name: "Client Review Generation", slug: "automated-review-generation-for-cpas" },
    { name: "SEO for Accountants", slug: "seo-for-accounting-firms" },
    { name: "Email Marketing", slug: "email-marketing-for-cpas" },
    { name: "Social Media Management", slug: "social-media-management-for-cpas" },
    { name: "Website Design", slug: "professional-website-design-for-accounting-firms" }
  ];

  const solutions = [
    { name: "Lead Generation", slug: "lead-generation" },
    { name: "Scale Your Firm", slug: "scale-accounting-firm-successfully" }, 
    { name: "Client Retention", slug: "client-retention-strategies-for-cpas" },
    { name: "Stop Losing Clients", slug: "stop-losing-clients-to-tech-savvy-cpas" }
  ];

  const resources = [
    { name: "Resources", slug: "/resources" },
    { name: "Tools & Calculators", slug: "/tools" }
  ];


  return (
    <footer className="bg-[hsl(var(--deep-navy))] pb-8">
      <div className="container mx-auto px-6 max-w-container-2xl pt-8 md:pt-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-lg pb-8 md:pb-12 border-b border-on-dark-subtle">
          {/* Column 1 - Logo & About */}
          <div>
            <a href="/" className="inline-block mb-3 md:mb-5">
              <OptimizedImage 
                src={smartFirmLogo} 
                alt="SmartFirm - Marketing and Automation for Accounting Firms"
                width={320}
                height={120}
                className="h-20 md:h-36 w-auto max-w-[405px]"
              />
            </a>
            <p className="hidden md:block text-base text-white/85 leading-[1.6]">
              Marketing and automation solutions designed specifically for ambitious accounting firms seeking consistent growth and operational excellence.
            </p>
          </div>

          {/* Column 2 - Services */}
          <div>
            {/* Mobile: Clickable header */}
            <a href="/all-professional-marketing-services" className="block md:hidden text-base font-semibold text-white uppercase tracking-wide hover:text-primary transition-colors">
              Services
            </a>
            {/* Desktop: Regular header with list */}
            <h3 className="hidden md:block text-base font-semibold text-white uppercase tracking-wide mb-4">Services</h3>
            <ul className="hidden md:block space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <a 
                    href={`/services/${service.slug}`}
                    className="text-base text-white/85 hover:text-primary transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Solutions & Resources */}
          <div>
            {/* Mobile: Clickable headers */}
            <a href="/solutions" className="block md:hidden text-base font-semibold text-white uppercase tracking-wide hover:text-primary transition-colors">
              Solutions
            </a>
            <a href="/resources" className="block md:hidden text-base font-semibold text-white uppercase tracking-wide hover:text-primary transition-colors">
              Resources
            </a>
            
            {/* Desktop: Regular headers with lists */}
            <h3 className="hidden md:block text-base font-semibold text-white uppercase tracking-wide mb-4">Solutions</h3>
            <ul className="hidden md:block space-y-3 mb-8">
              {solutions.map((solution) => (
                <li key={solution.slug}>
                  <a 
                    href={`/solutions/${solution.slug}`}
                    className="text-base text-white/85 hover:text-primary transition-colors duration-200"
                  >
                    {solution.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <h3 className="hidden md:block text-base font-semibold text-white uppercase tracking-wide mb-4">Resources</h3>
            <ul className="hidden md:block space-y-3">
              {resources.map((resource) => (
                <li key={resource.slug}>
                  <a 
                    href={resource.slug}
                    className="text-base text-white/85 hover:text-primary transition-colors duration-200"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="/quick-start-marketing-for-cpa-firms" 
                  className="text-base text-white/85 hover:text-primary transition-colors duration-200"
                >
                  Quick Start
                </a>
              </li>
              <li>
                <a 
                  href="/faq"
                  className="text-base text-white/85 hover:text-primary transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            {/* Mobile: Clickable header */}
            <a href="/contact" className="block md:hidden text-base font-semibold text-white uppercase tracking-wide hover:text-primary transition-colors">
              Contact
            </a>
            
            {/* Desktop: Regular header with contact details */}
            <h3 className="hidden md:block text-base font-semibold text-white uppercase tracking-wide mb-4">Contact</h3>
            <div className="hidden md:block space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-white/85 mt-0.5 flex-shrink-0" />
                <a href="tel:+15416583789" className="text-base text-white/85 hover:text-primary transition-colors duration-200">
                  (541) 658-3789
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-white/85 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@smartfirm.io" className="text-base text-white/85 hover:text-primary transition-colors duration-200">
                  contact@smartfirm.io
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-white/85 mt-0.5 flex-shrink-0" />
                <span className="text-base text-white/85">Eugene, OR</span>
              </div>
              <div>
                <a 
                  href="/contact" 
                  className="text-base text-white/85 hover:text-primary transition-colors duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="hidden md:flex flex-wrap gap-3">
              <a href="https://www.facebook.com/SmartFirm.io" target="_blank" rel="noopener noreferrer" aria-label="Visit SmartFirm on Facebook" className="w-9 h-9 bg-white/5 border border-on-dark-subtle rounded-card-sm flex items-center justify-center text-on-dark-body hover:text-primary hover:border-primary color-transition">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://x.com/SmartFirm15" target="_blank" rel="noopener noreferrer" aria-label="Follow SmartFirm on Twitter" className="w-9 h-9 bg-white/5 border border-on-dark-subtle rounded-card-sm flex items-center justify-center text-on-dark-body hover:text-primary hover:border-primary color-transition">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/smart-firm" target="_blank" rel="noopener noreferrer" aria-label="Connect with SmartFirm on LinkedIn" className="w-9 h-9 bg-white/5 border border-on-dark-subtle rounded-card-sm flex items-center justify-center text-on-dark-body hover:text-primary hover:border-primary color-transition">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/@Marketing4Accountants" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to SmartFirm on YouTube" className="w-9 h-9 bg-white/5 border border-on-dark-subtle rounded-card-sm flex items-center justify-center text-on-dark-body hover:text-primary hover:border-primary color-transition">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/smartfirm.io/" target="_blank" rel="noopener noreferrer" aria-label="Follow SmartFirm on Instagram" className="w-9 h-9 bg-white/5 border border-on-dark-subtle rounded-card-sm flex items-center justify-center text-on-dark-body hover:text-primary hover:border-primary color-transition">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <div className="text-sm text-white/65">
              © 2025 SmartFirm.io. All rights reserved.
            </div>
            <div className="flex gap-sm text-sm text-white/65">
              <a href="/privacy" className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/cookies" className="hover:text-primary transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
