import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, ArrowRight, Building2 } from "lucide-react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Payroll Automation ROI: $8,372 Saved & 94% Time Reduction",
      clientName: "12-Person Accounting Firm",
      industry: "Accounting Firm",
      metric: "419% ROI",
      firmSize: "Small to Mid-sized Firm",
      summary: "How one firm cut payroll processing from 8 hours to 30 minutes, achieving a 419% ROI in the first year through strategic automation.",
      slug: "payroll-automation-roi"
    }
  ];

  return (
    <>
      <SEO 
        title="Case Studies | Real Results from Accounting Firms | SmartFirm"
        description="Explore real success stories from accounting firms that transformed their practice with SmartFirm's marketing automation and business optimization solutions."
        canonicalUrl="https://smartfirm.io/case-studies"
      />
      
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="section-padding bg-gradient-mesh-professional">
            <div className="container-default">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="h1 mb-6">Real Results from Real Firms</h1>
                <p className="text-lg md:text-xl text-on-accent-light/90 leading-relaxed">
                  See how accounting firms like yours have transformed their practice with 
                  strategic marketing automation and operational excellence.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="section-padding bg-background">
            <div className="container-default">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-4xl font-bold text-accent">1+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Success Stories</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-4xl font-bold text-accent">300%+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Average ROI</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <Building2 className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-4xl font-bold text-accent">500+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Firms Served</p>
                  </CardContent>
                </Card>
              </div>

              {/* Case Studies Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((study) => (
                  <Card key={study.id} className="flex flex-col">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <Badge variant="secondary" className="shrink-0">
                          {study.industry}
                        </Badge>
                        <Badge variant="outline" className="shrink-0">
                          {study.firmSize}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{study.clientName}</p>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="mb-4 p-4 bg-accent/5 rounded-lg border border-accent/20">
                        <p className="text-lg font-semibold text-accent text-center">
                          {study.metric}
                        </p>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        {study.summary}
                      </p>
                      <Link to={`/case-studies/${study.slug}`}>
                        <Button variant="ghost" className="w-full group">
                          Read Full Story
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-16">
                <p className="text-xl text-muted-foreground">
                  More case studies coming soon. Check back regularly for new success stories.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding bg-gradient-mesh-professional">
            <div className="container-default">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="h2 mb-6">Ready to Write Your Success Story?</h2>
                <p className="text-lg text-on-accent-light/90 mb-8">
                  Join the growing number of accounting firms achieving measurable results with SmartFirm's 
                  comprehensive marketing and automation solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/get-started">
                    <Button size="lg" className="bg-accent hover:bg-accent/90" id="case-studies-cta-book-call-btn">
                      Book a Free Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/resources">
                    <Button size="lg" variant="outline" className="border-on-accent-light text-on-accent-light hover:bg-on-accent-light/10">
                      Explore Resources
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
