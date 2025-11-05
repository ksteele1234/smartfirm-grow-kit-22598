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
    heroSubtitle: "Stop Guessing Where AI Fits. Get a Clear 12-Month Strategy.",
    heroDescription: "A comprehensive 2-4 week engagement that maps your business processes, identifies high-impact AI opportunities, and delivers a prioritized implementation plan with clear ROI projections. This isn't theory. It's a practical roadmap built for your business.",
    benefits: [
      {
        title: "Clarity",
        description: "Know exactly where AI creates value in your business",
        icon: "Target"
      },
      {
        title: "Confidence",
        description: "Move forward with validated, feasible solutions",
        icon: "CheckCircle"
      },
      {
        title: "Competitive Advantage",
        description: "Implement strategic AI before your competition",
        icon: "TrendingUp"
      },
      {
        title: "Partnership",
        description: "We become your ongoing transformation partner, not just a vendor",
        icon: "Users"
      }
    ],
    features: [
      {
        title: "WEEK 1: Discovery",
        description: "Interview key stakeholders and map core business processes",
        details: [
          "Identify bottlenecks and inefficiencies",
          "Map current workflows and systems",
          "Document pain points and opportunities",
          "Assess team capabilities and readiness",
          "Review existing technology stack"
        ]
      },
      {
        title: "WEEK 2: Opportunity Analysis",
        description: "Create a database of AI solutions tailored to your operations",
        details: [
          "Filter solutions by technical feasibility",
          "Evaluate business impact potential",
          "Identify high-ROI initiatives",
          "Match solutions to specific processes",
          "Prioritize by difficulty and value"
        ]
      },
      {
        title: "WEEK 3: Validation",
        description: "Work with your team to validate solutions",
        details: [
          "Ensure recommendations align with reality",
          "Get stakeholder buy-in",
          "Refine implementation approach",
          "Address concerns and questions",
          "Finalize priority initiatives"
        ]
      },
      {
        title: "WEEK 4: Strategic Roadmap Delivery",
        description: "Receive your complete 12-month implementation plan",
        details: [
          "Detailed Process Maps — Visual documentation of your current workflows",
          "Opportunity Matrix — High-ROI initiatives ranked by impact and difficulty",
          "12-Month Roadmap — Phased implementation plan with timelines and resources",
          "ROI Projections — Clear cost/benefit analysis for each initiative",
          "Executive Presentation — Slide deck ready to share with leadership"
        ]
      }
    ],
    faqs: [
      {
        question: "Investment",
        answer: "Starting at $7,500. Small business engagements available. Enterprise pricing upon consultation."
      }
    ],
    ctaTitle: "Ready to Stop Guessing and Start Implementing?",
    ctaDescription: "Your competitors are implementing AI. Your team is overwhelmed by tools and possibilities. Everyone's asking \"where do we start?\" — but no one has a clear answer. You don't need another tool. You need a strategic plan.",
    ctaButtonText: "Book a Free Call",
    ctaButtonLink: "/get-started"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default AITransformationRoadmap;
