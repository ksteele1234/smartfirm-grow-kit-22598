import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";

const BusinessOptimization = () => {
  const serviceData: ServicePageData = {
    id: "business-optimization",
    title: "Business Optimization For Accounting Firms | SmartFirm",
    slug: "business-optimization",
    metaDescription: "Streamline operations with business optimization for accounting firms analyzing workflows, identifying bottlenecks, and implementing process improvements.",
    canonicalUrl: "https://smartfirm.io/services/business-optimization",
    content: {},
    heroTitle: "Business Optimization For Accounting Firms",
    heroSubtitle: "Our business optimization for accounting firms maps your current workflows, identifies time-wasting bottlenecks, implements automation solutions, and creates standardized processes for consistent delivery.",
    heroDescription: "Our business optimization services help accounting firms identify inefficiencies, streamline processes, and make data-driven decisions for sustainable growth.",
    benefits: [
      {
        title: "Process Improvement",
        description: "Identify and eliminate inefficiencies in your current workflows",
        icon: "RefreshCw"
      },
      {
        title: "Executive Dashboards",
        description: "Real-time insights into your firm's performance and key metrics",
        icon: "BarChart"
      },
      {
        title: "Performance Analytics",
        description: "Data-driven decision making with comprehensive business intelligence",
        icon: "TrendingUp"
      },
      {
        title: "Operational Excellence",
        description: "Achieve consistent, high-quality service delivery across your firm",
        icon: "Target"
      }
    ],
    features: [
      {
        title: "Process Improvement",
        description: "Systematic analysis and optimization of your business processes",
        details: [
          "Workflow analysis and mapping",
          "Bottleneck identification and resolution",
          "Standard operating procedure development",
          "Performance measurement and optimization"
        ]
      },
      {
        title: "Executive Dashboards",
        description: "Real-time visibility into your firm's key performance indicators",
        details: [
          "Custom dashboard development for leadership team",
          "Financial performance tracking and reporting",
          "Client satisfaction and retention metrics",
          "Team productivity and utilization analytics"
        ]
      },
      {
        title: "Strategic Planning & Analytics",
        description: "Data-driven insights to guide your firm's strategic decisions",
        details: [
          "Business intelligence and predictive analytics",
          "Market analysis and competitive positioning",
          "Growth planning and forecasting",
          "Risk assessment and mitigation strategies"
        ]
      },
      {
        title: "Change Management & Implementation",
        description: "Successfully implement improvements across your firm",
        details: [
          "Change management planning and execution",
          "Team training and adoption programs",
          "Implementation support and guidance",
          "Performance tracking and adjustment"
        ]
      }
    ],
    ctaTitle: "Optimize Your Firm's Performance",
    ctaDescription: "Let's analyze your operations and implement improvements that drive measurable results.",
    ctaButtonText: "Get Analysis",
    ctaButtonLink: "/get-started"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default BusinessOptimization;