import IndustryPageTemplate from "@/templates/IndustryPageTemplate";
import { IndustryPageData } from "@/types/cms";
import { getFaqsForPath } from "@/data/faqContent";

const BusinessAdvisory = () => {
  const industryFaqs = getFaqsForPath("/industries/marketing-for-business-advisors");
  const industryData: IndustryPageData = {
    id: "business-advisory",
    title: "Marketing For Business Advisors That Commands Premium Fees | SmartFirm",
    slug: "marketing-for-business-advisors",
    metaDescription: "Marketing for business advisors positions you as a strategic growth partner, attracts high-value entrepreneurial clients, and helps you command premium advisory fees through thought leadership.",
    canonicalUrl: "https://smartfirm.io/industries/marketing-for-business-advisors",
    content: {},
    heroTitle: "Marketing For Business Advisors",
    heroSubtitle: "Marketing for business advisors positions you as a strategic growth partner and helps you command premium advisory fees: attract high-value entrepreneurial clients and establish thought leadership when business advisors struggle to justify premium pricing for strategic advice.",
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
    ctaDescription: "Learn how to establish thought leadership and attract high-value advisory clients.",
    faqs: industryFaqs
  };

  return <IndustryPageTemplate data={industryData} />;
};

export default BusinessAdvisory;
