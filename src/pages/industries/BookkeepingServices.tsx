import IndustryPageTemplate from "@/templates/IndustryPageTemplate";
import { IndustryPageData } from "@/types/cms";
import { getFaqsForPath } from "@/data/faqContent";

const BookkeepingServices = () => {
  const industryFaqs = getFaqsForPath("/industries/marketing-for-bookkeeping-firms");
  const industryData: IndustryPageData = {
    id: "bookkeeping-services",
    title: "Marketing For Bookkeeping Firms That Commands Premium Fees | SmartFirm",
    slug: "marketing-for-bookkeeping-firms", 
    metaDescription: "Marketing for bookkeeping firms differentiates your practice from commodity providers, attracts ideal small business clients, and positions you as a strategic financial partner commanding premium fees.",
    canonicalUrl: "https://smartfirm.io/industries/marketing-for-bookkeeping-firms",
    content: {},
    heroTitle: "Marketing For Bookkeeping Firms",
    heroSubtitle: "Marketing for bookkeeping firms differentiates your practice from commodity providers and positions you as a strategic financial partner: attract ideal small business clients and command premium fees when bookkeepers lose clients to low-cost software and struggle to justify professional rates.",
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
        link: "/solutions/lead-generation"
      },
      {
        title: "Value-Based Positioning",
        description: "Position your expertise above price competition",
        link: "/services/marketing-automation"
      },
      {
        title: "Recurring Revenue Optimization", 
        description: "Maximize client lifetime value and reduce churn",
        link: "/solutions/retention-strategies"
      },
      {
        title: "Local Market Domination",
        description: "Become the go-to bookkeeper in your local market",
        link: "/services/seo-for-accountants"
      }
    ],
    caseStudies: [
      {
        title: "200% Monthly Recurring Revenue Growth",
        client: "QuickBooks Certified Bookkeeper",
        result: "Built $25K MRR through systematic client acquisition",
        link: "/success-stories"
      },
      {
        title: "Premium Pricing Success",
        client: "Business Bookkeeping Solutions",
        result: "Increased rates 60% while improving client retention",
        link: "/success-stories"
      }
    ],
    ctaTitle: "Build Your Bookkeeping Empire",
    ctaDescription: "Discover how to attract quality small business clients and build predictable recurring revenue.",
    faqs: industryFaqs
  };

  return <IndustryPageTemplate data={industryData} />;
};

export default BookkeepingServices;
