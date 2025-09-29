import SolutionPageTemplate from "@/templates/SolutionPageTemplate";
import { SolutionPageData } from "@/types/cms";

const StopLosingClients = () => {
  const solutionData: SolutionPageData = {
    id: "stop-losing-clients",
    title: "Stop Losing Clients to Tech-Savvy CPAs",
    slug: "stop-losing-clients-to-tech-savvy-cpas",
    metaDescription: "CPA marketing automation that prevents client loss through modern systems, faster response times, and professional automation that keeps you ahead of tech-savvy competitors.",
    content: {},
    heroTitle: "Stop Losing Clients to Tech-Savvy CPAs",
    heroSubtitle: "Stay competitive with modern systems that impress clients and automate what your competitors do manually",
    problemStatement: "Tech-savvy CPAs are winning clients with modern systems, faster responses, and professional automation while traditional firms lose ground with outdated processes and slow communication.",
    solutionOverview: "Our comprehensive CPA marketing automation platform ensures you never lose another client to a more modern competitor. Get found online, look professional, respond faster, and automate everything.",
    keyBenefits: [
      {
        title: "Get Found Online When Clients Search",
        description: "Dominate local search results and convert website visitors into paying clients with proven SEO and conversion optimization.",
        icon: "Search"
      },
      {
        title: "Look Professional with Modern Systems",
        description: "Impress clients with professional client portals, automated communications, and modern website design.",
        icon: "Star"
      },
      {
        title: "Respond Faster Than Competition",
        description: "Never miss a lead with instant chat, automated scheduling, and mobile access to everything.",
        icon: "Zap"
      },
      {
        title: "Automate What Others Do Manually",
        description: "Set up automated follow-ups, social media, reviews, and lead tracking that works 24/7.",
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
    ctaDescription: "Get the modern systems and automation that keeps you competitive. Book a strategy call to see how we can transform your practice."
  };

  return <SolutionPageTemplate data={solutionData} />;
};

export default StopLosingClients;