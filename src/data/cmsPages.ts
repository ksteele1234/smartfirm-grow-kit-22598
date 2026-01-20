import { ServicePageData, SolutionPageData, IndustryPageData } from '@/types/cms';

/**
 * Phase 4: CMS Data Structures
 * Central repository for all page content with keyword optimization
 */

// Service Pages with full CMS data
export const servicePages: Record<string, ServicePageData> = {
  'marketing-automation': {
    id: 'marketing-automation',
    title: 'Marketing Automation for Accounting Firms | SmartFirm',
    slug: 'marketing-automation-for-accounting-firms',
    metaDescription: 'Marketing automation for accounting firms. Streamline lead capture, client communication, and follow-up with integrated automation systems built for CPAs.',
    canonicalUrl: 'https://smartfirm.io/services/marketing-automation-for-accounting-firms/',
    heroTitle: 'Marketing Automation for Accounting Firms',
    heroSubtitle: 'Automate lead follow-up, nurture prospects automatically, and convert 40% more clients. Trusted by 200+ accounting practices.',
    heroDescription: 'Marketing automation for accounting firms captures leads instantly, nurtures prospects through proven sequences, and converts more clients without manual effort.',
    content: {},
    benefits: [
      {
        title: 'Stop Losing Leads to Slow Follow-Up',
        description: "Every hour you wait to respond to a lead reduces your conversion rate by 10%. Our marketing automation responds to every inquiry within minutes—via email, SMS, and voicemail. It nurtures prospects through personalized sequences while you focus on client work. Firms using our system convert 40% more leads without adding staff.",
        icon: 'Rocket'
      },
      {
        title: 'Reclaim 10+ Hours Per Week',
        description: "Manual follow-up, appointment reminders, and client onboarding emails consume your team's time. Our intelligent workflows handle lead nurturing, consultation scheduling, service reminders, and re-engagement campaigns automatically. You'll save 10-15 hours weekly that you can redirect to billable work or strategic growth.",
        icon: 'Clock'
      },
      {
        title: 'Scale Without Hiring',
        description: "You can't grow from $400K to $1M by manually managing every lead and client touchpoint. Our automation platform handles 10x the volume of inquiries and clients without increasing your workload. Handle 200+ active leads and 100+ clients with the same 4-person team you have today.",
        icon: 'TrendingUp'
      },
      {
        title: 'Get Clear ROI Reporting',
        description: "No more guessing what's working. Our dashboard shows exactly which campaigns generate leads, which sequences convert prospects, and what your cost-per-client is. You'll see pipeline stage metrics, conversion rates, and ROI tied directly to your utilization goals—in plain English, not marketing jargon.",
        icon: 'BarChart'
      }
    ],
    features: [
      {
        title: 'Lead Generation & Follow-up',
        description: 'Capture and nurture leads automatically with intelligent workflows',
        details: [
          'Automated lead capture from multiple sources',
          'Intelligent follow-up sequences via email and SMS',
          'Lead scoring and qualification automation',
          'Integration with your CRM and practice management systems'
        ]
      },
      {
        title: 'Website & SEO Optimization',
        description: 'Optimize your online presence for maximum visibility and conversions',
        details: [
          'SEO-optimized website design and content',
          'Local search optimization and Google My Business management',
          'Conversion rate optimization for higher lead generation',
          'Performance tracking and analytics reporting'
        ]
      },
      {
        title: 'Review & Reputation Management',
        description: 'Build a stellar online reputation with automated review generation',
        details: [
          'Automated review request campaigns',
          'Reputation monitoring across multiple platforms',
          'Response management for online reviews',
          'Review showcase integration on your website'
        ]
      },
      {
        title: 'Analytics & Reporting',
        description: 'Know what works with clear attribution and ROI insights',
        details: [
          'Campaign performance dashboards',
          'Conversion tracking across forms and calls',
          'A/B testing and optimization insights',
          'ROI and pipeline impact reporting'
        ]
      }
    ],
    faqs: [
      {
        question: 'How long does it take to see results?',
        answer: 'Most firms see immediate time savings (10+ hours/week) within the first week of implementation. Lead conversion improvements typically show within 30-45 days as prospects move through nurture sequences. Full ROI (increased revenue from better conversion) is usually visible within 90 days.'
      },
      {
        question: 'Will this integrate with QuickBooks and my practice management software?',
        answer: 'Yes. We integrate with QuickBooks Online, Xero, and leading practice management platforms (Karbon, Canopy, Practice Ignition, Financial Cents). We also connect with your CRM, email, and scheduling tools to create one seamless system.'
      },
      {
        question: 'Do I need to manage this daily, or is it truly hands-off?',
        answer: "It's designed to run on autopilot. After initial setup and approval of email templates, the system handles 90% of lead follow-up and client communication automatically. You'll review a weekly dashboard (5-10 minutes) and step in personally only when leads are ready to close."
      },
      {
        question: "What if I don't have a CRM or email marketing platform yet?",
        answer: "No problem. We'll recommend the right tools for your firm size and budget, set them up, and configure all automations. Most firms start with a simple stack ($100-$200/month in software costs) and scale from there."
      }
    ],
    ctaTitle: 'Ready to Automate Your Marketing?',
    ctaDescription: "Let's implement a marketing automation system that grows your firm while you focus on serving clients.",
    ctaButtonText: 'Get Started',
    ctaButtonLink: '/get-started/'
  },
  'seo-for-accountants': {
    id: 'seo-for-accountants',
    title: 'SEO for Accounting Firms | SmartFirm',
    slug: 'seo-for-accounting-firms',
    metaDescription: 'SEO for accountants: rank higher on Google, attract high-intent local clients, and generate 3x more qualified leads. Built for accounting practices.',
    canonicalUrl: 'https://smartfirm.io/services/seo-for-accounting-firms/',
    heroTitle: 'SEO for Accountants',
    heroSubtitle: 'Rank higher on Google, dominate local search, and attract qualified clients searching for your services. Proven SEO built for accountants.',
    heroDescription: 'SEO for accountants delivers higher Google rankings, local search dominance, and 3x more qualified leads without paid advertising.',
    content: {},
    benefits: [
      {
        title: 'Local Market Dominance',
        description: 'Appear at the top of search results when potential clients search for accounting services in your area.',
        icon: 'MapPin'
      },
      {
        title: 'Qualified Traffic',
        description: 'Attract visitors who are actively looking for the specific services you offer.',
        icon: 'Target'
      },
      {
        title: 'Long-term ROI',
        description: 'Build a sustainable source of new clients that compounds over time.',
        icon: 'TrendingUp'
      }
    ],
    features: [
      {
        title: 'Technical SEO',
        description: 'Optimize your website foundation for maximum search visibility',
        details: [
          'Site speed optimization',
          'Mobile responsiveness',
          'Schema markup implementation',
          'XML sitemap and robots.txt configuration'
        ]
      },
      {
        title: 'Local SEO',
        description: 'Dominate local search results in your target markets',
        details: [
          'Google Business Profile optimization',
          'Local citation building',
          'Review generation and management',
          'Local content creation'
        ]
      }
    ],
    ctaTitle: 'Ready to Rank Higher?',
    ctaDescription: 'Let\'s build an SEO strategy that brings qualified clients to your firm.',
    ctaButtonText: 'Get Started',
    ctaButtonLink: '/get-started/'
  },
  'client-onboarding-automation': {
    id: 'client-onboarding-automation',
    title: 'Client Onboarding Automation for Accounting Firms | SmartFirm',
    slug: 'client-onboarding-automation',
    metaDescription: 'Client onboarding automation for accounting firms eliminates manual intake, creates a professional first impression, and saves 10+ hours weekly. Trusted by growth-focused firms.',
    canonicalUrl: 'https://smartfirm.io/services/client-onboarding-automation/',
    heroTitle: 'Client Onboarding Automation for Accounting Firms',
    heroSubtitle: 'Tired of the manual, time-consuming process of onboarding new clients? Client onboarding automation for accounting firms eliminates repetitive tasks, creates a seamless client experience, and frees your team to focus on billable work.',
    heroDescription: 'Client onboarding automation for accounting firms streamlines intake, ensures consistency, and saves 10+ hours weekly while creating a professional first impression.',
    content: {},
    benefits: [
      {
        title: 'Save 10+ Hours Per Week',
        description: 'Eliminate repetitive data entry, email drafting, and document chasing with automated onboarding workflows.',
        icon: 'Clock'
      },
      {
        title: 'Create a Professional First Impression',
        description: 'Automated welcome sequences position your firm as organized, modern, and client-focused.',
        icon: 'Star'
      },
      {
        title: 'Ensure Consistency Across Every Client',
        description: 'Every client gets the same high-quality experience with standardized welcome emails and document checklists.',
        icon: 'CheckCircle'
      },
      {
        title: 'Scale Without Adding Staff',
        description: 'Handle 3x more new clients without increasing your admin workload.',
        icon: 'TrendingUp'
      }
    ],
    features: [
      {
        title: 'Automated Welcome Emails and Instructions',
        description: 'New clients receive immediate, personalized welcome emails with clear next steps',
        details: [
          'Instant welcome email upon engagement signing',
          'Personalized introduction with team member bios',
          'Clear step-by-step onboarding instructions',
          'Branded templates that reflect your firm\'s professionalism'
        ]
      },
      {
        title: 'Secure Document Collection Portal',
        description: 'Clients upload documents through a secure, branded portal',
        details: [
          'Encrypted file upload with bank-level security',
          'Customizable document checklists by service type',
          'Real-time status tracking for both client and team',
          'Automatic organization and filing of received documents'
        ]
      },
      {
        title: 'Practice Management Integration',
        description: 'Seamlessly connect with Karbon, Canopy, and other tools',
        details: [
          'Two-way sync with Karbon, Canopy, and Financial Cents',
          'Automatic task creation when onboarding begins',
          'Client record updates without double data entry',
          'Workflow triggers based on onboarding milestones'
        ]
      }
    ],
    ctaTitle: 'Ready to Automate Your Client Onboarding?',
    ctaDescription: 'Schedule a free consultation to see how we can streamline your client intake and save your team 10+ hours every week.',
    ctaButtonText: 'Schedule a Free Consultation',
    ctaButtonLink: '/get-started/'
  }
};

