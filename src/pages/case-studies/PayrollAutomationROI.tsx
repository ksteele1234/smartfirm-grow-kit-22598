import React from 'react';
import { Clock, TrendingUp, DollarSign, AlertCircle, Activity, CheckCircle } from 'lucide-react';
import CaseStudyTemplate, { CaseStudyTemplateProps } from '@/templates/CaseStudyTemplate';

const PayrollAutomationROI = () => {
  const caseStudyData: CaseStudyTemplateProps = {
    // SEO
    seoTitle: "Payroll Automation ROI: How Accounting Firms Save $8,372+ Annually",
    seoDescription: "Discover how a 12-person accounting firm cut payroll processing from 8 hours to 30 minutes and saved $8,372 annually through automation. See the real ROI and get your Automation Transformation AI Audit & Roadmap.",
    canonicalUrl: "https://smartfirm.io/case-studies/payroll-automation-roi",
    
    // Hero
    badgeText: "Case Study: Payroll Automation",
    heroTitle: "The Real ROI of Payroll Automation for Accounting Firms",
    heroSubtitle: "A 12-person accounting firm cut payroll processing from 8 hours to 30 minutes, achieving a 419% ROI in the first year.",
    heroCTAText: "See The Breakdown",
    heroCTALink: "/get-started",
    heroCTAId: "case-study-payroll-hero-book-call-btn",
    
    // Stats
    stats: [
      {
        icon: <TrendingUp size={24} />,
        title: "First-Year ROI",
        value: "419%",
        description: "Payback period: ~6 pay periods",
        iconBgColor: "bg-green-100",
        iconTextColor: "text-green-700",
        valueTailwindClass: "text-primary",
      },
      {
        icon: <Clock size={24} />,
        title: "Time Saved",
        value: "94%",
        description: "From 8 hours to 30 minutes",
        iconBgColor: "bg-blue-100",
        iconTextColor: "text-blue-700",
        valueTailwindClass: "text-secondary",
      },
      {
        icon: <DollarSign size={24} />,
        title: "Annual Savings",
        value: "$8,372",
        description: "Labor costs reduced drastically",
        iconBgColor: "bg-amber-100",
        iconTextColor: "text-amber-700",
        valueTailwindClass: "text-amber-600",
      },
    ],
    
    // Challenge
    challengeTitle: "The Challenge:",
    challengeSubtitle: "Disconnected Systems",
    challengeDescription: "The firm was struggling with a manual payroll process spread across three disconnected systems: a Practice Management system for time, ADP for payroll, and QuickBooks Online for accounting.",
    challengePainPoints: [
      {
        icon: <AlertCircle className="text-red-500 shrink-0 mt-1" />,
        title: "Manual Data Entry",
        description: "Staff had to manually export time data, calculate overtime, and re-enter data into ADP and QuickBooks.",
      },
      {
        icon: <Clock className="text-red-500 shrink-0 mt-1" />,
        title: "Wasted Billable Hours",
        description: "Payroll preparation took 8 hours every two weeks, plus significant accounting staff time for journal entries.",
      },
    ],
    challengeVisualDescription: "Manual exporting, calculating, and rekeying",
    
    // Solution
    solutionTitle: "The SmartFirm Solution",
    solutionDescription: "We implemented a fully automated workflow that consolidated time entry, payroll calculations, and journal posting.",
    solutionItems: [
      {
        icon: <Activity size={24} className="text-white" />,
        title: "Centralized Dashboard",
        description: "Pulled all time entries into a single view, eliminating manual exports.",
      },
      {
        icon: <CheckCircle size={24} className="text-white" />,
        title: "Automated Rules",
        description: "Applied all payroll rules automatically to prepare ADP-ready data.",
      },
      {
        icon: <TrendingUp size={24} className="text-white" />,
        title: "Instant Posting",
        description: "Automatically posted the complete payroll journal entry to QuickBooks.",
      },
    ],
    
    // Financial Impact
    financialTitle: "The Financial Impact",
    financialSubtitle: "Based on actual payroll data (26 Pay Periods Annually)",
    financialData: {
      before: {
        managerTime: "8 Hours",
        managerCost: "$320 cost",
        dataEntryTime: "1 Hour",
        dataEntryCost: "$22 cost",
        totalPerPeriod: "$342.00",
        annualCost: "$8,892",
      },
      after: {
        managerTime: "0.5 Hours",
        managerCost: "$20 cost",
        dataEntryTime: "0 Hours",
        dataEntryCost: "$0 cost",
        totalPerPeriod: "$20.00",
        annualCost: "$520",
      },
      projectCost: "$2,000",
      firstYearSavings: "$8,372",
      firstYearROI: "419%",
      dataSource: "Payroll Automation Project Cost Analysis",
    },
    
    // Quote
    quote: {
      text: "Wait, seriously?",
      highlightedText: "That's all I have to do?",
      remainingText: "You're kidding.",
      attribution: "Client Reaction",
      attributionSubtitle: "Upon seeing the new workflow",
      initial: "C",
    },
    
    // Footer CTA
    footerCTATitle: "Invest in your future today.",
    footerCTADescription: "Small firms achieve large financial returns through targeted automation. Eliminating manual data movement immediately reduces errors and rework.",
    footerCTAButtonText: "Get Your Automation ROI Analysis",
    footerCTAButtonLink: "/get-started",
    footerCTAButtonId: "case-study-payroll-footer-book-call-btn",
    footerCTADisclaimer: "Continuous incremental investments have massive cumulative benefits.",
  };

  return <CaseStudyTemplate {...caseStudyData} />;
};

export default PayrollAutomationROI;
