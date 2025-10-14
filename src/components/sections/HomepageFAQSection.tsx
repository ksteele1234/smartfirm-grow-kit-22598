import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomepageFAQSection = () => {
  const faqs = [
    {
      question: "How is this different from other marketing agencies?",
      answer: "We only work with accounting firms: no restaurants, dentists, or tech startups. Our founder is a CPA who understands busy season, utilization rates, and the difference between $500 tax clients and $5K advisory retainers. We don't offer generic 'brand awareness' tactics. We build marketing infrastructure: websites that convert, Google profiles that rank, review systems that build trust, and dashboards that prove ROI. This is foundational work most agencies skip because it's not flashy, but it's what drives consistent growth."
    },
    {
      question: "How much time will my team need to invest?",
      answer: "During the initial 30-day setup, expect to invest 4-6 hours total across a few strategy sessions where we nail down your positioning, ideal clients, and messaging. We handle all the technical execution: website build, GBP optimization, system integrations. After launch, your team invests approximately 2 hours per month for performance reviews and content approval. Everything else runs on autopilot."
    },
    {
      question: "What kind of clients will we attract?",
      answer: "We target CFO-level decision makers and business owners looking for $5K-$15K advisory relationships, not $500 tax-only clients. Our strategies position you as a trusted advisor through thought leadership content, strategic SEO targeting high-value services, and referral partner programs with attorneys and financial advisors. We focus on quality over quantity because one $10K advisory client is worth more than twenty $500 tax returns."
    },
    {
      question: "We've tried marketing before and got mixed results. Why will this work?",
      answer: "Most DIY marketing fails because firms lack the infrastructure. Random LinkedIn posts don't work without a website that converts visitors. Google ads waste money if your Business Profile isn't optimized. Email campaigns flop without proper tracking. We build the foundation first (website, local SEO, review systems, analytics) then layer on tactics. Plus, you get monthly performance reports showing exactly what's working and what's not. No more guessing."
    },
    {
      question: "How quickly will we see results?",
      answer: "The first thing we set up is your analytics and tracking (if you don't have them already), so you can see improvements from day 1. Your website and Google Business Profile optimization are complete within 14 days. The full Quick Start Package, including review systems, email automation, and tracking dashboards, is live within 30 days. You'll start seeing improved Google rankings within 60 days and consistent lead flow within 90 days as the systems compound. This isn't a quick fix. It's a foundation that drives growth for years."
    },
    {
      question: "How do you prove what's working?",
      answer: "You get a real-time dashboard tracking website traffic, lead sources, Google rankings, review count, and cost-per-lead. Monthly reports show exactly where leads came from (Google search, referrals, direct traffic) and which marketing activities drove results. No vague 'brand awareness' metrics, just clear numbers tied to revenue. If something isn't working, we adjust it. If it's working, we double down."
    },
    {
      question: "What's the total investment?",
      answer: "The Quick Start Package is $6,999 one-time setup (early adopter pricing, regular $9,999) plus $999/month for ongoing management, optimization, and support. This includes everything: website, Google Business Profile, review system, email automation, performance tracking, and monthly reports. Add-ons like blog content, social media, and paid advertising are available separately. No hidden fees. Cancel anytime after the initial 30-day setup. No long-term contracts."
    },
    {
      question: "Can we cancel if it's not working?",
      answer: "Absolutely. After the initial 30-day setup period, you can cancel anytime with 30 days notice. We don't lock you into long-term contracts because we earn your business every month by delivering results. Most firms stay because the marketing infrastructure continues driving leads while they focus on billable work, but the choice is always yours."
    },
    {
      question: "Do you understand the accounting industry?",
      answer: "Yes. SmartFirm was founded by a CPA and a business turnaround specialist with 20+ years of experience. We've lived the reality of accounting firms: tax season chaos, managing utilization and realization rates, the challenge of shifting from compliance work to high-value advisory services. We speak your language and understand that compliance deadlines don't pause for marketing initiatives. That's why our systems are designed to run with minimal time investment from your team."
    },
    {
      question: "What if we're in busy season?",
      answer: "We work around your schedule. If you're slammed during tax season (January-April), we can delay the setup start date or spread strategy sessions across several weeks. The technical work happens on our end regardless of your availability. Once systems are live, they run 24/7 whether you're buried in extensions or enjoying a slower summer. The whole point is that marketing doesn't stop when you're busy. It works while you work."
    },
    {
      question: "What happens after the 30-day setup?",
      answer: "Your marketing infrastructure continues working on autopilot. We handle ongoing technical optimization: monitoring Google rankings, managing review responses, maintaining system integrations, and tracking performance. You receive monthly reports showing what's working and where we're focusing efforts. The email sequences and automations you set up during onboarding continue running. If you want to add ongoing content creation like blog posts, social media, or newsletters, those are available as add-ons. You stay focused on serving clients. We keep your marketing infrastructure running smoothly."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-[900px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-bold text-[#334260] mb-4">
            Questions? We Have Answers.
          </h2>
          <p className="text-[18px] lg:text-[20px] font-normal text-[#666666] leading-relaxed max-w-[800px] mx-auto">
            Everything you need to know about building your marketing foundation with SmartFirm
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border border-gray-200 rounded-lg px-6 bg-white"
            >
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-[#4D869C] flex-shrink-0" />
                  <span className="text-[20px] lg:text-[22px] font-bold text-[#334260] leading-snug">
                    {faq.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4">
                <p className="text-[16px] lg:text-[17px] font-normal text-[#333333] leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-[#F8F9FA] border-2 border-[#4D869C] rounded-xl p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-[#4D869C]/10 rounded-full flex items-center justify-center mx-auto mb-5">
            <MessageSquare className="h-12 w-12 text-[#4D869C]" />
          </div>
          
          <h3 className="text-2xl font-bold text-[#334260] mb-3">
            Still Have Questions?
          </h3>
          
          <p className="text-[17px] font-normal text-[#333333] leading-relaxed mb-6 max-w-[600px] mx-auto">
            Book a free 30-minute strategy call. We'll answer your questions and help you determine if the Quick Start Package is right for your firm.
          </p>
          
          <Button
            asChild
            className="bg-[#4D869C] hover:bg-[#405D5D] text-white text-lg font-bold py-4 px-8 rounded-lg shadow-[0_4px_12px_rgba(77,134,156,0.25)] hover:-translate-y-0.5 transition-all"
          >
            <Link to="/get-started">
              Book Your Free Strategy Call →
            </Link>
          </Button>
          
          <p className="text-sm text-[#666666] mt-3">
            No pitch. No pressure. Just honest answers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomepageFAQSection;
