import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";
import SEO from "@/components/SEO";

const StrategyIntegration = () => {
  const serviceData: ServicePageData = {
    id: "marketing-strategy-integration-for-accounting-firms",
    title: "Strategy & Integration for Accounting Firms | SmartFirm.io",
    slug: "marketing-strategy-integration-for-accounting-firms",
    metaDescription: "Strategy and integration for accounting firms — align your marketing tools, build custom roadmaps, and deliver seamless systems onboarding.",
    canonicalUrl: "https://smartfirm.io/services/marketing-strategy-integration-for-accounting-firms/",
    content: {},
    heroTitle: "Strategy & Integration for Accounting Firms",
    heroSubtitle: "Connect your marketing infrastructure with custom roadmaps, seamless integrations, and white-glove onboarding. Deliver measurable results within 30 days.",
    heroDescription: "Marketing strategy and integration for accounting firms aligns your tools, builds custom roadmaps, and delivers seamless onboarding that produces results.",
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
    ctaButtonLink: "/get-started-accounting-firm-automation/",
    relatedBlogTags: ['marketing-automation', 'lead-generation', 'roi', 'scalability']
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default StrategyIntegration;