// Solution Pages with full CMS data
export const solutionPages: Record<string, SolutionPageData> = {
  'client-onboarding-problems': {
    id: 'client-onboarding-problems',
    title: 'Client Onboarding Problems? Stop Losing Clients | SmartFirm',
    slug: 'client-onboarding-problems',
    metaDescription: 'New clients falling through the cracks? A broken onboarding process costs you time, money, and reputation. Learn how to create a flawless first impression.',
    canonicalUrl: 'https://smartfirm.io/solutions/client-onboarding-problems/',
    heroTitle: 'New Clients Falling Through the Cracks? It\'s Costing You More Than You Think.',
    heroSubtitle: 'You just closed a great new client. You were excited, they were excited. But by the time you have everything you need, the initial excitement has evaporated—replaced by frustration.',
    problemStatement: 'A clunky, manual, and confusing onboarding process silently sabotages new client relationships before they even begin.',
    solutionOverview: 'Create a seamless, automated, and professional experience that wows new clients and sets your team up for success.',
    content: {},
    problemSolutionPairs: [
      { problem: 'Email overload with confusing attachments', solution: 'Secure portal with clear, personalized checklists' },
      { problem: 'Information scattered across email threads', solution: 'Central dashboard with complete visibility' },
      { problem: 'Inconsistent experience per team member', solution: 'Standardized workflows for perfect consistency' }
    ],
    keyBenefits: [
      { title: 'Save 10+ Hours Per Week', description: 'Free your team from manual follow-up with automated reminders.', icon: 'Clock' },
      { title: 'Make a Stunning First Impression', description: 'Professional, branded onboarding that clients complete quickly.', icon: 'Star' },
      { title: 'Ensure Consistency Every Time', description: 'Every client gets the same world-class experience.', icon: 'CheckCircle' },
      { title: 'Scale Without Growing Pains', description: 'Handle 3x more clients without increasing admin workload.', icon: 'TrendingUp' }
    ],
    hearingSignals: [
      'Team spends hours chasing documents',
      'New clients seem confused during first weeks',
      'Lost clients due to feeling disorganized'
    ],
    howItWorks: [
      { step: 1, title: 'Initial Assessment', description: 'Audit your current onboarding process and identify bottlenecks.' },
      { step: 2, title: 'System Design & Build', description: 'Design custom portal, templates, and automated sequences.' },
      { step: 3, title: 'Integration & Testing', description: 'Connect to your practice management software and test workflows.' },
      { step: 4, title: 'Launch & Optimization', description: 'Train your team, launch, and optimize based on real usage.' }
    ],
    results: [
      { metric: '10+', value: 'Hours Saved Weekly', description: 'Time reclaimed from manual follow-up' },
      { metric: '85%', value: 'Faster Onboarding', description: 'Reduction in time to work-ready' },
      { metric: '100%', value: 'Consistency', description: 'Same professional experience for every client' }
    ],
    ctaTitle: 'Ready to Stop Losing Clients Before You Even Start?',
    ctaDescription: 'Schedule a free 15-minute call to see how client onboarding automation would work for your firm.'
  },
  'client-retention': {
    id: 'client-retention',
    title: 'Client Retention Strategies | SmartFirm',
    slug: 'client-retention-strategies-for-cpas',
    metaDescription: 'Strengthen client relationships with predictive analytics and intelligent automation for accounting firms.',
    canonicalUrl: 'https://smartfirm.io/solutions/stop-losing-clients-to-tech-savvy-cpas/',
    heroTitle: 'AI-Powered Client Retention Strategies',
    heroSubtitle: 'Losing even 5 clients per year costs $50K+ in recurring revenue and referrals. Client retention strategies for CPAs keep clients engaged through proactive communication, satisfaction tracking, and automated touchpoints that maximize lifetime value.',
    problemStatement: 'Accounting firms are losing clients to competitors who leverage AI-powered communication, predictive client management, and proactive service automation. Without intelligent retention strategies, you\'re constantly replacing lost clients instead of growing your practice.',
    solutionOverview: 'Our AI-driven client retention solution combines predictive client behavior analysis, automated value proposition optimization, intelligent communication systems, and data-driven client experience enhancement to strengthen relationships and reduce churn.',
    content: {},
    problemSolutionPairs: [
      {
        problem: 'Client managers guess which relationships are at risk because there is no shared churn signal or scoring model.',
        solution: 'Apply predictive analytics that score engagement, billing trends, and sentiment so at-risk accounts surface before they defect.'
      },
      {
        problem: 'Outreach varies wildly by advisor, leaving some clients with gaps of months between touches.',
        solution: 'Automate cross-channel cadences—email, SMS, and portal alerts—guided by AI triggers that recommend the next best action.'
      },
      {
        problem: 'Leadership cannot see which services each client actually uses, making it hard to demonstrate value.',
        solution: 'Consolidate billing, deliverables, and meeting insights into dashboards that highlight wins and tee up strategic conversations.'
      }
    ],
    keyBenefits: [
      {
        title: 'Reduced Client Churn',
        description: 'Decrease client loss by 60% with proactive retention strategies',
        icon: 'Shield',
        points: [
          'Predict churn risk using engagement and billing signals.',
          'Initiate save plans with scripted outreach when risk rises.',
          'Track interventions so the whole team sees next steps.'
        ]
      },
      {
        title: 'Increased Client Value',
        description: 'Existing clients become more valuable through additional services',
        icon: 'TrendingUp',
        points: [
          'Highlight advisory opportunities based on financial milestones.',
          'Automate educational campaigns that tee up premium services.',
          'Measure added revenue from expansion plays by client segment.'
        ]
      },
      {
        title: 'Competitive Differentiation',
        description: 'Stand out from competitors with superior client experience',
        icon: 'Star',
        points: [
          'Personalize messaging with AI-driven client profiles.',
          'Showcase proactive insights in dashboards clients can access anytime.',
          'Gather testimonials and case stories that prove your edge.'
        ]
      },
      {
        title: 'Predictable Revenue',
        description: 'Build reliable revenue streams from loyal, long-term clients',
        icon: 'BarChart',
        points: [
          'Forecast renewals and expansion revenue months in advance.',
          'Automate billing follow-ups and payment reminders.',
          'Give leadership visibility into retention KPIs in real time.'
        ]
      }
    ],
    hearingSignals: [
      'Top clients churn without warning because early risk signals go unnoticed.',
      'Account managers guess at the next best touchpoint instead of following data.',
      'Leadership can\'t see retention KPIs in one place, so decisions lag behind reality.'
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Competitive Analysis',
        description: 'Analyze what competitors offer and identify gaps in your service delivery'
      },
      {
        step: 2,
        title: 'Value Proposition Enhancement',
        description: 'Develop compelling reasons for clients to stay and pay premium rates'
      },
      {
        step: 3,
        title: 'Communication Systems',
        description: 'Implement regular touchpoints and proactive communication workflows'
      },
      {
        step: 4,
        title: 'Experience Optimization',
        description: 'Enhance every client interaction from onboarding to ongoing service'
      }
    ],
    results: [
      {
        metric: '92%',
        value: '92%',
        description: 'Client retention rate achieved by our partner firms'
      },
      {
        metric: '40%',
        value: '40%',
        description: 'Increase in average client lifetime value'
      },
      {
        metric: '85%',
        value: '85%',
        description: 'Client satisfaction scores after implementing our strategies'
      }
    ],
    ctaTitle: 'Still have questions about AI-powered client retention?',
    ctaDescription: 'We\'ll unpack the analytics, playbooks, and automations that keep your best clients engaged before they drift. Book a call to see how we can activate an intelligent retention program for your firm.'
  }
};

