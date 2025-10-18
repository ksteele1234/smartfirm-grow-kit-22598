import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  CheckCircle, 
  TrendingUp, 
  ArrowRight,
  Clock,
  Users,
  BarChart3
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const ToolsCalculators = () => {
  const tools = [
    {
      id: "efficiency-quiz",
      title: "How Efficient Is Your Firm?",
      description: "Score your efficiency in billing, client management, and marketing with our comprehensive assessment.",
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      duration: "5 minutes",
      results: "Instant scoring",
      link: "/tools/efficiency-quiz",
      color: "from-primary to-secondary"
    },
    {
      id: "marketing-scorecard",
      title: "Is Your Marketing Working?",
      description: "Quick yes/no assessment that reveals gaps in your marketing strategy and provides personalized action plans.",
      icon: <TrendingUp className="h-8 w-8 text-teal" />,
      duration: "3 minutes", 
      results: "Personalized report",
      link: "/tools/marketing-scorecard",
      color: "from-teal to-light-teal"
    },
    {
      id: "roi-calculator",
      title: "Marketing ROI Calculator",
      description: "Input your ad spend and lead data to estimate your marketing return on investment and growth potential.",
      icon: <Calculator className="h-8 w-8 text-secondary" />,
      duration: "2 minutes",
      results: "ROI projections",
      link: "/tools/roi-calculator", 
      color: "from-secondary to-blue-grey"
    },
    {
      id: "automation-readiness-quiz",
      title: "Automation Readiness Quiz",
      description: "Assess your firm's readiness for automation and discover which processes you can streamline today.",
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      duration: "4 minutes",
      results: "Readiness score",
      link: "/tools/automation-readiness-quiz",
      color: "from-primary to-secondary"
    },
    {
      id: "workflow-bottleneck-finder",
      title: "Workflow Bottleneck Finder",
      description: "Identify inefficiencies in your firm's workflows and get recommendations to eliminate bottlenecks.",
      icon: <BarChart3 className="h-8 w-8 text-teal" />,
      duration: "5 minutes",
      results: "Bottleneck analysis",
      link: "/tools/workflow-bottleneck-finder",
      color: "from-teal to-light-teal"
    },
    {
      id: "tech-stack-roi-calculator",
      title: "Tech Stack ROI Calculator",
      description: "Calculate the return on investment for your current technology stack and discover optimization opportunities.",
      icon: <Calculator className="h-8 w-8 text-secondary" />,
      duration: "3 minutes",
      results: "ROI analysis",
      link: "/tools/tech-stack-roi-calculator",
      color: "from-secondary to-blue-grey"
    },
    {
      id: "client-lifetime-value-calculator",
      title: "Client Lifetime Value Calculator",
      description: "Estimate the lifetime value of your clients and understand the true cost of client churn.",
      icon: <Users className="h-8 w-8 text-primary" />,
      duration: "3 minutes",
      results: "CLV metrics",
      link: "/tools/client-lifetime-value-calculator",
      color: "from-primary to-secondary"
    },
    {
      id: "lead-generation-scorecard",
      title: "Lead Generation Scorecard",
      description: "Evaluate your lead generation effectiveness and get actionable recommendations to improve conversions.",
      icon: <TrendingUp className="h-8 w-8 text-teal" />,
      duration: "4 minutes",
      results: "Lead gen score",
      link: "/tools/lead-generation-scorecard",
      color: "from-teal to-light-teal"
    },
    {
      id: "modern-firm-quiz",
      title: "Modern Firm Quiz",
      description: "Discover how modern your accounting firm is in technology, marketing, and operations.",
      icon: <CheckCircle className="h-8 w-8 text-secondary" />,
      duration: "5 minutes",
      results: "Modernization score",
      link: "/tools/modern-firm-quiz",
      color: "from-secondary to-blue-grey"
    },
    {
      id: "growth-potential-scorecard",
      title: "Growth Potential Scorecard",
      description: "Input your firm's data to benchmark performance and uncover untapped growth opportunities.",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      duration: "4 minutes",
      results: "Growth analysis",
      link: "/tools/growth-potential-scorecard",
      color: "from-primary to-secondary"
    },
    {
      id: "seo-audit",
      title: "SEO Audit Tool",
      description: "Analyze your website's SEO performance and get expert recommendations to improve search rankings.",
      icon: <TrendingUp className="h-8 w-8 text-teal" />,
      duration: "2 minutes",
      results: "SEO report",
      link: "/tools/seo-audit",
      color: "from-teal to-light-teal"
    },
    {
      id: "page-grader",
      title: "Page Grader",
      description: "Get a comprehensive grade for any page on your website with actionable SEO and performance insights.",
      icon: <BarChart3 className="h-8 w-8 text-secondary" />,
      duration: "1 minute",
      results: "Page grade",
      link: "/tools/page-grader",
      color: "from-secondary to-blue-grey"
    },
    {
      id: "advanced-seo-qa",
      title: "Advanced SEO Q&A",
      description: "Run a complete technical SEO audit across your entire site with detailed quality assurance reports.",
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      duration: "3 minutes",
      results: "Full site audit",
      link: "/tools/advanced-seo-qa",
      color: "from-primary to-secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Free Marketing Tools for Accounting Firms | SmartFirm"
        description="Access free marketing tools for accounting firms including growth calculators, ROI assessments, workflow audits, marketing scorecards, quizzes, and benchmarks."
        canonicalUrl="https://smartfirm.io/tools"
        pageType="default"
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Free Tools & Calculators", url: "/tools" }
        ]}
        faqs={[
          {
            question: "How do these tools help my accounting firm?",
            answer: "Our free tools & calculators provide data-driven insights into your firm's efficiency, marketing ROI, and growth potential, helping you make informed decisions about where to invest your time and resources."
          },
          {
            question: "Are these assessments really free?",
            answer: "Yes, all our assessment tools are completely free with no obligation. We designed them to help accounting firms identify opportunities for improvement."
          },
          {
            question: "How long do the assessments take?",
            answer: "Most assessments take between 2-5 minutes to complete and provide instant results with personalized recommendations."
          },
          {
            question: "What happens after I complete an assessment?",
            answer: "You'll receive immediate results with actionable recommendations. Optionally, you can book a free strategy call to discuss your results and explore how SmartFirm can help implement improvements."
          }
        ]}
      />
      <Header />
      
      {/* Breadcrumb */}
      <nav id="sf-breadcrumbs" className="bg-background-light border-b" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 lg:px-6 py-1.5">
          <Breadcrumb>
            <BreadcrumbList className="text-sm text-muted-foreground">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Free Tools & Calculators</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-background to-muted">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Marketing Tools For Accounting Firms | SmartFirm
              </h1>
              <div id="sf-keyword-intro">
                <p className="text-lg md:text-xl text-muted-foreground mb-4">
                  Our free marketing tools for accounting firms help you assess your current state, identify opportunities, and benchmark against competitors through interactive calculators and diagnostic assessments.
                </p>
              </div>
              <p className="text-base md:text-lg text-muted-foreground">
                Get instant, personalized recommendations to improve your practice.
              </p>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {tools.map((tool) => (
                <Card key={tool.id} className="group hover:shadow-lg transition-all duration-300 border-border relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  <CardHeader className="relative z-10 text-center pb-4">
                    <div className="mx-auto mb-4 p-3 rounded-lg bg-accent w-fit">
                      {tool.icon}
                    </div>
                    <CardTitle className="text-xl text-foreground mb-3">
                      {tool.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10 space-y-4">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {tool.duration}
                      </div>
                      <div className="flex items-center">
                        <BarChart3 className="h-4 w-4 mr-1" />
                        {tool.results}
                      </div>
                    </div>
                    <Button 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      variant="outline"
                      asChild
                    >
                      <a href={tool.link}>
                        Start Assessment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Why Use Our Assessment Tools?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Get actionable insights that help you make informed decisions about your firm's growth strategy.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                <div className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-accent w-fit">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Expert-Designed</h3>
                  <p className="text-muted-foreground">
                    Created by accounting industry experts who understand the unique challenges of growing a practice.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-accent w-fit">
                    <BarChart3 className="h-8 w-8 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Data-Driven Insights</h3>
                  <p className="text-muted-foreground">
                    Get specific, actionable recommendations based on your responses and industry benchmarks.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-accent w-fit">
                    <Clock className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Quick & Easy</h3>
                  <p className="text-muted-foreground">
                    Complete assessments in just minutes and get instant results with personalized recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-6">
            <Card className="max-w-3xl mx-auto border-primary/20 bg-gradient-to-br from-accent/30 to-accent/10">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl md:text-3xl text-primary mb-4">
                  Ready to Optimize Your Firm?
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base md:text-lg">
                  After completing our assessments, discover how SmartFirm can help you implement 
                  the strategies needed to achieve your growth goals.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <a href="/get-started">
                    Get Your Free Strategy Session
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <details className="group border border-border rounded-lg p-6 bg-background">
                  <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex items-center justify-between">
                    How do these tools help my accounting firm?
                    <span className="ml-2 transform group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Our free tools & calculators provide data-driven insights into your firm's efficiency, marketing ROI, and growth potential, helping you make informed decisions about where to invest your time and resources.
                  </p>
                </details>

                <details className="group border border-border rounded-lg p-6 bg-background">
                  <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex items-center justify-between">
                    Are these assessments really free?
                    <span className="ml-2 transform group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Yes, all our assessment tools are completely free with no obligation. We designed them to help accounting firms identify opportunities for improvement.
                  </p>
                </details>

                <details className="group border border-border rounded-lg p-6 bg-background">
                  <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex items-center justify-between">
                    How long do the assessments take?
                    <span className="ml-2 transform group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Most assessments take between 2-5 minutes to complete and provide instant results with personalized recommendations.
                  </p>
                </details>

                <details className="group border border-border rounded-lg p-6 bg-background">
                  <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex items-center justify-between">
                    What happens after I complete an assessment?
                    <span className="ml-2 transform group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    You'll receive immediate results with actionable recommendations. Optionally, you can book a free strategy call to discuss your results and explore how SmartFirm can help implement improvements.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ToolsCalculators;