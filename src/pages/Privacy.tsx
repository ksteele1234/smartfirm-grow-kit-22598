import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-teal pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="text-text-secondary space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  fill out a form, or contact us. This may include your name, email address, phone number, 
                  company information, and any other information you choose to provide.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices, updates, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Communicate with you about products, services, and promotional offers</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy. We may share your information 
                  with trusted service providers who assist us in operating our website and conducting our business.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of 
                  transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
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

export default Privacy;