import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ThankYou = () => {
  useEffect(() => {
    // Track conversion if needed
    console.log("Thank you page viewed");
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Thank You"
        description="Thank you for contacting SmartFirm. We've received your message and will get back to you shortly."
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
            Thank You!
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            We've received your message and will get back to you within 24 hours.
          </p>

          {/* Confirmation Details */}
          <Card className="mb-8 text-left animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <CardHeader>
              <CardTitle className="text-xl">What happens next?</CardTitle>
              <CardDescription>Here's what you can expect from us</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2 mt-1 flex-shrink-0">
                  <span className="text-sm font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">We review your inquiry</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team will carefully review your message and assess how we can best help your accounting firm.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2 mt-1 flex-shrink-0">
                  <span className="text-sm font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">We reach out within 24 hours</h3>
                  <p className="text-sm text-muted-foreground">
                    A SmartFirm specialist will contact you to discuss your needs and answer any questions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2 mt-1 flex-shrink-0">
                  <span className="text-sm font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">We schedule a consultation</h3>
                  <p className="text-sm text-muted-foreground">
                    If it's a good fit, we'll schedule a detailed consultation to explore how SmartFirm can help you grow.
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

          {/* Additional Resources */}
          <div className="mt-12 pt-8 border-t border-border animate-in fade-in duration-700 delay-500">
            <p className="text-sm font-semibold text-foreground mb-4">
              While you wait, check out:
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <a href="/case-studies" className="text-primary hover:underline">
                Success Stories
              </a>
              <a href="/solutions" className="text-primary hover:underline">
                Solutions
              </a>
              <a href="/leading-marketing-services-for-accounting-firms" className="text-primary hover:underline">
                Services
              </a>
              <a href="/resources" className="text-primary hover:underline">
                Resources
              </a>
              <a href="/about" className="text-primary hover:underline">
                About Us
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
