export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  info?: string;
  questions: FAQItem[];
}

const normalizePath = (path: string = "") =>
  path.endsWith("/") && path !== "/" ? path.replace(/\/+$/, "") : path;

export const faqCategories: FAQCategory[] = [
  {
    category: "Solutions",
    questions: [
      {
        question: "How do I know which solution is right for my accounting firm?",
        answer: "Start by identifying your biggest challenge: if you're losing clients, focus on retention; if you're working too many hours, focus on automation and efficiency; if you're not getting enough leads, focus on marketing and visibility. Most firms see the best results by addressing their most pressing pain point first, then expanding to other solutions as systems stabilize."
      },
      {
        question: "Can I combine multiple solutions, or do I need to pick just one?",
        answer: "You can absolutely combine multiple solutions, and most successful firms do. Our QuickStart plan is designed to integrate multiple solutions seamlessly, with all systems working together through platforms like High Level CRM and Google Analytics to create a comprehensive growth strategy."
      },
      {
        question: "What's the difference between your solutions and traditional marketing agencies?",
        answer: "We specialize exclusively in accounting firms, so we understand your compliance requirements, seasonal challenges, and client acquisition costs better than general agencies. Our solutions combine marketing with practice management automation, delivering both new clients and operational efficiency rather than just leads."
      },
      {
        question: "How quickly can I expect to see results from implementing a solution?",
        answer: "Most firms see initial improvements within 30-60 days of implementation, with your new or updated website launching within 14 days and basic QuickStart systems operational within 30 days. According to Thomson Reuters' 2025 research (https://tax.thomsonreuters.com/blog/beyond-tax-season-creating-revenue-stability-year-round/), firms embracing automation saw an average revenue increase of 21.3% and profit increase of 25% within their first year."
      },
      {
        question: "Do you work with firms of all sizes, or is there a minimum?",
        answer: "We work with accounting firms of all sizes, from solo practitioners to firms with 50+ employees. Our QuickStart plan is specifically designed to scale with your firm, with flexible month-to-month pricing and no long-term contracts required."
      }
    ]
  },
  {
    category: "Industries",
    questions: [
      {
        question: "Why does industry specialization matter for accounting firm marketing?",
        answer: "Industry specialization allows you to speak directly to your ideal clients' specific pain points and demonstrate deep expertise in their unique challenges, which commands premium pricing and builds faster trust. Professional services firms with clear specialization (https://explodingtopics.com/blog/customer-retention-rates) achieve 84% client retention rates compared to 60-70% for generalist small firms."
      },
      {
        question: "What if my firm serves multiple industries - can you still help?",
        answer: "Yes, we can help you market to multiple industries by creating targeted messaging and content for each vertical while maintaining a cohesive brand. The key is to have dedicated landing pages and marketing materials for each industry rather than generic \"we serve everyone\" messaging."
      },
      {
        question: "How is marketing different for tax prep vs. bookkeeping vs. advisory?",
        answer: "Tax prep marketing focuses on seasonal campaigns and year-round service expansion; bookkeeping marketing emphasizes recurring revenue and small business relationships; advisory marketing requires thought leadership content and premium positioning. Each requires different timing, messaging, and conversion strategies to attract the right clients."
      },
      {
        question: "Do you have experience with firms in my specific industry?",
        answer: "We specialize exclusively in accounting, tax, bookkeeping, and business advisory firms, giving us deep expertise in your industry's unique marketing challenges, compliance requirements, and client acquisition strategies. Our tools and systems are built specifically for accounting professionals, not adapted from other industries."
      },
      {
        question: "Can I switch industries or add new specializations later?",
        answer: "Absolutely - our systems are designed to grow and evolve with your firm. As you add new service lines or target new industries, we can create additional landing pages, content, and campaigns to support your expansion without disrupting your existing marketing."
      }
    ]
  },
  {
    category: "Client Retention",
    questions: [
      {
        question: "What's a good client retention rate for an accounting firm?",
        answer: "Top-performing accounting firms achieve 90-96% client retention rates (https://www.cpajournal.com/2024/01/23/state-of-the-profession-3/), while the industry average ranges from 60-70% for small firms to 75-85% for larger firms. Even a 5% improvement in retention can significantly increase profitability, as acquiring new clients costs significantly more (https://futurefirm.co/accounting-client-retention-strategies-growing-firms/) than retaining existing ones."
      },
      {
        question: "What are the most common reasons accounting firms lose clients?",
        answer: "Poor communication and lack of proactive service are the leading causes of client churn, followed by pricing concerns and clients feeling undervalued. Research shows (https://futurefirm.co/accounting-client-retention-strategies-growing-firms/) that firms with systematic communication processes, regular check-ins, and automated touchpoints retain clients at much higher rates than those relying on ad-hoc interactions."
      },
      {
        question: "How does automation help with client retention?",
        answer: "Automation ensures consistent communication through scheduled touchpoints, newsletters, and satisfaction surveys that never get forgotten during busy seasons. Our High Level CRM system tracks client interactions, automates follow-ups, and identifies at-risk clients before they leave, allowing you to maintain relationships without manual effort."
      },
      {
        question: "Can client retention strategies work for firms with seasonal clients (like tax preparation)?",
        answer: "Yes, retention strategies are especially critical for seasonal firms - the key is maintaining year-round communication and offering complementary services during off-season months. Tax firms that develop year-round revenue streams (https://tax.thomsonreuters.com/blog/beyond-tax-season-creating-revenue-stability-year-round/) through bookkeeping, planning, or advisory services see more stable revenue and higher client lifetime value."
      }
    ]
  },
  {
    category: "Scale Firm",
    questions: [
      {
        question: "What's the biggest mistake accounting firms make when trying to scale?",
        answer: "The biggest mistake is trying to scale by simply working more hours or hiring more people without first systematizing and automating core processes. Research from Caseware (https://www.caseware.com/us/resources/blog/scaling-without-burnout-how-automation-helps-firms-handle-growing-demands/) shows that firms using automation can expand capacity without scaling headcount, while those relying on manual processes hit capacity limits and experience team burnout."
      },
      {
        question: "How can I scale my firm without hiring more staff?",
        answer: "Automation is the key - by automating client onboarding, communication, data entry, and reporting, you can handle significantly more clients with your existing team. One audit firm reduced transaction testing time by 50%+ and cut financial statement reviews from 4-5 hours to just 10 minutes (https://www.caseware.com/us/resources/blog/scaling-without-burnout-how-automation-helps-firms-handle-growing-demands/) using automation tools, allowing them to take on more clients without adding staff."
      },
      {
        question: "At what point should an accounting firm start thinking about scaling?",
        answer: "Start thinking about scaling when you're consistently at 80%+ capacity, turning away good clients, or your team is working excessive hours during peak seasons. The best time to implement scaling systems is before you desperately need them, as building infrastructure during a crisis leads to poor decisions and rushed implementations."
      },
      {
        question: "What systems need to be in place before I can scale successfully?",
        answer: "You need standardized client onboarding, automated communication workflows, documented processes for common tasks, and practice management software that tracks capacity and performance. Our QuickStart plan includes High Level CRM, Google Business Profile optimization, and automated marketing systems that create the foundation for sustainable scaling."
      }
    ]
  },
  {
    category: "Work Less Earn More",
    questions: [
      {
        question: "Is it really possible to work less and earn more as a CPA?",
        answer: "Yes, by shifting from hourly billing to value-based pricing and automating routine tasks, many CPAs increase revenue while reducing hours. Firms implementing automation (https://www.caseware.com/us/resources/blog/scaling-without-burnout-how-automation-helps-firms-handle-growing-demands/) report 50%+ time savings on routine tasks, freeing up capacity for higher-value advisory services that command premium rates."
      },
      {
        question: "What types of tasks can be automated in an accounting firm?",
        answer: "Client onboarding, appointment scheduling, email follow-ups, invoice reminders, review requests, social media posting, and routine reporting can all be automated. Our High Level CRM platform handles these tasks 24/7, allowing you to focus on client relationships and strategic work that actually requires your expertise."
      },
      {
        question: "How do I transition to value-based pricing from hourly billing?",
        answer: "Start by packaging your services into fixed-fee offerings based on client outcomes rather than hours worked, then communicate the value and results clients receive. This transition typically happens gradually, starting with new clients or new service offerings, and allows you to increase revenue without increasing hours."
      },
      {
        question: "Won't automation make my services feel less personal to clients?",
        answer: "Actually, automation enables more personalization by ensuring timely, consistent communication and freeing you to focus on high-touch interactions that matter most. Clients appreciate prompt responses, regular updates, and proactive outreach - all of which automation makes possible without requiring you to manually manage every touchpoint."
      }
    ]
  },
  {
    category: "Retention Strategies",
    questions: [
      {
        question: "What's the ROI of investing in client retention vs. new client acquisition?",
        answer: "Client retention delivers significantly higher ROI because acquiring new clients costs 5-25x more than retaining existing ones (https://futurefirm.co/accounting-client-retention-strategies-growing-firms/), and existing clients are more likely to purchase additional services. Top accounting firms achieve 90-96% retention rates (https://www.cpajournal.com/2024/01/23/state-of-the-profession-3/), creating predictable revenue and reducing the constant pressure to find new clients."
      },
      {
        question: "How often should I be communicating with clients to improve retention?",
        answer: "Best practices include monthly newsletters, quarterly check-ins, and annual strategic reviews, with additional touchpoints during tax season or relevant deadlines. Our automated systems ensure these communications happen consistently without manual effort, maintaining top-of-mind awareness year-round."
      },
      {
        question: "What role does technology play in modern retention strategies?",
        answer: "Technology enables consistent communication at scale, tracks client satisfaction in real-time, identifies at-risk clients before they leave, and automates upselling opportunities. Our High Level CRM integrates email marketing, SMS, client portals, and satisfaction tracking to create a comprehensive retention system that works 24/7."
      },
      {
        question: "How do I measure the success of my retention efforts?",
        answer: "Track your annual client retention rate, client lifetime value, revenue from existing clients vs. new clients, and satisfaction survey scores. Industry benchmarks show (https://www.vintti.com/blog/us-accounting-firms-a-study-on-client-retention-and-financial-health) small firms average 60-70% retention while top performers achieve 90%+, so measuring your progress against these standards helps identify improvement opportunities."
      }
    ]
  },
  {
    category: "Stop Losing Clients to Tech-Savvy CPAs",
    questions: [
      {
        question: "What technology do I need to compete with tech-savvy CPA firms?",
        answer: "At minimum, you need a professional website with SEO optimization, a CRM system for client management, automated communication tools, and a client portal for document sharing. Our QuickStart plan includes High Level CRM, Google Business Profile optimization, Google Analytics, and website development to give you a modern tech stack without overwhelming complexity."
      },
      {
        question: "How much does it cost to modernize my accounting firm's technology?",
        answer: "Our QuickStart plan includes a one-time setup fee and a monthly subscription with no long-term contract, making modernization affordable and risk-free. The investment typically pays for itself quickly - firms adopting automation see average revenue increases of 21.3% and profit increases of 25% (https://tax.thomsonreuters.com/blog/beyond-tax-season-creating-revenue-stability-year-round/) within the first year."
      },
      {
        question: "Will my existing clients care if I adopt new technology?",
        answer: "Yes, they'll appreciate it - modern clients expect professional systems, fast responses, and convenient communication options. Upgrading your technology demonstrates that you're keeping pace with industry changes and investing in better service delivery, which builds confidence and trust."
      },
      {
        question: "How long does it take to implement modern systems in my practice?",
        answer: "Our QuickStart plan delivers a new or updated website within 14 days and has basic automation systems operational within 30 days. Full implementation and optimization typically takes 60-90 days as we customize workflows to your specific practice needs and train your team on the new systems."
      }
    ]
  },
  {
    category: "Get More Referrals Without Asking",
    questions: [
      {
        question: "Why is asking for referrals uncomfortable, and how can I avoid it?",
        answer: "Most CPAs feel uncomfortable asking for referrals because it feels pushy or sales-oriented, which conflicts with their professional identity. Instead of asking, create systems that naturally generate referrals through exceptional service, automated review requests, and content that makes you easy to recommend."
      },
      {
        question: "What's the conversion rate for referrals vs. other marketing channels?",
        answer: "Referrals convert at 25.56% (https://focus-digital.co/average-sales-call-conversion-rate-by-industry/), making them the strongest acquisition channel, and deliver 3-5x higher conversion rates (https://blog.propellocloud.com/referral-marketing-statistics) than other marketing methods. 76% of CPAs identify word-of-mouth as their most important marketing technique (https://www.cpajournal.com/2025/04/28/digital-marketing-resources-for-cpas/), and 88% of consumers trust recommendations from people they know (https://www.investopedia.com/terms/w/word-of-mouth-marketing.asp) more than any other source."
      },
      {
        question: "How do automated referral systems work without being pushy?",
        answer: "Automated systems identify your happiest clients through satisfaction tracking, then create natural opportunities for them to share their experience through review requests, social proof, and shareable content. The system works in the background by maintaining top-of-mind awareness and making it easy for satisfied clients to recommend you when opportunities arise organically."
      },
      {
        question: "How long does it take to build a referral generation system?",
        answer: "Basic referral systems can be implemented within 30-60 days, including review generation automation, client satisfaction tracking, and referral-worthy content creation. One accounting firm reported that referral activity accounted for 40% of their total wins (https://accountingmarketing.org/business-development-leveraging-referral-tracking-to-elevate-your-client-experience/) after implementing systematic referral tracking and nurturing."
      }
    ]
  },
  {
    category: "Grow Without Growing Pains",
    questions: [
      {
        question: "What are \"growing pains\" and how do I know if my firm is experiencing them?",
        answer: "Growing pains include quality control issues, overwhelmed staff, missed deadlines, client complaints, and systems breaking down under increased volume. If you're turning away good clients because you lack capacity, working excessive hours, or experiencing more errors and rework, these are clear signs of growing pains."
      },
      {
        question: "How can I grow my firm without sacrificing quality or burning out my team?",
        answer: "Build scalable systems before you need them - standardize processes, implement automation for routine tasks, and create quality control checkpoints that work regardless of volume. Firms using automation (https://www.caseware.com/us/resources/blog/scaling-without-burnout-how-automation-helps-firms-handle-growing-demands/) can expand capacity without scaling headcount by eliminating repetitive work and freeing staff for higher-value tasks."
      },
      {
        question: "What's the difference between growth and scaling?",
        answer: "Growth means increasing revenue by adding more resources (people, hours, expenses), while scaling means increasing revenue without proportionally increasing costs. Scaling is more profitable because you're leveraging technology and systems rather than just trading more time for more money."
      },
      {
        question: "How do I know when my firm is ready to grow?",
        answer: "Your firm is ready to grow when you have documented processes, consistent service delivery, strong client retention (85%+), and some automation in place. Growing before these foundations are solid typically leads to chaos, quality issues, and team burnout rather than sustainable expansion."
      }
    ]
  },
  {
    category: "Protect Practice and Future",
    questions: [
      {
        question: "What are the biggest threats to accounting firms today?",
        answer: "The biggest threats include cybersecurity breaches (which can destroy client trust and create liability), technology disruption from AI and automation, regulatory changes, and competition from tech-enabled firms. Firms that proactively adopt modern technology (https://tax.thomsonreuters.com/blog/beyond-tax-season-creating-revenue-stability-year-round/) are better positioned to handle these threats and turn them into competitive advantages."
      },
      {
        question: "Do I really need cybersecurity if I'm a small firm?",
        answer: "Yes - small firms are increasingly targeted by cybercriminals because they often have weaker security than larger firms while still holding valuable client data. A single data breach can destroy your reputation, create legal liability, and violate client confidentiality, making cybersecurity essential regardless of firm size."
      },
      {
        question: "How do I future-proof my practice against AI and automation?",
        answer: "Embrace AI and automation as tools that enhance your services rather than threats to avoid - use them to handle routine tasks while you focus on advisory services that require human judgment and relationship skills. Firms adopting AI-enabled technology (https://tax.thomsonreuters.com/blog/beyond-tax-season-creating-revenue-stability-year-round/) saw 21.3% revenue increases and 25% profit increases by shifting from compliance work to higher-value strategic services."
      },
      {
        question: "What should be included in a business continuity plan for CPAs?",
        answer: "A solid business continuity plan includes data backup and recovery systems, cloud-based access to critical files, documented processes for key tasks, communication protocols for emergencies, and cybersecurity measures. Our QuickStart plan includes cloud-based systems and automated backups to ensure your practice can continue operating even during disruptions."
      }
    ]
  },
  {
    category: "Tax Preparation",
    questions: [
      {
        question: "How can I generate revenue outside of tax season?",
        answer: "Expand into year-round services like bookkeeping, payroll, tax planning, and business advisory that complement your tax preparation expertise. Thomson Reuters research shows (https://tax.thomsonreuters.com/blog/beyond-tax-season-creating-revenue-stability-year-round/) that firms developing year-round revenue streams reduce stress, improve income stability, and achieve higher profitability than those relying solely on seasonal tax work."
      },
      {
        question: "When should I start marketing for the upcoming tax season?",
        answer: "Begin marketing 3-4 months before tax season (October-November) to capture early planners, with peak campaigns running December-February. However, the most successful tax firms market year-round by offering tax planning, quarterly services, and educational content that keeps them top-of-mind even during off-season months."
      },
      {
        question: "How do I compete with TurboTax and other DIY tax software?",
        answer: "Position your value as personalized expertise, tax planning (not just preparation), audit protection, and year-round support that software can't provide. Focus on attracting clients with complex situations, business income, or multiple income sources who need professional guidance rather than competing on price with DIY solutions."
      },
      {
        question: "What marketing strategies work best for attracting tax clients?",
        answer: "Local SEO and Google Business Profile optimization are critical since most people search \"tax preparer near me,\" combined with review generation to build trust. 76% of CPAs identify word-of-mouth (https://www.cpajournal.com/2025/04/28/digital-marketing-resources-for-cpas/) as their most important marketing technique, making referral systems and client satisfaction essential for sustainable growth."
      }
    ]
  },
  {
    category: "Bookkeeping Services",
    questions: [
      {
        question: "How do I differentiate my bookkeeping services from low-cost competitors?",
        answer: "Position yourself as a strategic financial partner who provides insights and business guidance, not just data entry. Emphasize your expertise in specific industries, your proactive communication, and the true cost of bookkeeping errors that cheap providers often make."
      },
      {
        question: "What's the best way to attract small business clients for bookkeeping?",
        answer: "Focus on local SEO, Google Business Profile optimization, and industry-specific content that demonstrates expertise in your target clients' challenges. Partner with complementary service providers (business attorneys, financial advisors, commercial lenders) who can refer clients needing ongoing bookkeeping support."
      },
      {
        question: "How can I build predictable recurring revenue with bookkeeping services?",
        answer: "Package your bookkeeping services as fixed monthly fees rather than hourly billing, which creates predictable income for both you and your clients. Bookkeeping firms with strong recurring revenue models (https://www.thesuccessfulbookkeeper.com/episodes/43) can be valued at $2 for every dollar of recurring revenue, making this approach both profitable and valuable for eventual exit."
      },
      {
        question: "Should I focus on a specific industry niche for my bookkeeping practice?",
        answer: "Yes - industry specialization allows you to develop deep expertise, create industry-specific processes and templates, and command premium pricing. Firms with clear specialization achieve 84% client retention rates (https://explodingtopics.com/blog/customer-retention-rates) compared to 60-70% for generalist small firms, and can market more effectively by speaking directly to specific pain points."
      }
    ]
  },
  {
    category: "Business Advisory",
    questions: [
      {
        question: "How do I position myself as a business advisor, not just an accountant?",
        answer: "Create thought leadership content (articles, videos, webinars) that demonstrates strategic thinking beyond numbers, and shift conversations from compliance to business outcomes. Focus on business growth, profitability improvement, and strategic planning rather than just tax returns and financial statements."
      },
      {
        question: "What's the typical pricing for business advisory services?",
        answer: "Advisory services typically command premium pricing ranging from $200-500+ per hour or $2,000-10,000+ for project-based engagements, depending on firm expertise and client size. Value-based pricing (based on client outcomes rather than hours) often generates even higher fees for transformational advisory work."
      },
      {
        question: "How long does it take to establish thought leadership in my market?",
        answer: "Building recognized thought leadership typically takes 6-12 months of consistent content creation, speaking opportunities, and strategic networking. The key is consistency - regular blog posts, LinkedIn activity, local speaking engagements, and participation in industry associations that demonstrate expertise over time."
      },
      {
        question: "What content should I create to attract advisory clients?",
        answer: "Create content that addresses business challenges your ideal clients face: cash flow management, growth strategies, profitability improvement, succession planning, and strategic decision-making. Case studies showing measurable business outcomes are particularly effective, as they demonstrate the ROI of advisory services and build credibility."
      }
    ]
  },
  {
    category: "Tools & Calculators",
    questions: [
      {
        question: "How do these tools help my accounting firm grow?",
        answer: "Our free tools provide data-driven insights into your firm's efficiency, marketing ROI, and growth potential, helping you identify specific opportunities for improvement and make informed decisions about where to invest your time and resources. Each assessment delivers personalized recommendations based on your responses and industry benchmarks."
      },
      {
        question: "Are these assessments really free?",
        answer: "Yes, all our assessment tools are completely free with no obligation. We designed them to help accounting firms identify opportunities for improvement and demonstrate the value of systematic approaches to marketing, efficiency, and growth."
      },
      {
        question: "How long do the assessments take?",
        answer: "Most assessments take between 2-5 minutes to complete and provide instant results with personalized recommendations. The time investment is minimal compared to the actionable insights you'll receive about your firm's performance."
      },
      {
        question: "What happens after I complete an assessment?",
        answer: "You'll receive immediate results with actionable recommendations specific to your firm's situation. Optionally, you can Book a Free Call to discuss your results and explore how SmartFirm can help implement the improvements identified in your assessment."
      }
    ]
  }
];

