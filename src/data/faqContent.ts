export interface FAQItem {
  question: string;
  answer: string;
  slug: string;
}

export interface FAQCategory {
  category: string;
  slug: string;
  info?: string;
  questions: FAQItem[];
}

const normalizePath = (path: string = "") =>
  path.endsWith("/") && path !== "/" ? path.replace(/\/+$/, "") : path;

export const faqCategories: FAQCategory[] = [
  {
    category: "Getting Started with SmartFirm",
    slug: "getting-started",
    questions: [
      {
        question: "How do I know which SmartFirm solution is right for my accounting firm?",
        slug: "which-solution-right-for-accounting-firm",
        answer: "Start by identifying your biggest challenge: if you're losing clients, focus on our client retention and marketing solutions; if you're working too many hours, focus on workflow automation and efficiency tools; if you're not getting enough leads, focus on our marketing and visibility services. Most firms see the best results by addressing their most pressing pain point first, then expanding to other solutions as systems stabilize."
      },
      {
        question: "Can I combine marketing services with workflow automation, or do I need to pick just one?",
        slug: "combine-marketing-workflow-automation",
        answer: "You can absolutely combine both, and most successful firms do. Our QuickStart plan integrates marketing automation (lead generation, email campaigns, review requests) with workflow automation (client onboarding, document collection, task management) seamlessly. All systems work together through platforms like High Level CRM and your practice management software to create a comprehensive growth strategy."
      },
      {
        question: "What's the difference between SmartFirm and traditional marketing agencies?",
        slug: "difference-smartfirm-vs-traditional-agencies",
        answer: "We specialize exclusively in accounting firms, so we understand your compliance requirements, seasonal challenges, and client acquisition costs better than general agencies. More importantly, we combine marketing (SEO, content, lead gen) with workflow automation (onboarding, follow-ups, client communication) to deliver both new clients AND operational efficiency—not just leads that burden your already-stretched team."
      },
      {
        question: "How quickly can I expect to see results from implementing SmartFirm solutions?",
        slug: "how-quickly-see-results",
        answer: "Timeline depends on which solutions you implement: Marketing results (SEO, content) typically show within 60-90 days for local visibility and 4-6 months for competitive keywords. Workflow automation (onboarding, follow-ups) delivers immediate time savings—most firms save 10-15 hours per week starting week one. According to Thomson Reuters' 2025 research, firms embracing automation saw an average revenue increase of 21.3% and profit increase of 25% within their first year."
      },
      {
        question: "Do you work with accounting firms of all sizes, or is there a minimum?",
        slug: "firms-of-all-sizes-minimum",
        answer: "We work with accounting firms of all sizes, from solo practitioners to firms with 50+ employees. Our QuickStart plan is specifically designed to scale with your firm, with flexible month-to-month pricing and no long-term contracts required. Solo practitioners often start with marketing foundations; larger firms typically add workflow automation for their teams."
      },
      {
        question: "How do I get started with SmartFirm?",
        slug: "how-to-get-started",
        answer: "Book a Free Call to discuss your firm's specific needs and goals. We'll assess your current situation, identify the highest-impact opportunities, and recommend a tailored solution. There's no obligation—most firms find the consultation valuable even if they decide to wait."
      },
      {
        question: "What is the pricing structure?",
        slug: "pricing-structure",
        answer: "Pricing is customized based on your firm size and specific requirements. Our QuickStart plan includes a one-time setup fee and monthly subscription with no long-term contract. Add-on services are priced individually. Contact us for a detailed quote tailored to your needs."
      },
      {
        question: "Do you offer guarantees?",
        slug: "do-you-offer-guarantees",
        answer: "We stand behind our work with clear success metrics and ongoing support to ensure your satisfaction. We set specific KPIs for each engagement—whether that's lead volume, response times, or hours saved—and track progress monthly. If something isn't working, we adjust the approach."
      }
    ]
  },
  {
    category: "Industries We Serve",
    slug: "industries",
    questions: [
      {
        question: "Why does industry specialization matter for accounting firm marketing?",
        slug: "why-industry-specialization-matters",
        answer: "Industry specialization allows you to speak directly to your ideal clients' specific pain points and demonstrate deep expertise in their unique challenges, which commands premium pricing and builds faster trust. Professional services firms with clear specialization (https://explodingtopics.com/blog/customer-retention-rates) achieve 84% client retention rates compared to 60-70% for generalist small firms."
      },
      {
        question: "What if my firm serves multiple industries - can you still help?",
        slug: "firm-serves-multiple-industries",
        answer: "Yes, we can help you market to multiple industries by creating targeted messaging and content for each vertical while maintaining a cohesive brand. The key is to have dedicated landing pages and marketing materials for each industry rather than generic \"we serve everyone\" messaging."
      },
      {
        question: "How is marketing different for tax prep vs. bookkeeping vs. advisory?",
        slug: "marketing-different-tax-bookkeeping-advisory",
        answer: "Tax prep marketing focuses on seasonal campaigns and year-round service expansion; bookkeeping marketing emphasizes recurring revenue and small business relationships; advisory marketing requires thought leadership content and premium positioning. Each requires different timing, messaging, and conversion strategies to attract the right clients."
      },
      {
        question: "Do you have experience with firms in my specific industry?",
        slug: "experience-with-specific-industry",
        answer: "We specialize exclusively in accounting, tax, bookkeeping, and business advisory firms, giving us deep expertise in your industry's unique marketing challenges, compliance requirements, and client acquisition strategies. Our tools and systems are built specifically for accounting professionals, not adapted from other industries."
      },
      {
        question: "Can I switch industries or add new specializations later?",
        slug: "switch-industries-add-specializations",
        answer: "Absolutely - our systems are designed to grow and evolve with your firm. As you add new service lines or target new industries, we can create additional landing pages, content, and campaigns to support your expansion without disrupting your existing marketing."
      }
    ]
  },
  {
    category: "Client Retention",
    slug: "client-retention",
    questions: [
      {
        question: "What's a good client retention rate for an accounting firm?",
        slug: "good-client-retention-rate-accounting-firm",
        answer: "Top-performing accounting firms achieve 90-96% client retention rates (https://www.cpajournal.com/2024/01/23/state-of-the-profession-3/), while the industry average ranges from 60-70% for small firms to 75-85% for larger firms. Even a 5% improvement in retention can significantly increase profitability, as acquiring new clients costs significantly more (https://futurefirm.co/accounting-client-retention-strategies-growing-firms/) than retaining existing ones."
      },
      {
        question: "What are the most common reasons accounting firms lose clients?",
        slug: "common-reasons-accounting-firms-lose-clients",
        answer: "Poor communication and lack of proactive service are the leading causes of client churn, followed by pricing concerns and clients feeling undervalued. Research shows (https://futurefirm.co/accounting-client-retention-strategies-growing-firms/) that firms with systematic communication processes, regular check-ins, and automated touchpoints retain clients at much higher rates than those relying on ad-hoc interactions."
      },
      {
        question: "How does automation help with client retention?",
        slug: "automation-help-client-retention",
        answer: "Automation ensures consistent communication through scheduled touchpoints, newsletters, and satisfaction surveys that never get forgotten during busy seasons. Our High Level CRM system tracks client interactions, automates follow-ups, and identifies at-risk clients before they leave, allowing you to maintain relationships without manual effort."
      },
      {
        question: "Can client retention strategies work for firms with seasonal clients (like tax preparation)?",
        slug: "retention-strategies-seasonal-clients-tax",
        answer: "Yes, retention strategies are especially critical for seasonal firms - the key is maintaining year-round communication and offering complementary services during off-season months. Tax firms that develop year-round revenue streams (https://tax.thomsonreuters.com/blog/beyond-tax-season-creating-revenue-stability-year-round/) through bookkeeping, planning, or advisory services see more stable revenue and higher client lifetime value."
      },
      {
        question: "What's the ROI of investing in client retention vs. new client acquisition?",
        slug: "roi-client-retention-vs-acquisition",
        answer: "Client retention delivers significantly higher ROI because acquiring new clients costs 5-25x more than retaining existing ones (https://futurefirm.co/accounting-client-retention-strategies-growing-firms/), and existing clients are more likely to purchase additional services. Top accounting firms achieve 90-96% retention rates (https://www.cpajournal.com/2024/01/23/state-of-the-profession-3/), creating predictable revenue and reducing the constant pressure to find new clients."
      },
      {
        question: "How often should I be communicating with clients to improve retention?",
        slug: "how-often-communicate-clients-retention",
        answer: "Best practices include monthly newsletters, quarterly check-ins, and annual strategic reviews, with additional touchpoints during tax season or relevant deadlines. Our automated systems ensure these communications happen consistently without manual effort, maintaining top-of-mind awareness year-round."
      },
      {
        question: "What role does technology play in modern retention strategies?",
        slug: "technology-role-modern-retention-strategies",
        answer: "Technology enables consistent communication at scale, tracks client satisfaction in real-time, identifies at-risk clients before they leave, and automates upselling opportunities. Our High Level CRM integrates email marketing, SMS, client portals, and satisfaction tracking to create a comprehensive retention system that works 24/7."
      },
      {
        question: "How do I measure the success of my retention efforts?",
        slug: "measure-success-retention-efforts",
        answer: "Track your annual client retention rate, client lifetime value, revenue from existing clients vs. new clients, and satisfaction survey scores. Industry benchmarks show (https://www.vintti.com/blog/us-accounting-firms-a-study-on-client-retention-and-financial-health) small firms average 60-70% retention while top performers achieve 90%+, so measuring your progress against these standards helps identify improvement opportunities."
      }
    ]
  },
  {
    category: "Scaling Your Firm",
    slug: "scale-firm",
    questions: [
      {
        question: "What's the biggest mistake accounting firms make when trying to scale?",
        slug: "biggest-mistake-accounting-firms-scale",
        answer: "The biggest mistake is trying to scale by simply working more hours or hiring more people without first systematizing and automating core processes. Research from Caseware (https://www.caseware.com/us/resources/blog/scaling-without-burnout-how-automation-helps-firms-handle-growing-demands/) shows that firms using automation can expand capacity without scaling headcount, while those relying on manual processes hit capacity limits and experience team burnout."
      },
      {
        question: "How can I scale my firm without hiring more staff?",
        slug: "scale-firm-without-hiring-staff",
        answer: "Automation is the key - by automating client onboarding, communication, data entry, and reporting, you can handle significantly more clients with your existing team. One audit firm reduced transaction testing time by 50%+ and cut financial statement reviews from 4-5 hours to just 10 minutes (https://www.caseware.com/us/resources/blog/scaling-without-burnout-how-automation-helps-firms-handle-growing-demands/) using automation tools, allowing them to take on more clients without adding staff."
      },
      {
        question: "At what point should an accounting firm start thinking about scaling?",
        slug: "when-accounting-firm-start-scaling",
        answer: "Start thinking about scaling when you're consistently at 80%+ capacity, turning away good clients, or your team is working excessive hours during peak seasons. The best time to implement scaling systems is before you desperately need them, as building infrastructure during a crisis leads to poor decisions and rushed implementations."
      },
      {
        question: "What systems need to be in place before I can scale successfully?",
        slug: "systems-needed-scale-successfully",
        answer: "You need standardized client onboarding, automated communication workflows, documented processes for common tasks, and practice management software that tracks capacity and performance. Our QuickStart plan includes High Level CRM, Google Business Profile optimization, and automated marketing systems that create the foundation for sustainable scaling."
      },
      {
        question: "What are \"growing pains\" and how do I know if my firm is experiencing them?",
        slug: "what-are-growing-pains-firm",
        answer: "Growing pains include quality control issues, overwhelmed staff, missed deadlines, client complaints, and systems breaking down under increased volume. If you're turning away good clients because you lack capacity, working excessive hours, or experiencing more errors and rework, these are clear signs of growing pains."
      },
      {
        question: "How can I grow my firm without sacrificing quality or burning out my team?",
        slug: "grow-firm-without-sacrificing-quality-burnout",
        answer: "Build scalable systems before you need them - standardize processes, implement automation for routine tasks, and create quality control checkpoints that work regardless of volume. Firms using automation (https://www.caseware.com/us/resources/blog/scaling-without-burnout-how-automation-helps-firms-handle-growing-demands/) can expand capacity without scaling headcount by eliminating repetitive work and freeing staff for higher-value tasks."
      },
      {
        question: "What's the difference between growth and scaling?",
        slug: "difference-growth-vs-scaling",
        answer: "Growth means increasing revenue by adding more resources (people, hours, expenses), while scaling means increasing revenue without proportionally increasing costs. Scaling is more profitable because you're leveraging technology and systems rather than just trading more time for more money."
      },
      {
        question: "How do I know when my firm is ready to grow?",
        slug: "when-firm-ready-to-grow",
        answer: "Your firm is ready to grow when you have documented processes, consistent service delivery, strong client retention (85%+), and some automation in place. Growing before these foundations are solid typically leads to chaos, quality issues, and team burnout rather than sustainable expansion."
      }
    ]
  },
  {
    category: "Work Less, Earn More",
    slug: "work-less-earn-more",
    questions: [
      {
        question: "Is it really possible to work less and earn more as a CPA?",
        slug: "work-less-earn-more-cpa-possible",
        answer: "Yes, by shifting from hourly billing to value-based pricing and automating routine tasks, many CPAs increase revenue while reducing hours. Firms implementing automation (https://www.caseware.com/us/resources/blog/scaling-without-burnout-how-automation-helps-firms-handle-growing-demands/) report 50%+ time savings on routine tasks, freeing up capacity for higher-value advisory services that command premium rates."
      },
      {
        question: "What types of tasks can be automated in an accounting firm?",
        slug: "tasks-automated-accounting-firm",
        answer: "Client onboarding, appointment scheduling, email follow-ups, invoice reminders, review requests, social media posting, and routine reporting can all be automated. Our High Level CRM platform handles these tasks 24/7, allowing you to focus on client relationships and strategic work that actually requires your expertise."
      },
      {
        question: "How do I transition to value-based pricing from hourly billing?",
        slug: "transition-value-based-pricing-hourly",
        answer: "Start by packaging your services into fixed-fee offerings based on client outcomes rather than hours worked, then communicate the value and results clients receive. This transition typically happens gradually, starting with new clients or new service offerings, and allows you to increase revenue without increasing hours."
      },
      {
        question: "Won't automation make my services feel less personal to clients?",
        slug: "automation-less-personal-clients",
        answer: "Actually, automation enables more personalization by ensuring timely, consistent communication and freeing you to focus on high-touch interactions that matter most. Clients appreciate prompt responses, regular updates, and proactive outreach - all of which automation makes possible without requiring you to manually manage every touchpoint."
      }
    ]
  },
  {
    category: "Competing with Tech-Savvy Firms",
    slug: "stop-losing-clients-tech-savvy",
    questions: [
      {
        question: "What technology do I need to compete with tech-savvy CPA firms?",
        slug: "technology-compete-tech-savvy-cpas",
        answer: "At minimum, you need a professional website with SEO optimization, a CRM system for client management, automated communication tools, and a client portal for document sharing. Our QuickStart plan includes High Level CRM, Google Business Profile optimization, Google Analytics, and website development to give you a modern tech stack without overwhelming complexity."
      },
      {
        question: "How much does it cost to modernize my accounting firm's technology?",
        slug: "cost-modernize-accounting-firm-technology",
        answer: "Our QuickStart plan includes a one-time setup fee and a monthly subscription with no long-term contract, making modernization affordable and risk-free. The investment typically pays for itself quickly - firms adopting automation see average revenue increases of 21.3% and profit increases of 25% (https://tax.thomsonreuters.com/blog/beyond-tax-season-creating-revenue-stability-year-round/) within the first year."
      },
      {
        question: "Will my existing clients care if I adopt new technology?",
        slug: "existing-clients-care-new-technology",
        answer: "Yes, they'll appreciate it - modern clients expect professional systems, fast responses, and convenient communication options. Upgrading your technology demonstrates that you're keeping pace with industry changes and investing in better service delivery, which builds confidence and trust."
      },
      {
        question: "How long does it take to implement modern systems in my practice?",
        slug: "how-long-implement-modern-systems",
        answer: "Our QuickStart plan delivers a new or updated website within 14 days and has basic automation systems operational within 30 days. Full implementation and optimization typically takes 60-90 days as we customize workflows to your specific practice needs and train your team on the new systems."
      }
    ]
  },
  {
    category: "Referrals & Reviews",
    slug: "referrals-reviews",
    questions: [
      {
        question: "Why is asking for referrals uncomfortable, and how can I avoid it?",
        slug: "asking-referrals-uncomfortable-avoid",
        answer: "Most CPAs feel uncomfortable asking for referrals because it feels pushy or sales-oriented, which conflicts with their professional identity. Instead of asking, create systems that naturally generate referrals through exceptional service, automated review requests, and content that makes you easy to recommend."
      },
      {
        question: "What's the conversion rate for referrals vs. other marketing channels?",
        slug: "conversion-rate-referrals-vs-marketing",
        answer: "Referrals convert at 25.56% (https://focus-digital.co/average-sales-call-conversion-rate-by-industry/), making them the strongest acquisition channel, and deliver 3-5x higher conversion rates (https://blog.propellocloud.com/referral-marketing-statistics) than other marketing methods. 76% of CPAs identify word-of-mouth as their most important marketing technique (https://www.cpajournal.com/2025/04/28/digital-marketing-resources-for-cpas/), and 88% of consumers trust recommendations from people they know (https://www.investopedia.com/terms/w/word-of-mouth-marketing.asp) more than any other source."
      },
      {
        question: "How do automated referral systems work without being pushy?",
        slug: "automated-referral-systems-without-pushy",
        answer: "Automated systems identify your happiest clients through satisfaction tracking, then create natural opportunities for them to share their experience through review requests, social proof, and shareable content. The system works in the background by maintaining top-of-mind awareness and making it easy for satisfied clients to recommend you when opportunities arise organically."
      },
      {
        question: "How long does it take to build a referral generation system?",
        slug: "how-long-build-referral-generation-system",
        answer: "Basic referral systems can be implemented within 30-60 days, including review generation automation, client satisfaction tracking, and referral-worthy content creation. One accounting firm reported that referral activity accounted for 40% of their total wins (https://accountingmarketing.org/business-development-leveraging-referral-tracking-to-elevate-your-client-experience/) after implementing systematic referral tracking and nurturing."
      },
      {
        question: "How does the review request system know when to ask clients?",
        slug: "review-system-timing",
        answer: "We integrate with your practice management software to detect service completion triggers (tax return filed, advisory project closed, monthly bookkeeping completed). The system automatically sends review requests 2-3 days after completion—when satisfaction is highest."
      },
      {
        question: "What if a client leaves a negative review?",
        slug: "negative-review-response",
        answer: "Our monitoring system alerts you immediately (email + SMS). We provide response templates for addressing concerns professionally and offer to help resolve issues offline. Most negative reviews can be resolved or mitigated with a thoughtful, timely response."
      },
      {
        question: "Will clients get annoyed by review requests?",
        slug: "review-requests-annoying",
        answer: "No. We send one request per service completion, with a polite reminder 7 days later if they don't respond. Clients who've already left a review are automatically excluded from future requests. Our approach is respectful and non-pushy."
      },
      {
        question: "Which review platforms should I focus on?",
        slug: "which-review-platforms",
        answer: "Google is the priority (90% of prospects check Google reviews first). We also request reviews on Facebook and industry-specific platforms if relevant. You can customize which platforms to prioritize based on where your prospects look. We recommend 30+ Google reviews as a minimum baseline, 50+ to be competitive, and 100+ to dominate your local market."
      }
    ]
  },
  {
    category: "Protect Your Practice",
    slug: "protect-practice-future",
    questions: [
      {
        question: "What are the biggest threats to accounting firms today?",
        slug: "biggest-threats-accounting-firms-today",
        answer: "The biggest threats include cybersecurity breaches (which can destroy client trust and create liability), technology disruption from AI and automation, regulatory changes, and competition from tech-enabled firms. Firms that proactively adopt modern technology (https://tax.thomsonreuters.com/blog/beyond-tax-season-creating-revenue-stability-year-round/) are better positioned to handle these threats and turn them into competitive advantages."
      },
      {
        question: "Do I really need cybersecurity if I'm a small firm?",
        slug: "need-cybersecurity-small-firm",
        answer: "Yes - small firms are increasingly targeted by cybercriminals because they often have weaker security than larger firms while still holding valuable client data. A single data breach can destroy your reputation, create legal liability, and violate client confidentiality, making cybersecurity essential regardless of firm size."
      },
      {
        question: "How do I future-proof my practice against AI and automation?",
        slug: "future-proof-practice-against-ai",
        answer: "Embrace AI and automation as tools that enhance your services rather than threats to avoid - use them to handle routine tasks while you focus on advisory services that require human judgment and relationship skills. Firms adopting AI-enabled technology (https://tax.thomsonreuters.com/blog/beyond-tax-season-creating-revenue-stability-year-round/) saw 21.3% revenue increases and 25% profit increases by shifting from compliance work to higher-value strategic services."
      },
      {
        question: "What should be included in a business continuity plan for CPAs?",
        slug: "business-continuity-plan-cpas",
        answer: "A solid business continuity plan includes data backup and recovery systems, cloud-based access to critical files, documented processes for key tasks, communication protocols for emergencies, and cybersecurity measures. Our QuickStart plan includes cloud-based systems and automated backups to ensure your practice can continue operating even during disruptions."
      }
    ]
  },
  {
    category: "Tax Preparation Marketing",
    slug: "tax-preparation",
    questions: [
      {
        question: "How can I generate revenue outside of tax season?",
        slug: "generate-revenue-outside-tax-season",
        answer: "Expand into year-round services like bookkeeping, payroll, tax planning, and business advisory that complement your tax preparation expertise. Thomson Reuters research shows (https://tax.thomsonreuters.com/blog/beyond-tax-season-creating-revenue-stability-year-round/) that firms developing year-round revenue streams reduce stress, improve income stability, and achieve higher profitability than those relying solely on seasonal tax work."
      },
      {
        question: "When should I start marketing for the upcoming tax season?",
        slug: "when-start-marketing-tax-season",
        answer: "Begin marketing 3-4 months before tax season (October-November) to capture early planners, with peak campaigns running December-February. However, the most successful tax firms market year-round by offering tax planning, quarterly services, and educational content that keeps them top-of-mind even during off-season months."
      },
      {
        question: "How do I compete with TurboTax and other DIY tax software?",
        slug: "compete-turbotax-diy-tax-software",
        answer: "Position your value as personalized expertise, tax planning (not just preparation), audit protection, and year-round support that software can't provide. Focus on attracting clients with complex situations, business income, or multiple income sources who need professional guidance rather than competing on price with DIY solutions."
      },
      {
        question: "What marketing strategies work best for attracting tax clients?",
        slug: "marketing-strategies-attracting-tax-clients",
        answer: "Local SEO and Google Business Profile optimization are critical since most people search \"tax preparer near me,\" combined with review generation to build trust. 76% of CPAs identify word-of-mouth (https://www.cpajournal.com/2025/04/28/digital-marketing-resources-for-cpas/) as their most important marketing technique, making referral systems and client satisfaction essential for sustainable growth."
      }
    ]
  },
  {
    category: "Bookkeeping Services Marketing",
    slug: "bookkeeping-services",
    questions: [
      {
        question: "How do I differentiate my bookkeeping services from low-cost competitors?",
        slug: "differentiate-bookkeeping-low-cost-competitors",
        answer: "Position yourself as a strategic financial partner who provides insights and business guidance, not just data entry. Emphasize your expertise in specific industries, your proactive communication, and the true cost of bookkeeping errors that cheap providers often make."
      },
      {
        question: "What's the best way to attract small business clients for bookkeeping?",
        slug: "attract-small-business-clients-bookkeeping",
        answer: "Focus on local SEO, Google Business Profile optimization, and industry-specific content that demonstrates expertise in your target clients' challenges. Partner with complementary service providers (business attorneys, financial advisors, commercial lenders) who can refer clients needing ongoing bookkeeping support."
      },
      {
        question: "How can I build predictable recurring revenue with bookkeeping services?",
        slug: "build-predictable-recurring-revenue-bookkeeping",
        answer: "Package your bookkeeping services as fixed monthly fees rather than hourly billing, which creates predictable income for both you and your clients. Bookkeeping firms with strong recurring revenue models (https://www.thesuccessfulbookkeeper.com/episodes/43) can be valued at $2 for every dollar of recurring revenue, making this approach both profitable and valuable for eventual exit."
      },
      {
        question: "Should I focus on a specific industry niche for my bookkeeping practice?",
        slug: "focus-industry-niche-bookkeeping-practice",
        answer: "Yes - industry specialization allows you to develop deep expertise, create industry-specific processes and templates, and command premium pricing. Firms with clear specialization achieve 84% client retention rates (https://explodingtopics.com/blog/customer-retention-rates) compared to 60-70% for generalist small firms, and can market more effectively by speaking directly to specific pain points."
      }
    ]
  },
  {
    category: "Business Advisory Marketing",
    slug: "business-advisory",
    questions: [
      {
        question: "How do I position myself as a business advisor, not just an accountant?",
        slug: "position-business-advisor-not-accountant",
        answer: "Create thought leadership content (articles, videos, webinars) that demonstrates strategic thinking beyond numbers, and shift conversations from compliance to business outcomes. Focus on business growth, profitability improvement, and strategic planning rather than just tax returns and financial statements."
      },
      {
        question: "What's the typical pricing for business advisory services?",
        slug: "typical-pricing-business-advisory-services",
        answer: "Advisory services typically command premium pricing ranging from $200-500+ per hour or $2,000-10,000+ for project-based engagements, depending on firm expertise and client size. Value-based pricing (based on client outcomes rather than hours) often generates even higher fees for transformational advisory work."
      },
      {
        question: "How long does it take to establish thought leadership in my market?",
        slug: "how-long-establish-thought-leadership",
        answer: "Building recognized thought leadership typically takes 6-12 months of consistent content creation, speaking opportunities, and strategic networking. The key is consistency - regular blog posts, LinkedIn activity, local speaking engagements, and participation in industry associations that demonstrate expertise over time."
      },
      {
        question: "What content should I create to attract advisory clients?",
        slug: "content-attract-advisory-clients",
        answer: "Create content that addresses business challenges your ideal clients face: cash flow management, growth strategies, profitability improvement, succession planning, and strategic decision-making. Case studies showing measurable business outcomes are particularly effective, as they demonstrate the ROI of advisory services and build credibility."
      }
    ]
  },
  {
    category: "Client Onboarding Automation",
    slug: "client-onboarding",
    questions: [
      {
        question: "How long does it take to implement client onboarding automation?",
        slug: "implement-client-onboarding-automation",
        answer: "Most firms are fully operational within 2-3 weeks. Week 1: We audit your current onboarding process and configure the platform. Week 2: We build your custom templates, forms, and workflows. Week 3: Testing, team training, and go-live. You'll start saving time immediately once the system is active."
      },
      {
        question: "Will onboarding automation work with my existing practice management software?",
        slug: "onboarding-automation-practice-management",
        answer: "Yes. We integrate with all major practice management platforms including Karbon, Canopy, Financial Cents, Jetpack Workflow, and others. If your software has an API, we can connect it. This means no double data entry—client information flows automatically between systems."
      },
      {
        question: "Can I customize the intake forms for different service types?",
        slug: "customize-intake-forms-service-types",
        answer: "Absolutely. You can create different onboarding paths for tax clients, bookkeeping clients, advisory clients, and any other service type. Each path can have unique intake forms, document checklists, and welcome sequences tailored to that service's specific requirements."
      },
      {
        question: "What happens if a client doesn't complete their onboarding steps?",
        slug: "client-incomplete-onboarding",
        answer: "The system automatically sends reminder emails at intervals you define (e.g., 3 days, 7 days, 14 days). You can add SMS reminders for urgency. Your team receives dashboard alerts showing which clients have stalled so you can personally intervene when needed—but 85% of reminders are handled automatically."
      },
      {
        question: "Is the document collection portal secure?",
        slug: "document-portal-security",
        answer: "Yes. Our document portal uses bank-level 256-bit SSL encryption, SOC 2 compliant hosting, and secure access controls. Clients can only access their own documents, and all data is backed up automatically. This is significantly more secure than email attachments."
      },
      {
        question: "How much time will onboarding automation really save us?",
        slug: "onboarding-time-savings",
        answer: "Most firms report saving 10-15 hours per week on document chasing, reminder emails, and status tracking. That's time your team can redirect to billable work or strategic growth activities."
      }
    ]
  },
  {
    category: "Lead Follow-Up Automation",
    slug: "lead-follow-up",
    questions: [
      {
        question: "How quickly does the automated system respond to new leads?",
        slug: "automated-lead-response-time",
        answer: "Instantly. When a lead fills out your contact form, submits a consultation request, or calls your tracking number, our system responds within 60 seconds via email and SMS. Voicemail drops happen within 5 minutes if they don't answer."
      },
      {
        question: "What if a lead wants to talk to a real person immediately?",
        slug: "lead-wants-real-person",
        answer: "The system includes your phone number and booking link in every automated message. Leads can call you directly or book a consultation instantly. The automation handles nurturing for leads who aren't ready to talk yet—not replacing human interaction, just ensuring no one falls through the cracks."
      },
      {
        question: "Can I customize the follow-up messages?",
        slug: "customize-follow-up-messages",
        answer: "Yes. We provide proven templates based on thousands of accounting firm leads, but you can customize tone, messaging, and offers. We'll work with you during setup to ensure every message sounds like you."
      },
      {
        question: "What happens if a lead doesn't respond to the automated sequence?",
        slug: "lead-unresponsive-sequence",
        answer: "After 7 touches over 14 days (email, SMS, voicemail), the system flags the lead as \"unresponsive\" and notifies you. You can choose to make a personal outreach attempt or move them to a long-term nurture campaign. Most leads respond by touch 3-4."
      }
    ]
  },
  {
    category: "SEO & Local Search",
    slug: "seo-local-search",
    questions: [
      {
        question: "How long does SEO take to show results?",
        slug: "seo-results-timeline",
        answer: "Local SEO improvements (Google Maps rankings) typically show within 60-90 days. Organic search rankings for competitive keywords take 4-6 months. Most firms see their first SEO-generated leads within 90 days and consistent monthly leads by month 6."
      },
      {
        question: "What's the difference between SEO and Google Ads?",
        slug: "seo-vs-google-ads",
        answer: "Google Ads generate immediate leads but stop when you stop paying. SEO builds long-term rankings that generate leads for years without ongoing ad spend. We recommend both: ads for immediate leads while SEO builds, then reduce ad spend as organic traffic grows."
      },
      {
        question: "Do I need to write blog posts for SEO, or do you handle that?",
        slug: "blog-posts-seo-who-writes",
        answer: "We handle all content creation. Our team writes SEO-optimized blog posts, service pages, and local content tailored to accounting firms. You review and approve before publishing—no writing required on your end."
      },
      {
        question: "Will SEO work if I'm in a competitive market?",
        slug: "seo-competitive-market",
        answer: "Yes, but it takes longer. In competitive markets (major metros), we focus on hyper-local keywords (\"CPA in [neighborhood]\") and niche services (\"R&D tax credit specialist\") where you can rank faster. Most firms see results within 6 months even in competitive markets."
      }
    ]
  },
  {
    category: "Website Design",
    slug: "website-design",
    questions: [
      {
        question: "How long does the website design process take?",
        slug: "website-design-timeline",
        answer: "Most accounting firm websites are completed in 2-4 weeks. Week 1: Strategy and mockups. Week 2: Design and copywriting. Week 3: Development and your review. Week 4: Revisions and launch. We handle everything—you review and approve at key milestones."
      },
      {
        question: "Can you migrate my existing content, or do we start from scratch?",
        slug: "migrate-existing-content",
        answer: "We can do either. If your current site has good content, we'll migrate and optimize it. If it's outdated or off-brand, we'll write new copy from scratch. Most firms choose a hybrid: keep core service descriptions, rewrite homepage and key landing pages."
      },
      {
        question: "Will my website be compliant with AICPA regulations?",
        slug: "website-aicpa-compliance",
        answer: "Yes. All content is reviewed for compliance with AICPA advertising rules, state board regulations, and professional standards. We avoid prohibited claims, ensure proper disclosures, and follow best practices for accounting firm websites."
      },
      {
        question: "What if I need website changes after launch?",
        slug: "website-changes-after-launch",
        answer: "We include 30 days of post-launch support for minor tweaks and adjustments. After that, you can manage content yourself via the CMS, or we offer ongoing maintenance plans ($200-$500/month) for firms that prefer hands-off management."
      }
    ]
  },
  {
    category: "Content Marketing",
    slug: "content-marketing",
    questions: [
      {
        question: "How often will you publish content for my firm?",
        slug: "content-publishing-frequency",
        answer: "We recommend 2-4 blog posts per month, plus quarterly long-form guides or resources. Consistency matters more than volume—we'd rather publish 2 high-quality posts monthly than 8 mediocre ones."
      },
      {
        question: "What topics will you write about?",
        slug: "content-topics",
        answer: "We focus on high-intent topics your ideal clients are searching for: tax planning strategies, business advisory insights, CFO services explainers, industry-specific guides, and answers to common client questions. Every piece is designed to attract and convert prospects."
      },
      {
        question: "Do I need to provide topic ideas, or do you handle content planning?",
        slug: "content-planning-topics",
        answer: "We handle topic research and planning based on keyword data, industry trends, and your service focus. You provide input on your expertise and unique perspectives—we turn that into SEO-optimized content."
      },
      {
        question: "How long until content marketing generates leads?",
        slug: "content-marketing-lead-timeline",
        answer: "Most firms see their first content-generated leads within 60-90 days. Consistent lead flow (5-10 leads/month) typically starts around month 6. Content marketing is a long-term investment—it compounds over time as your content library grows."
      }
    ]
  },
  {
    category: "Email Marketing",
    slug: "email-marketing",
    questions: [
      {
        question: "How often will you send emails to my clients?",
        slug: "email-frequency",
        answer: "We recommend 1-2 emails per month for general newsletters, plus automated emails triggered by specific events (tax deadline reminders, service completion follow-ups, appointment reminders). We'll tailor frequency to your preferences and client expectations."
      },
      {
        question: "What if clients unsubscribe or complain about too many emails?",
        slug: "email-unsubscribe-complaints",
        answer: "We follow email marketing best practices: clear unsubscribe links, segmented lists (so clients only get relevant content), and frequency caps. Unsubscribe rates for our campaigns average 0.5-1% (industry average is 2-3%), meaning your content is well-received."
      },
      {
        question: "Can you segment my email list by service type or client value?",
        slug: "email-list-segmentation",
        answer: "Yes. We segment by service type (tax-only, advisory, full-service), engagement level (active, at-risk, dormant), and lifecycle stage (prospect, new client, long-term client). This ensures everyone gets personalized, relevant content."
      },
      {
        question: "Do I need to write the emails, or do you handle that?",
        slug: "email-writing",
        answer: "We write everything. You provide high-level input (upcoming service changes, seasonal promotions, key messages), and we draft emails for your approval. Most firms spend 15-20 minutes per month reviewing and approving content."
      }
    ]
  },
  {
    category: "Social Media Management",
    slug: "social-media",
    questions: [
      {
        question: "Which social media platforms do you manage?",
        slug: "social-platforms-managed",
        answer: "We focus on LinkedIn (primary for B2B accounting), Facebook (for local visibility), and optionally Twitter/X and Instagram. LinkedIn drives the most engagement and referrals for accounting firms, so we prioritize it."
      },
      {
        question: "How often will you post, and what type of content?",
        slug: "social-posting-frequency-content",
        answer: "We post 12-16 times per month across platforms: tax tips, industry news commentary, client success stories (anonymized), service spotlights, and thought leadership. All content is pre-approved by you and compliant with AICPA guidelines."
      },
      {
        question: "Do I need to provide social media content ideas, or do you create everything?",
        slug: "social-content-creation",
        answer: "We create everything. Our team follows accounting industry news, tax law changes, and best practices to generate timely, relevant content. You review and approve monthly content calendars—no brainstorming or writing required."
      },
      {
        question: "Will you respond to comments and messages on social media?",
        slug: "social-engagement-responses",
        answer: "We monitor and respond to comments on posts (thanking people for engagement, answering general questions). For direct messages or inquiries, we notify you immediately so you can respond personally. We never impersonate you in private conversations."
      }
    ]
  },
  {
    category: "Technology & Implementation",
    slug: "technology-implementation",
    questions: [
      {
        question: "How long does technology implementation take?",
        slug: "technology-implementation-timeline",
        answer: "Most integrations and workflow automations are implemented in 2-4 weeks. Week 1: Audit and planning. Week 2: Configuration and testing. Week 3: Data migration and team training. Week 4: Go-live and support. We minimize disruption to your current operations."
      },
      {
        question: "Will this require changing all my existing tools?",
        slug: "changing-existing-tools",
        answer: "Not necessarily. We audit your current stack and recommend changes only where there are major gaps or inefficiencies. Many firms keep QuickBooks and practice management software and simply add integrations to connect everything. We optimize what you have before recommending replacements."
      },
      {
        question: "What if my team resists new technology?",
        slug: "team-technology-resistance",
        answer: "We include hands-on training and documentation for your team. Most resistance comes from fear of complexity—our solutions are designed to make work easier, not harder. We show your team how much time they'll save, and adoption follows naturally."
      },
      {
        question: "What's the ongoing cost after implementation?",
        slug: "ongoing-technology-cost",
        answer: "Software costs vary by firm size: $200-$500/month for small firms (4-10 people), $500-$1,500/month for mid-size firms (10-25 people). We recommend tools with transparent pricing and no surprise fees. Ongoing support and optimization are available if needed."
      },
      {
        question: "How long does the business optimization process take?",
        slug: "business-optimization-timeline",
        answer: "Phase 1 (Audit and Analysis): 2-3 weeks. Phase 2 (Recommendations and Roadmap): 1 week. Phase 3 (Implementation Support): 8-12 weeks. You'll have actionable insights within 30 days and see measurable improvements within 90 days."
      },
      {
        question: "What if the recommendations require major changes I'm not ready for?",
        slug: "major-changes-not-ready",
        answer: "We provide a prioritized roadmap with quick wins (implement this month), medium-term improvements (implement this quarter), and long-term strategic shifts (implement this year). You control the pace—we provide the plan."
      }
    ]
  },
  {
    category: "Executive & Advisory Services",
    slug: "executive-services",
    questions: [
      {
        question: "How is this different from hiring a business coach?",
        slug: "difference-from-business-coach",
        answer: "Generic business coaches don't understand accounting. We're former firm owners who've navigated busy season, compliance constraints, and scaling challenges specific to accounting practices. You'll get advice that actually works in your world—not generic business theory."
      },
      {
        question: "How much time commitment is required from me for executive services?",
        slug: "executive-services-time-commitment",
        answer: "Fractional CIO services: 2-4 hours per month (strategy calls + review). Executive coaching: 2 hours per month (1:1 sessions). Growth planning: 4-6 hours upfront, then 1-2 hours monthly. We're designed for busy firm owners who can't dedicate 10+ hours per week to strategic work."
      },
      {
        question: "What's included in fractional CIO services?",
        slug: "fractional-cio-services-included",
        answer: "Technology roadmap and planning, vendor evaluation and management, security assessments and compliance, digital transformation strategy, and ongoing advisory. You get strategic technology leadership without the $150K+ salary of a full-time CIO."
      },
      {
        question: "Can I try executive services before committing long-term?",
        slug: "try-executive-services-pilot",
        answer: "Yes. We offer a 90-day pilot for executive services. If you don't see value, you can cancel. Most firms extend after the pilot because they finally have the strategic support they've been missing."
      }
    ]
  },
  {
    category: "Add-On Services",
    slug: "add-ons",
    questions: [
      {
        question: "Can I add services to my existing QuickStart package?",
        slug: "add-services-quickstart",
        answer: "Yes! All add-on services are designed to integrate seamlessly with your QuickStart package or can be purchased independently for firms with existing marketing foundations."
      },
      {
        question: "What are the pricing options for add-ons?",
        slug: "add-on-pricing-options",
        answer: "Each add-on service is priced individually based on scope and frequency. Contact us for a custom quote tailored to your specific needs and budget."
      },
      {
        question: "Do I need to commit to a long-term contract for add-ons?",
        slug: "add-on-contract-commitment",
        answer: "No. Add-on services are month-to-month with no long-term commitments required. Scale up or down as your needs change."
      }
    ]
  },
  {
    category: "Tools & Calculators",
    slug: "tools-calculators",
    questions: [
      {
        question: "How do these tools help my accounting firm grow?",
        slug: "how-tools-help-accounting-firm-grow",
        answer: "Our free tools provide data-driven insights into your firm's efficiency, marketing ROI, and growth potential, helping you identify specific opportunities for improvement and make informed decisions about where to invest your time and resources. Each assessment delivers personalized recommendations based on your responses and industry benchmarks."
      },
      {
        question: "Are these assessments really free?",
        slug: "assessments-really-free",
        answer: "Yes, all our assessment tools are completely free with no obligation. We designed them to help accounting firms identify opportunities for improvement and demonstrate the value of systematic approaches to marketing, efficiency, and growth."
      },
      {
        question: "How long do the assessments take?",
        slug: "how-long-assessments-take",
        answer: "Most assessments take between 2-5 minutes to complete and provide instant results with personalized recommendations. The time investment is minimal compared to the actionable insights you'll receive about your firm's performance."
      },
      {
        question: "What happens after I complete an assessment?",
        slug: "what-happens-after-complete-assessment",
        answer: "You'll receive immediate results with actionable recommendations specific to your firm's situation. Optionally, you can Book a Free Call to discuss your results and explore how SmartFirm can help implement the improvements identified in your assessment."
      }
    ]
  }
];

