import SolutionPageTemplate from "@/templates/SolutionPageTemplate";
import { SolutionPageData } from "@/types/cms";
import { getFaqsForPath } from "@/data/faqContent";

const GrowWithoutPains = () => {
  const solutionFaqs = getFaqsForPath("/solutions/grow-without-growing-pains");
  const solutionData: SolutionPageData = {
    id: "grow-without-pains",
    title: "Growth Feels Like Chaos? Grow Your Accounting Firm Without The Stress | SmartFirm",
    slug: "grow-without-growing-pains",
    metaDescription: "Adding clients feels like adding chaos? Grow your accounting firm without burnout, quality drops, or team breaking: implement systems and automation that scale revenue 2-3× while maintaining sanity.",
    canonicalUrl: "https://smartfirm.io/solutions/grow-without-growing-pains",
    content: {},
    heroTitle: "Growth Feels Like Chaos? Scale Without The Stress",
    heroSubtitle: "Every new client feels like breaking point? Grow your accounting firm without chaos: systematize delivery, automate repetitive work, and build leverage that doubles revenue without quality drops, staff burnout, or working more hours.",
    problemStatement: "Growing accounting firms often struggle with chaos, quality control issues, overwhelmed staff, and systems that break down under increased volume. Without AI-powered growth management, scaling becomes unpredictable and stressful.",
    solutionOverview: "Our AI-driven growth management systems ensure smooth scaling with predictive automated workflows, intelligent quality controls, and smart infrastructure that grows with you using data-driven insights without the typical growing pains.",
    problemSolutionPairs: [
      {
        problem: "Managers constantly reshuffle work because no one can see team capacity or deadlines in one place.",
        solution: "Roll out predictive capacity planning dashboards that forecast workload and auto-balance assignments before crunch time hits."
      },
      {
        problem: "Review notes pile up at the end of the month, so quality checks happen days after files should be out the door.",
        solution: "Embed staged quality automation that flags exceptions in real time and routes only the issues that need human review."
      },
      {
        problem: "Leadership lacks a clear view of which growth initiatives are straining operations until staff burn out.",
        solution: "Connect pipeline, staffing, and profitability data in one scorecard so you can expand services with the right resources already lined up."
      }
    ],
    keyBenefits: [
      {
        title: "Scalable Systems Architecture",
        description: "Build infrastructure that handles growth seamlessly without breaking down or requiring constant attention.",
        icon: "Building",
        points: [
          "Audit workflows to remove duplicate work across teams.",
          "Implement standardized intake and delivery templates.",
          "Integrate core apps so data syncs automatically."
        ]
      },
      {
        title: "Quality Control Automation",
        description: "Maintain high service standards even as volume increases through automated quality checks and workflows.",
        icon: "Shield",
        points: [
          "Set rule-based reviews that flag exceptions instantly.",
          "Route complex files to senior staff before they bottleneck.",
          "Track review turnaround so nothing slips past deadlines."
        ]
      },
      {
        title: "Team Efficiency Tools",
        description: "Equip your growing team with tools and processes that prevent overwhelm and maintain productivity.",
        icon: "Users",
        points: [
          "Give visibility into workloads with live capacity dashboards.",
          "Automate task assignments based on role and availability.",
          "Offer quick-reference playbooks inside each workflow."
        ]
      },
      {
        title: "Growth Monitoring Dashboard",
        description: "Track growth metrics and identify potential issues before they become problems.",
        icon: "BarChart",
        points: [
          "Overlay pipeline demand with staffing forecasts.",
          "Monitor profitability by service line in real time.",
          "Receive alerts when KPIs drift from targets."
        ]
      }
    ],
    hearingSignals: [
      "Team members hit capacity surprises because staffing forecasts live in spreadsheets.",
      "Quality slips get noticed after busy season when rework is already expensive.",
      "Managers spend nights reshuffling tasks to cover last-minute surges."
    ],
    howItWorks: [
      {
        step: 1,
        title: "Growth Readiness Assessment",
        description: "Evaluate your current systems and identify potential bottlenecks before they constrain growth."
      },
      {
        step: 2,
        title: "Build Scalable Infrastructure",
        description: "Implement systems designed to handle increased volume without quality degradation."
      },
      {
        step: 3,
        title: "Deploy Growth Automation",
        description: "Set up automated workflows that maintain quality and efficiency as you scale."
      },
      {
        step: 4,
        title: "Monitor and Optimize",
        description: "Track growth metrics and continuously optimize systems for smooth scaling."
      }
    ],
    results: [
      {
        metric: "200%",
        value: "Capacity Increase",
        description: "Handle more clients without adding stress"
      },
      {
        metric: "90%",
        value: "Quality Maintenance",
        description: "Maintain service standards during growth"
      },
      {
        metric: "75%",
        value: "Less Growth Stress",
        description: "Reduce growing pains and overwhelm"
      }
    ],
    ctaTitle: "Still have questions about scaling without growing pains?",
    ctaDescription: "We can map the systems, dashboards, and delegation paths that keep growth predictable. Book a call to see how we can build your firm’s growth infrastructure.",
    faqs: solutionFaqs
  };

  return <SolutionPageTemplate data={solutionData} />;
};

export default GrowWithoutPains;
