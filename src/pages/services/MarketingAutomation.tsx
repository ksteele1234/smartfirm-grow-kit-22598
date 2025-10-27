import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { servicePages } from "@/data/cmsPages";

const MarketingAutomation = () => {
  const serviceData = servicePages['marketing-automation'];

  return (
    <ServicePageTemplate 
      data={serviceData}
    />
  );
};

export default MarketingAutomation;