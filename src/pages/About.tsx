import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
      name: "Sarah Mitchell",
      title: "Founder & CEO",
      bio: "With over 15 years of experience in accounting firm operations and marketing automation, Sarah founded SmartFirm to bridge the gap between traditional accounting practices and modern growth strategies.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Michael Chen",
      title: "CTO & Technology Director",
      bio: "Michael leads our technology initiatives with expertise in automation platforms, CRM systems, and business process optimization. He ensures our solutions are cutting-edge yet practical.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Jennifer Rodriguez",
      title: "Director of Client Success",
      bio: "Jennifer oversees client relationships and ensures every firm achieves their growth objectives. Her background in accounting operations provides deep industry insight.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
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
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-background to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">
              Our Story: Empowering Accounting Firms to Thrive
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We believe every accounting firm has the potential for extraordinary growth through AI-driven innovation. 
              Our mission is to provide the intelligent tools, predictive expertise, and automated support to make that vision a reality.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding">
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
        <section className="section-padding bg-background-light">
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

        {/* Company Story */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
                  The SmartFirm Story
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-primary-teal mb-6">
                  How We Started
                </h3>
              </div>
              
              <div className="prose prose-lg max-w-none text-text-secondary mb-12">
                <p className="text-lg leading-relaxed mb-6">
                  SmartFirm was born from a simple observation: accounting firms were struggling to keep pace with the digital transformation 
                  happening in every other industry. While they excelled at financial expertise, many found themselves losing ground to 
                  tech-savvy competitors who leveraged automation and modern marketing strategies.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Our founder, Sarah Mitchell, experienced this firsthand while consulting for traditional accounting practices. 
                  She saw brilliant accountants working harder, not smarter, and losing potential clients to firms that simply had better systems. 
                  That's when she decided to bridge this gap.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, SmartFirm has helped hundreds of accounting firms transform their operations, automate their marketing, 
                  and achieve sustainable growth—all while maintaining the personal relationships that make accounting practices special.
                </p>
              </div>

              {/* Timeline */}
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-semibold text-primary-blue text-center mb-8">
                  Our Journey
                </h3>
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                    <div className="flex-1 p-4 bg-accent-light/20 rounded-lg">
                      <p className="text-text-secondary">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="section-padding bg-background-light">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
                Meet the Experts Behind Your Growth
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Our team combines deep accounting industry knowledge with cutting-edge marketing and technology expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center border-light-border shadow-elegant">
                  <CardHeader className="pb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
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
                    <Button variant="outline" size="sm">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn Profile
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose SmartFirm */}
        <section className="section-padding">
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
        <section className="section-padding bg-background-light">
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

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-br from-primary-blue to-primary-teal text-white">
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