import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import OptimizedImage from "@/components/ui/optimized-image";
import smartFirmLogo from "@/assets/smartfirm-logo-white.png";

const Footer = () => {
  const services = [
    { name: "Automated Lead Follow-up", slug: "automated-lead-follow-up" },
    { name: "Client Review Generation", slug: "client-review-generation" },
    { name: "SEO for Accountants", slug: "seo-for-accountants" },
    { name: "Email Marketing", slug: "email-marketing" },
    { name: "Social Media Management", slug: "social-media-management" },
    { name: "Website Design", slug: "website-design" }
  ];

  const solutions = [
    { name: "Lead Generation", slug: "lead-generation" },
    { name: "Scale Your Firm", slug: "scale-firm" }, 
    { name: "Client Retention", slug: "client-retention" },
    { name: "Stop Losing Clients", slug: "stop-losing-clients-to-tech-savvy-cpas" }
  ];

  const resources = [
    { name: "Resources", slug: "/resources" },
    { name: "Tools & Calculators", slug: "/tools" }
  ];


  return (
    <footer className="bg-[#0a2e2e] pb-8">
      <div className="container mx-auto px-6 max-w-[1200px] pt-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Column 1 - Logo & About */}
          <div>
            <a href="/" className="inline-block mb-5">
              <OptimizedImage 
                src={smartFirmLogo} 
                alt="SmartFirm - Marketing and Automation for Accounting Firms"
                width={320}
                height={120}
                className="h-16 w-auto max-w-[180px]"
              />
            </a>
            <p className="text-sm text-white/70 leading-[1.6]">
              Marketing and automation solutions designed specifically for ambitious accounting firms seeking consistent growth and operational excellence.
            </p>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <a 
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/70 hover:text-[#2dd4bf] transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Solutions & Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Solutions</h3>
            <ul className="space-y-3 mb-8">
              {solutions.map((solution) => (
                <li key={solution.slug}>
                  <a 
                    href={`/solutions/${solution.slug}`}
                    className="text-sm text-white/70 hover:text-[#2dd4bf] transition-colors duration-200"
                  >
                    {solution.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.slug}>
                  <a 
                    href={resource.slug}
                    className="text-sm text-white/70 hover:text-[#2dd4bf] transition-colors duration-200"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="/quick-start-marketing-for-cpa-firms" 
                  className="text-sm text-white/70 hover:text-[#2dd4bf] transition-colors duration-200"
                >
                  Quick Start Package
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="text-sm text-white/70 hover:text-[#2dd4bf] transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Contact</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-white/70 mt-0.5 flex-shrink-0" />
                <a href="tel:+15416583789" className="text-sm text-white/70 hover:text-[#2dd4bf] transition-colors duration-200">
                  (541) 658-3789
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-white/70 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@smartfirm.io" className="text-sm text-white/70 hover:text-[#2dd4bf] transition-colors duration-200">
                  contact@smartfirm.io
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-white/70 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">Eugene, OR</span>
              </div>
              <div>
                <a 
                  href="/contact" 
                  className="text-sm text-white/70 hover:text-[#2dd4bf] transition-colors duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              <a href="https://www.facebook.com/SmartFirm.io" target="_blank" rel="noopener noreferrer" aria-label="Visit SmartFirm on Facebook" className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-[#2dd4bf] hover:border-[#2dd4bf] transition-all duration-200">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://x.com/SmartFirm15" target="_blank" rel="noopener noreferrer" aria-label="Follow SmartFirm on Twitter" className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-[#2dd4bf] hover:border-[#2dd4bf] transition-all duration-200">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/smart-firm" target="_blank" rel="noopener noreferrer" aria-label="Connect with SmartFirm on LinkedIn" className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-[#2dd4bf] hover:border-[#2dd4bf] transition-all duration-200">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/@Marketing4Accountants" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to SmartFirm on YouTube" className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-[#2dd4bf] hover:border-[#2dd4bf] transition-all duration-200">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/smartfirm.io" target="_blank" rel="noopener noreferrer" aria-label="Follow SmartFirm on Instagram" className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-[#2dd4bf] hover:border-[#2dd4bf] transition-all duration-200">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <div className="text-xs text-white/50">
              © 2025 SmartFirm.io. All rights reserved.
            </div>
            <div className="flex gap-6 text-xs text-white/50">
              <a href="/privacy" className="hover:text-[#2dd4bf] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-[#2dd4bf] transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/cookies" className="hover:text-[#2dd4bf] transition-colors duration-200">
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