export const homepageFaqs: FAQItem[] = [
  {
    question: "How do I know which SmartFirm solution is right for my accounting firm?",
    slug: "which-solution-right-for-accounting-firm",
    answer: "Start by identifying your biggest challenge: if you're losing clients, focus on our client retention and marketing solutions; if you're working too many hours, focus on workflow automation and efficiency tools; if you're not getting enough leads, focus on our marketing and visibility services. Most firms see the best results by addressing their most pressing pain point first, then expanding to other solutions as systems stabilize."
  },
  {
    question: "How quickly can I expect to see results from implementing SmartFirm solutions?",
    slug: "how-quickly-see-results",
    answer: "Timeline depends on which solutions you implement: Marketing results (SEO, content) typically show within 60-90 days for local visibility and 4-6 months for competitive keywords. Workflow automation (onboarding, follow-ups) delivers immediate time savings—most firms save 10-15 hours per week starting week one. According to Thomson Reuters' 2025 research, firms embracing automation saw an average revenue increase of 21.3% and profit increase of 25% within their first year."
  },
  {
    question: "Why does industry specialization matter for accounting firm marketing?",
    slug: "why-industry-specialization-matters",
    answer: "Industry specialization allows you to speak directly to your ideal clients' specific pain points and demonstrate deep expertise in their unique challenges, which commands premium pricing and builds faster trust. Professional services firms with clear specialization (https://explodingtopics.com/blog/customer-retention-rates) achieve 84% client retention rates compared to 60-70% for generalist small firms."
  },
  {
    question: "What's the ROI of investing in client retention vs. new client acquisition?",
    slug: "roi-client-retention-vs-acquisition",
    answer: "Client retention delivers significantly higher ROI because acquiring new clients costs 5-25x more than retaining existing ones (https://futurefirm.co/accounting-client-retention-strategies-growing-firms/), and existing clients are more likely to purchase additional services. Top accounting firms achieve 90-96% retention rates (https://www.cpajournal.com/2024/01/23/state-of-the-profession-3/), creating predictable revenue and reducing the constant pressure to find new clients."
  },
  {
    question: "Will my existing clients care if I adopt new technology?",
    slug: "existing-clients-care-new-technology",
    answer: "Yes, they'll appreciate it - modern clients expect professional systems, fast responses, and convenient communication options. Upgrading your technology demonstrates that you're keeping pace with industry changes and investing in better service delivery, which builds confidence and trust."
  },
  {
    question: "What's the conversion rate for referrals vs. other marketing channels?",
    slug: "conversion-rate-referrals-vs-marketing",
    answer: "Referrals convert at 25.56% (https://focus-digital.co/average-sales-call-conversion-rate-by-industry/), making them the strongest acquisition channel, and deliver 3-5x higher conversion rates (https://blog.propellocloud.com/referral-marketing-statistics) than other marketing methods. 76% of CPAs identify word-of-mouth as their most important marketing technique (https://www.cpajournal.com/2025/04/28/digital-marketing-resources-for-cpas/), and 88% of consumers trust recommendations from people they know (https://www.investopedia.com/terms/w/word-of-mouth-marketing.asp) more than any other source."
  },
  {
    question: "What are the biggest threats to accounting firms today?",
    slug: "biggest-threats-accounting-firms-today",
    answer: "The biggest threats include cybersecurity breaches (which can destroy client trust and create liability), technology disruption from AI and automation, regulatory changes, and competition from tech-enabled firms. Firms that proactively adopt modern technology (https://tax.thomsonreuters.com/blog/beyond-tax-season-creating-revenue-stability-year-round/) are better positioned to handle these threats and turn them into competitive advantages."
  },
  {
    question: "How do I compete with TurboTax and other DIY tax software?",
    slug: "compete-turbotax-diy-tax-software",
    answer: "Position your value as personalized expertise, tax planning (not just preparation), audit protection, and year-round support that software can't provide. Focus on attracting clients with complex situations, business income, or multiple income sources who need professional guidance rather than competing on price with DIY solutions."
  }
];

