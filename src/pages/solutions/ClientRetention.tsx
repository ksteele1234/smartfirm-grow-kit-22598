import SolutionPageTemplate from "@/templates/SolutionPageTemplate";
import { solutionPages } from "@/data/cmsPages";
import { getFaqsForPath } from "@/data/faqContent";

const ClientRetention = () => {
  const solutionFaqs = getFaqsForPath("/solutions/client-retention");
  const solutionData = {
    ...solutionPages['client-retention'],
    faqs: solutionFaqs
  };

  return (
    <SolutionPageTemplate 
      data={solutionData}
    />
  );
};

export default ClientRetention;
