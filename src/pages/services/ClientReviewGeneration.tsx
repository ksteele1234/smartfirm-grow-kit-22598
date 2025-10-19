import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const ClientReviewGeneration = () => {
  const serviceData: ServicePageData = {
    id: "client-review-generation",
    title: "Automated Review Generation for CPAs | SmartFirm",
    slug: "client-review-generation", 
    metaDescription: "Automated review generation for CPAs that requests feedback at optimal times, makes leaving reviews effortless, and builds your online reputation systematically.",
    canonicalUrl: "https://smartfirm.io/services/client-review-generation",
    content: {},
    heroTitle: "Automated Review Generation For CPAs",
    heroSubtitle: "Our automated review generation for CPAs identifies satisfied clients, sends perfectly-timed review requests, provides one-click review links, and monitors your reputation across Google, Yelp, and Facebook.",
    heroDescription: "Our review generation system helps accounting firms build a strong online reputation through systematic collection and management of client testimonials.",
    benefits: [
      {
        title: "Triple Your 5-Star Reviews in 90 Days",
        description: "Prospects trust online reviews more than your website copy. Our automated system requests Google reviews from satisfied clients at the perfect moment (right after service completion), generating 3-5x more reviews than manual requests. Firms go from 8 reviews to 30+ reviews in 90 days.",
        icon: "Star"
      },
      {
        title: "Win More Clients Without Spending More",
        description: "A firm with 50+ five-star reviews converts 2-3x more website visitors than a firm with 10 reviews. More reviews = more trust = more clients—without increasing your ad spend. Firms report 30-50% higher conversion rates after building their review presence.",
        icon: "Briefcase"
      },
      {
        title: "Protect Your Reputation 24/7",
        description: "Negative reviews kill your pipeline. Our system monitors Google, Yelp, and Facebook for new reviews, alerts you immediately, and provides response templates for addressing concerns professionally. You'll catch and resolve issues before they damage your reputation.",
        icon: "Shield"
      },
      {
        title: "Set It and Forget It",
        description: "Manually asking for reviews is awkward and inconsistent. Our system automatically sends review requests after tax filing, advisory meetings, or project completion—no manual work required. You'll build a 5-star reputation on autopilot while focusing on client work.",
        icon: "Zap"
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