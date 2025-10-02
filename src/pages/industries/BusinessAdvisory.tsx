import IndustryPageTemplate from "@/templates/IndustryPageTemplate";
import { IndustryPageData } from "@/types/cms";

const BusinessAdvisory = () => {
  const industryData: IndustryPageData = {
    id: "business-advisory",
    title: "Marketing for Business Advisory Services",
    slug: "business-advisory",
    content: {},
    heroTitle: "Marketing Solutions for Business Advisory Services",
    heroSubtitle: "Marketing solutions for business advisory services that establish thought leadership and attract high-value clients seeking strategic business guidance and financial consulting expertise.",
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
        link: "/services/thought-leadership"
      },
      {
        title: "High-Value Client Attraction",
        description: "Target and attract businesses ready to invest in strategic guidance",
        link: "/solutions/lead-generation"
      },
      {
        title: "Content Marketing Strategy",
        description: "Educational content that demonstrates expertise and builds trust",
        link: "/services/content-marketing"
      },
      {
        title: "Speaking & Events",
        description: "Position yourself as an expert through speaking opportunities",
        link: "/services/speaking-events"
      }
    ],
    caseStudies: [
      {
        title: "Thought Leadership to $500K Practice",
        client: "Strategic Business Advisors",
        result: "Built advisory practice generating $500K annually through content marketing",
        link: "/success-stories/strategic-advisors"
      },
      {
        title: "Premium Advisory Positioning",
        client: "Executive Financial Consulting",
        result: "Positioned as premium advisor, average engagement $25K",
        link: "/success-stories/executive-consulting"
      }
    ],
    ctaTitle: "Build Your Advisory Practice",
    ctaDescription: "Learn how to establish thought leadership and attract high-value advisory clients."
  };

  return <IndustryPageTemplate data={industryData} />;
};

export default BusinessAdvisory;