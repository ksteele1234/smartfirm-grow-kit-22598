import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";
import SEO from "@/components/SEO";

const EmailMarketing = () => {
  const serviceData: ServicePageData = {
    id: "email-marketing",
    title: "Email Marketing for Accounting Firms | SmartFirm",
    slug: "email-marketing",
    metaDescription: "Email marketing for CPAs: automated newsletters, personalized campaigns, and strategic touchpoints that increase retention 25% and generate $20K-$50K in upsells.",
    canonicalUrl: "https://smartfirm.io/services/email-marketing-for-cpas/",
    content: {},
    heroTitle: "Email Marketing: Retain and Grow Your Accounting Firm's Client Base",
    heroSubtitle: "Keep clients engaged year-round, increase retention by 25%, and generate $20K-$50K in upsells through automated newsletters and personalized campaigns.",
    heroDescription: "Email marketing for CPAs delivers automated newsletters, tax reminders, and personalized campaigns that strengthen relationships, reduce churn, and create upsell opportunities.",
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
    faqs: [
      {
        question: "How often will you send emails to my clients?",
        answer: "We recommend 1-2 emails per month for general newsletters, plus automated emails triggered by specific events (tax deadline reminders, service completion follow-ups, appointment reminders). We'll tailor frequency to your preferences and client expectations."
      },
      {
        question: "What if clients unsubscribe or complain about too many emails?",
        answer: "We follow email marketing best practices: clear unsubscribe links, segmented lists (so clients only get relevant content), and frequency caps. Unsubscribe rates for our campaigns average 0.5-1% (industry average is 2-3%), meaning your content is well-received."
      },
      {
        question: "Can you segment my list by service type or client value?",
        answer: "Yes. We segment by service type (tax-only, advisory, full-service), engagement level (active, at-risk, dormant), and lifecycle stage (prospect, new client, long-term client). This ensures everyone gets personalized, relevant content."
      },
      {
        question: "Do I need to write the emails, or do you handle that?",
        answer: "We write everything. You provide high-level input (upcoming service changes, seasonal promotions, key messages), and we draft emails for your approval. Most firms spend 15-20 minutes per month reviewing and approving content."
      }
    ],
    ctaTitle: "Start Nurturing Client Relationships",
    ctaDescription: "Discover how strategic email marketing can strengthen client relationships and drive business growth.",
    ctaButtonText: "Get Started",
    ctaButtonLink: "/get-started/"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default EmailMarketing;