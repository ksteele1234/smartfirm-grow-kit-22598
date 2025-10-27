import { EnhancedServicePageTemplate } from "@/templates/EnhancedServicePageTemplate";
import { servicePages } from "@/data/cmsPages";
import { serviceContentConfigs } from "@/lib/contentConfigs";

const MarketingAutomation = () => {
  const serviceData = servicePages['marketing-automation'];
  const contentConfig = serviceContentConfigs['marketing-automation'];

  return (
    <EnhancedServicePageTemplate 
      data={serviceData} 
      contentConfig={contentConfig}
    />
  );
};

export default MarketingAutomation;