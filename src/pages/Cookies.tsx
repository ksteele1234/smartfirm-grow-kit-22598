import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";
import FaqAnswer from "@/components/faq/FaqAnswer";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const Cookies = () => {
  const faqs = [
    {
      question: "What are cookies and why do you use them?",
      answer: "Cookies are small text files that help us provide you with a better experience by remembering your preferences and analyzing how you use our site."
    },
    {
      question: "Can I disable cookies?",
      answer: "Yes, you can control cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website."
    },
    {
      question: "Do you share cookie data with third parties?",
      answer: "We only share data with trusted service providers who help us operate our platform, and they are bound by strict confidentiality agreements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cookie Policy | SmartFirm"
        description="Learn how SmartFirm uses cookies to improve your website experience. Manage your cookie preferences and settings."
        pageType="legal"
        noindex={false}
        faqs={faqs}
      />
      <Header />
      
      {/* Breadcrumb */}
      <nav id="sf-breadcrumbs" className="bg-background-light border-b" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 lg:px-6 py-1.5">
          <Breadcrumb>
            <BreadcrumbList className="text-sm text-muted-foreground">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Cookie Policy</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-vibrant-teal py-section">
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
      <section className="py-section bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="text-text-secondary space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">What Are Cookies</h2>
                <p>
                  Cookies are small text files that are stored on your computer or mobile device when you 
                  visit our website. They help us provide you with a better experience by remembering your 
                  preferences and analyzing how you use our site.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">How We Use Cookies</h2>
                <p>We use cookies for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Essential cookies: Required for the website to function properly</li>
                  <li>Analytics cookies: Help us understand how visitors interact with our website</li>
                  <li>Marketing cookies: Used to deliver relevant advertisements</li>
                  <li>Preference cookies: Remember your settings and preferences</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Managing Cookies</h2>
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
                <h2 className="text-xl font-semibold text-primary mb-4">Third-Party Cookies</h2>
                <p>
                  Our website may contain links to third-party websites and services. These third parties 
                  may use their own cookies, which are not covered by our cookie policy. We recommend 
                  reviewing their privacy policies for more information.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time. Any changes will be posted on this 
                  page with an updated revision date.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies, please contact us at:
                </p>
                <p>
                  Email: contact@smartfirm.io<br />
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

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <details key={index} className="group border border-border rounded-lg p-6 bg-background">
                  <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex items-center justify-between">
                    {faq.question}
                    <span className="ml-2 transform group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <FaqAnswer
                    text={faq.answer}
                    paragraphClassName="mt-4 text-text-secondary leading-relaxed"
                  />
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cookies;
