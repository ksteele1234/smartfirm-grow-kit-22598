import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, Mail, Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const QuickStartThankYou = () => {
  useEffect(() => {
    // Track conversion
    console.log("Quick Start purchase completed");
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Welcome to SmartFirm - Quick Start Package"
        description="Thank you for purchasing the SmartFirm Quick Start Package. Here's what happens next."
        robots="noindex,nofollow"
      />
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-primary/10 p-6 animate-in fade-in zoom-in duration-500">
              <CheckCircle className="h-20 w-20 text-primary" />
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Welcome to SmartFirm!
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Your Quick Start Package is confirmed. We're excited to help transform your accounting firm.
          </p>

          {/* Confirmation Details */}
          <Card className="mb-8 text-left animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <CardHeader>
              <CardTitle className="text-xl">What happens next?</CardTitle>
              <CardDescription>Your journey to growth starts now</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2 mt-1 flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Check your email</h3>
                  <p className="text-sm text-muted-foreground">
                    You'll receive a confirmation email with your purchase details and next steps within the next few minutes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2 mt-1 flex-shrink-0">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">We'll schedule your onboarding call</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team will reach out within 24 hours to schedule your white-glove onboarding session and gather information about your firm.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2 mt-1 flex-shrink-0">
                  <span className="text-sm font-bold text-primary">30</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Launch in 30 days</h3>
                  <p className="text-sm text-muted-foreground">
                    Within 30 days, your complete marketing system will be live, generating leads and growing your firm.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
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

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-border animate-in fade-in duration-700 delay-500">
            <p className="text-sm text-muted-foreground mb-4">
              Questions? Our team is here to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <a href="/get-started" className="text-primary hover:underline">
                Contact Us
              </a>
              <a href="/quick-start-marketing-for-cpa-firms" className="text-primary hover:underline">
                Quick Start Details
              </a>
              <a href="/about" className="text-primary hover:underline">
                About SmartFirm
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QuickStartThankYou;
