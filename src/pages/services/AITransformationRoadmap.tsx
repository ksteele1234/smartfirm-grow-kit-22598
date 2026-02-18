import { useRef, useState, useEffect } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Target, TrendingUp, Users } from "lucide-react";
import { StandardCard } from "@/components/ui/standard-card";
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage
} from "@/components/ui/breadcrumb";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import FaqAnswer from "@/components/faq/FaqAnswer";

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

const AITransformationRoadmap = () => {
  const finalCtaRef = useRef<HTMLElement | null>(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFallback(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const faqs = [
    {
      question: "What is the investment for the AI Transformation Roadmap?",
      answer: "Starting at $7,500. Small business engagements available. Enterprise pricing upon consultation.",
      category: "Pricing & ROI"
    },
    {
      question: "How long does the engagement take?",
      answer: "The AI Transformation Roadmap is a comprehensive 2-4 week engagement, with weekly deliverables and checkpoints throughout the process.",
      category: "Implementation"
    },
    {
      question: "What happens after I receive my roadmap?",
      answer: "We become your ongoing transformation partner. You can choose to implement initiatives yourself, work with us on implementation, or take a hybrid approach. We provide continued guidance and support as needed.",
      category: "Support"
    },
    {
      question: "Do you work with firms of all sizes?",
      answer: "Yes. We offer small business engagements for emerging firms and scalable solutions for enterprise organizations. Pricing and scope are customized based on your firm's size and needs.",
      category: "General"
    },
    {
      question: "What if we're not ready to implement AI yet?",
      answer: "That's exactly why the roadmap exists. It helps you understand where AI creates value, what resources you'll need, and when to start. Many firms use the roadmap for internal planning and budget allocation before beginning implementation.",
      category: "General"
    }
  ];

  const weeks = [
    {
      title: "WEEK 1: Discovery",
      description: "We interview key stakeholders and map your core business processes to identify bottlenecks, inefficiencies, and opportunities.",
      details: [
        "Interview key stakeholders",
        "Map core business processes",
        "Identify bottlenecks and inefficiencies",
        "Document pain points and opportunities",
        "Assess team capabilities and readiness"
      ]
    },
    {
      title: "WEEK 2: Opportunity Analysis",
      description: "We create a database of AI solutions tailored to your operations, filtering for technical feasibility and business impact.",
      details: [
        "Create database of AI solutions",
        "Filter by technical feasibility",
        "Evaluate business impact potential",
        "Match solutions to specific processes",
        "Prioritize by difficulty and value"
      ]
    },
    {
      title: "WEEK 3: Validation",
      description: "We work with your team to validate solutions, ensuring recommendations align with on-the-ground reality.",
      details: [
        "Work directly with your team",
        "Validate solution feasibility",
        "Ensure alignment with reality",
        "Get stakeholder buy-in",
        "Finalize priority initiatives"
      ]
    },
    {
      title: "WEEK 4: Strategic Roadmap Delivery",
      description: "You receive a 12-month implementation plan connecting quick wins with long-term transformation goals.",
      details: [
        "Detailed Process Maps — Visual documentation of your current workflows",
        "Opportunity Matrix — High-ROI initiatives ranked by impact and difficulty",
        "12-Month Roadmap — Phased implementation plan with timelines and resources",
        "ROI Projections — Clear cost/benefit analysis for each initiative",
        "Executive Presentation — Slide deck ready to share with leadership"
      ]
    }
  ];

  const outcomes = [
    {
      title: "Clarity",
      description: "Know exactly where AI creates value in your business",
      icon: Target
    },
    {
      title: "Confidence",
      description: "Move forward with validated, feasible solutions",
      icon: CheckCircle
    },
    {
      title: "Competitive Advantage",
      description: "Implement strategic AI before your competition",
      icon: TrendingUp
    },
    {
      title: "Partnership",
      description: "We become your ongoing transformation partner, not just a vendor",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        pageType="service"
        serviceName="AI Transformation Roadmap"
        audience="accounting firms"
        title="AI Transformation Roadmap for CPA Firms | SmartFirm.io"
        description="AI transformation roadmap for accounting firms — a clear 12-month plan to automate workflows and improve efficiency with SmartFirm.io."
        canonicalUrl="https://smartfirm.io/services/ai-transformation-roadmap-for-accounting-firms/"
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services/" },
          { name: "AI Transformation Roadmap", url: "/services/ai-transformation-roadmap-for-accounting-firms/" }
        ]}
        faqs={faqs}
      />
      <Header />

      <main id="main-content" role="main">
        {/* Hero Section */}
        <section className="hero-section relative pt-24 pb-32 min-h-[unset] px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-muted-blue">
          {/* Breadcrumbs */}
          <nav className="absolute top-0 left-0 right-0 pt-4 z-20" aria-label="Breadcrumb">
            <div className="max-w-container-3xl mx-auto px-4">
              <Breadcrumb>
                <BreadcrumbList className="text-xs text-white/60">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="hover:text-white/80">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-white/40" />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/services/" className="hover:text-white/80">Services</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-white/40" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-white/60">AI Transformation Roadmap</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </nav>

          <div className="hero-container max-w-container-3xl mx-auto relative flex items-center justify-center min-h-[unset] pt-1">
            <div className="hero-content relative z-10 text-center max-w-container-lg px-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                AI Transformation Roadmap for Accounting Firms
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-lg md:text-xl text-white/90 leading-relaxed mb-8"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                AI transformation roadmap for accounting firms — get a clear 12-month plan to automate workflows and improve efficiency with SmartFirm.io's AI consulting.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <Button
                  id="ai-roadmap-pricing-book-call-btn"
                  size="lg"
                  className="px-8 py-4 md:px-8 md:py-4 text-lg font-bold bg-gradient-coral text-white rounded-xl glow-coral hover-lift"
                  asChild
                >
                  <a href="/get-started-accounting-firm-automation/">
                    Book a Free Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-[80px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" className="fill-background" />
            </svg>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-[60px] md:py-[80px] lg:py-[100px] bg-background px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary" style={{ fontFamily: "'Poppins', sans-serif" }}>
                See How It Works
              </h2>
              <p className="text-lg text-muted-foreground mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Watch this short overview to understand our AI transformation process
              </p>
              <div className="relative w-full max-w-3xl mx-auto">
                <div className="relative w-full pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                    src="https://www.youtube-nocookie.com/embed/3g9-hLt4kyU?rel=0&modestbranding=1&playsinline=1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="AI Transformation Roadmap Overview"
                    onLoad={() => setShowFallback(false)}
                  />
                </div>
                {showFallback && (
                  <div className="flex justify-center mt-3">
                    <Button variant="secondary" size="sm" asChild>
                      <a href="https://youtu.be/3g9-hLt4kyU" target="_blank" rel="noopener noreferrer">
                        Watch on YouTube
                        <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="pt-[40px] md:pt-[60px] lg:pt-[80px] pb-[60px] md:pb-[80px] lg:pb-[100px] bg-background-light px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold mb-6 text-primary leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              The Challenge You're Facing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-lg text-foreground leading-relaxed mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Your competitors are implementing AI. Your team is overwhelmed by tools and possibilities. Everyone's asking "where do we start?" — but no one has a clear answer.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-xl font-semibold text-secondary"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              You don't need another tool. You need a strategic plan.
            </motion.p>
          </div>
        </section>

        {/* What Is Section */}
        <section className="pt-[40px] md:pt-[60px] lg:pt-[80px] pb-[60px] md:pb-[80px] lg:pb-[100px] bg-white px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold mb-6 text-primary leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              What Is an AI Transformation Roadmap?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-lg text-foreground leading-relaxed mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              A comprehensive 2-4 week engagement that maps your business processes, identifies high-impact AI opportunities, and delivers a prioritized implementation plan with clear ROI projections.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-xl font-semibold text-secondary"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              This isn't theory. It's a practical roadmap built for your business.
            </motion.p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="pt-[40px] md:pt-[60px] lg:pt-[80px] pb-[60px] md:pb-[80px] lg:pb-[100px] bg-gradient-deep-teal px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
                className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                How It Works
              </motion.h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-md">
              {weeks.map((week, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: isMobile ? 0.4 : 0.6,
                    delay: isMobile ? Math.min(index * 0.1, 0.3) : index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <StandardCard
                    title={week.title}
                    description={week.description}
                    variant={index === 3 ? "featured" : "default"}
                  >
                    <div className="mt-4">
                      <ul className="space-y-2">
                        {week.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span className="text-sm text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </StandardCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Receive Section */}
        <section className="pt-[40px] md:pt-[60px] lg:pt-[80px] pb-[60px] md:pb-[80px] lg:pb-[100px] bg-background-light px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold mb-8 text-primary leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              What You Receive
            </motion.h2>

            <div className="space-y-4">
              {[
                "Detailed Process Maps — Visual documentation of your current workflows",
                "Opportunity Matrix — High-ROI initiatives ranked by impact and difficulty",
                "12-Month Roadmap — Phased implementation plan prioritized to meet your needs & goals, with timelines and resource requirements",
                "ROI Projections — Clear cost/benefit analysis for each initiative",
                "Executive Presentation — Slide deck ready to share with leadership and stakeholders",
                "Next Steps Strategy & Advisory Meeting"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: isMobile ? 0.35 : 0.5,
                    delay: isMobile ? Math.min(index * 0.08, 0.32) : index * 0.1,
                    ease: "easeOut"
                  }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-foreground leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Outcome Section */}
        <section className="pt-[40px] md:pt-[60px] lg:pt-[80px] pb-[60px] md:pb-[80px] lg:pb-[100px] bg-gradient-deep-teal px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
                className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                The Outcome
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-md">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: isMobile ? 0.4 : 0.6,
                    delay: isMobile ? Math.min(index * 0.1, 0.3) : index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <StandardCard
                    icon={outcome.icon}
                    title={outcome.title}
                    description={outcome.description}
                    variant={index === 1 ? "featured" : "default"}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pt-[40px] md:pt-[60px] lg:pt-[80px] pb-[60px] md:pb-[80px] lg:pb-[100px] bg-background-light px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold mb-8 text-primary leading-tight text-center"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Investment & Pricing
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, delay: 0.1, ease: "easeOut" }}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-2 border-primary/10"
            >
              <div className="text-center mb-6">
                <p className="text-lg text-muted-foreground mb-3">Standard Investment</p>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-5xl md:text-6xl font-bold text-primary">$9,999</span>
                </div>
                <p className="text-base text-muted-foreground mb-6">Comprehensive 2-4 week engagement with full roadmap delivery</p>
              </div>

              <div className="bg-gradient-to-br from-coral/10 to-gold/10 rounded-xl p-6 border-2 border-coral/20">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-coral" />
                  <span className="text-xl font-bold text-secondary">PASBA Member Exclusive</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-3xl text-muted-foreground line-through">$9,999</span>
                    <span className="text-5xl font-bold text-coral">$7,500</span>
                  </div>
                  <p className="text-base text-foreground font-semibold">Available through November 30th</p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">Small business engagements and enterprise pricing available upon consultation</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="pt-[40px] md:pt-[60px] lg:pt-[40px] pb-[60px] md:pb-[80px] lg:pb-[100px] bg-white px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-32 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"
            />

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.details
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: isMobile ? 0.35 : 0.5,
                    delay: isMobile ? Math.min(index * 0.08, 0.32) : index * 0.08,
                    ease: "easeOut"
                  }}
                  className="group border border-border rounded-xl bg-white px-5 py-4 elevation-1"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-primary flex items-center justify-between gap-4">
                    <span>{faq.question}</span>
                    <ArrowRight className="h-4 w-4 text-accent transition-transform group-open:rotate-90" aria-hidden="true" />
                  </summary>
                  <div
                    className="text-foreground mt-3 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <FaqAnswer
                      text={faq.answer}
                      paragraphClassName="text-foreground leading-relaxed"
                    />
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          id="sf-final-cta"
          ref={finalCtaRef}
          className="relative py-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden bg-gradient-muted-blue"
        >
          <div className="max-w-4xl mx-auto text-center pb-8 md:pb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Ready to Stop Guessing and Start Implementing?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Button
                id="ai-roadmap-final-book-call-btn"
                size="lg"
                variant="coral"
                className="px-8 py-4 text-lg font-bold color-transition group"
                asChild
              >
                <a href="/get-started-accounting-firm-automation/">
                  Book a Free Call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AITransformationRoadmap;
