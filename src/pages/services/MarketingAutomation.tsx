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
              Want to re-engage dormant clients? Our{" "}
              <a href="/services/email-marketing-for-accounting-firms/" className="text-primary font-semibold underline hover:text-secondary transition-colors">
                Email Marketing service
              </a>{" "}
              includes targeted reactivation campaigns for past clients and prospects.
            </p>
          </div>
        </section>
      }
    />
  );
};

export default MarketingAutomation;