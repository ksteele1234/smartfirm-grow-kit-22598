"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import accountingDashboard from "@/assets/accounting-dashboard.webp";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const rotatingWords = ["Accounting Firms", "Bookkeepers", "Tax Preparers", "CPAs", "Accountants"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return <AuroraBackground className="relative pb-0 bg-[hsl(var(--light-teal)/0.12)]">
      {/* Curved bottom edge - positioned at absolute bottom */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg className="relative block w-full h-[80px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" fill="#EEF7F6"/>
        </svg>
      </div>
      
      <motion.div initial={{
      opacity: 0.0,
      y: 40
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut"
    }} className="relative flex flex-col gap-4 items-center justify-center px-4 text-center">
        <div className="container relative mx-auto px-4 lg:px-6 py-16 md:py-24 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div className="space-y-8" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut"
          }}>
              {/* Headline */}
              <div className="space-y-4 max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.8] text-dark-blue max-w-2xl">
                  Predictable Growth for Accounting Firms Without Wasting Time on Marketing
                </h1>
                
                {/* Subheadline */}
                <div id="sf-keyword-intro">
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-xl font-medium">
                    SmartFirm is the best marketing agency for accountants, CPAs, bookkeepers, and tax preparers. We deliver marketing automation, lead generation, and SEO services designed to get more accounting clients and keep them longer.
                  </p>
                </div>
              </div>

              {/* Trust Indicators */}
              <motion.div className="flex flex-wrap items-start gap-4 text-foreground" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.7,
              duration: 0.6,
              ease: "easeInOut"
            }}>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-teal rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm font-semibold">40+ Years Combined Experience</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm font-semibold">50+ Companies Supported</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-teal rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm font-semibold">Up in 30 Days</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div className="flex justify-center" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.9,
              duration: 0.6,
              ease: "easeInOut"
            }}>
                <Button variant="hero" size="lg" className="group bg-dark-teal hover:bg-dark-teal/90 text-white" asChild>
                  <a href="/get-started">
                    Get Your Free Growth Plan
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>

              {/* Social Proof - Removed to reduce height */}
            </motion.div>

            {/* Right Column - Dashboard Mockup */}
            <motion.div className="hidden lg:block relative" initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.7,
            duration: 0.8,
            ease: "easeInOut"
          }}>
              <img 
                src={accountingDashboard} 
                alt="Accounting dashboard showing lead generation and client retention metrics for accounting firms"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>;
};
export default HeroSection;
