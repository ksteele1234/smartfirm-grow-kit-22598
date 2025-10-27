import { EnhancedSolutionPageTemplate } from "@/templates/EnhancedSolutionPageTemplate";
import { solutionPages } from "@/data/cmsPages";
import { solutionContentConfigs } from "@/lib/contentConfigs";
import { getFaqsForPath } from "@/data/faqContent";

const ClientRetention = () => {
  const solutionFaqs = getFaqsForPath("/solutions/client-retention");
  const solutionData = {
    ...solutionPages['client-retention'],
    faqs: solutionFaqs
  };
  const contentConfig = solutionContentConfigs['client-retention'];

  return (
    <EnhancedSolutionPageTemplate 
      data={solutionData}
      contentConfig={contentConfig}
    />
  );
};

export default ClientRetention;
