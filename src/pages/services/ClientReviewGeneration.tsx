import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const ClientReviewGeneration = () => {
  const serviceData: ServicePageData = {
    id: "client-review-generation",
    title: "Automated Review Generation for CPAs | SmartFirm",
    slug: "client-review-generation", 
    metaDescription: "Automated review generation for CPAs that requests feedback at optimal times, makes leaving reviews effortless, and builds your online reputation systematically.",
    content: {},
    heroTitle: "Automated Review Generation For Cpas | SmartFirm",
    heroSubtitle: "Our automated review generation for CPAs identifies satisfied clients, sends perfectly-timed review requests, provides one-click review links, and monitors your reputation across Google, Yelp, and Facebook.",
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
      },
      {
        title: "Reputation Monitoring & Analytics",
        description: "Track and analyze your online reputation performance",
        details: [
          "Real-time review notifications",
          "Sentiment analysis tracking",
          "Competitive benchmarking",
          "Monthly reputation reports"
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