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
        title: "Stop Losing Leads to Slow Follow-Up",
        description: "Every hour you wait to respond to a lead reduces your conversion rate by 10%. Our marketing automation responds to every inquiry within minutes—via email, SMS, and voicemail—nurturing prospects through personalized sequences while you focus on client work. Firms using our system convert 40% more leads without adding staff.",
        icon: "Rocket"
      },
      {
        title: "Reclaim 10+ Hours Per Week",
        description: "Manual follow-up, appointment reminders, and client onboarding emails are eating your team's time. Our intelligent workflows handle lead nurturing, consultation scheduling, service reminders, and re-engagement campaigns automatically. You'll save 10-15 hours weekly that you can redirect to billable work or strategic growth.",
        icon: "Clock"
      },
      {
        title: "Scale Without Hiring",
        description: "You can't grow from $400K to $1M by manually managing every lead and client touchpoint. Our automation platform handles 10x the volume of inquiries and clients without increasing your workload. Handle 200+ active leads and 100+ clients with the same 4-person team you have today.",
        icon: "TrendingUp"
      },
      {
        title: "Get Clear ROI Reporting",
        description: "No more guessing what's working. Our dashboard shows exactly which campaigns generate leads, which sequences convert prospects, and what your cost-per-client is. You'll see pipeline stage metrics, conversion rates, and ROI tied directly to your utilization goals—in plain English, not marketing jargon.",
        icon: "BarChart"
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