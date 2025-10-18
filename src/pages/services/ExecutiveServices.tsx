import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const ExecutiveServices = () => {
  const serviceData: ServicePageData = {
    id: "executive-services",
    title: "Fractional CIO Services for Accounting Firms",
    slug: "executive-services",
    metaDescription: "Access strategic guidance through fractional CIO for accounting firms: technology roadmaps, vendor management, security assessments, and digital planning.",
    canonicalUrl: "https://smartfirm.io/services/executive-services",
    content: {},
    heroTitle: "Fractional Cio For Accounting Firms | SmartFirm",
    heroSubtitle: "Our fractional CIO for accounting firms provides executive-level technology leadership including strategic planning, vendor evaluation, security assessments, and digital transformation guidance without full-time costs.",
    heroDescription: "Our fractional executive services provide accounting firms with senior-level strategic guidance, technology leadership, and financial expertise on a flexible, cost-effective basis.",
    benefits: [
      {
        title: "Fractional CIO Services",
        description: "Strategic technology leadership and digital transformation guidance",
        icon: "Monitor"
      },
      {
        title: "Fractional CFO Services",
        description: "Financial strategy, planning, and performance optimization expertise",
        icon: "DollarSign"
      },
      {
        title: "Cost-Effective Leadership",
        description: "Access C-level expertise without full-time executive compensation",
        icon: "TrendingDown"
      },
      {
        title: "Strategic Growth Planning",
        description: "Develop and execute strategic initiatives for sustainable growth",
        icon: "Target"
      }
    ],
    features: [
      {
        title: "Fractional CIO Services",
        description: "Technology strategy and digital transformation leadership",
        details: [
          "Technology roadmap development and execution",
          "Digital transformation strategy and implementation",
          "Cybersecurity and risk management oversight",
          "Technology vendor evaluation and management"
        ]
      },
      {
        title: "Fractional CFO Services",
        description: "Financial leadership and strategic financial management",
        details: [
          "Financial planning and analysis (FP&A)",
          "Cash flow management and forecasting",
          "Investment and growth strategy development",
          "Financial reporting and dashboard creation"
        ]
      },
      {
        title: "Strategic Business Consulting",
        description: "Executive-level guidance for critical business decisions",
        details: [
          "Market expansion and growth strategy",
          "Mergers and acquisitions advisory",
          "Organizational development and culture",
          "Performance improvement initiatives"
        ]
      },
      {
        title: "Interim Executive Leadership",
        description: "Temporary executive coverage during transitions",
        details: [
          "Interim leadership during executive search",
          "Project-based executive management",
          "Crisis management and turnaround expertise",
          "Transition planning and succession support"
        ]
      }
    ],
    ctaTitle: "Access Executive-Level Expertise",
    ctaDescription: "Let's provide your firm with the strategic leadership needed to accelerate growth and achieve your goals.",
    ctaButtonText: "Explore Services",
    ctaButtonLink: "/get-started"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default ExecutiveServices;