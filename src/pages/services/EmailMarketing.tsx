import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const EmailMarketing = () => {
  const serviceData: ServicePageData = {
    id: "email-marketing",
    title: "Professional Email Marketing for CPAs | SmartFirm",
    slug: "email-marketing",
    metaDescription: "Email marketing for CPAs that nurtures leads, educates clients, promotes services, and drives engagement with automated campaigns and personalized messaging.",
    canonicalUrl: "https://smartfirm.io/services/email-marketing",
    content: {},
    heroTitle: "Email Marketing For CPAs",
    heroSubtitle: "Our email marketing for CPAs delivers automated nurture sequences, seasonal tax reminders, service announcements, educational newsletters, and re-engagement campaigns that keep your firm top-of-mind.",
    heroDescription: "Our AI-driven email marketing for accounting firms helps you maintain strong client relationships, generate referrals, and identify upselling opportunities through automated personalization and data-driven communication strategies.",
    benefits: [
      {
        title: "Keep Clients Engaged Year-Round",
        description: "Clients who only hear from you during tax season are retention risks. Our strategic email campaigns—monthly newsletters, tax deadline reminders, service announcements—keep you top-of-mind year-round. Firms using our email programs see 15-25% higher client retention rates.",
        icon: "Mail"
      },
      {
        title: "Create Upsell Opportunities on Autopilot",
        description: "Your clients need advisory, payroll, and CFO services—but they don't know you offer them. Our segmented email campaigns educate clients on your full service menu, creating upsell opportunities without awkward sales conversations. Firms generate $20K-$50K in additional revenue annually from email-driven upsells.",
        icon: "DollarSign"
      },
      {
        title: "Reduce No-Shows and Last-Minute Requests",
        description: "Appointment no-shows and last-minute document requests disrupt your workflow. Our automated reminder sequences reduce no-shows by 60% and train clients to submit documents on time. You'll spend less time chasing clients and more time on billable work.",
        icon: "Clock"
      },
      {
        title: "Personalized at Scale",
        description: "Generic 'Dear Client' emails get ignored. Our platform segments your list by service type, engagement level, and lifecycle stage—sending personalized content that resonates. Open rates average 35-45% (vs. industry average of 21%), meaning your messages actually get read.",
        icon: "Target"
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