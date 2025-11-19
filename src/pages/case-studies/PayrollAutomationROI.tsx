import React from 'react';
import { ArrowRight, CheckCircle, Clock, TrendingUp, DollarSign, AlertCircle, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import SEO from '@/components/SEO';

const PayrollAutomationROI = () => {
  return (
    <>
      <SEO 
        title="Payroll Automation ROI: How Accounting Firms Save $8,372+ Annually"
        description="Discover how a 12-person accounting firm cut payroll processing from 8 hours to 30 minutes and saved $8,372 annually through automation. See the real ROI and get your Automation Transformation AI Audit & Roadmap."
        canonicalUrl="https://smartfirm.io/case-studies/payroll-automation-roi"
      />
      
      <Header />
      
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-body selection:bg-primary/10">
        
        {/* ==================== HERO SECTION ==================== */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Background Mesh Gradient */}
          <div className="absolute inset-0 bg-gradient-mesh-professional opacity-5 -z-10"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                <span className="text-sm font-semibold tracking-wide uppercase">Case Study: Payroll Automation</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-8 leading-[1.1]">
                The Real ROI of Payroll Automation for Accounting Firms
              </h1>

              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                A 12-person accounting firm cut payroll processing from 8 hours to 30 minutes, achieving a 419% ROI in the first year.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/get-started"
                  id="case-study-payroll-hero-book-call-btn"
                  className="w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-lg font-semibold text-lg hover:bg-accent/90 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  See The Breakdown
                </Link>
                <button className="w-full sm:w-auto px-8 py-4 bg-background border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-all">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== EXECUTIVE SUMMARY STATS ==================== */}
        <section className="py-12 relative z-20 -mt-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Stat 1 */}
              <div className="bg-card p-8 rounded-xl shadow-lg border border-border hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-100 rounded-lg text-green-700">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">First-Year ROI</h3>
                </div>
                <p className="text-5xl font-bold text-primary mb-2">419%</p>
                <p className="text-muted-foreground text-sm">Payback period: ~6 pay periods</p>
              </div>

              {/* Stat 2 */}
              <div className="bg-card p-8 rounded-xl shadow-lg border border-border hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-700">
                    <Clock size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Time Saved</h3>
                </div>
                <p className="text-5xl font-bold text-secondary mb-2">94%</p>
                <p className="text-muted-foreground text-sm">From 8 hours to 30 minutes</p>
              </div>

              {/* Stat 3 */}
              <div className="bg-card p-8 rounded-xl shadow-lg border border-border hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-amber-100 rounded-lg text-amber-700">
                    <DollarSign size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Annual Savings</h3>
                </div>
                <p className="text-5xl font-bold text-amber-600 mb-2">$8,372</p>
                <p className="text-muted-foreground text-sm">Labor costs reduced drastically</p>
              </div>

            </div>
          </div>
        </section>

        {/* ==================== THE CHALLENGE ==================== */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">The Challenge: <br/><span className="text-secondary font-light">Disconnected Systems</span></h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The firm was struggling with a manual payroll process spread across three disconnected systems: a Practice Management system for time, ADP for payroll, and QuickBooks Online for accounting.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-100">
                    <AlertCircle className="text-red-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-foreground">Manual Data Entry</h4>
                      <p className="text-sm text-muted-foreground">Staff had to manually export time data, calculate overtime, and re-enter data into ADP and QuickBooks.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-100">
                    <Clock className="text-red-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-foreground">Wasted Billable Hours</h4>
                      <p className="text-sm text-muted-foreground">Payroll preparation took 8 hours every two weeks, plus significant accounting staff time for journal entries.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Visual Placeholder for Diagram */}
              <div className="relative h-full min-h-[400px] bg-muted rounded-2xl border border-border p-8 flex flex-col items-center justify-center text-center shadow-inner">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-muted-foreground/20 to-transparent opacity-50 blur-2xl"></div>
                <div className="grid grid-cols-3 gap-4 opacity-80 mb-8">
                  <div className="w-20 h-20 bg-card rounded-xl shadow-sm flex items-center justify-center text-xs font-bold text-muted-foreground">Time App</div>
                  <div className="w-20 h-20 bg-card rounded-xl shadow-sm flex items-center justify-center text-xs font-bold text-muted-foreground">Excel</div>
                  <div className="w-20 h-20 bg-card rounded-xl shadow-sm flex items-center justify-center text-xs font-bold text-muted-foreground">Payroll</div>
                </div>
                <p className="text-muted-foreground font-medium">Manual exporting, calculating, and rekeying</p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== THE SOLUTION ==================== */}
        <section className="py-20 lg:py-32 bg-muted/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">The SmartFirm Solution</h2>
              <p className="text-lg text-muted-foreground">We implemented a fully automated workflow that consolidated time entry, payroll calculations, and journal posting.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Centralized Dashboard",
                  desc: "Pulled all time entries into a single view, eliminating manual exports.",
                  icon: <Activity size={24} className="text-white" />
                },
                {
                  title: "Automated Rules",
                  desc: "Applied all payroll rules automatically to prepare ADP-ready data.",
                  icon: <CheckCircle size={24} className="text-white" />
                },
                {
                  title: "Instant Posting",
                  desc: "Automatically posted the complete payroll journal entry to QuickBooks.",
                  icon: <TrendingUp size={24} className="text-white" />
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-mesh-professional rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== FINANCIAL IMPACT (DATA TABLE) ==================== */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary">The Financial Impact</h2>
              <p className="text-lg text-muted-foreground mt-2">Based on actual payroll data (26 Pay Periods Annually)</p>
            </div>

            <div className="max-w-5xl mx-auto bg-muted rounded-2xl p-2 md:p-8 border border-border">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* BEFORE CARD */}
                <div className="bg-card p-8 rounded-xl shadow-sm border border-border opacity-80">
                  <div className="flex justify-between items-center mb-6 border-b border-border pb-4">
                    <h3 className="text-xl font-bold text-muted-foreground">Before Automation</h3>
                    <span className="text-sm font-medium text-muted-foreground">Manual Process</span>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Manager Time</p>
                        <p className="text-2xl font-bold text-foreground">8 Hours</p>
                      </div>
                      <p className="text-muted-foreground text-sm">$320 cost</p>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Data Entry</p>
                        <p className="text-2xl font-bold text-foreground">1 Hour</p>
                      </div>
                      <p className="text-muted-foreground text-sm">$22 cost</p>
                    </div>

                    <div className="pt-4 border-t border-border mt-4">
                      <p className="text-sm text-muted-foreground mb-1">Total Cost Per Period</p>
                      <p className="text-3xl font-bold text-foreground">$342.00</p>
                      <p className="text-sm text-muted-foreground mt-1">Annual Cost: <span className="line-through decoration-red-400">$8,892</span></p>
                    </div>
                  </div>
                </div>

                {/* AFTER CARD */}
                <div className="bg-card p-8 rounded-xl shadow-lg border-2 border-primary/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    OPTIMIZED
                  </div>

                  <div className="flex justify-between items-center mb-6 border-b border-border pb-4">
                    <h3 className="text-xl font-bold text-primary">After Automation</h3>
                    <span className="text-sm font-medium text-primary">SmartFirm Flow</span>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-primary/70 font-semibold">Manager Time</p>
                        <p className="text-2xl font-bold text-primary">0.5 Hours</p>
                      </div>
                      <p className="text-green-600 font-bold text-sm">$20 cost</p>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-primary/70 font-semibold">Data Entry</p>
                        <p className="text-2xl font-bold text-primary">0 Hours</p>
                      </div>
                      <p className="text-green-600 font-bold text-sm">$0 cost</p>
                    </div>

                    <div className="pt-4 border-t border-border mt-4 bg-green-50 -mx-8 px-8 -mb-8 py-6">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-sm text-green-700 font-medium mb-1">Total Cost Per Period</p>
                          <p className="text-4xl font-bold text-green-600">$20.00</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-green-700 font-medium">Annual Cost</p>
                          <p className="text-2xl font-bold text-secondary">$520</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              
              {/* ROI BAR */}
              <div className="mt-8 bg-secondary rounded-xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white/5"></div>
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <p className="text-blue-200 text-sm font-medium uppercase tracking-widest mb-2">Project Cost: $2,000</p>
                    <p className="text-3xl font-bold">Total First-Year Savings: <span className="text-amber-400">$8,372</span></p>
                  </div>
                  <div className="text-right">
                    <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                      <p className="text-sm text-blue-100 mb-1">First-Year ROI</p>
                      <p className="text-4xl font-bold text-white">419%</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-muted-foreground text-sm mt-4">Data source: Payroll Automation Project Cost Analysis</p>
            </div>
          </div>
        </section>

        {/* ==================== QUOTE SECTION ==================== */}
        <section className="py-20 bg-slate-900 text-white relative">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="text-6xl text-primary opacity-30 font-serif mb-4">"</div>
              <h3 className="text-3xl md:text-4xl font-bold leading-snug mb-8 text-white">
                Wait, seriously? <br/>
                <span className="text-amber-400">That's all I have to do?</span><br/>
                You're kidding.
              </h3>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center font-bold text-slate-300">C</div>
                <div className="text-left">
                  <p className="font-bold text-white">Client Reaction</p>
                  <p className="text-slate-400 text-sm">Upon seeing the new workflow</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== FOOTER CTA ==================== */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-mesh-professional rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden shadow-xl">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-white">Invest in your future today.</h2>
                <p className="text-lg text-blue-100 mb-10">
                  Small firms achieve large financial returns through targeted automation. Eliminating manual data movement immediately reduces errors and rework.
                </p>
                <Link
                  to="/get-started"
                  id="case-study-payroll-footer-book-call-btn"
                  className="inline-block px-10 py-5 bg-white text-primary font-bold rounded-lg text-lg hover:bg-slate-50 hover:scale-105 transition-all shadow-lg"
                >
                  Get Your Automation ROI Analysis
                </Link>
                <p className="mt-6 text-sm text-blue-200/80">
                  Continuous incremental investments have massive cumulative benefits.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default PayrollAutomationROI;
