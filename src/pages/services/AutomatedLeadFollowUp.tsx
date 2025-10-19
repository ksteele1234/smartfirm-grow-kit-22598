import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const AutomatedLeadFollowUp = () => {
  const serviceData: ServicePageData = {
    id: "automated-lead-follow-up",
    title: "Automated Lead Follow-Up For CPAs | SmartFirm",
    slug: "automated-lead-follow-up",
    metaDescription: "Automated lead follow-up for CPAs that responds instantly, nurtures prospects, schedules consultations, and converts 40% more leads without manual effort.",
    canonicalUrl: "https://smartfirm.io/services/automated-lead-follow-up",
    content: {},
    heroTitle: "Automated Lead Follow Up For CPAs",
    heroSubtitle: "Our automated lead follow-up for CPAs sends instant responses to new inquiries, delivers personalized nurture sequences, schedules consultations automatically, and ensures no lead falls through the cracks.",
    heroDescription: "Our automated lead follow-up system ensures no prospect falls through the cracks while maintaining personal touch and professional communication.",
    benefits: [
      {
        title: "Never Lose Another Lead",
        description: "78% of prospects choose the first firm that responds. When a lead fills out your contact form at 7pm, our system responds instantly—via email and SMS—while your competitors wait until tomorrow. You'll capture leads that would have gone to faster-responding firms.",
        icon: "AlertCircle"
      },
      {
        title: "Convert 40% More Prospects",
        description: "Manual follow-up is inconsistent. You forget to follow up, get busy with client work, or don't know what to say. Our proven 7-touch sequence (email, SMS, voicemail) nurtures prospects through the decision process automatically. Firms using our system convert 40% more inquiries into booked consultations.",
        icon: "TrendingUp"
      },
      {
        title: "Free Up 8-12 Hours Per Week",
        description: "Following up with 10-20 leads per week manually takes 8-12 hours of your team's time. Our automation handles initial responses, nurture sequences, appointment scheduling, and proposal follow-ups—freeing your team to focus on serving clients and closing deals.",
        icon: "Clock"
      },
      {
        title: "Know Exactly Where Every Lead Stands",
        description: "No more 'Did we follow up with that lead from last week?' Our dashboard shows every lead's status, which emails they opened, which links they clicked, and when they're ready for a personal call. You'll know exactly when to step in and close the deal.",
        icon: "BarChart"
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
      },
      {
        title: "Performance Analytics",
        description: "Measure and optimize your follow-up effectiveness",
        details: [
          "Conversion rate tracking by sequence",
          "Response time and engagement metrics",
          "Pipeline velocity analysis",
          "ROI and attribution reporting"
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