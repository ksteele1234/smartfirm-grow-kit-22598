import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";
import SEO from "@/components/SEO";

const BusinessOptimization = () => {
  const serviceData: ServicePageData = {
    id: "business-optimization",
    title: "Business Optimization for Accounting Firms | SmartFirm.io",
    slug: "business-optimization",
    metaDescription: "Business optimization for accounting firms — analyze workflows, fix bottlenecks, and implement process improvements that increase profitability.",
    canonicalUrl: "https://smartfirm.io/services/business-optimization-for-accounting-firms/",
    content: {},
    heroTitle: "Business Optimization for Accounting Firms",
    heroSubtitle: "Identify revenue leaks, systematize growth processes, and increase profitability 20-30% within 12 months through operational audits and data-driven improvements.",
    heroDescription: "Business optimization for accounting firms analyzes workflows, identifies bottlenecks, and implements process improvements that increase profitability.",
    benefits: [
      {
        title: "Identify Hidden Revenue Leaks",
        description: "You're leaving $50K-$100K on the table every year through inefficient pricing, scope creep, and underutilized capacity. Our operational audit identifies exactly where you're losing money and provides a roadmap to capture it. Firms typically increase profitability by 20-30% within 12 months.",
        icon: "DollarSign"
      },
      {
        title: "Systematize Your Growth",
        description: "You can't scale a business built on heroic effort. We document your processes, create delegation frameworks, and build systems that work without you—so you can grow from $400K to $1M without working 70-hour weeks. You'll have a scalable business, not a high-paying job.",
        icon: "TrendingUp"
      },
      {
        title: "Optimize Your Service Mix",
        description: "Compliance work is low-margin and commoditized. Advisory work is high-margin and differentiated. We analyze your service mix, identify which services generate the best ROI, and help you transition toward higher-value work. Firms increase average client value by 40-60% within 18 months.",
        icon: "Target"
      },
      {
        title: "Get Actionable Insights, Not Generic Advice",
        description: "You don't need another consultant telling you to 'work on your business, not in it.' We provide specific, actionable recommendations based on your numbers: which clients to fire, which services to sunset, where to invest, and how to price for profit. You'll have a clear 90-day action plan, not vague platitudes.",
        icon: "BarChart"
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
    faqs: [
      {
        question: "How long does the optimization process take?",
        answer: "Phase 1 (Audit and Analysis): 2-3 weeks. Phase 2 (Recommendations and Roadmap): 1 week. Phase 3 (Implementation Support): 8-12 weeks. You'll have actionable insights within 30 days and see measurable improvements within 90 days."
      },
      {
        question: "What if the recommendations require major changes I'm not ready for?",
        answer: "We provide a prioritized roadmap with quick wins (implement this month), medium-term improvements (implement this quarter), and long-term strategic shifts (implement this year). You control the pace—we provide the plan."
      },
      {
        question: "Will you help implement the recommendations, or just provide a report?",
        answer: "We offer both options. Some firms want a diagnostic report and handle implementation themselves. Others want ongoing support to execute the roadmap. We tailor our engagement to your needs and capacity."
      },
      {
        question: "How do you measure success?",
        answer: "We track specific KPIs tied to your goals: revenue per client, profit margin, capacity utilization, client acquisition cost, and retention rate. You'll see exactly how optimization efforts impact your bottom line—not vague \"improvements.\""
      }
    ],
    ctaTitle: "Optimize Your Firm's Performance",
    ctaDescription: "Let's analyze your operations and implement improvements that drive measurable results.",
    ctaButtonText: "Get Analysis",
    ctaButtonLink: "/get-started-accounting-firm-automation/",
    relatedBlogTags: ['efficiency', 'workflow-automation', 'scalability', 'roi']
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default BusinessOptimization;