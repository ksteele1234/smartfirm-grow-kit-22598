import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import OptimizedImage from "@/components/ui/optimized-image";
import smartFirmLogo from "@/assets/smartfirm-logo-gradient.webp";

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
    <footer className="bg-[#91ADC8]/[0.08] border-t border-[#E2E8F0]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Main Footer Content */}
        <div className="pt-[60px] pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[35%_20%_20%_25%] gap-6 md:gap-8 lg:gap-12">
            {/* Company Info Column */}
            <div>
              <div className="mb-5">
                <a href="/" className="flex items-center mb-5">
                  <OptimizedImage 
                    src={smartFirmLogo} 
                    alt="SmartFirm - Marketing and Automation for Accounting Firms"
                    width={300}
                    height={64}
                    className="h-16 w-auto max-w-[160px]"
                  />
                </a>
                <p className="text-[15px] font-normal text-[#666666] leading-relaxed mb-6">
                  Marketing and automation solutions designed specifically for ambitious accounting firms seeking consistent growth and operational excellence.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-[10px]">
                  <Phone className="h-[18px] w-[18px] text-[#4D869C]" />
                  <a href="tel:+15416583789" className="text-[15px] font-medium text-[#333333] hover:text-[#4D869C] transition-colors">
                    (541) 658-3789
                  </a>
                </div>
                <div className="flex items-center gap-[10px]">
                  <Mail className="h-[18px] w-[18px] text-[#4D869C]" />
                  <a href="mailto:contact@smartfirm.io" className="text-[15px] font-medium text-[#333333] hover:text-[#4D869C] transition-colors">
                    contact@smartfirm.io
                  </a>
                </div>
                <div className="flex items-center gap-[10px]">
                  <MapPin className="h-[18px] w-[18px] text-[#4D869C]" />
                  <span className="text-[15px] font-medium text-[#333333]">Eugene, OR</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-row gap-3">
                <a href="https://www.facebook.com/SmartFirm.io" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-[#E2E8F0] rounded-lg flex items-center justify-center text-[#666666] hover:border-[#4D869C] hover:text-[#4D869C] transition-all duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://x.com/SmartFirm15" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-[#E2E8F0] rounded-lg flex items-center justify-center text-[#666666] hover:border-[#4D869C] hover:text-[#4D869C] transition-all duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/company/smart-firm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-[#E2E8F0] rounded-lg flex items-center justify-center text-[#666666] hover:border-[#4D869C] hover:text-[#4D869C] transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/@Marketing4Accountants" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-[#E2E8F0] rounded-lg flex items-center justify-center text-[#666666] hover:border-[#4D869C] hover:text-[#4D869C] transition-all duration-300">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/smartfirm.io" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-[#E2E8F0] rounded-lg flex items-center justify-center text-[#666666] hover:border-[#4D869C] hover:text-[#4D869C] transition-all duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-[16px] font-bold text-[#334260] mb-4">Services</h4>
              <p className="text-[13px] font-medium text-[#999999] italic mb-3">What We Do</p>
              <ul className="space-y-[10px]">
                {services.map((service) => (
                  <li key={service.slug}>
                    <a 
                      href={`/services/${service.slug}`}
                      className="text-[15px] font-normal text-[#666666] leading-relaxed hover:text-[#4D869C] hover:underline transition-colors duration-200"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Column */}
            <div>
              <h4 className="text-[16px] font-bold text-[#334260] mb-4">Solutions</h4>
              <p className="text-[13px] font-medium text-[#999999] italic mb-3">Outcomes You Get</p>
              <ul className="space-y-[10px]">
                {solutions.map((solution) => (
                  <li key={solution.slug}>
                    <a 
                      href={`/solutions/${solution.slug}`}
                      className="text-[15px] font-normal text-[#666666] leading-relaxed hover:text-[#4D869C] hover:underline transition-colors duration-200"
                    >
                      {solution.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="text-[16px] font-bold text-[#334260] mb-4">Resources</h4>
              <ul className="space-y-[10px]">
                {resources.map((resource) => (
                  <li key={resource.slug}>
                    <a 
                      href={resource.slug}
                      className="text-[15px] font-normal text-[#666666] leading-relaxed hover:text-[#4D869C] hover:underline transition-colors duration-200"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a 
                    href="/quick-start-marketing-for-cpa-firms" 
                    className="text-[15px] font-normal text-[#666666] leading-relaxed hover:text-[#4D869C] hover:underline transition-colors duration-200"
                  >
                    Quick Start Package
                  </a>
                </li>
                <li>
                  <a 
                    href="/about" 
                    className="text-[15px] font-normal text-[#666666] leading-relaxed hover:text-[#4D869C] hover:underline transition-colors duration-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="/contact" 
                    className="text-[15px] font-normal text-[#666666] leading-relaxed hover:text-[#4D869C] hover:underline transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 mt-10 border-t border-[#E2E8F0]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
            <div className="text-[14px] font-normal text-[#999999]">
              © 2025 SmartFirm.io. All rights reserved.
            </div>
            <div className="flex gap-6 text-[14px]">
              <a href="/privacy" className="text-[#999999] hover:text-[#4D869C] transition-colors">
                Privacy Policy
              </a>
              <span className="text-[#999999]">|</span>
              <a href="/terms" className="text-[#999999] hover:text-[#4D869C] transition-colors">
                Terms of Service
              </a>
              <span className="text-[#999999]">|</span>
              <a href="/cookies" className="text-[#999999] hover:text-[#4D869C] transition-colors">
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