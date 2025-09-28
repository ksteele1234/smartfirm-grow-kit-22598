import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
        <section className="py-24 md:py-32 bg-gradient-to-br from-background to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">
              Solving Your Biggest Accounting Firm Challenges
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We understand the unique pressures of running an accounting firm. From competition to client expectations, 
              technology demands to growth challenges - SmartFirm provides proven solutions that work specifically for practices like yours.
            </p>
          </div>
        </section>

        {/* Solution Categories */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
              Common Pain Points We Address
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {solutionCategories.map((solution, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-background">
                  <CardHeader className="text-center pb-6 px-8 pt-8">
                    <div className="mx-auto mb-6 p-4 rounded-lg bg-accent/30 w-fit">
                      {solution.icon}
                    </div>
                    <CardTitle className="text-xl text-foreground mb-4">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed text-base">
                      {solution.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 px-8 pb-8">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border-primary text-primary"
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

        {/* FAQ Section */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                  Solutions FAQ: Common Accounting Firm Challenges
                </h2>
                <p className="text-lg text-muted-foreground">
                  Get answers to the most common questions about overcoming accounting firm challenges and growing your practice.
                </p>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left">
                    How do I compete with tech-savvy CPAs who seem to get all the clients?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    The key is implementing the same marketing automation and technology solutions they use. Our clients typically see immediate improvements in online visibility, lead response times, and professional presentation. We help traditional accounting firms modernize their operations without losing their personal touch.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left">
                    Why aren't my accounting clients referring new business to me?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Most accounting firms don't have systematic referral processes. We implement automated follow-up sequences, review generation systems, and stay-in-touch campaigns that keep you top-of-mind. Our clients typically see 300% more referrals within 6 months.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left">
                    How can I work less while growing my accounting practice?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Automation is the answer. We streamline client onboarding, document collection, appointment scheduling, and follow-up communications. Most CPAs save 15+ hours per week while actually improving client service quality and increasing revenue.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left">
                    What's the best way to scale my accounting firm without hiring more staff?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Technology and process optimization allow you to handle more clients with your existing team. We implement systems for automated client communication, efficient workflow management, and strategic partnerships that multiply your capacity without increasing overhead.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left">
                    How do I protect my accounting practice from cybersecurity threats?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We implement enterprise-grade security measures including encrypted communications, secure client portals, automated backups, and compliance monitoring. Our security protocols meet AICPA and IRS requirements while being easy for your team to use.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left">
                    How long before I see results from implementing these solutions?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Most accounting firms see immediate improvements in efficiency within 30 days, significant lead generation increases within 60 days, and measurable revenue growth within 90 days. The exact timeline depends on your specific challenges and implementation scope.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;