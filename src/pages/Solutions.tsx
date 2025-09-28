import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users, Zap, Star } from "lucide-react";

const Solutions = () => {
  const solutionCategories = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-blue" />,
      title: "Stop Losing Clients to Tech-Savvy CPAs",
      subtitle: "Get Found Online When Clients Search, Look Professional with Modern Systems, Respond Faster Than Your Competition, Automate What Younger CPAs Do Manually.",
      link: "/solutions/compete-with-tech-savvy-cpas"
    },
    {
      icon: <Users className="h-8 w-8 text-primary-teal" />,
      title: "Get More Referrals Without Asking",
      subtitle: "Turn Happy Clients into Advocates, Get Found by People Looking for CPAs, Build Trust Before You Meet, Stay Top-of-Mind Year-Round.",
      link: "/solutions/increase-referrals"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary-blue" />,
      title: "Work Less, Earn More",
      subtitle: "Stop Chasing Clients for Documents, Eliminate Repetitive Tasks, Get Paid Faster Without Awkward Calls, Focus on High-Value Work Only.",
      link: "/solutions/work-less-earn-more"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-teal" />,
      title: "Grow Without the Growing Pains",
      subtitle: "Handle More Clients Without More Stress, Scale Without Hiring Full-Time Staff, Maintain Quality While Growing, Plan for Growth Without Guesswork.",
      link: "/solutions/sustainable-growth"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-blue" />,
      title: "Protect Your Practice & Your Future",
      subtitle: "Secure Your Client Data Like a Big Firm, Plan Your Exit Strategy, Maximize Your Practice Value, Ensure Business Continuity.",
      link: "/solutions/protect-your-practice"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-background to-background-light">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-blue mb-6">
              Solving Your Biggest Accounting Firm Challenges
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              We understand the unique pressures of running an accounting firm. From competition to client expectations, 
              technology demands to growth challenges - SmartFirm provides proven solutions that work specifically for practices like yours.
            </p>
          </div>
        </section>

        {/* Solution Categories */}
        <section className="section-padding">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue text-center mb-12">
              Common Pain Points We Address
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutionCategories.map((solution, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-light-border">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 rounded-lg bg-accent-light/20 w-fit">
                      {solution.icon}
                    </div>
                    <CardTitle className="text-xl text-primary-blue mb-3">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-text-secondary leading-relaxed">
                      {solution.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary-blue group-hover:text-white transition-all duration-300"
                      asChild
                    >
                      <a href={solution.link}>
                        See How We Solve This
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Solution */}
        <section className="section-padding bg-background-light">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-elegant border-light-border">
                <CardHeader className="text-center pb-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-teal/10 text-primary-teal text-sm font-medium mb-4">
                    <Star className="h-4 w-4 mr-1" />
                    Featured Solution
                  </div>
                  <CardTitle className="text-3xl md:text-4xl text-primary-blue mb-4">
                    Grow Without the Growing Pains
                  </CardTitle>
                  <CardDescription className="text-lg text-text-secondary max-w-2xl mx-auto">
                    Scale your practice systematically with proven frameworks that maintain quality while reducing your personal workload. 
                    Handle 2x more clients without doubling your stress.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary-teal">Key Benefits:</h4>
                      <ul className="space-y-2 text-text-secondary">
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-primary-teal mt-2 mr-3 flex-shrink-0"></div>
                          Handle more clients without more stress
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-primary-teal mt-2 mr-3 flex-shrink-0"></div>
                          Scale without hiring full-time staff
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-primary-teal mt-2 mr-3 flex-shrink-0"></div>
                          Maintain quality while growing
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-primary-teal mt-2 mr-3 flex-shrink-0"></div>
                          Plan for growth without guesswork
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-accent-light/30 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary-blue mb-3">Client Success Story:</h4>
                      <blockquote className="text-text-secondary italic">
                        "SmartFirm's growth framework helped us double our client base in 18 months while actually working fewer hours. 
                        Their systems approach meant we could scale without sacrificing the personal service our clients expect."
                      </blockquote>
                      <cite className="text-sm text-text-light mt-3 block">
                        — Sarah Johnson, Johnson & Associates CPA
                      </cite>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <Button size="lg" className="bg-primary-blue hover:bg-primary-blue/90" asChild>
                      <a href="/solutions/sustainable-growth">
                        Learn About This Solution
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-br from-primary-blue to-primary-teal text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Solve Your Firm's Challenges?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let us help you implement the right strategies for sustainable growth. Book a free strategy call to discuss your specific challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary-blue hover:bg-white/90"
                asChild
              >
                <a href="/get-started">
                  Book a Free Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-blue"
                asChild
              >
                <a href="/services">
                  View All Services
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;