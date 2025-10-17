import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeInUpVariants } from '@/lib/animationVariants';

const HomepageFAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const heading = useScrollAnimation();

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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
    <section className="pt-2.5 pb-2.5 md:pt-5 md:pb-5 bg-white overflow-hidden wave-bottom">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          ref={heading.ref}
          initial="hidden"
          animate={heading.isInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0a2e2e] mb-4">
            Questions? We Have Answers.
          </h2>
          <p className="text-lg text-[#334155] max-w-3xl mx-auto">
            Everything you need to know about building your marketing foundation with SmartFirm
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-[800px] mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            const delay = Math.min(index * 0.05, 0.2);
            
            return (
              <motion.div
                key={index}
                initial="hidden"
                animate={heading.isInView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                transition={{ delay }}
                className="bg-white border border-[#e2e8f0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow duration-200"
              >
                {/* Question (Clickable) */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer group"
                >
                  <span className="text-lg font-semibold text-[#243b55] group-hover:text-[#14b8a6] transition-colors duration-200">
                    {faq.question}
                  </span>
                  
                  {/* Chevron Icon */}
                  <ChevronDown 
                    className={`w-5 h-5 text-[#14b8a6] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer (Expandable) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-base text-[#1e293b] leading-[1.7]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HomepageFAQSection;
