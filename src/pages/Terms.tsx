import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-teal pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="text-text-secondary space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">Acceptance of Terms</h2>
                <p>
                  By accessing and using SmartFirm.io services, you accept and agree to be bound by the 
                  terms and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">Use of Services</h2>
                <p>
                  Our marketing automation and business development services are provided to help 
                  accounting firms grow their practice. You agree to use our services only for 
                  lawful purposes and in accordance with these terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">Service Availability</h2>
                <p>
                  We strive to provide reliable service but cannot guarantee uninterrupted access. 
                  We reserve the right to modify, suspend, or discontinue services with notice 
                  when possible.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">Payment Terms</h2>
                <p>
                  Payment terms will be specified in your service agreement. Services may be 
                  suspended for non-payment. Refunds are subject to the terms outlined in your 
                  specific service contract.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">Limitation of Liability</h2>
                <p>
                  SmartFirm.io shall not be liable for any indirect, incidental, special, or 
                  consequential damages resulting from the use or inability to use our services, 
                  even if we have been advised of the possibility of such damages.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">Modifications</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting. Your continued use of our services constitutes acceptance 
                  of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p>
                  Email: hello@smartfirm.io<br />
                  Phone: (541) 658-3789<br />
                  Address: Eugene, OR
                </p>
              </div>

              <div className="text-sm text-text-light">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;