import SolutionPageTemplate from "@/templates/SolutionPageTemplate";
import { SolutionPageData } from "@/types/cms";

const ScaleFirm = () => {
  const solutionData: SolutionPageData = {
    id: "scale-firm", 
    title: "Scale Your Accounting Firm Successfully | SmartFirm",
    slug: "scale-firm",
    metaDescription: "Scale your accounting firm through systematized processes, delegation frameworks, service productization, pricing optimization, and capacity planning.",
    content: {},
    heroTitle: "Scale Accounting Firm | SmartFirm",
    heroSubtitle: "Learn how to scale your accounting firm by implementing systematized client delivery processes, building delegation frameworks, productizing services, optimizing pricing, and planning capacity strategically.",
    problemStatement: "Many accounting firm owners hit a ceiling where more clients means more stress, longer hours, and diminished quality. Without proper systems, scaling becomes overwhelming and unsustainable, leading to burnout and client dissatisfaction.",
    solutionOverview: "Our firm scaling solution provides the marketing automation, client onboarding systems, and operational frameworks needed to grow sustainably while maintaining service quality and work-life balance.",
    keyBenefits: [
      {
        title: "Systematic Growth",
        description: "Scale revenue predictably without proportional increases in workload",
        icon: "TrendingUp"
      },
      {
        title: "Operational Efficiency",
        description: "Streamlined processes that work without your constant oversight",
        icon: "Cog"
      },
      {
        title: "Quality Maintenance",
        description: "Maintain high service standards even as you serve more clients",
        icon: "Shield"
      },
      {
        title: "Work-Life Balance",
        description: "Build a firm that runs efficiently while you focus on strategy",
        icon: "Clock"
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Current State Assessment",
        description: "Analyze your current operations and identify scaling bottlenecks"
      },
      {
        step: 2,
        title: "System Implementation",
        description: "Deploy marketing automation, CRM systems, and workflow optimization"
      },
      {
        step: 3,
        title: "Team Training & Processes",
        description: "Train your team on new systems and establish standard operating procedures"
      },
      {
        step: 4,
        title: "Growth Acceleration",
        description: "Scale marketing efforts and client acquisition with proven systems in place"
      }
    ],
    results: [
      {
        metric: "300%",
        value: "300%",
        description: "Average revenue increase within 18 months"
      },
      {
        metric: "50%",
        value: "50%",
        description: "Reduction in owner time spent on operations"
      },
      {
        metric: "95%",
        value: "95%",
        description: "Client satisfaction maintained during scaling"
      }
    ],
    ctaTitle: "Ready to Scale Your Firm Systematically?",
    ctaDescription: "Let's discuss how to build the systems and processes that will enable sustainable growth for your accounting practice."
  };

  return <SolutionPageTemplate data={solutionData} />;
};

export default ScaleFirm;