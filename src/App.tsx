import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SkipToContent from "./components/ui/skip-to-content";

// Critical pages - load immediately
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load all other pages for better performance
const Solutions = lazy(() => import("./pages/Solutions"));
const Services = lazy(() => import("./pages/Services"));
const AllServices = lazy(() => import("./pages/AllServices"));
const Industries = lazy(() => import("./pages/Industries"));
const Resources = lazy(() => import("./pages/Resources"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const GetStarted = lazy(() => import("./pages/GetStarted"));
const QuickStart = lazy(() => import("./pages/QuickStart"));
const ServerError = lazy(() => import("./pages/ServerError"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

// Solution Pages
const ScaleFirm = lazy(() => import("./pages/solutions/ScaleFirm"));
const StopLosingClients = lazy(() => import("./pages/solutions/StopLosingClients"));
const GetMoreReferrals = lazy(() => import("./pages/solutions/GetMoreReferrals"));
const WorkLessEarnMore = lazy(() => import("./pages/solutions/WorkLessEarnMore"));
const GrowWithoutPains = lazy(() => import("./pages/solutions/GrowWithoutPains"));
const ProtectPractice = lazy(() => import("./pages/solutions/ProtectPractice"));

// Service Pages
const AutomatedLeadFollowUp = lazy(() => import("./pages/services/AutomatedLeadFollowUp"));
const ClientReviewGeneration = lazy(() => import("./pages/services/ClientReviewGeneration"));
const SEOForAccountants = lazy(() => import("./pages/services/SEOForAccountants"));
const SocialMediaManagement = lazy(() => import("./pages/services/SocialMediaManagement"));
const EmailMarketing = lazy(() => import("./pages/services/EmailMarketing"));
const WebsiteDesign = lazy(() => import("./pages/services/WebsiteDesign"));
const MarketingAutomation = lazy(() => import("./pages/services/MarketingAutomation"));
const TechnologySolutions = lazy(() => import("./pages/services/TechnologySolutions"));
const BusinessOptimization = lazy(() => import("./pages/services/BusinessOptimization"));
const ExecutiveServices = lazy(() => import("./pages/services/ExecutiveServices"));
const ContentMarketing = lazy(() => import("./pages/services/ContentMarketing"));
const OnlineReputationManagement = lazy(() => import("./pages/services/OnlineReputationManagement"));
const StrategyIntegration = lazy(() => import("./pages/services/StrategyIntegration"));
const AddOns = lazy(() => import("./pages/services/AddOns"));
const AITransformationRoadmap = lazy(() => import("./pages/services/AITransformationRoadmap"));
const SingleProcessAITransformation = lazy(() => import("./pages/services/SingleProcessAITransformation"));
const AITransformationOffer = lazy(() => import("./pages/AITransformationOffer"));
const ListReactivationOffer = lazy(() => import("./pages/ListReactivationOffer"));

// Industry Pages
const TaxPreparation = lazy(() => import("./pages/industries/TaxPreparation"));
const BookkeepingServices = lazy(() => import("./pages/industries/BookkeepingServices"));
const BusinessAdvisory = lazy(() => import("./pages/industries/BusinessAdvisory"));
const AuditAssurance = lazy(() => import("./pages/industries/AuditAssurance"));

// Tools & Calculators Pages
const ToolsCalculators = lazy(() => import("./pages/ToolsCalculators"));
const EfficiencyQuiz = lazy(() => import("./pages/tools/EfficiencyQuiz"));
const MarketingScorecard = lazy(() => import("./pages/tools/MarketingScorecard"));
const ROICalculator = lazy(() => import("./pages/tools/ROICalculator"));
const AutomationReadinessQuiz = lazy(() => import("./pages/tools/AutomationReadinessQuiz"));
const WorkflowBottleneckFinder = lazy(() => import("./pages/tools/WorkflowBottleneckFinder"));
const TechStackROICalculator = lazy(() => import("./pages/tools/TechStackROICalculator"));
const ClientLifetimeValueCalculator = lazy(() => import("./pages/tools/ClientLifetimeValueCalculator"));
const LeadGenerationScorecard = lazy(() => import("./pages/tools/LeadGenerationScorecard"));
const ModernFirmQuiz = lazy(() => import("./pages/tools/ModernFirmQuiz"));
const GrowthPotentialScorecard = lazy(() => import("./pages/tools/GrowthPotentialScorecard"));
const SEOAudit = lazy(() => import("./pages/tools/SEOAudit"));
const PageGrader = lazy(() => import("./pages/tools/PageGrader"));
const AdvancedSEOQA = lazy(() => import("./pages/tools/AdvancedSEOQA"));
const GrowthCalculator = lazy(() => import("./pages/GrowthCalculator"));

// Other Pages
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const PayrollAutomationROI = lazy(() => import("./pages/case-studies/PayrollAutomationROI"));

// Legal Pages
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Cookies = lazy(() => import("./pages/Cookies"));
const FAQ = lazy(() => import("./pages/FAQ"));
const ReactivationTerms = lazy(() => import("./pages/ReactivationTerms"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <p className="mt-4 text-muted-foreground">Loading page...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Toaster />
      <SkipToContent />

      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/solutions-expert-marketing-agency-for-accounting-firms" element={<Solutions />} />
            <Route path="/leading-marketing-services-for-accounting-firms" element={<Services />} />
            <Route path="/services/all-professional-marketing-services-for-accounting-firms" element={<AllServices />} />
            <Route path="/industries-expert-marketing-agency-for-accountants" element={<Industries />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/quick-start-marketing-for-cpa-firms" element={<QuickStart />} />
            
            {/* Solution Sub-pages */}
            <Route path="/solutions/scale-accounting-firm-successfully" element={<ScaleFirm />} />
            <Route path="/solutions/stop-losing-clients-to-tech-savvy-cpas" element={<StopLosingClients />} />
            <Route path="/solutions/get-more-referrals-without-asking" element={<GetMoreReferrals />} />
            <Route path="/solutions/work-less-earn-more" element={<WorkLessEarnMore />} />
            <Route path="/solutions/grow-without-growing-pains" element={<GrowWithoutPains />} />
            <Route path="/solutions/protect-practice-and-future" element={<ProtectPractice />} />
            
            {/* Service Sub-pages */}
          <Route path="/services/ai-transformation-roadmap" element={<AITransformationRoadmap />} />
          <Route path="/services/single-process-ai-transformation" element={<SingleProcessAITransformation />} />
          <Route path="/ai-transformation-offer" element={<AITransformationOffer />} />
          <Route path="/list-reactivation-offer" element={<ListReactivationOffer />} />
            <Route path="/services/marketing-automation-for-accounting-firms" element={<MarketingAutomation />} />
            <Route path="/services/accounting-firm-technology-consulting" element={<TechnologySolutions />} />
            <Route path="/services/business-optimization-for-accounting-firms" element={<BusinessOptimization />} />
            <Route path="/services/fractional-cio-for-accounting-firms" element={<ExecutiveServices />} />
            <Route path="/services/automated-lead-follow-up-for-cpas" element={<AutomatedLeadFollowUp />} />
            <Route path="/services/automated-review-generation-for-cpas" element={<ClientReviewGeneration />} />
            <Route path="/services/seo-for-accounting-firms" element={<SEOForAccountants />} />
            <Route path="/services/social-media-management-for-cpas" element={<SocialMediaManagement />} />
            <Route path="/services/email-marketing-for-cpas" element={<EmailMarketing />} />
            <Route path="/services/professional-website-design-for-accounting-firms" element={<WebsiteDesign />} />
            <Route path="/services/strategic-content-marketing-for-cpas" element={<ContentMarketing />} />
            <Route path="/services/reputation-management-for-cpas" element={<OnlineReputationManagement />} />
            <Route path="/services/marketing-strategy-integration-for-accounting-firms" element={<StrategyIntegration />} />
            <Route path="/services/add-ons" element={<AddOns />} />
            
            {/* Service page redirects for old slugs */}
            <Route path="/services/marketing-automation" element={<Navigate to="/services/marketing-automation-for-accounting-firms" replace />} />
            <Route path="/services/technology-solutions" element={<Navigate to="/services/accounting-firm-technology-consulting" replace />} />
            <Route path="/services/business-optimization" element={<Navigate to="/services/business-optimization-for-accounting-firms" replace />} />
            <Route path="/services/executive-services" element={<Navigate to="/services/fractional-cio-for-accounting-firms" replace />} />
            <Route path="/services/automated-lead-follow-up" element={<Navigate to="/services/automated-lead-follow-up-for-cpas" replace />} />
            <Route path="/services/client-review-generation" element={<Navigate to="/services/automated-review-generation-for-cpas" replace />} />
            <Route path="/services/seo-for-accountants" element={<Navigate to="/services/seo-for-accounting-firms" replace />} />
            <Route path="/services/social-media-management" element={<Navigate to="/services/social-media-management-for-cpas" replace />} />
            <Route path="/services/email-marketing" element={<Navigate to="/services/email-marketing-for-cpas" replace />} />
            <Route path="/services/website-design" element={<Navigate to="/services/professional-website-design-for-accounting-firms" replace />} />
            <Route path="/services/content-marketing" element={<Navigate to="/services/strategic-content-marketing-for-cpas" replace />} />
            <Route path="/services/online-reputation-management" element={<Navigate to="/services/reputation-management-for-cpas" replace />} />
            <Route path="/services/strategy-integration" element={<Navigate to="/services/marketing-strategy-integration-for-accounting-firms" replace />} />
            
            {/* Industry Sub-pages */}
            <Route path="/industries/tax-preparation-marketing-solutions" element={<TaxPreparation />} />
            <Route path="/industries/bookkeeping-services-marketing-automation" element={<BookkeepingServices />} />
            <Route path="/industries/business-advisory-marketing-services" element={<BusinessAdvisory />} />
            <Route path="/industries/audit-assurance-marketing-agency" element={<AuditAssurance />} />
            
            {/* Industry page redirects for old slugs */}
            <Route path="/industries/tax-preparation" element={<Navigate to="/industries/tax-preparation-marketing-solutions" replace />} />
            <Route path="/industries/bookkeeping-services" element={<Navigate to="/industries/bookkeeping-services-marketing-automation" replace />} />
            <Route path="/industries/marketing-for-business-advisors" element={<Navigate to="/industries/business-advisory-marketing-services" replace />} />
            <Route path="/industries/marketing-for-audit-firms" element={<Navigate to="/industries/audit-assurance-marketing-agency" replace />} />
            
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
            
            {/* Case Studies */}
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/payroll-automation-roi" element={<PayrollAutomationROI />} />
            
{/* Legal Pages */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/reactivation-terms" element={<ReactivationTerms />} />
            
            {/* Utility Pages - Excluded from sitemap */}
            <Route path="/500" element={<ServerError />} />
            <Route path="/thank-you" element={<ThankYou />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
