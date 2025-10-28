import { CheckCircle2 } from "lucide-react";
import katieSteeleImage from "@/assets/katie-steele.webp";
import brianHellewellImage from "@/assets/brian-hellewell.webp";

const FounderStory = () => {
  const whyCPAsOnly = [
    "We speak your language—utilization, realization, busy season",
    "We know the difference between $500 tax clients and $5K advisory retainers",
    "We understand compliance deadlines don't pause for marketing",
    "We specialize in technology integration with accounting tools and systems",
  ];

  const founders = [
    {
      name: "Katie Steele",
      title: "Founder & CEO",
      image: katieSteeleImage,
    },
    {
      name: "Brian Hellewell",
      title: "Technology Transformation Leader",
      image: brianHellewellImage,
    },
  ];

  return (
    <section className="pt-4 pb-[10px] bg-transparent">
      <div className="container mx-auto px-6 max-w-text-xl">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 lg:gap-16 md:gap-10">
          {/* LEFT COLUMN: Founder Story */}
          <div className="lg:col-span-6">
            {/* Headline */}
            <h2 className="text-[28px] lg:text-[28px] md:text-[26px] sm:text-2xl font-bold mb-5 text-foreground leading-[1.3]">
              Built By People Who Understand Your Business
            </h2>

            {/* Body Text */}
            <p className="text-[17px] md:text-base font-normal mb-8 text-foreground leading-[1.7]">
              SmartFirm was founded by Katie Steele and Brian Hellewell, CPA (Inactive) who bring 20+ years of experience in IT strategy, financial systems, and business optimization. Katie has spent over two decades transforming businesses—from turning around struggling hospitality brands to implementing enterprise-scale systems. Brian, a former SpaceX product manager, specializes in modernizing accounting firms with secure, scalable technology that integrates seamlessly with accounting tools.
            </p>
            
            <p className="text-[17px] md:text-base font-normal mb-8 text-foreground leading-[1.7]">
              Unlike agencies that dabble in every industry, we only work with accounting firms. We understand your metrics, your seasonality, and what it takes to scale from $400K to $1M+ without burning out your team.
            </p>

            {/* Founder Photos */}
            <div className="flex flex-row gap-4 mt-8 pb-8">
              {founders.map((founder, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center pb-6"
                >
                  <img
                    src={founder.image}
                    alt={`${founder.name} headshot`}
                    className="w-20 h-20 rounded-full object-cover border-[3px] border-accent-light elevation-1"
                  />
                  <div className="text-base font-semibold mt-2 text-center text-foreground mb-1">
                    {founder.name}
                  </div>
                  <div className="text-sm font-normal mt-1 text-center text-muted-foreground mb-4">
                    {founder.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Why Accounting Firms Only Box */}
          <div className="lg:col-span-4 self-start">
            <div className="rounded-card p-card bg-card border-2 border-primary elevation-2 hover-lift transition-all duration-300">
              {/* Headline */}
              <h3 className="text-xl font-bold mb-5 text-foreground">
                Why We Work Exclusively With CPAs
              </h3>

              {/* List */}
              <div className="flex flex-col gap-4">
                {whyCPAsOnly.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-base font-medium text-foreground leading-[1.5]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
