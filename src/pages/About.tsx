import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/ui/optimized-image";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Lightbulb, 
  Shield, 
  Users, 
  Zap,
  Heart,
  TrendingUp,
  Award,
  Linkedin,
  CheckCircle
} from "lucide-react";
import katieSteeleImage from "@/assets/katie-steele.png";
import brianHellewellImage from "@/assets/brian-hellewell.png";
import graceMendezImage from "@/assets/grace-mendez.png";
import yvonneGaliciaImage from "@/assets/yvonne-galicia.png";
import SEO from "@/components/SEO";

const About = () => {
  const coreValues = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary-blue" />,
      title: "Innovation",
      description: "We continuously evolve our solutions to stay ahead of industry trends and technology."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-teal" />,
      title: "Integrity",
      description: "We build trust through transparency, honesty, and consistent delivery on our promises."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-blue" />,
      title: "Client Success",
      description: "Your growth is our success. We're committed to delivering measurable results for your firm."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary-teal" />,
      title: "Efficiency",
      description: "We streamline processes and eliminate complexity to help you focus on what matters most."
    }
  ];

  const teamMembers = [
    {
      name: "Katie Steele",
      title: "Founder & CEO",
      bio: "With over 20 years of experience leading business transformations across industries, Katie helps accounting firms unlock their full potential through smart systems and scalable growth strategies that work.",
      image: katieSteeleImage,
      linkedin: "https://www.linkedin.com/in/katie-steele1/"
    },
    {
      name: "Brian Hellewell",
      title: "Technology Transformation Leader",
      bio: "CPA and former SpaceX product manager, Brian helps accounting firms modernize with secure, scalable systems—driving efficiency, compliance, and growth through 20+ years of expertise in IT strategy, financial systems, and business optimization.",
      image: brianHellewellImage,
      linkedin: "https://www.linkedin.com/in/brian-hellewell/"
    },
    {
      name: "Grace Mendez",
      title: "Customer Service Manager",
      bio: "Grace leads our customer service team, ensuring accounting firms receive exceptional support and guidance throughout their journey with SmartFirm.",
      image: graceMendezImage,
      linkedin: "https://www.linkedin.com/in/mary-grace-mendez26/"
    },
    {
      name: "Yvonne Galicia",
      title: "Social Media Ads & Content Manager",
      bio: "Yvonne creates compelling content and manages strategic ad campaigns that help accounting firms build their brand and reach their ideal clients.",
      image: yvonneGaliciaImage,
      linkedin: "https://www.linkedin.com/in/yvonne-galicia-brandbloom/"
    }
  ];

  const differentiators = [
    {
      title: "Industry-Specific Expertise",
      description: "We exclusively serve accounting firms, giving us deep understanding of your unique challenges, compliance requirements, and growth opportunities."
    },
    {
      title: "Proven Implementation Process",
      description: "Our systematic approach ensures smooth implementation with minimal disruption to your daily operations while maximizing results."
    },
    {
      title: "Ongoing Support & Optimization",
      description: "We don't just set it and forget it. Our team continuously monitors, optimizes, and evolves your systems to ensure sustained growth."
    }
  ];

  const milestones = [
    { year: "2018", event: "SmartFirm founded with a mission to modernize accounting firm marketing" },
    { year: "2020", event: "Reached 100+ accounting firms served across North America" },
    { year: "2022", event: "Launched comprehensive automation platform with AI-powered features" },
    { year: "2024", event: "Serving 500+ firms with $50M+ in additional revenue generated" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About Us | SmartFirm"
        description="SmartFirm empowers accounting firms with marketing automation and technology solutions. Our mission is to help firms grow."
        pageType="default"
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" }
        ]}
        faqs={[
          {
            question: "How do I get started?",
            answer: "Book a free strategy call to discuss your firm's specific needs and goals."
          },
          {
            question: "What is the pricing structure?",
            answer: "Pricing is customized based on your firm size and specific requirements. Contact us for a detailed quote."
          },
          {
            question: "Do you offer guarantees?",
            answer: "We stand behind our work with clear success metrics and ongoing support to ensure your satisfaction."
          }
        ]}
      />
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-background border-b pt-20">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>About Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-background to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Our Story: Empowering Accounting Firms to Thrive
            </h1>
            <div id="sf-keyword-intro">
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
                Our story centers on empowering accounting firms to thrive in an increasingly competitive digital landscape. 
                We believe every practice—from solo CPAs to large enterprises—has untapped potential for extraordinary growth through intelligent automation and strategic marketing.
              </p>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our mission is to provide the AI-driven tools, expert guidance, and proven systems to make that vision a reality.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-light-border shadow-elegant">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-primary-blue/10 w-fit">
                    <Target className="h-8 w-8 text-primary-blue" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-primary-blue mb-4">
                    Our Mission
                  </CardTitle>
                  <CardDescription className="text-lg text-text-secondary leading-relaxed">
                    To empower accounting firms with AI-powered marketing automation and intelligent technology solutions that drive predictive growth, 
                    optimize operational efficiency through data-driven insights, and enhance client relationships using automated personalization while maintaining the personal touch that makes each practice unique.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-light-border shadow-elegant">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-primary-teal/10 w-fit">
                    <Eye className="h-8 w-8 text-primary-teal" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-primary-blue mb-4">
                    Our Vision
                  </CardTitle>
                  <CardDescription className="text-lg text-text-secondary leading-relaxed">
                    To be the leading AI-driven partner for accounting firms seeking to modernize their practices, scale intelligently with predictive analytics, and build lasting value through data-driven decision making. 
                    We envision a future where artificial intelligence amplifies human expertise, delivering actionable insights and automated efficiency.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-20 bg-background-light">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
                Our Core Values
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                These values guide every decision we make and every solution we deliver. 
                They're not just words on a wall—they're the foundation of how we work.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <Card key={index} className="text-center border-light-border shadow-elegant group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 p-3 rounded-lg bg-accent-light/20 w-fit group-hover:bg-accent-light/40 transition-colors">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl text-primary-blue mb-3">
                      {value.title}
                    </CardTitle>
                    <CardDescription className="text-text-secondary leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                  Meet the Founder & CEO
                </h2>
                <p className="text-2xl font-semibold text-primary-teal mb-8">
                  Hey, I'm Katie!
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-1 flex justify-center items-start">
                  <OptimizedImage 
                    src={katieSteeleImage} 
                    alt="Katie Steele, Founder & CEO"
                    width={256}
                    height={256}
                    description="Katie Steele professional headshot"
                    context="About SmartFirm page"
                    className="w-64 h-64 rounded-lg object-cover shadow-elegant"
                  />
                </div>
                
                <div className="lg:col-span-2 space-y-6 text-text-secondary">
                  <div>
                    <h2 className="text-2xl font-bold text-primary-blue mb-4">About SmartFirm</h2>
                    <p className="text-lg leading-relaxed">
                      Hi, I'm Katie Steele, founder of SmartFirm.
                    </p>
                  </div>
                  
                  <p className="text-lg leading-relaxed">
                    I created SmartFirm because I saw firsthand how many accounting professionals were drowning in daily tasks, struggling to keep up with marketing, and missing out on business growth—not because they weren't good at what they do, but because they didn't have the right systems in place and most aren't career marketers.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Before SmartFirm, I spent over 20 years leading business transformations across industries and countries helping companies streamline operations, implement smarter systems, and scale with confidence. From turning around struggling hospitality brands to guiding private equity investments and implementing Microsoft Dynamics 365 at enterprise scale, I've built a career helping businesses unlock their full potential.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Now I bring all of that to the work I do with accounting firms.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <Card className="border-light-border shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary-blue mb-4">Why It Works</CardTitle>
                    <CardDescription className="text-lg text-text-secondary space-y-4">
                      <p>I don't just understand marketing — I understand business. I've helped companies:</p>
                      <ul className="space-y-2 ml-6 list-disc">
                        <li>Double revenue in less than a year</li>
                        <li>Reduce manual workload with smart automation</li>
                        <li>Turn referrals into consistent, trackable growth</li>
                        <li>Build scalable systems that don't rely on guesswork</li>
                      </ul>
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-light-border shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary-blue mb-4">Why I Started SmartFirm</CardTitle>
                    <CardDescription className="text-lg text-text-secondary space-y-4">
                      <p>
                        Most firm owners don't have the time, or desire, to become tech experts. I get it. You want more clients, more time, and more peace of mind. You don't need another software; you need a system that works for you. That's exactly what SmartFirm delivers.
                      </p>
                      <p>
                        We set everything up: lead capture tools, review automation, voice and chat AI, appointment funnels, SEO boosters, and nurture campaigns so you don't have to touch the tech. Everything is designed to run in the background while you stay focused on serving your clients.
                      </p>
                      <p>
                        SmartFirm is the system I wish every accounting firm had years ago. It's simple, effective, and built to help you grow without burnout.
                      </p>
                      <p className="font-semibold text-primary-blue pt-4">
                        If you're ready to finally have your marketing handled and actually start seeing results, I'd love to show you how.
                      </p>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-16 md:py-20 bg-background-light">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
                Meet the Experts Behind Your Growth
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Our team combines deep accounting industry knowledge with cutting-edge marketing and technology expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => {
                // Apply specific positioning for team members
                let imageClasses = "w-32 h-32 rounded-full mx-auto mb-4 object-cover";
                
                if (member.name === "Yvonne Galicia") {
                  imageClasses = "w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top";
                } else if (member.name === "Grace Mendez") {
                  imageClasses = "w-32 h-32 rounded-full mx-auto mb-4 object-cover object-center scale-125";
                }
                
                return (
                  <Card key={index} className="text-center border-light-border shadow-elegant">
                    <CardHeader className="pb-4">
                      <OptimizedImage 
                        src={member.image} 
                        alt={member.name}
                        width={128}
                        height={128}
                        description={`${member.name} professional headshot`}
                        context="SmartFirm team member"
                        className={imageClasses}
                      />
                      <CardTitle className="text-xl text-primary-blue mb-2">
                        {member.name}
                      </CardTitle>
                      <p className="text-primary-teal font-medium mb-4">{member.title}</p>
                      <CardDescription className="text-text-secondary leading-relaxed">
                        {member.bio}
                      </CardDescription>
                    </CardHeader>
                     <CardContent className="pt-0">
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn Profile
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose SmartFirm */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
                Why Choose SmartFirm?
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-primary-teal mb-6">
                What Makes Us Different
              </h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <Card key={index} className="border-light-border shadow-elegant h-full">
                  <CardHeader className="pb-4">
                    <div className="mb-4 p-3 rounded-lg bg-accent-light/20 w-fit">
                      <CheckCircle className="h-8 w-8 text-primary-teal" />
                    </div>
                    <CardTitle className="text-xl text-primary-blue mb-3">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-text-secondary leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 md:py-20 bg-background-light">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-accent-light/20 p-8 rounded-lg border border-accent-light">
                <Award className="h-12 w-12 text-primary-teal mx-auto mb-6" />
                <blockquote className="text-xl text-text-primary italic mb-6">
                  "Working with SmartFirm has been transformative for our practice. Their team doesn't just implement solutions—they become 
                  true partners in our growth. Their dedication to our success and deep understanding of accounting firms sets them apart 
                  from every other agency we've worked with."
                </blockquote>
                <cite className="text-text-secondary">
                  — Robert Kim, Managing Partner, Kim & Associates CPA
                </cite>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <details className="group border border-border rounded-lg p-6 bg-background">
                  <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex items-center justify-between">
                    How do I get started?
                    <span className="ml-2 transform group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-text-secondary leading-relaxed">
                    Book a free strategy call to discuss your firm's specific needs and goals. We'll evaluate your current situation and provide customized recommendations for growth.
                  </p>
                </details>

                <details className="group border border-border rounded-lg p-6 bg-background">
                  <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex items-center justify-between">
                    What is the pricing structure?
                    <span className="ml-2 transform group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-text-secondary leading-relaxed">
                    Pricing is customized based on your firm size and specific requirements. We offer flexible packages for solo practitioners, small firms, and enterprise-level practices. Contact us for a detailed quote.
                  </p>
                </details>

                <details className="group border border-border rounded-lg p-6 bg-background">
                  <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex items-center justify-between">
                    Do you offer guarantees?
                    <span className="ml-2 transform group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-text-secondary leading-relaxed">
                    We stand behind our work with clear success metrics and ongoing support to ensure your satisfaction. Our solutions are backed by proven results from hundreds of accounting firms.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-teal text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner with a Team That Cares
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              We're committed to helping your accounting firm achieve its full potential. 
              Let's start a conversation about your growth goals and how we can help you reach them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary-blue hover:bg-white/90"
                asChild
              >
                <a href="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="white-outline-on-dark"
                asChild
              >
                <a href="/get-started">
                  Start Your Growth Journey
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

export default About;