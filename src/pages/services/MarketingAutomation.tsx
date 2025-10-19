import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const MarketingAutomation = () => {
  const serviceData: ServicePageData = {
    id: "marketing-automation",
    title: "Marketing Automation For Accounting Firms | SmartFirm",
    slug: "marketing-automation",
    metaDescription: "Unlock 20+ hours weekly with marketing automation for accounting firms, boost ROI by 50%, and streamline client acquisition effortlessly.",
    canonicalUrl: "https://smartfirm.io/services/marketing-automation",
    content: {},
    heroTitle: "Marketing Automation For Accounting Firms",
    heroSubtitle: "Our marketing automation for accounting firms creates intelligent workflows that nurture new leads, schedule consultations, onboard clients, send service reminders, and reactivate dormant relationships.",
    heroDescription: "Our marketing automation platform integrates seamlessly with your existing systems to deliver personalized experiences at scale while you focus on serving clients.",
    benefits: [
      {
        title: "Automated Lead Nurturing",
        description: "Convert prospects into clients with intelligent email sequences and timely follow-ups",
        icon: "Zap"
      },
      {
        title: "Client Engagement",
        description: "Keep existing clients informed and engaged with automated communications",
        icon: "Users"
      },
      {
        title: "Time Savings",
        description: "Reduce manual marketing tasks by 80% with intelligent automation",
        icon: "Clock"
      },
      {
        title: "Scalable Growth",
        description: "Handle more leads and clients without increasing your workload",
        icon: "TrendingUp"
      }
    ],
    features: [
      {
        title: "Lead Generation & Follow-up",
        description: "Capture and nurture leads automatically with intelligent workflows",
        details: [
          "Automated lead capture from multiple sources",
          "Intelligent follow-up sequences via email and SMS",
          "Lead scoring and qualification automation",
          "Integration with your CRM and practice management systems"
        ]
      },
      {
        title: "Website & SEO Optimization",
        description: "Optimize your online presence for maximum visibility and conversions",
        details: [
          "SEO-optimized website design and content",
          "Local search optimization and Google My Business management",
          "Conversion rate optimization for higher lead generation",
          "Performance tracking and analytics reporting"
        ]
      },
      {
        title: "Review & Reputation Management",
        description: "Build a stellar online reputation with automated review generation",
        details: [
          "Automated review request campaigns",
          "Reputation monitoring across multiple platforms",
          "Response management for online reviews",
          "Review showcase integration on your website"
        ]
      },
      {
        title: "Analytics & Reporting",
        description: "Know what works with clear attribution and ROI insights",
        details: [
          "Campaign performance dashboards",
          "Conversion tracking across forms and calls",
          "A/B testing and optimization insights",
          "ROI and pipeline impact reporting"
        ]
      }
    ],
    ctaTitle: "Ready to Automate Your Marketing?",
    ctaDescription: "Let's implement a marketing automation system that grows your firm while you focus on serving clients.",
    ctaButtonText: "Get Started",
    ctaButtonLink: "/get-started"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default MarketingAutomation;