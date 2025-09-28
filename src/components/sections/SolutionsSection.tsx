import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Target, Shield, ArrowRight } from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: TrendingUp,
      title: "I need more leads",
      description: "Stop waiting for clients to find you. Our proven lead generation for accounting firms brings qualified prospects directly to your practice.",
      features: ["SEO for accounting firms", "PPC campaigns for CPAs", "Content marketing strategies", "Local listing management"],
      color: "from-primary/10 to-primary/5",
      link: "/solutions/lead-generation"
    },
    {
      icon: Users,
      title: "I want to scale my firm",
      description: "Break through growth plateaus with systems that work without your constant involvement.",
      features: ["Marketing automation", "Client onboarding systems", "Referral programs", "Strategic planning"],
      color: "from-teal/10 to-teal/5",
      link: "/solutions/scale-firm"
    },
    {
      icon: Target,
      title: "I'm losing clients to competitors",
      description: "Strengthen client relationships and position your firm as the obvious choice in your market.",
      features: ["Competitive analysis", "Value proposition development", "Client retention strategies", "Brand positioning"],
      color: "from-blue-grey/10 to-blue-grey/5",
      link: "/solutions/client-retention"
    },
    {
      icon: Shield,
      title: "I need better client retention",
      description: "Keep your best clients happy and engaged with automated touchpoints and value-added services.",
      features: ["Client communication systems", "Review generation", "Upselling automation", "Satisfaction tracking"],
      color: "from-accent-light/30 to-accent-light/10",
      link: "/solutions/retention-strategies"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Proven CPA Marketing Solutions for
            <span className="text-teal block">Common Growth Challenges</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Whether you need lead generation for your CPA firm or better client acquisition strategies, we've developed targeted marketing solutions for accounting practices at every stage.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card key={index} className="group hover:shadow-soft transition-all duration-300 border-border/50 hover:border-primary/20 bg-background overflow-hidden">
                <CardHeader className={`bg-gradient-to-br ${solution.color} pb-6`}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-heading font-bold text-foreground mb-2">
                        {solution.title}
                      </CardTitle>
                      <p className="text-text-secondary leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-text-secondary">
                            <div className="w-1.5 h-1.5 bg-teal rounded-full flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a href={solution.link}>
                        Learn More About This Solution
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-teal/5 rounded-2xl p-8 lg:p-12 border border-border/50">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4">
              Not Sure Which Solution Is Right for You?
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Book a free strategy call and we'll help you identify the biggest opportunities for growth in your firm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Get a Custom Growth Plan
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Browse All Solutions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;