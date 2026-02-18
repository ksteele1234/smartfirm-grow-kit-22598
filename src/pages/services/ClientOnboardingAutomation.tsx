import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { ServicePageData } from "@/types/cms";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle } from "lucide-react";
import SEO from "@/components/SEO";

const ClientOnboardingAutomation = () => {
  const serviceData: ServicePageData = {
    id: "client-onboarding-automation",
    title: "Client Onboarding Automation for Accounting Firms | SmartFirm",
    slug: "client-onboarding-automation",
    metaDescription: "Automate your client onboarding with secure portals, intake forms, and document collection. Reduce onboarding time by 70% and create a perfect first impression.",
    canonicalUrl: "https://smartfirm.io/services/client-onboarding-automation/",
    content: {},
    heroTitle: "Client Onboarding Automation for Accounting Firms",
    heroSubtitle: "Tired of the manual, time-consuming process of onboarding new clients? Client onboarding automation for accounting firms eliminates repetitive tasks, creates a seamless client experience, and frees your team to focus on billable work.",
    heroDescription: "Client onboarding automation for accounting firms streamlines intake, ensures consistency, and saves 10+ hours weekly while creating a professional first impression that positions your firm as organized and modern.",
    benefits: [
      {
        title: "Save 10+ Hours Per Week",
        description: "Eliminate repetitive data entry, email drafting, and document chasing. Our automated onboarding workflows handle welcome emails, document requests, and follow-ups automatically—giving your team back 10+ hours weekly to focus on billable client work.",
        icon: "Clock"
      },
      {
        title: "Create a Professional First Impression",
        description: "First impressions matter. Automated welcome sequences position your firm as organized, modern, and client-focused. New clients receive immediate responses, clear instructions, and a seamless intake experience that builds trust from day one.",
        icon: "Star"
      },
      {
        title: "Ensure Consistency Across Every Client",
        description: "No more inconsistent onboarding depending on who handles the intake. Every client gets the same high-quality experience with standardized welcome emails, document checklists, and follow-up sequences—regardless of which team member manages their account.",
        icon: "CheckCircle"
      },
      {
        title: "Scale Without Adding Staff",
        description: "Handle 3x more new clients without increasing your admin workload. Automated onboarding removes the bottleneck that typically limits growth, allowing your firm to take on more clients without hiring additional administrative staff.",
        icon: "TrendingUp"
      }
    ],
    features: [
      {
        title: "Automated Welcome Emails and Instructions",
        description: "New clients receive immediate, personalized welcome emails with clear next steps",
        details: [
          "Instant welcome email upon engagement signing",
          "Personalized introduction with team member bios",
          "Clear step-by-step onboarding instructions",
          "Branded templates that reflect your firm's professionalism"
        ]
      },
      {
        title: "Secure Document Collection Portal",
        description: "Clients upload documents through a secure, branded portal—no more email attachments",
        details: [
          "Encrypted file upload with bank-level security",
          "Customizable document checklists by service type",
          "Real-time status tracking for both client and team",
          "Automatic organization and filing of received documents"
        ]
      },
      {
        title: "Automated Reminders for Missing Information",
        description: "Stop chasing clients for documents—let automation handle the follow-ups",
        details: [
          "Scheduled reminder emails for incomplete items",
          "Escalating urgency in follow-up messaging",
          "SMS reminders for time-sensitive requests",
          "Dashboard visibility into outstanding items across all clients"
        ]
      },
      {
        title: "Integration with Practice Management Software",
        description: "Seamlessly connect with Karbon, Canopy, and other tools you already use",
        details: [
          "Two-way sync with Karbon, Canopy, and Financial Cents",
          "Automatic task creation when onboarding begins",
          "Client record updates without double data entry",
          "Workflow triggers based on onboarding milestones"
        ]
      },
      {
        title: "Personalized Client Intake Forms",
        description: "Collect exactly the information you need with customized intake forms",
        details: [
          "Dynamic forms that adapt based on service type",
          "Conditional logic for relevant follow-up questions",
          "Tax-specific vs. advisory-specific intake paths",
          "Data automatically populates client records"
        ]
      }
    ],
    faqs: [
      {
        question: "How long does it take to implement client onboarding automation?",
        answer: "Most firms are fully operational within 2-3 weeks. Week 1: We audit your current onboarding process and configure the platform. Week 2: We build your custom templates, forms, and workflows. Week 3: Testing, team training, and go-live. You'll start saving time immediately once the system is active.",
        category: "Implementation"
      },
      {
        question: "Will this work with my existing practice management software?",
        answer: "Yes. We integrate with all major practice management platforms including Karbon, Canopy, Financial Cents, Jetpack Workflow, and others. If your software has an API, we can connect it. This means no double data entry—client information flows automatically between systems.",
        category: "Integration"
      },
      {
        question: "Can I customize the intake forms for different service types?",
        answer: "Absolutely. You can create different onboarding paths for tax clients, bookkeeping clients, advisory clients, and any other service type. Each path can have unique intake forms, document checklists, and welcome sequences tailored to that service's specific requirements.",
        category: "Features"
      },
      {
        question: "What happens if a client doesn't complete their onboarding steps?",
        answer: "The system automatically sends reminder emails at intervals you define (e.g., 3 days, 7 days, 14 days). You can add SMS reminders for urgency. Your team receives dashboard alerts showing which clients have stalled so you can personally intervene when needed—but 85% of reminders are handled automatically.",
        category: "Features"
      },
      {
        question: "Is the document collection portal secure?",
        answer: "Yes. Our document portal uses bank-level 256-bit SSL encryption, SOC 2 compliant hosting, and secure access controls. Clients can only access their own documents, and all data is backed up automatically. This is significantly more secure than email attachments.",
        category: "Security"
      }
    ],
    ctaTitle: "Ready to Automate Your Client Onboarding?",
    ctaDescription: "Schedule a free consultation to see how we can streamline your client intake and save your team 10+ hours every week.",
    ctaButtonText: "Schedule a Free Consultation",
    ctaButtonLink: "/get-started-accounting-firm-automation/"
  };

  const relatedSolutionCallout = (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-border bg-gradient-to-br from-background to-accent/5 elevation-2">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 p-3 rounded-lg bg-accent/10 w-fit">
              <AlertTriangle className="h-6 w-6 text-accent" />
            </div>
            <CardTitle className="text-xl md:text-2xl text-primary">
              Is Your Onboarding Process Costing You Clients?
            </CardTitle>
            <CardDescription className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
              A broken onboarding process doesn't just waste time—it damages relationships before they even start.
              Learn why clients fall through the cracks and what it's really costing your firm.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center pt-0">
            <Button variant="outline" asChild>
              <a href="/solutions/client-onboarding-problems/">
                See the Real Cost of Poor Onboarding
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );

  return (
    <ServicePageTemplate data={serviceData} beforeFinalCta={relatedSolutionCallout} />
  );
};

export default ClientOnboardingAutomation;
