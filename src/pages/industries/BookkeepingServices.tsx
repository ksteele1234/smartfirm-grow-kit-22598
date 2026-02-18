import IndustryPageTemplate from "@/templates/IndustryPageTemplate";
import { IndustryPageData } from "@/types/cms";
import { getFaqsForPath } from "@/data/faqContent";

const BookkeepingServices = () => {
  const industryFaqs = getFaqsForPath("/industries/marketing-for-bookkeeping-firms");
  const industryData: IndustryPageData = {
    id: "bookkeeping-services",
    title: "Marketing for Bookkeeping Firms | SmartFirm.io",
    slug: "marketing-for-bookkeeping-firms",
    metaDescription: "Marketing for bookkeeping firms — differentiate from commodity providers, attract ideal small business clients, and command premium fees.",
    canonicalUrl: "https://smartfirm.io/industries/marketing-for-bookkeeping-firms/",
    content: {},
    heroTitle: "Marketing for Bookkeeping Firms That Commands Premium Fees",
    heroSubtitle: "Marketing for bookkeeping firms differentiates your practice from commodity providers and positions you as a strategic financial partner.",
    industryOverview: "Bookkeeping services offer the opportunity for predictable monthly revenue through ongoing client relationships. Our marketing strategies help you attract the right small business clients and position your services as essential business infrastructure.",
    challenges: [
      {
        title: "Price Competition with Software",
        description: "Competing against DIY bookkeeping software and low-cost providers",
        solution: "Position the value of professional expertise, accuracy, and business insights"
      },
      {
        title: "Client Education on Value",
        description: "Small business owners often don't understand the full value of professional bookkeeping",
        solution: "Content marketing that educates prospects on the true cost of bookkeeping mistakes"
      },
      {
        title: "Scaling Service Delivery",
        description: "Balancing growth with maintaining quality and personal service",
        solution: "Systems and processes that allow growth while maintaining service standards"
      }
    ],
    services: [
      {
        title: "Small Business Lead Generation",
        description: "Target and attract growing small businesses that need bookkeeping services",
        link: "/solutions/get-more-referrals-for-cpa-firm-without-asking"
      },
      {
        title: "Value-Based Positioning",
        description: "Position your expertise above price competition",
        link: "/services/marketing-automation-for-accounting-firms"
      },
      {
        title: "Recurring Revenue Optimization",
        description: "Maximize client lifetime value and reduce churn",
        link: "/solutions/stop-losing-clients-to-tech-savvy-cpas"
      },
      {
        title: "Local Market Domination",
        description: "Become the go-to bookkeeper in your local market",
        link: "/services/seo-for-accounting-firms"
      }
    ],
    ctaTitle: "Build Your Bookkeeping Empire",
    ctaDescription: "Discover how to attract quality small business clients and build predictable recurring revenue.",
    faqs: industryFaqs
  };

  return <IndustryPageTemplate data={industryData} />;
};

export default BookkeepingServices;