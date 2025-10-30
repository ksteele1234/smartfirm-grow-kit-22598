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
    heroTitle: "Fractional CIO For Accounting Firms",
    heroSubtitle: "Growing firms need strategic technology leadership but can't justify $150K+ CIO salaries. Fractional CIO for accounting firms delivers technology roadmaps, vendor management, security assessments, and digital transformation planning at fraction of full-time cost—enabling 2-3x faster growth through expert guidance.",
    heroDescription: "Our fractional executive services provide accounting firms with senior-level strategic guidance, technology leadership, and financial expertise on a flexible, cost-effective basis.",
    benefits: [
      {
        title: "Strategic Guidance from Former Practitioners",
        description: "Generic business coaches don't understand accounting. We're former firm owners who've scaled practices, navigated busy season, and dealt with compliance constraints. You'll get strategic advice that actually works in the real world of accounting—not generic business theory.",
        icon: "Target"
      },
      {
        title: "Fractional CIO Without the Full-Time Cost",
        description: "You need strategic technology leadership but can't justify a $150K+ CIO salary. Our fractional CIO services provide technology roadmaps, vendor management, security assessments, and digital transformation planning—at a fraction of the cost of a full-time hire.",
        icon: "Briefcase"
      },
      {
        title: "Navigate Growth Transitions Confidently",
        description: "Scaling from $400K to $1M requires different systems, pricing, and team structure than running a solo practice. We've guided dozens of firms through this transition and know exactly which changes to make (and when) to avoid growing pains. You'll scale smoothly instead of hitting the ceiling.",
        icon: "TrendingUp"
      },
      {
        title: "Accountability That Drives Results",
        description: "It's easy to let strategic initiatives slide when you're buried in client work. Our executive coaching provides regular check-ins, progress tracking, and accountability to ensure you actually implement growth strategies. Firms with executive coaching grow 2-3x faster than those going it alone.",
        icon: "CheckCircle"
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
    faqs: [
      {
        question: "How is this different from hiring a business coach?",
        answer: "Generic business coaches don't understand accounting. We're former firm owners who've navigated busy season, compliance constraints, and scaling challenges specific to accounting practices. You'll get advice that actually works in your world—not generic business theory."
      },
      {
        question: "How much time commitment is required from me?",
        answer: "Fractional CIO services: 2-4 hours per month (strategy calls + review). Executive coaching: 2 hours per month (1:1 sessions). Growth planning: 4-6 hours upfront, then 1-2 hours monthly. We're designed for busy firm owners who can't dedicate 10+ hours per week to strategic work."
      },
      {
        question: "What's included in fractional CIO services?",
        answer: "Technology roadmap and planning, vendor evaluation and management, security assessments and compliance, digital transformation strategy, and ongoing advisory. You get strategic technology leadership without the $150K+ salary of a full-time CIO."
      },
      {
        question: "Can I try this before committing to a long-term engagement?",
        answer: "Yes. We offer a 90-day pilot for executive services. If you don't see value, you can cancel. Most firms extend after the pilot because they finally have the strategic support they've been missing."
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