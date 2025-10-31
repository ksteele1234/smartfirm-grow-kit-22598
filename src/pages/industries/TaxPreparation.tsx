import IndustryPageTemplate from "@/templates/IndustryPageTemplate";
import { IndustryPageData } from "@/types/cms";
import { getFaqsForPath } from "@/data/faqContent";

const TaxPreparation = () => {
  const industryFaqs = getFaqsForPath("/industries/tax-preparation");
  const industryData: IndustryPageData = {
    id: "tax-preparation",
    title: "Marketing For Tax Preparation Firms | SmartFirm",
    slug: "tax-preparation-marketing-solutions",
    metaDescription: "Marketing for tax preparation firms solves seasonal revenue swings and manual lead follow-up through automation, local SEO, and year-round client acquisition strategies.",
    canonicalUrl: "https://smartfirm.io/industries/tax-preparation-marketing-solutions",
    content: {},
    heroTitle: "Marketing For Tax Preparation Firms",
    heroSubtitle: "Marketing for tax preparation firms solves seasonal revenue swings and manual lead follow-up: automate client acquisition, streamline onboarding, and fill your pipeline year-round—not just January through April—when tax firms waste 15+ hours weekly during peak season.",
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
        link: "/services/marketing-automation"
      },
      {
        title: "Year-Round Revenue Development",
        description: "Build additional services to generate consistent monthly income",
        link: "/services/business-optimization"
      },
      {
        title: "Local SEO Optimization",
        description: "Dominate local search results for tax preparation services",
        link: "/services/seo-for-accountants"
      },
      {
        title: "Referral Program Management",
        description: "Systematic referral generation from satisfied clients",
        link: "/solutions/get-more-referrals"
      }
    ],
    caseStudies: [
      {
        title: "150% Revenue Increase During Tax Season",
        client: "Midwest Tax Services",
        result: "Generated 400+ new clients through targeted local marketing",
        link: "/success-stories"
      },
      {
        title: "Year-Round Revenue Streams",
        client: "Family Tax Partners",
        result: "Built bookkeeping services generating $8K monthly off-season",
        link: "/success-stories"
      }
    ],
    ctaTitle: "Ready to Transform Your Tax Business?",
    ctaDescription: "Let's discuss strategies to maximize your tax season revenue and build sustainable year-round income streams.",
    faqs: industryFaqs
  };

  return <IndustryPageTemplate data={industryData} />;
};

export default TaxPreparation;