export const homepageFaqs: FAQItem[] = [
  {
    question: "How do I know which solution is right for my accounting firm?",
    answer: "Start by identifying your biggest challenge: if you're losing clients, focus on retention; if you're working too many hours, focus on automation and efficiency; if you're not getting enough leads, focus on marketing and visibility. Most firms see the best results by addressing their most pressing pain point first, then expanding to other solutions as systems stabilize."
  },
  {
    question: "How quickly can I expect to see results from implementing a solution?",
    answer: "Most firms see initial improvements within 30-60 days of implementation, with your new or updated website launching within 14 days and basic QuickStart systems operational within 30 days. According to Thomson Reuters' 2025 research (https://tax.thomsonreuters.com/blog/beyond-tax-season-creating-revenue-stability-year-round/), firms embracing automation saw an average revenue increase of 21.3% and profit increase of 25% within their first year."
  },
  {
    question: "Why does industry specialization matter for accounting firm marketing?",
    answer: "Industry specialization allows you to speak directly to your ideal clients' specific pain points and demonstrate deep expertise in their unique challenges, which commands premium pricing and builds faster trust. Professional services firms with clear specialization (https://explodingtopics.com/blog/customer-retention-rates) achieve 84% client retention rates compared to 60-70% for generalist small firms."
  },
  {
    question: "What's the ROI of investing in client retention vs. new client acquisition?",
    answer: "Client retention delivers significantly higher ROI because acquiring new clients costs 5-25x more than retaining existing ones (https://futurefirm.co/accounting-client-retention-strategies-growing-firms/), and existing clients are more likely to purchase additional services. Top accounting firms achieve 90-96% retention rates (https://www.cpajournal.com/2024/01/23/state-of-the-profession-3/), creating predictable revenue and reducing the constant pressure to find new clients."
  },
  {
    question: "Will my existing clients care if I adopt new technology?",
    answer: "Yes, they'll appreciate it - modern clients expect professional systems, fast responses, and convenient communication options. Upgrading your technology demonstrates that you're keeping pace with industry changes and investing in better service delivery, which builds confidence and trust."
  },
  {
    question: "What's the conversion rate for referrals vs. other marketing channels?",
    answer: "Referrals convert at 25.56% (https://focus-digital.co/average-sales-call-conversion-rate-by-industry/), making them the strongest acquisition channel, and deliver 3-5x higher conversion rates (https://blog.propellocloud.com/referral-marketing-statistics) than other marketing methods. 76% of CPAs identify word-of-mouth as their most important marketing technique (https://www.cpajournal.com/2025/04/28/digital-marketing-resources-for-cpas/), and 88% of consumers trust recommendations from people they know (https://www.investopedia.com/terms/w/word-of-mouth-marketing.asp) more than any other source."
  },
  {
    question: "What are the biggest threats to accounting firms today?",
    answer: "The biggest threats include cybersecurity breaches (which can destroy client trust and create liability), technology disruption from AI and automation, regulatory changes, and competition from tech-enabled firms. Firms that proactively adopt modern technology (https://tax.thomsonreuters.com/blog/beyond-tax-season-creating-revenue-stability-year-round/) are better positioned to handle these threats and turn them into competitive advantages."
  },
  {
    question: "How do I compete with TurboTax and other DIY tax software?",
    answer: "Position your value as personalized expertise, tax planning (not just preparation), audit protection, and year-round support that software can't provide. Focus on attracting clients with complex situations, business income, or multiple income sources who need professional guidance rather than competing on price with DIY solutions."
  }
];

