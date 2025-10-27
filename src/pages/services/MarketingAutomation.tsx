import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { servicePages } from "@/data/cmsPages";
import { serviceContentConfigs } from "@/lib/contentConfigs";

const MarketingAutomation = () => {
  const serviceData = servicePages['marketing-automation'];
  const contentConfig = serviceContentConfigs['marketing-automation'];

  return (
    <ServicePageTemplate 
      data={serviceData} 
      contentConfig={contentConfig}
    />
  );
};

export default MarketingAutomation;