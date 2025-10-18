import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import Services from "./pages/Services";
import AllServices from "./pages/AllServices";
import Industries from "./pages/Industries";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SuccessStories from "./pages/SuccessStories";
import GetStarted from "./pages/GetStarted";
import QuickStart from "./pages/QuickStart";
import NotFound from "./pages/NotFound";
import ServerError from "./pages/ServerError";
import ThankYou from "./pages/ThankYou";

// Solution Pages
import ScaleFirm from "./pages/solutions/ScaleFirm";
import ClientRetention from "./pages/solutions/ClientRetention";
import RetentionStrategies from "./pages/solutions/RetentionStrategies";
import StopLosingClients from "./pages/solutions/StopLosingClients";
import GetMoreReferrals from "./pages/solutions/GetMoreReferrals";
import WorkLessEarnMore from "./pages/solutions/WorkLessEarnMore";
import GrowWithoutPains from "./pages/solutions/GrowWithoutPains";
import ProtectPractice from "./pages/solutions/ProtectPractice";

// Service Pages
import AutomatedLeadFollowUp from "./pages/services/AutomatedLeadFollowUp";
import ClientReviewGeneration from "./pages/services/ClientReviewGeneration";
import SEOForAccountants from "./pages/services/SEOForAccountants";
import SocialMediaManagement from "./pages/services/SocialMediaManagement";
import EmailMarketing from "./pages/services/EmailMarketing";
import WebsiteDesign from "./pages/services/WebsiteDesign";
import MarketingAutomation from "./pages/services/MarketingAutomation";
import TechnologySolutions from "./pages/services/TechnologySolutions";
import BusinessOptimization from "./pages/services/BusinessOptimization";
import ExecutiveServices from "./pages/services/ExecutiveServices";
import ContentMarketing from "./pages/services/ContentMarketing";
import OnlineReputationManagement from "./pages/services/OnlineReputationManagement";
import StrategyIntegration from "./pages/services/StrategyIntegration";

// Industry Pages
import TaxPreparation from "./pages/industries/TaxPreparation";
import BookkeepingServices from "./pages/industries/BookkeepingServices";
import BusinessAdvisory from "./pages/industries/BusinessAdvisory";
import AuditAssurance from "./pages/industries/AuditAssurance";

// Tools & Calculators Pages
import ToolsCalculators from "./pages/ToolsCalculators";
import EfficiencyQuiz from "./pages/tools/EfficiencyQuiz";
import MarketingScorecard from "./pages/tools/MarketingScorecard";
import ROICalculator from "./pages/tools/ROICalculator";
import AutomationReadinessQuiz from "./pages/tools/AutomationReadinessQuiz";
import WorkflowBottleneckFinder from "./pages/tools/WorkflowBottleneckFinder";
import TechStackROICalculator from "./pages/tools/TechStackROICalculator";
import ClientLifetimeValueCalculator from "./pages/tools/ClientLifetimeValueCalculator";
import LeadGenerationScorecard from "./pages/tools/LeadGenerationScorecard";
import ModernFirmQuiz from "./pages/tools/ModernFirmQuiz";
import GrowthPotentialScorecard from "./pages/tools/GrowthPotentialScorecard";
import SEOAudit from "./pages/tools/SEOAudit";
import PageGrader from "./pages/tools/PageGrader";
import AdvancedSEOQA from "./pages/tools/AdvancedSEOQA";
import GrowthCalculator from "./pages/GrowthCalculator";

