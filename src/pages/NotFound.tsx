import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";
import piggyBank from "@/assets/404-piggy-bank.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Error 404: Depreciated Asset | SmartFirm"
        description="The page you're looking for couldn't be found. Return to SmartFirm's homepage to explore our marketing automation and technology solutions for accounting firms."
        noindex={true}
      />
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* Piggy Bank Image */}
          <div className="mb-8 flex justify-center">
            <img 
              src={piggyBank} 
              alt="Cracked piggy bank smiling" 
              className="w-48 h-48 object-contain"
            />
          </div>

          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Error 404: Depreciated Asset
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
            Looks like this page has been fully depreciated and no longer exists in our books. 
            Time to reconcile your navigation!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="/">
                <Home className="mr-2 h-5 w-5" />
                Return to Home
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="/contact">
                <Search className="mr-2 h-5 w-5" />
                Contact Support
              </a>
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              You might be looking for:
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <a href="/solutions" className="text-primary hover:underline">
                Solutions
              </a>
              <a href="/services" className="text-primary hover:underline">
                Services
              </a>
              <a href="/case-studies" className="text-primary hover:underline">
                Case Studies
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

export default NotFound;
