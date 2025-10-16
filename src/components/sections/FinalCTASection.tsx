import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FinalCTASection = () => {
  return (
    <section className="relative py-20 md:py-[100px] lg:py-[120px] px-6 bg-gradient-to-b from-[#243b55] to-[#4a7ba7] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
      </div>

      <div className="container relative mx-auto max-w-[700px]">
        <div className="mx-auto text-center">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Are You Serious About Scaling to $1M?
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-white/70 leading-relaxed max-w-[600px] mx-auto mb-10">
            Join 40+ companies building the marketing foundation that drives consistent growth. Early adopter pricing ends soon—start now and see results in 30 days.
          </p>

          {/* Primary CTA Button */}
          <div className="flex flex-col items-center mb-4">
            <Button
              size="lg"
              asChild
              className="px-12 py-5 text-xl font-bold bg-gradient-to-r from-[#fb7185] to-[#f43f5e] text-white hover:translate-y-[-2px] shadow-[0_8px_32px_rgba(251,113,133,0.6)] hover:shadow-[0_12px_40px_rgba(251,113,133,0.7)] transition-all duration-300 rounded-xl animate-[pulse_2s_ease-in-out_infinite]"
            >
              <Link to="/get-started">
                Book Your Free Strategy Call
              </Link>
            </Button>
          </div>

          {/* Reassurance Text */}
          <p className="text-sm text-white/60 text-center">
            No commitment required • 30-minute consultation
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
