import SolutionPageTemplate from "@/templates/SolutionPageTemplate";
import { SolutionPageData } from "@/types/cms";

const ClientRetention = () => {
  const solutionData: SolutionPageData = {
    id: "client-retention",
    title: "Client Retention Strategies",
    slug: "client-retention",
    content: {},
    heroTitle: "Stop Losing Clients to Tech-Savvy Competitors",
    heroSubtitle: "Strengthen client relationships and position your firm as the obvious choice in your market. Our retention strategies keep your best clients engaged and loyal for years.",
    problemStatement: "Accounting firms are losing clients to competitors who offer better communication, modern technology, and proactive service. Without strong retention strategies, you're constantly replacing lost clients instead of growing your practice.",
    solutionOverview: "Our client retention solution combines competitive analysis, value proposition development, communication systems, and client experience optimization to strengthen relationships and reduce churn.",
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
    ctaDescription: "Discover how to turn your existing clients into your most valuable business asset with proven retention strategies."
  };

  return <SolutionPageTemplate data={solutionData} />;
};

export default ClientRetention;