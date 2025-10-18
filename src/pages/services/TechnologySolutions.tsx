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
    heroTitle: "Accounting Firm Technology Consulting | SmartFirm",
    heroSubtitle: "Our accounting firm technology consulting analyzes your current software ecosystem, identifies redundancies and gaps, recommends optimal solutions, and manages implementation to streamline operations.",
    heroDescription: "Our technology consulting services help accounting firms leverage the latest tools and integrations to streamline operations and deliver better client experiences.",
    benefits: [
      {
        title: "Tech Stack Optimization",
        description: "Maximize efficiency with integrated technology solutions tailored to your firm",
        icon: "Settings"
      },
      {
        title: "Process Automation",
        description: "Automate repetitive tasks and workflows to free up time for client work",
        icon: "Zap"
      },
      {
        title: "Seamless Integrations",
        description: "Connect your existing tools for a unified, efficient workflow",
        icon: "Link"
      },
      {
        title: "Scalable Infrastructure",
        description: "Build systems that grow with your firm and support future expansion",
        icon: "TrendingUp"
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