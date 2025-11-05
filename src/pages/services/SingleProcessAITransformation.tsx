import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const SingleProcessAITransformation = () => {
  const serviceData: ServicePageData = {
    id: "single-process-ai-transformation",
    title: "Single Process AI Transformation | SmartFirm",
    slug: "single-process-ai-transformation",
    canonicalUrl: "https://smartfirm.io/services/single-process-ai-transformation",
    content: {},
    heroTitle: "The Single Process AI Transformation",
    heroSubtitle: "Focus on one critical process and transform it completely with AI.",
    heroDescription: "Strategic AI implementation for a single high-impact process, delivering immediate results and building momentum for broader transformation.",
    benefits: [
      {
        title: "Focused Approach",
        description: "Concentrate resources on one high-impact process",
        icon: "Target"
      },
      {
        title: "Quick Results",
        description: "See measurable improvements within 30-60 days",
        icon: "Zap"
      },
      {
        title: "Proof of Concept",
        description: "Build confidence and momentum for wider AI adoption",
        icon: "CheckCircle"
      },
      {
        title: "Lower Risk",
        description: "Test AI capabilities with minimal disruption",
        icon: "Shield"
      }
    ],
    features: [
      {
        title: "Process Selection",
        description: "Identify the right process for AI transformation",
        details: [
          "Process assessment and scoring",
          "ROI potential analysis",
          "Complexity evaluation",
          "Team readiness review",
          "Priority recommendation"
        ]
      },
      {
        title: "Solution Design",
        description: "Custom AI solution for your selected process",
        details: [
          "Current state documentation",
          "Future state design",
          "Technology selection",
          "Integration planning",
          "Success criteria definition"
        ]
      },
      {
        title: "Implementation",
        description: "Deploy and optimize your AI solution",
        details: [
          "Tool configuration and setup",
          "Workflow automation",
          "Team training",
          "Testing and refinement",
          "Go-live support"
        ]
      },
      {
        title: "Optimization & Scale",
        description: "Measure, refine, and expand your success",
        details: [
          "Performance monitoring",
          "Continuous improvement",
          "User feedback integration",
          "Scale planning",
          "Next process identification"
        ]
      }
    ],
    ctaTitle: "Transform One Process, Prove the Value",
    ctaDescription: "Start with a focused AI transformation of your most critical process and build momentum for firm-wide innovation.",
    ctaButtonText: "Schedule Process Assessment",
    ctaButtonLink: "/get-started"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default SingleProcessAITransformation;
