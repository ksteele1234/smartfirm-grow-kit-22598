import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const StrategyIntegration = () => {
  const serviceData: ServicePageData = {
    id: "strategy-integration",
    title: "Foundation Setup: Strategy & Integration for Accounting Firms",
    slug: "strategy-integration",
    content: {},
    heroTitle: "Foundation Setup: Strategy & Integration",
    heroSubtitle: "Strategic planning and seamless integration services that ensure your marketing infrastructure works together—not as a disconnected tech mess.",
    heroDescription: "Our foundation setup service provides a comprehensive deep dive into your firm's unique position, ideal clients, and competitive landscape, then builds everything to work together seamlessly.",
    benefits: [
      {
        title: "Strategic Discovery",
        description: "2-hour deep dive into your firm, ideal clients, and competitive landscape",
        icon: "Target"
      },
      {
        title: "Seamless Integration",
        description: "All systems connected and working together from day one",
        icon: "Link"
      },
      {
        title: "Custom Strategy",
        description: "Marketing plan tailored to your firm's specific goals and market",
        icon: "Map"
      },
      {
        title: "Guided Onboarding",
        description: "White-glove setup and training to ensure successful adoption",
        icon: "Users"
      }
    ],
    features: [
      {
        title: "Strategic Discovery Session",
        description: "Comprehensive analysis of your firm and market position",
        details: [
          "2-hour collaborative strategy session with your team",
          "Ideal client profile development and targeting",
          "Competitive landscape analysis and positioning",
          "Marketing goals and KPI definition",
          "Service offering and pricing strategy review"
        ]
      },
      {
        title: "Systems Integration & Setup",
        description: "Connect all your marketing tools and platforms seamlessly",
        details: [
          "Website and analytics integration",
          "CRM and email marketing platform setup",
          "Local SEO and Google Business Profile optimization",
          "Review generation and reputation management integration",
          "Calendar booking and lead capture forms",
          "Marketing automation workflow configuration"
        ]
      },
      {
        title: "Custom Marketing Roadmap",
        description: "90-day action plan designed for your firm's specific needs",
        details: [
          "Phased implementation timeline with clear milestones",
          "Content strategy and editorial calendar",
          "Lead generation and nurture campaign blueprints",
          "Client retention and referral program framework",
          "Performance tracking and reporting dashboards"
        ]
      },
      {
        title: "Onboarding & Training",
        description: "Ensure your team can effectively use all systems and processes",
        details: [
          "Team training sessions on all platforms and workflows",
          "Documentation and standard operating procedures",
          "Best practices and optimization recommendations",
          "Ongoing support during first 30 days",
          "Performance review and adjustment sessions"
        ]
      }
    ],
    ctaTitle: "Build Your Marketing Foundation Right",
    ctaDescription: "Let's start with a strategic discovery session and build a marketing infrastructure that actually works together.",
    ctaButtonText: "Schedule Discovery Session",
    ctaButtonLink: "/get-started"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default StrategyIntegration;
