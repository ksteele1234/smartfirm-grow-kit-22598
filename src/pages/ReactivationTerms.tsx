import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ReactivationTerms = () => {
  return (
    <>
      <SEO
        title="Reactivation Service Terms | SmartFirm"
        description="Service terms for the Hidden Money Reactivation campaign. Read our terms covering setup fees, appointment billing, guarantees, and refund policies."
        pageType="legal"
        noindex={true}
      />
      <Header />
      <main id="main-content" className="min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-background-subtle py-4">
          <div className="container mx-auto px-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Reactivation Terms</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-vibrant-teal py-16 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Hidden Money Reactivation — Service Terms
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Service terms for the Hidden Money Reactivation campaign
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-section bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-muted-foreground text-sm mb-8">
                Last updated: December 2025
              </p>

              {/* What You're Buying */}
              <h2 className="text-xl font-semibold text-primary mb-4">
                What You're Buying
              </h2>
              <p className="text-muted-foreground mb-4">
                The $500 setup fee covers one done-for-you reactivation campaign, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Dormant client list cleaning and segmentation</li>
                <li>Email campaign setup on your domain</li>
                <li>9-word reactivation email sequence</li>
                <li>Booking concierge (we handle replies and schedule appointments)</li>
                <li>Bonus assets: follow-up scripts, intake form template, no-show rescue sequence, advisory positioning one-sheet</li>
              </ul>
              <p className="text-muted-foreground mb-8">
                Per-appointment fees of $100 are billed separately for each appointment.
              </p>

              {/* The Guarantee */}
              <h2 className="text-xl font-semibold text-primary mb-4">
                The Guarantee
              </h2>
              <p className="text-muted-foreground mb-4">
                We guarantee 5 qualified appointments in 14 days, or we refund your $500 setup fee.
              </p>
              <p className="text-muted-foreground mb-4">
                This guarantee is valid ONLY if you meet ALL of the following:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>You provide your client list within 48 hours of completing the intake questionnaire</li>
                <li>Your list contains at least 100 valid email addresses</li>
                <li>Your list bounce rate is under 20%</li>
                <li>You approve email copy within 24 hours of receiving it</li>
                <li>Your calendar remains open for bookings during the campaign period</li>
              </ul>
              <p className="text-muted-foreground mb-8">
                If any of these conditions are not met, the guarantee is void and no refund will be issued.
              </p>

              {/* Appointment Billing */}
              <h2 className="text-xl font-semibold text-primary mb-4">
                Appointment Billing
              </h2>
              <p className="text-muted-foreground mb-8">
                You will be invoiced $100 for each qualified appointment we book. "Qualified appointment" means the prospect attended the scheduled call. No-shows and cancellations are not billed. Payment is due within 7 days of invoice.
              </p>

              {/* Your Responsibilities */}
              <h2 className="text-xl font-semibold text-primary mb-4">
                Your Responsibilities
              </h2>
              <p className="text-muted-foreground mb-4">
                To ensure a successful campaign, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                <li>Provide email access via Google/Microsoft OAuth or secure credential sharing</li>
                <li>Respond to copy approval requests within 24 hours</li>
                <li>Keep your calendar available during the active campaign period</li>
                <li>Notify us of any scheduling changes or blackout dates</li>
              </ul>

              {/* Refunds */}
              <h2 className="text-xl font-semibold text-primary mb-4">
                Refunds
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                <li><strong>Setup fee ($500):</strong> Non-refundable, except under the guarantee terms above</li>
                <li><strong>Per-appointment fees ($100 each):</strong> Non-refundable once the appointment is confirmed on your calendar</li>
              </ul>

              {/* Questions */}
              <h2 className="text-xl font-semibold text-primary mb-4">
                Questions?
              </h2>
              <p className="text-muted-foreground">
                Email{" "}
                <a
                  href="mailto:contact@smartfirm.io"
                  className="text-primary hover:text-primary/80 underline"
                >
                  contact@smartfirm.io
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ReactivationTerms;
