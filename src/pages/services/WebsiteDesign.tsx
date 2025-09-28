import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const WebsiteDesign = () => {
  const serviceData: ServicePageData = {
    id: "website-design",
    title: "Website Design for Accounting Firms",
    slug: "website-design",
    content: {},
    heroTitle: "Website Design for Accounting Firms",
    heroSubtitle: "Convert more visitors into clients with high-performing websites designed specifically for accounting firms.",
    heroDescription: "Our website design service creates professional, conversion-optimized websites that establish credibility and generate leads for your accounting practice.",
    benefits: [
      {
        title: "Professional Credibility",
        description: "Build trust with a website that reflects your expertise",
        icon: "Shield"
      },
      {
        title: "Higher Conversions",
        description: "Turn website visitors into prospects and clients",
        icon: "TrendingUp"
      },
      {
        title: "Mobile Optimization",
        description: "Perfect experience on all devices and screen sizes",
        icon: "Smartphone"
      },
      {
        title: "SEO Foundation",
        description: "Built with search engine optimization in mind",
        icon: "Search"
      }
    ],
    features: [
      {
        title: "Conversion-Focused Design",
        description: "Every element designed to convert visitors into leads",
        details: [
          "Clear calls-to-action throughout the site",
          "Lead capture forms and contact optimization",
          "Trust signals and credibility indicators",
          "Service presentation and pricing clarity"
        ]
      },
      {
        title: "Professional Branding",
        description: "Establish your firm as a trusted authority",
        details: [
          "Professional color schemes and typography",
          "Client testimonials and case studies",
          "Team photos and bios",
          "Certifications and awards display"
        ]
      },
      {
        title: "Technical Excellence",
        description: "Fast, secure, and search engine optimized",
        details: [
          "Mobile-responsive design",
          "Fast loading speeds",
          "SSL security certificates",
          "Search engine optimization"
        ]
      }
    ],
    ctaTitle: "Get a Website That Converts",
    ctaDescription: "Let's design a professional website that establishes credibility and generates leads for your accounting firm.",
    ctaButtonText: "View Portfolio",
    ctaButtonLink: "/get-started"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default WebsiteDesign;