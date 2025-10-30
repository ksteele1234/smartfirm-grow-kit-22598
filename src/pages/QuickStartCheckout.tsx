import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const QuickStartCheckout = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Quick Start Package Checkout | SmartFirm"
        description="Complete your Quick Start package purchase and begin transforming your accounting firm today."
        pageType="default"
        noindex={true}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Quick Start", url: "/quick-start-marketing-for-cpa-firms" },
          { name: "Checkout", url: "/quick-start-checkout" }
        ]}
      />
      <Header />
      
      {/* Breadcrumb */}
      <nav className="bg-background-light border-b" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 lg:px-6 py-1.5">
          <Breadcrumb>
            <BreadcrumbList className="text-sm text-muted-foreground">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/quick-start-marketing-for-cpa-firms">
                  Quick Start
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Checkout</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>

      <main className="bg-gradient-mesh-professional py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Complete Your Quick Start Package
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              You're one step away from transforming your accounting firm
            </p>
          </div>

          {/* Checkout Embed Container */}
          <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-2xl">
            {/* 
              EMBED INSTRUCTIONS:
              Replace this div content with your checkout iframe or HTML embed code.
              
              Example for iframe:
              <iframe 
                src="YOUR_CHECKOUT_URL" 
                style={{ width: '100%', border: 'none', minHeight: '600px' }}
                title="Checkout"
              />
              
              Example for custom HTML:
              Paste your embed code directly here, replacing this comment block.
            */}
            <div id="checkout-embed-container" className="min-h-[500px] flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">🚀</div>
                <h2 className="text-2xl font-heading font-bold text-slate-900">
                  Checkout Coming Soon
                </h2>
                <p className="text-lg text-slate-600 max-w-md mx-auto">
                  We're setting up your checkout experience. Please check back soon or contact us directly to get started.
                </p>
                <div className="pt-4">
                  <a 
                    href="/get-started" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-coral text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
                  >
                    Book a Free Call Instead
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QuickStartCheckout;
