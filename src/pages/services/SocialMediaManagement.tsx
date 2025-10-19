import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const SocialMediaManagement = () => {
  const serviceData: ServicePageData = {
    id: "social-media-management",
    title: "Social Media Management for CPAs | SmartFirm",
    slug: "social-media-management",
    metaDescription: "Social media management for CPAs that builds authority, attracts ideal clients, and stays compliant with professional standards across LinkedIn, Facebook, and Twitter.",
    canonicalUrl: "https://smartfirm.io/services/social-media-management",
    content: {},
    heroTitle: "Social Media Management For CPAs",
    heroSubtitle: "Our social media management for CPAs creates compliant, professional content that showcases your expertise, engages your target audience, and drives qualified leads without consuming your time.",
    heroDescription: "Our social media management for accounting firms helps you build authority, attract prospects, and nurture client relationships through strategic content and engagement.",
    benefits: [
      {
        title: "Establish Thought Leadership Without the Time Drain",
        description: "You know you should be posting on LinkedIn, but creating content takes hours you don't have. We create and post 12-16 pieces of compliant, educational content per month—positioning you as the expert while you focus on client work. Your network sees consistent activity without you lifting a finger.",
        icon: "GraduationCap"
      },
      {
        title: "Stay Top-of-Mind for Referrals",
        description: "Out of sight = out of mind. When your network sees you sharing tax tips, industry insights, and client success stories regularly, you're the first CPA they think of when someone asks for a referral. Firms with active social presence report 30-50% more referral inquiries than those who post sporadically.",
        icon: "Handshake"
      },
      {
        title: "Attract Advisory-Level Clients",
        description: "Compliance work attracts price shoppers. Advisory work attracts growth-focused clients who pay premium fees. Our content strategy showcases your strategic thinking—CFO services, tax planning, business advisory—attracting the $10K-$50K engagements that move you from $400K to $1M.",
        icon: "Briefcase"
      },
      {
        title: "Fully Compliant, Zero Risk",
        description: "You can't afford compliance violations from social media mistakes. All our content is pre-approved, follows AICPA guidelines, and avoids regulatory red flags. We handle content creation, scheduling, and engagement monitoring—you review and approve before anything goes live.",
        icon: "CheckCircle"
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