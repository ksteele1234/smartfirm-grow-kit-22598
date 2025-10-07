"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const rotatingWords = ["Accounting Firms", "Bookkeepers", "Tax Preparers", "CPAs", "Accountants"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return <AuroraBackground className="h-[100vh]">
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
        <div className="container relative mx-auto px-4 lg:px-6 py-20">
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
                <h1 className="text-4xl lg:text-6xl font-heading font-extrabold leading-tight tracking-wide" style={{ color: '#0F172A' }}>
                  Marketing Automation for Accounting Firms{" "}
                  <span className="block">That Delivers Predictable Growth</span>
                </h1>
                
                {/* Subheadline */}
                <div id="sf-keyword-intro">
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-body max-w-xl">Marketing automation for accounting firms designed by SmartFirm helps accountants, CPAs, bookkeepers, and tax preparers generate more leads, retain clients longer, and free up time to focus on what matters most.</p>
                </div>
              </div>

              {/* Trust Indicators */}
              <motion.div className="flex items-center space-x-6 text-muted-foreground" initial={{
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
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span className="text-sm font-medium">40+ Years of Combined Business & Marketing Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">50+ Companies Supported Across Industries</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span className="text-sm font-medium">Your Firm Running in Under 30 Days</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div className="flex flex-col sm:flex-row gap-4" initial={{
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
                <Button variant="teal-bold" size="hero" className="group" asChild>
                  <a href="/get-started">
                    Book My Free Growth Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                
                <Button variant="white-outline-on-dark" size="lg" className="group" asChild>
                  <a href="#how-it-works">
                    <Play className="mr-2 h-5 w-5" />
                    Show Me the System
                  </a>
                </Button>
              </motion.div>

              {/* Social Proof */}
              <motion.div className="pt-8" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} transition={{
              delay: 1.1,
              duration: 0.6,
              ease: "easeInOut"
            }}>
                <p className="text-sm text-muted-foreground mb-4 font-medium">
                  Backed by Experience, Trusted by Firms Across Industries
                </p>
                <div className="flex items-center space-x-8 opacity-60">
                  <div className="text-muted-foreground font-semibold text-lg">CPA Firm A</div>
                  <div className="text-muted-foreground font-semibold text-lg">Accounting Plus</div>
                  <div className="text-muted-foreground font-semibold text-lg">TaxPro Services</div>
                </div>
              </motion.div>
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
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-teal flex items-center justify-center text-white font-bold">
                      A
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Accounting Dashboard</div>
                      <div className="text-xs text-gray-500">SmartFirm Analytics</div>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.div className="bg-gradient-to-br from-teal/10 to-teal/5 p-4 rounded-lg border border-teal/20" initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 1.0,
                  duration: 0.5
                }}>
                    <div className="text-xs text-gray-600 mb-1">New Leads</div>
                    <div className="text-2xl font-bold text-teal">+147</div>
                    <div className="text-xs text-green-600">↑ 32% this month</div>
                  </motion.div>
                  
                  <motion.div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-lg border border-primary/20" initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 1.2,
                  duration: 0.5
                }}>
                    <div className="text-xs text-gray-600 mb-1">Client Retention</div>
                    <div className="text-2xl font-bold text-primary">94%</div>
                    <div className="text-xs text-green-600">↑ 8% improvement</div>
                  </motion.div>
                </div>

                {/* Chart Visualization */}
                <motion.div className="space-y-3" initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} transition={{
                delay: 1.4,
                duration: 0.6
              }}>
                  <div className="text-xs font-semibold text-gray-700 mb-2">Pipeline Growth</div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="text-xs text-gray-500 w-12">Jan</div>
                      <motion.div className="h-3 bg-gradient-to-r from-teal to-teal/60 rounded-full" initial={{
                      width: 0
                    }} whileInView={{
                      width: "60%"
                    }} transition={{
                      delay: 1.6,
                      duration: 0.8
                    }} />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-xs text-gray-500 w-12">Feb</div>
                      <motion.div className="h-3 bg-gradient-to-r from-primary to-primary/60 rounded-full" initial={{
                      width: 0
                    }} whileInView={{
                      width: "75%"
                    }} transition={{
                      delay: 1.8,
                      duration: 0.8
                    }} />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-xs text-gray-500 w-12">Mar</div>
                      <motion.div className="h-3 bg-gradient-to-r from-teal to-primary rounded-full" initial={{
                      width: 0
                    }} whileInView={{
                      width: "90%"
                    }} transition={{
                      delay: 2.0,
                      duration: 0.8
                    }} />
                    </div>
                  </div>
                </motion.div>

                {/* Bottom Stats */}
                <motion.div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-gray-200" initial={{
                opacity: 0,
                y: 10
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 2.2,
                duration: 0.5
              }}>
                  <div className="text-center">
                    <div className="text-xs text-gray-500">Conversion</div>
                    <div className="text-sm font-bold text-gray-900">23%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500">Avg Deal</div>
                    <div className="text-sm font-bold text-gray-900">$4.2K</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500">ROI</div>
                    <div className="text-sm font-bold text-green-600">340%</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>;
};
export default HeroSection;