import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const SocialMediaManagement = () => {
  const serviceData: ServicePageData = {
    id: "social-media-management",
    title: "Social Media Management for CPAs",
    slug: "social-media-management",
    content: {},
    heroTitle: "Social Media Management for CPAs",
    heroSubtitle: "Establish thought leadership and build your brand across all major social platforms while staying compliant with professional standards.",
    heroDescription: "Our social media management for accounting firms helps you build authority, attract prospects, and nurture client relationships through strategic content and engagement.",
    benefits: [
      {
        title: "Professional Brand Building",
        description: "Establish thought leadership in your market area",
        icon: "Users"
      },
      {
        title: "Compliant Content",
        description: "All content meets professional accounting standards",
        icon: "Shield"
      },
      {
        title: "Lead Generation",
        description: "Convert social media followers into prospects",
        icon: "TrendingUp"
      },
      {
        title: "Client Engagement",
        description: "Strengthen relationships with existing clients",
        icon: "Heart"
      }
    ],
    features: [
      {
        title: "Content Creation & Scheduling",
        description: "Professional content that builds trust and authority",
        details: [
          "Educational posts about tax and accounting topics",
          "Industry news and updates",
          "Client success stories (with permission)",
          "Seasonal tax reminders and tips"
        ]
      },
      {
        title: "Multi-Platform Management",
        description: "Maintain consistent presence across key platforms",
        details: [
          "LinkedIn professional networking",
          "Facebook community engagement",
          "Twitter industry conversations",
          "YouTube educational content"
        ]
      },
      {
        title: "Engagement & Community Building",
        description: "Build relationships and generate leads through engagement",
        details: [
          "Response management and monitoring",
          "Community participation and networking",
          "Lead generation through social interactions",
          "Professional compliance monitoring"
        ]
      },
      {
        title: "Analytics & Performance Tracking",
        description: "Measure and optimize your social media ROI",
        details: [
          "Engagement metrics and audience insights",
          "Content performance analysis",
          "Lead tracking and attribution",
          "Monthly reporting and recommendations"
        ]
      }
    ],
    ctaTitle: "Build Your Professional Social Media Presence",
    ctaDescription: "Let's establish your firm as a trusted authority on social media while generating new business opportunities.",
    ctaButtonText: "Get Started",
    ctaButtonLink: "/get-started"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default SocialMediaManagement;