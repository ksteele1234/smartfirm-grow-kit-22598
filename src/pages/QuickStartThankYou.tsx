import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, Mail, Calendar, ArrowRight, CheckCircle2, Clock, Target } from "lucide-react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const QuickStartThankYou = () => {
  useEffect(() => {
    // Track conversion
    console.log("Quick Start purchase completed");
    
    // Load calendar booking widget script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup: remove script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Welcome to SmartFirm - Quick Start Package"
        description="Thank you for purchasing the SmartFirm Quick Start Package. Here's what happens next."
        robots="noindex,nofollow"
      />
      <Header />
      
      <main className="flex-1 px-4 py-16">
        <div className="max-w-5xl w-full mx-auto">
          {/* Hero Success Message */}
          <div className="text-center mb-12">
            <div className="mb-8 flex justify-center">
              <div className="rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-8 animate-in fade-in zoom-in duration-500 border-4 border-primary/20">
                <CheckCircle className="h-24 w-24 text-primary" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 font-heading">
              Welcome to SmartFirm!
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground mb-4 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 font-body leading-relaxed">
              Your Quick Start Package is confirmed.
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              We're excited to help transform your accounting firm over the next 30 days.
            </p>
          </div>

          {/* Calendar Booking Section */}
          <Card className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 border-2 border-primary/20">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl md:text-3xl">Schedule Your Kickoff Call</CardTitle>
              <CardDescription className="text-base">
                Book your 1-hour onboarding session to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/w5wCmnUGelRcl42IsSle" 
                  style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }} 
                  scrolling="no" 
                  id="X5igP8v35Vo9i5R1QD79_1761841818156"
                  title="Schedule Your Kickoff Call"
                />
              </div>
            </CardContent>
          </Card>

          {/* Onboarding Information */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 font-heading">
                Quick Start Onboarding: What to Expect
              </h2>
              <p className="text-xl text-muted-foreground">
                Your 30-Day Journey to Marketing Success
              </p>
            </div>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  Timeline
                </CardTitle>
                <CardDescription>
                  We'll have your complete marketing foundation built and working in 30 days. Here's how:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Week 1-2 */}
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                    Week 1-2: Discovery & Design
                  </h3>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Day 1-3:</strong> Kickoff call and brand discovery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Day 4-14:</strong> Website draft delivered for review</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                      <span><strong>Your time:</strong> 3-4 hours (interviews, draft review)</span>
                    </li>
                  </ul>
                </div>

                {/* Week 3-4 */}
                <div className="border-l-4 border-secondary pl-6 py-2">
                  <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
                    <span className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                    Week 3-4: Build & Launch
                  </h3>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span><strong>Day 15-25:</strong> Complete system setup and integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span><strong>Day 26-30:</strong> Final review, training, and go-live</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                      <span><strong>Your time:</strong> 3-4 hours (workflow review, training)</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* What You'll Get */}
            <Card className="border-2 border-secondary/10 bg-gradient-to-br from-background to-secondary/5">
              <CardHeader>
                <CardTitle className="text-2xl">What You'll Get</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Professional website (launch-ready)",
                    "Google Business Profile optimization",
                    "Automated review generation system",
                    "Client communication workflows",
                    "Email marketing foundation",
                    "Performance tracking dashboard"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-border">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Your Total Investment */}
            <Card className="border-2 border-gold/20 bg-gradient-to-br from-background to-gold/5">
              <CardHeader>
                <CardTitle className="text-2xl">Your Total Investment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-gold/30">
                  <div>
                    <p className="text-lg font-bold text-foreground">Time Commitment</p>
                    <p className="text-sm text-muted-foreground">Your involvement over 30 days</p>
                  </div>
                  <div className="text-3xl font-bold text-gold">6-8 hours</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border-2 border-primary/30">
                  <div>
                    <p className="text-lg font-bold text-foreground">Result</p>
                    <p className="text-sm text-muted-foreground">What you get in return</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-primary">Complete marketing</p>
                    <p className="text-base font-semibold text-secondary">foundation working 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="border-2 border-coral/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <ArrowRight className="w-6 h-6 text-coral" />
                  Next Steps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-coral/5 rounded-lg border border-coral/20">
                  <div className="bg-coral text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Schedule your kickoff call</h4>
                    <p className="text-sm text-muted-foreground">Plan for 1 hour to review your firm, goals, and brand</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Prepare your brand assets</h4>
                    <p className="text-sm text-muted-foreground">Gather your logo, photos, and existing content if available</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="text-center border-2 border-primary/10 bg-gradient-to-br from-background to-primary/5">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold text-primary mb-4">Questions? We're Here to Help</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-base">
                  <a 
                    href="mailto:contact@smartfirm.io" 
                    className="flex items-center gap-2 text-primary hover:underline font-semibold"
                  >
                    <Mail className="w-5 h-5" />
                    contact@smartfirm.io
                  </a>
                  <span className="hidden sm:inline text-muted-foreground">•</span>
                  <a 
                    href="tel:541-658-3789" 
                    className="flex items-center gap-2 text-primary hover:underline font-semibold"
                  >
                    <Calendar className="w-5 h-5" />
                    541-658-3789
                  </a>
                </div>
                <p className="mt-6 text-lg font-semibold text-secondary">
                  Your marketing transformation starts now.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="/">
                <Home className="mr-2 h-5 w-5" />
                Return to Home
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="/resources">
                Explore Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QuickStartThankYou;