const pathToCategoryMap = new Map<string, string>([
  ["/solutions-expert-marketing-agency-for-accounting-firms", "Solutions"],
  ["/industries-expert-marketing-agency-for-accountants", "Industries"],
  ["/solutions/client-retention", "Client Retention"],
  ["/solutions/scale-firm", "Scale Firm"],
  ["/solutions/work-less-earn-more", "Work Less Earn More"],
  ["/solutions/retention-strategies", "Retention Strategies"],
  ["/solutions/stop-losing-clients-to-tech-savvy-cpas", "Stop Losing Clients to Tech-Savvy CPAs"],
  ["/solutions/get-more-referrals-without-asking", "Get More Referrals Without Asking"],
  ["/solutions/grow-without-growing-pains", "Grow Without Growing Pains"],
  ["/solutions/protect-practice-and-future", "Protect Practice and Future"],
  ["/industries/tax-preparation", "Tax Preparation"],
  ["/industries/bookkeeping-services", "Bookkeeping Services"],
  ["/industries/business-advisory", "Business Advisory"],
  ["/tools", "Tools & Calculators"]
]);

const categoryToQuestionsMap = new Map(
  faqCategories.map(category => [category.category, category.questions])
);

export const getFaqsForPath = (path: string): FAQItem[] => {
  const normalized = normalizePath(path);
  const categoryName = pathToCategoryMap.get(normalized);
  if (!categoryName) return [];
  return categoryToQuestionsMap.get(categoryName) ?? [];
};
