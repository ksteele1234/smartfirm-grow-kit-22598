import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

type Step = "input" | "result" | "complete";

export const HiddenRevenueCalculator = () => {
  const [step, setStep] = useState<Step>("input");
  const [clientCount, setClientCount] = useState<string>("");
  const [avgFee, setAvgFee] = useState<string>("2500");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [calculatedRevenue, setCalculatedRevenue] = useState(0);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleCalculate = () => {
    const clients = parseInt(clientCount) || 0;
    const fee = parseInt(avgFee) || 2500;
    const revenue = clients * 0.10 * fee;
    setCalculatedRevenue(revenue);
    setStep("result");
    
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleEmailSubmit = async () => {
    if (!isValidEmail(email)) return;
    
    setIsSubmitting(true);
    
    // Console.log for verification
    console.log("Calculator Lead Payload:", {
      email: email,
      client_count: parseInt(clientCount) || 0,
      avg_fee: parseInt(avgFee) || 2500,
      calculated_revenue: calculatedRevenue,
      source: "calculator-lead-magnet"
    });

    // Webhook ready for later activation:
    // POST to: https://services.leadconnectorhq.com/hooks/HWYLT2eSYyS0OaDGKN2O/webhook-trigger/336f6923-4797-4b75-996d-11dba22a2c2c

    // Simulate brief delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setIsSubmitting(false);
    setStep("complete");
  };

  return (
    <section id="revenue-calculator" className="py-12">
      <div className="max-w-2xl mx-auto">
        {/* Step 1: Input Form */}
        <AnimatePresence mode="wait">
          {step === "input" && (
            <motion.div
              key="input"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-light"
            >
              <h3 
                className="text-xl md:text-2xl font-bold text-primary text-center mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                How much revenue is hiding in your dead files?
              </h3>
              
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Past clients in your system
                  </label>
                  <input
                    type="number"
                    value={clientCount}
                    onChange={(e) => setClientCount(e.target.value)}
                    placeholder="e.g., 200"
                    className="w-full rounded-lg border border-slate-light px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Average engagement fee
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <input
                      type="number"
                      value={avgFee}
                      onChange={(e) => setAvgFee(e.target.value)}
                      placeholder="2500"
                      className="w-full rounded-lg border border-slate-light pl-8 pr-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={handleCalculate}
                disabled={!clientCount}
                className="w-full bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Calculate My Hidden Revenue
              </button>
            </motion.div>
          )}

          {/* Step 2: Result + Email Capture */}
          {step === "result" && (
            <motion.div
              key="result"
              ref={resultRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-light"
            >
              <div className="text-center mb-8">
                <p className="text-lg text-muted-foreground mb-2">You could be sitting on</p>
                <RevenueCounter targetValue={calculatedRevenue} />
                <p className="text-lg text-muted-foreground mt-2">in dormant client revenue</p>
                <p className="text-sm text-muted-foreground mt-4">
                  Based on 10% reactivation rate — many firms see 15-20%
                </p>
              </div>

              <div className="bg-background-subtle rounded-xl p-6 border border-slate-light">
                <p 
                  className="text-lg font-semibold text-primary text-center mb-4"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Want the exact 9-word email that unlocks this?
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 rounded-lg border border-slate-light px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                  <button
                    onClick={handleEmailSubmit}
                    disabled={!isValidEmail(email) || isSubmitting}
                    className="bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
                  >
                    {isSubmitting ? "Sending..." : "Send Me The Script"}
                  </button>
                </div>
                
                <p className="text-sm text-muted-foreground text-center mt-3">
                  We'll also send you a list-cleaning breakdown
                </p>
              </div>
            </motion.div>
          )}

          {/* Step 3: Script Reveal */}
          {step === "complete" && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-light"
            >
              <div className="flex items-center justify-center gap-2 text-primary mb-6">
                <Check className="w-6 h-6" />
                <span className="text-lg font-semibold">Check your inbox! Here's the script:</span>
              </div>

              <div className="border-2 border-secondary bg-slate-lighter rounded-xl p-6 mb-6">
                <p className="font-semibold text-foreground mb-4">Subject: Quick question</p>
                <div className="text-foreground space-y-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <p>Hey [First Name],</p>
                  <p>Are you still looking for help with [tax planning / bookkeeping / advisory]?</p>
                  <p>— [Your Name]</p>
                </div>
              </div>

              <p 
                className="text-center text-foreground mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                That's it. Nine words. The magic is in the execution — scroll down to see how we run this for you.
              </p>

              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-8 h-8 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Separate component to use the hook properly
const RevenueCounter = ({ targetValue }: { targetValue: number }) => {
  const { rawCount } = useCounterAnimation(targetValue, {
    duration: 1500,
    triggerOnLoad: true,
    decimals: 0
  });

  const formattedValue = `$${Math.round(rawCount).toLocaleString()}`;

  return (
    <p 
      className="text-4xl md:text-5xl font-bold text-accent"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {formattedValue}
    </p>
  );
};

export default HiddenRevenueCalculator;
