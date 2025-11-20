import React from 'react';
import { ArrowRight, CheckCircle, Clock, TrendingUp, DollarSign, AlertCircle, Activity, Download, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import SEO from '@/components/SEO';
import adpLogo from '@/assets/logos/adp-logo.png';
import canopyLogo from '@/assets/logos/canopy-logo.webp';
import qboLogo from '@/assets/logos/qbo-logo.png';
import excelLogo from '@/assets/logos/excel-logo.svg';

export interface CaseStudyStat {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  iconBgColor: string;
  iconTextColor: string;
  valueTailwindClass?: string;
}

export interface ChallengePainPoint {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SolutionItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FinancialData {
  before: {
    managerTime: string;
    managerCost: string;
    dataEntryTime: string;
    dataEntryCost: string;
    totalPerPeriod: string;
    annualCost: string;
  };
  after: {
    managerTime: string;
    managerCost: string;
    dataEntryTime: string;
    dataEntryCost: string;
    totalPerPeriod: string;
    annualCost: string;
  };
  projectCost: string;
  firstYearSavings: string;
  firstYearROI: string;
  dataSource: string;
}

export interface CaseStudyQuote {
  text: string;
  highlightedText: string;
  remainingText: string;
  attribution: string;
  attributionSubtitle: string;
  initial: string;
}

export interface CaseStudyTemplateProps {
  // SEO
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
  
  // Hero
  badgeText: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCTAText: string;
  heroCTALink: string;
  heroCTAId: string;
  
  // Stats
  stats: CaseStudyStat[];
  
  // Challenge
  challengeTitle: string;
  challengeSubtitle: string;
  challengeDescription: string;
  challengePainPoints: ChallengePainPoint[];
  challengeVisualDescription: string;
  
  // Solution
  solutionTitle: string;
  solutionDescription: string;
  solutionItems: SolutionItem[];
  
  // Financial Impact
  financialTitle: string;
  financialSubtitle: string;
  financialData: FinancialData;
  
  // Quote
  quote: CaseStudyQuote;
  
  // Footer CTA
  footerCTATitle: string;
  footerCTADescription: string;
  footerCTAButtonText: string;
  footerCTAButtonLink: string;
  footerCTAButtonId: string;
  footerCTADisclaimer: string;
}

const CaseStudyTemplate: React.FC<CaseStudyTemplateProps> = ({
  seoTitle,
  seoDescription,
  canonicalUrl,
  badgeText,
  heroTitle,
  heroSubtitle,
  heroCTAText,
  heroCTALink,
  heroCTAId,
  stats,
  challengeTitle,
  challengeSubtitle,
  challengeDescription,
  challengePainPoints,
  challengeVisualDescription,
  solutionTitle,
  solutionDescription,
  solutionItems,
  financialTitle,
  financialSubtitle,
  financialData,
  quote,
  footerCTATitle,
  footerCTADescription,
  footerCTAButtonText,
  footerCTAButtonLink,
  footerCTAButtonId,
  footerCTADisclaimer,
}) => {
  return (
    <>
      <SEO 
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={canonicalUrl}
      />
      
      <Header />
      
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-body selection:bg-primary/10">
        
        {/* ==================== HERO SECTION ==================== */}
        <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh-professional opacity-5 -z-10"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                <span className="text-sm font-semibold tracking-wide uppercase">{badgeText}</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-8 leading-[1.1]">
                {heroTitle}
              </h1>

              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                {heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to={heroCTALink}
                  id={heroCTAId}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-coral text-white rounded-lg font-semibold text-lg hover:opacity-90 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  {heroCTAText}
                </Link>
                <a
                  href="/case-studies/payroll-automation-roi.pdf"
                  download
                  className="w-full sm:w-auto px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download PDF
                </a>
                <Link 
                  to="/services/ai-transformation-roadmap"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-gold text-white rounded-lg font-semibold text-lg hover:opacity-90 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  Learn More about our process
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== EXECUTIVE SUMMARY STATS ==================== */}
        <section className="py-8 relative z-20 -mt-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-card p-8 rounded-xl shadow-lg border border-border hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 ${stat.iconBgColor} rounded-lg ${stat.iconTextColor}`}>
                      {stat.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{stat.title}</h3>
                  </div>
                  <p className={`text-5xl font-bold mb-2 ${stat.valueTailwindClass || 'text-primary'}`}>{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== THE CHALLENGE ==================== */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  {challengeTitle} <br/>
                  <span className="text-secondary font-light">{challengeSubtitle}</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {challengeDescription}
                </p>
                
                <div className="space-y-4">
                  {challengePainPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                      {point.icon}
                      <div>
                        <h4 className="font-bold text-foreground">{point.title}</h4>
                        <p className="text-sm text-muted-foreground">{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative h-full min-h-[400px] bg-muted rounded-2xl border border-border p-8 flex flex-col items-center justify-center text-center shadow-inner">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-muted-foreground/20 to-transparent opacity-50 blur-2xl"></div>
                <div className="grid grid-cols-2 gap-8 mb-8 max-w-lg mx-auto">
                  <div className="h-28 bg-card rounded-xl shadow-sm flex items-center justify-center p-6">
                    <img src={adpLogo} alt="ADP" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="h-28 bg-card rounded-xl shadow-sm flex items-center justify-center p-6">
                    <img src={canopyLogo} alt="Canopy" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="h-28 bg-card rounded-xl shadow-sm flex items-center justify-center p-6">
                    <img src={qboLogo} alt="QuickBooks Online" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="h-28 bg-card rounded-xl shadow-sm flex items-center justify-center p-6">
                    <img src={excelLogo} alt="Excel" className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
                <p className="text-muted-foreground font-medium">{challengeVisualDescription}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== THE SOLUTION ==================== */}
        <section className="py-20 lg:py-32 bg-secondary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">{solutionTitle}</h2>
              <p className="text-lg text-white/80">{solutionDescription}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutionItems.map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== FINANCIAL IMPACT (DATA TABLE) ==================== */}
        <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
          {/* Spotlight Effect - Desktop only */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-accent-gold/20 via-accent-gold/5 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary">{financialTitle}</h2>
              <p className="text-lg text-muted-foreground mt-2">{financialSubtitle}</p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  
                  {/* BEFORE CARD - Larger & More Readable */}
                  <div className="bg-muted/30 border border-border/50 rounded-2xl p-6 md:p-8 opacity-75 scale-100 lg:scale-95 transition-all">
                    <div className="flex justify-between items-center mb-6 border-b border-border pb-4">
                      <h3 className="text-xl font-bold text-muted-foreground">Before Automation</h3>
                      <span className="text-sm font-medium text-muted-foreground">Manual Process</span>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Manager Time</p>
                          <p className="text-2xl font-bold text-foreground">{financialData.before.managerTime}</p>
                        </div>
                        <p className="text-muted-foreground text-sm">{financialData.before.managerCost}</p>
                      </div>
                      
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Data Entry</p>
                          <p className="text-2xl font-bold text-foreground">{financialData.before.dataEntryTime}</p>
                        </div>
                        <p className="text-muted-foreground text-sm">{financialData.before.dataEntryCost}</p>
                      </div>

                      <div className="pt-4 border-t border-border mt-4">
                        <p className="text-sm text-muted-foreground mb-1">Total Cost Per Period</p>
                        <p className="text-3xl font-bold text-foreground">{financialData.before.totalPerPeriod}</p>
                        <p className="text-sm text-muted-foreground mt-1">Annual Cost: <span className="line-through decoration-muted-foreground/50">{financialData.before.annualCost}</span></p>
                      </div>
                    </div>
                  </div>

                  {/* AFTER CARD - Larger & Elevated with Spotlight */}
                  <div className="bg-gradient-to-br from-primary/5 via-accent-gold/5 to-primary/5 border-2 border-accent-gold/30 rounded-2xl p-8 md:p-10 shadow-2xl scale-105 lg:scale-110 transition-all relative">
                    {/* Radial Gradient Spotlight Behind Card */}
                    <div className="absolute inset-0 -z-10 bg-gradient-radial from-accent-gold/20 via-accent-gold/10 to-transparent blur-3xl rounded-2xl"></div>
                    <div className="absolute top-0 right-0 bg-gradient-gold text-white text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-xl shadow-lg">
                      OPTIMIZED
                    </div>

                    <div className="flex justify-between items-center mb-6 border-b border-accent-gold/20 pb-4">
                      <h3 className="text-2xl font-bold text-primary">After Automation</h3>
                      <span className="text-sm font-medium text-primary">SmartFirm Flow</span>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-primary/70 font-semibold">Manager Time</p>
                          <p className="text-3xl font-bold text-primary">{financialData.after.managerTime}</p>
                        </div>
                        <p className="text-accent-gold font-bold text-base">{financialData.after.managerCost}</p>
                      </div>
                      
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-primary/70 font-semibold">Data Entry</p>
                          <p className="text-3xl font-bold text-primary">{financialData.after.dataEntryTime}</p>
                        </div>
                        <p className="text-accent-gold font-bold text-base">{financialData.after.dataEntryCost}</p>
                      </div>

                      <div className="pt-4 border-t-2 border-accent-gold/30 mt-4 bg-primary/5 -mx-8 md:-mx-10 px-8 md:px-10 -mb-8 md:-mb-10 py-6">
                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-sm text-primary font-medium mb-1">Total Cost Per Period</p>
                            <p className="text-4xl md:text-5xl font-bold text-accent-gold">{financialData.after.totalPerPeriod}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-primary font-medium">Annual Cost</p>
                            <p className="text-2xl md:text-3xl font-bold text-secondary">{financialData.after.annualCost}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                </div>
              
              {/* ROI BAR */}
              <div className="mt-12 bg-secondary rounded-xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white/5"></div>
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <p className="text-gradient-gold text-sm font-medium uppercase tracking-widest mb-2">Project Cost: {financialData.projectCost}</p>
                    <p className="text-2xl md:text-3xl font-bold text-white">Total First-Year Savings: <span className="text-accent">{financialData.firstYearSavings}</span></p>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                      <p className="text-sm text-white/90 mb-1">First-Year ROI</p>
                      <p className="text-4xl font-bold text-gradient-gold">{financialData.firstYearROI}</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-muted-foreground text-sm mt-4">Data source: {financialData.dataSource}</p>
            </div>
          </div>
        </section>

        {/* ==================== QUOTE SECTION ==================== */}
        <section className="py-20 bg-secondary text-white relative">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="text-6xl text-white opacity-50 font-serif mb-4">"</div>
              <h3 className="text-3xl md:text-4xl font-bold leading-snug mb-8 text-white">
                {quote.text} <br/>
                <span className="text-accent">{quote.highlightedText}</span><br/>
                {quote.remainingText}
              </h3>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-white">{quote.initial}</div>
                <div className="text-left">
                  <p className="font-bold text-white">{quote.attribution}</p>
                  <p className="text-white/70 text-sm">{quote.attributionSubtitle}</p>
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
                <h2 className="text-4xl font-bold mb-6 text-white">{footerCTATitle}</h2>
                <p className="text-lg text-white/90 mb-10">
                  {footerCTADescription}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                  <Link
                    to={footerCTAButtonLink}
                    id={footerCTAButtonId}
                    className="inline-block px-10 py-5 bg-gradient-coral text-white font-bold rounded-lg text-lg hover:opacity-90 hover:scale-105 transition-all shadow-lg"
                  >
                    {footerCTAButtonText}
                  </Link>
                  <Link
                    to="/services/ai-transformation-roadmap"
                    className="inline-block px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-lg text-lg hover:bg-white/20 transition-all"
                  >
                    Learn More about our process
                  </Link>
                </div>
                <p className="text-sm text-white/80">
                  {footerCTADisclaimer}
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

export default CaseStudyTemplate;
