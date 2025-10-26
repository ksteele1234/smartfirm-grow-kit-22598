/**
 * Build-time FAQ Schema Injection Script
 * 
 * This script runs after Vite build to inject FAQ structured data
 * into the initial HTML, ensuring search engines can see it without
 * JavaScript execution.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// FAQ data - keep in sync with src/data/faqContent.ts
const faqCategories = [
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
        answer: "Most firms see initial improvements within 30-60 days of implementation, with your new or updated website launching within 14 days and basic QuickStart systems operational within 30 days. According to Thomson Reuters' 2025 research, firms embracing automation saw an average revenue increase of 21.3% and profit increase of 25% within their first year."
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
        answer: "Industry specialization allows you to speak directly to your ideal clients' specific pain points and demonstrate deep expertise in their unique challenges, which commands premium pricing and builds faster trust. Professional services firms with clear specialization achieve 84% client retention rates compared to 60-70% for generalist small firms."
      },
      {
        question: "What if my firm serves multiple industries - can you still help?",
        answer: "Yes, we can help you market to multiple industries by creating targeted messaging and content for each vertical while maintaining a cohesive brand. The key is to have dedicated landing pages and marketing materials for each industry rather than generic 'we serve everyone' messaging."
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
        answer: "Top-performing accounting firms achieve 90-96% client retention rates, while the industry average ranges from 60-70% for small firms to 75-85% for larger firms. Even a 5% improvement in retention can significantly increase profitability, as acquiring new clients costs significantly more than retaining existing ones."
      },
      {
        question: "What are the most common reasons accounting firms lose clients?",
        answer: "Poor communication and lack of proactive service are the leading causes of client churn, followed by pricing concerns and clients feeling undervalued. Research shows that firms with systematic communication processes, regular check-ins, and automated touchpoints retain clients at much higher rates than those relying on ad-hoc interactions."
      },
      {
        question: "How does automation help with client retention?",
        answer: "Automation ensures consistent communication through scheduled touchpoints, newsletters, and satisfaction surveys that never get forgotten during busy seasons. Our High Level CRM system tracks client interactions, automates follow-ups, and identifies at-risk clients before they leave, allowing you to maintain relationships without manual effort."
      },
      {
        question: "Can client retention strategies work for firms with seasonal clients (like tax preparation)?",
        answer: "Yes, retention strategies are especially critical for seasonal firms - the key is maintaining year-round communication and offering complementary services during off-season months. Tax firms that develop year-round revenue streams through bookkeeping, planning, or advisory services see more stable revenue and higher client lifetime value."
      }
    ]
  },
  {
    category: "Scale Firm",
    questions: [
      {
        question: "What's the biggest mistake accounting firms make when trying to scale?",
        answer: "The biggest mistake is trying to scale by simply working more hours or hiring more people without first systematizing and automating core processes. Research shows that firms using automation can expand capacity without scaling headcount, while those relying on manual processes hit capacity limits and experience team burnout."
      },
      {
        question: "How can I scale my firm without hiring more staff?",
        answer: "Automation is the key - by automating client onboarding, communication, data entry, and reporting, you can handle significantly more clients with your existing team. One audit firm reduced transaction testing time by 50%+ and cut financial statement reviews from 4-5 hours to just 10 minutes using automation tools, allowing them to take on more clients without adding staff."
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
        answer: "Yes, by shifting from hourly billing to value-based pricing and automating routine tasks, many CPAs increase revenue while reducing hours. Firms implementing automation report 50%+ time savings on routine tasks, freeing up capacity for higher-value advisory services that command premium rates."
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
  }
];

// Flatten all FAQs
const allFaqs = faqCategories.flatMap(cat => cat.questions);

// Generate FAQPage schema
function generateFAQSchema(baseUrl = 'https://smartfirm.io') {
  const faqPageUrl = `${baseUrl}/faq`;
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${faqPageUrl}#faqpage`,
    "mainEntity": allFaqs.map((faq, index) => ({
      "@type": "Question",
      "@id": `${faqPageUrl}#question-${index + 1}`,
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Inject schema into HTML
function injectSchemaIntoHTML(htmlPath, schema) {
  if (!fs.existsSync(htmlPath)) {
    console.log(`⚠️  HTML file not found: ${htmlPath}`);
    return false;
  }

  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Check if schema already exists to avoid duplicates
  if (html.includes('"@type":"FAQPage"') || html.includes('"@type": "FAQPage"')) {
    console.log(`✅ FAQ schema already exists in ${htmlPath}`);
    return true;
  }

  const schemaScript = `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`;
  
  // Inject before closing </head> tag
  if (html.includes('</head>')) {
    html = html.replace('</head>', `  ${schemaScript}\n  </head>`);
    fs.writeFileSync(htmlPath, html, 'utf8');
    console.log(`✅ Injected FAQ schema into ${htmlPath}`);
    return true;
  } else {
    console.log(`⚠️  Could not find </head> tag in ${htmlPath}`);
    return false;
  }
}

// Main execution
function main() {
  console.log('\n🚀 Starting FAQ Schema Injection...\n');
  
  const distPath = path.resolve(__dirname, '../dist');
  
  if (!fs.existsSync(distPath)) {
    console.error('❌ Error: dist/ folder not found. Run build first.');
    process.exit(1);
  }

  const schema = generateFAQSchema('https://smartfirm.io');
  
  // Try multiple possible locations for the FAQ page
  const possiblePaths = [
    path.join(distPath, 'faq', 'index.html'),
    path.join(distPath, 'faq.html'),
    path.join(distPath, 'index.html') // Fallback to main index
  ];

  let injected = false;
  
  for (const htmlPath of possiblePaths) {
    if (fs.existsSync(htmlPath)) {
      const result = injectSchemaIntoHTML(htmlPath, schema);
      if (result) {
        injected = true;
        break;
      }
    }
  }

  if (!injected) {
    console.log('⚠️  FAQ page not found in any expected location.');
    console.log('   This might be OK if pre-rendering handled it.');
  }

  console.log('\n✨ Schema injection complete!\n');
  console.log(`📊 Total FAQs: ${allFaqs.length}`);
  console.log(`📄 Schema size: ${JSON.stringify(schema).length} bytes\n`);
}

main();
