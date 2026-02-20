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
const ClientOnboardingProblems = lazy(() => import("./pages/solutions/ClientOnboardingProblems"));

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
const ClientOnboardingAutomation = lazy(() => import("./pages/services/ClientOnboardingAutomation"));
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

// Programmatic SEO Pages
const ProgrammaticPage = lazy(() => import("./pages/grow/ProgrammaticPage"));

// Other Pages
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const PayrollAutomationROI = lazy(() => import("./pages/case-studies/PayrollAutomationROI"));

// Blog Pages
const BlogIndex = lazy(() => import("./pages/blog/BlogIndex"));
const BlogPost = lazy(() => import("./pages/blog/BlogPost"));
const BlogPostPreview = lazy(() => import("./pages/blog/BlogPostPreview"));
const PillarPage = lazy(() => import("./pages/blog/PillarPage"));
const TagPage = lazy(() => import("./pages/blog/TagPage"));

// Legal Pages
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Cookies = lazy(() => import("./pages/Cookies"));
const FAQ = lazy(() => import("./pages/FAQ"));
const FaqDetail = lazy(() => import("./pages/faq/FaqDetail"));
const ReactivationTerms = lazy(() => import("./pages/ReactivationTerms"));

// Debug Pages (excluded from sitemap)
const DebugUrlProbe = lazy(() => import("./pages/DebugUrlProbe"));

// Helper to handle chunk loading errors (e.g., after deployment)
const lazyWithRetry = (componentImport: () => Promise<any>) =>
  lazy(async () => {
    try {
      return await componentImport();
    } catch (error) {
      // Chunk failed to load (likely new deployment), reload page
      console.warn('Chunk load failed, reloading...', error);
      window.location.reload();
      return { default: () => null };
    }
  });

