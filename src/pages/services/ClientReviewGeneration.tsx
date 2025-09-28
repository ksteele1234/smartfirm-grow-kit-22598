import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const ClientReviewGeneration = () => {
  const serviceData: ServicePageData = {
    id: "client-review-generation",
    title: "Client Review Generation for CPAs",
    slug: "client-review-generation", 
    content: {},
    heroTitle: "Client Review Generation for CPAs",
    heroSubtitle: "Build trust and credibility with automated systems that generate authentic 5-star reviews from satisfied clients, boosting your online reputation and attracting new business.",
    heroDescription: "Our review generation system helps accounting firms build a strong online reputation through systematic collection and management of client testimonials.",
    benefits: [
      {
        title: "Enhanced Online Reputation",
        description: "Build a strong online presence with consistent positive reviews",
        icon: "Star"
      },
      {
        title: "Increased Trust & Credibility",
        description: "Prospects trust firms with strong review profiles 3x more",
        icon: "Shield"
      },
      {
        title: "Automated Review Requests",
        description: "Systematic approach ensures no satisfied client is missed",
        icon: "Zap"
      },
      {
        title: "Review Response Management",
        description: "Professional responses to all reviews maintain your reputation",
        icon: "MessageCircle"
      }
    ],
    features: [
      {
        title: "Smart Review Request Timing",
        description: "Request reviews at optimal moments for maximum response",
        details: [
          "Post-project completion automation",
          "Client satisfaction trigger points",
          "Seasonal timing optimization",
          "Follow-up sequence management"
        ]
      },
      {
        title: "Multi-Platform Management",
        description: "Generate reviews across all major platforms",
        details: [
          "Google Business Profile optimization",
          "Facebook and LinkedIn reviews",
          "Industry-specific platforms",
          "Unified review monitoring dashboard"
        ]
      },
      {
        title: "Review Response Automation",
        description: "Professional responses to maintain your reputation",
        details: [
          "Template responses for common situations",
          "Escalation alerts for negative reviews",
          "Thank you message automation",
          "Review analysis and insights"
        ]
      }
    ],
    ctaTitle: "Start Building Your Review Reputation",
    ctaDescription: "Discover how our automated review generation system can build trust and attract more clients to your accounting practice.",
    ctaButtonText: "Get Started",
    ctaButtonLink: "/get-started"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default ClientReviewGeneration;