// Helper to get all FAQs as flat array
export const getAllFaqs = (): FAQItem[] => {
  return faqCategories.flatMap(category => category.questions);
};

// Helper to find FAQ by slug
export const getFaqBySlug = (slug: string): { faq: FAQItem; category: FAQCategory } | null => {
  for (const category of faqCategories) {
    const faq = category.questions.find(q => q.slug === slug);
    if (faq) {
      return { faq, category };
    }
  }
  return null;
};

// Helper to get related FAQs from same category
export const getRelatedFaqs = (slug: string, limit: number = 3): FAQItem[] => {
  const result = getFaqBySlug(slug);
  if (!result) return [];
  
  return result.category.questions
    .filter(q => q.slug !== slug)
    .slice(0, limit);
};

const pathToCategoryMap = new Map<string, string>([
  ["/solutions-expert-marketing-agency-for-accounting-firms", "Getting Started with SmartFirm"],
  ["/industries-expert-marketing-agency-for-accountants", "Industries We Serve"],
  ["/solutions/client-retention", "Client Retention"],
  ["/solutions/scale-firm", "Scaling Your Firm"],
  ["/solutions/work-less-earn-more", "Work Less, Earn More"],
  ["/solutions/retention-strategies", "Client Retention"],
  ["/solutions/stop-losing-clients-to-tech-savvy-cpas", "Competing with Tech-Savvy Firms"],
  ["/solutions/get-more-referrals-without-asking", "Referrals & Reviews"],
  ["/solutions/grow-without-growing-pains", "Scaling Your Firm"],
  ["/solutions/protect-practice-and-future", "Protect Your Practice"],
  ["/solutions/client-onboarding-problems", "Client Onboarding Automation"],
  ["/industries/tax-preparation", "Tax Preparation Marketing"],
  ["/industries/bookkeeping-services", "Bookkeeping Services Marketing"],
  ["/industries/bookkeeping-services-marketing-automation", "Bookkeeping Services Marketing"],
  ["/industries/business-advisory", "Business Advisory Marketing"],
  ["/industries/business-advisory-marketing-services", "Business Advisory Marketing"],
  ["/industries/audit-assurance", "Industries We Serve"],
  ["/industries/audit-assurance-marketing-agency", "Industries We Serve"],
  ["/services/client-onboarding-automation", "Client Onboarding Automation"],
  ["/services/automated-lead-follow-up", "Lead Follow-Up Automation"],
  ["/services/seo-for-accountants", "SEO & Local Search"],
  ["/services/website-design", "Website Design"],
  ["/services/content-marketing", "Content Marketing"],
  ["/services/email-marketing", "Email Marketing"],
  ["/services/social-media-management", "Social Media Management"],
  ["/services/technology-solutions", "Technology & Implementation"],
  ["/services/business-optimization", "Technology & Implementation"],
  ["/services/executive-services", "Executive & Advisory Services"],
  ["/services/client-review-generation", "Referrals & Reviews"],
  ["/services/online-reputation-management", "Referrals & Reviews"],
  ["/services/add-ons", "Add-On Services"],
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
