import SolutionPageTemplate from "@/templates/SolutionPageTemplate";
import { SolutionPageData } from "@/types/cms";

const StopLosingClients = () => {
  const solutionData: SolutionPageData = {
    id: "stop-losing-clients",
    title: "Modern Marketing Services for CPAs | SmartFirm",
    slug: "stop-losing-clients-to-tech-savvy-cpas",
    metaDescription: "Compete with modern marketing services for CPAs that showcase your technology adoption, streamline client experience, and position you as forward-thinking.",
    canonicalUrl: "https://smartfirm.io/solutions/stop-losing-clients-to-tech-savvy-cpas",
    content: {},
    heroTitle: "Modern Marketing Services For CPAs",
    heroSubtitle: "Our modern marketing services for CPAs help you compete with tech-savvy competitors by highlighting your technology stack, streamlining client interactions, and positioning your practice as innovative.",
    problemStatement: "Tech-savvy CPAs are winning clients with CPA marketing automation, faster responses, and professional digital marketing for CPAs while traditional firms lose ground with outdated processes and slow communication.",
    solutionOverview: "Our comprehensive CPA marketing automation platform ensures you never lose another client to a more modern competitor. Get found online, look professional, respond faster, and automate everything with proven marketing automation for CPAs.",
    keyBenefits: [
      {
        title: "Get Found Online When Clients Search",
        description: "Dominate local search results and convert website visitors into paying clients with proven SEO for CPAs and conversion optimization designed for CPA firms.",
        icon: "Search"
      },
      {
        title: "Look Professional with Modern Systems",
        description: "Impress clients with professional client portals, automated communications, and modern CPA websites that showcase your expertise.",
        icon: "Star"
      },
      {
        title: "Respond Faster Than Competition",
        description: "Never miss a lead with instant chat, automated scheduling, and mobile access to everything through our CPA marketing automation tools.",
        icon: "Zap"
      },
      {
        title: "Automate What Others Do Manually",
        description: "Set up automated follow-ups, social media marketing for CPAs, reviews, and lead tracking that works 24/7 without your involvement.",
        icon: "Settings"
      }
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
    ctaTitle: "Don't Let Tech-Savvy CPAs Win Your Clients",
    ctaDescription: "Get the modern CPA marketing automation and systems that keeps you competitive. Book a strategy call to see how we can transform your practice with proven digital marketing for CPAs."
  };

  return <SolutionPageTemplate data={solutionData} />;
};

export default StopLosingClients;