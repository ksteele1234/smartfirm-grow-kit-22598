import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";
import SEO from "@/components/SEO";

const TechnologySolutions = () => {
  const serviceData: ServicePageData = {
    id: "technology-solutions",
    title: "Accounting Firm Technology Consulting | SmartFirm",
    slug: "technology-solutions",
    metaDescription: "Accounting firm technology consulting: integrate your tech stack, automate workflows, and serve 2-3x more clients. Implemented in 2-4 weeks.",
    canonicalUrl: "https://smartfirm.io/services/technology-solutions",
    content: {},
    heroTitle: "Accounting Firm Technology Consulting",
    heroSubtitle: "Integrate your tech stack, eliminate manual data entry, and serve 2-3x more clients without adding headcount. Implemented in 2-4 weeks.",
    heroDescription: "Accounting firm technology consulting integrates disconnected software, automates workflows, and enables your team to serve 2-3x more clients without additional headcount.",
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
          "Client onboarding automation — see our dedicated solution",
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
    faqs: [
      {
        question: "How long does implementation take?",
        answer: "Most integrations and workflow automations are implemented in 2-4 weeks. Week 1: Audit and planning. Week 2: Configuration and testing. Week 3: Data migration and team training. Week 4: Go-live and support. We minimize disruption to your current operations. For client onboarding specifically, check out our dedicated Client Onboarding Automation service."
      },
      {
        question: "Will this require changing all my existing tools?",
        answer: "Not necessarily. We audit your current stack and recommend changes only where there are major gaps or inefficiencies. Many firms keep QuickBooks and practice management software and simply add integrations to connect everything. We optimize what you have before recommending replacements."
      },
      {
        question: "What if my team resists new technology?",
        answer: "We include hands-on training and documentation for your team. Most resistance comes from fear of complexity—our solutions are designed to make work easier, not harder. We show your team how much time they'll save, and adoption follows naturally."
      },
      {
        question: "What's the ongoing cost after implementation?",
        answer: "Software costs vary by firm size: $200-$500/month for small firms (4-10 people), $500-$1,500/month for mid-size firms (10-25 people). We recommend tools with transparent pricing and no surprise fees. Ongoing support and optimization are available if needed."
      }
    ],
    ctaTitle: "Transform Your Firm with Technology",
    ctaDescription: "Let's optimize your technology stack and automate your processes for maximum efficiency and growth.",
    ctaButtonText: "Book a Free Call",
    ctaButtonLink: "/get-started"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default TechnologySolutions;