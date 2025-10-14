import { useEffect } from "react";
import SEO from "@/components/SEO";
import { FunnelHeader } from "@/components/navigation/FunnelHeader";
import { FunnelFooter } from "@/components/sections/FunnelFooter";
import { Button } from "@/components/ui/button";
import { CheckmarkIcon } from "@/components/ui/checkmark-icon";
import { Star } from "lucide-react";
import revenueChart from "@/assets/revenue-growth-chart.png";
import meetingPhoto from "@/assets/meeting-photo.png";
import danPhoto from "@/assets/testimonial-dan.jpg";
import joannaPhoto from "@/assets/testimonial-joanna.jpg";
import jennPhoto from "@/assets/testimonial-jenn.jpg";
import womanBlazer from "@/assets/woman-blazer.png";
import womanPointingBlazer from "@/assets/woman-pointing-blazer.png";

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
                className="w-64 h-auto"
              />
              
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-[#4D869C] leading-tight">
                How Much Revenue Is Your Firm Leaving on the Table?
              </h1>
              
              <p className="text-lg text-gray-700">
                In just <span className="font-semibold text-[#4D869C]">60 seconds</span>, discover how many new clients you could add this year with the <span className="font-semibold text-[#4D869C]">right marketing system</span>.
              </p>
            </div>

            {/* Right Column - Form */}
            <div id="calculator-form" className="bg-white rounded-lg p-6 shadow-md min-h-[493px]">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/SiWJkhgszdob40Rkfcs2"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "3px",
                }}
                id="inline-SiWJkhgszdob40Rkfcs2"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Calculator"
                data-height="493"
                data-layout-iframe-id="inline-SiWJkhgszdob40Rkfcs2"
                data-form-id="SiWJkhgszdob40Rkfcs2"
                title="Calculator"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-8" style={{
        background: 'linear-gradient(to bottom, #6B8FB8 0%, #7AA0C5 50%, #8BA8C8 100%)'
      }}>
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#FAFDD6] text-center mb-8">
            Why Most Accounting Firms Struggle to Grow
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#FAFDD6] flex items-center justify-center" style={{ paddingTop: '10px', paddingLeft: '10px', paddingBottom: '10px', paddingRight: '5px' }}>
              <div className="flex items-center gap-3 w-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <circle cx="12" cy="12" r="11" fill="#4D869C" stroke="#4D869C" strokeWidth="2"/>
                  <path d="M8 8L16 16M16 8L8 16" stroke="#FAFDD6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[#4D869C] font-medium text-sm leading-tight">
                  Client workload keeps increasing, but growth doesn't.
                </p>
              </div>
            </div>

            <div className="bg-[#FAFDD6] flex items-center justify-center" style={{ paddingTop: '10px', paddingLeft: '10px', paddingBottom: '10px', paddingRight: '5px' }}>
              <div className="flex items-center gap-3 w-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <circle cx="12" cy="12" r="11" fill="#4D869C" stroke="#4D869C" strokeWidth="2"/>
                  <path d="M8 8L16 16M16 8L8 16" stroke="#FAFDD6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[#4D869C] font-medium text-sm leading-tight">
                  Marketing feels overwhelming and eats up time you don't have.
                </p>
              </div>
            </div>

            <div className="bg-[#FAFDD6] flex items-center justify-center" style={{ paddingTop: '10px', paddingLeft: '10px', paddingBottom: '10px', paddingRight: '5px' }}>
              <div className="flex items-center gap-3 w-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <circle cx="12" cy="12" r="11" fill="#4D869C" stroke="#4D869C" strokeWidth="2"/>
                  <path d="M8 8L16 16M16 8L8 16" stroke="#FAFDD6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[#4D869C] font-medium text-sm leading-tight">
                  Without a system, firms plateau and miss out on predictable revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR DESCRIPTION SECTION */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#4D869C] leading-tight">
                A Calculator Built for Accountants Who Want Growth Without Guesswork
              </h2>
              
              <p className="text-lg text-gray-700">
                You already know your time is limited. This calculator gives you instant clarity on your growth potential using your numbers, not vague theory.
              </p>
              
              <p className="text-lg text-gray-700">
                In under a minute, you'll see exactly <span className="font-bold">how much revenue you're missing</span> and <span className="font-bold">what it would take to fix it</span>.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
                    <circle cx="10" cy="10" r="10" fill="#4D869C"/>
                    <path d="M6 10L8.5 12.5L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray-800">100% free and instant</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
                    <circle cx="10" cy="10" r="10" fill="#4D869C"/>
                    <path d="M6 10L8.5 12.5L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray-800">Personalized to your firm</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
                    <circle cx="10" cy="10" r="10" fill="#4D869C"/>
                    <path d="M6 10L8.5 12.5L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray-800">Built by marketing experts who understand accountants</span>
                </div>
              </div>

              <Button 
                onClick={scrollToForm}
                size="lg"
                className="bg-[#7B8FC7] hover:bg-[#7B8FC7]/90 text-white px-8 py-6 text-lg font-semibold rounded-lg"
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

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {/* Testimonial 1 - Dan */}
            <div className="rounded-lg overflow-hidden shadow-md flex flex-col h-full">
              <div className="bg-[#7B8FC7] p-8 flex-1 flex items-center">
                <p className="text-[#FAFDD6] text-sm leading-relaxed">
                  "Client constantly tell us how easy it is to book with us now. The voice AI and chatbot answer questions and help clients pick up the phone. It's like having a full time receptionist and marketing assistant running 24/7."
                </p>
              </div>
              <div className="bg-[#FAFDD6] p-6 text-center space-y-4">
                <img 
                  src={danPhoto} 
                  alt="Dan, CPA Managing Partner"
                  className="w-24 h-24 mx-auto object-cover border-4 border-white shadow-md rounded-full -mt-12"
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
            <div className="rounded-lg overflow-hidden shadow-md flex flex-col h-full">
              <div className="bg-[#7B8FC7] p-8 flex-1 flex items-center">
                <p className="text-[#FAFDD6] text-sm leading-relaxed">
                  "We doubled our monthly leads in 3 weeks. The AI tools are incredible our chat widget alone capture five new leads this first week. Worth getting real ROI from our marketing without having to do more work."
                </p>
              </div>
              <div className="bg-[#FAFDD6] p-6 text-center space-y-4">
                <img 
                  src={joannaPhoto} 
                  alt="Joanna, Registered Agent"
                  className="w-24 h-24 mx-auto object-cover border-4 border-white shadow-md rounded-full -mt-12"
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
            <div className="rounded-lg overflow-hidden shadow-md flex flex-col h-full">
              <div className="bg-[#7B8FC7] p-8 flex-1 flex items-center">
                <p className="text-[#FAFDD6] text-sm leading-relaxed">
                  "This system gave me a peace of mind. I'm no longer stressed about marketing, wondering where the next client will come from. The follow-up automation run in the background so I can focus doing great work for my clients."
                </p>
              </div>
              <div className="bg-[#FAFDD6] p-6 text-center space-y-4">
                <img 
                  src={jennPhoto} 
                  alt="Jenn S., Bookkeeper"
                  className="w-24 h-24 mx-auto object-cover border-4 border-white shadow-md rounded-full -mt-12"
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
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="relative w-full max-w-[730px]">
            {/* Woman image - positioned absolutely to extend beyond gradient box */}
            <div className="absolute left-0 -top-20 md:-top-24 z-10 w-[240px] md:w-[260px]">
              <img 
                src={womanPointingBlazer}
                alt="Professional accountant pointing at growth calculator"
                className="w-full h-auto"
              />
            </div>
            
            {/* Gradient box with content */}
            <div className="relative h-[155px] rounded-xl overflow-hidden" style={{
              background: 'linear-gradient(to right, #91ADC8 0%, #91ADC8 40%, #647FBC 100%)'
            }}>
              <div className="absolute inset-0 flex items-center" style={{
                paddingLeft: '290px',
                paddingRight: '45px'
              }}>
                <div className="space-y-3">
                  <h2 className="font-heading font-bold text-white leading-tight" style={{
                    fontSize: '34px',
                    lineHeight: '1.15'
                  }}>
                    Stop Guessing. Start Growing
                  </h2>
                  <p className="text-white text-[15px] font-normal leading-snug">
                    Find out your growth potential today – it only takes 60 seconds
                  </p>
                  <Button 
                    onClick={scrollToForm}
                    className="mt-4 h-[42px] px-6 text-[14px] font-medium text-white rounded-lg shadow-md hover:opacity-90 transition-opacity"
                    style={{
                      backgroundColor: '#4D869C',
                      width: '210px'
                    }}
                  >
                    Calculate My Growth Potential
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FunnelFooter />
    </>
  );
};

export default GrowthCalculator;
