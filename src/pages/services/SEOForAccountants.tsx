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
        title: "Dominate 'CPA Near Me' Searches",
        description: "When prospects search 'CPA near me' or 'small business accountant,' you're nowhere to be found. Our local SEO strategies get you into the top 3 Google results and Google Maps pack within 90-120 days. Firms typically see 50-100+ qualified organic leads per year from local search alone.",
        icon: "MapPin"
      },
      {
        title: "Attract High-Intent Prospects 24/7",
        description: "Paid ads stop working the moment you stop paying. SEO builds a sustainable lead generation engine that attracts prospects actively searching for your services—year-round, without ongoing ad spend. You'll get 5-10 qualified inquiries per month from organic search within 6 months.",
        icon: "Target"
      },
      {
        title: "Stop Competing on Price",
        description: "When prospects find you through referrals or ads, they shop around. When they find you ranking #1 for 'tax planning CPA,' you're the authority—and price becomes less of an objection. SEO-generated leads close 30-40% faster and at 20% higher fees than cold outreach or paid ad leads.",
        icon: "DollarSign"
      },
      {
        title: "Long-Term ROI That Compounds",
        description: "Unlike ads that require constant spend, SEO is an asset that appreciates. The content and rankings you build this year continue generating leads next year—and the year after. Firms investing $2K/month in SEO for 12 months typically generate $50K-$100K in new client revenue annually from organic search.",
        icon: "TrendingUp"
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