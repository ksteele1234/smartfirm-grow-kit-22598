import IndustryPageTemplate from "@/templates/IndustryPageTemplate";
import { IndustryPageData } from "@/types/cms";

const AuditAssurance = () => {
  const industryData: IndustryPageData = {
    id: "audit-assurance",
    title: "Marketing For Audit Firms That Builds Trust | SmartFirm",
    slug: "marketing-for-audit-firms",
    metaDescription: "Marketing for audit firms establishes credibility, demonstrates competence and independence, and attracts organizations requiring financial statement audits and assurance engagements.",
    canonicalUrl: "https://smartfirm.io/industries/marketing-for-audit-firms",
    content: {},
    heroTitle: "Marketing For Audit Firms",
    heroSubtitle: "Marketing for audit firms establishes credibility and builds the trust organizations need before engaging professional audit services: demonstrate competence, independence, and reliability to attract audit and assurance engagements when audit firms struggle to establish credibility.",
    industryOverview: "Audit and assurance services require the highest levels of trust and credibility. Our marketing strategies help you demonstrate competence, independence, and reliability to attract organizations that need professional audit services.",
    challenges: [
      {
        title: "Establishing Credibility & Trust",
        description: "Audit clients need absolute confidence in your competence and independence",
        solution: "Professional positioning that emphasizes credentials, experience, and quality controls"
      },
      {
        title: "Regulatory Compliance",
        description: "Marketing must comply with professional standards and regulations",
        solution: "Carefully crafted messaging that maintains professional standards"
      },
      {
        title: "Long-Term Relationship Building",
        description: "Audit engagements are typically ongoing, multi-year relationships",
        solution: "Relationship marketing focused on trust, consistency, and exceptional service"
      }
    ],
    services: [
      {
        title: "Professional Credibility Building",
        description: "Establish your firm's reputation for excellence and reliability",
        link: "/services/website-design"
      },
      {
        title: "Industry Specialization Marketing",
        description: "Position your expertise in specific industries or audit types",
        link: "/services/marketing-automation"
      },
      {
        title: "Referral Network Development",
        description: "Build relationships with attorneys, banks, and other professional referral sources",
        link: "/solutions/get-more-referrals"
      },
      {
        title: "Proposal Process Optimization",
        description: "Improve your success rate in competitive audit proposal situations",
        link: "/services/business-optimization"
      }
    ],
    caseStudies: [
      {
        title: "Regional Audit Market Leadership",
        client: "Regional CPA Firm",
        result: "Became market leader for nonprofit audits in 3-state region",
        link: "/success-stories"
      },
      {
        title: "Specialized Industry Focus",
        client: "Healthcare Audit Specialists",
        result: "Built $2M practice specializing in healthcare audits",
        link: "/success-stories"
      }
    ],
    ctaTitle: "Strengthen Your Audit Practice",
    ctaDescription: "Discover how to build trust, credibility, and a strong referral network for your audit practice."
  };

  return <IndustryPageTemplate data={industryData} />;
};

export default AuditAssurance;