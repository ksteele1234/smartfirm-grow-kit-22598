import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const OnlineReputationManagement = () => {
  const serviceData: ServicePageData = {
    id: "online-reputation-management",
    title: "Online Reputation Management for CPAs | SmartFirm",
    slug: "online-reputation-management",
    metaDescription: "Protect your practice with reputation management for CPAs monitoring reviews, responding to feedback, addressing negative comments, and promoting wins.",
    content: {},
    heroTitle: "Reputation Management For Cpas | SmartFirm",
    heroSubtitle: "Our reputation management for CPAs monitors your online presence across review platforms, responds professionally to feedback, addresses negative comments strategically, and amplifies positive client experiences.",
    heroDescription: "Our reputation management service monitors reviews, responds professionally, and builds a 5-star presence that attracts more clients. We monitor all major review platforms, generate positive reviews from satisfied clients, respond professionally to feedback, and transform your online presence into a powerful trust signal.",
    benefits: [
      {
        title: "Boost Star Ratings",
        description: "Generate more 5-star reviews from happy clients with automated request workflows",
        icon: "Star"
      },
      {
        title: "Monitor & Respond Fast",
        description: "Catch negative reviews early and respond professionally to protect your reputation",
        icon: "Shield"
      },
      {
        title: "Build Social Proof",
        description: "Showcase glowing testimonials across your website and marketing materials",
        icon: "Award"
      },
      {
        title: "Competitive Advantage",
        description: "Outrank competitors in local search with higher ratings and more reviews",
        icon: "TrendingUp"
      }
    ],
    features: [
      {
        title: "Reputation Audit",
        description: "We assess your current online presence across Google, Yelp, Facebook, and industry platforms"
      },
      {
        title: "Review Generation System",
        description: "Automated email and SMS campaigns ask satisfied clients to share positive experiences"
      },
      {
        title: "Monitoring & Response",
        description: "We track new reviews daily and craft professional responses that demonstrate care and professionalism"
      },
      {
        title: "Ongoing Optimization",
        description: "Monthly reports and strategy adjustments ensure continuous reputation improvement"
      }
    ],
    ctaTitle: "Ready to Strengthen Your Online Reputation?",
    ctaDescription: "Book a free reputation audit to see how we can transform your firm's online presence and attract more ideal clients.",
    ctaButtonText: "Get Started",
    ctaButtonLink: "/get-started"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default OnlineReputationManagement;
