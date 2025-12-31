import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, Search as SearchIcon } from "lucide-react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";
import OptimizedImage from "@/components/ui/optimized-image";
import piggyBank from "@/assets/404-piggy-bank.webp";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/resources?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Error 404: Depreciated Asset"
        description="This page has been removed or relocated. Visit SmartFirm.io to explore our automation and marketing services for accounting firms."
        robots="noindex,follow"
      />
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* Piggy Bank Image */}
          <div className="mb-8 flex justify-center">
            <OptimizedImage 
              src={piggyBank} 
              alt="Cracked piggy bank smiling"
              width={192}
              height={192}
              description="Cracked piggy bank smiling"
              context="404 error page"
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

          {/* Search Box */}
          <div className="mb-8 max-w-md mx-auto">
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                type="text"
                placeholder="Search our site..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="lg">
                <SearchIcon className="h-5 w-5" />
              </Button>
            </form>
          </div>

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
              <a href="/solutions-expert-marketing-agency-for-accounting-firms" className="text-primary hover:underline">
                Solutions
              </a>
              <a href="/leading-marketing-services-for-accounting-firms" className="text-primary hover:underline">
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
