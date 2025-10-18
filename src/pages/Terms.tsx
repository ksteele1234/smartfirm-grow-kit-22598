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

const Terms = () => {
  const faqs = [
    {
      question: "What happens if I violate the terms?",
      answer: "We may terminate your license immediately and restrict access to the platform. Your obligations related to confidentiality, intellectual property, and indemnification survive termination."
    },
    {
      question: "Can I transfer my license to someone else?",
      answer: "No, the license is personal to you and cannot be shared or transferred without our explicit written permission."
    },
    {
      question: "How are disputes resolved?",
      answer: "All disputes will be resolved via binding arbitration in Oregon. Individual claims only—not as part of a class action."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Terms of Service | SmartFirm"
        description="SmartFirm terms of service governing the use of our software, tools, and services. Updated for Oregon law compliance."
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
                <BreadcrumbPage>Terms of Service</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-teal py-20">
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
                <h2 className="text-xl font-semibold text-primary mb-4">Introduction & Acceptance</h2>
                <p>
                  This Agreement governs the use of the software, tools, and services provided by SmartFirm 
                  ("we", "us", or "our"). By accessing or using our platform, you agree to these terms. If 
                  you disagree with any part of these terms, do not use SmartFirm. These terms have been 
                  drafted in accordance with Oregon law to protect both your rights as a consumer and our 
                  intellectual property interests.
                </p>
                <p className="mt-4">
                  The terms outlined below constitute a legally binding contract between you and SmartFirm. 
                  Please review them carefully before using our software products.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">License Grant & Scope</h2>
                <p>
                  We grant you a non-exclusive, non-transferable license to use our software and services 
                  under the terms of this Agreement, limited to the period of your subscription or purchase. 
                  This license is personal to you and cannot be shared or transferred without our explicit 
                  written permission.
                </p>
                <p className="mt-4">
                  This license covers only the specific products and services you have purchased or subscribed 
                  to. Any additional features may require separate licensing or additional fees.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Terms of Subscription & Payments</h2>
                <p>
                  Subscription payments are automatically billed monthly via Stripe, in accordance with your 
                  selected subscription tier. By subscribing, you authorize SmartFirm to charge your payment 
                  method on a recurring basis.
                </p>
                <p className="mt-4">
                  If your payment method fails three consecutive times, your account will be paused, and 
                  access to the platform will be restricted until payment is resolved. Any one-time or setup 
                  fees must be paid in full prior to the start of any work or onboarding services.
                </p>
                <p className="mt-4">
                  Failure to make timely payments may also result in suspension or permanent termination of 
                  your license.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">User Conduct & Legal Compliance</h2>
                <p>
                  All users agree to comply with all applicable federal, state, and local laws and regulations 
                  while using the platform. Prohibited activities include, but are not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Using the platform to transmit illegal, harmful, threatening, abusive, harassing, defamatory, obscene, or otherwise objectionable content</li>
                  <li>Attempting unauthorized access to systems, user accounts, or networks</li>
                  <li>Engaging in fraudulent activities or deceptive marketing practices</li>
                  <li>Uploading malware, viruses, or scripts that could disrupt platform functionality</li>
                  <li>Using the platform to spam, phish, scrape data, or otherwise exploit users or systems</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to suspend or terminate accounts engaged in any form of unethical or 
                  unlawful behavior. Violations may be reported to the appropriate authorities where applicable.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Data Privacy, Storage & Handling</h2>
                <p>
                  SmartFirm stores and processes user data in compliance with the Oregon Consumer Privacy Act 
                  (OCPA) and industry best practices. Our platform operates in conjunction with GoHighLevel (GHL), 
                  and data is managed in accordance with both GHL's data policies and our internal privacy standards.
                </p>
                <p className="mt-4">
                  We do not sell or share user data with third parties. We strictly prohibit the use of our 
                  platform for any purpose involving data resale, unauthorized data harvesting, or other behavior 
                  that violates consumer privacy—even if technically legal but ethically questionable.
                </p>
                <p className="mt-4">
                  SmartFirm reserves the right to suspend any account found using the platform for data 
                  exploitation, unauthorized lead scraping, or non-consensual data collection.
                </p>
                <p className="mt-4">
                  Details of how data is collected, used, and protected are available in our separate Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Third-Party Integrations & Service Terms</h2>
                <p>SmartFirm integrates with several third-party services, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Stripe (for billing and payments)</li>
                  <li>Meta (Facebook/Instagram) (for ad services)</li>
                  <li>Google (for email, reviews, analytics, and search visibility)</li>
                  <li>GoHighLevel (CRM and marketing automation platform)</li>
                </ul>
                <p className="mt-4">
                  By using features tied to these services, you also agree to the terms and policies set by 
                  each respective provider. SmartFirm is not responsible for any liabilities, outages, or legal 
                  issues arising from third-party service use. Users are encouraged to review and understand the 
                  service agreements and privacy policies of these platforms.
                </p>
                <p className="mt-4">
                  We make reasonable efforts to ensure our integrations function reliably, but we cannot guarantee 
                  continuous uptime or feature availability for any third-party tools.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Intellectual Property</h2>
                <p>
                  SmartFirm, including its software, content, design, logos, trademarks, and related materials, 
                  is protected under intellectual property laws and remains the exclusive property of SmartFirm 
                  or its licensors. You are granted no ownership rights, only the usage rights outlined here.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Indemnification Obligations</h2>
                <p>
                  You agree to indemnify and hold SmartFirm harmless from any claims, damages, or losses 
                  resulting from your use of the platform, violation of this Agreement, or infringement of 
                  third-party rights. This includes reasonable legal fees incurred in defense.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Termination</h2>
                <p>
                  We may terminate your license at any time without notice if you breach this Agreement. Upon 
                  termination, you must stop using our software and destroy any copies. Your obligations related 
                  to confidentiality, intellectual property, and indemnification survive termination.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Amendments to Agreement</h2>
                <p>
                  We may update this Agreement at any time. Changes become effective upon posting on our website. 
                  Continued use constitutes acceptance. We'll make reasonable efforts to notify users of major 
                  updates via email or site notification.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Restrictions on Use</h2>
                <p>
                  You may not reverse engineer, decompile, or extract the source code. You may not use our 
                  platform to build competing products, violate laws, or infringe third-party rights.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Dispute Resolution and Arbitration</h2>
                <p>
                  All disputes will be resolved via binding arbitration in Oregon under UTCR Chapter 13. The 
                  arbitrator must be a licensed Oregon attorney with at least five years of experience. 
                  Arbitration will be held in Hood River County unless otherwise agreed.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Individual Claims Requirement</h2>
                <p>
                  All disputes must be brought individually—not as part of a class action, representative, or 
                  collective proceeding.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Waiver of Jury Trial</h2>
                <p>
                  You waive the right to a jury trial for any disputes related to this Agreement, to the extent 
                  permitted by law.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Governing Law and Jurisdiction</h2>
                <p>
                  This Agreement is governed by the laws of the State of Oregon. Legal actions shall be filed 
                  in Lane County Circuit Court.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Force Majeure</h2>
                <p>
                  Neither party is liable for delays caused by forces beyond their control, including but not 
                  limited to natural disasters, pandemics, or internet outages.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Disclaimer of Warranties</h2>
                <p>
                  The platform is provided "as is." We disclaim all implied warranties, including merchantability, 
                  fitness for a particular purpose, and non-infringement, to the extent permitted by law.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Severability</h2>
                <p>
                  If any part of this Agreement is found unenforceable, the rest remains in effect.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Confidentiality</h2>
                <p>
                  Users must protect any proprietary or sensitive business information shared through the 
                  platform, including client lists, source code, and marketing materials.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Educational Content Disclaimer</h2>
                <p>
                  Business and marketing content provided through the platform is for informational purposes 
                  only and does not constitute legal, financial, or tax advice. Users should consult a 
                  professional for specific guidance.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Refund Policy</h2>
                <p>
                  All digital product sales are final. No refunds or exchanges are permitted, except where 
                  prohibited by law. Oregon consumer protection rights remain intact and are not waived by 
                  this policy.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Entire Agreement</h2>
                <p>
                  This document constitutes the full and complete agreement between the user and SmartFirm.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Company Contact</h2>
                <p>
                  Steele Piper LLC<br />
                  dba SmartFirm<br />
                  Email: contact@smartfirm.io
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
                  <p className="mt-4 text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
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

export default Terms;
