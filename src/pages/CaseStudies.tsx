import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, ArrowRight, Building2 } from "lucide-react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const featuredCaseStudy = {
    id: 1,
    title: "Payroll Automation ROI: $8,372 Saved & 94% Time Reduction",
    clientName: "12-Person Accounting Firm",
    industry: "Accounting Firm",
    metric: "419% ROI",
    firmSize: "Small to Mid-sized Firm",
    summary: "How one firm cut payroll processing from 8 hours to 30 minutes, achieving a 419% ROI in the first year through strategic automation.",
    slug: "payroll-automation-roi",
    timeReduction: "94% Time Saved",
    savings: "$8,372 Saved"
  };

  const upcomingStories = [
    {
      id: 2,
      title: "Strategic CPA Marketing Transformation",
      focus: "Client Acquisition & Digital Presence",
      comingSoon: true
    },
    {
      id: 3,
      title: "Tax Firm's Practice Management Evolution",
      focus: "Workflow Optimization & Team Efficiency",
      comingSoon: true
    },
    {
      id: 4,
      title: "Bookkeeping Firm's Growth Through Automation",
      focus: "Scalable Systems & Revenue Growth",
      comingSoon: true
    }
  ];

  return (
    <>
      <SEO 
        title="Case Studies | Real Results | SmartFirm"
        description="Explore real success stories from accounting firms that transformed their practice with SmartFirm's workflow automation, growth systems, and consulting services. See measurable results and ROI."
        canonicalUrl="https://smartfirm.io/case-studies"
        pageType="page"
        noindex={false}
        dateModified={new Date().toISOString()}
      />
      
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="section-padding bg-gradient-mesh-professional">
            <div className="container-default">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-6 text-base px-6 py-2 bg-white/20 text-white border-white/40 hover:bg-white/30">
                  Featured Success Story
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                  Real Results from Real Firms
                </h1>
                <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto">
                  Deep-dive analysis of transformation strategies that deliver measurable outcomes
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="section-padding bg-background-subtle">
            <div className="container-default">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                <div className="text-center p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-gradient-coral mb-2">419%</div>
                  <p className="text-sm text-muted-foreground font-medium">ROI Achieved</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">$8.4K</div>
                  <p className="text-sm text-muted-foreground font-medium">Annual Savings</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-gradient-teal mb-2">94%</div>
                  <p className="text-sm text-muted-foreground font-medium">Time Reduction</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">12wk</div>
                  <p className="text-sm text-muted-foreground font-medium">Payback Period</p>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Case Study */}
          <section className="section-padding bg-background">
            <div className="container-default">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-background to-background-subtle">
                    <div className="flex flex-wrap gap-3 mb-6">
                      <Badge variant="secondary" className="text-sm">
                        {featuredCaseStudy.industry}
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        {featuredCaseStudy.firmSize}
                      </Badge>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                      {featuredCaseStudy.title}
                    </h2>
                    <p className="text-lg text-foreground mb-6 leading-relaxed">
                      {featuredCaseStudy.summary}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                        <p className="text-2xl font-bold text-gradient-coral">{featuredCaseStudy.metric}</p>
                        <p className="text-sm text-foreground mt-1">First Year ROI</p>
                      </div>
                      <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <p className="text-2xl font-bold text-primary">{featuredCaseStudy.timeReduction}</p>
                        <p className="text-sm text-foreground mt-1">Time Reduction</p>
                      </div>
                    </div>
                    <Link to={`/case-studies/${featuredCaseStudy.slug}`}>
                      <Button size="lg" className="w-full sm:w-auto bg-gradient-coral hover:opacity-90 hover:-translate-y-1 transition-all duration-300 shadow-lg group">
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                  <div className="relative min-h-[300px] lg:min-h-full bg-gradient-mesh-professional flex items-center justify-center p-12">
                    <div className="text-center">
                      <div className="text-6xl md:text-8xl font-bold text-white/90 mb-4">
                        {featuredCaseStudy.savings}
                      </div>
                      <p className="text-xl text-white/80 font-medium">
                        First Year Savings
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Pipeline Section */}
          <section className="section-padding bg-background-subtle">
            <div className="container-default">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                  More Stories in Development
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We're documenting additional transformation journeys. Check back soon for more in-depth case studies.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {upcomingStories.map((story) => (
                  <Card key={story.id} className="relative overflow-hidden hover:shadow-lg transition-all duration-300 border-dashed border-2">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          Coming Soon
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-muted-foreground/70">
                        {story.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground italic">
                        Focus: {story.focus}
                      </p>
                    </CardContent>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 pointer-events-none"></div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding bg-gradient-mesh-professional">
            <div className="container-default">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-xl text-white/95 mb-10 leading-relaxed">
                  Join the growing number of accounting firms achieving measurable results with SmartFirm's 
                  comprehensive marketing and automation solutions.
                </p>
                <div className="flex justify-center">
                  <Link to="/get-started">
                    <Button size="lg" className="bg-gradient-coral hover:opacity-90 hover:-translate-y-1 transition-all duration-300 shadow-lg text-lg px-8" id="case-studies-cta-book-call-btn">
                      Book a Free Call
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudies;
