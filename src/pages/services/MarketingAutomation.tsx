import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { servicePages } from "@/data/cmsPages";
import SEO from "@/components/SEO";

const MarketingAutomation = () => {
  const serviceData = servicePages['marketing-automation'];

  return (
    <ServicePageTemplate
      data={serviceData}
      beforeFinalCta={
        <section className="py-10 px-6 md:px-12 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-foreground font-medium">
              Have a dormant client list? Our{" "}
              <a href="/list-reactivation-offer/" className="text-primary font-semibold underline hover:text-secondary transition-colors">
                List Reactivation Program
              </a>{" "}
              re-engages past clients and prospects with targeted campaigns.
            </p>
          </div>
        </section>
      }
    />
  );
};

export default MarketingAutomation;