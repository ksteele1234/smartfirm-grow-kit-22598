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
import katieSteeleImage from "@/assets/katie-steele.webp";
import brianHellewellImage from "@/assets/brian-hellewell.webp";
import graceMendezImage from "@/assets/grace-mendez.webp";
import yvonneGaliciaImage from "@/assets/yvonne-galicia.webp";
import SEO from "@/components/SEO";

const About = () => {
  const coreValues = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We evolve our solutions to keep firms ahead of industry trends."
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Integrity",
      description: "We build trust through transparency, honesty, and consistency."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Client Success",
      description: "Your growth is our success. We measure ourselves by the results we deliver for your firm."
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Efficiency",
      description: "We simplify processes and reduce complexity so you can focus on clients, not tech."
    }
  ];

  const teamMembers = [
    {
      name: "Katie Steele",
      title: "Founder & CEO",
      bio: "With 20+ years leading business transformations, Katie helps accounting firms unlock growth through smart systems, clear strategy, and automation that scales without burnout.",
      image: katieSteeleImage,
      linkedin: "https://www.linkedin.com/in/katie-steele1/"
    },
    {
      name: "Brian Hellewell",
      title: "Technology Transformation Leader",
      bio: "Former SpaceX product manager. Brian modernizes firms with secure, scalable systems that improve efficiency, compliance, and client experience. He brings 20+ years in Accounting, IT strategy, financial systems, and business optimization.",
      image: brianHellewellImage,
      linkedin: "https://www.linkedin.com/in/brian-hellewell/"
    },
    {
      name: "Grace Mendez",
      title: "Customer Service Manager",
      bio: "Grace leads client support and onboarding to ensure every firm gets responsive guidance, smooth implementation, and ongoing success with SmartFirm.",
      image: graceMendezImage,
      linkedin: "https://www.linkedin.com/in/mary-grace-mendez26/"
    },
    {
      name: "Yvonne Galicia",
      title: "Social Media Ads & Content Manager",
      bio: "Yvonne creates professional content and manages targeted ad campaigns that help accounting firms build authority and reach ideal clients.",
      image: yvonneGaliciaImage,
      linkedin: "https://www.linkedin.com/in/yvonne-galicia-brandbloom/"
    }
  ];

  const differentiators = [
    {
      title: "Industry-Focused Expertise",
      description: "We focus on accountants, CPAs, bookkeepers, and tax preparers, so our solutions fit your compliance needs, workflow, and growth goals."
    },
    {
      title: "Proven Implementation Process",
      description: "A clear, step-by-step approach that launches fast and minimizes disruption while setting your systems up the right way."
    },
    {
      title: "Ongoing Support and Optimization",
      description: "We monitor, improve, and evolve your automation and marketing so results keep compounding over time."
    }
  ];

  const journeyMilestones = [
    "Built SmartFirm to make modern marketing and automation accessible to professional service firms.",
    "Supported 50+ companies across industries and refined our focus for accounting, CPA, bookkeeping, and tax practices.",
    "Assembled 40+ years of combined experience across business transformation, financial systems, and marketing operations.",
    "Introduced a complete toolkit for firms: lead capture, review generation, AI chat and voice response, appointment funnels, SEO boosters, and nurture campaigns.",
    "Today we help accounting firms launch marketing automation in under 30 days and grow with confidence."
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About SmartFirm.io | Agency for Accounting Firms"
        description="SmartFirm.io is a marketing agency and automation consultancy for accounting firms, CPAs, and bookkeepers. Scale without adding staff."
        pageType="default"
        noindex={false}
        dateModified={new Date().toISOString()}
        organizationType="ProfessionalService"
        showContactInfo={true}
        showAddress={true}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/marketing-agency-for-accounting-firms/" }
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
                <BreadcrumbPage>About Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-section pb-32 md:pb-40 bg-gradient-deep-teal overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0" style={{ backgroundImage: 'url(/assets/page-header-background.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
          {/* Curved bottom edge */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 text-background">
            <svg className="relative block w-full h-[80px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="text-display font-bold text-white mb-6 drop-shadow-lg">
              About SmartFirm.io: Agency for Accounting Firms
            </h1>
            <div id="sf-keyword-intro">
              <p className="text-lead text-white/95 max-w-text-lg mx-auto leading-relaxed mb-4 drop-shadow-md">
                SmartFirm.io is a marketing agency and automation consultancy for accountants, CPAs, and bookkeepers — providing systems to help firms scale without adding staff.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-section">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Mission & Vision</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
              <Card className="border elevation-2 card-interactive">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-primary mb-4">
                    Our Mission
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                    Our mission is to empower firms with digital marketing for CPA firms, from SEO to client retention. Firms hire SmartFirm when they want to work with an accountant marketing specialist who delivers measurable results.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border elevation-1 card-interactive">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-accent/10 w-fit">
                    <Eye className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-primary mb-4">
                    Our Vision
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                    To be the trusted partner for accounting firms, CPAs, and bookkeepers who want to modernize their practices, scale sustainably, and build long-term value. We see a future where automation and AI support accountants, not replace them, helping firms work smarter and grow faster.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-section bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-text-sm mx-auto">
                These values guide how we work with every client and every solution we deliver.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
              {coreValues.map((value, index) => (
                <Card key={index} className="text-center elevation-1 card-interactive group hover:elevation-2">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 p-3 rounded-lg bg-accent/10 w-fit group-hover:bg-accent/20 transition-colors">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl text-primary mb-3">
                      {value.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-16 md:py-section">
          <div className="container mx-auto">
            <div className="max-w-container-content mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Meet the Founder & CEO
                </h2>
                <p className="text-2xl font-semibold text-accent mb-8">
                  Hey, I'm Katie!
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-md mb-12">
                <div className="lg:col-span-1 flex justify-center items-start">
                  <OptimizedImage
                    src={katieSteeleImage}
                    alt="Katie Steele, Founder & CEO"
                    width={256}
                    height={256}
                    description="Katie Steele professional headshot"
                    context="About SmartFirm page"
                    className="w-64 h-64 rounded-lg object-cover elevation-2"
                  />
                </div>

                <div className="lg:col-span-2 space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">About SmartFirm:</h3>
                    <p className="text-lg leading-relaxed">
                      I'm Katie Steele, founder of SmartFirm.
                    </p>
                  </div>

                  <p className="text-lg leading-relaxed">
                    I started SmartFirm because I saw how many accountants and CPAs were drowning in daily tasks, struggling to keep up with marketing, and missing out on growth. This happens because they are great at what they do, but don't have the right systems in place. Most firm owners aren't career marketers, or IT people, and they shouldn't have to be.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Before SmartFirm, I spent 20+ years helping businesses transform. From turning around struggling hospitality brands, to guiding private equity investments, to implementing Microsoft Dynamics 365 at enterprise scale, I've built my career on helping companies unlock growth through smarter systems. Now, I bring that same expertise to accounting firms.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <Card className="elevation-1 card-interactive">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary mb-4">Why It Works:</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground space-y-4">
                      <p>I don't just understand marketing, I understand business. That's why SmartFirm has become the go-to accountant marketing specialist for firms ready to scale with proven systems instead of guesswork.</p>
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="elevation-1 card-interactive">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary mb-4">Why I Started SmartFirm:</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground space-y-4">
                      <p>
                        Most firm owners don't want to become tech experts, and you shouldn't have to. You want more clients, more time, and more peace of mind. You don't need another piece of software; you need a system that works for you.
                      </p>
                      <p>
                        That's exactly what SmartFirm delivers. We set up everything, lead capture tools, review automation, AI chat and voice response, appointment funnels, SEO boosters, and nurture campaigns, all so you don't have to touch the tech. Everything runs in the background while you focus on serving your clients.
                      </p>
                      <p>
                        SmartFirm is the system I wish every accounting firm had years ago: simple, effective, and built to help you grow without burnout.
                      </p>
                      <p className="font-semibold text-primary pt-4">
                        If you're ready to have your marketing handled and start seeing results finally, I'd love to show you how.
                      </p>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-16 md:py-section bg-background-light">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Meet the Experts Behind Your Growth
              </h2>
              <p className="text-lg text-muted-foreground max-w-text-sm mx-auto">
                Our team blends accounting knowledge with modern marketing and technology so your firm can grow with confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
              {teamMembers.map((member, index) => {
                // Apply specific positioning for team members
                let imageClasses = "w-32 h-32 rounded-full mx-auto mb-4 object-cover";

                if (member.name === "Yvonne Galicia") {
                  imageClasses = "w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top";
                } else if (member.name === "Grace Mendez") {
                  imageClasses = "w-32 h-32 rounded-full mx-auto mb-4 object-cover object-center scale-125";
                }

                return (
                  <Card key={index} className="text-center elevation-1 card-interactive">
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
                      <CardTitle className="text-xl text-primary mb-2">
                        {member.name}
                      </CardTitle>
                      <p className="text-accent font-medium mb-4">{member.title}</p>
                      <CardDescription className="text-muted-foreground leading-relaxed">
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

        {/* What Makes SmartFirm Different */}
        <section className="py-16 md:py-section">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What Makes SmartFirm Different
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
              {differentiators.map((item, index) => (
                <Card key={index} className="border elevation-2 card-interactive h-full">
                  <CardHeader className="pb-4">
                    <div className="mb-4 p-3 rounded-lg bg-accent/10 w-fit">
                      <CheckCircle className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl text-primary mb-3">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-16 md:py-section bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Journey
              </h2>
            </div>
            <div className="max-w-text-lg mx-auto">
              <div className="space-y-6">
                {journeyMilestones.map((milestone, index) => (
                  <Card key={index} className="border elevation-2 card-interactive">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-teal/20 flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-primary-teal" />
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed flex-1">
                          {milestone}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-section md:py-28 bg-background-light">
          <div className="container mx-auto px-4">
            <div className="max-w-text-md mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <details className="group border border-border rounded-lg p-6 bg-background">
                  <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex items-center justify-between">
                    How do I get started?
                    <span className="ml-2 transform group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Book a Free Call. We will learn about your goals and create a custom plan for your firm.
                  </p>
                </details>

                <details className="group border border-border rounded-lg p-6 bg-background">
                  <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex items-center justify-between">
                    What is your pricing structure?
                    <span className="ml-2 transform group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Pricing is customized based on firm size, services, and objectives. We will provide a clear proposal after the strategy call.
                  </p>
                </details>

                <details className="group border border-border rounded-lg p-6 bg-background">
                  <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex items-center justify-between">
                    Do you offer guarantees?
                    <span className="ml-2 transform group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    We do not promise one-size-fits-all outcomes. We align on measurable success metrics and provide ongoing support to help you reach them.
                  </p>
                </details>

                <details className="group border border-border rounded-lg p-6 bg-background">
                  <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex items-center justify-between">
                    How fast can we launch?
                    <span className="ml-2 transform group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    We can have your core marketing automation up and running in under 30 days.
                  </p>
                </details>

                <details className="group border border-border rounded-lg p-6 bg-background">
                  <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex items-center justify-between">
                    Do you work with firms outside of accounting?
                    <span className="ml-2 transform group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Our focus is accounting, CPA, bookkeeping, and tax practices. Our team has supported 50+ companies across industries, and we apply that experience to build systems that fit accounting workflows.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-section text-white" style={{ background: 'hsl(var(--professional-teal))' }}>
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Partner with a Team That Cares
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-text-sm mx-auto">
              We're committed to helping your accounting firm achieve its full potential.
              Let's start a conversation about your growth goals and how we can help you reach them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="white-on-dark"
                asChild
              >
                <a href="/accounting-firm-automation-consultation/">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="white-outline-on-dark"
                asChild
              >
                <a href="/get-started-accounting-firm-automation/">
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