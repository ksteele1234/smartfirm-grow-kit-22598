import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { servicePages } from "@/data/cmsPages";
import SEO from "@/components/SEO";

const MarketingAutomation = () => {
  const serviceData = servicePages['marketing-automation'];

  return (
    <ServicePageTemplate 
      data={serviceData}
    />
  );
};

export default MarketingAutomation;