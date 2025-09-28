import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-teal pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Learn about how we use cookies to improve your experience on our website.
          </p>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="text-text-secondary space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">What Are Cookies</h2>
                <p>
                  Cookies are small text files that are stored on your computer or mobile device when you 
                  visit our website. They help us provide you with a better experience by remembering your 
                  preferences and analyzing how you use our site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">How We Use Cookies</h2>
                <p>We use cookies for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Essential cookies: Required for the website to function properly</li>
                  <li>Analytics cookies: Help us understand how visitors interact with our website</li>
                  <li>Marketing cookies: Used to deliver relevant advertisements</li>
                  <li>Preference cookies: Remember your settings and preferences</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">Managing Cookies</h2>
                <p>
                  You can control cookies through your browser settings. However, disabling certain 
                  cookies may affect the functionality of our website. Most browsers allow you to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>View what cookies are stored and delete them individually</li>
                  <li>Block third-party cookies</li>
                  <li>Block cookies from specific sites</li>
                  <li>Block all cookies</li>
                  <li>Delete all cookies when you close your browser</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">Third-Party Cookies</h2>
                <p>
                  Our website may contain links to third-party websites and services. These third parties 
                  may use their own cookies, which are not covered by our cookie policy. We recommend 
                  reviewing their privacy policies for more information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time. Any changes will be posted on this 
                  page with an updated revision date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies, please contact us at:
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

export default Cookies;