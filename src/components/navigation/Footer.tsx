import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import OptimizedImage from "@/components/ui/optimized-image";
import smartFirmLogo from "@/assets/smartfirm-logo-gradient.svg";

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

  const hiddenResources = [
    "Marketing Guides",
    "Industry Reports", 
    "Case Studies",
    "Webinars"
  ];

  return (
    <footer className="bg-dark-teal border-t border-dark-teal/50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <a href="/" className="flex items-center mb-4">
                  <OptimizedImage 
                    src={smartFirmLogo} 
                    alt="SmartFirm - Marketing and Automation for Accounting Firms"
                    width={150}
                    height={32}
                    className="h-8 w-auto"
                  />
                </a>
                <p className="text-white/80 leading-relaxed max-w-md">
                  Marketing and automation solutions designed specifically for ambitious accounting firms seeking consistent growth and operational excellence.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/80">
                  <Phone className="h-5 w-5 text-light-teal" />
                  <a href="tel:+15416583789" className="hover:text-light-teal transition-colors">
                    (541) 658-3789
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Mail className="h-5 w-5 text-light-teal" />
                  <a href="mailto:contact@smartfirm.io" className="hover:text-light-teal transition-colors">
                    contact@smartfirm.io
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <MapPin className="h-5 w-5 text-light-teal" />
                  <span>Eugene, OR</span>
                </div>
                <div className="text-white/80 text-sm">
                  <div className="font-medium mb-1 text-white">Business Hours:</div>
                  <div>Monday - Friday: 9 AM - 6 PM</div>
                  <div>Saturday - Sunday: Closed</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <a href="https://www.facebook.com/SmartFirm.io" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-light-teal hover:text-slate-navy rounded-lg flex items-center justify-center transition-colors text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://x.com/SmartFirm15" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-light-teal hover:text-slate-navy rounded-lg flex items-center justify-center transition-colors text-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/smart-firm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-light-teal hover:text-slate-navy rounded-lg flex items-center justify-center transition-colors text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/@Marketing4Accountants" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-light-teal hover:text-slate-navy rounded-lg flex items-center justify-center transition-colors text-white">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/smartfirm.io" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-light-teal hover:text-slate-navy rounded-lg flex items-center justify-center transition-colors text-white">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.slug}>
                    <a 
                      href={`/services/${service.slug}`}
                      className="text-white/80 hover:text-light-teal transition-colors"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Column */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Solutions</h4>
              <ul className="space-y-3">
                {solutions.map((solution) => (
                  <li key={solution.slug}>
                    <a 
                      href={`/solutions/${solution.slug}`}
                      className="text-white/80 hover:text-light-teal transition-colors"
                    >
                      {solution.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.slug}>
                    <a 
                      href={resource.slug}
                      className="text-white/80 hover:text-light-teal transition-colors"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a 
                  href="/about" 
                  className="block text-white/80 hover:text-light-teal transition-colors mb-2"
                >
                  About Us
                </a>
                <a 
                  href="/contact" 
                  className="block text-white/80 hover:text-light-teal transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2025 SmartFirm.io. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-white/60 hover:text-light-teal transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/60 hover:text-light-teal transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-white/60 hover:text-light-teal transition-colors">
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