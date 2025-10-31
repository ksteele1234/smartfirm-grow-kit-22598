import SolutionPageTemplate from "@/templates/SolutionPageTemplate";
import { SolutionPageData } from "@/types/cms";
import { getFaqsForPath } from "@/data/faqContent";

const StopLosingClients = () => {
  const solutionFaqs = getFaqsForPath("/solutions/stop-losing-clients-to-tech-savvy-cpas");
  const solutionData: SolutionPageData = {
    id: "stop-losing-clients",
    title: "Stop Losing CPA Clients to Tech-Savvy Competitors | SmartFirm",
    slug: "stop-losing-clients-to-tech-savvy-cpas",
    metaDescription: "Stop losing CPA clients to competitors with automated follow-up, modern systems, and faster response times that keep clients loyal and engaged with your firm.",
    canonicalUrl: "https://smartfirm.io/solutions/stop-losing-clients-to-tech-savvy-cpas",
    content: {},
    heroTitle: "Stop Losing CPA Clients To Tech-Savvy Competitors",
    heroSubtitle: "Stop losing CPA clients to tech-savvy competitors with automated follow-up, modern systems, faster response times, and professional digital presence—all proven to keep clients loyal and engaged.",
    problemStatement: "Tech-savvy CPAs are winning clients with CPA marketing automation, faster responses, and professional digital marketing for CPAs while traditional firms lose ground with outdated processes and slow communication.",
    solutionOverview: "Our comprehensive CPA marketing automation platform ensures you never lose another client to a more modern competitor. Get found online, look professional, respond faster, and automate everything with proven marketing automation for CPAs.",
    problemSolutionPairs: [
      {
        problem: "Prospects Google the firm and find an outdated website, thin reviews, and no proof you understand cloud tools.",
        solution: "Refresh your digital presence with SEO-optimized pages, current testimonials, and technology messaging that signals you run a modern practice."
      },
      {
        problem: "Leads sit in the inbox overnight because intake depends on whoever checks voicemail or email first.",
        solution: "Route every inquiry through automated scheduling, chat, and SMS follow-up so prospects get a reply within minutes, not days."
      },
      {
        problem: "New clients experience inconsistent onboarding because forms, document requests, and reminders are handled manually.",
        solution: "Launch a branded client portal with automated onboarding sequences that guide every new relationship the same way every time."
      }
    ],
    keyBenefits: [
      {
        title: "Get Found Online When Clients Search",
        description: "Dominate local search results and convert website visitors into paying clients with proven SEO for CPAs and conversion optimization designed for CPA firms.",
        icon: "Search",
        points: [
          "Optimize location pages and service keywords around intent-rich searches.",
          "Publish authoritative content that answers prospect questions.",
          "Track rankings and conversions so improvements are transparent."
        ]
      },
      {
        title: "Look Professional with Modern Systems",
        description: "Impress clients with professional client portals, automated communications, and modern CPA websites that showcase your expertise.",
        icon: "Star",
        points: [
          "Launch responsive site templates tailored to accounting prospects.",
          "Embed secure portals for document exchange and project updates.",
          "Automate branded nurture sequences that welcome new clients."
        ]
      },
      {
        title: "Respond Faster Than Competition",
        description: "Never miss a lead with instant chat, automated scheduling, and mobile access to everything through our CPA marketing automation tools.",
        icon: "Zap",
        points: [
          "Instantly route leads to SMS, email, and CRM workflows.",
          "Offer self-serve booking for consultations and follow-up calls.",
          "Alert your team in real time when high-value prospects engage."
        ]
      },
      {
        title: "Automate What Others Do Manually",
        description: "Set up automated follow-ups, social media marketing for CPAs, reviews, and lead tracking that works 24/7 without your involvement.",
        icon: "Settings",
        points: [
          "Pre-build drip campaigns tied to tax cycles and service timelines.",
          "Schedule social and email content from one dashboard.",
          "Consolidate reporting so you can see attribution by channel."
        ]
      }
    ],
    hearingSignals: [
      "Prospects bounce when they land on an outdated website with broken calls-to-action.",
      "Inbound leads wait days for a reply because intake depends on manual follow-up.",
      "New clients get paper forms and email chains while competitors offer portals and apps."
    ],
    howItWorks: [
      {
        step: 1,
        title: "Audit Your Current Systems",
        description: "We analyze your online presence, client communication, and competition to identify gaps."
      },
      {
        step: 2,
        title: "Implement Modern Infrastructure",
        description: "Set up professional systems including SEO-optimized website, client portal, and automated communications."
      },
      {
        step: 3,
        title: "Launch Automation Workflows",
        description: "Deploy automated follow-ups, review generation, social media, and lead tracking systems."
      },
      {
        step: 4,
        title: "Monitor and Optimize",
        description: "Track performance, optimize conversions, and ensure you stay ahead of the competition."
      }
    ],
    results: [
      {
        metric: "95%",
        value: "Client Retention Rate",
        description: "Keep clients engaged with modern professional systems"
      },
      {
        metric: "3x",
        value: "Faster Response Time",
        description: "Respond to leads instantly with automation"
      },
      {
        metric: "200%",
        value: "More Online Visibility",
        description: "Get found when prospects search for CPAs"
      }
    ],
    ctaTitle: "Still have questions about keeping prospects from choosing tech-savvy competitors?",
    ctaDescription: "We’ll show you how to modernize your digital presence, automate follow-up, and deliver the experience today’s clients expect. Book a call to see how we can future-proof your marketing engine.",
    faqs: solutionFaqs
  };

  return <SolutionPageTemplate data={solutionData} />;
};

export default StopLosingClients;
