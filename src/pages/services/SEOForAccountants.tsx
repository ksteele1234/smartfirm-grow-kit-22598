import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";
import SEO from "@/components/SEO";

const SEOForAccountants = () => {
  const serviceData: ServicePageData = {
    id: "seo-for-accountants",
    title: "SEO For Accounting Firms That Dominates Local Search | SmartFirm",
    slug: "seo-for-accountants",
    metaDescription: "SEO for accounting firms gets you found by high-intent prospects searching 'CPA near me': dominate local search results and deliver 3x more qualified leads without paid ads.",
    canonicalUrl: "https://smartfirm.io/services/seo-for-accounting-firms",
    content: {},
    heroTitle: "SEO For Accounting Firms",
    heroSubtitle: "SEO for accounting firms gets you found by high-intent prospects searching 'CPA near me': dominate local search results and deliver 3x more qualified leads without paid ads when 80% of invisible firms lose clients to page-one competitors.",
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
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer: "Local SEO improvements (Google Maps rankings) typically show within 60-90 days. Organic search rankings for competitive keywords take 4-6 months. Most firms see their first SEO-generated leads within 90 days and consistent monthly leads by month 6."
      },
      {
        question: "What's the difference between SEO and Google Ads?",
        answer: "Google Ads generate immediate leads but stop when you stop paying. SEO builds long-term rankings that generate leads for years without ongoing ad spend. We recommend both: ads for immediate leads while SEO builds, then reduce ad spend as organic traffic grows."
      },
      {
        question: "Do I need to write blog posts, or do you handle that?",
        answer: "We handle all content creation. Our team writes SEO-optimized blog posts, service pages, and local content tailored to accounting firms. You review and approve before publishing—no writing required on your end."
      },
      {
        question: "Will this work if I'm in a competitive market?",
        answer: "Yes, but it takes longer. In competitive markets (major metros), we focus on hyper-local keywords (\"CPA in [neighborhood]\") and niche services (\"R&D tax credit specialist\") where you can rank faster. Most firms see results within 6 months even in competitive markets."
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