// Auth & Admin Pages
const Auth = lazyWithRetry(() => import("./pages/auth/Auth"));
const AdminLayout = lazyWithRetry(() => import("./pages/admin/AdminLayout"));
const AdminDashboard = lazyWithRetry(() => import("./pages/admin/AdminDashboard"));
const PostList = lazyWithRetry(() => import("./pages/admin/PostList"));
const PostEditor = lazyWithRetry(() => import("./pages/admin/PostEditor"));
const CategoryManager = lazyWithRetry(() => import("./pages/admin/CategoryManager"));
const TagManager = lazyWithRetry(() => import("./pages/admin/TagManager"));
const ProfileManager = lazyWithRetry(() => import("./pages/admin/ProfileManager"));

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
            <Route path="/home-8804" element={<Navigate to="/" replace />} />
            <Route path="/leading-marketing-services-for-accounting-firms" element={<Navigate to="/services/" replace />} />
            <Route path="/solutions-expert-marketing-agency-for-accounting-firms" element={<Navigate to="/solutions/" replace />} />
            <Route path="/industries-expert-marketing-agency-for-accountants" element={<Navigate to="/industries/" replace />} />
            <Route path="/about-us" element={<Navigate to="/marketing-agency-for-accounting-firms" replace />} />
            <Route path="/demo" element={<Navigate to="/get-started-accounting-firm-automation" replace />} />
            <Route path="/demo-call-calendar" element={<Navigate to="/get-started-accounting-firm-automation" replace />} />
            <Route path="/book-demo" element={<Navigate to="/get-started-accounting-firm-automation" replace />} />
            <Route path="/checkout" element={<Navigate to="/get-started-accounting-firm-automation" replace />} />
            <Route path="/audit-landingpage" element={<Navigate to="/get-started-accounting-firm-automation" replace />} />
            <Route path="/smartfirm-audit-landingpage" element={<Navigate to="/get-started-accounting-firm-automation" replace />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/services" element={<Services />} />
            <Route path="/automation-and-marketing-services-for-accounting-firms" element={<AllServices />} />
            <Route path="/all-services" element={<Navigate to="/automation-and-marketing-services-for-accounting-firms" replace />} />
            <Route path="/services/all-professional-marketing-services-for-accounting-firms" element={<Navigate to="/automation-and-marketing-services-for-accounting-firms" replace />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/marketing-agency-for-accounting-firms" element={<About />} />
            <Route path="/about" element={<Navigate to="/marketing-agency-for-accounting-firms" replace />} />
            <Route path="/accounting-firm-automation-consultation" element={<Contact />} />
            <Route path="/contact" element={<Navigate to="/accounting-firm-automation-consultation" replace />} />
            <Route path="/get-started-accounting-firm-automation" element={<GetStarted />} />
            <Route path="/get-started" element={<Navigate to="/get-started-accounting-firm-automation" replace />} />
            <Route path="/quick-start-automation-package-for-cpa-firms" element={<QuickStart />} />
            <Route path="/quick-start" element={<Navigate to="/quick-start-automation-package-for-cpa-firms" replace />} />
            <Route path="/quick-start-marketing-for-cpa-firms" element={<Navigate to="/quick-start-automation-package-for-cpa-firms" replace />} />

            {/* Solution Sub-pages */}
            <Route path="/solutions/scale-accounting-firm-without-chaos" element={<ScaleFirm />} />
            <Route path="/solutions/stop-losing-clients-to-tech-savvy-cpas" element={<StopLosingClients />} />
            <Route path="/solutions/get-more-referrals-for-cpa-firm-without-asking" element={<GetMoreReferrals />} />
            <Route path="/solutions/work-less-earn-more-as-a-cpa" element={<WorkLessEarnMore />} />
            <Route path="/solutions/grow-accounting-firm-without-growing-pains" element={<GrowWithoutPains />} />
            <Route path="/solutions/protect-accounting-practice-from-data-breaches" element={<ProtectPractice />} />
            <Route path="/solutions/client-onboarding-problems" element={<ClientOnboardingProblems />} />
            {/* Solution page redirects for old slugs */}
            <Route path="/solutions/scale-accounting-firm-successfully" element={<Navigate to="/solutions/scale-accounting-firm-without-chaos" replace />} />
            <Route path="/solutions/get-more-referrals-without-asking" element={<Navigate to="/solutions/get-more-referrals-for-cpa-firm-without-asking" replace />} />
            <Route path="/solutions/work-less-earn-more" element={<Navigate to="/solutions/work-less-earn-more-as-a-cpa" replace />} />
            <Route path="/solutions/grow-without-growing-pains" element={<Navigate to="/solutions/grow-accounting-firm-without-growing-pains" replace />} />
            <Route path="/solutions/protect-practice-and-future" element={<Navigate to="/solutions/protect-accounting-practice-from-data-breaches" replace />} />

            {/* Service Sub-pages */}
            <Route path="/services/ai-transformation-roadmap-for-accounting-firms" element={<AITransformationRoadmap />} />
            <Route path="/services/ai-process-optimization-for-accounting-firms" element={<SingleProcessAITransformation />} />
            <Route path="/ai-transformation-offer" element={<AITransformationOffer />} />
            <Route path="/list-reactivation-offer" element={<ListReactivationOffer />} />
            <Route path="/services/marketing-automation-for-accounting-firms" element={<MarketingAutomation />} />
            <Route path="/services/technology-consulting-for-accounting-firms" element={<TechnologySolutions />} />
            <Route path="/services/business-optimization-for-accounting-firms" element={<BusinessOptimization />} />
            <Route path="/services/fractional-cio-for-accounting-firms" element={<ExecutiveServices />} />
            <Route path="/services/automated-lead-follow-up-for-accounting-firms" element={<AutomatedLeadFollowUp />} />
            <Route path="/services/automated-review-generation-for-cpas" element={<ClientReviewGeneration />} />
            <Route path="/services/seo-for-accounting-firms" element={<SEOForAccountants />} />
            <Route path="/services/social-media-management-for-accounting-firms" element={<SocialMediaManagement />} />
            <Route path="/services/email-marketing-for-accounting-firms" element={<EmailMarketing />} />
            <Route path="/services/website-design-for-accounting-firms" element={<WebsiteDesign />} />
            <Route path="/services/content-marketing-for-accounting-firms" element={<ContentMarketing />} />
            <Route path="/services/reputation-management-for-cpa-firms" element={<OnlineReputationManagement />} />
            <Route path="/services/marketing-strategy-integration-for-accounting-firms" element={<StrategyIntegration />} />
            <Route path="/services/marketing-add-ons-for-accounting-firms" element={<AddOns />} />
            <Route path="/services/client-onboarding-automation" element={<ClientOnboardingAutomation />} />

            {/* Service page redirects for old slugs */}
            <Route path="/services/ai-transformation-roadmap" element={<Navigate to="/services/ai-transformation-roadmap-for-accounting-firms" replace />} />
            <Route path="/services/single-process-ai-transformation" element={<Navigate to="/services/ai-process-optimization-for-accounting-firms" replace />} />
            <Route path="/services/accounting-firm-technology-consulting" element={<Navigate to="/services/technology-consulting-for-accounting-firms" replace />} />
            <Route path="/services/automated-lead-follow-up-for-cpas" element={<Navigate to="/services/automated-lead-follow-up-for-accounting-firms" replace />} />
            <Route path="/services/social-media-management-for-cpas" element={<Navigate to="/services/social-media-management-for-accounting-firms" replace />} />
            <Route path="/services/email-marketing-for-cpas" element={<Navigate to="/services/email-marketing-for-accounting-firms" replace />} />
            <Route path="/services/professional-website-design-for-accounting-firms" element={<Navigate to="/services/website-design-for-accounting-firms" replace />} />
            <Route path="/services/strategic-content-marketing-for-cpas" element={<Navigate to="/services/content-marketing-for-accounting-firms" replace />} />
            <Route path="/services/reputation-management-for-cpas" element={<Navigate to="/services/reputation-management-for-cpa-firms" replace />} />
            <Route path="/services/add-ons" element={<Navigate to="/services/marketing-add-ons-for-accounting-firms" replace />} />
            {/* Legacy service redirects (2nd generation) */}
            <Route path="/services/marketing-automation" element={<Navigate to="/services/marketing-automation-for-accounting-firms" replace />} />
            <Route path="/services/technology-solutions" element={<Navigate to="/services/technology-consulting-for-accounting-firms" replace />} />
            <Route path="/services/business-optimization" element={<Navigate to="/services/business-optimization-for-accounting-firms" replace />} />
            <Route path="/services/executive-services" element={<Navigate to="/services/fractional-cio-for-accounting-firms" replace />} />
            <Route path="/services/automated-lead-follow-up" element={<Navigate to="/services/automated-lead-follow-up-for-accounting-firms" replace />} />
            <Route path="/services/client-review-generation" element={<Navigate to="/services/automated-review-generation-for-cpas" replace />} />
            <Route path="/services/seo-for-accountants" element={<Navigate to="/services/seo-for-accounting-firms" replace />} />
            <Route path="/services/social-media-management" element={<Navigate to="/services/social-media-management-for-accounting-firms" replace />} />
            <Route path="/services/email-marketing" element={<Navigate to="/services/email-marketing-for-accounting-firms" replace />} />
            <Route path="/services/website-design" element={<Navigate to="/services/website-design-for-accounting-firms" replace />} />
            <Route path="/services/content-marketing" element={<Navigate to="/services/content-marketing-for-accounting-firms" replace />} />
            <Route path="/services/online-reputation-management" element={<Navigate to="/services/reputation-management-for-cpa-firms" replace />} />
            <Route path="/services/strategy-integration" element={<Navigate to="/services/marketing-strategy-integration-for-accounting-firms" replace />} />

            {/* Industry Sub-pages */}
            <Route path="/industries/automation-for-tax-preparation-firms" element={<TaxPreparation />} />
            <Route path="/industries/marketing-for-bookkeeping-firms" element={<BookkeepingServices />} />
            <Route path="/industries/business-advisory" element={<BusinessAdvisory />} />
            <Route path="/industries/marketing-for-audit-firms" element={<AuditAssurance />} />

            {/* Industry page redirects for old slugs */}
            <Route path="/industries/tax-preparation-marketing-solutions" element={<Navigate to="/industries/automation-for-tax-preparation-firms" replace />} />
            <Route path="/industries/bookkeeping-services-marketing-automation" element={<Navigate to="/industries/marketing-for-bookkeeping-firms" replace />} />
            <Route path="/industries/audit-assurance-marketing-agency" element={<Navigate to="/industries/marketing-for-audit-firms" replace />} />
            {/* Legacy industry redirects */}
            <Route path="/industries/tax-preparation" element={<Navigate to="/industries/automation-for-tax-preparation-firms" replace />} />
            <Route path="/industries/bookkeeping-services" element={<Navigate to="/industries/marketing-for-bookkeeping-firms" replace />} />
            <Route path="/industries/marketing-for-business-advisors" element={<Navigate to="/industries/business-advisory" replace />} />

            {/* Tools & Calculators */}
            <Route path="/tools" element={<ToolsCalculators />} />
            <Route path="/tools/accounting-firm-efficiency-assessment" element={<EfficiencyQuiz />} />
            <Route path="/tools/marketing-assessment-for-accountants" element={<MarketingScorecard />} />
            <Route path="/tools/marketing-roi-calculator-for-accounting-firms" element={<ROICalculator />} />
            <Route path="/tools/automation-readiness-assessment-for-accountants" element={<AutomationReadinessQuiz />} />
            <Route path="/tools/accounting-firm-workflow-audit-tool" element={<WorkflowBottleneckFinder />} />
            <Route path="/tools/accounting-firm-technology-roi-calculator" element={<TechStackROICalculator />} />
            <Route path="/tools/client-lifetime-value-calculator-for-accountants" element={<ClientLifetimeValueCalculator />} />
            <Route path="/tools/lead-generation-scorecard-for-accounting-firms" element={<LeadGenerationScorecard />} />
            <Route path="/tools/modern-accounting-firm-assessment" element={<ModernFirmQuiz />} />
            <Route path="/tools/accounting-firm-growth-scorecard" element={<GrowthPotentialScorecard />} />
            <Route path="/tools/seo-audit" element={<SEOAudit />} />
            <Route path="/tools/page-grader" element={<PageGrader />} />
            <Route path="/tools/advanced-seo-qa" element={<AdvancedSEOQA />} />
            {/* Tool page redirects for old slugs */}
            <Route path="/tools/efficiency-quiz" element={<Navigate to="/tools/accounting-firm-efficiency-assessment" replace />} />
            <Route path="/tools/marketing-scorecard" element={<Navigate to="/tools/marketing-assessment-for-accountants" replace />} />
            <Route path="/tools/roi-calculator" element={<Navigate to="/tools/marketing-roi-calculator-for-accounting-firms" replace />} />
            <Route path="/tools/automation-readiness-quiz" element={<Navigate to="/tools/automation-readiness-assessment-for-accountants" replace />} />
            <Route path="/tools/workflow-bottleneck-finder" element={<Navigate to="/tools/accounting-firm-workflow-audit-tool" replace />} />
            <Route path="/tools/tech-stack-roi-calculator" element={<Navigate to="/tools/accounting-firm-technology-roi-calculator" replace />} />
            <Route path="/tools/client-lifetime-value-calculator" element={<Navigate to="/tools/client-lifetime-value-calculator-for-accountants" replace />} />
            <Route path="/tools/lead-generation-scorecard" element={<Navigate to="/tools/lead-generation-scorecard-for-accounting-firms" replace />} />
            <Route path="/tools/modern-firm-quiz" element={<Navigate to="/tools/modern-accounting-firm-assessment" replace />} />
            <Route path="/tools/growth-potential-scorecard" element={<Navigate to="/tools/accounting-firm-growth-scorecard" replace />} />

            {/* Funnel Pages */}
            <Route path="/accounting-firm-growth-calculator" element={<GrowthCalculator />} />
            <Route path="/growth-calculator" element={<Navigate to="/accounting-firm-growth-calculator" replace />} />

            {/* Blog */}
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/preview/:slug" element={<BlogPostPreview />} />
            <Route path="/blog/tags/:slug" element={<TagPage />} />
            <Route path="/blog/guide/:slug" element={<PillarPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* Case Studies */}
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/payroll-automation-roi-for-accounting-firms" element={<PayrollAutomationROI />} />
            <Route path="/case-studies/payroll-automation-roi" element={<Navigate to="/case-studies/payroll-automation-roi-for-accounting-firms" replace />} />

            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-of-service" element={<Terms />} />
            <Route path="/cookie-policy" element={<Cookies />} />
            {/* Legal page redirects for old slugs */}
            <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/terms" element={<Navigate to="/terms-of-service" replace />} />
            <Route path="/cookies" element={<Navigate to="/cookie-policy" replace />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/faq/:slug" element={<FaqDetail />} />
            <Route path="/reactivation-terms" element={<ReactivationTerms />} />

            {/* Utility Pages - Excluded from sitemap */}
            <Route path="/__debug/url-probe" element={<DebugUrlProbe />} />
            <Route path="/500" element={<ServerError />} />
            <Route path="/thank-you" element={<ThankYou />} />

            {/* Auth & Admin */}
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="posts" element={<PostList />} />
              <Route path="posts/new" element={<PostEditor />} />
              <Route path="posts/:id/edit" element={<PostEditor />} />
              <Route path="categories" element={<CategoryManager />} />
              <Route path="tags" element={<TagManager />} />
              <Route path="profiles" element={<ProfileManager />} />
            </Route>

            {/* Programmatic SEO Pages */}
            <Route path="/grow/:slug" element={<ProgrammaticPage />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
