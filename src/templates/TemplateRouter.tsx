import { useParams } from "react-router-dom";
import ServicePageTemplate from "./ServicePageTemplate";
import SolutionPageTemplate from "./SolutionPageTemplate";
import IndustryPageTemplate from "./IndustryPageTemplate";
import SuccessStoryTemplate from "./SuccessStoryTemplate";
import ResourcePageTemplate from "./ResourcePageTemplate";
import { 
  ServicePageData, 
  SolutionPageData, 
  IndustryPageData, 
  SuccessStoryData, 
  ResourcePageData 
} from "@/types/cms";

// This would typically connect to your CMS API
const fetchPageData = async (type: string, slug: string): Promise<any> => {
  // Replace this with your actual CMS API call
  // For now, returning sample data structure
  
  const sampleServiceData: ServicePageData = {
    id: "1",
    title: "Sample Service",
    slug: slug,
    content: {},
    heroTitle: "Professional Marketing Automation",
    heroSubtitle: "Streamline your marketing efforts with our comprehensive automation solutions",
    heroDescription: "Drive more leads and conversions with our proven marketing automation platform designed specifically for accounting firms.",
    heroImage: "/api/placeholder/600/400",
    benefits: [
      {
        title: "Increased Lead Generation",
        description: "Generate 3x more qualified leads with automated marketing campaigns."
      },
      {
        title: "Time Savings",
        description: "Save 15+ hours per week with automated follow-up sequences."
      },
      {
        title: "Better Client Retention",
        description: "Keep clients engaged with personalized communication."
      }
    ],
    features: [
      {
        title: "Email Marketing Automation",
        description: "Create sophisticated email sequences that nurture leads automatically.",
        details: [
          "Drag-and-drop email builder",
          "Advanced segmentation",
          "A/B testing capabilities",
          "Performance analytics"
        ]
      },
      {
        title: "Lead Scoring & Management",
        description: "Prioritize your best prospects with intelligent lead scoring.",
        details: [
          "Behavioral scoring",
          "Custom scoring criteria",
          "Automated lead routing",
          "CRM integration"
        ]
      }
    ],
    ctaTitle: "Ready to Transform Your Marketing?",
    ctaDescription: "Join hundreds of accounting firms already using our platform to grow their business.",
    ctaButtonText: "Get Started Today",
    ctaButtonLink: "/get-started-accounting-firm-automation/"
  };

  // Return appropriate sample data based on type
  switch (type) {
    case 'service':
      return sampleServiceData;
    default:
      return sampleServiceData;
  }
};

interface TemplateRouterProps {
  type: 'service' | 'solution' | 'industry' | 'success-story' | 'resource';
}

const TemplateRouter = ({ type }: TemplateRouterProps) => {
  const { slug } = useParams<{ slug: string }>();
  
  // In a real implementation, you would fetch data from your CMS here
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  
  // useEffect(() => {
  //   fetchPageData(type, slug).then(setData).finally(() => setLoading(false));
  // }, [type, slug]);
  
  // For demo purposes, using sample data
  const sampleData = {
    service: {
      id: "1",
      title: "Marketing Automation",
      slug: slug || "",
      content: {},
      heroTitle: "Professional Marketing Automation",
      heroSubtitle: "Streamline your marketing efforts with our comprehensive automation solutions",
      heroDescription: "Drive more leads and conversions with our proven marketing automation platform designed specifically for accounting firms.",
      benefits: [
        {
          title: "Increased Lead Generation",
          description: "Generate 3x more qualified leads with automated marketing campaigns."
        },
        {
          title: "Time Savings", 
          description: "Save 15+ hours per week with automated follow-up sequences."
        }
      ],
      features: [
        {
          title: "Email Marketing Automation",
          description: "Create sophisticated email sequences that nurture leads automatically.",
          details: ["Drag-and-drop email builder", "Advanced segmentation"]
        }
      ],
      ctaTitle: "Ready to Transform Your Marketing?",
      ctaDescription: "Join hundreds of accounting firms already using our platform.",
      ctaButtonText: "Get Started Today",
      ctaButtonLink: "/get-started-accounting-firm-automation/"
    } as ServicePageData,
    
    solution: {
      id: "1",
      title: "Lead Generation Solution",
      slug: slug || "",
      content: {},
      heroTitle: "Generate More Quality Leads",
      heroSubtitle: "Stop struggling with inconsistent lead flow",
      problemStatement: "Many accounting firms struggle with generating consistent, high-quality leads.",
      solutionOverview: "Our comprehensive lead generation system delivers qualified prospects consistently.",
      keyBenefits: [
        {
          title: "3x More Leads",
          description: "Generate significantly more qualified prospects for your firm."
        }
      ],
      howItWorks: [
        {
          step: 1,
          title: "Strategy Development",
          description: "We analyze your target market and create a custom lead generation strategy."
        }
      ],
      results: [
        {
          metric: "Lead Increase",
          value: "300%",
          description: "Average increase in qualified leads"
        }
      ],
      ctaTitle: "Start Generating More Leads",
      ctaDescription: "Book a strategy call to discuss your lead generation goals."
    } as SolutionPageData
  };
  
  switch (type) {
    case 'service':
      return <ServicePageTemplate data={sampleData.service} />;
    case 'solution':
      return <SolutionPageTemplate data={sampleData.solution} />;
    case 'industry':
      // Would need to add industry sample data
      return <div>Industry template (add sample data)</div>;
    case 'success-story':
      // Would need to add success story sample data
      return <div>Success story template (add sample data)</div>;
    case 'resource':
      // Would need to add resource sample data
      return <div>Resource template (add sample data)</div>;
    default:
      return <div>Template not found</div>;
  }
};

export default TemplateRouter;