// Example Industry Pages
export const industryPages: Record<string, IndustryPageData> = {
  'cpa-firms': {
    id: 'cpa-firms',
    title: 'Marketing For CPA Firms That Drives Growth | SmartFirm',
    slug: 'cpa-firms',
    metaDescription: 'Marketing for CPA firms that attracts high-value clients, reduces manual follow-up, and positions you above competitors through automation, SEO, and strategic positioning.',
    canonicalUrl: 'https://smartfirm.io/industries/cpa-firms/',
    heroTitle: 'Marketing For CPA Firms',
    heroSubtitle: 'Marketing for CPA firms attracts high-value clients and positions you above competitors through specialized automation, local SEO, and strategic campaigns that solve unique challenges like seasonal demand and big-firm competition.',
    industryOverview: 'CPA firms face unique challenges in client acquisition and retention. Our solutions are specifically designed for your needs.',
    content: {},
    challenges: [
      {
        title: 'Attracting High-Value Clients',
        description: 'Traditional marketing fails to attract the right prospects',
        solution: 'Targeted campaigns and positioning that resonates with ideal clients'
      },
      {
        title: 'Competing with Larger Firms',
        description: 'Big firms have bigger budgets and more resources',
        solution: 'Technology and automation that levels the playing field'
      }
    ],
    services: [
      {
        title: 'CPA Marketing Automation',
        description: 'Automated client acquisition and retention systems',
        link: '/services/marketing-automation-for-accounting-firms/'
      },
      {
        title: 'SEO for CPAs',
        description: 'Rank higher for high-intent CPA searches',
        link: '/services/seo-for-accounting-firms/'
      }
    ],
    ctaTitle: 'Ready to Transform Your CPA Firm?',
    ctaDescription: 'See how firms like yours are achieving predictable growth'
  }
};
