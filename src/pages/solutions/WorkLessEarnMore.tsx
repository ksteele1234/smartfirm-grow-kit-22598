import SolutionPageTemplate from "@/templates/SolutionPageTemplate";
import { SolutionPageData } from "@/types/cms";

const WorkLessEarnMore = () => {
  const solutionData: SolutionPageData = {
    id: "work-less-earn-more",
    title: "Work Less, Earn More",
    slug: "work-less-earn-more",
    metaDescription: "Maximize profitability while reducing hours through automation, efficient systems, and strategic positioning that lets you work less while earning more.",
    content: {},
    heroTitle: "Work Less, Earn More",
    heroSubtitle: "Work less, earn more—that's the promise of smart automation. Maximize your profitability while reducing your hours through efficient systems and strategic positioning.",
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