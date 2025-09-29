import SolutionPageTemplate from "@/templates/SolutionPageTemplate";
import { SolutionPageData } from "@/types/cms";

const GrowWithoutPains = () => {
  const solutionData: SolutionPageData = {
    id: "grow-without-pains",
    title: "Grow Without the Growing Pains",
    slug: "grow-without-growing-pains",
    metaDescription: "Scale your accounting firm smoothly with systems that handle growth efficiently, avoiding the typical growing pains that overwhelm expanding practices.",
    content: {},
    heroTitle: "Grow Without the Growing Pains",
    heroSubtitle: "Scale your firm smoothly with systems that handle growth efficiently, avoiding overwhelm and maintaining quality",
    problemStatement: "Growing accounting firms often struggle with chaos, quality control issues, overwhelmed staff, and systems that break down under increased volume.",
    solutionOverview: "Our growth management systems ensure smooth scaling with automated workflows, quality controls, and infrastructure that grows with you without the typical growing pains.",
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
    ctaDescription: "Grow your practice without the typical chaos and stress. Book a call to see how we can build your growth infrastructure."
  };

  return <SolutionPageTemplate data={solutionData} />;
};

export default GrowWithoutPains;