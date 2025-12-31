import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const SocialMediaManagement = () => {
  const serviceData: ServicePageData = {
    id: "social-media-management",
    title: "Social Media for Accountants | SmartFirm",
    slug: "social-media-management",
    metaDescription: "Social media management for accountants that builds authority and attracts clients. Consistent, professional content that positions you as a trusted advisor without the time drain.",
    canonicalUrl: "https://smartfirm.io/services/social-media-management",
    content: {},
    heroTitle: "Social Media Management for CPAs",
    heroSubtitle: "Build thought leadership with 12-16 compliant posts monthly, drive 30-50% more referrals, and stay top-of-mind. Fully compliant, zero risk.",
    heroDescription: "Social media management for CPAs delivers 12-16 compliant posts monthly across LinkedIn, Facebook, and Twitter that build authority and drive referrals without time drain.",
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
    faqs: [
      {
        question: "Which platforms do you manage?",
        answer: "We focus on LinkedIn (primary for B2B accounting), Facebook (for local visibility), and optionally Twitter/X and Instagram. LinkedIn drives the most engagement and referrals for accounting firms, so we prioritize it."
      },
      {
        question: "How often will you post, and what type of content?",
        answer: "We post 12-16 times per month across platforms: tax tips, industry news commentary, client success stories (anonymized), service spotlights, and thought leadership. All content is pre-approved by you and compliant with AICPA guidelines."
      },
      {
        question: "Do I need to provide content ideas, or do you create everything?",
        answer: "We create everything. Our team follows accounting industry news, tax law changes, and best practices to generate timely, relevant content. You review and approve monthly content calendars—no brainstorming or writing required."
      },
      {
        question: "Will you respond to comments and messages?",
        answer: "We monitor and respond to comments on posts (thanking people for engagement, answering general questions). For direct messages or inquiries, we notify you immediately so you can respond personally. We never impersonate you in private conversations."
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