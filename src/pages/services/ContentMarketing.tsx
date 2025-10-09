import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const ContentMarketing = () => {
  const serviceData: ServicePageData = {
    id: "content-marketing",
    title: "Content Marketing for Accounting Firms",
    slug: "content-marketing",
    content: {},
    heroTitle: "Content Marketing That Positions Your Firm as the Expert",
    heroSubtitle: "Build trust and attract ideal clients with strategic content that showcases your expertise.",
    heroDescription: "Our content marketing services create blog posts, guides, and resources that educate prospects and establish your firm as the go-to authority. We deliver complete strategy: keyword research, editorial calendars, expert-written articles, and promotion across channels to nurture prospects and demonstrate your expertise.",
    benefits: [
      {
        title: "Establish Thought Leadership",
        description: "Position your firm as the trusted expert prospects turn to for guidance",
        icon: "Award"
      },
      {
        title: "Organic Lead Generation",
        description: "Attract qualified prospects actively searching for accounting solutions",
        icon: "TrendingUp"
      },
      {
        title: "Build Trust Before Contact",
        description: "Educate and nurture prospects so they arrive ready to engage",
        icon: "Users"
      },
      {
        title: "Long-Term Visibility",
        description: "Content continues attracting traffic and leads months after publication",
        icon: "Target"
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
