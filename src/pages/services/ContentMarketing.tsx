import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";
import SEO from "@/components/SEO";

const ContentMarketing = () => {
  const serviceData: ServicePageData = {
    id: "strategic-content-marketing-for-cpas",
    title: "Content Marketing for Accounting Firms | SmartFirm",
    slug: "strategic-content-marketing-for-cpas",
    metaDescription: "Content marketing for CPAs: SEO-optimized blogs, guides, and resources that generate 20-30 leads monthly and position you as the trusted authority.",
    canonicalUrl: "https://smartfirm.io/services/strategic-content-marketing-for-cpas",
    content: {},
    heroTitle: "Content Marketing: Attract Ideal Clients for Your Accounting Firm",
    heroSubtitle: "Attract ideal clients with SEO-optimized content, generate 20-30 qualified leads monthly, and command premium fees. Done-for-you, compliance-approved.",
    heroDescription: "Content marketing for CPAs delivers SEO-optimized articles, guides, and resources that attract qualified leads and establish your firm as the trusted authority.",
    benefits: [
      {
        title: "Attract Ideal Clients Through Education",
        description: "Prospects don't want to be sold—they want to be educated. Our strategic content (blog posts, guides, videos, resources) answers the questions your ideal clients are searching for, positioning you as the trusted advisor before they ever contact you. Firms generate 20-30 qualified leads per month from content alone.",
        icon: "GraduationCap"
      },
      {
        title: "Build Authority That Commands Premium Fees",
        description: "Firms that publish thought leadership content charge 20-30% higher fees than those that don't. When prospects read your insights on tax planning, business advisory, or CFO services, price becomes less of an objection. You'll attract clients who value expertise, not those shopping for the cheapest option.",
        icon: "Briefcase"
      },
      {
        title: "SEO That Compounds Over Time",
        description: "Every piece of content we create is optimized for search engines and designed to rank for high-intent keywords. Unlike ads that stop working when you stop paying, content generates leads for years. Firms investing in content marketing see 3-5x ROI within 18-24 months.",
        icon: "TrendingUp"
      },
      {
        title: "Done-For-You, Compliance-Approved",
        description: "You don't have time to write blog posts, and you can't risk compliance violations. We create all content, ensure AICPA compliance, and handle publishing—you review and approve. You'll have a consistent content engine without the time drain or regulatory risk.",
        icon: "CheckCircle"
      }
    ],
    features: [
      {
        title: "Content Strategy & Planning",
        description: "We research your market, analyze competitor gaps, and build an editorial calendar targeting high-value topics"
      },
      {
        title: "Expert Content Creation",
        description: "Our writers produce SEO-optimized articles, guides, and resources tailored to accounting firm audiences"
      },
      {
        title: "Multi-Channel Distribution",
        description: "We publish to your blog, promote on social media, and incorporate into email nurture campaigns"
      },
      {
        title: "Performance Tracking",
        description: "Monthly reports show traffic, rankings, and lead attribution so you see content ROI clearly"
      }
    ],
    faqs: [
      {
        question: "How often will you publish content?",
        answer: "We recommend 2-4 blog posts per month, plus quarterly long-form guides or resources. Consistency matters more than volume—we'd rather publish 2 high-quality posts monthly than 8 mediocre ones."
      },
      {
        question: "What topics will you write about?",
        answer: "We focus on high-intent topics your ideal clients are searching for: tax planning strategies, business advisory insights, CFO services explainers, industry-specific guides, and answers to common client questions. Every piece is designed to attract and convert prospects."
      },
      {
        question: "Do I need to provide topic ideas, or do you handle that?",
        answer: "We handle topic research and planning based on keyword data, industry trends, and your service focus. You provide input on your expertise and unique perspectives—we turn that into SEO-optimized content."
      },
      {
        question: "How long until content marketing generates leads?",
        answer: "Most firms see their first content-generated leads within 60-90 days. Consistent lead flow (5-10 leads/month) typically starts around month 6. Content marketing is a long-term investment—it compounds over time as your content library grows."
      }
    ],
    ctaTitle: "Ready to Build Your Content Marketing Engine?",
    ctaDescription: "Book a Free Call to discover how content marketing can grow your firm's visibility and authority.",
    ctaButtonText: "Get Started",
    ctaButtonLink: "/get-started"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default ContentMarketing;
