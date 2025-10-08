import { useEffect } from "react";
import SEO from "@/components/SEO";
import { FunnelHeader } from "@/components/navigation/FunnelHeader";
import { FunnelFooter } from "@/components/sections/FunnelFooter";
import { Button } from "@/components/ui/button";
import { CheckmarkIcon } from "@/components/ui/checkmark-icon";
import { Star } from "lucide-react";
import revenueChart from "@/assets/revenue-growth-chart.png";
import meetingPhoto from "@/assets/meeting-photo.png";
import danPhoto from "@/assets/testimonial-dan.png";
import joannaPhoto from "@/assets/testimonial-joanna.png";
import jennPhoto from "@/assets/testimonial-jenn.png";
import womanBlazer from "@/assets/woman-blazer.png";

const GrowthCalculator = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById("calculator-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <SEO 
        title="Growth Calculator - SmartFirm.io"
        description="Discover how much revenue your accounting firm is leaving on the table. Get instant clarity on your growth potential in just 60 seconds."
      />
      <FunnelHeader />

      {/* HERO SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <img 
                src={revenueChart} 
                alt="Revenue growth chart showing upward trend"
                className="w-72 h-auto"
              />
              
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary leading-tight">
                How Much Revenue Is Your Firm Leaving on the Table?
              </h1>
              
              <p className="text-lg text-gray-700">
                In just <span className="font-semibold text-primary">60 seconds</span>, discover how many new clients you could add this year with the <span className="font-semibold text-primary">right marketing system</span>.
              </p>
            </div>

            {/* Right Column - Form */}
            <div id="calculator-form" className="bg-white rounded-lg p-6 shadow-lg">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/O0M07sNaXcLcLWu3AJDA"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "4px",
                }}
                id="inline-O0M07sNaXcLcLWu3AJDA"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Growth Calculator Funnel"
                data-height="631"
                data-layout-iframe-id="inline-O0M07sNaXcLcLWu3AJDA"
                data-form-id="O0M07sNaXcLcLWu3AJDA"
                title="Growth Calculator Funnel"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white text-center mb-12">
            Why Most Accounting Firms Struggle to Grow
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 text-center space-y-4">
              <div className="flex justify-center">
                <CheckmarkIcon variant="blue-border" className="w-12 h-12" />
              </div>
              <p className="text-gray-800 font-medium">
                Client workload keeps increasing but growth doesn't
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center space-y-4">
              <div className="flex justify-center">
                <CheckmarkIcon variant="blue-border" className="w-12 h-12" />
              </div>
              <p className="text-gray-800 font-medium">
                Marketing feels overwhelming and eats up time you don't have
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center space-y-4">
              <div className="flex justify-center">
                <CheckmarkIcon variant="blue-border" className="w-12 h-12" />
              </div>
              <p className="text-gray-800 font-medium">
                Without a system, times plateau and miss out on predictable revenue
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR DESCRIPTION SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary leading-tight">
                A Calculator Built for Accountants Who Want Growth Without Guesswork
              </h2>
              
              <p className="text-lg text-gray-700">
                You already know your time is limited. This calculator gives you instant clarity on your growth potential using your numbers, not vague theory. In under a minute, you'll see exactly how much revenue you're missing and what it's worth to fix it.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckmarkIcon variant="solid" className="flex-shrink-0 mt-1" />
                  <span className="text-gray-800 font-medium">100% free and instant</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckmarkIcon variant="solid" className="flex-shrink-0 mt-1" />
                  <span className="text-gray-800 font-medium">Personalized to your firm</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckmarkIcon variant="solid" className="flex-shrink-0 mt-1" />
                  <span className="text-gray-800 font-medium">Built by marketing experts who understand accountants</span>
                </div>
              </div>

              <Button 
                onClick={scrollToForm}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-lg"
              >
                Calculate My Growth Potential
              </Button>
            </div>

            {/* Right Column - Image */}
            <div>
              <img 
                src={meetingPhoto} 
                alt="Business professionals in a meeting discussing growth strategies"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary text-center mb-12">
            Trusted by Growth-Minded Accounting Firms
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 - Dan */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="bg-primary p-6">
                <p className="text-white text-sm leading-relaxed">
                  "Client constantly tell us how easy it is to book with us now. The voice AI and chatbot answer questions and help clients pick up the phone. It's like having a full time receptionist and marketing assistant running 24/7."
                </p>
              </div>
              <div className="bg-[#FAFDD6] p-6 text-center space-y-3">
                <img 
                  src={danPhoto} 
                  alt="Dan, CPA Managing Partner"
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">- Dan</p>
                  <p className="text-sm text-gray-600">CPA, Managing Partner</p>
                </div>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Joanna */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="bg-primary p-6">
                <p className="text-white text-sm leading-relaxed">
                  "We doubled our monthly leads in 3 weeks. The AI tools are incredible our chat widget alone capture five new leads this first week. Worth getting real ROI from our marketing without having to do more work."
                </p>
              </div>
              <div className="bg-[#FAFDD6] p-6 text-center space-y-3">
                <img 
                  src={joannaPhoto} 
                  alt="Joanna, Registered Agent"
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">- Joanna</p>
                  <p className="text-sm text-gray-600">Registered Agent</p>
                </div>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial 3 - Jenn S. */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="bg-primary p-6">
                <p className="text-white text-sm leading-relaxed">
                  "This system gave me a peace of mind. I'm no longer stressed about marketing, wondering where the next client will come from. The follow-up automation run in the background so I can focus doing great work for my clients."
                </p>
              </div>
              <div className="bg-[#FAFDD6] p-6 text-center space-y-3">
                <img 
                  src={jennPhoto} 
                  alt="Jenn S., Bookkeeper"
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">- Jenn S.</p>
                  <p className="text-sm text-gray-600">Bookkeeper</p>
                </div>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA SECTION - Woman in Blazer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <img 
                src={womanBlazer} 
                alt="Professional businesswoman"
                className="w-full max-w-md h-auto"
              />
            </div>

            {/* Right Column - CTA Box */}
            <div className="bg-primary rounded-2xl p-10 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white leading-tight">
                Stop Guessing. Start Growing
              </h2>
              
              <p className="text-lg text-white">
                Find out your growth potential today it only takes <span className="font-semibold">60 seconds</span>.
              </p>

              <Button 
                onClick={scrollToForm}
                size="lg"
                className="bg-[#4D869C] hover:bg-[#4D869C]/90 text-white px-8 py-6 text-lg font-semibold rounded-lg w-full lg:w-auto"
              >
                Calculate My Growth Potential
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FunnelFooter />
    </>
  );
};

export default GrowthCalculator;
