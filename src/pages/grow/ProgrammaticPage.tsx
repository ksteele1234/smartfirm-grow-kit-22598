import { useParams } from "react-router-dom";
import { programmaticPages, programmaticPageIndex } from "@/data/programmaticSeoPages";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import SolutionPageTemplate from "@/templates/SolutionPageTemplate";
import NotFound from "@/pages/NotFound";
import type { ServicePageData, SolutionPageData } from "@/types/cms";
import RelatedContent from "@/components/sections/RelatedContent";
import type { RelatedPageLink } from "@/config/internalLinks";

/**
 * Maps subcategories to related core service/solution/tool pages.
 * Programmatic pages only link to core pages (always live), never to other /grow/ pages.
 */
const subcategoryLinks: Record<string, { services: RelatedPageLink[]; solutions: RelatedPageLink[]; tools?: RelatedPageLink[] }> = {
  // --- Review & Reputation ---
  "review-generation": {
    services: [
      { title: "Client Review Generation", description: "Automated review requests that build your online reputation", href: "/services/automated-review-generation-for-cpas/" },
      { title: "Online Reputation Management", description: "Monitor and improve your firm's online presence", href: "/services/reputation-management-for-cpa-firms/" },
    ],
    solutions: [
      { title: "Get More Referrals", description: "Build a referral engine that works without asking clients directly", href: "/solutions/get-more-referrals-for-cpa-firm-without-asking/" },
    ],
  },
  "review-automation": {
    services: [
      { title: "Client Review Generation", description: "Automated review requests that build your online reputation", href: "/services/automated-review-generation-for-cpas/" },
      { title: "Online Reputation Management", description: "Monitor and improve your firm's online presence", href: "/services/reputation-management-for-cpa-firms/" },
    ],
    solutions: [
      { title: "Get More Referrals", description: "Build a referral engine that works without asking clients directly", href: "/solutions/get-more-referrals-for-cpa-firm-without-asking/" },
    ],
  },

  // --- Client Acquisition & Lead Gen ---
  "client-acquisition": {
    services: [
      { title: "SEO for Accountants", description: "AI-powered local search optimization to rank higher and attract prospects", href: "/services/seo-for-accounting-firms/" },
      { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Scale Your Firm", description: "Grow your practice without proportional stress or hiring", href: "/solutions/scale-accounting-firm-without-chaos/" },
    ],
  },
  "lead-generation": {
    services: [
      { title: "SEO for Accountants", description: "AI-powered local search optimization to rank higher and attract prospects", href: "/services/seo-for-accounting-firms/" },
      { title: "Content Marketing", description: "SEO-optimized content that builds authority and attracts qualified leads", href: "/services/content-marketing-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Get More Referrals", description: "Build a referral engine that works without asking clients directly", href: "/solutions/get-more-referrals-for-cpa-firm-without-asking/" },
    ],
    tools: [
      { title: "Lead Generation Scorecard", description: "Score your firm's lead generation effectiveness", href: "/tools/lead-generation-scorecard-for-accounting-firms/" },
    ],
  },
  "lead-automation": {
    services: [
      { title: "Automated Lead Follow-up", description: "Instant, personalized responses that convert more inquiries", href: "/services/automated-lead-follow-up-for-accounting-firms/" },
      { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Scale Your Firm", description: "Grow your practice without proportional stress or hiring", href: "/solutions/scale-accounting-firm-without-chaos/" },
    ],
  },

  // --- Lead Follow-up ---
  "lead-follow-up": {
    services: [
      { title: "Automated Lead Follow-up", description: "Instant, personalized responses that convert more inquiries", href: "/services/automated-lead-follow-up-for-accounting-firms/" },
      { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Scale Your Firm", description: "Grow your practice without proportional stress or hiring", href: "/solutions/scale-accounting-firm-without-chaos/" },
    ],
  },

  // --- Email Marketing ---
  "email-marketing": {
    services: [
      { title: "Email Marketing", description: "Targeted campaigns and newsletters that keep clients engaged year-round", href: "/services/email-marketing-for-accounting-firms/" },
      { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Stop Losing Clients", description: "Stay ahead of tech-savvy competitors with modern client experiences", href: "/solutions/stop-losing-clients-to-tech-savvy-cpas/" },
    ],
  },
  "email-automation": {
    services: [
      { title: "Email Marketing", description: "Targeted campaigns and newsletters that keep clients engaged year-round", href: "/services/email-marketing-for-accounting-firms/" },
      { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Work Less, Earn More", description: "Reclaim hours each week by automating routine tasks", href: "/solutions/work-less-earn-more-as-a-cpa/" },
    ],
  },

  // --- Time Management & Efficiency ---
  "time-management": {
    services: [
      { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
      { title: "Business Optimization", description: "Operational frameworks and process improvements for sustainable growth", href: "/services/business-optimization-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Work Less, Earn More", description: "Reclaim hours each week by automating routine tasks", href: "/solutions/work-less-earn-more-as-a-cpa/" },
    ],
    tools: [
      { title: "Efficiency Assessment", description: "Identify bottlenecks and inefficiencies in your current workflows", href: "/tools/accounting-firm-efficiency-assessment/" },
    ],
  },

  // --- SEO & Website ---
  "website-traffic": {
    services: [
      { title: "SEO for Accountants", description: "AI-powered local search optimization to rank higher and attract prospects", href: "/services/seo-for-accounting-firms/" },
      { title: "Content Marketing", description: "SEO-optimized content that builds authority and attracts qualified leads", href: "/services/content-marketing-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Get More Referrals", description: "Build a referral engine that works without asking clients directly", href: "/solutions/get-more-referrals-for-cpa-firm-without-asking/" },
    ],
    tools: [
      { title: "SEO Audit", description: "Check how your accounting firm website performs in search", href: "/tools/seo-audit/" },
    ],
  },
  "seo-services": {
    services: [
      { title: "SEO for Accountants", description: "AI-powered local search optimization to rank higher and attract prospects", href: "/services/seo-for-accounting-firms/" },
      { title: "Website Design", description: "Conversion-focused websites with built-in SEO foundations", href: "/services/website-design-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Scale Your Firm", description: "Grow your practice without proportional stress or hiring", href: "/solutions/scale-accounting-firm-without-chaos/" },
    ],
  },
  "website-optimization": {
    services: [
      { title: "Website Design", description: "Conversion-focused websites with built-in SEO foundations", href: "/services/website-design-for-accounting-firms/" },
      { title: "SEO for Accountants", description: "AI-powered local search optimization to rank higher and attract prospects", href: "/services/seo-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Stop Losing Clients", description: "Stay ahead of tech-savvy competitors with modern client experiences", href: "/solutions/stop-losing-clients-to-tech-savvy-cpas/" },
    ],
  },

  // --- Social Media ---
  "social-media": {
    services: [
      { title: "Social Media Management", description: "Consistent social presence that builds trust and generates referrals", href: "/services/social-media-management-for-accounting-firms/" },
      { title: "Content Marketing", description: "SEO-optimized content that builds authority and attracts qualified leads", href: "/services/content-marketing-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Get More Referrals", description: "Build a referral engine that works without asking clients directly", href: "/solutions/get-more-referrals-for-cpa-firm-without-asking/" },
    ],
  },

  // --- Client Retention & Communication ---
  "client-retention": {
    services: [
      { title: "Email Marketing", description: "Targeted campaigns and newsletters that keep clients engaged year-round", href: "/services/email-marketing-for-accounting-firms/" },
      { title: "Client Review Generation", description: "Automated review requests that build your online reputation", href: "/services/automated-review-generation-for-cpas/" },
    ],
    solutions: [
      { title: "Stop Losing Clients", description: "Stay ahead of tech-savvy competitors with modern client experiences", href: "/solutions/stop-losing-clients-to-tech-savvy-cpas/" },
    ],
  },
  "client-communication": {
    services: [
      { title: "Email Marketing", description: "Targeted campaigns and newsletters that keep clients engaged year-round", href: "/services/email-marketing-for-accounting-firms/" },
      { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Stop Losing Clients", description: "Stay ahead of tech-savvy competitors with modern client experiences", href: "/solutions/stop-losing-clients-to-tech-savvy-cpas/" },
    ],
  },
  "client-experience": {
    services: [
      { title: "Client Onboarding Automation", description: "Streamline intake with automated workflows and document collection", href: "/services/client-onboarding-automation/" },
      { title: "Email Marketing", description: "Targeted campaigns and newsletters that keep clients engaged year-round", href: "/services/email-marketing-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Stop Losing Clients", description: "Stay ahead of tech-savvy competitors with modern client experiences", href: "/solutions/stop-losing-clients-to-tech-savvy-cpas/" },
    ],
  },

  // --- Client Onboarding ---
  "client-onboarding": {
    services: [
      { title: "Client Onboarding Automation", description: "Streamline intake with automated workflows and document collection", href: "/services/client-onboarding-automation/" },
      { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Fix Client Onboarding", description: "Solve intake bottlenecks and deliver a consistent first impression", href: "/solutions/client-onboarding-problems/" },
    ],
  },
  "onboarding-automation": {
    services: [
      { title: "Client Onboarding Automation", description: "Streamline intake with automated workflows and document collection", href: "/services/client-onboarding-automation/" },
      { title: "Business Optimization", description: "Operational frameworks and process improvements for sustainable growth", href: "/services/business-optimization-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Fix Client Onboarding", description: "Solve intake bottlenecks and deliver a consistent first impression", href: "/solutions/client-onboarding-problems/" },
    ],
  },

  // --- Client Portal ---
  "client-portal": {
    services: [
      { title: "Technology Solutions", description: "Strategic technology consulting to modernize your firm's operations", href: "/services/technology-consulting-for-accounting-firms/" },
      { title: "Client Onboarding Automation", description: "Streamline intake with automated workflows and document collection", href: "/services/client-onboarding-automation/" },
    ],
    solutions: [
      { title: "Protect Your Practice", description: "Safeguard your firm with resilient technology and continuity planning", href: "/solutions/protect-accounting-practice-from-data-breaches/" },
    ],
  },

  // --- CRM ---
  "crm-setup": {
    services: [
      { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
      { title: "Automated Lead Follow-up", description: "Instant, personalized responses that convert more inquiries", href: "/services/automated-lead-follow-up-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Scale Your Firm", description: "Grow your practice without proportional stress or hiring", href: "/solutions/scale-accounting-firm-without-chaos/" },
    ],
  },

  // --- Marketing Automation ---
  "marketing-automation": {
    services: [
      { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
      { title: "Email Marketing", description: "Targeted campaigns and newsletters that keep clients engaged year-round", href: "/services/email-marketing-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Work Less, Earn More", description: "Reclaim hours each week by automating routine tasks", href: "/solutions/work-less-earn-more-as-a-cpa/" },
    ],
    tools: [
      { title: "Automation Readiness Quiz", description: "Find out how ready your firm is for automation", href: "/tools/automation-readiness-assessment-for-accountants/" },
    ],
  },
  "cpa-marketing": {
    services: [
      { title: "Strategy & Integration", description: "Unified marketing strategy that connects all your channels", href: "/services/marketing-strategy-integration-for-accounting-firms/" },
      { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Grow Without Growing Pains", description: "Expand capacity and revenue without operational chaos", href: "/solutions/grow-accounting-firm-without-growing-pains/" },
    ],
    tools: [
      { title: "Marketing Assessment", description: "Evaluate your firm's marketing strengths and gaps", href: "/tools/marketing-assessment-for-accountants/" },
    ],
  },

  // --- Workflow & Operations ---
  "workflow-automation": {
    services: [
      { title: "Business Optimization", description: "Operational frameworks and process improvements for sustainable growth", href: "/services/business-optimization-for-accounting-firms/" },
      { title: "Technology Solutions", description: "Strategic technology consulting to modernize your firm's operations", href: "/services/technology-consulting-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Work Less, Earn More", description: "Reclaim hours each week by automating routine tasks", href: "/solutions/work-less-earn-more-as-a-cpa/" },
    ],
    tools: [
      { title: "Workflow Audit Tool", description: "Map and optimize your firm's key workflows", href: "/tools/accounting-firm-workflow-audit-tool/" },
    ],
  },
  "workflow-efficiency": {
    services: [
      { title: "Business Optimization", description: "Operational frameworks and process improvements for sustainable growth", href: "/services/business-optimization-for-accounting-firms/" },
      { title: "Technology Solutions", description: "Strategic technology consulting to modernize your firm's operations", href: "/services/technology-consulting-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Work Less, Earn More", description: "Reclaim hours each week by automating routine tasks", href: "/solutions/work-less-earn-more-as-a-cpa/" },
    ],
  },
  "operational-automation": {
    services: [
      { title: "Business Optimization", description: "Operational frameworks and process improvements for sustainable growth", href: "/services/business-optimization-for-accounting-firms/" },
      { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Grow Without Growing Pains", description: "Expand capacity and revenue without operational chaos", href: "/solutions/grow-accounting-firm-without-growing-pains/" },
    ],
  },

  // --- Document & Data ---
  "document-automation": {
    services: [
      { title: "Business Optimization", description: "Operational frameworks and process improvements for sustainable growth", href: "/services/business-optimization-for-accounting-firms/" },
      { title: "Technology Solutions", description: "Strategic technology consulting to modernize your firm's operations", href: "/services/technology-consulting-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Work Less, Earn More", description: "Reclaim hours each week by automating routine tasks", href: "/solutions/work-less-earn-more-as-a-cpa/" },
    ],
  },
  "document-management": {
    services: [
      { title: "Technology Solutions", description: "Strategic technology consulting to modernize your firm's operations", href: "/services/technology-consulting-for-accounting-firms/" },
      { title: "Business Optimization", description: "Operational frameworks and process improvements for sustainable growth", href: "/services/business-optimization-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Protect Your Practice", description: "Safeguard your firm with resilient technology and continuity planning", href: "/solutions/protect-accounting-practice-from-data-breaches/" },
    ],
  },
  "data-analytics": {
    services: [
      { title: "Technology Solutions", description: "Strategic technology consulting to modernize your firm's operations", href: "/services/technology-consulting-for-accounting-firms/" },
      { title: "Business Optimization", description: "Operational frameworks and process improvements for sustainable growth", href: "/services/business-optimization-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Scale Your Firm", description: "Grow your practice without proportional stress or hiring", href: "/solutions/scale-accounting-firm-without-chaos/" },
    ],
  },
  "data-automation": {
    services: [
      { title: "Technology Solutions", description: "Strategic technology consulting to modernize your firm's operations", href: "/services/technology-consulting-for-accounting-firms/" },
      { title: "Business Optimization", description: "Operational frameworks and process improvements for sustainable growth", href: "/services/business-optimization-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Work Less, Earn More", description: "Reclaim hours each week by automating routine tasks", href: "/solutions/work-less-earn-more-as-a-cpa/" },
    ],
  },

  // --- Month-end / Payment / Scheduling ---
  "month-end-close": {
    services: [
      { title: "Business Optimization", description: "Operational frameworks and process improvements for sustainable growth", href: "/services/business-optimization-for-accounting-firms/" },
      { title: "Technology Solutions", description: "Strategic technology consulting to modernize your firm's operations", href: "/services/technology-consulting-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Work Less, Earn More", description: "Reclaim hours each week by automating routine tasks", href: "/solutions/work-less-earn-more-as-a-cpa/" },
    ],
  },
  "payment-automation": {
    services: [
      { title: "Business Optimization", description: "Operational frameworks and process improvements for sustainable growth", href: "/services/business-optimization-for-accounting-firms/" },
      { title: "Client Onboarding Automation", description: "Streamline intake with automated workflows and document collection", href: "/services/client-onboarding-automation/" },
    ],
    solutions: [
      { title: "Scale Your Firm", description: "Grow your practice without proportional stress or hiring", href: "/solutions/scale-accounting-firm-without-chaos/" },
    ],
  },
  "scheduling-automation": {
    services: [
      { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
      { title: "Client Onboarding Automation", description: "Streamline intake with automated workflows and document collection", href: "/services/client-onboarding-automation/" },
    ],
    solutions: [
      { title: "Work Less, Earn More", description: "Reclaim hours each week by automating routine tasks", href: "/solutions/work-less-earn-more-as-a-cpa/" },
    ],
  },

  // --- System Integration ---
  "system-integration": {
    services: [
      { title: "Technology Solutions", description: "Strategic technology consulting to modernize your firm's operations", href: "/services/technology-consulting-for-accounting-firms/" },
      { title: "Business Optimization", description: "Operational frameworks and process improvements for sustainable growth", href: "/services/business-optimization-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Protect Your Practice", description: "Safeguard your firm with resilient technology and continuity planning", href: "/solutions/protect-accounting-practice-from-data-breaches/" },
    ],
    tools: [
      { title: "Technology ROI Calculator", description: "Calculate the return on your technology investments", href: "/tools/accounting-firm-technology-roi-calculator/" },
    ],
  },

  // --- AI & Technology ---
  "ai-technology": {
    services: [
      { title: "AI Transformation Roadmap", description: "A structured plan to integrate AI into your firm's workflows", href: "/services/ai-transformation-roadmap-for-accounting-firms/" },
      { title: "AI Process Optimization", description: "Apply AI to a single process and measure the impact before scaling", href: "/services/ai-process-optimization-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Work Less, Earn More", description: "Reclaim hours each week by automating routine tasks", href: "/solutions/work-less-earn-more-as-a-cpa/" },
    ],
    tools: [
      { title: "Automation Readiness Quiz", description: "Find out how ready your firm is for automation", href: "/tools/automation-readiness-assessment-for-accountants/" },
    ],
  },

  // --- Alternatives / Competitors ---
  "competitor-alternatives": {
    services: [
      { title: "Strategy & Integration", description: "Unified marketing strategy that connects all your channels", href: "/services/marketing-strategy-integration-for-accounting-firms/" },
      { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Scale Your Firm", description: "Grow your practice without proportional stress or hiring", href: "/solutions/scale-accounting-firm-without-chaos/" },
    ],
  },
  "diy-tool-alternatives": {
    services: [
      { title: "Strategy & Integration", description: "Unified marketing strategy that connects all your channels", href: "/services/marketing-strategy-integration-for-accounting-firms/" },
      { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Work Less, Earn More", description: "Reclaim hours each week by automating routine tasks", href: "/solutions/work-less-earn-more-as-a-cpa/" },
    ],
  },

  // --- Firm Types / Packages ---
  "solo-practitioners": {
    services: [
      { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
      { title: "SEO for Accountants", description: "AI-powered local search optimization to rank higher and attract prospects", href: "/services/seo-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Work Less, Earn More", description: "Reclaim hours each week by automating routine tasks", href: "/solutions/work-less-earn-more-as-a-cpa/" },
    ],
  },
  "firm-size": {
    services: [
      { title: "Strategy & Integration", description: "Unified marketing strategy that connects all your channels", href: "/services/marketing-strategy-integration-for-accounting-firms/" },
      { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Scale Your Firm", description: "Grow your practice without proportional stress or hiring", href: "/solutions/scale-accounting-firm-without-chaos/" },
    ],
  },
  "remote-modern": {
    services: [
      { title: "Technology Solutions", description: "Strategic technology consulting to modernize your firm's operations", href: "/services/technology-consulting-for-accounting-firms/" },
      { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Stop Losing Clients", description: "Stay ahead of tech-savvy competitors with modern client experiences", href: "/solutions/stop-losing-clients-to-tech-savvy-cpas/" },
    ],
  },
  "service-type": {
    services: [
      { title: "Strategy & Integration", description: "Unified marketing strategy that connects all your channels", href: "/services/marketing-strategy-integration-for-accounting-firms/" },
      { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Scale Your Firm", description: "Grow your practice without proportional stress or hiring", href: "/solutions/scale-accounting-firm-without-chaos/" },
    ],
  },

  // --- Combo / Full Spectrum / Premium ---
  "marketing-combos": {
    services: [
      { title: "Strategy & Integration", description: "Unified marketing strategy that connects all your channels", href: "/services/marketing-strategy-integration-for-accounting-firms/" },
      { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Grow Without Growing Pains", description: "Expand capacity and revenue without operational chaos", href: "/solutions/grow-accounting-firm-without-growing-pains/" },
    ],
  },
  "operational-combos": {
    services: [
      { title: "Business Optimization", description: "Operational frameworks and process improvements for sustainable growth", href: "/services/business-optimization-for-accounting-firms/" },
      { title: "Technology Solutions", description: "Strategic technology consulting to modernize your firm's operations", href: "/services/technology-consulting-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Work Less, Earn More", description: "Reclaim hours each week by automating routine tasks", href: "/solutions/work-less-earn-more-as-a-cpa/" },
    ],
  },
  "full-spectrum": {
    services: [
      { title: "Strategy & Integration", description: "Unified marketing strategy that connects all your channels", href: "/services/marketing-strategy-integration-for-accounting-firms/" },
      { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Scale Your Firm", description: "Grow your practice without proportional stress or hiring", href: "/solutions/scale-accounting-firm-without-chaos/" },
    ],
  },
  "premium-packages": {
    services: [
      { title: "Fractional CIO Services", description: "Executive-level technology leadership without full-time overhead", href: "/services/fractional-cio-for-accounting-firms/" },
      { title: "Strategy & Integration", description: "Unified marketing strategy that connects all your channels", href: "/services/marketing-strategy-integration-for-accounting-firms/" },
    ],
    solutions: [
      { title: "Scale Your Firm", description: "Grow your practice without proportional stress or hiring", href: "/solutions/scale-accounting-firm-without-chaos/" },
    ],
  },
};

/** Default links for any subcategory not explicitly mapped */
const defaultLinks = {
  services: [
    { title: "Marketing Automation", description: "Automated lead capture, nurture, and follow-up in one system", href: "/services/marketing-automation-for-accounting-firms/" },
    { title: "SEO for Accountants", description: "AI-powered local search optimization to rank higher and attract prospects", href: "/services/seo-for-accounting-firms/" },
  ],
  solutions: [
    { title: "Scale Your Firm", description: "Grow your practice without proportional stress or hiring", href: "/solutions/scale-accounting-firm-without-chaos/" },
  ],
};

function getLinksForPage(subcategory: string) {
  return subcategoryLinks[subcategory] || defaultLinks;
}

const ProgrammaticPage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <NotFound />;

  const pageData = programmaticPages[slug];
  const pageMeta = programmaticPageIndex.find(p => p.slug === slug);

  if (!pageData || !pageMeta || !pageMeta.published) {
    return <NotFound />;
  }

  const links = getLinksForPage(pageMeta.subcategory);

  const relatedContent = (
    <>
      {links.services.length > 0 && (
        <RelatedContent heading="Related Services" items={links.services} />
      )}
      {links.solutions.length > 0 && (
        <RelatedContent heading="Explore Solutions" items={links.solutions} variant="teal" />
      )}
      {links.tools && links.tools.length > 0 && (
        <RelatedContent heading="Free Tools" items={links.tools} />
      )}
    </>
  );

  if (pageData.templateType === 'solution') {
    return <SolutionPageTemplate data={pageData as SolutionPageData} beforeFinalCta={relatedContent} />;
  }

  return <ServicePageTemplate data={pageData as ServicePageData} beforeFinalCta={relatedContent} />;
};

export default ProgrammaticPage;
