"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <AuroraBackground className="h-[100vh]" showRadialGradient={false}>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 text-center"
      >
        <div className="container relative mx-auto px-4 lg:px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
            >
              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-heading font-bold text-primary leading-tight">
                  Marketing for Accounting Firms That
                  <span className="text-teal block">
                    Actually Drives Growth
                  </span>
                </h1>
                
                {/* Subheadline */}
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-body">
                  Stop wasting time on marketing strategies that don't work. Our proven accounting firm marketing automation helps CPAs attract more qualified clients and scale their practice efficiently.
                </p>
              </div>

              {/* Trust Indicators */}
              <motion.div 
                className="flex items-center space-x-6 text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span className="text-sm font-medium">500+ Firms Served</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">2.5x Average ROI</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span className="text-sm font-medium">30 Day Results</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6, ease: "easeInOut" }}
              >
                <Button variant="hero" size="hero" className="group">
                  Get Your Free Growth Plan
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" size="lg" className="group">
                  <Play className="mr-2 h-5 w-5" />
                  See Our Services
                </Button>
              </motion.div>

              {/* Social Proof */}
              <motion.div 
                className="pt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6, ease: "easeInOut" }}
              >
                <p className="text-sm text-muted-foreground mb-4 font-medium">
                  Trusted by leading accounting firms nationwide
                </p>
                <div className="flex items-center space-x-8 opacity-60">
                  <div className="text-muted-foreground font-semibold text-lg">CPA Firm A</div>
                  <div className="text-muted-foreground font-semibold text-lg">Accounting Plus</div>
                  <div className="text-muted-foreground font-semibold text-lg">TaxPro Services</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Element */}
            <motion.div 
              className="hidden lg:block relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
            >
              <div className="relative">
                {/* Floating Cards */}
                <motion.div 
                  className="absolute -top-8 -left-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-border/50 z-10"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal/20 rounded-lg flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-teal" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">Lead Generation</div>
                      <div className="text-xs text-muted-foreground">+240% increase</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-border/50 z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Play className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">Client Retention</div>
                      <div className="text-xs text-muted-foreground">95% satisfaction</div>
                    </div>
                  </div>
                </motion.div>

                {/* Main Visual */}
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0, duration: 0.8, ease: "easeInOut" }}
                >
                  <div className="space-y-4">
                    <motion.div 
                      className="h-4 bg-primary/30 rounded-full w-3/4"
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ delay: 1.6, duration: 0.8, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className="h-4 bg-teal/30 rounded-full w-1/2"
                      initial={{ width: 0 }}
                      whileInView={{ width: "50%" }}
                      transition={{ delay: 1.8, duration: 0.8, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className="h-4 bg-secondary/30 rounded-full w-2/3"
                      initial={{ width: 0 }}
                      whileInView={{ width: "66.67%" }}
                      transition={{ delay: 2.0, duration: 0.8, ease: "easeInOut" }}
                    />
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <motion.div 
                        className="h-20 bg-white/40 backdrop-blur-sm rounded-lg shadow-sm border border-white/30"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.2, duration: 0.6, ease: "easeInOut" }}
                      />
                      <motion.div 
                        className="h-20 bg-white/40 backdrop-blur-sm rounded-lg shadow-sm border border-white/30"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.4, duration: 0.6, ease: "easeInOut" }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default HeroSection;