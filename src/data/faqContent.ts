export interface FAQItem {
  question: string;
  answer: string;
  slug: string;
  h1Override?: string;
  metaTitle?: string;
  metaDescription?: string;
  firstSentence?: string;
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
        slug: "which-automation-solution-for-my-accounting-firm",
        answer: "Start by identifying your biggest challenge: if you're losing clients, focus on our client retention and marketing solutions; if you're working too many hours, focus on workflow automation and efficiency tools; if you're not getting enough leads, focus on our marketing and visibility services. Most firms see the best results by addressing their most pressing pain point first, then expanding to other solutions as systems stabilize.",
        h1Override: "How do I know which SmartFirm.io solution is right for my accounting firm?",
        metaTitle: "Which Automation Solution for My Firm | SmartFirm.io",
        metaDescription: "Choose the right automation solution for your accounting firm by identifying your biggest challenge — client retention, overwork, or growth.",
        firstSentence: "Which automation solution for your accounting firm depends on your biggest challenge — losing clients, working too many hours, or hitting a growth ceiling."
      },
      {
        question: "Can I combine marketing services with workflow automation, or do I need to pick just one?",
        slug: "combine-marketing-and-workflow-automation-for-accountants",
        answer: "You can absolutely combine both, and most successful firms do. Our QuickStart plan integrates marketing automation (lead generation, email campaigns, review requests) with workflow automation (client onboarding, document collection, task management) seamlessly. All systems work together through platforms like High Level CRM and your practice management software to create a comprehensive growth strategy.",
        h1Override: "Can I combine marketing services with workflow automation, or do I need to pick just one?",
        metaTitle: "Combine Marketing and Workflow Automation | SmartFirm.io",
        metaDescription: "Combine marketing and workflow automation for accountants — most successful firms integrate both for lead generation, onboarding, and retention.",
        firstSentence: "Combining marketing and workflow automation for accountants is what most successful firms do — integrating lead generation, email campaigns, and reviews with operational systems."
      },
      {
        question: "What's the difference between SmartFirm and traditional marketing agencies?",
        slug: "accounting-specific-marketing-agency-vs-general-agency",
        answer: "We specialize exclusively in accounting firms, so we understand your compliance requirements, seasonal challenges, and client acquisition costs better than general agencies. More importantly, we combine marketing (SEO, content, lead gen) with workflow automation (onboarding, follow-ups, client communication) to deliver both new clients AND operational efficiency—not just leads that burden your already-stretched team.",
        h1Override: "What's the difference between SmartFirm.io and traditional marketing agencies?",
        metaTitle: "SmartFirm.io vs Traditional Agencies | FAQ",
        metaDescription: "SmartFirm.io specializes exclusively in accounting firms — unlike general agencies, we understand compliance, seasonality, and CPA client acquisition.",
        firstSentence: "An accounting-specific marketing agency like SmartFirm.io understands your compliance requirements, seasonal challenges, and client acquisition costs better than any generalist."
      },
      {
        question: "How quickly can I expect to see results from implementing SmartFirm solutions?",
        slug: "smartfirm-results-timeline",
        answer: "Timeline depends on which solutions you implement: Marketing results (SEO, content) typically show within 60-90 days for local visibility and 4-6 months for competitive keywords. Workflow automation (onboarding, follow-ups) delivers immediate time savings—most firms save 10-15 hours per week starting week one. According to Thomson Reuters' 2025 research, firms embracing automation saw an average revenue increase of 21.3% and profit increase of 25% within their first year.",
        h1Override: "How quickly can I expect to see results from implementing SmartFirm.io solutions?",
        metaTitle: "SmartFirm.io Results Timeline | SmartFirm.io",
        metaDescription: "SmartFirm.io results timeline — marketing visibility in 60-90 days, automation time savings within weeks, full ROI typically within 4-6 months.",
        firstSentence: "SmartFirm.io results timeline depends on which solutions you implement — marketing visibility shows in 60-90 days, automation time savings start within weeks."
      },
      {
        question: "Do you work with accounting firms of all sizes, or is there a minimum?",
        slug: "accounting-firm-automation-for-any-size",
        answer: "We work with accounting firms of all sizes, from solo practitioners to firms with 50+ employees. Our QuickStart plan is specifically designed to scale with your firm, with flexible month-to-month pricing and no long-term contracts required. Solo practitioners often start with marketing foundations; larger firms typically add workflow automation for their teams.",
        h1Override: "Do you work with accounting firms of all sizes, or is there a minimum?",
        metaTitle: "Accounting Firm Automation for Any Size | SmartFirm.io",
        metaDescription: "Accounting firm automation for any size — from solo practitioners to 50+ employee firms. SmartFirm.io's QuickStart plan scales with your practice.",
        firstSentence: "Accounting firm automation for any size is what SmartFirm.io provides — from solo practitioners to firms with 50+ employees, our QuickStart plan scales with your practice."
      },
      {
        question: "How do I get started with SmartFirm?",
        slug: "get-started-with-smartfirm-automation",
        answer: "Book a Free Call to discuss your firm's specific needs and goals. We'll assess your current situation, identify the highest-impact opportunities, and recommend a tailored solution. There's no obligation—most firms find the consultation valuable even if they decide to wait.",
        h1Override: "How do I get started with SmartFirm.io?",
        metaTitle: "Get Started with SmartFirm.io Automation | SmartFirm.io",
        metaDescription: "Get started with SmartFirm.io automation — book a free call to discuss your firm's needs, identify high-impact opportunities, and get a custom roadmap.",
        firstSentence: "Get started with SmartFirm.io automation by booking a free call — we'll assess your current situation, identify the highest-impact opportunities, and recommend a path forward."
      },
      {
        question: "What is the pricing structure?",
        slug: "smartfirm-automation-pricing",
        answer: "Pricing is customized based on your firm size and specific requirements. Our QuickStart plan includes a one-time setup fee and monthly subscription with no long-term contract. Add-on services are priced individually. Contact us for a detailed quote tailored to your needs.",
        h1Override: "What is the pricing structure?",
        metaTitle: "SmartFirm.io Automation Pricing | SmartFirm.io",
        metaDescription: "SmartFirm.io automation pricing is customized to your firm size — includes a one-time setup fee and monthly subscription with no long-term contract.",
        firstSentence: "SmartFirm.io automation pricing is customized based on your firm size and specific requirements — a one-time setup fee and monthly subscription with no long-term contract."
      },
      {
        question: "Do you offer guarantees?",
        slug: "smartfirm-performance-guarantees",
        answer: "We stand behind our work with clear success metrics and ongoing support to ensure your satisfaction. We set specific KPIs for each engagement—whether that's lead volume, response times, or hours saved—and track progress monthly. If something isn't working, we adjust the approach.",
        h1Override: "Do you offer guarantees?",
        metaTitle: "SmartFirm.io Performance Guarantees | SmartFirm.io",
        metaDescription: "SmartFirm.io sets specific KPIs for each engagement — lead volume, conversion rates, or time savings — and stands behind our work with clear metrics.",
        firstSentence: "SmartFirm.io performance guarantees are built on clear success metrics — we set specific KPIs for each engagement, whether that's lead volume, conversion rates, or time savings."
      }
    ]
  },
  {
    category: "Industries We Serve",
    slug: "industries",
    questions: [
      {
        question: "Why does industry specialization matter for accounting firm marketing?",
        slug: "industry-specialization-for-accounting-firm-marketing",
        answer: "Industry specialization allows you to speak directly to your ideal clients' specific pain points and demonstrate deep expertise in their unique challenges, which commands premium pricing and builds faster trust. Professional services firms with clear specialization (https://explodingtopics.com/blog/customer-retention-rates) achieve 84% client retention rates compared to 60-70% for generalist small firms.",
        h1Override: "Why does industry specialization matter for accounting firm marketing?",
        metaTitle: "Industry Specialization for Accounting Firm | SmartFirm.io",
        metaDescription: "Industry specialization for accounting firm marketing lets you speak directly to ideal clients' pain points and demonstrate deep niche expertise.",
        firstSentence: "Industry specialization for accounting firm marketing allows you to speak directly to your ideal clients' specific pain points and demonstrate deep expertise in their challenges."
      },
      {
        question: "What if my firm serves multiple industries - can you still help?",
        slug: "multi-industry-marketing-for-accounting-firms",
        answer: "Yes, we can help you market to multiple industries by creating targeted messaging and content for each vertical while maintaining a cohesive brand. The key is to have dedicated landing pages and marketing materials for each industry rather than generic \"we serve everyone\" messaging.",
        h1Override: "What if my firm serves multiple industries - can you still help?",
        metaTitle: "Multi-Industry Marketing for Accounting Firms | SmartFirm.io",
        metaDescription: "Multi-industry marketing for accounting firms — we create targeted messaging for each vertical while maintaining a cohesive brand across your practice.",
        firstSentence: "Multi-industry marketing for accounting firms works by creating targeted messaging and content for each vertical while maintaining a cohesive brand across your practice."
      },
      {
        question: "How is marketing different for tax prep vs. bookkeeping vs. advisory?",
        slug: "marketing-by-service-type-for-accounting-firms",
        answer: "Tax prep marketing focuses on seasonal campaigns and year-round service expansion; bookkeeping marketing emphasizes recurring revenue and small business relationships; advisory marketing requires thought leadership content and premium positioning. Each requires different timing, messaging, and conversion strategies to attract the right clients.",
        h1Override: "How is marketing different for tax prep vs. bookkeeping vs. advisory?",
        metaTitle: "Marketing by Service Type for CPAs | SmartFirm.io",
        metaDescription: "Marketing by service type for accounting firms — tax prep focuses on seasonal campaigns, bookkeeping on recurring revenue, advisory on thought leadership.",
        firstSentence: "Marketing by service type for accounting firms varies significantly — tax prep focuses on seasonal campaigns, bookkeeping emphasizes recurring revenue, and advisory requires thought leadership."
      },
      {
        question: "Do you have experience with firms in my specific industry?",
        slug: "accounting-industry-marketing-specialist",
        answer: "We specialize exclusively in accounting, tax, bookkeeping, and business advisory firms, giving us deep expertise in your industry's unique marketing challenges, compliance requirements, and client acquisition strategies. Our tools and systems are built specifically for accounting professionals, not adapted from other industries.",
        h1Override: "Do you have experience with firms in my specific industry?",
        metaTitle: "Accounting Industry Marketing Specialist | SmartFirm.io",
        metaDescription: "SmartFirm.io specializes exclusively in accounting, tax, bookkeeping, and business advisory firms — giving us deep expertise in your specific challenges.",
        firstSentence: "SmartFirm.io specializes exclusively in accounting, tax, bookkeeping, and business advisory firms — giving us deep expertise in your industry's unique marketing and growth challenges."
      },
      {
        question: "Can I switch industries or add new specializations later?",
        slug: "add-specializations-to-accounting-firm",
        answer: "Absolutely - our systems are designed to grow and evolve with your firm. As you add new service lines or target new industries, we can create additional landing pages, content, and campaigns to support your expansion without disrupting your existing marketing.",
        h1Override: "Can I switch industries or add new specializations later?",
        metaTitle: "Add Specializations to Accounting Firm | SmartFirm.io",
        metaDescription: "Add specializations to your accounting firm anytime — our systems grow with your practice, creating new landing pages and workflows as you expand.",
        firstSentence: "Adding specializations to your accounting firm is built into our systems — as you add new service lines or target new industries, we create additional landing pages and workflows."
      }
    ]
  },
  {
    category: "Client Retention",
    slug: "client-retention",
    questions: [
      {
        question: "What's a good client retention rate for an accounting firm?",
        slug: "good-client-retention-rate-for-accounting-firms",
        answer: "Top-performing accounting firms achieve 90-96% client retention rates (https://www.cpajournal.com/2024/01/23/state-of-the-profession-3/), while the industry average ranges from 60-70% for small firms to 75-85% for larger firms. Even a 5% improvement in retention can significantly increase profitability, as acquiring new clients costs significantly more (https://futurefirm.co/accounting-client-retention-strategies-growing-firms/) than retaining existing ones.",
        h1Override: "What's a good client retention rate for an accounting firm?",
        metaTitle: "Good Client Retention Rate for CPAs | SmartFirm.io",
        metaDescription: "Good client retention rate for accounting firms is 90-96% for top performers — the industry average is lower. See how your firm compares.",
        firstSentence: "A good client retention rate for accounting firms is 90-96% — that's what top-performing practices achieve, while the industry average falls below that benchmark."
      },
      {
        question: "What are the most common reasons accounting firms lose clients?",
        slug: "why-accounting-firms-lose-clients",
        answer: "Poor communication and lack of proactive service are the leading causes of client churn, followed by pricing concerns and clients feeling undervalued. Research shows (https://futurefirm.co/accounting-client-retention-strategies-growing-firms/) that firms with systematic communication processes, regular check-ins, and automated touchpoints retain clients at much higher rates than those relying on ad-hoc interactions.",
        h1Override: "What are the most common reasons accounting firms lose clients?",
        metaTitle: "Why Accounting Firms Lose Clients | SmartFirm.io",
        metaDescription: "Accounting firms lose clients primarily due to poor communication and lack of proactive service, followed by pricing concerns and feeling undervalued.",
        firstSentence: "Why accounting firms lose clients comes down to poor communication and lack of proactive service — the leading causes of churn, ahead of pricing concerns."
      },
      {
        question: "How does automation help with client retention?",
        slug: "client-retention-automation-for-accounting-firms",
        answer: "Automation ensures consistent communication through scheduled touchpoints, newsletters, and satisfaction surveys that never get forgotten during busy seasons. Our High Level CRM system tracks client interactions, automates follow-ups, and identifies at-risk clients before they leave, allowing you to maintain relationships without manual effort.",
        h1Override: "How does automation help with client retention?",
        metaTitle: "Client Retention Automation for CPAs | SmartFirm.io",
        metaDescription: "Client retention automation for accounting firms ensures consistent touchpoints, newsletters, and surveys that never get forgotten during busy season.",
        firstSentence: "Client retention automation for accounting firms ensures consistent communication through scheduled touchpoints, newsletters, and satisfaction surveys — even during busy season."
      },
      {
        question: "Can client retention strategies work for firms with seasonal clients (like tax preparation)?",
        slug: "client-retention-for-seasonal-tax-firms",
        answer: "Yes, retention strategies are especially critical for seasonal firms - the key is maintaining year-round communication and offering complementary services during off-season months. Tax firms that develop year-round revenue streams (https://tax.thomsonreuters.com/blog/beyond-tax-season-creating-revenue-stability-year-round/) through bookkeeping, planning, or advisory services see more stable revenue and higher client lifetime value.",
        h1Override: "Can client retention strategies work for firms with seasonal clients (like tax preparation)?",
        metaTitle: "Client Retention for Seasonal Tax Firms | SmartFirm.io",
        metaDescription: "Client retention for seasonal tax firms requires year-round communication and complementary services that keep clients engaged between filing seasons.",
        firstSentence: "Client retention for seasonal tax firms is especially critical — the key is maintaining year-round communication and offering complementary services between filing seasons."
      },
      {
        question: "What's the ROI of investing in client retention vs. new client acquisition?",
        slug: "client-retention-roi-vs-acquisition-for-accountants",
        answer: "Client retention delivers significantly higher ROI because acquiring new clients costs 5-25x more than retaining existing ones (https://futurefirm.co/accounting-client-retention-strategies-growing-firms/), and existing clients are more likely to purchase additional services. Top accounting firms achieve 90-96% retention rates (https://www.cpajournal.com/2024/01/23/state-of-the-profession-3/), creating predictable revenue and reducing the constant pressure to find new clients.",
        h1Override: "What's the ROI of investing in client retention vs. new client acquisition?",
        metaTitle: "Client Retention ROI VS Acquisition for | SmartFirm.io",
        metaDescription: "Client retention ROI for accountants far exceeds acquisition — acquiring new clients costs 5-25x more than retaining existing ones.",
        firstSentence: "Client retention ROI vs acquisition for accountants is decisive — acquiring new clients costs 5-25x more than retaining existing ones, making retention your highest-leverage investment."
      },
      {
        question: "How often should I be communicating with clients to improve retention?",
        slug: "client-communication-frequency-for-accounting-firms",
        answer: "Best practices include monthly newsletters, quarterly check-ins, and annual strategic reviews, with additional touchpoints during tax season or relevant deadlines. Our automated systems ensure these communications happen consistently without manual effort, maintaining top-of-mind awareness year-round.",
        h1Override: "How often should I be communicating with clients to improve retention?",
        metaTitle: "Client Communication Frequency for | SmartFirm.io",
        metaDescription: "Client communication frequency for accounting firms — monthly newsletters, quarterly check-ins, annual reviews, plus seasonal touchpoints.",
        firstSentence: "Client communication frequency for accounting firms should include monthly newsletters, quarterly check-ins, and annual strategic reviews — with additional touchpoints during tax season."
      },
      {
        question: "What role does technology play in modern retention strategies?",
        slug: "technology-for-client-retention-in-accounting-firms",
        answer: "Technology enables consistent communication at scale, tracks client satisfaction in real-time, identifies at-risk clients before they leave, and automates upselling opportunities. Our High Level CRM integrates email marketing, SMS, client portals, and satisfaction tracking to create a comprehensive retention system that works 24/7.",
        h1Override: "What role does technology play in modern retention strategies?",
        metaTitle: "Technology for Client Retention in | SmartFirm.io",
        metaDescription: "Technology for client retention in accounting firms enables consistent communication at scale, real-time satisfaction tracking, and automated at-risk.",
        firstSentence: "Technology for client retention in accounting firms enables consistent communication at scale, tracks satisfaction in real-time, identifies at-risk clients before they leave, and automates re-engagement."
      },
      {
        question: "How do I measure the success of my retention efforts?",
        slug: "measure-client-retention-for-accounting-firms",
        answer: "Track your annual client retention rate, client lifetime value, revenue from existing clients vs. new clients, and satisfaction survey scores. Industry benchmarks show (https://www.vintti.com/blog/us-accounting-firms-a-study-on-client-retention-and-financial-health) small firms average 60-70% retention while top performers achieve 90%+, so measuring your progress against these standards helps identify improvement opportunities.",
        h1Override: "How do I measure the success of my retention efforts?",
        metaTitle: "Measure Client Retention for Accounting Firms | SmartFirm.io",
        metaDescription: "Measure client retention for accounting firms by tracking annual retention rate, lifetime value, revenue from existing vs. new clients, and satisfaction.",
        firstSentence: "Measure client retention for accounting firms by tracking your annual retention rate, client lifetime value, revenue from existing clients vs. new, and satisfaction survey scores."
      }
    ]
  },
  {
    category: "Scaling Your Firm",
    slug: "scale-firm",
    questions: [
      {
        question: "What's the biggest mistake accounting firms make when trying to scale?",
        slug: "biggest-scaling-mistake-for-accounting-firms",
        answer: "The biggest mistake is trying to scale by simply working more hours or hiring more people without first systematizing and automating core processes. Research from Caseware (https://www.caseware.com/us/resources/blog/scaling-without-burnout-how-automation-helps-firms-handle-growing-demands/) shows that firms using automation can expand capacity without scaling headcount, while those relying on manual processes hit capacity limits and experience team burnout.",
        h1Override: "What's the biggest mistake accounting firms make when trying to scale?",
        metaTitle: "Biggest Scaling Mistake for Accounting Firms | SmartFirm.io",
        metaDescription: "The biggest scaling mistake for accounting firms is adding hours or staff without first systematizing and automating core processes.",
        firstSentence: "The biggest scaling mistake for accounting firms is trying to grow by simply working more hours or hiring more people without first systematizing core processes."
      },
      {
        question: "How can I scale my firm without hiring more staff?",
        slug: "scale-accounting-firm-without-hiring",
        answer: "Automation is the key - by automating client onboarding, communication, data entry, and reporting, you can handle significantly more clients with your existing team. One audit firm reduced transaction testing time by 50%+ and cut financial statement reviews from 4-5 hours to just 10 minutes (https://www.caseware.com/us/resources/blog/scaling-without-burnout-how-automation-helps-firms-handle-growing-demands/) using automation tools, allowing them to take on more clients without adding staff.",
        h1Override: "How can I scale my firm without hiring more staff?",
        metaTitle: "Scale Accounting Firm without Hiring | SmartFirm.io",
        metaDescription: "Scale your accounting firm without hiring by automating client onboarding, communication, data entry, and reporting to handle more clients with existing.",
        firstSentence: "Scale your accounting firm without hiring by automating client onboarding, communication, data entry, and reporting — handle significantly more clients with your existing team."
      },
      {
        question: "At what point should an accounting firm start thinking about scaling?",
        slug: "when-to-scale-accounting-firm",
        answer: "Start thinking about scaling when you're consistently at 80%+ capacity, turning away good clients, or your team is working excessive hours during peak seasons. The best time to implement scaling systems is before you desperately need them, as building infrastructure during a crisis leads to poor decisions and rushed implementations.",
        h1Override: "At what point should an accounting firm start thinking about scaling?",
        metaTitle: "When to Scale Accounting Firm | SmartFirm.io",
        metaDescription: "Know when to scale your accounting firm — signs include 80%+ capacity, turning away good clients, or excessive hours during peak season.",
        firstSentence: "When to scale your accounting firm becomes clear when you're consistently at 80%+ capacity, turning away good clients, or working excessive hours during peak season."
      },
      {
        question: "What systems need to be in place before I can scale successfully?",
        slug: "systems-needed-to-scale-accounting-firm",
        answer: "You need standardized client onboarding, automated communication workflows, documented processes for common tasks, and practice management software that tracks capacity and performance. Our QuickStart plan includes High Level CRM, Google Business Profile optimization, and automated marketing systems that create the foundation for sustainable scaling.",
        h1Override: "What systems need to be in place before I can scale successfully?",
        metaTitle: "Systems Needed to Scale Accounting Firm | SmartFirm.io",
        metaDescription: "Systems needed to scale your accounting firm — standardized onboarding, automated communication, documented processes, and practice management software.",
        firstSentence: "Systems needed to scale your accounting firm include standardized client onboarding, automated communication workflows, documented processes, and practice management software that tracks everything."
      },
      {
        question: "What are \"growing pains\" and how do I know if my firm is experiencing them?",
        slug: "growing-pains-in-accounting-firms",
        answer: "Growing pains include quality control issues, overwhelmed staff, missed deadlines, client complaints, and systems breaking down under increased volume. If you're turning away good clients because you lack capacity, working excessive hours, or experiencing more errors and rework, these are clear signs of growing pains.",
        h1Override: "What are \"growing pains\" and how do I know if my firm is experiencing them?",
        metaTitle: "Growing Pains in Accounting Firms | SmartFirm.io",
        metaDescription: "Growing pains in accounting firms include quality issues, overwhelmed staff, missed deadlines, and systems breaking under increased volume.",
        firstSentence: "Growing pains in accounting firms show up as quality control issues, overwhelmed staff, missed deadlines, client complaints, and systems breaking down under increased volume."
      },
      {
        question: "How can I grow my firm without sacrificing quality or burning out my team?",
        slug: "grow-accounting-firm-without-burnout",
        answer: "Build scalable systems before you need them - standardize processes, implement automation for routine tasks, and create quality control checkpoints that work regardless of volume. Firms using automation (https://www.caseware.com/us/resources/blog/scaling-without-burnout-how-automation-helps-firms-handle-growing-demands/) can expand capacity without scaling headcount by eliminating repetitive work and freeing staff for higher-value tasks.",
        h1Override: "How can I grow my firm without sacrificing quality or burning out my team?",
        metaTitle: "Grow Accounting Firm without Burnout | SmartFirm.io",
        metaDescription: "Grow your accounting firm without burnout — standardize processes, implement automation for routine tasks, and build quality controls that scale.",
        firstSentence: "Grow your accounting firm without burnout by building scalable systems before you need them — standardize processes, automate routine tasks, and create quality control checkpoints."
      },
      {
        question: "What's the difference between growth and scaling?",
        slug: "growth-vs-scaling-for-accounting-firms",
        answer: "Growth means increasing revenue by adding more resources (people, hours, expenses), while scaling means increasing revenue without proportionally increasing costs. Scaling is more profitable because you're leveraging technology and systems rather than just trading more time for more money.",
        h1Override: "What's the difference between growth and scaling?",
        metaTitle: "Growth VS Scaling for Accounting Firms | SmartFirm.io",
        metaDescription: "Growth vs scaling for accounting firms — growth adds revenue by adding resources; scaling adds revenue without proportionally increasing costs.",
        firstSentence: "Growth vs scaling for accounting firms is an important distinction — growth means adding revenue by adding resources, while scaling means adding revenue without proportionally increasing costs."
      },
      {
        question: "How do I know when my firm is ready to grow?",
        slug: "is-my-accounting-firm-ready-to-grow",
        answer: "Your firm is ready to grow when you have documented processes, consistent service delivery, strong client retention (85%+), and some automation in place. Growing before these foundations are solid typically leads to chaos, quality issues, and team burnout rather than sustainable expansion.",
        h1Override: "How do I know when my firm is ready to grow?",
        metaTitle: "Is my Accounting Firm Ready to Grow | SmartFirm.io",
        metaDescription: "Is your accounting firm ready to grow? Key indicators include documented processes, consistent service delivery, 85%+ retention, and automation in place.",
        firstSentence: "Your accounting firm is ready to grow when you have documented processes, consistent service delivery, strong client retention (85%+), and some automation in place."
      }
    ]
  },
  {
    category: "Work Less, Earn More",
    slug: "work-less-earn-more",
    questions: [
      {
        question: "Is it really possible to work less and earn more as a CPA?",
        slug: "work-less-earn-more-as-cpa",
        answer: "Yes, by shifting from hourly billing to value-based pricing and automating routine tasks, many CPAs increase revenue while reducing hours. Firms implementing automation (https://www.caseware.com/us/resources/blog/scaling-without-burnout-how-automation-helps-firms-handle-growing-demands/) report 50%+ time savings on routine tasks, freeing up capacity for higher-value advisory services that command premium rates.",
        h1Override: "Is it really possible to work less and earn more as a CPA?",
        metaTitle: "Work Less Earn More as CPA | SmartFirm.io",
        metaDescription: "Work less, earn more as a CPA is achievable — shift to value-based pricing and automate routine tasks to increase revenue while reducing hours.",
        firstSentence: "Work less, earn more as a CPA is absolutely possible — shift from hourly billing to value-based pricing and automate routine tasks to increase revenue while reducing your hours."
      },
      {
        question: "What types of tasks can be automated in an accounting firm?",
        slug: "what-to-automate-in-accounting-firm",
        answer: "Client onboarding, appointment scheduling, email follow-ups, invoice reminders, review requests, social media posting, and routine reporting can all be automated. Our High Level CRM platform handles these tasks 24/7, allowing you to focus on client relationships and strategic work that actually requires your expertise.",
        h1Override: "What types of tasks can be automated in an accounting firm?",
        metaTitle: "What to Automate in Accounting Firm | SmartFirm.io",
        metaDescription: "What to automate in your accounting firm — client onboarding, scheduling, email follow-ups, invoice reminders, review requests, social media, and.",
        firstSentence: "What to automate in your accounting firm includes client onboarding, appointment scheduling, email follow-ups, invoice reminders, review requests, social media posting, and routine reporting."
      },
      {
        question: "How do I transition to value-based pricing from hourly billing?",
        slug: "value-based-pricing-for-accounting-firms",
        answer: "Start by packaging your services into fixed-fee offerings based on client outcomes rather than hours worked, then communicate the value and results clients receive. This transition typically happens gradually, starting with new clients or new service offerings, and allows you to increase revenue without increasing hours.",
        h1Override: "How do I transition to value-based pricing from hourly billing?",
        metaTitle: "Value-Based Pricing for Accounting Firms | SmartFirm.io",
        metaDescription: "Value-based pricing for accounting firms — package services into fixed-fee offerings based on client outcomes rather than hours worked.",
        firstSentence: "Value-based pricing for accounting firms starts by packaging your services into fixed-fee offerings based on client outcomes — then communicating the value and results clients receive."
      },
      {
        question: "Won't automation make my services feel less personal to clients?",
        slug: "does-automation-feel-impersonal-for-accounting-clients",
        answer: "Actually, automation enables more personalization by ensuring timely, consistent communication and freeing you to focus on high-touch interactions that matter most. Clients appreciate prompt responses, regular updates, and proactive outreach - all of which automation makes possible without requiring you to manually manage every touchpoint.",
        h1Override: "Won't automation make my services feel less personal to clients?",
        metaTitle: "Does Automation Feel Impersonal for | SmartFirm.io",
        metaDescription: "Automation actually enables more personalization for accounting clients — consistent, timely communication frees you for the high-touch interactions that.",
        firstSentence: "Does automation feel impersonal for accounting clients? Actually, it enables more personalization — ensuring timely, consistent communication and freeing you for high-touch interactions."
      }
    ]
  },
  {
    category: "Competing with Tech-Savvy Firms",
    slug: "stop-losing-clients-tech-savvy",
    questions: [
      {
        question: "What technology do I need to compete with tech-savvy CPA firms?",
        slug: "technology-stack-for-competitive-cpa-firms",
        answer: "At minimum, you need a professional website with SEO optimization, a CRM system for client management, automated communication tools, and a client portal for document sharing. Our QuickStart plan includes High Level CRM, Google Business Profile optimization, Google Analytics, and website development to give you a modern tech stack without overwhelming complexity.",
        h1Override: "What technology do I need to compete with tech-savvy CPA firms?",
        metaTitle: "Technology Stack for Competitive CPA Firms | SmartFirm.io",
        metaDescription: "Essential technology for competitive CPA firms — professional website with SEO, CRM, automated communication tools, and a client portal at minimum.",
        firstSentence: "The technology stack for competitive CPA firms includes at minimum a professional website with SEO, a CRM system, automated communication tools, and a client portal for document sharing."
      },
      {
        question: "How much does it cost to modernize my accounting firm's technology?",
        slug: "cost-to-modernize-accounting-firm-technology",
        answer: "Our QuickStart plan includes a one-time setup fee and a monthly subscription with no long-term contract, making modernization affordable and risk-free. The investment typically pays for itself quickly - firms adopting automation see average revenue increases of 21.3% and profit increases of 25% (https://tax.thomsonreuters.com/blog/beyond-tax-season-creating-revenue-stability-year-round/) within the first year.",
        h1Override: "How much does it cost to modernize my accounting firm's technology?",
        metaTitle: "Cost to Modernize Accounting Firm Technology | SmartFirm.io",
        metaDescription: "Cost to modernize accounting firm technology — SmartFirm.io's QuickStart includes a one-time setup fee and monthly subscription, no long-term contract.",
        firstSentence: "The cost to modernize your accounting firm's technology is manageable — SmartFirm.io's QuickStart plan includes a one-time setup fee and monthly subscription with no long-term contract."
      },
      {
        question: "Will my existing clients care if I adopt new technology?",
        slug: "client-reaction-to-accounting-firm-technology-upgrades",
        answer: "Yes, they'll appreciate it - modern clients expect professional systems, fast responses, and convenient communication options. Upgrading your technology demonstrates that you're keeping pace with industry changes and investing in better service delivery, which builds confidence and trust.",
        h1Override: "Will my existing clients care if I adopt new technology?",
        metaTitle: "Client Reaction to Accounting Firm | SmartFirm.io",
        metaDescription: "Will CPA clients value modern systems? Yes — they expect professional technology, fast responses, and convenient communication options from their.",
        firstSentence: "Existing CPA clients will appreciate modern technology — they expect professional systems, fast responses, and convenient communication options, and upgrading demonstrates you value their time."
      },
      {
        question: "How long does it take to implement modern systems in my practice?",
        slug: "accounting-firm-modernization-timeline",
        answer: "Our QuickStart plan delivers a new or updated website within 14 days and has basic automation systems operational within 30 days. Full implementation and optimization typically takes 60-90 days as we customize workflows to your specific practice needs and train your team on the new systems.",
        h1Override: "How long does it take to implement modern systems in my practice?",
        metaTitle: "Accounting Firm Modernization Timeline | SmartFirm.io",
        metaDescription: "Accounting firm modernization timeline — new website in 14 days, basic automation in 30 days, full implementation and optimization in 60-90 days.",
        firstSentence: "Accounting firm modernization timeline with SmartFirm.io — a new or updated website within 14 days, basic automation operational within 30 days, and full implementation in 60-90 days."
      }
    ]
  },
  {
    category: "Referrals & Reviews",
    slug: "referrals-reviews",
    questions: [
      {
        question: "Why is asking for referrals uncomfortable, and how can I avoid it?",
        slug: "automated-referral-system-for-accountants",
        answer: "Most CPAs feel uncomfortable asking for referrals because it feels pushy or sales-oriented, which conflicts with their professional identity. Instead of asking, create systems that naturally generate referrals through exceptional service, automated review requests, and content that makes you easy to recommend.",
        h1Override: "Why is asking for referrals uncomfortable, and how can I avoid it?",
        metaTitle: "Automated Referral System for Accountants | SmartFirm.io",
        metaDescription: "An automated referral system for accountants replaces awkward asks with systematic triggers that identify happy clients and create natural sharing moments.",
        firstSentence: "Automated referral systems for accountants replace the uncomfortable ask with systematic triggers — identifying happy clients and creating natural opportunities to share."
      },
      {
        question: "What's the conversion rate for referrals vs. other marketing channels?",
        slug: "referral-conversion-rate-for-accounting-firms",
        answer: "Referrals convert at 25.56% (https://focus-digital.co/average-sales-call-conversion-rate-by-industry/), making them the strongest acquisition channel, and deliver 3-5x higher conversion rates (https://blog.propellocloud.com/referral-marketing-statistics) than other marketing methods. 76% of CPAs identify word-of-mouth as their most important marketing technique (https://www.cpajournal.com/2025/04/28/digital-marketing-resources-for-cpas/), and 88% of consumers trust recommendations from people they know (https://www.investopedia.com/terms/w/word-of-mouth-marketing.asp) more than any other source.",
        h1Override: "What's the conversion rate for referrals vs. other marketing channels?",
        metaTitle: "Referral Conversion Rate for Accounting Firms | SmartFirm.io",
        metaDescription: "Referral conversion rates for accounting firms average 25.56% — making referrals the strongest acquisition channel for CPA practices.",
        firstSentence: "Referral conversion rates for accounting firms average 25.56%, making referrals the strongest client acquisition channel for CPA practices by a wide margin."
      },
      {
        question: "How do automated referral systems work without being pushy?",
        slug: "non-pushy-referral-automation-for-accountants",
        answer: "Automated systems identify your happiest clients through satisfaction tracking, then create natural opportunities for them to share their experience through review requests, social proof, and shareable content. The system works in the background by maintaining top-of-mind awareness and making it easy for satisfied clients to recommend you when opportunities arise organically.",
        h1Override: "How do automated referral systems work without being pushy?",
        metaTitle: "Non-Pushy Referral Automation for Accountants | SmartFirm.io",
        metaDescription: "Non-pushy referral automation for accountants identifies your happiest clients through satisfaction tracking, then creates natural sharing opportunities.",
        firstSentence: "Non-pushy referral automation for accountants works by identifying your happiest clients through satisfaction tracking — then creating natural opportunities for them to share their experience."
      },
      {
        question: "How long does it take to build a referral generation system?",
        slug: "referral-generation-system-for-accounting-firms",
        answer: "Basic referral systems can be implemented within 30-60 days, including review generation automation, client satisfaction tracking, and referral-worthy content creation. One accounting firm reported that referral activity accounted for 40% of their total wins (https://accountingmarketing.org/business-development-leveraging-referral-tracking-to-elevate-your-client-experience/) after implementing systematic referral tracking and nurturing.",
        h1Override: "How long does it take to build a referral generation system?",
        metaTitle: "Referral Generation System for CPAs | SmartFirm.io",
        metaDescription: "Referral generation system for accounting firms — basic systems implemented in 30-60 days including review automation and satisfaction tracking.",
        firstSentence: "A referral generation system for accounting firms can be implemented within 30-60 days — including review generation automation, client satisfaction tracking, and referral-worthy content."
      },
      {
        question: "How does the review request system know when to ask clients?",
        slug: "automated-review-request-timing-for-cpas",
        answer: "We integrate with your practice management software to detect service completion triggers (tax return filed, advisory project closed, monthly bookkeeping completed). The system automatically sends review requests 2-3 days after completion—when satisfaction is highest.",
        h1Override: "How does the review request system know when to ask clients?",
        metaTitle: "Automated Review Request Timing for CPAs | SmartFirm.io",
        metaDescription: "Automated review request timing for CPAs integrates with your practice management software to detect service completions and request reviews automatically.",
        firstSentence: "Automated review request timing for CPAs works by integrating with your practice management software — detecting when a tax return is filed, project is closed, or bookkeeping cycle completes."
      },
      {
        question: "What if a client leaves a negative review?",
        slug: "respond-to-negative-reviews-for-accounting-firms",
        answer: "Our monitoring system alerts you immediately (email + SMS). We provide response templates for addressing concerns professionally and offer to help resolve issues offline. Most negative reviews can be resolved or mitigated with a thoughtful, timely response.",
        h1Override: "What if a client leaves a negative review?",
        metaTitle: "Respond to Negative Reviews for CPAs | SmartFirm.io",
        metaDescription: "Respond to negative reviews for accounting firms — instant alerts via email and SMS, professional response templates, and resolution support.",
        firstSentence: "Responding to negative reviews for accounting firms starts with instant alerts — our monitoring system notifies you by email and SMS, with professional response templates ready to go."
      },
      {
        question: "Will clients get annoyed by review requests?",
        slug: "non-intrusive-review-requests-for-accounting-firms",
        answer: "No. We send one request per service completion, with a polite reminder 7 days later if they don't respond. Clients who've already left a review are automatically excluded from future requests. Our approach is respectful and non-pushy.",
        h1Override: "Will clients get annoyed by review requests?",
        metaTitle: "Non-Intrusive Review Requests for CPAs | SmartFirm.io",
        metaDescription: "Non-intrusive review requests for accounting firms — one request per service completion, a polite reminder after 7 days, and automatic exclusions.",
        firstSentence: "Non-intrusive review requests for accounting firms mean one request per service completion, with a polite reminder 7 days later — clients who've already reviewed are excluded."
      },
      {
        question: "Which review platforms should I focus on?",
        slug: "best-review-platforms-for-accounting-firms",
        answer: "Google is the priority (90% of prospects check Google reviews first). We also request reviews on Facebook and industry-specific platforms if relevant. You can customize which platforms to prioritize based on where your prospects look. We recommend 30+ Google reviews as a minimum baseline, 50+ to be competitive, and 100+ to dominate your local market.",
        h1Override: "Which review platforms should I focus on?",
        metaTitle: "Best Review Platforms for Accounting Firms | SmartFirm.io",
        metaDescription: "Best review platforms for accounting firms — Google is priority (90% of prospects check it first), plus Facebook and industry-specific platforms.",
        firstSentence: "The best review platforms for accounting firms start with Google — 90% of prospects check Google reviews first — plus Facebook and industry-specific platforms where relevant."
      }
    ]
  },
  {
    category: "Protect Your Practice",
    slug: "protect-practice-future",
    questions: [
      {
        question: "What are the biggest threats to accounting firms today?",
        slug: "biggest-threats-to-accounting-firms",
        answer: "The biggest threats include cybersecurity breaches (which can destroy client trust and create liability), technology disruption from AI and automation, regulatory changes, and competition from tech-enabled firms. Firms that proactively adopt modern technology (https://tax.thomsonreuters.com/blog/beyond-tax-season-creating-revenue-stability-year-round/) are better positioned to handle these threats and turn them into competitive advantages.",
        h1Override: "What are the biggest threats to accounting firms today?",
        metaTitle: "Biggest Threats to Accounting Firms | SmartFirm.io",
        metaDescription: "Biggest threats to accounting firms include cybersecurity breaches, AI disruption, regulatory changes, talent shortages, and commoditization of services.",
        firstSentence: "The biggest threats to accounting firms today include cybersecurity breaches, technology disruption from AI and automation, regulatory changes, talent shortages, and service commoditization."
      },
      {
        question: "Do I really need cybersecurity if I'm a small firm?",
        slug: "cybersecurity-for-small-accounting-firms",
        answer: "Yes - small firms are increasingly targeted by cybercriminals because they often have weaker security than larger firms while still holding valuable client data. A single data breach can destroy your reputation, create legal liability, and violate client confidentiality, making cybersecurity essential regardless of firm size.",
        h1Override: "Do I really need cybersecurity if I'm a small firm?",
        metaTitle: "Cybersecurity for Small Accounting Firms | SmartFirm.io",
        metaDescription: "Cybersecurity for small accounting firms is essential — small firms are increasingly targeted because they hold valuable client data with weaker security.",
        firstSentence: "Cybersecurity for small accounting firms is not optional — small firms are increasingly targeted by cybercriminals because they hold valuable client data with often weaker security."
      },
      {
        question: "How do I future-proof my practice against AI and automation?",
        slug: "future-proof-accounting-practice-against-ai",
        answer: "Embrace AI and automation as tools that enhance your services rather than threats to avoid - use them to handle routine tasks while you focus on advisory services that require human judgment and relationship skills. Firms adopting AI-enabled technology (https://tax.thomsonreuters.com/blog/beyond-tax-season-creating-revenue-stability-year-round/) saw 21.3% revenue increases and 25% profit increases by shifting from compliance work to higher-value strategic services.",
        h1Override: "How do I future-proof my practice against AI and automation?",
        metaTitle: "Future-Proof Accounting Practice Against AI | SmartFirm.io",
        metaDescription: "Future-proof your accounting practice against AI by embracing it as a tool — automate routine tasks while focusing on advisory and relationship services.",
        firstSentence: "Future-proof your accounting practice against AI by embracing automation as a tool that enhances your services — handle routine tasks while you focus on advisory and relationship work."
      },
      {
        question: "What should be included in a business continuity plan for CPAs?",
        slug: "business-continuity-plan-for-cpa-firms",
        answer: "A solid business continuity plan includes data backup and recovery systems, cloud-based access to critical files, documented processes for key tasks, communication protocols for emergencies, and cybersecurity measures. Our QuickStart plan includes cloud-based systems and automated backups to ensure your practice can continue operating even during disruptions.",
        h1Override: "What should be included in a business continuity plan for CPAs?",
        metaTitle: "Business Continuity Plan for CPA Firms | SmartFirm.io",
        metaDescription: "Business continuity plan for CPA firms should include data backup, cloud access, documented processes, communication plans, and succession protocols.",
        firstSentence: "A business continuity plan for CPA firms should include data backup and recovery systems, cloud-based access to critical files, documented processes, communication plans, and succession protocols."
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
        answer: "Expand into year-round services like bookkeeping, payroll, tax planning, and business advisory that complement your tax preparation expertise. Thomson Reuters research shows (https://tax.thomsonreuters.com/blog/beyond-tax-season-creating-revenue-stability-year-round/) that firms developing year-round revenue streams reduce stress, improve income stability, and achieve higher profitability than those relying solely on seasonal tax work.",
        h1Override: "How can I generate revenue outside of tax season?",
        metaTitle: "Generate Revenue Outside Tax Season | SmartFirm.io",
        metaDescription: "Generate revenue outside tax season by expanding into bookkeeping, payroll, tax planning, and business advisory services that run year-round.",
        firstSentence: "Generate revenue outside tax season by expanding into year-round services like bookkeeping, payroll, tax planning, and business advisory — complementing your tax preparation expertise."
      },
      {
        question: "When should I start marketing for the upcoming tax season?",
        slug: "tax-season-marketing-timeline-for-cpas",
        answer: "Begin marketing 3-4 months before tax season (October-November) to capture early planners, with peak campaigns running December-February. However, the most successful tax firms market year-round by offering tax planning, quarterly services, and educational content that keeps them top-of-mind even during off-season months.",
        h1Override: "When should I start marketing for the upcoming tax season?",
        metaTitle: "Tax Season Marketing Timeline for CPAs | SmartFirm.io",
        metaDescription: "Tax season marketing timeline — start 3-4 months before (October-November), peak campaigns December-February, and build year-round presence.",
        firstSentence: "Tax season marketing should start 3-4 months before (October-November) to capture early planners, with peak campaigns running December-February."
      },
      {
        question: "How do I compete with TurboTax and other DIY tax software?",
        slug: "compete-with-turbotax-as-a-cpa",
        answer: "Position your value as personalized expertise, tax planning (not just preparation), audit protection, and year-round support that software can't provide. Focus on attracting clients with complex situations, business income, or multiple income sources who need professional guidance rather than competing on price with DIY solutions.",
        h1Override: "How do I compete with TurboTax and other DIY tax software?",
        metaTitle: "Compete with Turbotax as a CPA | SmartFirm.io",
        metaDescription: "Compete with TurboTax as a CPA by positioning your value as personalized expertise, tax planning, audit protection, and year-round support.",
        firstSentence: "Compete with TurboTax as a CPA by positioning your value as personalized expertise, tax planning (not just preparation), audit protection, and year-round support that software can't provide."
      },
      {
        question: "What marketing strategies work best for attracting tax clients?",
        slug: "marketing-to-attract-tax-clients",
        answer: "Local SEO and Google Business Profile optimization are critical since most people search \"tax preparer near me,\" combined with review generation to build trust. 76% of CPAs identify word-of-mouth (https://www.cpajournal.com/2025/04/28/digital-marketing-resources-for-cpas/) as their most important marketing technique, making referral systems and client satisfaction essential for sustainable growth.",
        h1Override: "What marketing strategies work best for attracting tax clients?",
        metaTitle: "Marketing to Attract Tax Clients | SmartFirm.io",
        metaDescription: "Marketing to attract tax clients starts with local SEO and Google Business Profile optimization — most prospects search \"tax preparer near me.\"",
        firstSentence: "Marketing to attract tax clients starts with local SEO and Google Business Profile optimization, since most people search \"tax preparer near me\" when looking for help."
      }
    ]
  },
  {
    category: "Bookkeeping Services Marketing",
    slug: "bookkeeping-services",
    questions: [
      {
        question: "How do I differentiate my bookkeeping services from low-cost competitors?",
        slug: "differentiate-bookkeeping-from-low-cost-competitors",
        answer: "Position yourself as a strategic financial partner who provides insights and business guidance, not just data entry. Emphasize your expertise in specific industries, your proactive communication, and the true cost of bookkeeping errors that cheap providers often make.",
        h1Override: "How do I differentiate my bookkeeping services from low-cost competitors?",
        metaTitle: "Differentiate Bookkeeping from Low-Cost | SmartFirm.io",
        metaDescription: "Differentiate your bookkeeping from low-cost competitors by positioning as a strategic financial partner who provides insights, not just data entry.",
        firstSentence: "Differentiate your bookkeeping from low-cost competitors by positioning yourself as a strategic financial partner who provides insights and business guidance — not just data entry."
      },
      {
        question: "What's the best way to attract small business clients for bookkeeping?",
        slug: "attract-small-business-bookkeeping-clients",
        answer: "Focus on local SEO, Google Business Profile optimization, and industry-specific content that demonstrates expertise in your target clients' challenges. Partner with complementary service providers (business attorneys, financial advisors, commercial lenders) who can refer clients needing ongoing bookkeeping support.",
        h1Override: "What's the best way to attract small business clients for bookkeeping?",
        metaTitle: "Attract Small Business Bookkeeping Clients | SmartFirm.io",
        metaDescription: "Attract small business bookkeeping clients with local SEO, Google Business Profile optimization, and industry-specific content that demonstrates expertise.",
        firstSentence: "Attract small business bookkeeping clients through local SEO, Google Business Profile optimization, and industry-specific content that demonstrates deep expertise in their challenges."
      },
      {
        question: "How can I build predictable recurring revenue with bookkeeping services?",
        slug: "recurring-revenue-for-bookkeeping-firms",
        answer: "Package your bookkeeping services as fixed monthly fees rather than hourly billing, which creates predictable income for both you and your clients. Bookkeeping firms with strong recurring revenue models (https://www.thesuccessfulbookkeeper.com/episodes/43) can be valued at $2 for every dollar of recurring revenue, making this approach both profitable and valuable for eventual exit.",
        h1Override: "How can I build predictable recurring revenue with bookkeeping services?",
        metaTitle: "Recurring Revenue for Bookkeeping Firms | SmartFirm.io",
        metaDescription: "Recurring revenue for bookkeeping firms comes from fixed monthly fee packages — predictable income for you and your clients, plus higher lifetime value.",
        firstSentence: "Recurring revenue for bookkeeping firms starts with packaging your services as fixed monthly fees rather than hourly billing — creating predictable income for both you and your clients."
      },
      {
        question: "Should I focus on a specific industry niche for my bookkeeping practice?",
        slug: "industry-niche-for-bookkeeping-practice",
        answer: "Yes - industry specialization allows you to develop deep expertise, create industry-specific processes and templates, and command premium pricing. Firms with clear specialization achieve 84% client retention rates (https://explodingtopics.com/blog/customer-retention-rates) compared to 60-70% for generalist small firms, and can market more effectively by speaking directly to specific pain points.",
        h1Override: "Should I focus on a specific industry niche for my bookkeeping practice?",
        metaTitle: "Industry Niche for Bookkeeping Practice | SmartFirm.io",
        metaDescription: "Industry niche for bookkeeping practice — specialization lets you develop deep expertise, create industry-specific templates, and command premium pricing.",
        firstSentence: "Choosing an industry niche for your bookkeeping practice lets you develop deep expertise, create industry-specific processes and templates, and command premium pricing."
      }
    ]
  },
  {
    category: "Business Advisory Marketing",
    slug: "business-advisory",
    questions: [
      {
        question: "How do I position myself as a business advisor, not just an accountant?",
        slug: "position-cpa-as-business-advisor",
        answer: "Create thought leadership content (articles, videos, webinars) that demonstrates strategic thinking beyond numbers, and shift conversations from compliance to business outcomes. Focus on business growth, profitability improvement, and strategic planning rather than just tax returns and financial statements.",
        h1Override: "How do I position myself as a business advisor, not just an accountant?",
        metaTitle: "Position CPA as Business Advisor | SmartFirm.io",
        metaDescription: "Position yourself as a CPA business advisor by creating thought leadership content and shifting conversations from compliance to strategic value.",
        firstSentence: "Positioning yourself as a CPA business advisor starts with thought leadership content that demonstrates strategic thinking beyond numbers — and shifting client conversations from compliance to outcomes."
      },
      {
        question: "What's the typical pricing for business advisory services?",
        slug: "business-advisory-pricing-for-accountants",
        answer: "Advisory services typically command premium pricing ranging from $200-500+ per hour or $2,000-10,000+ for project-based engagements, depending on firm expertise and client size. Value-based pricing (based on client outcomes rather than hours) often generates even higher fees for transformational advisory work.",
        h1Override: "What's the typical pricing for business advisory services?",
        metaTitle: "Business Advisory Pricing for Accountants | SmartFirm.io",
        metaDescription: "Business advisory pricing for accountants ranges from $200-500+/hour or $2,000-10,000+ per project, depending on expertise and engagement scope.",
        firstSentence: "Business advisory pricing for accountants typically commands premium rates — $200-500+ per hour or $2,000-10,000+ for project-based engagements, depending on firm expertise and scope."
      },
      {
        question: "How long does it take to establish thought leadership in my market?",
        slug: "thought-leadership-timeline-for-accounting-firms",
        answer: "Building recognized thought leadership typically takes 6-12 months of consistent content creation, speaking opportunities, and strategic networking. The key is consistency - regular blog posts, LinkedIn activity, local speaking engagements, and participation in industry associations that demonstrate expertise over time.",
        h1Override: "How long does it take to establish thought leadership in my market?",
        metaTitle: "Thought Leadership Timeline for CPAs | SmartFirm.io",
        metaDescription: "Thought leadership timeline for accounting firms — 6-12 months of consistent content, speaking opportunities, and strategic networking.",
        firstSentence: "Building thought leadership for accounting firms typically takes 6-12 months of consistent content creation, speaking opportunities, and strategic networking."
      },
      {
        question: "What content should I create to attract advisory clients?",
        slug: "content-to-attract-advisory-clients-for-cpas",
        answer: "Create content that addresses business challenges your ideal clients face: cash flow management, growth strategies, profitability improvement, succession planning, and strategic decision-making. Case studies showing measurable business outcomes are particularly effective, as they demonstrate the ROI of advisory services and build credibility.",
        h1Override: "What content should I create to attract advisory clients?",
        metaTitle: "Content to Attract Advisory Clients for CPAs | SmartFirm.io",
        metaDescription: "Content to attract advisory clients for CPAs should address business challenges — cash flow, growth strategies, profitability, and succession planning.",
        firstSentence: "Content to attract advisory clients for CPAs should address the business challenges your ideal clients face — cash flow management, growth strategies, profitability, and succession planning."
      }
    ]
  },
  {
    category: "Client Onboarding Automation",
    slug: "client-onboarding",
    questions: [
      {
        question: "How long does it take to implement client onboarding automation?",
        slug: "client-onboarding-automation-timeline-for-accounting-firms",
        answer: "Most firms are fully operational within 2-3 weeks. Week 1: We audit your current onboarding process and configure the platform. Week 2: We build your custom templates, forms, and workflows. Week 3: Testing, team training, and go-live. You'll start saving time immediately once the system is active.",
        h1Override: "How long does it take to implement client onboarding automation?",
        metaTitle: "Client Onboarding Automation Timeline for | SmartFirm.io",
        metaDescription: "Client onboarding automation for accounting firms goes live in 2-3 weeks — audit, configuration, custom workflow build, testing, and team training.",
        firstSentence: "Client onboarding automation for accounting firms is fully operational within 2-3 weeks — Week 1 for audit and configuration, Week 2 for workflow build, and Week 3 for testing and launch."
      },
      {
        question: "Will onboarding automation work with my existing practice management software?",
        slug: "onboarding-automation-with-practice-management-software",
        answer: "Yes. We integrate with all major practice management platforms including Karbon, Canopy, Financial Cents, Jetpack Workflow, and others. If your software has an API, we can connect it. This means no double data entry—client information flows automatically between systems.",
        h1Override: "Will onboarding automation work with my existing practice management software?",
        metaTitle: "Onboarding Automation with Practice | SmartFirm.io",
        metaDescription: "Onboarding automation integrates with Karbon, Canopy, Financial Cents, Jetpack Workflow, and other major CPA practice management platforms.",
        firstSentence: "Onboarding automation with practice management software works seamlessly — we integrate with Karbon, Canopy, Financial Cents, Jetpack Workflow, and other major platforms."
      },
      {
        question: "Can I customize the intake forms for different service types?",
        slug: "custom-client-intake-forms-for-accounting-firms",
        answer: "Absolutely. You can create different onboarding paths for tax clients, bookkeeping clients, advisory clients, and any other service type. Each path can have unique intake forms, document checklists, and welcome sequences tailored to that service's specific requirements.",
        h1Override: "Can I customize the intake forms for different service types?",
        metaTitle: "Custom Client Intake Forms for CPAs | SmartFirm.io",
        metaDescription: "Custom client intake forms for accounting firms — create different onboarding paths for tax, bookkeeping, advisory, and any other service type.",
        firstSentence: "Custom client intake forms for accounting firms let you create different onboarding paths for tax clients, bookkeeping clients, advisory clients, and any other service type."
      },
      {
        question: "What happens if a client doesn't complete their onboarding steps?",
        slug: "automated-onboarding-reminders-for-accounting-firms",
        answer: "The system automatically sends reminder emails at intervals you define (e.g., 3 days, 7 days, 14 days). You can add SMS reminders for urgency. Your team receives dashboard alerts showing which clients have stalled so you can personally intervene when needed—but 85% of reminders are handled automatically.",
        h1Override: "What happens if a client doesn't complete their onboarding steps?",
        metaTitle: "Automated Onboarding Reminders for | SmartFirm.io",
        metaDescription: "Automated onboarding reminders for accounting firms — emails at defined intervals plus SMS options, with your team notified if clients stall.",
        firstSentence: "Automated onboarding reminders for accounting firms trigger at intervals you define — 3 days, 7 days, 14 days — with SMS options for urgency and team alerts for stalled clients."
      },
      {
        question: "Is the document collection portal secure?",
        slug: "secure-document-portal-for-accounting-firms",
        answer: "Yes. Our document portal uses bank-level 256-bit SSL encryption, SOC 2 compliant hosting, and secure access controls. Clients can only access their own documents, and all data is backed up automatically. This is significantly more secure than email attachments.",
        h1Override: "Is the document collection portal secure?",
        metaTitle: "Secure Document Portal for Accounting Firms | SmartFirm.io",
        metaDescription: "Secure document portal for accounting firms — bank-level 256-bit SSL encryption, SOC 2 compliant hosting, and role-based access controls.",
        firstSentence: "Our secure document portal for accounting firms uses bank-level 256-bit SSL encryption, SOC 2 compliant hosting, and secure access controls so clients can only access their own documents."
      },
      {
        question: "How much time will onboarding automation really save us?",
        slug: "onboarding-automation-time-savings-for-accountants",
        answer: "Most firms report saving 10-15 hours per week on document chasing, reminder emails, and status tracking. That's time your team can redirect to billable work or strategic growth activities.",
        h1Override: "How much time will onboarding automation really save us?",
        metaTitle: "Onboarding Automation Time Savings | SmartFirm.io",
        metaDescription: "Onboarding automation saves accounting firms 10-15 hours weekly on document chasing, reminders, and status tracking — time redirected to billable work.",
        firstSentence: "Onboarding automation time savings for accounting firms average 10-15 hours per week on document chasing, reminder emails, and status tracking — time your team redirects to billable work."
      }
    ]
  },
  {
    category: "Lead Follow-Up Automation",
    slug: "lead-follow-up",
    questions: [
      {
        question: "How quickly does the automated system respond to new leads?",
        slug: "instant-lead-response-for-accounting-firms",
        answer: "Instantly. When a lead fills out your contact form, submits a consultation request, or calls your tracking number, our system responds within 60 seconds via email and SMS. Voicemail drops happen within 5 minutes if they don't answer.",
        h1Override: "How quickly does the automated system respond to new leads?",
        metaTitle: "Instant Lead Response for Accounting Firms | SmartFirm.io",
        metaDescription: "Instant lead response for accounting firms — SmartFirm.io's system responds within 60 seconds via email, SMS, and optional voicemail.",
        firstSentence: "Instant lead response for accounting firms means our system responds within 60 seconds when a lead fills out your form, requests a consultation, or calls your tracking number."
      },
      {
        question: "What if a lead wants to talk to a real person immediately?",
        slug: "human-handoff-in-cpa-firm-automation",
        answer: "The system includes your phone number and booking link in every automated message. Leads can call you directly or book a consultation instantly. The automation handles nurturing for leads who aren't ready to talk yet—not replacing human interaction, just ensuring no one falls through the cracks.",
        h1Override: "What if a lead wants to talk to a real person immediately?",
        metaTitle: "Human Handoff in CPA Firm Automation | SmartFirm.io",
        metaDescription: "Human handoff in CPA firm automation — every automated message includes your phone number and booking link so leads can reach a real person instantly.",
        firstSentence: "Human handoff in CPA firm automation is built in — every automated message includes your phone number and booking link so leads can call or schedule a consultation instantly."
      },
      {
        question: "Can I customize the follow-up messages?",
        slug: "customize-automated-follow-up-for-accounting-firms",
        answer: "Yes. We provide proven templates based on thousands of accounting firm leads, but you can customize tone, messaging, and offers. We'll work with you during setup to ensure every message sounds like you.",
        h1Override: "Can I customize the follow-up messages?",
        metaTitle: "Custom Automated Follow-Up for Accountants | SmartFirm.io",
        metaDescription: "Customize automated follow-up for accounting firms — proven templates plus your own tone, messaging, and offers configured during setup.",
        firstSentence: "Customize automated follow-up for your accounting firm with proven templates based on thousands of CPA leads — adjust tone, messaging, and offers to match your practice."
      },
      {
        question: "What happens if a lead doesn't respond to the automated sequence?",
        slug: "unresponsive-lead-follow-up-for-accounting-firms",
        answer: "After 7 touches over 14 days (email, SMS, voicemail), the system flags the lead as \"unresponsive\" and notifies you. You can choose to make a personal outreach attempt or move them to a long-term nurture campaign. Most leads respond by touch 3-4.",
        h1Override: "What happens if a lead doesn't respond to the automated sequence?",
        metaTitle: "Unresponsive Lead Follow-Up for CPAs | SmartFirm.io",
        metaDescription: "Unresponsive lead follow-up for accounting firms — after 7 touches over 14 days, the system flags the lead and notifies you for a personal outreach.",
        firstSentence: "Unresponsive lead follow-up for accounting firms involves 7 touches over 14 days (email, SMS, voicemail) — then the system flags the lead and notifies you to decide on personal outreach."
      }
    ]
  },
  {
    category: "SEO & Local Search",
    slug: "seo-local-search",
    questions: [
      {
        question: "How long does SEO take to show results?",
        slug: "seo-timeline-for-accounting-firms",
        answer: "Local SEO improvements (Google Maps rankings) typically show within 60-90 days. Organic search rankings for competitive keywords take 4-6 months. Most firms see their first SEO-generated leads within 90 days and consistent monthly leads by month 6.",
        h1Override: "How long does SEO take to show results?",
        metaTitle: "SEO Timeline for Accounting Firms | SmartFirm.io",
        metaDescription: "SEO timeline for accounting firms — local Maps rankings in 60-90 days, organic rankings in 4-6 months, consistent lead flow by month 8-12.",
        firstSentence: "SEO for accounting firms shows local Maps improvements within 60-90 days, organic search rankings for competitive keywords in 4-6 months, and consistent leads by month 8-12."
      },
      {
        question: "What's the difference between SEO and Google Ads?",
        slug: "seo-vs-google-ads-for-accounting-firms",
        answer: "Google Ads generate immediate leads but stop when you stop paying. SEO builds long-term rankings that generate leads for years without ongoing ad spend. We recommend both: ads for immediate leads while SEO builds, then reduce ad spend as organic traffic grows.",
        h1Override: "What's the difference between SEO and Google Ads?",
        metaTitle: "SEO VS Google Ads for Accounting Firms | SmartFirm.io",
        metaDescription: "SEO vs Google Ads for accounting firms — ads generate immediate leads but stop when you stop paying; SEO builds long-term rankings that compound.",
        firstSentence: "SEO vs Google Ads for accounting firms is a common question — Ads generate immediate leads but stop when you stop paying, while SEO builds rankings that generate leads for years."
      },
      {
        question: "Do I need to write blog posts for SEO, or do you handle that?",
        slug: "done-for-you-seo-blog-posts-for-accounting-firms",
        answer: "We handle all content creation. Our team writes SEO-optimized blog posts, service pages, and local content tailored to accounting firms. You review and approve before publishing—no writing required on your end.",
        h1Override: "Do I need to write blog posts for SEO, or do you handle that?",
        metaTitle: "Done-For-You SEO Blog Posts for CPAs | SmartFirm.io",
        metaDescription: "Done-for-you SEO blog posts for accounting firms — SmartFirm.io's team writes optimized content tailored to CPA firms. You review and approve.",
        firstSentence: "Done-for-you SEO blog posts for accounting firms are standard — SmartFirm.io's team writes SEO-optimized content tailored to CPA firms, and you review and approve before publishing."
      },
      {
        question: "Will SEO work if I'm in a competitive market?",
        slug: "seo-for-accounting-firms-in-competitive-markets",
        answer: "Yes, but it takes longer. In competitive markets (major metros), we focus on hyper-local keywords (\"CPA in [neighborhood]\") and niche services (\"R&D tax credit specialist\") where you can rank faster. Most firms see results within 6 months even in competitive markets.",
        h1Override: "Will SEO work if I'm in a competitive market?",
        metaTitle: "SEO for CPAs in Competitive Markets | SmartFirm.io",
        metaDescription: "SEO for accounting firms in competitive markets works with hyper-local keywords and niche service targeting. It takes longer but delivers strong ROI.",
        firstSentence: "SEO for accounting firms in competitive markets takes longer but works — we focus on hyper-local keywords like \"CPA in [neighborhood]\" and niche services to gain traction."
      }
    ]
  },
  {
    category: "Website Design",
    slug: "website-design",
    questions: [
      {
        question: "How long does the website design process take?",
        slug: "accounting-firm-website-design-timeline",
        answer: "Most accounting firm websites are completed in 2-4 weeks. Week 1: Strategy and mockups. Week 2: Design and copywriting. Week 3: Development and your review. Week 4: Revisions and launch. We handle everything—you review and approve at key milestones.",
        h1Override: "How long does the website design process take?",
        metaTitle: "Accounting Firm Website Design Timeline | SmartFirm.io",
        metaDescription: "Accounting firm website design takes 2-4 weeks — strategy and mockups, design and copy, development, then your review and launch.",
        firstSentence: "Accounting firm website design takes 2-4 weeks — Week 1 for strategy and mockups, Week 2 for design and copywriting, Week 3 for development, and Week 4 for review and launch."
      },
      {
        question: "Can you migrate my existing content, or do we start from scratch?",
        slug: "website-content-migration-for-accounting-firms",
        answer: "We can do either. If your current site has good content, we'll migrate and optimize it. If it's outdated or off-brand, we'll write new copy from scratch. Most firms choose a hybrid: keep core service descriptions, rewrite homepage and key landing pages.",
        h1Override: "Can you migrate my existing content, or do we start from scratch?",
        metaTitle: "Website Content Migration for CPAs | SmartFirm.io",
        metaDescription: "Website content migration for accounting firms — we can migrate and optimize existing content or write everything from scratch, whichever fits best.",
        firstSentence: "Website content migration for accounting firms can go either way — if your current site has good content, we'll migrate and optimize it; if it's outdated, we write fresh copy."
      },
      {
        question: "Will my website be compliant with AICPA regulations?",
        slug: "aicpa-compliant-website-for-accounting-firms",
        answer: "Yes. All content is reviewed for compliance with AICPA advertising rules, state board regulations, and professional standards. We avoid prohibited claims, ensure proper disclosures, and follow best practices for accounting firm websites.",
        h1Override: "Will my website be compliant with AICPA regulations?",
        metaTitle: "AIcpa Compliant Website for Accounting Firms | SmartFirm.io",
        metaDescription: "AICPA compliant websites for accounting firms — all content reviewed for advertising rules, state board regulations, and professional standards.",
        firstSentence: "AICPA compliant websites for accounting firms are standard at SmartFirm.io — all content is reviewed for AICPA advertising rules, state board regulations, and professional standards."
      },
      {
        question: "What if I need website changes after launch?",
        slug: "post-launch-website-support-for-accounting-firms",
        answer: "We include 30 days of post-launch support for minor tweaks and adjustments. After that, you can manage content yourself via the CMS, or we offer ongoing maintenance plans ($200-$500/month) for firms that prefer hands-off management.",
        h1Override: "What if I need website changes after launch?",
        metaTitle: "Post-Launch Website Support for CPAs | SmartFirm.io",
        metaDescription: "Post-launch website support for accounting firms — 30 days of tweaks included, then self-manage via CMS or opt for ongoing maintenance from SmartFirm.io.",
        firstSentence: "Post-launch website support for accounting firms includes 30 days of minor tweaks and adjustments — after that, manage content yourself via the CMS or choose ongoing maintenance."
      }
    ]
  },
  {
    category: "Content Marketing",
    slug: "content-marketing",
    questions: [
      {
        question: "How often will you publish content for my firm?",
        slug: "content-marketing-frequency-for-accounting-firms",
        answer: "We recommend 2-4 blog posts per month, plus quarterly long-form guides or resources. Consistency matters more than volume—we'd rather publish 2 high-quality posts monthly than 8 mediocre ones.",
        h1Override: "How often will you publish content for my firm?",
        metaTitle: "Content Marketing Frequency for CPAs | SmartFirm.io",
        metaDescription: "Content marketing frequency for accounting firms — 2-4 blog posts monthly plus quarterly long-form guides. Consistency matters more than volume.",
        firstSentence: "Content marketing frequency for accounting firms should be 2-4 blog posts per month, plus quarterly long-form guides — consistency matters more than volume."
      },
      {
        question: "What topics will you write about?",
        slug: "content-topics-for-accounting-firm-seo",
        answer: "We focus on high-intent topics your ideal clients are searching for: tax planning strategies, business advisory insights, CFO services explainers, industry-specific guides, and answers to common client questions. Every piece is designed to attract and convert prospects.",
        h1Override: "What topics will you write about?",
        metaTitle: "Content Topics for Accounting Firm SEO | SmartFirm.io",
        metaDescription: "Content topics for accounting firm SEO focus on high-intent searches — tax planning strategies, advisory insights, CFO services, and industry-specific.",
        firstSentence: "Content topics for accounting firm SEO focus on high-intent subjects your ideal clients are searching for — tax planning, advisory insights, CFO services, and industry-specific challenges."
      },
      {
        question: "Do I need to provide topic ideas, or do you handle content planning?",
        slug: "content-planning-for-accounting-firms",
        answer: "We handle topic research and planning based on keyword data, industry trends, and your service focus. You provide input on your expertise and unique perspectives—we turn that into SEO-optimized content.",
        h1Override: "Do I need to provide topic ideas, or do you handle content planning?",
        metaTitle: "Content Planning for Accounting Firms | SmartFirm.io",
        metaDescription: "Content planning for accounting firms is handled by SmartFirm.io — topic research, keyword data, and strategy based on your service focus and expertise.",
        firstSentence: "Content planning for accounting firms is fully handled by SmartFirm.io — we research topics based on keyword data, industry trends, and your service focus."
      },
      {
        question: "How long until content marketing generates leads?",
        slug: "content-marketing-roi-timeline-for-accounting-firms",
        answer: "Most firms see their first content-generated leads within 60-90 days. Consistent lead flow (5-10 leads/month) typically starts around month 6. Content marketing is a long-term investment—it compounds over time as your content library grows.",
        h1Override: "How long until content marketing generates leads?",
        metaTitle: "Content Marketing ROI Timeline for | SmartFirm.io",
        metaDescription: "Content marketing ROI timeline for accounting firms — first leads within 60-90 days, consistent flow of 5-10 leads/month around month 6.",
        firstSentence: "Content marketing ROI timeline for accounting firms shows first content-generated leads within 60-90 days, with consistent lead flow of 5-10 per month starting around month 6."
      }
    ]
  },
  {
    category: "Email Marketing",
    slug: "email-marketing",
    questions: [
      {
        question: "How often will you send emails to my clients?",
        slug: "email-frequency-for-accounting-firm-clients",
        answer: "We recommend 1-2 emails per month for general newsletters, plus automated emails triggered by specific events (tax deadline reminders, service completion follow-ups, appointment reminders). We'll tailor frequency to your preferences and client expectations.",
        h1Override: "How often will you send emails to my clients?",
        metaTitle: "Email Frequency for Accounting Firm Clients | SmartFirm.io",
        metaDescription: "Email frequency for accounting firm clients — 1-2 newsletters monthly plus automated event-triggered emails for tax deadlines and service completions.",
        firstSentence: "Email frequency for accounting firm clients should be 1-2 newsletters per month, plus automated emails triggered by specific events like tax deadline reminders and service completions."
      },
      {
        question: "What if clients unsubscribe or complain about too many emails?",
        slug: "email-compliance-for-accounting-firms",
        answer: "We follow email marketing best practices: clear unsubscribe links, segmented lists (so clients only get relevant content), and frequency caps. Unsubscribe rates for our campaigns average 0.5-1% (industry average is 2-3%), meaning your content is well-received.",
        h1Override: "What if clients unsubscribe or complain about too many emails?",
        metaTitle: "Email Compliance for Accounting Firms | SmartFirm.io",
        metaDescription: "Email compliance for accounting firms — clear unsubscribe links, segmented lists, frequency caps, and best practices that keep complaint rates near zero.",
        firstSentence: "Email compliance for accounting firms is built into every campaign — clear unsubscribe links, segmented lists so clients only get relevant content, and frequency caps to prevent fatigue."
      },
      {
        question: "Can you segment my email list by service type or client value?",
        slug: "email-list-segmentation-for-accounting-firms",
        answer: "Yes. We segment by service type (tax-only, advisory, full-service), engagement level (active, at-risk, dormant), and lifecycle stage (prospect, new client, long-term client). This ensures everyone gets personalized, relevant content.",
        h1Override: "Can you segment my email list by service type or client value?",
        metaTitle: "Email List Segmentation for Accounting Firms | SmartFirm.io",
        metaDescription: "Email list segmentation for accounting firms — segment by service type, engagement level, and lifecycle stage for higher open and conversion rates.",
        firstSentence: "Email list segmentation for accounting firms groups contacts by service type, engagement level, and lifecycle stage — so clients only receive content relevant to them."
      },
      {
        question: "Do I need to write the emails, or do you handle that?",
        slug: "done-for-you-email-marketing-for-accounting-firms",
        answer: "We write everything. You provide high-level input (upcoming service changes, seasonal promotions, key messages), and we draft emails for your approval. Most firms spend 15-20 minutes per month reviewing and approving content.",
        h1Override: "Do I need to write the emails, or do you handle that?",
        metaTitle: "Done-For-You Email Marketing for CPAs | SmartFirm.io",
        metaDescription: "Done-for-you email marketing for accounting firms — we write everything, you provide high-level input and approve. Most clients approve with minimal edits.",
        firstSentence: "Done-for-you email marketing for accounting firms means we write everything — you provide high-level input on seasonal promotions and key messages, and we draft emails for your approval."
      }
    ]
  },
  {
    category: "Social Media Management",
    slug: "social-media",
    questions: [
      {
        question: "Which social media platforms do you manage?",
        slug: "social-media-platforms-for-accounting-firms",
        answer: "We focus on LinkedIn (primary for B2B accounting), Facebook (for local visibility), and optionally Twitter/X and Instagram. LinkedIn drives the most engagement and referrals for accounting firms, so we prioritize it.",
        h1Override: "Which social media platforms do you manage?",
        metaTitle: "Social Media Platforms for Accounting Firms | SmartFirm.io",
        metaDescription: "Social media platforms for accounting firms — LinkedIn (primary for B2B), Facebook (local visibility), plus optional Twitter/X and Instagram management.",
        firstSentence: "Social media platforms for accounting firms that we manage include LinkedIn (primary for B2B accounting), Facebook (for local visibility), and optionally Twitter/X and Instagram."
      },
      {
        question: "How often will you post, and what type of content?",
        slug: "social-media-posting-schedule-for-accounting-firms",
        answer: "We post 12-16 times per month across platforms: tax tips, industry news commentary, client success stories (anonymized), service spotlights, and thought leadership. All content is pre-approved by you and compliant with AICPA guidelines.",
        h1Override: "How often will you post, and what type of content?",
        metaTitle: "Social Media Posting for Accounting Firms | SmartFirm.io",
        metaDescription: "Social media posting schedule for accounting firms — 12-16 posts monthly including tax tips, industry news, client success stories, and thought leadership.",
        firstSentence: "Social media posting for accounting firms runs 12-16 times monthly across platforms — tax tips, industry news commentary, client success stories, service spotlights, and thought leadership."
      },
      {
        question: "Do I need to provide social media content ideas, or do you create everything?",
        slug: "social-media-content-for-accounting-firms",
        answer: "We create everything. Our team follows accounting industry news, tax law changes, and best practices to generate timely, relevant content. You review and approve monthly content calendars—no brainstorming or writing required.",
        h1Override: "Do I need to provide social media content ideas, or do you create everything?",
        metaTitle: "Social Media Content for Accounting Firms | SmartFirm.io",
        metaDescription: "Done-for-you social media content for accounting firms — our team creates everything based on industry news, tax law changes, and best practices.",
        firstSentence: "Social media content for accounting firms is fully done for you — our team follows industry news, tax law changes, and best practices to generate relevant content."
      },
      {
        question: "Will you respond to comments and messages on social media?",
        slug: "social-media-engagement-for-accounting-firms",
        answer: "We monitor and respond to comments on posts (thanking people for engagement, answering general questions). For direct messages or inquiries, we notify you immediately so you can respond personally. We never impersonate you in private conversations.",
        h1Override: "Will you respond to comments and messages on social media?",
        metaTitle: "Social Media Engagement for Accounting Firms | SmartFirm.io",
        metaDescription: "Social media engagement for accounting firms — we monitor and respond to comments on posts while notifying you for direct messages and client inquiries.",
        firstSentence: "Social media engagement for accounting firms is handled by our team — we respond to comments on posts and notify you immediately for direct messages or prospect inquiries."
      }
    ]
  },
  {
    category: "Technology & Implementation",
    slug: "technology-implementation",
    questions: [
      {
        question: "How long does technology implementation take?",
        slug: "accounting-firm-automation-implementation-timeline",
        answer: "Most integrations and workflow automations are implemented in 2-4 weeks. Week 1: Audit and planning. Week 2: Configuration and testing. Week 3: Data migration and team training. Week 4: Go-live and support. We minimize disruption to your current operations.",
        h1Override: "How long does technology implementation take?",
        metaTitle: "Accounting Firm Automation Timeline | SmartFirm.io",
        metaDescription: "Accounting firm automation implementation takes 2-4 weeks — audit and planning, configuration, data migration, and team training in phases.",
        firstSentence: "Accounting firm automation implementation typically takes 2-4 weeks — Week 1 for audit and planning, Week 2 for configuration, Week 3 for migration, and Week 4 for training."
      },
      {
        question: "Will this require changing all my existing tools?",
        slug: "integrate-existing-tools-with-accounting-firm-automation",
        answer: "Not necessarily. We audit your current stack and recommend changes only where there are major gaps or inefficiencies. Many firms keep QuickBooks and practice management software and simply add integrations to connect everything. We optimize what you have before recommending replacements.",
        h1Override: "Will this require changing all my existing tools?",
        metaTitle: "Integrate Existing Tools with Accounting | SmartFirm.io",
        metaDescription: "Integrate existing tools with accounting firm automation — we audit your stack and only recommend changes where there are major gaps or inefficiencies.",
        firstSentence: "Integrating existing tools with accounting firm automation doesn't mean replacing everything — we audit your current stack and only recommend changes where there are major gaps."
      },
      {
        question: "What if my team resists new technology?",
        slug: "overcome-technology-resistance-in-accounting-firms",
        answer: "We include hands-on training and documentation for your team. Most resistance comes from fear of complexity—our solutions are designed to make work easier, not harder. We show your team how much time they'll save, and adoption follows naturally.",
        h1Override: "What if my team resists new technology?",
        metaTitle: "Overcome Tech Resistance in Accounting | SmartFirm.io",
        metaDescription: "Overcome technology resistance in accounting firms — hands-on training, intuitive design, and phased rollouts that show your team the immediate benefits.",
        firstSentence: "Overcome technology resistance in accounting firms with hands-on training and documentation — most resistance comes from fear of complexity, and our solutions are designed to simplify work."
      },
      {
        question: "What's the ongoing cost after implementation?",
        slug: "ongoing-automation-costs-for-accounting-firms",
        answer: "Software costs vary by firm size: $200-$500/month for small firms (4-10 people), $500-$1,500/month for mid-size firms (10-25 people). We recommend tools with transparent pricing and no surprise fees. Ongoing support and optimization are available if needed.",
        h1Override: "What's the ongoing cost after implementation?",
        metaTitle: "Ongoing Automation Costs for Accounting Firms | SmartFirm.io",
        metaDescription: "Ongoing automation costs for accounting firms — $200-$500/month for small firms, $500-$1,500/month for mid-size, depending on tools selected.",
        firstSentence: "Ongoing automation costs for accounting firms vary by size — $200-$500/month for small firms (4-10 people) and $500-$1,500/month for mid-size firms (10-25 people)."
      },
      {
        question: "How long does the business optimization process take?",
        slug: "accounting-firm-business-optimization-timeline",
        answer: "Phase 1 (Audit and Analysis): 2-3 weeks. Phase 2 (Recommendations and Roadmap): 1 week. Phase 3 (Implementation Support): 8-12 weeks. You'll have actionable insights within 30 days and see measurable improvements within 90 days.",
        h1Override: "How long does the business optimization process take?",
        metaTitle: "Accounting Firm Optimization Timeline | SmartFirm.io",
        metaDescription: "Accounting firm business optimization takes 11-16 weeks — audit and analysis, recommendations, then implementation support with actionable quick wins.",
        firstSentence: "Accounting firm business optimization takes 11-16 weeks — Phase 1 for audit (2-3 weeks), Phase 2 for recommendations (1 week), and Phase 3 for implementation support (8-12 weeks)."
      },
      {
        question: "What if the recommendations require major changes I'm not ready for?",
        slug: "phased-automation-implementation-for-accounting-firms",
        answer: "We provide a prioritized roadmap with quick wins (implement this month), medium-term improvements (implement this quarter), and long-term strategic shifts (implement this year). You control the pace—we provide the plan.",
        h1Override: "What if the recommendations require major changes I'm not ready for?",
        metaTitle: "Phased Automation Implementation for | SmartFirm.io",
        metaDescription: "Phased automation implementation for accounting firms — a prioritized roadmap with quick wins, medium-term improvements, and long-term strategic shifts.",
        firstSentence: "Phased automation implementation for accounting firms means you don't have to change everything at once — we provide a prioritized roadmap with quick wins first."
      }
    ]
  },
  {
    category: "Executive & Advisory Services",
    slug: "executive-services",
    questions: [
      {
        question: "How is this different from hiring a business coach?",
        slug: "accounting-firm-consultant-vs-business-coach",
        answer: "Generic business coaches don't understand accounting. We're former firm owners who've navigated busy season, compliance constraints, and scaling challenges specific to accounting practices. You'll get advice that actually works in your world—not generic business theory.",
        h1Override: "How is this different from hiring a business coach?",
        metaTitle: "Accounting Firm Consultant VS Business Coach | SmartFirm.io",
        metaDescription: "SmartFirm.io vs business coach — we're former firm owners who understand busy season, compliance, and CPA-specific scaling challenges firsthand.",
        firstSentence: "An accounting firm consultant differs from a generic business coach because SmartFirm.io's team are former firm owners who've navigated busy season, compliance, and scaling firsthand."
      },
      {
        question: "How much time commitment is required from me for executive services?",
        slug: "executive-services-time-commitment-for-accounting-firms",
        answer: "Fractional CIO services: 2-4 hours per month (strategy calls + review). Executive coaching: 2 hours per month (1:1 sessions). Growth planning: 4-6 hours upfront, then 1-2 hours monthly. We're designed for busy firm owners who can't dedicate 10+ hours per week to strategic work.",
        h1Override: "How much time commitment is required from me for executive services?",
        metaTitle: "Executive Services Time Commitment for | SmartFirm.io",
        metaDescription: "Executive services time commitment for accounting firms — fractional CIO takes 2-4 hours/month, coaching 2 hours/month, growth planning 4-6 hours upfront.",
        firstSentence: "Executive services time commitment for accounting firms is minimal — fractional CIO needs 2-4 hours per month, executive coaching 2 hours per month, growth planning 4-6 hours upfront."
      },
      {
        question: "What's included in fractional CIO services?",
        slug: "fractional-cio-services-for-accounting-firms",
        answer: "Technology roadmap and planning, vendor evaluation and management, security assessments and compliance, digital transformation strategy, and ongoing advisory. You get strategic technology leadership without the $150K+ salary of a full-time CIO.",
        h1Override: "What's included in fractional CIO services?",
        metaTitle: "Fractional Cio Services for Accounting Firms | SmartFirm.io",
        metaDescription: "Fractional CIO services for accounting firms include technology roadmaps, vendor management, security assessments, and digital transformation strategy.",
        firstSentence: "Fractional CIO services for accounting firms include technology roadmap planning, vendor evaluation and management, security assessments, digital transformation strategy, and ongoing advisory."
      },
      {
        question: "Can I try executive services before committing long-term?",
        slug: "fractional-cio-pilot-for-accounting-firms",
        answer: "Yes. We offer a 90-day pilot for executive services. If you don't see value, you can cancel. Most firms extend after the pilot because they finally have the strategic support they've been missing.",
        h1Override: "Can I try executive services before committing long-term?",
        metaTitle: "Fractional Cio Pilot for Accounting Firms | SmartFirm.io",
        metaDescription: "Try fractional CIO and executive services for accounting firms with a 90-day pilot — cancel if you don't see value, no long-term commitment.",
        firstSentence: "Fractional CIO pilot for accounting firms lets you try executive services for 90 days before committing — if you don't see value, you can cancel with no obligation."
      }
    ]
  },
  {
    category: "Add-On Services",
    slug: "add-ons",
    questions: [
      {
        question: "Can I add services to my existing QuickStart package?",
        slug: "add-services-to-smartfirm-quickstart",
        answer: "Yes! All add-on services are designed to integrate seamlessly with your QuickStart package or can be purchased independently for firms with existing marketing foundations.",
        h1Override: "Can I add services to my existing QuickStart package?",
        metaTitle: "Add Services to SmartFirm.io Quickstart | SmartFirm.io",
        metaDescription: "Add services to your SmartFirm.io QuickStart package — all add-ons integrate seamlessly or can be purchased independently for existing setups.",
        firstSentence: "Add services to your SmartFirm.io QuickStart package anytime — all add-on services integrate seamlessly with your existing setup or can be purchased independently."
      },
      {
        question: "What are the pricing options for add-ons?",
        slug: "accounting-firm-marketing-add-on-pricing",
        answer: "Each add-on service is priced individually based on scope and frequency. Contact us for a custom quote tailored to your specific needs and budget.",
        h1Override: "What are the pricing options for add-ons?",
        metaTitle: "Accounting Firm Marketing Add-On Pricing | SmartFirm.io",
        metaDescription: "Accounting firm marketing add-on pricing varies by scope and frequency. Contact SmartFirm.io for a custom quote tailored to your needs.",
        firstSentence: "Accounting firm marketing add-on pricing is based on scope and frequency — each service is priced individually so you only pay for what you need."
      },
      {
        question: "Do I need to commit to a long-term contract for add-ons?",
        slug: "no-contract-marketing-for-accounting-firms",
        answer: "No. Add-on services are month-to-month with no long-term commitments required. Scale up or down as your needs change.",
        h1Override: "Do I need to commit to a long-term contract for add-ons?",
        metaTitle: "No-Contract Marketing for Accounting Firms | SmartFirm.io",
        metaDescription: "No-contract marketing for accounting firms — all add-on services are month-to-month with no long-term commitments. Scale up or down as needed.",
        firstSentence: "No-contract marketing for accounting firms means all add-on services are month-to-month — no long-term commitments required, scale up or down as your needs change."
      }
    ]
  },
  {
    category: "Tools & Calculators",
    slug: "tools-calculators",
    questions: [
      {
        question: "How do these tools help my accounting firm grow?",
        slug: "free-tools-to-grow-accounting-firm",
        answer: "Our free tools provide data-driven insights into your firm's efficiency, marketing ROI, and growth potential, helping you identify specific opportunities for improvement and make informed decisions about where to invest your time and resources. Each assessment delivers personalized recommendations based on your responses and industry benchmarks.",
        h1Override: "How do these tools help my accounting firm grow?",
        metaTitle: "Free Tools to Grow Accounting Firm | SmartFirm.io",
        metaDescription: "Free tools to grow your accounting firm — data-driven insights into efficiency, marketing ROI, and growth potential that identify specific opportunities.",
        firstSentence: "Free tools to grow your accounting firm provide data-driven insights into efficiency, marketing ROI, and growth potential — helping you identify specific improvement opportunities."
      },
      {
        question: "Are these assessments really free?",
        slug: "free-accounting-firm-assessments",
        answer: "Yes, all our assessment tools are completely free with no obligation. We designed them to help accounting firms identify opportunities for improvement and demonstrate the value of systematic approaches to marketing, efficiency, and growth.",
        h1Override: "Are these assessments really free?",
        metaTitle: "Free Accounting Firm Assessments | SmartFirm.io",
        metaDescription: "Free accounting firm assessments from SmartFirm.io — completely free with no obligation, designed to help firms identify improvement opportunities.",
        firstSentence: "Free accounting firm assessments from SmartFirm.io are completely free with no obligation — we designed them to help practices identify opportunities for improvement."
      },
      {
        question: "How long do the assessments take?",
        slug: "accounting-firm-assessment-tools",
        answer: "Most assessments take between 2-5 minutes to complete and provide instant results with personalized recommendations. The time investment is minimal compared to the actionable insights you'll receive about your firm's performance.",
        h1Override: "How long do the assessments take?",
        metaTitle: "Accounting Firm Assessment Tools | SmartFirm.io",
        metaDescription: "Accounting firm assessment tools take 2-5 minutes to complete and provide instant results with personalized recommendations for your practice.",
        firstSentence: "Accounting firm assessment tools take between 2-5 minutes to complete and provide instant results with personalized recommendations — minimal time investment for actionable insights."
      },
      {
        question: "What happens after I complete an assessment?",
        slug: "accounting-firm-assessment-next-steps",
        answer: "You'll receive immediate results with actionable recommendations specific to your firm's situation. Optionally, you can Book a Free Call to discuss your results and explore how SmartFirm can help implement the improvements identified in your assessment.",
        h1Override: "What happens after I complete an assessment?",
        metaTitle: "Accounting Firm Assessment Next Steps | SmartFirm.io",
        metaDescription: "After completing an accounting firm assessment, you receive immediate results with actionable recommendations. Optionally book a free follow-up call.",
        firstSentence: "After completing an accounting firm assessment, you'll receive immediate results with actionable recommendations specific to your firm — plus the option to book a free consultation."
      }
    ]
  }
];

