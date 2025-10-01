import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

// Solution Pages
import LeadGeneration from "./pages/solutions/LeadGeneration";
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
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/all" element={<AllServices />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/get-started" element={<GetStarted />} />
        
        {/* Solution Sub-pages */}
        <Route path="/solutions/i-need-more-leads" element={<LeadGeneration />} />
        <Route path="/solutions/lead-generation" element={<LeadGeneration />} />
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
        
        {/* Industry Sub-pages */}
        <Route path="/industries/tax-preparation" element={<TaxPreparation />} />
        <Route path="/industries/bookkeeping-services" element={<BookkeepingServices />} />
        <Route path="/industries/business-advisory" element={<BusinessAdvisory />} />
        <Route path="/industries/audit-&-assurance" element={<AuditAssurance />} />
        
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
        
        {/* Legal Pages */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/faq" element={<FAQ />} />
        
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
