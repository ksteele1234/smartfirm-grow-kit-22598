import SolutionPageTemplate from "@/templates/SolutionPageTemplate";
import { SolutionPageData } from "@/types/cms";
import { getFaqsForPath } from "@/data/faqContent";

const ScaleFirm = () => {
  const solutionFaqs = getFaqsForPath("/solutions/scale-accounting-firm-successfully");
  const solutionData: SolutionPageData = {
    id: "scale-firm",
    title: "Scale Your Accounting Firm Successfully | SmartFirm",
    slug: "scale-accounting-firm-successfully",
    metaDescription: "Scale your accounting firm without chaos. Use automation and systematized processes to double capacity without proportional hiring with SmartFirm's growth systems.",
    canonicalUrl: "https://smartfirm.io/solutions/scale-accounting-firm-successfully/",
    content: {},
    heroTitle: "Scale Your Firm: Grow Successfully Without Chaos or Burnout",
    heroSubtitle: "Hit a capacity wall where every new client means hiring more people? Scale your accounting firm successfully: automation handles routine work, systematized processes standardize delivery, and optimized workflows double revenue without proportional hiring.",
    problemStatement: "Many accounting firm owners hit a ceiling where more clients means more stress, longer hours, and diminished quality. Without proper systems, scaling becomes overwhelming and unsustainable, leading to burnout and client dissatisfaction.",
    solutionOverview: "Our firm scaling solution provides the marketing automation, client onboarding systems, and operational frameworks needed to grow sustainably while maintaining service quality and work-life balance.",
    problemSolutionPairs: [
      {
        problem: "The owner still acts as project manager on every engagement, so nothing moves unless they review it personally.",
        solution: "Implement role-based workflow automation with delegated approvals so senior staff can run engagements inside clear guardrails."
      },
      {
        problem: "Service delivery steps live in individual spreadsheets, creating inconsistent client experiences across teams.",
        solution: "Document standardized operating procedures, then embed them into your practice management system so every client follows the same high-quality path."
      },
      {
        problem: "New hires take months to become productive because onboarding depends on shadowing whoever is available.",
        solution: "Build structured onboarding tracks with playbooks, video walkthroughs, and recurring coaching checkpoints that ramp new team members in weeks."
      }
    ],
    keyBenefits: [
      {
        title: "Systematic Growth",
        description: "Scale revenue predictably without proportional increases in workload",
        icon: "TrendingUp",
        points: [
          "Model revenue targets against delivery capacity before launching campaigns.",
          "Automate lead nurture so acquisition keeps pace with delivery.",
          "Use dashboards that connect marketing, sales, and fulfillment data."
        ]
      },
      {
        title: "Operational Efficiency",
        description: "Streamlined processes that work without your constant oversight",
        icon: "Cog",
        points: [
          "Map every engagement to standardized SOPs and timelines.",
          "Automate approvals and escalations to reduce owner dependency.",
          "Spot bottlenecks quickly with real-time workflow reporting."
        ]
      },
      {
        title: "Quality Maintenance",
        description: "Maintain high service standards even as you serve more clients",
        icon: "Shield",
        points: [
          "Embed QA checklists inside your practice management system.",
          "Trigger peer reviews for high-risk filings automatically.",
          "Collect client feedback after milestones to course correct fast."
        ]
      },
      {
        title: "Work-Life Balance",
        description: "Build a firm that runs efficiently while you focus on strategy",
        icon: "Clock",
        points: [
          "Delegate day-to-day coordination with role-specific dashboards.",
          "Automate status updates so clients stay informed without calls.",
          "Reserve leadership time for strategic planning and mentorship."
        ]
      }
    ],
    hearingSignals: [
      "The firm owner still signs off on every proposal and workflow before work starts.",
      "Delivery hinges on a few rockstar seniors; if they take PTO, projects stall.",
      "Growth pauses every tax season because hiring and onboarding can’t keep pace."
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
    ctaTitle: "Still have questions about scaling your firm sustainably?",
    ctaDescription: "We’ll walk you through the operating rhythms, delegation plans, and capacity modeling that make growth repeatable. Book a call to see how we can architect your scaling roadmap.",
    faqs: solutionFaqs
  };

  return <SolutionPageTemplate data={solutionData} />;
};

export default ScaleFirm;
