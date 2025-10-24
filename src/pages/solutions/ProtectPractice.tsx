import SolutionPageTemplate from "@/templates/SolutionPageTemplate";
import { SolutionPageData } from "@/types/cms";
import { getFaqsForPath } from "@/data/faqContent";

const ProtectPractice = () => {
  const solutionFaqs = getFaqsForPath("/solutions/protect-practice-and-future");
  const solutionData: SolutionPageData = {
    id: "protect-practice",
    title: "CPA Practice Management & Planning Services",
    slug: "protect-practice-and-future",
    metaDescription: "Protect your practice and future with CPA practice management services covering succession planning, risk management, compliance requirements, and continuity.",
    canonicalUrl: "https://smartfirm.io/solutions/protect-practice-and-future",
    content: {},
    heroTitle: "CPA Practice Management Services",
    heroSubtitle: "Our CPA practice management services protect your firm's future through succession planning, risk management protocols, compliance monitoring, business continuity planning, and exit strategy development.",
    problemStatement: "Accounting practices face increasing threats from cybersecurity risks, regulatory changes, economic uncertainty, and technology disruption that could devastate unprepared firms.",
    solutionOverview: "Our comprehensive protection strategy secures your practice against current threats while future-proofing your business for long-term success and sustainability.",
    problemSolutionPairs: [
      {
        problem: "Legacy file servers and unsecured email leave staff sharing client data without MFA or intrusion monitoring.",
        solution: "Deploy managed security including MFA, encrypted portals, and 24/7 threat detection tuned to IRS and state privacy expectations."
      },
      {
        problem: "The firm's succession and continuity plans live in a partner's head with no clear owner if something happens unexpectedly.",
        solution: "Document succession playbooks, update authority matrices, and rehearse continuity scenarios so the practice can keep operating under stress."
      },
      {
        problem: "New regulatory updates get noticed only when an auditor flags them because monitoring is ad hoc.",
        solution: "Stand up a compliance calendar with automated alerts, defined owners, and quarterly risk reviews that keep requirements in front of the team."
      }
    ],
    keyBenefits: [
      {
        title: "Cybersecurity & Data Protection",
        description: "Implement enterprise-grade security measures to protect sensitive client data and prevent costly breaches.",
        icon: "Shield",
        points: [
          "Enforce MFA, device management, and role-based permissions.",
          "Monitor threats with 24/7 intrusion detection tuned for financial data.",
          "Encrypt data in transit and at rest with SOC 2-aligned policies."
        ]
      },
      {
        title: "Business Continuity Planning",
        description: "Ensure your practice continues operating smoothly during disruptions with robust contingency plans.",
        icon: "Clock",
        points: [
          "Document playbooks for staff coverage and client communications.",
          "Test backup and recovery procedures on a scheduled cadence.",
          "Map vendor dependencies so alternates are ready before you need them."
        ]
      },
      {
        title: "Future-Proofing Strategy",
        description: "Adapt to changing regulations, technology, and market conditions before they become problems.",
        icon: "TrendingUp",
        points: [
          "Review regulatory trackers and update policies quarterly.",
          "Pilot emerging tools in sandboxes before firmwide rollout.",
          "Align tech stack roadmaps with long-term firm goals."
        ]
      },
      {
        title: "Risk Management Systems",
        description: "Identify and mitigate potential threats to your practice before they cause damage.",
        icon: "AlertTriangle",
        points: [
          "Score operational risks and assign owners to mitigation plans.",
          "Automate incident reporting and follow-up checklists.",
          "Share dashboards that keep leadership aware of top risks."
        ]
      }
    ],
    hearingSignals: [
      "Sensitive client files still live on desktop hard drives without MFA or logging.",
      "Succession documents exist, but no one has updated them since the last partner retreat.",
      "Regulatory updates catch the team off guard because monitoring is piecemeal."
    ],
    howItWorks: [
      {
        step: 1,
        title: "Risk Assessment",
        description: "Conduct comprehensive analysis of current vulnerabilities and potential future threats to your practice."
      },
      {
        step: 2,
        title: "Protection Implementation",
        description: "Deploy security measures, backup systems, and contingency plans to safeguard your operations."
      },
      {
        step: 3,
        title: "Future-Proofing Setup",
        description: "Build adaptable systems that can evolve with changing regulations and technology."
      },
      {
        step: 4,
        title: "Ongoing Monitoring",
        description: "Continuously monitor threats and update protection measures to stay ahead of risks."
      }
    ],
    results: [
      {
        metric: "99.9%",
        value: "Uptime Guarantee",
        description: "Maintain business continuity even during disruptions"
      },
      {
        metric: "100%",
        value: "Data Security",
        description: "Protect sensitive client information with enterprise security"
      },
      {
        metric: "0",
        value: "Security Incidents",
        description: "Prevent costly breaches and compliance violations"
      }
    ],
    ctaTitle: "Still have questions about protecting your practice and future?",
    ctaDescription: "We’ll walk you through the security, continuity, and compliance safeguards top firms rely on. Book a call and we’ll map the protection plan for your firm.",
    faqs: solutionFaqs
  };

  return <SolutionPageTemplate data={solutionData} />;
};

export default ProtectPractice;
