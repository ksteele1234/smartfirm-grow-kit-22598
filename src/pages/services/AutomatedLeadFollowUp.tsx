import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const AutomatedLeadFollowUp = () => {
  const serviceData: ServicePageData = {
    id: "automated-lead-follow-up",
    title: "Automated Lead Follow-Up for Accounting Firms",
    slug: "automated-lead-follow-up",
    content: {},
    heroTitle: "Automated Lead Follow-Up for Accounting Firms",
    heroSubtitle: "Never lose a prospect again with intelligent follow-up sequences that convert leads into clients while you focus on serving existing customers.",
    heroDescription: "Our automated lead follow-up system ensures no prospect falls through the cracks while maintaining personal touch and professional communication.",
    benefits: [
      {
        title: "24/7 Lead Nurturing",
        description: "Automated sequences work around the clock to nurture prospects",
        icon: "Clock"
      },
      {
        title: "Increased Conversion Rates",
        description: "Convert 40% more leads with timely, relevant follow-up",
        icon: "TrendingUp"
      },
      {
        title: "Time Savings",
        description: "Save 15+ hours per week on manual follow-up activities",
        icon: "Zap"
      },
      {
        title: "Personalized Messaging",
        description: "Tailored sequences based on lead source and interests",
        icon: "Users"
      }
    ],
    features: [
      {
        title: "Multi-Channel Follow-Up",
        description: "Email, SMS, and phone call sequences for maximum reach",
        details: [
          "Email automation with personalized content",
          "SMS reminders for urgent follow-ups", 
          "Automated phone call scheduling",
          "Social media engagement tracking"
        ]
      },
      {
        title: "Lead Scoring & Qualification",
        description: "Automatically identify and prioritize hot prospects",
        details: [
          "Behavioral scoring based on website activity",
          "Engagement tracking across all touchpoints",
          "Lead qualification questionnaires",
          "Priority alerts for sales-ready leads"
        ]
      },
      {
        title: "CRM Integration",
        description: "Seamless integration with popular CRM systems",
        details: [
          "Automatic lead data synchronization",
          "Activity logging and tracking",
          "Pipeline management automation",
          "Reporting and analytics integration"
        ]
      }
    ],
    ctaTitle: "Ready to Automate Your Lead Follow-Up?",
    ctaDescription: "Let's set up automated sequences that convert more prospects into clients for your accounting firm.",
    ctaButtonText: "Get Started",
    ctaButtonLink: "/get-started"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default AutomatedLeadFollowUp;