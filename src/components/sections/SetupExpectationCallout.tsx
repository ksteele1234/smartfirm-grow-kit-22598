import { Info } from "lucide-react";

const SetupExpectationCallout = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-[900px] mx-auto bg-[#FAFDD6] border-2 border-[#0F4C5C] rounded-xl p-6 md:py-8 md:px-10 flex flex-col md:flex-row gap-3 md:gap-5 items-start">
          {/* Icon */}
          <div className="flex-shrink-0">
            <Info className="w-6 h-6 text-[#0F4C5C]" aria-hidden="true" />
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-[#334260] mb-3">
              What to Expect During Setup
            </h3>
            <p className="text-base font-normal text-[#333333] leading-relaxed">
              Getting your marketing foundation right requires collaboration. During the first 4-6 weeks, we'll need your input on positioning, ideal clients, and brand messaging. We handle all the technical work—you provide the strategic direction. Once setup is complete, we run everything with minimal time from your team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupExpectationCallout;
