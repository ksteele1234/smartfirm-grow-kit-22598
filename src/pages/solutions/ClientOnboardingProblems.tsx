import SolutionPageTemplate from "@/templates/SolutionPageTemplate";
import { SolutionPageData } from "@/types/cms";

const ClientOnboardingProblems = () => {
  const solutionData: SolutionPageData = {
    id: "client-onboarding-problems",
    title: "Client Onboarding Problems? Stop Losing Clients | SmartFirm",
    slug: "client-onboarding-problems",
    metaDescription: "New clients falling through the cracks? A broken onboarding process costs you time, money, and reputation. Learn how to create a flawless first impression.",
    canonicalUrl: "https://smartfirm.io/solutions/client-onboarding-problems/",
    content: {},
    heroTitle: "New Clients Falling Through the Cracks? It's Costing You More Than You Think.",
    heroSubtitle: "You just closed a great new client. You were excited, they were excited. But by the time you have everything you need, the initial excitement has evaporated—replaced by frustration and a feeling you've started off on the wrong foot.",
    problemStatement: "A clunky, manual, and confusing onboarding process silently sabotages new client relationships before they even have a chance to begin. You work hard to win new business, only to have your own internal process create a poor first impression, leading to frustration, delays, and client churn.",
    solutionOverview: "Create a seamless, automated, and professional experience that wows new clients and sets your team up for success. Within minutes of signing, clients receive a professional, branded welcome email directing them to a secure online portal with a personalized checklist—effortless for them, automated for you.",
    problemSolutionPairs: [
      {
        problem: "Email overload: Your primary tool for onboarding is a series of long, confusing emails with endless attachments and instructions that overwhelm clients.",
        solution: "Direct clients to a secure online portal with a personalized, clear checklist of everything you need—one place, zero confusion."
      },
      {
        problem: "Information scattered across multiple email threads makes it impossible to know the true status of any new client, leading to dropped balls and frustrated staff.",
        solution: "A central dashboard shows you the exact status of every new client, so you know who is ready to go and who needs a nudge—complete visibility at a glance."
      },
      {
        problem: "Every team member has their own way of doing things, leading to a different and unpredictable experience for every new client that undermines trust.",
        solution: "Every new client gets the same world-class, professional onboarding experience with standardized workflows—perfect consistency that reinforces your firm's value."
      }
    ],
    keyBenefits: [
      {
        title: "Save 10+ Hours Per Week",
        description: "Your team is freed from manual follow-up. The system automatically sends reminders for outstanding items, allowing your team to focus on starting actual client work instead of chasing documents.",
        icon: "Clock",
        points: [
          "Automated reminder emails at intervals you define",
          "No more manual tracking of who submitted what",
          "Redirect admin hours to billable client work"
        ]
      },
      {
        title: "Make a Stunning First Impression",
        description: "The onboarding process is so simple and intuitive that clients complete it quickly and without confusion, feeling confident and cared for from day one.",
        icon: "Star",
        points: [
          "Professional, branded welcome emails within minutes",
          "Secure client portal with clear instructions",
          "Clients see their progress and feel in control"
        ]
      },
      {
        title: "Ensure Consistency Every Time",
        description: "Every new client gets the same world-class, professional onboarding experience, reinforcing the value of your firm from the very beginning regardless of which team member manages their account.",
        icon: "CheckCircle",
        points: [
          "Standardized welcome sequences and document checklists",
          "Consistent messaging that reflects your brand",
          "No more quality variation between team members"
        ]
      },
      {
        title: "Scale Without the Growing Pains",
        description: "Handle 3x more new clients without increasing your admin workload. Automated onboarding removes the bottleneck that typically limits growth.",
        icon: "TrendingUp",
        points: [
          "Onboard multiple clients simultaneously without chaos",
          "Reduce time-to-engagement for faster revenue realization",
          "Grow your practice without growing your admin team"
        ]
      }
    ],
    hearingSignals: [
      "Your team complains about spending hours every week chasing clients for documents",
      "New clients seem confused or frustrated during their first few weeks",
      "You've lost clients who said they felt 'disorganized' or 'hard to work with'",
      "Different team members handle onboarding differently, creating inconsistent experiences",
      "You have no clear visibility into which new clients are stuck in the onboarding process"
    ],
    howItWorks: [
      {
        step: 1,
        title: "Initial Assessment",
        subheading: "Week 1",
        description: "We audit your current onboarding process, identify the biggest bottlenecks and pain points, and map out your ideal client journey from signed engagement to work-ready."
      },
      {
        step: 2,
        title: "System Design & Build",
        subheading: "Weeks 2-3",
        description: "We design your custom onboarding portal, build branded email templates and document checklists, and configure automated reminder sequences tailored to your workflow."
      },
      {
        step: 3,
        title: "Integration & Testing",
        subheading: "Week 4",
        description: "We connect the system to your practice management software (Karbon, Canopy, etc.), test every workflow end-to-end, and refine based on your team's feedback."
      },
      {
        step: 4,
        title: "Launch & Optimization",
        subheading: "Week 5+",
        description: "We train your team, launch with real clients, monitor performance, and optimize the system based on actual usage data and client feedback."
      }
    ],
    results: [
      {
        metric: "10+",
        value: "Hours Saved Weekly",
        description: "Time your team reclaims from manual follow-up"
      },
      {
        metric: "85%",
        value: "Faster Onboarding",
        description: "Reduction in time from signed engagement to work-ready"
      },
      {
        metric: "100%",
        value: "Consistency",
        description: "Every client gets the same professional experience"
      }
    ],
    ctaTitle: "Ready to Stop Losing Clients Before You Even Start?",
    ctaDescription: "Schedule a free 15-minute call to see exactly how client onboarding automation would work for your firm. We'll review your current process and show you what's possible.",
    faqs: [
      {
        question: "How quickly can we get this set up?",
        answer: "Most firms are fully operational within 4-5 weeks. Week 1 is assessment, Weeks 2-3 are design and build, Week 4 is integration and testing, and Week 5+ is launch and optimization. You'll start saving time immediately once the system goes live."
      },
      {
        question: "Will this work with our existing software?",
        answer: "Yes. We integrate with all major practice management platforms including Karbon, Canopy, Financial Cents, Jetpack Workflow, and others. If your software has an API, we can connect it—no double data entry required."
      },
      {
        question: "What if our onboarding process is really complex?",
        answer: "Complex processes actually benefit the most from automation. We can create different onboarding paths for tax clients, bookkeeping clients, advisory clients, and any other service type—each with unique intake forms, document checklists, and welcome sequences."
      },
      {
        question: "How much time will this really save us?",
        answer: "Most firms report saving 10-15 hours per week on document chasing, reminder emails, and status tracking. That's time your team can redirect to billable work or strategic growth activities."
      },
      {
        question: "What kind of support do you provide?",
        answer: "We provide full implementation support, team training, and ongoing optimization. After launch, we monitor system performance and make adjustments based on actual usage data and feedback."
      }
    ]
  };

  return <SolutionPageTemplate data={solutionData} />;
};

export default ClientOnboardingProblems;
