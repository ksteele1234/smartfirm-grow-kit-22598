import { motion } from "framer-motion";
import { Target, Zap, CheckCircle, TrendingUp, Clock, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";
import { useIsMobile } from "@/hooks/use-mobile";
import { CurvedSeparator } from "@/components/ui/curved-separator";

const SingleProcessAITransformation = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <SEO 
        title="Single-Process AI Optimization | SmartFirm"
        description="Turn your biggest bottleneck into a clear action plan. Focused 1-week AI optimization that delivers real results."
        canonicalUrl="https://smartfirm.io/services/single-process-ai-transformation"
      />
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-muted-blue text-white overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Single-Process AI Optimization
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 italic mb-8"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Turn Your Biggest Bottleneck Into a Clear Action Plan.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                variant="coral"
                className="px-8 py-4 text-lg font-bold color-transition group"
                asChild
              >
                <a href="/get-started">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          </div>
          <CurvedSeparator 
            className="absolute bottom-0 left-0 w-full text-white"
          />
        </section>

        {/* The Challenge Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-primary"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              The Challenge You're Facing
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-lg text-slate-dark"
            >
              <p>
                You know exactly where your business is bleeding time and money. Maybe it's your proposal process taking 8 hours per client. Or your customer onboarding creating chaos. Or data entry consuming entire workdays.
              </p>
              <p className="text-xl font-semibold text-secondary">
                You don't need a complete overhaul. You need a plan to solve this one problem.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Is It Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-lighter">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-primary"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              What Is a Single-Process AI Optimization?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-lg text-slate-dark"
            >
              <p>
                A focused 1-week engagement that analyzes one critical business process, identifies AI solutions, and delivers a clear implementation plan with ROI projections.
              </p>
              <p className="text-xl font-semibold text-secondary">
                This is your fastest path from pain point to solution.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              How It Works
            </motion.h2>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-l-4 border-primary pl-6"
              >
                <h3 className="text-xl font-bold text-secondary mb-2">DAYS 1-2: Process Deep Dive</h3>
                <p className="text-lg text-slate-dark">
                  We interview 2-3 key team members involved in this process and map the current workflow from start to finish.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="border-l-4 border-primary pl-6"
              >
                <h3 className="text-xl font-bold text-secondary mb-2">DAYS 3-4: Solution Design</h3>
                <p className="text-lg text-slate-dark">
                  We identify AI opportunities specific to your process, assess technical feasibility, and design 2-3 implementation options.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="border-l-4 border-primary pl-6"
              >
                <h3 className="text-xl font-bold text-secondary mb-2">DAY 5: Validation & Roadmap Delivery</h3>
                <p className="text-lg text-slate-dark">
                  We validate solutions with your team and deliver a prioritized action plan with timeline and cost estimates.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What You Receive Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-lighter">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              What You Receive
            </motion.h2>
            <div className="space-y-6">
              {[
                {
                  title: "Detailed Process Map",
                  description: "Visual documentation of your current workflow with identified pain points"
                },
                {
                  title: "Solution Options",
                  description: "2-3 AI implementations ranked by impact, cost, and complexity"
                },
                {
                  title: "90-Day Action Plan",
                  description: "Step-by-step implementation roadmap"
                },
                {
                  title: "ROI Analysis",
                  description: "Time savings, cost reduction, and payback period calculations"
                },
                {
                  title: "Implementation Guide",
                  description: "Technical requirements and recommended tools or partners"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-secondary mb-1">{item.title}</h3>
                    <p className="text-slate-dark">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Perfect For
            </motion.h2>
            <div className="space-y-4">
              {[
                "Testing AI optimization before committing to a full transformation",
                "Addressing an urgent bottleneck that's costing you daily",
                "Getting quick wins to build internal momentum for AI adoption",
                "Small businesses with limited budgets but specific pain points"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-3 items-start"
                >
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-dark">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Outcome Section - Dark Background */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-deep-teal text-white">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-12 text-white text-center"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              The Outcome
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Speed",
                  description: "From problem to plan in just 5 business days"
                },
                {
                  icon: Target,
                  title: "Focus",
                  description: "No overwhelming strategy documents—just solutions for this issue"
                },
                {
                  icon: DollarSign,
                  title: "ROI",
                  description: "Most clients see 10-30x return on investment within 90 days"
                },
                {
                  icon: TrendingUp,
                  title: "Momentum",
                  description: "Prove AI value with a targeted win before scaling up"
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <Icon className="w-12 h-12 mx-auto mb-4 text-white" />
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-white/90">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-lighter">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-12 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-secondary mb-4">Investment</h2>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-4">$1,500</div>
              <p className="text-lg text-slate-dark italic">
                *Can be applied toward a full AI Transformation Roadmap if you choose to expand.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-muted-blue text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Ready to Solve Your Biggest Bottleneck?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8 text-white italic"
            >
              "One process. One week. Real results."
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button 
                size="lg" 
                variant="coral"
                className="px-8 py-4 text-lg font-bold color-transition group"
                asChild
              >
                <a href="/get-started">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SingleProcessAITransformation;
