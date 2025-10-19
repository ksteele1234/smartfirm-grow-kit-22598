import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const TechnologySolutions = () => {
  const serviceData: ServicePageData = {
    id: "technology-solutions",
    title: "Accounting Firm Technology Consulting | SmartFirm",
    slug: "technology-solutions",
    metaDescription: "Accounting firm technology consulting that evaluates your tech stack, identifies inefficiencies, recommends solutions, and implements integrated systems.",
    canonicalUrl: "https://smartfirm.io/services/technology-solutions",
    content: {},
    heroTitle: "Accounting Firm Technology Consulting",
    heroSubtitle: "Our accounting firm technology consulting analyzes your current software ecosystem, identifies redundancies and gaps, recommends optimal solutions, and manages implementation to streamline operations.",
    heroDescription: "Our technology consulting services help accounting firms leverage the latest tools and integrations to streamline operations and deliver better client experiences.",
    benefits: [
      {
        title: "Stop Juggling 10+ Disconnected Tools",
        description: "QuickBooks, practice management, CRM, email, scheduling—nothing talks to each other. Our integration platform connects your entire tech stack, eliminating double data entry and tool-switching. You'll save 5-8 hours per week on manual data transfers and reduce errors by 80%.",
        icon: "Link"
      },
      {
        title: "Scale Without Adding Headcount",
        description: "You can't grow from $400K to $1M by hiring more people to do manual work. Our workflow automation handles client onboarding, document collection, approval routing, and status updates—allowing your 4-person team to serve 2-3x more clients without burning out.",
        icon: "TrendingUp"
      },
      {
        title: "Get Clear Visibility Into Your Practice",
        description: "You can't manage what you can't measure. Our dashboards show real-time metrics on pipeline, capacity, revenue, and client health—in plain English, not tech jargon. You'll make data-driven decisions instead of guessing where to focus your growth efforts.",
        icon: "BarChart"
      },
      {
        title: "Implement in Weeks, Not Months",
        description: "You don't have time for a 6-month tech overhaul. We audit your current stack, recommend the right tools, configure integrations, migrate data, and train your team—all within 2-4 weeks. You'll be up and running quickly without disrupting client service.",
        icon: "Zap"
      }
    ],
    features: [
      {
        title: "Tech Stack Optimization",
        description: "Audit and optimize your current technology stack for maximum efficiency",
        details: [
          "Comprehensive technology audit and assessment",
          "Software recommendations based on your firm's needs",
          "Integration planning and implementation",
          "Cost-benefit analysis of technology investments"
        ]
      },
      {
        title: "Business Process Automation",
        description: "Streamline your operations with intelligent automation workflows",
        details: [
          "Client onboarding automation",
          "Document management and workflow automation",
          "Automated reporting and analytics",
          "Communication and notification automation"
        ]
      },
      {
        title: "Cloud Migration & Security",
        description: "Secure, cloud-based solutions for modern accounting practices",
        details: [
          "Cloud infrastructure setup and migration",
          "Data security and backup solutions",
          "Compliance and regulatory requirements management",
          "Remote work enablement and collaboration tools"
        ]
      },
      {
        title: "Training & Support",
        description: "Ongoing support and training for your technology systems",
        details: [
          "Staff training and onboarding programs",
          "Technical support and troubleshooting",
          "System documentation and best practices",
          "Continuous improvement and optimization"
        ]
      }
    ],
    ctaTitle: "Transform Your Firm with Technology",
    ctaDescription: "Let's optimize your technology stack and automate your processes for maximum efficiency and growth.",
    ctaButtonText: "Schedule Consultation",
    ctaButtonLink: "/get-started"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default TechnologySolutions;