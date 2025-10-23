import SolutionPageTemplate from "@/templates/SolutionPageTemplate";
import { SolutionPageData } from "@/types/cms";
import { getFaqsForPath } from "@/data/faqContent";

const GrowWithoutPains = () => {
  const solutionFaqs = getFaqsForPath("/solutions/grow-without-growing-pains");
  const solutionData: SolutionPageData = {
    id: "grow-without-pains",
    title: "Strategic Accounting Firm Growth Consulting",
    slug: "grow-without-growing-pains",
    metaDescription: "Grow without growing pains through accounting firm growth consulting addressing capacity constraints, delegation challenges, and service delivery systems.",
    canonicalUrl: "https://smartfirm.io/solutions/grow-without-growing-pains",
    content: {},
    heroTitle: "Accounting Firm Growth Consulting",
    heroSubtitle: "Our accounting firm growth consulting helps you scale without burnout by addressing capacity planning, building delegation systems, standardizing service delivery, and creating sustainable growth infrastructure.",
    problemStatement: "Growing accounting firms often struggle with chaos, quality control issues, overwhelmed staff, and systems that break down under increased volume. Without AI-powered growth management, scaling becomes unpredictable and stressful.",
    solutionOverview: "Our AI-driven growth management systems ensure smooth scaling with predictive automated workflows, intelligent quality controls, and smart infrastructure that grows with you using data-driven insights without the typical growing pains.",
    keyBenefits: [
      {
        title: "Scalable Systems Architecture",
        description: "Build infrastructure that handles growth seamlessly without breaking down or requiring constant attention.",
        icon: "Building"
      },
      {
        title: "Quality Control Automation",
        description: "Maintain high service standards even as volume increases through automated quality checks and workflows.",
        icon: "Shield"
      },
      {
        title: "Team Efficiency Tools",
        description: "Equip your growing team with tools and processes that prevent overwhelm and maintain productivity.",
        icon: "Users"
      },
      {
        title: "Growth Monitoring Dashboard",
        description: "Track growth metrics and identify potential issues before they become problems.",
        icon: "BarChart"
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Growth Readiness Assessment",
        description: "Evaluate your current systems and identify potential bottlenecks before they constrain growth."
      },
      {
        step: 2,
        title: "Build Scalable Infrastructure",
        description: "Implement systems designed to handle increased volume without quality degradation."
      },
      {
        step: 3,
        title: "Deploy Growth Automation",
        description: "Set up automated workflows that maintain quality and efficiency as you scale."
      },
      {
        step: 4,
        title: "Monitor and Optimize",
        description: "Track growth metrics and continuously optimize systems for smooth scaling."
      }
    ],
    results: [
      {
        metric: "200%",
        value: "Capacity Increase",
        description: "Handle more clients without adding stress"
      },
      {
        metric: "90%",
        value: "Quality Maintenance",
        description: "Maintain service standards during growth"
      },
      {
        metric: "75%",
        value: "Less Growth Stress",
        description: "Reduce growing pains and overwhelm"
      }
    ],
    ctaTitle: "Scale Your Firm the Smart Way",
    ctaDescription: "Grow your practice without the typical chaos and stress. Book a call to see how we can build your growth infrastructure.",
    faqs: solutionFaqs
  };

  return <SolutionPageTemplate data={solutionData} />;
};

export default GrowWithoutPains;