// Legal Pages
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Toaster />
      {/* Global wave clip-path definitions */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }} aria-hidden="true">
        <defs>
          {/* BOTTOM WAVE - Desktop (120px height) */}
          <clipPath id="wave-bottom-desktop" clipPathUnits="objectBoundingBox">
            <path d="M0,0 L1,0 L1,0.92 Q0.75,1 0.5,0.92 T0,0.92 Z" />
          </clipPath>
          
          {/* BOTTOM WAVE - Mobile (80px height) */}
          <clipPath id="wave-bottom-mobile" clipPathUnits="objectBoundingBox">
            <path d="M0,0 L1,0 L1,0.88 Q0.75,1 0.5,0.88 T0,0.88 Z" />
          </clipPath>
          
          {/* TOP WAVE - Desktop (120px height) */}
          <clipPath id="wave-top-desktop" clipPathUnits="objectBoundingBox">
            <path d="M0,0.08 Q0.25,0 0.5,0.08 T1,0.08 L1,1 L0,1 Z" />
          </clipPath>
          
          {/* TOP WAVE - Mobile (80px height) */}
          <clipPath id="wave-top-mobile" clipPathUnits="objectBoundingBox">
            <path d="M0,0.12 Q0.25,0 0.5,0.12 T1,0.12 L1,1 L0,1 Z" />
          </clipPath>
        </defs>
      </svg>
      
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions-expert-marketing-agency-for-accounting-firms" element={<Solutions />} />
        <Route path="/leading-marketing-services-for-accounting-firms" element={<Services />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/all" element={<AllServices />} />
        <Route path="/services/all-professional-marketing-services-for-accounting-firms" element={<AllServices />} />
        <Route path="/all-services" element={<AllServices />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-studies" element={<SuccessStories />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/quick-start-marketing-for-cpa-firms" element={<QuickStart />} />
        
        {/* Solution Sub-pages */}
        <Route path="/solutions/i-want-to-scale-my-firm" element={<ScaleFirm />} />
        <Route path="/solutions/scale-firm" element={<ScaleFirm />} />
        <Route path="/solutions/i'm-losing-clients-to-competitors" element={<ClientRetention />} />
        <Route path="/solutions/client-retention" element={<ClientRetention />} />
        <Route path="/solutions/i-need-better-client-retention" element={<RetentionStrategies />} />
        <Route path="/solutions/retention-strategies" element={<RetentionStrategies />} />
        
        {/* Main Solution Categories */}
        <Route path="/solutions/stop-losing-clients-to-tech-savvy-cpas" element={<StopLosingClients />} />
        <Route path="/solutions/compete-with-tech-savvy-cpas" element={<StopLosingClients />} />
        <Route path="/solutions/get-more-referrals-without-asking" element={<GetMoreReferrals />} />
        <Route path="/solutions/increase-referrals" element={<GetMoreReferrals />} />
        <Route path="/solutions/work-less-earn-more" element={<WorkLessEarnMore />} />
        <Route path="/solutions/grow-without-growing-pains" element={<GrowWithoutPains />} />
        <Route path="/solutions/sustainable-growth" element={<GrowWithoutPains />} />
        <Route path="/solutions/protect-practice-and-future" element={<ProtectPractice />} />
        <Route path="/solutions/protect-your-practice" element={<ProtectPractice />} />
        
        {/* Service Sub-pages */}
        <Route path="/services/marketing-automation" element={<MarketingAutomation />} />
        <Route path="/services/technology-solutions" element={<TechnologySolutions />} />
        <Route path="/services/business-optimization" element={<BusinessOptimization />} />
        <Route path="/services/executive-services" element={<ExecutiveServices />} />
        <Route path="/services/automated-lead-follow-up" element={<AutomatedLeadFollowUp />} />
        <Route path="/services/client-review-generation" element={<ClientReviewGeneration />} />
        <Route path="/services/seo-for-accountants" element={<SEOForAccountants />} />
        <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
        <Route path="/services/email-marketing" element={<EmailMarketing />} />
        <Route path="/services/website-design" element={<WebsiteDesign />} />
        <Route path="/services/content-marketing" element={<ContentMarketing />} />
        <Route path="/services/online-reputation-management" element={<OnlineReputationManagement />} />
        <Route path="/services/strategy-integration" element={<StrategyIntegration />} />
        
        {/* Industry Sub-pages */}
        <Route path="/industries/tax-preparation" element={<TaxPreparation />} />
        <Route path="/industries/bookkeeping-services" element={<BookkeepingServices />} />
        <Route path="/industries/business-advisory" element={<BusinessAdvisory />} />
        <Route path="/industries/audit-assurance" element={<AuditAssurance />} />
        
        {/* Tools & Calculators */}
        <Route path="/tools" element={<ToolsCalculators />} />
        <Route path="/tools/efficiency-quiz" element={<EfficiencyQuiz />} />
        <Route path="/tools/marketing-scorecard" element={<MarketingScorecard />} />
        <Route path="/tools/roi-calculator" element={<ROICalculator />} />
        <Route path="/tools/automation-readiness-quiz" element={<AutomationReadinessQuiz />} />
        <Route path="/tools/workflow-bottleneck-finder" element={<WorkflowBottleneckFinder />} />
        <Route path="/tools/tech-stack-roi-calculator" element={<TechStackROICalculator />} />
        <Route path="/tools/client-lifetime-value-calculator" element={<ClientLifetimeValueCalculator />} />
        <Route path="/tools/lead-generation-scorecard" element={<LeadGenerationScorecard />} />
        <Route path="/tools/modern-firm-quiz" element={<ModernFirmQuiz />} />
        <Route path="/tools/growth-potential-scorecard" element={<GrowthPotentialScorecard />} />
        <Route path="/tools/seo-audit" element={<SEOAudit />} />
        <Route path="/tools/page-grader" element={<PageGrader />} />
        <Route path="/tools/advanced-seo-qa" element={<AdvancedSEOQA />} />
        
        {/* Funnel Pages */}
        <Route path="/growth-calculator" element={<GrowthCalculator />} />
        
        {/* Legal Pages */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/faq" element={<FAQ />} />
        
        {/* Utility Pages - Excluded from sitemap */}
        <Route path="/500" element={<ServerError />} />
        <Route path="/thank-you" element={<ThankYou />} />
        
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
