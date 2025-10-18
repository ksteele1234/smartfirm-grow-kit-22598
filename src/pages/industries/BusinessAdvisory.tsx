import IndustryPageTemplate from "@/templates/IndustryPageTemplate";
import { IndustryPageData } from "@/types/cms";

const BusinessAdvisory = () => {
  const industryData: IndustryPageData = {
    id: "business-advisory",
    title: "Custom Marketing Agency for Business Advisors",
    slug: "business-advisory",
    metaDescription: "Partner with a custom marketing agency for business advisors positioning you as a strategic advisor, attracting growth-focused clients, and commanding fees.",
    content: {},
    heroTitle: "Custom Marketing Agency For Business Advisors | SmartFirm",
    heroSubtitle: "Our custom marketing agency for business advisors positions you as a strategic growth partner, attracts high-value entrepreneurial clients, and helps you command premium advisory fees.",
    industryOverview: "Business advisory services command premium rates but require establishing deep trust and demonstrating expertise. Our marketing strategies help you position yourself as a trusted advisor and attract clients who value strategic guidance over commodity services.",
    challenges: [
      {
        title: "Establishing Thought Leadership",
        description: "Need to demonstrate expertise and build trust before clients will engage",
        solution: "Content marketing and speaking opportunities that showcase your expertise"
      },
      {
        title: "Justifying Premium Pricing",
        description: "Clients must understand the ROI of strategic business advice",
        solution: "Case studies and testimonials that demonstrate measurable business outcomes"
      },
      {
        title: "Long Sales Cycles",
        description: "Advisory engagements often have extended decision-making processes",
        solution: "Nurturing campaigns that maintain engagement throughout the sales cycle"
      }
    ],
    services: [
      {
        title: "Thought Leadership Development",
        description: "Establish yourself as a recognized expert in business strategy",
        link: "/services/marketing-automation"
      },
      {
        title: "High-Value Client Attraction",
        description: "Target and attract businesses ready to invest in strategic guidance",
        link: "/solutions/lead-generation"
      },
      {
        title: "Content Marketing Strategy",
        description: "Educational content that demonstrates expertise and builds trust",
        link: "/services/email-marketing"
      },
      {
        title: "Speaking & Events",
        description: "Position yourself as an expert through speaking opportunities",
        link: "/services/social-media-management"
      }
    ],
    caseStudies: [
      {
        title: "Thought Leadership to $500K Practice",
        client: "Strategic Business Advisors",
        result: "Built advisory practice generating $500K annually through content marketing",
        link: "/success-stories"
      },
      {
        title: "Premium Advisory Positioning",
        client: "Executive Financial Consulting",
        result: "Positioned as premium advisor, average engagement $25K",
        link: "/success-stories"
      }
    ],
    ctaTitle: "Build Your Advisory Practice",
    ctaDescription: "Learn how to establish thought leadership and attract high-value advisory clients."
  };

  return <IndustryPageTemplate data={industryData} />;
};

export default BusinessAdvisory;