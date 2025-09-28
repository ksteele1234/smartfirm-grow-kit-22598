import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Zap, 
  Phone, 
  Users, 
  BookOpen, 
  Handshake,
  ArrowRight,
  CheckCircle2,
  Quote,
  Star,
  Clock,
  Target
} from "lucide-react";

const GetStarted = () => {
  const engagementOptions = [
    {
      icon: Calendar,
      title: "Free Consultation",
      description: "Discuss your firm's unique challenges and goals with our experts. No obligation, just insights.",
      benefits: ["Personalized strategy session", "Identify growth opportunities", "Custom roadmap", "No sales pressure"],
      cta: "Book a Call",
      popular: true
    },
    {
      icon: Zap,
      title: "Quick Start Options", 
      description: "Explore our focused programs designed for immediate impact, like our 30-Day Quick Wins Program.",
      benefits: ["Immediate results", "30-day implementation", "Proven strategies", "Fast ROI"],
      cta: "View Quick Starts"
    },
    {
      icon: Phone,
      title: "Contact Us Directly",
      description: "Connect with our team via phone, email, or live chat for any inquiries.",
      benefits: ["Instant answers", "Multiple contact methods", "Expert guidance", "Quick response"],
      cta: "Contact Us"
    }
  ];

  const supportOptions = [
    {
      icon: BookOpen,
      title: "Client Support & Resources",
      description: "Access our knowledge base, video tutorials, and client portal for ongoing support.",
      cta: "Visit Support"
    },
    {
      icon: Handshake,
      title: "Explore Partnership Opportunities", 
      description: "Interested in collaborating? Learn about our referral, technology, and joint venture programs.",
      cta: "Become a Partner"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-teal pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Get Started with Marketing for Your Accounting Firm
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-10">
            Whether you're ready for comprehensive CPA marketing automation or just exploring digital marketing strategies for accounting practices, find the best way to connect with SmartFirm and begin your growth journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-secondary" size="hero">
              <Calendar className="w-5 h-5 mr-2" />
              Book a Free Consultation
            </Button>
            <Button variant="hero" size="hero">
              <Zap className="w-5 h-5 mr-2" />
              Explore Quick Start Options
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We understand that every accounting firm is at a different stage of growth with unique needs and challenges. 
            That's why we offer multiple pathways to get started with SmartFirm—from comprehensive consultations to 
            quick-win programs and everything in between.
          </p>
        </div>
      </section>

      {/* Engagement Options Section */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Choose Your Starting Point
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Select the engagement option that best fits your current needs and comfort level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {engagementOptions.map((option, index) => (
              <Card key={index} className={`shadow-card hover:shadow-soft transition-shadow relative ${option.popular ? 'ring-2 ring-primary' : ''}`}>
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg flex items-center justify-center">
                    <option.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading text-primary">
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-text-secondary text-center">
                    {option.description}
                  </p>
                  
                  <div className="space-y-3">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full group" 
                    variant={option.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {option.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Partnership Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Additional Resources & Opportunities
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Already a client or looking for partnership opportunities? We've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supportOptions.map((option, index) => (
              <Card key={index} className="shadow-card hover:shadow-soft transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal/10 to-primary/10 rounded-lg flex items-center justify-center">
                    <option.icon className="w-8 h-8 text-teal" />
                  </div>
                  <CardTitle className="text-xl font-heading text-primary">
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <p className="text-text-secondary">
                    {option.description}
                  </p>
                  <Button variant="outline" className="group">
                    {option.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Client Success Story</Badge>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              See How Others Started Their Journey
            </h2>
          </div>
          
          <Card className="max-w-4xl mx-auto shadow-card">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <Quote className="w-12 h-12 text-primary mb-6" />
                  <blockquote className="text-xl text-text-primary mb-6 italic">
                    "I was hesitant about working with a consulting firm, but SmartFirm's free consultation showed me exactly what I needed to grow. 
                    Within three months, we had streamlined our processes and increased our client base by 50%. The best decision I made for my practice."
                  </blockquote>
                  <div className="space-y-2">
                    <h4 className="font-heading font-semibold text-primary text-lg">
                      David Martinez
                    </h4>
                    <p className="text-text-secondary">
                      Owner, Martinez Tax & Accounting Services
                    </p>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-text-light text-sm ml-2">5.0 out of 5</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg p-8 text-center">
                  <Target className="w-16 h-16 text-primary mx-auto mb-4" />
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-heading font-bold text-primary">50%</div>
                      <div className="text-sm text-text-secondary">Client Growth</div>
                    </div>
                    <div>
                      <div className="text-2xl font-heading font-bold text-primary">3 Months</div>
                      <div className="text-sm text-text-secondary">To Results</div>
                    </div>
                    <div>
                      <div className="text-2xl font-heading font-bold text-primary">$0</div>
                      <div className="text-sm text-text-secondary">Upfront Cost</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              What Happens After You Get Started?
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Here's a simple overview of our proven process from initial contact to transformation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Initial Contact", description: "Reach out via your preferred method", icon: Phone },
                { step: "02", title: "Discovery Call", description: "We understand your unique challenges", icon: Users },
                { step: "03", title: "Custom Strategy", description: "Receive a tailored action plan", icon: Target },
                { step: "04", title: "Implementation", description: "Execute with ongoing support", icon: CheckCircle2 }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-teal rounded-full flex items-center justify-center text-white font-heading font-bold text-lg">
                      {item.step}
                    </div>
                    <item.icon className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    {index < 3 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-teal transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <h3 className="font-heading font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal to-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Still Unsure Where to Begin?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let us guide you. Our team is here to help you find the perfect starting point for your firm's growth journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center space-x-2 text-white">
                <Clock className="w-5 h-5" />
                <span>Free 30-minute consultation</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <CheckCircle2 className="w-5 h-5" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Target className="w-5 h-5" />
                <span>Customized recommendations</span>
              </div>
            </div>

            <Button variant="hero-secondary" size="hero" className="mb-6">
              <Users className="w-5 h-5 mr-2" />
              Speak to an Advisor
            </Button>
            
            <p className="text-white/80 text-sm">
              Join hundreds of accounting firms who have already started their transformation with SmartFirm.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetStarted;