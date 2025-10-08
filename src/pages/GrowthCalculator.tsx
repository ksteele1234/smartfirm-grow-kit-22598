import { useEffect } from "react";
import { CheckCircle2, TrendingDown, Users, AlertCircle } from "lucide-react";
import { FunnelHeader } from "@/components/navigation/FunnelHeader";
import { FunnelFooter } from "@/components/sections/FunnelFooter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const GrowthCalculator = () => {
  useEffect(() => {
    // Load LeadConnector form embed script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const scrollToForm = () => {
    document.getElementById("calculator-form")?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  const painPoints = [
    {
      icon: TrendingDown,
      title: "Unpredictable Revenue",
      description: "Monthly income swings make planning impossible"
    },
    {
      icon: Users,
      title: "Client Acquisition Struggles",
      description: "Inconsistent lead flow and low conversion rates"
    },
    {
      icon: AlertCircle,
      title: "Operational Bottlenecks",
      description: "Too much time on admin, not enough on growth"
    }
  ];

  const benefits = [
    "See exactly where your firm stands vs. industry benchmarks",
    "Identify your biggest growth opportunities in 60 seconds",
    "Get a personalized roadmap to scale your practice"
  ];

  const testimonials = [
    {
      name: "Grace Mendez",
      firm: "Mendez & Associates CPA",
      image: "/src/assets/grace-mendez.png",
      content: "The insights from this calculator completely changed how I think about growth. Within 90 days, we implemented the recommended strategies and saw a 40% increase in qualified leads.",
      rating: 5
    },
    {
      name: "Brian Hellewell",
      firm: "Hellewell Tax Partners",
      image: "/src/assets/brian-hellewell.png",
      content: "I was skeptical at first, but the personalized score showed me exactly where we were leaving money on the table. Best decision I made this year.",
      rating: 5
    }
  ];

  return (
    <>
      <SEO 
        title="Free Growth Calculator for Accounting Firms"
        description="Discover your firm's growth potential. Free calculator shows you exactly where you stand vs. industry benchmarks. Get your personalized growth score in 60 seconds."
        noindex={false}
      />
      
      <FunnelHeader />
      
      <main className="min-h-screen">
        {/* Hero Section with Form */}
        <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              {/* Chart Graphic */}
              <div className="mb-8 flex justify-center">
                <img 
                  src="/src/assets/revenue-growth-chart.png" 
                  alt="Revenue Growth Chart" 
                  className="w-64 h-auto"
                />
              </div>
              
              {/* Headline */}
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                How Much Revenue Is Your Firm Leaving on the Table?
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl text-muted-foreground mb-12">
                In just 60 seconds, discover how many new clients you could add this year with the right marketing system.
              </p>
              
              {/* Embedded Form */}
              <div id="calculator-form" className="bg-white rounded-lg shadow-xl p-6 max-w-2xl mx-auto">
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/SiWJkhgszdob40Rkfcs2"
                    style={{ width: "100%", height: "493px", border: "none", borderRadius: "3px" }}
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
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                You're Not Alone
              </h2>
              <p className="text-xl text-muted-foreground">
                Most accounting firm owners struggle with the same challenges:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {painPoints.map((point, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-[hsl(var(--smartfirm-blue-light))]/10 to-[hsl(var(--smartfirm-teal))]/10 rounded-lg p-8 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <point.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                What If You Could See Exactly Where Your Firm Stands?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our Growth Calculator compares your firm against industry benchmarks and reveals your hidden opportunities. In just 60 seconds, you'll understand:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-lg p-6 shadow-soft">
                  <div className="text-4xl font-bold text-primary mb-2">1.</div>
                  <h3 className="font-heading text-lg font-bold mb-2">Your Current Position</h3>
                  <p className="text-sm text-muted-foreground">How you stack up vs. similar firms</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-soft">
                  <div className="text-4xl font-bold text-primary mb-2">2.</div>
                  <h3 className="font-heading text-lg font-bold mb-2">Your Biggest Gaps</h3>
                  <p className="text-sm text-muted-foreground">Where you're losing revenue & clients</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-soft">
                  <div className="text-4xl font-bold text-primary mb-2">3.</div>
                  <h3 className="font-heading text-lg font-bold mb-2">Your Next Steps</h3>
                  <p className="text-sm text-muted-foreground">Personalized action plan to scale faster</p>
                </div>
              </div>

              <Button 
                onClick={scrollToForm}
                size="lg"
                className="text-lg px-8 py-6 h-auto"
              >
                Get My Free Growth Score Now
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                Join 500+ Firm Owners Who've Discovered Their Growth Potential
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-primary">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.firm}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Ready to Unlock Your Firm's Growth Potential?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Take the free 60-second assessment and get your personalized growth score + action plan.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  onClick={scrollToForm}
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6 h-auto bg-white text-primary hover:bg-white/90"
                >
                  Get Your Free Growth Score
                </Button>
                <div className="text-center sm:text-left">
                  <p className="text-sm text-white/80 mb-1">Prefer to talk? Call us:</p>
                  <a 
                    href="tel:15416583789"
                    className="text-xl font-bold hover:text-white/90 transition-colors"
                  >
                    1-541-658-3789
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold mb-1">98%</div>
                  <div className="text-sm text-white/80">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">94%</div>
                  <div className="text-sm text-white/80">Retention Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">30 Days</div>
                  <div className="text-sm text-white/80">To First Results</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FunnelFooter />
    </>
  );
};

export default GrowthCalculator;
