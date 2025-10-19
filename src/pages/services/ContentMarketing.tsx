import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const ContentMarketing = () => {
  const serviceData: ServicePageData = {
    id: "content-marketing",
    title: "Strategic Content Marketing for CPAs | SmartFirm",
    slug: "content-marketing",
    metaDescription: "Strategic content marketing for CPAs that positions you as an expert, attracts ideal clients, and builds trust through blogs, guides, and educational resources.",
    canonicalUrl: "https://smartfirm.io/services/content-marketing",
    content: {},
    heroTitle: "Strategic Content Marketing For CPAs",
    heroSubtitle: "Our strategic content marketing for CPAs creates SEO-optimized blog posts, comprehensive tax guides, client education resources, and thought leadership articles that establish your expertise and attract qualified leads.",
    heroDescription: "Our content marketing services create blog posts, guides, and resources that educate prospects and establish your firm as the go-to authority. We deliver complete strategy: keyword research, editorial calendars, expert-written articles, and promotion across channels to nurture prospects and demonstrate your expertise.",
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
    ctaTitle: "Ready to Build Your Content Marketing Engine?",
    ctaDescription: "Book a free strategy call to discover how content marketing can grow your firm's visibility and authority.",
    ctaButtonText: "Get Started",
    ctaButtonLink: "/get-started"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default ContentMarketing;
