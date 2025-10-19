import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const WebsiteDesign = () => {
  const serviceData: ServicePageData = {
    id: "website-design",
    title: "Professional Website Design for Accounting Firms",
    slug: "website-design",
    metaDescription: "Professional website design for accounting firms that converts 3-5x more visitors into clients. Mobile-optimized, compliance-ready, and built for growth.",
    canonicalUrl: "https://smartfirm.io/services/website-design",
    content: {},
    heroTitle: "Professional Website Design For Accounting Firms",
    heroSubtitle: "Our professional website design for accounting firms features conversion-optimized layouts, mobile responsiveness, compliance-friendly content, integrated lead capture, and fast-loading performance.",
    heroDescription: "Our website design service creates professional, conversion-optimized websites that establish credibility and generate leads for your accounting practice.",
    benefits: [
      {
        title: "Turn Visitors Into Qualified Leads",
        description: "Your current website gets traffic but doesn't convert. Our conversion-optimized designs feature strategic CTAs, trust signals (certifications, testimonials), and lead capture forms that turn 3-5% of visitors into consultation requests. Firms see 2-3x more qualified inquiries within 60 days of launch.",
        icon: "Briefcase"
      },
      {
        title: "Look Like the $1M Firm You're Building",
        description: "Outdated websites signal 'small, overwhelmed practice' to prospects. Our professional designs with client portals, service-specific landing pages, and mobile-responsive layouts position you as the established, tech-forward firm that attracts premium clients. First impressions matter—especially when competing for $10K+ advisory engagements.",
        icon: "Sparkles"
      },
      {
        title: "Launch in Weeks, Not Months",
        description: "You don't have time to manage a 6-month website project. We handle design, copywriting, compliance review, and technical setup—delivering a complete, conversion-ready site in 2-4 weeks. You review mockups, approve content, and we handle everything else so you can focus on serving clients.",
        icon: "Zap"
      },
      {
        title: "Built for SEO From Day One",
        description: "A beautiful website that no one finds is useless. Our sites are built with technical SEO foundations: fast load times, mobile optimization, schema markup, and keyword-optimized content. You'll rank higher for 'CPA near me' and 'accounting services' searches without ongoing SEO retainers.",
        icon: "Search"
      }
    ],
    features: [
      {
        title: "Conversion-Focused Design",
        description: "Every element designed to convert visitors into leads",
        details: [
          "Clear calls-to-action throughout the site",
          "Lead capture forms and contact optimization",
          "Trust signals and credibility indicators",
          "Service presentation and pricing clarity"
        ]
      },
      {
        title: "Professional Branding",
        description: "Establish your firm as a trusted authority",
        details: [
          "Professional color schemes and typography",
          "Client testimonials and case studies",
          "Team photos and bios",
          "Certifications and awards display"
        ]
      },
      {
        title: "Technical Excellence",
        description: "Fast, secure, and search engine optimized",
        details: [
          "Mobile-responsive design",
          "Fast loading speeds",
          "SSL security certificates",
          "Search engine optimization"
        ]
      },
      {
        title: "Content Management System",
        description: "Easy-to-update website with full control",
        details: [
          "User-friendly content management",
          "Blog and news updates capability",
          "Service page customization",
          "Analytics and performance tracking"
        ]
      }
    ],
    faqs: [
      {
        question: "How long does the website design process take?",
        answer: "Most accounting firm websites are completed in 2-4 weeks. Week 1: Strategy and mockups. Week 2: Design and copywriting. Week 3: Development and your review. Week 4: Revisions and launch. We handle everything—you review and approve at key milestones."
      },
      {
        question: "Can you migrate my existing content, or do we start from scratch?",
        answer: "We can do either. If your current site has good content, we'll migrate and optimize it. If it's outdated or off-brand, we'll write new copy from scratch. Most firms choose a hybrid: keep core service descriptions, rewrite homepage and key landing pages."
      },
      {
        question: "Will my website be compliant with AICPA regulations?",
        answer: "Yes. All content is reviewed for compliance with AICPA advertising rules, state board regulations, and professional standards. We avoid prohibited claims, ensure proper disclosures, and follow best practices for accounting firm websites."
      },
      {
        question: "What if I need changes after launch?",
        answer: "We include 30 days of post-launch support for minor tweaks and adjustments. After that, you can manage content yourself via the CMS, or we offer ongoing maintenance plans ($200-$500/month) for firms that prefer hands-off management."
      }
    ],
    ctaTitle: "Get a Website That Converts",
    ctaDescription: "Let's design a professional website that establishes credibility and generates leads for your accounting firm.",
    ctaButtonText: "View Portfolio",
    ctaButtonLink: "/get-started"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default WebsiteDesign;