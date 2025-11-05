import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const AITransformationRoadmap = () => {
  const serviceData: ServicePageData = {
    id: "ai-transformation-roadmap",
    title: "AI Transformation Roadmap | SmartFirm",
    slug: "ai-transformation-roadmap",
    canonicalUrl: "https://smartfirm.io/services/ai-transformation-roadmap",
    content: {},
    heroTitle: "AI Transformation Roadmap",
    heroSubtitle: "Strategic AI implementation plan for accounting firms ready to transform their operations.",
    heroDescription: "Comprehensive AI transformation roadmap that identifies opportunities, prioritizes initiatives, and delivers measurable results.",
    benefits: [
      {
        title: "Strategic Assessment",
        description: "Deep analysis of your current processes and AI readiness",
        icon: "Target"
      },
      {
        title: "Custom Roadmap",
        description: "Tailored implementation plan aligned with your firm's goals",
        icon: "Map"
      },
      {
        title: "Priority Framework",
        description: "Clear prioritization of AI initiatives for maximum ROI",
        icon: "TrendingUp"
      },
      {
        title: "Implementation Support",
        description: "Guidance and support throughout your transformation journey",
        icon: "Users"
      }
    ],
    features: [
      {
        title: "Process Discovery",
        description: "Comprehensive analysis of your firm's operations",
        details: [
          "Current workflow assessment",
          "Pain point identification",
          "Opportunity mapping",
          "Technology stack review",
          "Team capability assessment"
        ]
      },
      {
        title: "AI Opportunity Analysis",
        description: "Identify high-impact AI use cases for your firm",
        details: [
          "Process automation opportunities",
          "Client service enhancements",
          "Internal efficiency improvements",
          "Revenue generation opportunities",
          "Risk mitigation strategies"
        ]
      },
      {
        title: "Custom Implementation Roadmap",
        description: "Phased plan for successful AI adoption",
        details: [
          "90-day quick wins",
          "6-month strategic initiatives",
          "12-month transformation goals",
          "Resource allocation plan",
          "Success metrics and KPIs"
        ]
      },
      {
        title: "Ongoing Support",
        description: "Partnership throughout your transformation",
        details: [
          "Monthly progress reviews",
          "Quarterly strategy adjustments",
          "Team training and enablement",
          "Technology vendor selection",
          "Change management support"
        ]
      }
    ],
    ctaTitle: "Start Your AI Transformation",
    ctaDescription: "Schedule a consultation to discover how AI can transform your accounting firm's operations and client service.",
    ctaButtonText: "Schedule Consultation",
    ctaButtonLink: "/get-started"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default AITransformationRoadmap;
