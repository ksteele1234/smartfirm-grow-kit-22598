import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Calendar, BarChart3 } from "lucide-react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

const PUBLICATION_NAMES: Record<string, string> = {
  accountingtoday: "Accounting Today",
  cpapracticeadvisor: "CPA Practice Advisor",
  journalofaccountancy: "Journal of Accountancy",
  accountingweb: "AccountingWeb",
  goingconcern: "Going Concern",
  firmofthefuture: "Firm of the Future",
  lunasconsulting: "Lunas Consulting",
};

function formatPublication(slug: string): string {
  if (PUBLICATION_NAMES[slug.toLowerCase()]) {
    return PUBLICATION_NAMES[slug.toLowerCase()];
  }
  return slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const GuestPostLanding = () => {
  const [searchParams] = useSearchParams();
  const campaign = searchParams.get("utm_campaign");
  const source = searchParams.get("utm_source");
  const medium = searchParams.get("utm_medium");
  const publication = campaign ? formatPublication(campaign) : null;

  const headline = publication
    ? `Welcome from ${publication}`
    : "Welcome! Glad You Found Us";

  // Pass through whatever UTM params are present for tracking
  const utmParams = new URLSearchParams();
  if (source) utmParams.set("utm_source", source);
  if (medium) utmParams.set("utm_medium", medium);
  if (campaign) utmParams.set("utm_campaign", campaign);
  const diagnosticUrl = utmParams.toString()
    ? `/diagnostic?${utmParams.toString()}`
    : "/diagnostic";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Welcome to SmartFirm"
        description="SmartFirm.io helps accounting firms grow with workflow automation, marketing systems, and AI-powered tools. Take the free diagnostic to find your biggest growth opportunities."
        robots="noindex,nofollow"
      />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              {headline}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              SmartFirm.io builds automation and marketing systems exclusively for accounting, bookkeeping, and CPA firms. We help you cut busywork, win more clients, and grow without adding headcount.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              How We Help Firms Like Yours
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Workflow Automation</h3>
                  <p className="text-sm text-muted-foreground">
                    Automate client intake, follow-ups, and internal handoffs so your team stops drowning in manual tasks.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Marketing Systems</h3>
                  <p className="text-sm text-muted-foreground">
                    SEO, email nurture, and lead capture built specifically for accounting firms. Not generic templates.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">AI-Powered Growth</h3>
                  <p className="text-sm text-muted-foreground">
                    Smart tools that analyze your firm, identify bottlenecks, and recommend the highest-impact changes first.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Primary CTA: Diagnostic */}
        <section className="bg-primary/5 px-4 py-12 md:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Find Your Biggest Growth Opportunity
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Take the free 2-minute diagnostic. Answer 13 quick questions about your firm, and get a personalized growth roadmap with priority-ranked recommendations.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href={diagnosticUrl}>
                Take the Free Diagnostic
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              No credit card required. Results delivered instantly.
            </p>
          </div>
        </section>

        {/* Secondary CTA: Call Booking */}
        <section className="px-4 py-12 md:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="rounded-full bg-primary/10 p-4 w-fit mx-auto mb-6">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              Prefer to Talk It Through?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Book a free 15-minute call with Katie. No sales pitch, just a quick look at where your firm stands and whether SmartFirm can help.
            </p>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://cal.com/katie-steele/15min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a 15-Minute Call
                <Calendar className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GuestPostLanding;
