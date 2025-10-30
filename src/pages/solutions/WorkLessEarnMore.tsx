import SolutionPageTemplate from "@/templates/SolutionPageTemplate";
import { SolutionPageData } from "@/types/cms";
import { getFaqsForPath } from "@/data/faqContent";

const WorkLessEarnMore = () => {
  const solutionFaqs = getFaqsForPath("/solutions/work-less-earn-more");
  const solutionData: SolutionPageData = {
    id: "work-less-earn-more",
    title: "Increase Your Accounting Firm Revenue | SmartFirm",
    slug: "work-less-earn-more",
    metaDescription: "Increase accounting firm revenue while reducing hours through value pricing strategies, service mix optimization, automation, and high-margin advisory.",
    canonicalUrl: "https://smartfirm.io/solutions/work-less-earn-more",
    content: {},
    heroTitle: "Increase Accounting Firm Revenue",
    heroSubtitle: "Too many CPAs work 60+ hours weekly for modest returns, trapped in time-for-money thinking. Increase accounting firm revenue while reducing hours through value pricing strategies, service mix optimization, process automation, and transitioning to high-margin advisory services.",
    problemStatement: "Too many CPAs work long hours for modest returns, trapped in time-for-money thinking without systems to scale efficiency and profitability.",
    solutionOverview: "Transform your practice into a highly efficient, profitable business that generates more revenue with fewer hours through automation, premium positioning, and optimized workflows.",
    problemSolutionPairs: [
      {
        problem: "Partners lose 8+ hours each week double-checking work-in-progress and chasing client paperwork instead of focusing on advisory work.",
        solution: "Centralize production with workflow dashboards, automated reminders, and delegated review checkpoints so handoffs happen without partner intervention."
      },
      {
        problem: "Hourly billing caps revenue growth because clients scrutinize timesheets and push back on rate increases.",
        solution: "Package services with value-based pricing frameworks, minimum fees, and anchored advisory bundles that tie price to outcomes instead of time."
      },
      {
        problem: "Scope creep erodes margins when the team says yes to off-book requests just to keep clients happy.",
        solution: "Productize deliverables with clear inclusions, automated change-order prompts, and client approval workflows before extra work begins."
      }
    ],
    keyBenefits: [
      {
        title: "Automate Routine Tasks",
        description: "Eliminate repetitive work with automation that handles client onboarding, follow-ups, and administrative tasks.",
        icon: "Zap",
        points: [
          "Trigger intake packets, e-signatures, and payment links automatically.",
          "Route document requests and reminders without manual emails.",
          "Sync task updates directly into your practice management platform."
        ]
      },
      {
        title: "Premium Service Positioning",
        description: "Position your services as premium solutions that command higher fees and attract better clients.",
        icon: "TrendingUp",
        points: [
          "Package deliverables into advisory-ready bundles clients understand.",
          "Build authority with polished proposals and ROI-focused messaging.",
          "Use pricing anchors that reinforce your strategic value."
        ]
      },
      {
        title: "Efficient Client Management",
        description: "Streamline client relationships with systems that reduce management time while improving satisfaction.",
        icon: "Users",
        points: [
          "Centralize client communication in shared portals.",
          "Surface status updates so the whole team sees next steps.",
          "Automate satisfaction check-ins after major milestones."
        ]
      },
      {
        title: "Revenue Optimization",
        description: "Identify and implement revenue opportunities that increase profits without increasing workload.",
        icon: "DollarSign",
        points: [
          "Analyze service mix to uncover underpriced engagements.",
          "Layer in advisory add-ons triggered by client milestones.",
          "Track realization per client so pricing stays aligned with value."
        ]
      }
    ],
    hearingSignals: [
      "Partners still log 60+ hours a week because every file needs their review.",
      "Clients balk at new pricing while scope creep continues unchecked.",
      "Onboarding drags out for weeks because admin teams chase documents manually."
    ],
    howItWorks: [
      {
        step: 1,
        title: "Efficiency Audit",
        description: "Analyze your current workflows to identify time-wasting activities and automation opportunities.",
        subheading: "Audit"
      },
      {
        step: 2,
        title: "Implement Automation",
        description: "Deploy systems that handle routine tasks automatically, freeing up your valuable time.",
        subheading: "Implement"
      },
      {
        step: 3,
        title: "Optimize Pricing Strategy",
        description: "Restructure your services and pricing to maximize profitability and attract premium clients.",
        subheading: "Automate"
      },
      {
        step: 4,
        title: "Scale Efficiently",
        description: "Build systems that allow growth without proportional increases in time investment.",
        subheading: "Optimize"
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
    ctaTitle: "Still have questions about working less while earning more?",
    ctaDescription: "Our team can show you how to streamline delivery, repackage pricing, and reclaim partner time. Book a call to see how we can design your efficiency playbook.",
    faqs: solutionFaqs
  };

  return <SolutionPageTemplate data={solutionData} />;
};

export default WorkLessEarnMore;
