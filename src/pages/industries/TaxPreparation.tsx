import IndustryPageTemplate from "@/templates/IndustryPageTemplate";
import { IndustryPageData } from "@/types/cms";
import { getFaqsForPath } from "@/data/faqContent";

const TaxPreparation = () => {
  const industryFaqs = getFaqsForPath("/industries/automation-for-tax-preparation-firms");
  const industryData: IndustryPageData = {
    id: "tax-preparation",
    title: "Automation for Tax Preparation Firms | SmartFirm.io",
    slug: "automation-for-tax-preparation-firms",
    metaDescription: "Automation for tax preparation firms — solve seasonal revenue swings, automate client acquisition, streamline onboarding, and fill off-season.",
    canonicalUrl: "https://smartfirm.io/industries/automation-for-tax-preparation-firms/",
    content: {},
    heroTitle: "Automation for Tax Preparation Firms",
    heroSubtitle: "Automation for tax preparation firms solves seasonal revenue swings and manual lead follow-up — streamline client acquisition and fill your off-season.",
    industryOverview: "Tax preparation businesses face unique seasonal challenges - intense demand during tax season followed by slower summer months. Our marketing solutions help you maximize tax season revenue while building services that generate income year-round.",
    challenges: [
      {
        title: "Seasonal Revenue Fluctuations",
        description: "Most revenue concentrated in 3-4 months of the year",
        solution: "Develop year-round services like bookkeeping, business consulting, and tax planning to smooth revenue"
      },
      {
        title: "Intense Competition During Tax Season",
        description: "Competing with large chains and online tax software",
        solution: "Position your personalized service and local expertise as key differentiators"
      },
      {
        title: "Client Acquisition Timing",
        description: "Need to reach clients at the right time in their decision process",
        solution: "Strategic marketing campaigns timed to capture clients before competitors"
      }
    ],
    services: [
      {
        title: "Seasonal Marketing Campaigns",
        description: "Maximize visibility and client acquisition during peak tax season",
        link: "/services/marketing-automation-for-accounting-firms"
      },
      {
        title: "Year-Round Revenue Development",
        description: "Build additional services to generate consistent monthly income",
        link: "/services/business-optimization-for-accounting-firms"
      },
      {
        title: "Local SEO Optimization",
        description: "Dominate local search results for tax preparation services",
        link: "/services/seo-for-accounting-firms"
      },
      {
        title: "Referral Program Management",
        description: "Systematic referral generation from satisfied clients",
        link: "/solutions/get-more-referrals-for-cpa-firm-without-asking"
      }
    ],
    ctaTitle: "Ready to Transform Your Tax Business?",
    ctaDescription: "Let's discuss strategies to maximize your tax season revenue and build sustainable year-round income streams.",
    faqs: industryFaqs
  };

  return <IndustryPageTemplate data={industryData} />;
};

export default TaxPreparation;
