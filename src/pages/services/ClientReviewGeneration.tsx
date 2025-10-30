import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const ClientReviewGeneration = () => {
  const serviceData: ServicePageData = {
    id: "client-review-generation",
    title: "Automated Review Generation for CPAs | SmartFirm",
    slug: "client-review-generation", 
    metaDescription: "Automated review generation for CPAs that requests feedback at optimal times, makes leaving reviews effortless, and builds your online reputation systematically.",
    canonicalUrl: "https://smartfirm.io/services/client-review-generation",
    content: {},
    heroTitle: "Automated Review Generation For CPAs",
    heroSubtitle: "CPAs with fewer than 30 Google reviews lose 60% of prospects to better-reviewed competitors. Automated review generation for CPAs systematically collects 3-5x more five-star reviews through perfectly-timed requests, converts 2-3x more website visitors, and builds trust on autopilot in 90 days.",
    heroDescription: "Our review generation system helps accounting firms build a strong online reputation through systematic collection and management of client testimonials.",
    benefits: [
      {
        title: "Triple Your 5-Star Reviews in 90 Days",
        description: "Prospects trust online reviews more than your website copy. Our automated system requests Google reviews from satisfied clients at the perfect moment (right after service completion), generating 3-5x more reviews than manual requests. Firms go from 8 reviews to 30+ reviews in 90 days.",
        icon: "Star"
      },
      {
        title: "Win More Clients Without Spending More",
        description: "A firm with 50+ five-star reviews converts 2-3x more website visitors than a firm with 10 reviews. More reviews = more trust = more clients—without increasing your ad spend. Firms report 30-50% higher conversion rates after building their review presence.",
        icon: "Briefcase"
      },
      {
        title: "Protect Your Reputation 24/7",
        description: "Negative reviews kill your pipeline. Our system monitors Google, Yelp, and Facebook for new reviews, alerts you immediately, and provides response templates for addressing concerns professionally. You'll catch and resolve issues before they damage your reputation.",
        icon: "Shield"
      },
      {
        title: "Set It and Forget It",
        description: "Manually asking for reviews is awkward and inconsistent. Our system automatically sends review requests after tax filing, advisory meetings, or project completion—no manual work required. You'll build a 5-star reputation on autopilot while focusing on client work.",
        icon: "Zap"
      }
    ],
    features: [
      {
        title: "Smart Review Request Timing",
        description: "Request reviews at optimal moments for maximum response",
        details: [
          "Post-project completion automation",
          "Client satisfaction trigger points",
          "Seasonal timing optimization",
          "Follow-up sequence management"
        ]
      },
      {
        title: "Multi-Platform Management",
        description: "Generate reviews across all major platforms",
        details: [
          "Google Business Profile optimization",
          "Facebook and LinkedIn reviews",
          "Industry-specific platforms",
          "Unified review monitoring dashboard"
        ]
      },
      {
        title: "Review Response Automation",
        description: "Professional responses to maintain your reputation",
        details: [
          "Template responses for common situations",
          "Escalation alerts for negative reviews",
          "Thank you message automation",
          "Review analysis and insights"
        ]
      },
      {
        title: "Reputation Monitoring & Analytics",
        description: "Track and analyze your online reputation performance",
        details: [
          "Real-time review notifications",
          "Sentiment analysis tracking",
          "Competitive benchmarking",
          "Monthly reputation reports"
        ]
      }
    ],
    faqs: [
      {
        question: "How does the system know when to request reviews?",
        answer: "We integrate with your practice management software to detect service completion triggers (tax return filed, advisory project closed, monthly bookkeeping completed). The system automatically sends review requests 2-3 days after completion—when satisfaction is highest."
      },
      {
        question: "What if a client leaves a negative review?",
        answer: "Our monitoring system alerts you immediately (email + SMS). We provide response templates for addressing concerns professionally and offer to help resolve issues offline. Most negative reviews can be resolved or mitigated with a thoughtful, timely response."
      },
      {
        question: "Will clients get annoyed by review requests?",
        answer: "No. We send one request per service completion, with a polite reminder 7 days later if they don't respond. Clients who've already left a review are automatically excluded from future requests. Our approach is respectful and non-pushy."
      },
      {
        question: "Which review platforms do you focus on?",
        answer: "Google is the priority (90% of prospects check Google reviews first). We also request reviews on Facebook and industry-specific platforms if relevant. You can customize which platforms to prioritize based on where your prospects look."
      }
    ],
    ctaTitle: "Start Building Your Review Reputation",
    ctaDescription: "Discover how our automated review generation system can build trust and attract more clients to your accounting practice.",
    ctaButtonText: "Get Started",
    ctaButtonLink: "/get-started"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default ClientReviewGeneration;