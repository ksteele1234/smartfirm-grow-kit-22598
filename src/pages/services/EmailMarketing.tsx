import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const EmailMarketing = () => {
  const serviceData: ServicePageData = {
    id: "email-marketing",
    title: "Email Marketing for CPAs",
    slug: "email-marketing",
    content: {},
    heroTitle: "AI-Powered Email Marketing for CPAs",
    heroSubtitle: "Nurture client relationships and stay top-of-mind with intelligent, predictive email marketing campaigns designed specifically for accounting practices.",
    heroDescription: "Our AI-driven email marketing for accounting firms helps you maintain strong client relationships, generate referrals, and identify upselling opportunities through automated personalization and data-driven communication strategies.",
    benefits: [
      {
        title: "Client Retention",
        description: "Keep clients engaged with regular valuable communication",
        icon: "Heart"
      },
      {
        title: "Referral Generation",
        description: "Systematic referral requests that generate new business",
        icon: "Users"
      },
      {
        title: "Service Upselling",
        description: "Identify and promote additional service opportunities",
        icon: "TrendingUp"
      },
      {
        title: "Professional Communication",
        description: "Maintain professional standards while staying personal",
        icon: "MessageCircle"
      }
    ],
    features: [
      {
        title: "Client Newsletter Campaigns",
        description: "Regular newsletters that provide value and maintain relationships",
        details: [
          "Monthly tax and business tips",
          "Regulatory updates and changes",
          "Seasonal reminders and deadlines",
          "Firm news and announcements"
        ]
      },
      {
        title: "Automated Email Sequences",
        description: "Triggered emails for key client lifecycle moments",
        details: [
          "New client onboarding sequences",
          "Tax season preparation reminders",
          "Year-end planning communications",
          "Referral request automation"
        ]
      },
      {
        title: "Segmentation & Personalization",
        description: "Targeted messaging based on client type and needs",
        details: [
          "Business vs. individual client segmentation",
          "Service-based content targeting",
          "Industry-specific communications",
          "Behavioral trigger campaigns"
        ]
      },
      {
        title: "Analytics & Optimization",
        description: "Track performance and continuously improve results",
        details: [
          "Open rate and click-through tracking",
          "A/B testing for subject lines and content",
          "Email deliverability optimization",
          "Conversion tracking and ROI reporting"
        ]
      }
    ],
    ctaTitle: "Start Nurturing Client Relationships",
    ctaDescription: "Discover how strategic email marketing can strengthen client relationships and drive business growth.",
    ctaButtonText: "Get Started",
    ctaButtonLink: "/get-started"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default EmailMarketing;