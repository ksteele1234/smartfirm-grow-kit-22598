import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const OnlineReputationManagement = () => {
  const serviceData: ServicePageData = {
    id: "online-reputation-management",
    title: "Reputation Management for CPAs | SmartFirm",
    slug: "online-reputation-management",
    metaDescription: "Reputation management for CPAs: 24/7 review monitoring, professional responses, and systematic five-star review generation. Protect and grow your online presence.",
    canonicalUrl: "https://smartfirm.io/services/online-reputation-management",
    content: {},
    heroTitle: "Reputation Management for CPAs",
    heroSubtitle: "Monitor reviews 24/7, respond professionally within minutes, and systematically build 50+ five-star reviews that convert prospects into clients.",
    heroDescription: "Reputation management for CPAs monitors all review platforms 24/7, alerts you instantly to new feedback, and systematically builds five-star presence that converts prospects.",
    benefits: [
      {
        title: "Protect Your Pipeline from Negative Reviews",
        description: "One negative Google review can cost you 10-20 lost prospects. Our monitoring system alerts you immediately when negative feedback appears, provides response templates, and helps you resolve issues before they damage your reputation. You'll catch and address concerns within hours, not weeks.",
        icon: "Shield"
      },
      {
        title: "Build a 5-Star Presence That Converts",
        description: "Prospects compare firms by reading reviews. A firm with 50+ five-star reviews wins clients over a firm with 10 reviews—even if the latter is technically better. We systematically build your review presence across Google, Yelp, and Facebook, creating social proof that converts prospects into clients.",
        icon: "Star"
      },
      {
        title: "Turn Happy Clients Into Brand Advocates",
        description: "Your best clients would happily refer you—if you asked. Our reputation management system identifies your biggest fans and encourages them to share success stories, leave reviews, and refer colleagues. You'll generate 30-50% more referrals without awkward 'ask for referrals' conversations.",
        icon: "Handshake"
      },
      {
        title: "Monitor Your Reputation 24/7",
        description: "You can't manage what you don't monitor. Our dashboard tracks reviews, mentions, and sentiment across all platforms—alerting you to both opportunities (positive feedback to showcase) and threats (negative reviews to address). You'll have complete visibility into your online reputation without manually checking 10+ sites.",
        icon: "BarChart"
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
    faqs: [
      {
        question: "How quickly will you alert me to negative reviews?",
        answer: "Immediately. Our monitoring system checks Google, Yelp, Facebook, and other platforms every hour. When a new review appears, you'll receive an email and SMS alert within minutes—giving you time to respond before prospects see it."
      },
      {
        question: "Can you remove negative reviews?",
        answer: "We can't remove legitimate reviews (no one can), but we can help you respond professionally, resolve issues offline, and encourage satisfied clients to leave positive reviews that push negative ones down. We can also flag fake or policy-violating reviews for platform removal."
      },
      {
        question: "What if I don't have time to respond to every review?",
        answer: "We provide response templates for common review types (positive, constructive, negative). Many firms authorize us to post approved responses to positive reviews (\"Thank you for your kind words!\") while flagging negative reviews for personal response."
      },
      {
        question: "How many reviews should I aim for?",
        answer: "We recommend 30+ Google reviews as a minimum baseline (builds trust), 50+ to be competitive in most markets, and 100+ to dominate your local market. We'll set realistic goals based on your current review count and client volume."
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
