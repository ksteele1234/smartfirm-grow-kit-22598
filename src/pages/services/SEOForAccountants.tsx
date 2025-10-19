import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const SEOForAccountants = () => {
  const serviceData: ServicePageData = {
    id: "seo-for-accountants",
    title: "Expert SEO Services for Accounting Firms | SmartFirm",
    slug: "seo-for-accountants",
    metaDescription: "Rank higher with SEO for accounting firms targeting 'CPA near me,' 'small business bookkeeping,' 'tax preparation' through local optimization and content.",
    canonicalUrl: "https://smartfirm.io/services/seo-for-accountants",
    content: {},
    heroTitle: "SEO For Accounting Firms",
    heroSubtitle: "Our SEO for accounting firms targets high-intent local searches like \"CPA near me\" and \"small business accountant\" through technical optimization, content creation, and local citation building.",
    heroDescription: "Our AI-powered SEO for accounting firms uses predictive analytics to help you rank higher on Google, attract qualified prospects through data-driven optimization, and grow your practice with intelligent organic search strategies.",
    benefits: [
      {
        title: "Higher Google Rankings",
        description: "Achieve top 3 rankings for high-value accounting keywords",
        icon: "TrendingUp"
      },
      {
        title: "Local Market Dominance",
        description: "Dominate local search results in your service area",
        icon: "MapPin"
      },
      {
        title: "Qualified Traffic",
        description: "Attract prospects actively searching for accounting services",
        icon: "Target"
      },
      {
        title: "Long-Term Growth",
        description: "Build sustainable organic traffic that grows over time",
        icon: "BarChart"
      }
    ],
    features: [
      {
        title: "Local SEO Optimization",
        description: "Dominate local search results for accounting services",
        details: [
          "Google Business Profile optimization",
          "Local citation building and management",
          "Review generation and management",
          "Local content creation and optimization"
        ]
      },
      {
        title: "Technical SEO",
        description: "Ensure your website meets all technical requirements",
        details: [
          "Site speed optimization",
          "Mobile responsiveness improvements",
          "Schema markup implementation",
          "URL structure optimization"
        ]
      },
      {
        title: "Content Strategy",
        description: "Create valuable content that attracts and converts",
        details: [
          "Keyword-optimized blog content",
          "Service page optimization",
          "FAQ content creation",
          "Industry-specific resources"
        ]
      },
      {
        title: "Link Building & Authority",
        description: "Build domain authority through quality backlinks",
        details: [
          "Strategic link acquisition campaigns",
          "Industry directory submissions",
          "Guest posting opportunities",
          "Digital PR and outreach"
        ]
      }
    ],
    ctaTitle: "Ready to Dominate Local Search Results?",
    ctaDescription: "Let's optimize your website to attract more qualified prospects from Google search.",
    ctaButtonText: "Talk to Us",
    ctaButtonLink: "/get-started"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default SEOForAccountants;