import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { servicePages } from "@/data/cmsPages";
import SEO from "@/components/SEO";
import RelatedContent from "@/components/sections/RelatedContent";
import { getRelationships } from "@/config/internalLinks";

const MarketingAutomation = () => {
  const serviceData = servicePages['marketing-automation'];
  const links = getRelationships("/services/marketing-automation-for-accounting-firms");

  return (
    <ServicePageTemplate
      data={serviceData}
      beforeFinalCta={
        <>
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
          {links.relatedServices && (
            <RelatedContent heading="Related Services" items={links.relatedServices} />
          )}
          {links.relatedSolutions && (
            <RelatedContent heading="Solutions This Supports" items={links.relatedSolutions} variant="teal" />
          )}
          {links.relatedTools && (
            <RelatedContent heading="Free Tools" items={links.relatedTools} />
          )}
        </>
      }
    />
  );
};

export default MarketingAutomation;