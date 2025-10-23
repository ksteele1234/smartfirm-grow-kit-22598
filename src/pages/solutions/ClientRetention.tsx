import SolutionPageTemplate from "@/templates/SolutionPageTemplate";
import { SolutionPageData } from "@/types/cms";
import { getFaqsForPath } from "@/data/faqContent";

const ClientRetention = () => {
  const solutionFaqs = getFaqsForPath("/solutions/client-retention");
  const solutionData: SolutionPageData = {
    id: "client-retention",
    title: "Client Retention Strategies",
    slug: "client-retention",
    canonicalUrl: "https://smartfirm.io/solutions/client-retention",
    content: {},
    heroTitle: "AI-Powered Client Retention Strategies",
    heroSubtitle: "Strengthen client relationships with predictive analytics and intelligent automation. Our AI-driven retention strategies keep your best clients engaged and loyal for years through data-driven insights.",
    problemStatement: "Accounting firms are losing clients to competitors who leverage AI-powered communication, predictive client management, and proactive service automation. Without intelligent retention strategies, you're constantly replacing lost clients instead of growing your practice.",
    solutionOverview: "Our AI-driven client retention solution combines predictive client behavior analysis, automated value proposition optimization, intelligent communication systems, and data-driven client experience enhancement to strengthen relationships and reduce churn.",
    problemSolutionPairs: [
      {
        problem: "Client managers guess which relationships are at risk because there is no shared churn signal or scoring model.",
        solution: "Apply predictive analytics that score engagement, billing trends, and sentiment so at-risk accounts surface before they defect."
      },
      {
        problem: "Outreach varies wildly by advisor, leaving some clients with gaps of months between touches.",
        solution: "Automate cross-channel cadences—email, SMS, and portal alerts—guided by AI triggers that recommend the next best action."
      },
      {
        problem: "Leadership cannot see which services each client actually uses, making it hard to demonstrate value.",
        solution: "Consolidate billing, deliverables, and meeting insights into dashboards that highlight wins and tee up strategic conversations."
      }
    ],
    keyBenefits: [
      {
        title: "Reduced Client Churn",
        description: "Decrease client loss by 60% with proactive retention strategies",
        icon: "Shield"
      },
      {
        title: "Increased Client Value",
        description: "Existing clients become more valuable through additional services",
        icon: "TrendingUp"
      },
      {
        title: "Competitive Differentiation",
        description: "Stand out from competitors with superior client experience",
        icon: "Star"
      },
      {
        title: "Predictable Revenue",
        description: "Build reliable revenue streams from loyal, long-term clients",
        icon: "BarChart"
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Competitive Analysis",
        description: "Analyze what competitors offer and identify gaps in your service delivery"
      },
      {
        step: 2,
        title: "Value Proposition Enhancement",
        description: "Develop compelling reasons for clients to stay and pay premium rates"
      },
      {
        step: 3,
        title: "Communication Systems",
        description: "Implement regular touchpoints and proactive communication workflows"
      },
      {
        step: 4,
        title: "Experience Optimization",
        description: "Enhance every client interaction from onboarding to ongoing service"
      }
    ],
    results: [
      {
        metric: "92%",
        value: "92%",
        description: "Client retention rate achieved by our partner firms"
      },
      {
        metric: "40%",
        value: "40%",
        description: "Increase in average client lifetime value"
      },
      {
        metric: "85%",
        value: "85%",
        description: "Client satisfaction scores after implementing our strategies"
      }
    ],
    ctaTitle: "Ready to Strengthen Client Relationships?",
    ctaDescription: "Discover how to turn your existing clients into your most valuable business asset with proven retention strategies.",
    faqs: solutionFaqs
  };

  return <SolutionPageTemplate data={solutionData} />;
};

export default ClientRetention;
