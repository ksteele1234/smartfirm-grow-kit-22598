import { StandardCard } from "@/components/ui/standard-card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Target, Shield, ArrowRight, BarChart3, Eye } from "lucide-react";
import { GeometricDivider, FloatingShapes, AccentLine } from "@/components/ui/visual-accents";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Target,
      title: "I need more leads",
      description: "Stop waiting for referrals. Generate qualified accounting firm leads with SEO, PPC, and content marketing.",
      features: ["SEO for accountants & CPAs", "Local listing optimization", "PPC campaigns", "Content marketing"],
      link: "/solutions/lead-generation"
    },
    {
      icon: TrendingUp,
      title: "I want to scale my firm", 
      description: "Break growth limits with CPA marketing automation systems that run without your constant oversight.",
      features: ["Automation workflows", "Client onboarding systems", "Referral programs", "Strategic planning"],
      link: "/solutions/scale-firm"
    },
    {
      icon: Shield,
      title: "Stop Losing Clients to Competitors",
      description: "Keep clients loyal with retention campaigns and brand positioning that make your firm the obvious choice.",
      features: ["Competitive analysis", "Client retention campaigns", "Differentiation strategies", "Brand positioning"],
      link: "/solutions/client-retention"
    },
    {
      icon: Users,
      title: "I need better client retention",
      description: "Strengthen relationships with automated follow-ups and proactive client engagement.",
      features: ["Communication systems", "Automated review requests", "Upsell and cross-sell campaigns", "Satisfaction tracking"],
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
            Targeted Marketing Solutions for
            <span className="text-teal block">Accountants, CPAs, and Bookkeepers</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From lead generation to client retention, SmartFirm provides automation and SEO solutions designed for accounting firms at every stage.
          </p>
        </div>

        <AccentLine variant="gradient" className="max-w-md mx-auto mb-12" />

        {/* Solutions Grid - Consistent Layout */}
        <div className="space-y-8 stagger-container">
          {/* First row - 2 cards taking full width */}
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.slice(0, 2).map((solution, index) => (
              <StandardCard
                key={index}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                variant={index === 1 ? "featured" : "default"}
                href={solution.link}
                className="overflow-hidden"
              >
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
                    className="w-full justify-between transition-all duration-300"
                    asChild
                  >
                    <a href={solution.link}>
                      Learn More About This Solution
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </StandardCard>
            ))}
          </div>
          
          {/* Second row - 2 cards taking full width */}
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.slice(2).map((solution, index) => (
              <StandardCard
                key={index + 2}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                variant={index === 0 ? "popular" : "default"}
                href={solution.link}
                className="overflow-hidden"
              >
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
                    className="w-full justify-between transition-all duration-300"
                    asChild
                  >
                    <a href={solution.link}>
                      Learn More About This Solution
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </StandardCard>
            ))}
          </div>
        </div>

        <GeometricDivider variant="wave" className="my-12" />

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-teal/5 rounded-2xl p-8 lg:p-12 border border-border/50">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4">
              Ready to See Results?
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Let's build a custom growth plan tailored to your firm's challenges and goals.
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

export default SolutionsSection;