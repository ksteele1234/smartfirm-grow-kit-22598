import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Target, Shield, ArrowRight, BarChart3, Eye } from "lucide-react";
import { GeometricDivider, FloatingShapes, AccentLine } from "@/components/ui/visual-accents";
import { EnhancedCard } from "@/components/ui/enhanced-card";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Target,
      title: "I need more leads",
      description: "Stop waiting for referrals. Our lead generation for accounting firms delivers qualified prospects ready to work with you.",
      features: ["SEO for accountants", "PPC campaigns for CPAs", "Content marketing", "Local listing optimization"],
      gradient: "from-primary/10 to-teal/10",
      link: "/solutions/lead-generation"
    },
    {
      icon: TrendingUp,
      title: "I want to scale my firm", 
      description: "Break growth plateaus with systems that run without your constant involvement.",
      features: ["Automation systems", "Client onboarding workflows", "Referral programs", "Strategic planning"],
      gradient: "from-teal/10 to-secondary/10",
      link: "/solutions/scale-firm"
    },
    {
      icon: Shield,
      title: "I'm losing clients to competitors",
      description: "Strengthen client relationships and position your firm as the obvious choice in your market.",
      features: ["Competitive analysis", "Client retention campaigns", "Brand positioning", "Differentiation strategy"],
      gradient: "from-secondary/10 to-primary/10", 
      link: "/solutions/client-retention"
    },
    {
      icon: Users,
      title: "I need better client retention",
      description: "Keep your best clients engaged with proactive touchpoints and automated follow-ups.",
      features: ["Communication systems", "Review generation", "Upselling automation", "Satisfaction tracking"],
      gradient: "from-primary/10 to-accent/20",
      link: "/solutions/retention-strategies"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <FloatingShapes variant="squares" />
      <div className="container relative mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Proven Solutions for
            <span className="text-teal block">Common Growth Challenges</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Whether you need lead generation for your CPA firm or better client acquisition strategies, we've developed targeted marketing solutions for accounting practices at every stage.
          </p>
        </div>

        <AccentLine variant="gradient" className="max-w-md mx-auto mb-12" />

        {/* Solutions Grid - Proper Full Width Distribution */}
        <div className="space-y-8 stagger-container">
          {/* First row - 2 cards taking full width */}
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.slice(0, 2).map((solution, index) => {
              const IconComponent = solution.icon;
              const variants = ["elevated", "gradient"];
              const hoverEffects = ["lift", "glow"];
              
              return (
                <EnhancedCard 
                  key={index} 
                  variant={variants[index] as any}
                  hoverEffect={hoverEffects[index] as any}
                  className="overflow-hidden"
                >
                  <CardHeader className={`bg-gradient-to-br ${solution.gradient} pb-6`}>
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
                </EnhancedCard>
              );
            })}
          </div>
          
          {/* Second row - 2 cards taking full width */}
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.slice(2).map((solution, index) => {
              const IconComponent = solution.icon;
              const variants = ["elevated", "outlined"];
              const hoverEffects = ["scale", "lift"];
              
              return (
                <EnhancedCard 
                  key={index + 2} 
                  variant={variants[index] as any}
                  hoverEffect={hoverEffects[index] as any}
                  className="overflow-hidden"
                >
                  <CardHeader className={`bg-gradient-to-br ${solution.gradient} pb-6`}>
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
                </EnhancedCard>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-teal/5 rounded-2xl p-8 lg:p-12 border border-border/50">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4">
              Ready to See Results?
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Let's create a custom growth plan that addresses your specific challenges and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="/get-started">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Get a Custom Growth Plan
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group" asChild>
                <a href="/solutions">
                  <Eye className="mr-2 h-5 w-5" />
                  Browse All Solutions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
        
        <GeometricDivider variant="wave" className="my-12" />
export default SolutionsSection;