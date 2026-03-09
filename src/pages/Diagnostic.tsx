import { useState, useCallback } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign,
  Download,
  FileText,
  Lightbulb,
  Loader2,
  Mail,
  Phone,
  TrendingDown,
  Users,
} from "lucide-react";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";

// ═══════════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════════

type QuestionType = "slider" | "radio";

interface RadioOption {
  label: string;
  value: number;
}

interface QuizQuestion {
  id: number;
  section: string;
  sectionNumber: number;
  question: string;
  subtext: string;
  type: QuestionType;
  options?: RadioOption[];
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  defaultValue?: number;
}

interface QuizAnswers {
  [questionId: number]: number;
}

interface SectionResult {
  name: string;
  score: number;
  maxScore: number;
  severity: "low" | "moderate" | "high" | "critical";
  recommendation: string;
  priority: number;
  easyFixes: string[];
}

interface QuizResults {
  totalScore: number;
  maxScore: number;
  percentage: number;
  wasteHoursLow: number;
  wasteHoursHigh: number;
  dollarLow: number;
  dollarHigh: number;
  sections: SectionResult[];
}

// ═══════════════════════════════════════════════════════════════════════════════
// QUESTION DATA
// ═══════════════════════════════════════════════════════════════════════════════

const questions: QuizQuestion[] = [
  // ── Section 1: Document Chase ──
  {
    id: 1,
    section: "Document Chase",
    sectionNumber: 1,
    question:
      "How many hours per week does your team spend chasing missing documents, downloading bank and credit card statements, and following up with clients?",
    subtext:
      "Include emails, calls, portal logins, statement downloads, and the mental overhead of tracking who still owes what. Most firms undercount this by 60% or more.",
    type: "slider",
    min: 0,
    max: 25,
    step: 1,
    unit: "hrs/week",
    defaultValue: 5,
  },
  {
    id: 2,
    section: "Document Chase",
    sectionNumber: 1,
    question:
      "What happens when a client doesn't respond after the second follow-up?",
    subtext:
      "If your answer is 'it depends on who's handling it,' that's a process gap disguised as flexibility.",
    type: "radio",
    options: [
      { label: "We have a documented escalation process", value: 0 },
      { label: "We keep following up until they respond", value: 3 },
      { label: "It depends on who's handling it", value: 7 },
      { label: "I'm not sure what happens", value: 9 },
    ],
  },
  {
    id: 3,
    section: "Document Chase",
    sectionNumber: 1,
    question:
      "How many different inboxes are involved in getting one return completed?",
    subtext:
      "Every additional inbox adds delay, context switching, and risk. If the answer is more than two, information is getting lost between them.",
    type: "radio",
    options: [
      { label: "1 inbox", value: 0 },
      { label: "2 inboxes", value: 2 },
      { label: "3 inboxes", value: 5 },
      { label: "4 or more inboxes", value: 9 },
    ],
  },
  // ── Section 2: Data Handoffs ──
  {
    id: 4,
    section: "Data Handoffs",
    sectionNumber: 2,
    question: "How many times is the same client data re-entered by a human?",
    subtext:
      "Every re-entry is a chance for error, a drain on time, and a sign that your systems aren't talking to each other.",
    type: "radio",
    options: [
      { label: "Never - our systems sync automatically", value: 0 },
      { label: "Once (manually moved between two systems)", value: 3 },
      { label: "2–3 times across different tools", value: 7 },
      { label: "4+ times or I've lost count", value: 10 },
    ],
  },
  {
    id: 5,
    section: "Data Handoffs",
    sectionNumber: 2,
    question:
      "How much of your data movement relies on copy/paste instead of automatic syncing?",
    subtext:
      "Copy-paste workflows feel fast in the moment, but they create silent errors that surface weeks later during review.",
    type: "radio",
    options: [
      { label: "Almost nothing - our tools are well-integrated", value: 0 },
      { label: "A few things here and there", value: 3 },
      { label: "A significant amount of daily work", value: 7 },
      { label: "Most data moves by copy-paste", value: 10 },
    ],
  },
  {
    id: 6,
    section: "Data Handoffs",
    sectionNumber: 2,
    question:
      "When data is missing or wrong, how late in the process is it usually caught?",
    subtext:
      "If the answer is 'the preparer catches it during review,' the damage is already done. Late detection means rework, delays, and hours that never get billed.",
    type: "radio",
    options: [
      { label: "Immediately - our system flags it at entry", value: 0 },
      { label: "During data entry by the person entering it", value: 3 },
      { label: "During review by a preparer or manager", value: 7 },
      { label: "After delivery or when the client notices", value: 10 },
    ],
  },
  // ── Section 3: Staff Behavior Signals ──
  {
    id: 7,
    section: "Staff Behavior Signals",
    sectionNumber: 3,
    question:
      'Does your firm have one person everyone relies on when something breaks -"the fixer"?',
    subtext:
      "That person is a single point of failure, and their workload is masking broken processes that the rest of the team has learned to route around.",
    type: "radio",
    options: [
      { label: "No - responsibilities are well-distributed", value: 0 },
      { label: "Maybe, but it's not a major issue", value: 3 },
      { label: "Yes - we have a clear 'go-to' person", value: 7 },
      { label: "Yes - and it worries me", value: 10 },
    ],
  },
  {
    id: 8,
    section: "Staff Behavior Signals",
    sectionNumber: 3,
    question:
      "How many spreadsheets, checklists, or workarounds has your team built on their own?",
    subtext:
      "Homegrown workarounds are symptoms. Each one represents a gap in your official process that you haven't formalized or fixed.",
    type: "radio",
    options: [
      { label: "None that I know of", value: 0 },
      { label: "1–2 minor ones", value: 3 },
      { label: "3–5 - they've become part of the workflow", value: 7 },
      { label: "6+ or I don't have full visibility", value: 10 },
    ],
  },
  {
    id: 9,
    section: "Staff Behavior Signals",
    sectionNumber: 3,
    question:
      "Do your best people spend time every day on tasks they clearly shouldn't be doing?",
    subtext:
      "This is where quiet turnover risk lives. High-value employees doing low-value repetitive work will eventually leave for a firm that doesn't waste their talent.",
    type: "radio",
    options: [
      { label: "No - everyone works at the right level", value: 0 },
      { label: "Occasionally, but it's manageable", value: 3 },
      { label: "Yes - I can name the tasks", value: 7 },
      { label: "Yes - and I've already lost people over it", value: 10 },
    ],
  },
  // ── Section 4: Math & Control ──
  {
    id: 10,
    section: "Math & Control",
    sectionNumber: 4,
    question:
      "How many days does an average return sit idle, waiting on something?",
    subtext:
      "Idle time is invisible on a task list but devastating on a calendar. Most firms have 3 to 5 days of dead time built into every return.",
    type: "slider",
    min: 0,
    max: 10,
    step: 1,
    unit: "days",
    defaultValue: 3,
  },
  {
    id: 11,
    section: "Math & Control",
    sectionNumber: 4,
    question:
      "If your top admin or senior staff member quit tomorrow, what would silently break?",
    subtext:
      "The things that would break are the things currently held together by memory, habit, and institutional knowledge instead of documented systems.",
    type: "radio",
    options: [
      { label: "Nothing critical - we have documentation", value: 0 },
      { label: "A couple of things, but we'd recover quickly", value: 3 },
      { label: "Several processes would stall", value: 7 },
      { label: "Almost everything - they hold it all together", value: 10 },
    ],
  },
  {
    id: 12,
    section: "Math & Control",
    sectionNumber: 4,
    question:
      "Can you point to one dashboard that shows work moving without a human chasing it?",
    subtext:
      "If you need a person to check on the status of work, you don't have a system. You have a staff member doing the system's job.",
    type: "radio",
    options: [
      { label: "Yes - we have real-time visibility", value: 0 },
      { label: "Partially - some visibility, some manual", value: 4 },
      { label: "No - we rely on check-ins and asking around", value: 8 },
    ],
  },
  {
    id: 13,
    section: "Math & Control",
    sectionNumber: 4,
    question:
      "Do you use offshore bookkeepers or accountants? How confident are you in the actual ROI when you factor in QA time?",
    subtext:
      "Offshore labor looks like savings on paper. But if your senior staff spends 10+ hours a week fixing, reformatting, and quality-checking that work, the discount disappears.",
    type: "radio",
    options: [
      { label: "We don't use offshore help", value: 0 },
      { label: "We do, and the ROI is clearly positive", value: 1 },
      { label: "We do, but I'm not sure of the true ROI", value: 6 },
      { label: "We do, and the QA time is a real concern", value: 9 },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// SCORING & EASY FIXES
// ═══════════════════════════════════════════════════════════════════════════════

const BLENDED_RATE_LOW = 35;
const BLENDED_RATE_HIGH = 55;
const WEEKS_PER_YEAR = 52;

const EASY_FIXES: Record<string, string[]> = {
  "Document Chase": [
    "Create 3 email templates for document requests with specific deadlines - stop writing the same request from scratch every time",
    "Set up one shared folder or client portal where clients upload directly, eliminating the 'check 4 inboxes' problem",
    "Build a simple 'missing documents' tracker (even a spreadsheet) that shows who owes what and when - so nothing falls through the cracks",
  ],
  "Data Handoffs": [
    "Map your top 3 copy-paste workflows and check if your tools already have built-in integrations you're not using",
    "Create a required-fields checklist for each engagement type - catch missing data before work starts, not during review",
    "Pick your single worst manual data transfer and automate it with Zapier, Make, or a built-in connector this week",
  ],
  "Staff Behavior Signals": [
    "Have your 'go-to person' document the top 5 things only they know how to do - start reducing key-person risk today",
    "Pick one team-built workaround spreadsheet and convert it into an official, documented process",
    "Track one week of your senior staff's tasks - identify the low-value work eating their time and reassign or eliminate it",
  ],
  "Math & Control": [
    "Set up a simple Kanban board (even a whiteboard) showing where every active engagement sits right now",
    "Add a 'days since last activity' flag to your work tracker - idle returns become visible immediately",
    "Run a 2-week time audit: have each person log what they actually do in 30-minute blocks - the results will surprise you",
  ],
};

const RECOMMENDATIONS: Record<string, Record<string, string>> = {
  "Document Chase": {
    low: "Your document workflows look solid. The quick wins below can still shave a few hours off each week.",
    moderate:
      "You're losing meaningful time to document chasing. Automated reminders and a client portal would reclaim 3–5 hours per week.",
    high: "Document chasing is a significant drain on your team. Automated request workflows and deadline tracking should be your next investment.",
    critical:
      "This is your biggest leak. Your team is spending more time chasing documents than doing actual work on them. A document automation system could reclaim 10+ hours per week.",
  },
  "Data Handoffs": {
    low: "Your systems are well-integrated. The quick wins below are minor optimizations worth considering.",
    moderate:
      "Manual data movement is creating both time loss and error risk. Connecting your key systems would save 2–4 hours per week and reduce rework.",
    high: "Significant time is lost to re-entry and the error correction that follows. System integration would eliminate most of this and improve accuracy.",
    critical:
      "Your data handoffs are costing you heavily in both time and accuracy. Every manual transfer is a chance for error and a drain on your best people's time.",
  },
  "Staff Behavior Signals": {
    low: "Your team is well-structured with good process distribution. The quick wins below can strengthen what's already working.",
    moderate:
      "Process gaps are being covered by individual heroics instead of systems. Documenting and formalizing workarounds will make your team more resilient.",
    high: "Your team is compensating for systemic issues. Key-person dependencies and workarounds are creating risk - if someone leaves, things will break.",
    critical:
      "You have significant key-person risk and your best people are doing the wrong work. This threatens both retention and your ability to scale.",
  },
  "Math & Control": {
    low: "You have good visibility and control over your workflows. The quick wins below can sharpen your edge.",
    moderate:
      "Some blind spots exist in how work moves through your firm. A workflow dashboard would give you the visibility to catch problems before they cost hours.",
    high: "You're operating with limited visibility into actual workflow status. Real-time tracking would help you catch delays before they compound.",
    critical:
      "You have very little visibility into how work actually moves through your firm. Without this, every other improvement is a guess. Fix this first.",
  },
};

function calculateResults(answers: QuizAnswers): QuizResults {
  const sectionMap: Record<
    string,
    { questions: QuizQuestion[]; maxPoints: number }
  > = {};

  for (const q of questions) {
    if (!sectionMap[q.section]) {
      sectionMap[q.section] = { questions: [], maxPoints: 0 };
    }
    sectionMap[q.section].questions.push(q);
    if (q.type === "radio") {
      const maxOpt = Math.max(...(q.options?.map((o) => o.value) ?? [0]));
      sectionMap[q.section].maxPoints += maxOpt;
    } else if (q.type === "slider") {
      sectionMap[q.section].maxPoints += q.max ?? 10;
    }
  }

  let totalScore = 0;
  let maxScore = 0;

  const rawSections = Object.entries(sectionMap).map(
    ([name, { questions: qs, maxPoints }]) => {
      let sectionScore = 0;
      for (const q of qs) {
        const ans = answers[q.id] ?? 0;
        sectionScore += ans;
      }
      totalScore += sectionScore;
      maxScore += maxPoints;

      const pct = maxPoints > 0 ? sectionScore / maxPoints : 0;
      let severity: "low" | "moderate" | "high" | "critical" = "low";
      if (pct > 0.7) severity = "critical";
      else if (pct > 0.45) severity = "high";
      else if (pct > 0.2) severity = "moderate";

      return {
        name,
        score: sectionScore,
        maxScore: maxPoints,
        pct,
        severity,
        recommendation: RECOMMENDATIONS[name]?.[severity] ?? "",
        easyFixes: EASY_FIXES[name] ?? [],
      };
    }
  );

  // Sort by score percentage descending → assign priority ranks
  const sorted = [...rawSections].sort((a, b) => b.pct - a.pct);
  const sections: SectionResult[] = sorted.map((sec, i) => ({
    name: sec.name,
    score: sec.score,
    maxScore: sec.maxScore,
    severity: sec.severity,
    recommendation: sec.recommendation,
    priority: i + 1,
    easyFixes: sec.easyFixes,
  }));

  const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

  // Estimate waste hours from quantitative answers
  const docChaseHours = answers[1] ?? 5;
  const dataReentryHours =
    answers[4] !== undefined
      ? [0, 2, 5, 8][Math.min(Math.floor(answers[4] / 3), 3)]
      : 4;
  const copyPasteHours =
    answers[5] !== undefined
      ? [0, 2, 5, 10][Math.min(Math.floor(answers[5] / 3), 3)]
      : 3;
  const idleDaysImpact = (answers[10] ?? 3) * 1.5;
  const adminOverhead = 5 + (answers[8] ?? 3) * 0.5;

  const wasteHoursLow = Math.round(
    docChaseHours * 0.8 + dataReentryHours * 0.7 + copyPasteHours * 0.5 + idleDaysImpact * 0.5 + adminOverhead * 0.6
  );
  const wasteHoursHigh = Math.round(
    docChaseHours * 1.2 + dataReentryHours + copyPasteHours + idleDaysImpact + adminOverhead
  );

  return {
    totalScore,
    maxScore,
    percentage,
    wasteHoursLow: Math.max(wasteHoursLow, 5),
    wasteHoursHigh: Math.max(wasteHoursHigh, wasteHoursLow + 5),
    dollarLow: wasteHoursLow * BLENDED_RATE_LOW * WEEKS_PER_YEAR,
    dollarHigh: wasteHoursHigh * BLENDED_RATE_HIGH * WEEKS_PER_YEAR,
    sections,
  };
}

function severityColor(s: string) {
  switch (s) {
    case "low":
      return "text-green-600 bg-green-50";
    case "moderate":
      return "text-amber-600 bg-amber-50";
    case "high":
      return "text-orange-600 bg-orange-50";
    case "critical":
      return "text-red-600 bg-red-50";
    default:
      return "text-muted-foreground bg-muted";
  }
}

function priorityColor(p: number) {
  switch (p) {
    case 1:
      return "bg-red-100 text-red-700";
    case 2:
      return "bg-orange-100 text-orange-700";
    case 3:
      return "bg-amber-100 text-amber-700";
    default:
      return "bg-green-100 text-green-700";
  }
}

function formatDollars(n: number) {
  return "$" + Math.round(n / 1000) + "K";
}

// ═══════════════════════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

type Phase = "intro" | "quiz" | "email" | "results";

const Diagnostic = () => {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [results, setResults] = useState<QuizResults | null>(null);

  const q = questions[currentQ];
  const progress = ((currentQ + 1) / questions.length) * 100;

  const setAnswer = useCallback(
    (value: number) => {
      setAnswers((prev) => ({ ...prev, [q.id]: value }));
    },
    [q?.id]
  );

  const goNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((p) => p + 1);
    } else {
      // Last question - compute results and show email capture
      setResults(calculateResults(answers));
      setPhase("email");
    }
  };

  const goPrev = () => {
    if (currentQ > 0) setCurrentQ((p) => p - 1);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!firstName.trim() || !email.trim()) {
      setSubmitError("Please fill in both fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error: fnError } = await supabase.functions.invoke(
        "diagnostic-submit",
        {
          body: {
            first_name: firstName.trim(),
            email: email.trim(),
            quiz_answers: answers,
            quiz_results: results,
          },
        }
      );

      if (fnError) throw fnError;
      if (!data?.success)
        throw new Error(data?.error || "Something went wrong");

      setPhase("results");
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Allow "skip to results" - they can still see results but won't get the email
  const skipToResults = () => {
    setPhase("results");
  };

  return (
    <div className="min-h-screen bg-background" data-sf-fixed="headings entities">
      <SEO
        title="Free Firm Owner Diagnostic | Find $50,000 in Hidden Hours | SmartFirm.io"
        description="Take the free 13-question Firm Owner Diagnostic and uncover where your accounting firm is losing 20–40 hours and up to $106,000 per year in hidden admin waste."
        pageType="default"
        noindex={false}
        dateModified={new Date().toISOString()}
        organizationType="ProfessionalService"
        showContactInfo={true}
        showAddress={true}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Firm Owner Diagnostic", url: "/diagnostic/" },
        ]}
        faqs={[
          {
            question: "What is the Firm Owner Diagnostic?",
            answer:
              "It is a free 13-question interactive assessment that surfaces hidden time and money leaks inside accounting firms. You get a personalized waste score and dollar estimate in under 10 minutes.",
          },
          {
            question: "Who is this diagnostic for?",
            answer:
              "Owners and managing partners of accounting, CPA, bookkeeping, and tax preparation firms with 5–25 staff who suspect they are losing billable hours to manual admin work.",
          },
          {
            question: "What happens after I complete it?",
            answer:
              "You see your results immediately: a waste score, estimated annual dollar impact, and section-by-section recommendations. We also email you a summary and a printable PDF version to share with your team.",
          },
          {
            question: "What happens after I see my results?",
            answer:
              "You can book a free 15-minute results review with Katie to discuss your scores and decide if a deeper audit makes sense. We offer three tiers: a Single Workflow Audit ($3,500) for one process, a Whole-Firm Efficiency Audit ($12,500) covering everything, or a Full Audit plus Growth Strategy ($15,000).",
          },
        ]}
      />

      <Header />

      {/* Breadcrumb */}
      <nav
        id="sf-breadcrumbs"
        className="bg-background-light border-b"
        aria-label="Breadcrumb"
      >
        <div className="container mx-auto px-4 lg:px-6 py-1.5">
          <Breadcrumb>
            <BreadcrumbList className="text-sm text-muted-foreground">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Firm Owner Diagnostic</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>

      <main>
        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* INTRO                                                            */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        {phase === "intro" && (
          <>
            <section className="bg-gradient-mesh-professional py-section">
              <div className="container mx-auto px-6 max-w-container-lg text-center">
                <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
                  Free - Takes About 5 Minutes
                </Badge>

                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                  The 13 Questions That Expose{" "}
                  <span className="text-bright-cyan">$50,000</span> in Wasted
                  Hours Inside Your Firm
                </h1>

                <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-text-md mx-auto">
                  Answer 13 targeted questions about your firm's workflows and
                  get an instant estimate of how many hours and dollars you're
                  losing to hidden inefficiencies every year.
                </p>

                <Button
                  size="lg"
                  className="text-lg py-7 px-10 group"
                  onClick={() => setPhase("quiz")}
                >
                  Start the Diagnostic
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-white/80 text-sm mt-4">
                  No sign-up required to start. We'll ask for your email at the
                  end to send you a personalized results summary.
                </p>
              </div>
            </section>

            {/* What you'll learn */}
            <section className="py-section bg-background-light">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-text-md mx-auto">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                    You don't have an effort problem. You have a visibility problem.
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Your team is working hard, but time is leaking out in the
                    small, invisible gaps of daily operations. This diagnostic
                    finds them.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-md max-w-container-2xl mx-auto">
                  {[
                    {
                      icon: FileText,
                      title: "Document Chase",
                      hours: "10–15 hrs/week",
                      desc: "Staff chasing, re-requesting, and downloading client documents across email, portals, and shared drives.",
                    },
                    {
                      icon: AlertTriangle,
                      title: "Data Re-entry & Errors",
                      hours: "8–12 hrs/week",
                      desc: "Manual copy-paste between systems, duplicate data entry, and the rework that follows.",
                    },
                    {
                      icon: TrendingDown,
                      title: "Invisible Admin Overhead",
                      hours: "5–10 hrs/week",
                      desc: "Status check-ins, workaround maintenance, offshore QA reviews, and daily friction.",
                    },
                  ].map((cat, i) => (
                    <div
                      key={i}
                      className="bg-background rounded-xl p-8 elevation-1"
                    >
                      <div className="w-12 h-12 mb-5 bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg flex items-center justify-center">
                        <cat.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-heading font-bold text-primary mb-1">
                        {cat.title}
                      </h3>
                      <div className="text-2xl font-heading font-bold text-accent mb-4">
                        {cat.hours}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-16 text-center">
                  <Button
                    size="lg"
                    className="text-lg py-7 px-10 group"
                    onClick={() => setPhase("quiz")}
                  >
                    Start the Diagnostic
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* QUIZ                                                             */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        {phase === "quiz" && q && (
          <section className="py-12 md:py-20 bg-background min-h-[70vh]">
            <div className="container mx-auto px-6 max-w-container-lg">
              {/* Progress */}
              <div className="mb-10">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span className="font-medium text-primary">
                    Section {q.sectionNumber}: {q.section}
                  </span>
                  <span>
                    Question {currentQ + 1} of {questions.length}
                  </span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-teal rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="max-w-text-md mx-auto">
                <div className="flex items-start gap-5 mb-8">
                  <span className="text-5xl font-heading font-bold text-primary/20 leading-none select-none">
                    {String(q.id).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-xl md:text-2xl font-heading font-bold text-primary leading-snug mb-3">
                      {q.question}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {q.subtext}
                    </p>
                  </div>
                </div>

                {/* Answer input */}
                <div className="mb-12">
                  {q.type === "slider" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {q.min} {q.unit}
                        </span>
                        <span className="text-3xl font-heading font-bold text-primary">
                          {answers[q.id] ?? q.defaultValue ?? q.min}{" "}
                          <span className="text-base font-normal text-muted-foreground">
                            {q.unit}
                          </span>
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {q.max}+ {q.unit}
                        </span>
                      </div>
                      <input
                        type="range"
                        min={q.min}
                        max={q.max}
                        step={q.step}
                        value={answers[q.id] ?? q.defaultValue ?? q.min}
                        onChange={(e) => setAnswer(Number(e.target.value))}
                        className="w-full h-3 bg-muted rounded-full appearance-none cursor-pointer
                          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6
                          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-md
                          [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white
                          [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full
                          [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white
                          [&::-moz-range-thumb]:cursor-pointer"
                      />
                    </div>
                  )}

                  {q.type === "radio" && q.options && (
                    <div className="space-y-3">
                      {q.options.map((opt, i) => {
                        const selected = answers[q.id] === opt.value;
                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setAnswer(opt.value)}
                            className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200
                              ${
                                selected
                                  ? "border-primary bg-primary/5 shadow-sm"
                                  : "border-muted hover:border-primary/30 hover:bg-muted/50"
                              }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors
                                  ${
                                    selected
                                      ? "border-primary bg-primary"
                                      : "border-muted-foreground/30"
                                  }`}
                              >
                                {selected && (
                                  <div className="w-2 h-2 rounded-full bg-white" />
                                )}
                              </div>
                              <span
                                className={`text-sm ${
                                  selected
                                    ? "text-primary font-medium"
                                    : "text-foreground"
                                }`}
                              >
                                {opt.label}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    onClick={goPrev}
                    disabled={currentQ === 0}
                    className="gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>

                  <Button
                    onClick={goNext}
                    disabled={answers[q.id] === undefined}
                    className="gap-2 group"
                  >
                    {currentQ < questions.length - 1 ? "Next" : "See My Results"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* EMAIL CAPTURE                                                    */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        {phase === "email" && results && (
          <section className="py-12 md:py-20 bg-background min-h-[70vh]">
            <div className="container mx-auto px-6 max-w-container-sm">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-teal/10 rounded-full flex items-center justify-center">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-3">
                    Your results are ready.
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Enter your name and email to see your personalized waste
                    score. We'll also send you a summary with the{" "}
                    <strong>printable PDF version</strong> of these 13 questions
                    to share with your team for more accurate answers.
                  </p>
                </div>

                {/* Teaser */}
                <div className="bg-gradient-to-br from-primary to-ocean-blue rounded-xl p-6 text-white text-center mb-8">
                  <p className="text-sm text-white/70 uppercase tracking-wide font-medium mb-1">
                    Your estimated annual waste
                  </p>
                  <div className="text-4xl font-heading font-bold text-bright-cyan">
                    {formatDollars(results.dollarLow)} –{" "}
                    {formatDollars(results.dollarHigh)}
                  </div>
                  <p className="text-sm text-white/70 mt-2">
                    Enter your email below to see the full breakdown and
                    recommendations.
                  </p>
                </div>

                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div>
                    <Label
                      htmlFor="diag-first-name"
                      className="text-sm font-medium text-primary"
                    >
                      First Name
                    </Label>
                    <Input
                      id="diag-first-name"
                      type="text"
                      placeholder="Katie"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      autoComplete="given-name"
                      className="mt-1"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="diag-email"
                      className="text-sm font-medium text-primary"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="diag-email"
                      type="email"
                      placeholder="katie@yourfirm.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      className="mt-1"
                      disabled={isSubmitting}
                    />
                  </div>

                  {submitError && (
                    <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2">
                      {submitError}
                    </p>
                  )}

                  <Button
                    type="submit"
                    className="w-full text-base py-6 group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        See My Full Results
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  No spam. No sales calls unless you ask for one. Unsubscribe
                  anytime.
                </p>

                <button
                  type="button"
                  onClick={skipToResults}
                  className="block mx-auto mt-3 text-xs text-muted-foreground underline hover:no-underline"
                >
                  Skip - just show me the results
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* RESULTS                                                          */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        {phase === "results" && results && (
          <>
            {/* Hero score */}
            <section className="bg-gradient-mesh-professional py-section">
              <div className="container mx-auto px-6 max-w-container-lg text-center">
                <Badge className="mb-6 bg-white/20 text-white border-white/30">
                  Your Diagnostic Results
                </Badge>

                <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 leading-tight">
                  Your Firm Is Losing an Estimated
                </h1>
                <div className="text-5xl md:text-6xl font-heading font-bold text-bright-cyan mb-2">
                  {formatDollars(results.dollarLow)} –{" "}
                  {formatDollars(results.dollarHigh)}/year
                </div>
                <p className="text-white/80 text-lg mb-2">
                  That's roughly{" "}
                  <strong className="text-white">
                    {results.wasteHoursLow}–{results.wasteHoursHigh} hours per
                    week
                  </strong>{" "}
                  in hidden inefficiencies.
                </p>
                <p className="text-white/80 text-sm max-w-md mx-auto">
                  Based on your answers across {questions.length} diagnostic
                  questions, scored against industry benchmarks for firms with
                  8-15 staff.
                </p>

                {/* Overall score bar */}
                <div className="mt-10 max-w-sm mx-auto">
                  <div className="flex justify-between text-sm text-white/70 mb-1">
                    <span>Waste Score</span>
                    <span>
                      {results.totalScore} / {results.maxScore}
                    </span>
                  </div>
                  <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${results.percentage}%`,
                        background:
                          results.percentage > 60
                            ? "#ef4444"
                            : results.percentage > 35
                            ? "#f59e0b"
                            : "#22c55e",
                      }}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Priority-ranked section breakdown */}
            <section className="py-section bg-background">
              <div className="container mx-auto px-6 max-w-container-lg">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-3 text-center">
                  Your Priority Breakdown
                </h2>
                <p className="text-muted-foreground text-center mb-10 max-w-text-md mx-auto">
                  Sections are ranked by impact - start with #1 for the fastest
                  ROI.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-16">
                  {results.sections.map((sec) => (
                    <div
                      key={sec.name}
                      className="bg-background rounded-xl p-6 elevation-1"
                    >
                      {/* Header row */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span
                          className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${priorityColor(
                            sec.priority
                          )}`}
                        >
                          #{sec.priority}
                        </span>
                        <h3 className="font-heading font-bold text-primary text-lg">
                          {sec.name}
                        </h3>
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide ${severityColor(
                            sec.severity
                          )}`}
                        >
                          {sec.severity}
                        </span>
                        <span className="ml-auto text-2xl font-heading font-bold text-primary">
                          {sec.score}
                          <span className="text-base text-muted-foreground font-normal">
                            /{sec.maxScore}
                          </span>
                        </span>
                      </div>

                      {/* Score bar */}
                      <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden mb-4">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${
                              sec.maxScore > 0
                                ? (sec.score / sec.maxScore) * 100
                                : 0
                            }%`,
                            background:
                              sec.severity === "critical"
                                ? "#ef4444"
                                : sec.severity === "high"
                                ? "#f97316"
                                : sec.severity === "moderate"
                                ? "#f59e0b"
                                : "#22c55e",
                          }}
                        />
                      </div>

                      {/* Recommendation */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                        {sec.recommendation}
                      </p>

                      {/* Easy fixes */}
                      <div className="bg-background-light rounded-lg p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <Lightbulb className="w-4 h-4 text-amber-500" />
                          <span className="text-sm font-semibold text-primary">
                            3 Quick Wins You Can Start This Week
                          </span>
                        </div>
                        <ul className="space-y-2.5">
                          {sec.easyFixes.map((fix, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                            >
                              <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                              <span>{fix}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Share with team CTA */}
                <div className="bg-background-light rounded-2xl p-8 md:p-10 text-center elevation-1">
                  <Download className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-bold text-primary mb-3">
                    Share These Questions with Your Team
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-text-md mx-auto">
                    Your answers give a great starting point, but the most
                    accurate picture comes from the people doing the work every
                    day. Download the printable PDF and walk through the 13
                    questions with your team.
                  </p>
                  <Button asChild variant="outline" className="gap-2">
                    <a
                      href="/smartfirm-owner-diagnostic.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-4 h-4" />
                      Download Printable PDF
                    </a>
                  </Button>
                </div>
              </div>
            </section>

            {/* CTA: Free Results Review + Audit Tiers */}
            <section className="py-section bg-gradient-to-br from-primary to-ocean-blue">
              <div className="container mx-auto px-6 text-center max-w-container-lg">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                  Want to Know Exactly Where to Start?
                </h2>
                <p className="text-lg text-white/80 mb-8 max-w-text-md mx-auto">
                  Book a free 15-minute results review with Katie. She'll walk
                  through your scores, answer your questions, and help you
                  decide if a deeper audit makes sense for your firm.
                </p>

                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-base py-6 px-8 group"
                  asChild
                >
                  <a href="/get-started-accounting-firm-automation">
                    <Phone className="mr-2 w-5 h-5" />
                    Book a Free 15-Minute Results Review
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <p className="text-white/70 text-sm mt-4 mb-12">
                  No sales pitch. No obligation. Just a conversation about what
                  your scores mean.
                </p>

                {/* Audit tier spectrum */}
                <div className="border-t border-white/20 pt-10">
                  <p className="text-white/80 text-sm uppercase tracking-wide font-medium mb-6">
                    If You Want to Go Deeper
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                      <div className="text-bright-cyan font-heading font-bold text-lg mb-1">
                        $3,500
                      </div>
                      <div className="text-white font-semibold text-sm mb-2">
                        Single Workflow Audit
                      </div>
                      <p className="text-white/80 text-xs leading-relaxed">
                        Deep dive into <strong className="text-white/80">one</strong>{" "}
                        workflow (e.g., month-end close, tax prep, or client
                        onboarding). Includes process map, cost analysis, and
                        90-day action plan for that workflow.
                      </p>
                    </div>
                    <div className="bg-white/[0.15] backdrop-blur-sm rounded-xl p-5 ring-1 ring-bright-cyan/30">
                      <div className="text-bright-cyan font-heading font-bold text-lg mb-1">
                        $12,500
                      </div>
                      <div className="text-white font-semibold text-sm mb-2">
                        Whole-Firm Efficiency Audit
                      </div>
                      <p className="text-white/80 text-xs leading-relaxed">
                        Every workflow, every handoff, every bottleneck:
                        mapped, measured, and prioritized. Walk away with a
                        complete transformation roadmap.
                      </p>
                      <span className="inline-block mt-2 text-[10px] font-semibold text-bright-cyan bg-bright-cyan/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Most Popular
                      </span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                      <div className="text-bright-cyan font-heading font-bold text-lg mb-1">
                        $15,000
                      </div>
                      <div className="text-white font-semibold text-sm mb-2">
                        Full Audit + Growth Strategy
                      </div>
                      <p className="text-white/80 text-xs leading-relaxed">
                        Everything in the Whole-Firm Audit plus marketing &
                        client acquisition strategy. Operations and growth,
                        handled together.
                      </p>
                    </div>
                  </div>
                  <p className="text-white/70 text-xs mt-6">
                    Not sure which level? That's exactly what the free results
                    review is for.
                  </p>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Diagnostic;
