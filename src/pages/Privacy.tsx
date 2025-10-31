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

const Privacy = () => {
  const faqs = [
    {
      question: "What personal information do you collect?",
      answer: "We collect information such as name, email address, phone number, billing details, and business information when you register, purchase services, or communicate with us."
    },
    {
      question: "How do you protect my data?",
      answer: "We use secure encryption protocols for data storage and transmission, limit access to personal information, and conduct regular security audits."
    },
    {
      question: "Can I request deletion of my data?",
      answer: "Yes, you can request full account deletion by contacting us at contact@smartfirm.io. We will delete all associated data unless retention is required for legal reasons."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Privacy Policy | SmartFirm"
        description="Learn how SmartFirm collects, uses, and protects your information. Updated to comply with Oregon Consumer Privacy Act (OCPA)."
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
                <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-vibrant-teal py-section">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90 max-w-text-md mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-section bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-text-lg mx-auto prose prose-lg">
            <div className="text-muted-foreground space-y-8">
              <div className="text-sm text-white mb-8">
                <p>Our Privacy Policy was last updated on June 28, 2025</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">SmartFirm.io Privacy Policy</h2>
                <p>
                  This Privacy Policy has been updated to comply with the Oregon Consumer Privacy Act (OCPA), 
                  effective July 1, 2024. It outlines how SmartFirm ("we," "us," or "our") collects, uses, 
                  maintains, and discloses information from users ("Users") of our website ("Site") and all 
                  products and services offered by us. By using SmartFirm, you agree to the collection and 
                  use of information in accordance with this Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Information Collection</h2>
                
                <h3 className="text-lg font-medium text-primary mb-3 mt-6">Personal Information Collected</h3>
                <p>We collect personal information when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Register an account</li>
                  <li>Purchase a subscription or service</li>
                  <li>Communicate with us via email, chat, or customer support</li>
                  <li>Use any of our products, tools, or services</li>
                </ul>
                
                <p className="mt-4">This information may include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, email address, phone number</li>
                  <li>Billing and payment details</li>
                  <li>Business and demographic details</li>
                  <li>Support inquiries and user activity on our platform</li>
                </ul>

                <h3 className="text-lg font-medium text-primary mb-3 mt-6">Non-Personal Information</h3>
                <p>We may also collect non-personal data such as:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Browser type and version</li>
                  <li>IP address and device identifiers</li>
                  <li>Website usage and analytics data</li>
                  <li>Cookies and tracking technologies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Use of Information</h2>
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process and fulfill orders or subscriptions</li>
                  <li>Improve customer support and user experience</li>
                  <li>Personalize content and recommendations</li>
                  <li>Send order updates, product announcements, and marketing communications (with opt-out options)</li>
                  <li>Improve security and fraud prevention</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Protection of Information</h2>
                <p>
                  We take reasonable security measures to protect your personal data from unauthorized access, 
                  alteration, disclosure, or destruction. These include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Secure encryption protocols for data storage and transmission</li>
                  <li>Limited access to personal information within our organization</li>
                  <li>Regular security audits and compliance reviews</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Sharing of Information</h2>
                
                <h3 className="text-lg font-medium text-primary mb-3 mt-6">No Selling of Data</h3>
                <p>
                  We do not sell, trade, or rent your personal information to third parties for marketing purposes.
                </p>

                <h3 className="text-lg font-medium text-primary mb-3 mt-6">Trusted Third Parties</h3>
                <p>
                  We may share data with service providers who assist in operating our platform (e.g., payment 
                  processors, hosting providers) under strict confidentiality agreements. These third parties are 
                  prohibited from using your data for any purpose other than providing services to SmartFirm.
                </p>

                <h3 className="text-lg font-medium text-primary mb-3 mt-6">Third-Party Integrations</h3>
                <p>
                  Our platform integrates with services such as Stripe, Meta (Facebook/Instagram), Google, and 
                  GoHighLevel. Use of features powered by these tools is also governed by their individual terms 
                  and privacy policies. We encourage you to review their policies when using integrated services.
                </p>

                <h3 className="text-lg font-medium text-primary mb-3 mt-6">Legal Compliance & Protection</h3>
                <p>
                  We may disclose information when required by law or to enforce our policies, protect SmartFirm's 
                  rights, or prevent fraud or security threats.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Cookies & Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience, analyze traffic, 
                  and deliver personalized content. You may disable cookies in your browser settings; however, 
                  this may affect platform functionality.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Data Transfers & Storage Locations</h2>
                <p>
                  SmartFirm may store and process your information on servers located in the United States or 
                  other jurisdictions. By using our services, you consent to the transfer of your data to these locations.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Automated Decision-Making & Profiling</h2>
                <p>
                  We may use automated systems and AI to analyze behavior, score leads, send personalized content, 
                  or support customer service operations. You may request human intervention in decisions made 
                  solely by automated means if those decisions have legal or significant personal effects.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Data Retention Policy</h2>
                <p>
                  We retain personal information for as long as necessary to provide our services, comply with 
                  legal obligations, resolve disputes, and enforce our agreements. After this period, your 
                  information is either securely deleted or anonymized.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">User Account Deletion</h2>
                <p>
                  Users may request full account deletion by contacting us at contact@smartfirm.io. Once verified, 
                  we will delete all associated data unless retention is required for legal or operational reasons.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Data Breach Notification</h2>
                <p>
                  In the unlikely event of a data breach affecting your personal information, we will notify you 
                  in accordance with applicable laws and take immediate action to mitigate any potential impact.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Your Rights Under Oregon Law</h2>
                <p>The OCPA grants Oregon residents the following rights regarding their personal data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Right to Access:</strong> Request details of your personal data and a list of third parties it has been shared with</li>
                  <li><strong>Right to Correction:</strong> Request that we correct any inaccurate or outdated personal data</li>
                  <li><strong>Right to Deletion:</strong> Request deletion of your personal data, subject to certain legal exceptions</li>
                  <li><strong>Right to Portability:</strong> Obtain a copy of your personal data in a usable format</li>
                  <li><strong>Right to Opt-Out:</strong> Opt out of the sale of data, targeted advertising, or profiling that has legal or significant effects</li>
                </ul>
                <p className="mt-4">
                  To exercise your rights or designate an authorized agent, contact us at contact@smartfirm.io. 
                  We will respond within 45 days of receiving a verified request (with a possible 45-day extension if needed).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Children's Data Protection</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>For children under 13: Parental or guardian consent is required for collection or processing of sensitive data</li>
                  <li>For ages 13–15: Opt-in consent is required for targeted advertising or profiling</li>
                </ul>
                <p className="mt-4">
                  We do not knowingly collect or store data from users under the age of 13 without parental consent.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Third-Party Websites</h2>
                <p>
                  SmartFirm may contain links to third-party sites. We are not responsible for the privacy 
                  practices or content of those sites. Please review their policies before sharing your information.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Compliance with Laws</h2>
                <p>We may disclose personal information when required to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comply with applicable laws, regulations, or government requests</li>
                  <li>Enforce our Terms of Service or internal policies</li>
                  <li>Prevent fraud or mitigate security threats</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Changes to This Privacy Policy</h2>
                <p>
                  We reserve the right to update this Privacy Policy at any time. Changes will be posted on 
                  this page with an updated effective date. Your continued use of SmartFirm services after 
                  changes are posted signifies your acceptance of the revised policy.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or your rights, or if you'd like to exercise 
                  any data protection requests, contact us at:
                </p>
                <p className="mt-4">
                  📧 Email: contact@smartfirm.io
                </p>
                <p className="mt-2">
                  You may also direct privacy-specific concerns to our designated Data Protection Officer at 
                  the same address.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-text-md mx-auto">
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
                    paragraphClassName="mt-4 text-muted-foreground leading-relaxed"
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

export default Privacy;
