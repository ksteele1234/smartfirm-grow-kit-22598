import { useState } from "react";
import { FunnelHeader } from "@/components/navigation/FunnelHeader";
import { FunnelFooter } from "@/components/sections/FunnelFooter";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Sparkles, Zap, Target, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const AITransformationOffer = () => {
  const [videoError, setVideoError] = useState(false);

  const outcomes = [
    {
      icon: Target,
      title: "Clarity",
      description: "Know exactly where AI creates value"
    },
    {
      icon: CheckCircle,
      title: "Confidence",
      description: "Move forward with validated solutions"
    },
    {
      icon: TrendingUp,
      title: "Competitive Advantage",
      description: "Implement strategic AI early"
    },
    {
      icon: Sparkles,
      title: "Partnership",
      description: "We become your transformation partner"
    }
  ];

  const deliverables = [
    "Detailed Process Maps",
    "Opportunity Matrix",
    "12-Month Roadmap",
    "ROI Projections",
    "Executive Presentation"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        pageType="service"
        serviceName="AI Transformation Roadmap - Limited Time Offer"
        audience="accounting firms"
        title="AI Transformation Roadmap - PASBA Member Exclusive | SmartFirm"
        description="Get a clear 12-month AI strategy. Exclusive PASBA member pricing: $7,500 (regular $9,999) through November. Limited availability."
        canonicalUrl="https://smartfirm.io/ai-transformation-offer"
        noindex={true}
      />
      
      <FunnelHeader />
      
      <main id="main-content" role="main">
        {/* Hero Section with Video */}
        <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-mesh-professional">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtMS4xLS45LTItMi0yaC04Yy0xLjEgMC0yIC45LTIgMnY4YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMnYtOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <Badge className="bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold border-0">
                <Sparkles className="w-4 h-4 mr-2" />
                PASBA Member Exclusive
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white text-center mb-6 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Get a Clear 12-Month
              <br />
              <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                AI Transformation Roadmap
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 text-center mb-8 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Your competitors are implementing AI. Your team is overwhelmed.
              <br />
              <span className="font-semibold text-white">Get clarity, confidence, and a strategic plan.</span>
            </motion.p>

            {/* Video Embed */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white/10 backdrop-blur-sm">
                {!videoError ? (
                  <div className="aspect-video w-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    {/* Placeholder for video - user will add their video URL */}
                    <div className="text-center p-8">
                      <Zap className="w-16 h-16 mx-auto mb-4 text-coral animate-pulse" />
                      <p className="text-white text-lg font-semibold mb-2">Video Coming Soon</p>
                      <p className="text-white/70 text-sm">Add your video URL to embed it here</p>
                    </div>
                    {/* To add video, replace above div with:
                    <iframe
                      src="YOUR_VIDEO_URL"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="AI Transformation Roadmap Overview"
                    ></iframe>
                    */}
                  </div>
                ) : (
                  <div className="aspect-video w-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <p className="text-white">Video unavailable</p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20"
            >
              <div className="text-center">
                <p className="text-white/80 text-lg mb-2">Investment</p>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-white/60 text-3xl line-through font-bold">$9,999</span>
                  <span className="text-accent text-5xl md:text-6xl font-bold">$7,500</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <p className="text-white font-semibold">PASBA Members Only - Through November</p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <Button
                size="lg"
                className="px-12 py-6 text-xl font-bold bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl shadow-2xl hover:shadow-accent/50 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="/get-started">
                  Book Your Free Strategy Call
                  <ArrowRight className="ml-2 h-6 w-6" />
                </a>
              </Button>
              <p className="text-white/70 text-sm mt-4">Limited availability - First come, first served</p>
            </motion.div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-[80px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" className="fill-background" />
            </svg>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-20 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                The Challenge
              </h2>
              <p className="text-xl text-foreground leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Competitors are implementing AI. Your team is overwhelmed. "Where do we start?"
              </p>
              <p className="text-2xl font-bold text-secondary" style={{ fontFamily: "'Poppins', sans-serif" }}>
                You need a strategic plan, not just another tool.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What You Receive */}
        <section className="py-20 px-6 bg-background-light">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-primary text-center mb-12"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              What You Receive
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {deliverables.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-slate-light"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-lg font-semibold text-secondary" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {item}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Outcome */}
        <section className="py-20 px-6 bg-gradient-deep-teal">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-white text-center mb-16"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              The Outcome
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4 backdrop-blur-sm border border-white/20">
                    <outcome.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {outcome.title}
                  </h3>
                  <p className="text-white/80" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {outcome.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-foreground mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Join other forward-thinking firms who are implementing strategic AI before their competition.
              </p>
              
              <div className="bg-gradient-to-br from-coral/10 to-gold/10 rounded-2xl p-8 mb-8 border-2 border-coral/20">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-muted-foreground text-2xl line-through font-bold">$9,999</span>
                  <span className="text-accent text-5xl font-bold">$7,500</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <p className="text-foreground font-semibold">PASBA Members - Through November Only</p>
                </div>
              </div>

              <Button
                size="lg"
                className="px-12 py-6 text-xl font-bold bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="/get-started">
                  Book Your Free Strategy Call
                  <ArrowRight className="ml-2 h-6 w-6" />
                </a>
              </Button>
              <p className="text-muted-foreground text-sm mt-4">No commitment required - Let's discuss your AI transformation goals</p>
            </motion.div>
          </div>
        </section>
      </main>

      <FunnelFooter />
    </div>
  );
};

export default AITransformationOffer;
