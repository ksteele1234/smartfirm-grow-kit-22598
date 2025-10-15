"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import accountingDashboard from "@/assets/accounting-dashboard.webp";

const HeroSection = () => {
  return (
    <section className="relative pb-0 overflow-hidden" style={{ background: '#0a2e2e' }}>
      {/* Layered wave backgrounds */}
      <div className="absolute inset-0 z-0">
        {/* Base layer already set with inline style */}
        
        {/* Large wave from bottom-left - #134444 */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: '#134444',
            clipPath: 'ellipse(120% 40% at 0% 100%)',
            opacity: 0.8
          }}
        />
        
        {/* Second wave from bottom-right - #1a5555 */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: '#1a5555',
            clipPath: 'ellipse(110% 35% at 100% 100%)',
            opacity: 0.6
          }}
        />
        
        {/* Accent wave from top-right - #14b8a6 */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: '#14b8a6',
            clipPath: 'ellipse(80% 25% at 100% 0%)',
            opacity: 0.18
          }}
        />
        
        {/* Subtle orbital circles - removed for cleaner look */}
      </div>
      
      {/* Curved bottom edge */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg className="relative block w-full h-[80px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" fill="#ffffff"/>
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.8] max-w-2xl bg-gradient-to-r from-white via-[#5eead4] to-[#99f6e4] bg-clip-text text-transparent">
                  Predictable Growth for Accounting Firms Without Wasting Time on Marketing
                </h1>
                
                {/* Subheadline */}
                <div id="sf-keyword-intro">
                  <p className="text-lg md:text-xl leading-relaxed max-w-xl font-medium text-white" style={{ opacity: 0.6 }}>
                    SmartFirm is the best marketing agency for accountants, CPAs, bookkeepers, and tax preparers. We deliver marketing automation, lead generation, and SEO services designed to get more accounting clients and keep them longer.
                  </p>
                </div>
              </div>

              {/* Trust Indicators */}
              <motion.div className="flex flex-wrap items-start gap-4 text-white" initial={{
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
                  <div className="w-2 h-2 bg-[#5eead4] rounded-full mt-1.5 flex-shrink-0" style={{ boxShadow: '0 0 8px rgba(94, 234, 212, 0.6)' }}></div>
                  <span className="text-sm font-semibold">40+ Years Combined Experience</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#5eead4] rounded-full mt-1.5 flex-shrink-0" style={{ boxShadow: '0 0 8px rgba(94, 234, 212, 0.6)' }}></div>
                  <span className="text-sm font-semibold">50+ Companies Supported</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#5eead4] rounded-full mt-1.5 flex-shrink-0" style={{ boxShadow: '0 0 8px rgba(94, 234, 212, 0.6)' }}></div>
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
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-[#14b8a6] to-[#2dd4bf] hover:from-[#0d9488] hover:to-[#14b8a6] text-white font-semibold" 
                  asChild
                  style={{ boxShadow: '0 0 12px rgba(20, 184, 166, 0.3)' }}
                >
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
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-vibrant opacity-20 blur-3xl rounded-2xl"></div>
                <img 
                  src={accountingDashboard} 
                  alt="Accounting dashboard showing lead generation and client retention metrics for accounting firms"
                  className="relative w-full h-auto rounded-2xl shadow-glow border border-teal-vibrant/30"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
