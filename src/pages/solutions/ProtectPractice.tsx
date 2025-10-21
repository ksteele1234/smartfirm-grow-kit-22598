import SolutionPageTemplate from "@/templates/SolutionPageTemplate";
import { SolutionPageData } from "@/types/cms";

const ProtectPractice = () => {
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
    keyBenefits: [
      {
        title: "Cybersecurity & Data Protection",
        description: "Implement enterprise-grade security measures to protect sensitive client data and prevent costly breaches.",
        icon: "Shield"
      },
      {
        title: "Business Continuity Planning",
        description: "Ensure your practice continues operating smoothly during disruptions with robust contingency plans.",
        icon: "Clock"
      },
      {
        title: "Future-Proofing Strategy",
        description: "Adapt to changing regulations, technology, and market conditions before they become problems.",
        icon: "TrendingUp"
      },
      {
        title: "Risk Management Systems",
        description: "Identify and mitigate potential threats to your practice before they cause damage.",
        icon: "AlertTriangle"
      }
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
    ctaTitle: "Secure Your Practice Today",
    ctaDescription: "Don't wait for a threat to materialize. Protect your practice and future-proof your business now. Book a security consultation."
  };

  return <SolutionPageTemplate data={solutionData} />;
};

export default ProtectPractice;