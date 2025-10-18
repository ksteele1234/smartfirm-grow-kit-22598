import SolutionPageTemplate from "@/templates/SolutionPageTemplate";
import { SolutionPageData } from "@/types/cms";

const WorkLessEarnMore = () => {
  const solutionData: SolutionPageData = {
    id: "work-less-earn-more",
    title: "Increase Your Accounting Firm Revenue | SmartFirm",
    slug: "work-less-earn-more",
    metaDescription: "Increase accounting firm revenue while reducing hours through value pricing strategies, service mix optimization, automation, and high-margin advisory.",
    canonicalUrl: "https://smartfirm.io/solutions/work-less-earn-more",
    content: {},
    heroTitle: "Increase Accounting Firm Revenue | SmartFirm",
    heroSubtitle: "Discover how to increase accounting firm revenue while working fewer hours through value-based pricing models, service mix optimization, process automation, and transitioning to high-margin advisory services.",
    problemStatement: "Too many CPAs work long hours for modest returns, trapped in time-for-money thinking without systems to scale efficiency and profitability.",
    solutionOverview: "Transform your practice into a highly efficient, profitable business that generates more revenue with fewer hours through automation, premium positioning, and optimized workflows.",
    keyBenefits: [
      {
        title: "Automate Routine Tasks",
        description: "Eliminate repetitive work with automation that handles client onboarding, follow-ups, and administrative tasks.",
        icon: "Zap"
      },
      {
        title: "Premium Service Positioning",
        description: "Position your services as premium solutions that command higher fees and attract better clients.",
        icon: "TrendingUp"
      },
      {
        title: "Efficient Client Management",
        description: "Streamline client relationships with systems that reduce management time while improving satisfaction.",
        icon: "Users"
      },
      {
        title: "Revenue Optimization",
        description: "Identify and implement revenue opportunities that increase profits without increasing workload.",
        icon: "DollarSign"
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Efficiency Audit",
        description: "Analyze your current workflows to identify time-wasting activities and automation opportunities."
      },
      {
        step: 2,
        title: "Implement Automation",
        description: "Deploy systems that handle routine tasks automatically, freeing up your valuable time."
      },
      {
        step: 3,
        title: "Optimize Pricing Strategy",
        description: "Restructure your services and pricing to maximize profitability and attract premium clients."
      },
      {
        step: 4,
        title: "Scale Efficiently",
        description: "Build systems that allow growth without proportional increases in time investment."
      }
    ],
    results: [
      {
        metric: "40%",
        value: "Fewer Working Hours",
        description: "Reduce time spent on routine tasks"
      },
      {
        metric: "60%",
        value: "Higher Profit Margins",
        description: "Increase profitability through efficiency"
      },
      {
        metric: "25%",
        value: "Premium Price Increase",
        description: "Command higher fees with better positioning"
      }
    ],
    ctaTitle: "Start Working Less While Earning More",
    ctaDescription: "Transform your practice into an efficient, profitable business. Book a strategy call to see how we can optimize your operations."
  };

  return <SolutionPageTemplate data={solutionData} />;
};

export default WorkLessEarnMore;