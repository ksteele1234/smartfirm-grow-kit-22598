import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
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
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-background to-muted">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Free Tools & Calculators
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Assess your firm's performance, identify growth opportunities, and make data-driven decisions 
              with our expert-designed business intelligence tools.
            </p>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
        <section className="section-padding bg-muted">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Use Our Assessment Tools?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get actionable insights that help you make informed decisions about your firm's growth strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container mx-auto text-center">
            <Card className="max-w-2xl mx-auto border-primary/20 bg-gradient-to-br from-accent/30 to-accent/10">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl text-primary mb-4">
                  Ready to Optimize Your Firm?
                </CardTitle>
                <CardDescription className="text-muted-foreground text-lg">
                  After completing our assessments, discover how SmartFirm can help you implement 
                  the strategies needed to achieve your growth goals.
                </CardDescription>
              </CardHeader>
              <CardContent>
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
      </main>
      <Footer />
    </div>
  );
};

export default ToolsCalculators;