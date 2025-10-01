import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, RefreshCw, Mail } from "lucide-react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServerError = () => {
  useEffect(() => {
    console.error("500 Error: Server error occurred");
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Error 500: Server Error"
        description="We're experiencing technical difficulties. Our team has been notified and is working to resolve the issue."
        robots="noindex,nofollow"
      />
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* Error Icon */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-destructive/10 p-6">
              <AlertTriangle className="h-20 w-20 text-destructive" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Error 500: Internal Server Error
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
            Oops! Something went wrong on our end. We've been notified and are working to fix it.
          </p>

          {/* Troubleshooting Steps */}
          <Card className="mb-8 text-left">
            <CardHeader>
              <CardTitle className="text-xl">What you can try:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <RefreshCw className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Refresh the page</h3>
                  <p className="text-sm text-muted-foreground">
                    Sometimes a simple refresh resolves temporary issues.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <Home className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Return home</h3>
                  <p className="text-sm text-muted-foreground">
                    Go back to the homepage and try navigating again.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Contact support</h3>
                  <p className="text-sm text-muted-foreground">
                    If the problem persists, our team is ready to help.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={handleRefresh} size="lg" className="w-full sm:w-auto">
              <RefreshCw className="mr-2 h-5 w-5" />
              Refresh Page
            </Button>
            
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="/">
                <Home className="mr-2 h-5 w-5" />
                Return to Home
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="/contact">
                Contact Support
              </a>
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Error logged at: {new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServerError;
