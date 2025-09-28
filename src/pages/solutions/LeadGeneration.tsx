import SolutionPageTemplate from "@/templates/SolutionPageTemplate";
import { SolutionPageData } from "@/types/cms";

const LeadGeneration = () => {
  const solutionData: SolutionPageData = {
    id: "lead-generation",
    title: "Lead Generation for Accounting Firms",
    slug: "lead-generation",
    content: {},
    heroTitle: "Generate More Qualified Leads for Your Accounting Firm",
    heroSubtitle: "Stop waiting for clients to find you. Our proven lead generation system brings qualified prospects directly to your practice with automated marketing that works around the clock.",
    problemStatement: "Most accounting firms struggle with inconsistent lead flow, relying on referrals and word-of-mouth. This leaves revenue unpredictable and growth stagnant. Without a systematic approach to lead generation, you're missing out on potential clients who are actively searching for accounting services.",
    solutionOverview: "Our comprehensive lead generation system combines SEO optimization, targeted advertising, content marketing, and automated follow-up sequences to create a predictable pipeline of qualified prospects for your accounting firm.",
    keyBenefits: [
      {
        title: "Predictable Lead Flow",
        description: "Generate 20-50 qualified leads per month with our proven system",
        icon: "TrendingUp"
      },
      {
        title: "Higher Quality Prospects", 
        description: "Our targeting ensures leads are pre-qualified and ready to engage",
        icon: "Target"
      },
      {
        title: "Automated Nurturing",
        description: "Follow-up sequences convert leads while you focus on serving clients",
        icon: "Zap"
      },
      {
        title: "Local Market Dominance",
        description: "Dominate local search results and outrank competitors",
        icon: "MapPin"
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Market Analysis & Setup",
        description: "We analyze your local market, identify target keywords, and set up tracking systems"
      },
      {
        step: 2,
        title: "Multi-Channel Campaign Launch", 
        description: "Deploy SEO, PPC, and content marketing campaigns designed for accounting firms"
      },
      {
        step: 3,
        title: "Lead Capture & Qualification",
        description: "Optimized landing pages and lead magnets capture prospect information"
      },
      {
        step: 4,
        title: "Automated Follow-Up",
        description: "Email sequences and phone outreach convert leads into consultations"
      }
    ],
    results: [
      {
        metric: "240%",
        value: "240%",
        description: "Average increase in qualified leads within 90 days"
      },
      {
        metric: "15-25",
        value: "15-25",
        description: "New client consultations per month for typical firms"
      },
      {
        metric: "3.2x",
        value: "3.2x",
        description: "Return on marketing investment in first year"
      }
    ],
    ctaTitle: "Ready to Generate More Qualified Leads?",
    ctaDescription: "Book a free strategy call to see how our lead generation system can fill your pipeline with qualified prospects."
  };

  return <SolutionPageTemplate data={solutionData} />;
};

export default LeadGeneration;