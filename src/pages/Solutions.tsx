import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Shield, TrendingUp, Users, Zap, Star } from "lucide-react";
import { FloatingShapes, BackgroundPattern } from "@/components/ui/visual-accents";
import SEO from "@/components/SEO";

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
      <SEO 
        title="Marketing Automation Solutions for Accounting Firms | SmartFirm"
        description="Marketing automation solutions for accounting firms that drive client retention, lead generation, and competitive strategies with proven results."
        pageType="solution"
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions" }
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
                <BreadcrumbPage>Solutions</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 pb-32 md:pb-40 bg-[#4D869C] overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0">
            <div
              className="absolute -inset-[10px] pointer-events-none animate-aurora"
              style={{
                backgroundImage:
                  'radial-gradient(60% 60% at 70% 20%, hsl(var(--light-teal) / 0.95), transparent 62%), radial-gradient(55% 55% at 20% 70%, hsl(var(--primary-teal) / 0.9), transparent 62%), radial-gradient(45% 45% at 85% 80%, hsl(var(--accent-light) / 0.95), transparent 62%), repeating-linear-gradient(110deg, hsl(var(--primary-blue) / 0.95) 0%, hsl(var(--primary-blue) / 0.95) 4%, hsl(var(--secondary-blue) / 0.92) 6%, hsl(var(--secondary-blue) / 0.92) 10%, hsl(var(--primary-teal) / 0.9) 12%, hsl(var(--primary-teal) / 0.9) 16%, hsl(var(--accent-light) / 0.88) 18%, hsl(var(--accent-light) / 0.88) 22%)',
                backgroundSize: '160% 160%, 160% 160%, 160% 160%, 400%',
                backgroundPosition: '50% 50%, 50% 50%, 50% 50%, 50% 50%',
                animation: 'aurora 240s linear infinite',
                opacity: 0.49,
              }}
            />
          </div>
          {/* Curved bottom edge */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
            <svg className="relative block w-full h-[80px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="#ffffff" />
            </svg>
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg">
              Marketing Automation Solutions for Accounting Firm Challenges
            </h1>
            <div id="sf-keyword-intro">
              <p className="text-lg md:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
                Marketing automation solutions designed specifically for accounting firms help you overcome competition, meet client expectations, and tackle technology demands. SmartFirm provides AI-powered, predictive solutions with intelligent automation that work specifically for practices like yours.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Content */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every accounting firm faces unique challenges in today's competitive marketplace. Whether you're struggling to attract new clients, retain existing ones, or scale your practice efficiently, SmartFirm provides targeted solutions designed specifically for accounting professionals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our proven methodologies combine marketing automation, technology integration, and strategic guidance to help you overcome obstacles and achieve sustainable growth. We understand the accounting industry inside and out, ensuring our solutions align with your professional standards and business objectives.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Categories */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
              Common Pain Points We Address
            </h2>
            
            
            {/* First row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
              {solutionCategories.slice(0, 3).map((solution, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-gradient-to-br from-background to-primary/5">
                  <CardHeader className="text-center pb-6 px-8 pt-8">
                    <div className="mx-auto mb-6 p-4 rounded-lg bg-gradient-to-br from-primary/20 to-teal/20 w-fit">
                      {solution.icon}
                    </div>
                    <CardTitle className="text-xl text-primary mb-4">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-text-secondary leading-relaxed text-base">
                      {solution.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 px-8 pb-8">
                    <Button 
                      variant="outline" 
                      className="w-full"
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
            
            {/* Second row - 2 cards taking full width */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {solutionCategories.slice(3).map((solution, index) => (
                <Card key={index + 3} className="group hover:shadow-lg transition-all duration-300 border-border bg-gradient-to-br from-background to-teal/5">
                  <CardHeader className="text-center pb-6 px-8 pt-8">
                    <div className="mx-auto mb-6 p-4 rounded-lg bg-gradient-to-br from-teal/20 to-primary/20 w-fit">
                      {solution.icon}
                    </div>
                    <CardTitle className="text-xl text-primary mb-4">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-text-secondary leading-relaxed text-base">
                      {solution.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 px-8 pb-8">
                    <Button 
                      variant="outline" 
                      className="w-full"
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
        <section className="py-24 bg-gradient-to-br from-teal/5 to-primary/5 relative overflow-hidden">
          <BackgroundPattern pattern="dots" className="opacity-20" />
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="shadow-lg border-border/50 bg-gradient-to-br from-background to-teal/5 overflow-hidden">
                <CardHeader className="text-center pb-8 px-6 md:px-10 pt-10">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal/20 to-primary/20 text-primary text-sm font-medium mb-6">
                    <Star className="h-4 w-4 mr-2" />
                    Featured Solution
                  </div>
                  <CardTitle className="text-3xl md:text-4xl text-primary mb-6 leading-tight">
                    Get More Referrals Without Asking
                  </CardTitle>
                  <CardDescription className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
                    Turn satisfied clients into active advocates with automated systems that generate referrals naturally. 
                    Our clients typically see 300% more referrals within 6 months without awkward conversations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8 px-6 md:px-10 pb-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                      <h3 className="font-semibold text-primary flex items-center text-lg">
                        <Users className="h-5 w-5 mr-2" />
                        Key Benefits:
                      </h3>
                      <ul className="space-y-3 text-text-secondary">
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-teal mt-2 mr-4 flex-shrink-0"></div>
                          Turn happy clients into advocates automatically
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-teal mt-2 mr-4 flex-shrink-0"></div>
                          Get found by people looking for CPAs
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-teal mt-2 mr-4 flex-shrink-0"></div>
                          Build trust before you even meet prospects
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-teal mt-2 mr-4 flex-shrink-0"></div>
                          Stay top-of-mind year-round with automation
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-teal/10 to-primary/10 p-6 md:p-8 rounded-lg border border-border/30">
                      <h3 className="font-semibold text-primary mb-6 flex items-center text-lg">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        Client Success Story:
                      </h3>
                      <blockquote className="text-text-secondary italic mb-4 leading-relaxed">
                        "SmartFirm's referral system transformed our practice. We went from hoping for referrals to having a 
                        systematic approach that generated 25 new clients in just 4 months. The best part? Our clients love 
                        sharing our services because the process makes it easy for them."
                      </blockquote>
                      <cite className="text-sm text-text-light block">
                        — Jennifer Chen, Chen & Associates CPA
                      </cite>
                    </div>
                  </div>
                  
                  <div className="text-center pt-6">
                    <Button size="lg" variant="hero" className="bg-gradient-to-r from-teal to-primary hover:from-teal/90 hover:to-primary/90 text-white" asChild>
                      <a href="/solutions/get-more-referrals-without-asking">
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
        <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-teal text-white relative overflow-hidden">
          <FloatingShapes variant="circles" className="opacity-20" />
          <div className="container mx-auto text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Solve Your Firm's Challenges?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Let us help you implement the right strategies for sustainable growth. Book a free strategy call to discuss your specific challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                asChild
              >
                <a href="/get-started">
                  Book a Free Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="white-outline-on-dark"
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
                  <AccordionTrigger className="text-left text-sm">
                    How do I compete with tech-savvy CPAs who seem to get all the clients?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    The key is implementing the same marketing automation and technology solutions they use. Our clients typically see immediate improvements in online visibility, lead response times, and professional presentation. We help traditional accounting firms modernize their operations without losing their personal touch.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left text-sm">
                    Why aren't my accounting clients referring new business to me?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Most accounting firms don't have systematic referral processes. We implement automated follow-up sequences, review generation systems, and stay-in-touch campaigns that keep you top-of-mind. Our clients typically see 300% more referrals within 6 months.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left text-sm">
                    How can I work less while growing my accounting practice?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Automation is the answer. We streamline client onboarding, document collection, appointment scheduling, and follow-up communications. Most CPAs save 15+ hours per week while actually improving client service quality and increasing revenue.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left text-sm">
                    What's the best way to scale my accounting firm without hiring more staff?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Technology and process optimization allow you to handle more clients with your existing team. We implement systems for automated client communication, efficient workflow management, and strategic partnerships that multiply your capacity without increasing overhead.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left text-sm">
                    How do I protect my accounting practice from cybersecurity threats?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We implement enterprise-grade security measures including encrypted communications, secure client portals, automated backups, and compliance monitoring. Our security protocols meet AICPA and IRS requirements while being easy for your team to use.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left text-sm">
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