export const homepageFaqs: FAQItem[] = [
  {
    question: "How do I know which SmartFirm solution is right for my accounting firm?",
    slug: "which-automation-solution-for-my-accounting-firm",
    answer: "Start by identifying your biggest challenge: if you're losing clients, focus on our client retention and marketing solutions; if you're working too many hours, focus on workflow automation and efficiency tools; if you're not getting enough leads, focus on our marketing and visibility services. Most firms see the best results by addressing their most pressing pain point first, then expanding to other solutions as systems stabilize."
  },
  {
    question: "How quickly can I expect to see results from implementing SmartFirm solutions?",
    slug: "smartfirm-results-timeline",
    answer: "Timeline depends on which solutions you implement: Marketing results (SEO, content) typically show within 60-90 days for local visibility and 4-6 months for competitive keywords. Workflow automation (onboarding, follow-ups) delivers immediate time savings—most firms save 10-15 hours per week starting week one. According to Thomson Reuters' 2025 research, firms embracing automation saw an average revenue increase of 21.3% and profit increase of 25% within their first year."
  },
  {
    question: "Why does industry specialization matter for accounting firm marketing?",
    slug: "industry-specialization-for-accounting-firm-marketing",
    answer: "Industry specialization allows you to speak directly to your ideal clients' specific pain points and demonstrate deep expertise in their unique challenges, which commands premium pricing and builds faster trust. Professional services firms with clear specialization (https://explodingtopics.com/blog/customer-retention-rates) achieve 84% client retention rates compared to 60-70% for generalist small firms."
  },
  {
    question: "What's the ROI of investing in client retention vs. new client acquisition?",
    slug: "client-retention-roi-vs-acquisition-for-accountants",
    answer: "Client retention delivers significantly higher ROI because acquiring new clients costs 5-25x more than retaining existing ones (https://futurefirm.co/accounting-client-retention-strategies-growing-firms/), and existing clients are more likely to purchase additional services. Top accounting firms achieve 90-96% retention rates (https://www.cpajournal.com/2024/01/23/state-of-the-profession-3/), creating predictable revenue and reducing the constant pressure to find new clients."
  },
  {
    question: "Will my existing clients care if I adopt new technology?",
    slug: "client-reaction-to-accounting-firm-technology-upgrades",
    answer: "Yes, they'll appreciate it - modern clients expect professional systems, fast responses, and convenient communication options. Upgrading your technology demonstrates that you're keeping pace with industry changes and investing in better service delivery, which builds confidence and trust."
  },
  {
    question: "What's the conversion rate for referrals vs. other marketing channels?",
    slug: "referral-conversion-rate-for-accounting-firms",
    answer: "Referrals convert at 25.56% (https://focus-digital.co/average-sales-call-conversion-rate-by-industry/), making them the strongest acquisition channel, and deliver 3-5x higher conversion rates (https://blog.propellocloud.com/referral-marketing-statistics) than other marketing methods. 76% of CPAs identify word-of-mouth as their most important marketing technique (https://www.cpajournal.com/2025/04/28/digital-marketing-resources-for-cpas/), and 88% of consumers trust recommendations from people they know (https://www.investopedia.com/terms/w/word-of-mouth-marketing.asp) more than any other source."
  },
  {
    question: "What are the biggest threats to accounting firms today?",
    slug: "biggest-threats-to-accounting-firms",
    answer: "The biggest threats include cybersecurity breaches (which can destroy client trust and create liability), technology disruption from AI and automation, regulatory changes, and competition from tech-enabled firms. Firms that proactively adopt modern technology (https://tax.thomsonreuters.com/blog/beyond-tax-season-creating-revenue-stability-year-round/) are better positioned to handle these threats and turn them into competitive advantages."
  },
  {
    question: "How do I compete with TurboTax and other DIY tax software?",
    slug: "compete-with-turbotax-as-a-cpa",
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
  // Index pages (no trailing slash after normalization)
  ["/solutions", "Getting Started with SmartFirm"],
  ["/solutions-expert-marketing-agency-for-accounting-firms", "Getting Started with SmartFirm"],
  ["/industries", "Industries We Serve"],
  ["/industries-expert-marketing-agency-for-accountants", "Industries We Serve"],
  ["/tools", "Tools & Calculators"],

  // Solution detail pages (new slugs)
  ["/solutions/work-less-earn-more-as-a-cpa", "Work Less, Earn More"],
  ["/solutions/stop-losing-clients-to-tech-savvy-cpas", "Competing with Tech-Savvy Firms"],
  ["/solutions/get-more-referrals-for-cpa-firm-without-asking", "Referrals & Reviews"],
  ["/solutions/grow-accounting-firm-without-growing-pains", "Scaling Your Firm"],
  ["/solutions/protect-accounting-practice-from-data-breaches", "Protect Your Practice"],
  ["/solutions/scale-accounting-firm-without-chaos", "Scaling Your Firm"],
  ["/solutions/client-onboarding-problems", "Client Onboarding Automation"],

  // Solution detail pages (old slugs - kept for backwards compat)
  ["/solutions/work-less-earn-more", "Work Less, Earn More"],
  ["/solutions/client-retention", "Client Retention"],
  ["/solutions/retention-strategies", "Client Retention"],
  ["/solutions/scale-firm", "Scaling Your Firm"],
  ["/solutions/get-more-referrals-without-asking", "Referrals & Reviews"],
  ["/solutions/grow-without-growing-pains", "Scaling Your Firm"],
  ["/solutions/protect-practice-and-future", "Protect Your Practice"],

  // Industry detail pages (new slugs)
  ["/industries/automation-for-tax-preparation-firms", "Tax Preparation Marketing"],
  ["/industries/marketing-for-bookkeeping-firms", "Bookkeeping Services Marketing"],
  ["/industries/business-advisory", "Business Advisory Marketing"],
  ["/industries/marketing-for-audit-firms", "Industries We Serve"],

  // Industry detail pages (old slugs - kept for backwards compat)
  ["/industries/tax-preparation", "Tax Preparation Marketing"],
  ["/industries/tax-preparation-marketing-solutions", "Tax Preparation Marketing"],
  ["/industries/bookkeeping-services", "Bookkeeping Services Marketing"],
  ["/industries/bookkeeping-services-marketing-automation", "Bookkeeping Services Marketing"],
  ["/industries/business-advisory-marketing-services", "Business Advisory Marketing"],
  ["/industries/audit-assurance", "Industries We Serve"],
  ["/industries/audit-assurance-marketing-agency", "Industries We Serve"],

  // Service pages (current slugs)
  ["/services/client-onboarding-automation", "Client Onboarding Automation"],
  ["/services/automated-lead-follow-up", "Lead Follow-Up Automation"],
  ["/services/automated-lead-follow-up-for-accounting-firms", "Lead Follow-Up Automation"],
  ["/services/seo-for-accountants", "SEO & Local Search"],
  ["/services/seo-for-accounting-firms", "SEO & Local Search"],
  ["/services/website-design", "Website Design"],
  ["/services/website-design-for-accounting-firms", "Website Design"],
  ["/services/content-marketing", "Content Marketing"],
  ["/services/content-marketing-for-accounting-firms", "Content Marketing"],
  ["/services/email-marketing", "Email Marketing"],
  ["/services/email-marketing-for-accounting-firms", "Email Marketing"],
  ["/services/social-media-management", "Social Media Management"],
  ["/services/social-media-management-for-accounting-firms", "Social Media Management"],
  ["/services/technology-solutions", "Technology & Implementation"],
  ["/services/technology-consulting-for-accounting-firms", "Technology & Implementation"],
  ["/services/business-optimization", "Technology & Implementation"],
  ["/services/business-optimization-for-accounting-firms", "Technology & Implementation"],
  ["/services/executive-services", "Executive & Advisory Services"],
  ["/services/fractional-cio-for-accounting-firms", "Executive & Advisory Services"],
  ["/services/client-review-generation", "Referrals & Reviews"],
  ["/services/automated-review-generation-for-cpas", "Referrals & Reviews"],
  ["/services/online-reputation-management", "Referrals & Reviews"],
  ["/services/reputation-management-for-cpa-firms", "Referrals & Reviews"],
  ["/services/add-ons", "Add-On Services"],
  ["/services/marketing-add-ons-for-accounting-firms", "Add-On Services"]
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
