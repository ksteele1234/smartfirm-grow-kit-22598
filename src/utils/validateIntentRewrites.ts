import { validateIntentAnswer } from './contentValidator';
import { servicePages, solutionPages } from '@/data/cmsPages';

/**
 * Validation script for first-sentence intent rewrites
 * Run in browser console: window.validateIntentRewrites()
 */

interface PageValidation {
  pageName: string;
  pageType: 'service' | 'solution' | 'industry' | 'tool' | 'static' | 'hub' | 'special';
  url: string;
  firstSentence: string;
  primaryKeyword: string;
  validation: ReturnType<typeof validateIntentAnswer>;
}

export function validateIntentRewrites() {
  console.log('\n🧪 Validating Intent Rewrites for 61 Pages...\n');
  console.log('='.repeat(80));
  
  const results: PageValidation[] = [];
  
  // Service pages (13) - manually defined with updated heroSubtitle first sentences
  const servicePages = [
    {
      pageName: 'Marketing Automation For Accounting Firms',
      url: '/services/marketing-automation',
      firstSentence: 'Manual follow-up costs accounting firms 10+ hours weekly and loses 40% of leads.',
      primaryKeyword: 'marketing automation for accounting firms'
    },
    {
      pageName: 'SEO for Accountants',
      url: '/services/seo-for-accountants',
      firstSentence: 'Invisible firms lose 80% of potential clients to competitors on page one.',
      primaryKeyword: 'SEO for accounting firms'
    },
    {
      pageName: 'Professional Website Design for Accounting Firms',
      url: '/services/website-design',
      firstSentence: 'Outdated websites cost accounting firms 60% of potential clients who bounce within 10 seconds.',
      primaryKeyword: 'accounting firm website design'
    },
    {
      pageName: 'Email Marketing For CPAs',
      url: '/services/email-marketing',
      firstSentence: 'Clients who only hear from CPAs at tax season are 70% more likely to leave.',
      primaryKeyword: 'email marketing for accountants'
    },
    {
      pageName: 'Strategic Content Marketing For CPAs',
      url: '/services/content-marketing',
      firstSentence: 'Generic CPA websites fail to attract premium clients or command higher fees.',
      primaryKeyword: 'content marketing for CPAs'
    },
    {
      pageName: 'Automated Lead Follow Up For CPAs',
      url: '/services/automated-lead-follow-up',
      firstSentence: 'Slow follow-up costs CPAs 40% of potential clients within the first 24 hours.',
      primaryKeyword: 'automated lead follow-up'
    },
    {
      pageName: 'Social Media Management For CPAs',
      url: '/services/social-media-management',
      firstSentence: 'CPAs with inconsistent social presence lose 30-50% of potential referrals to more visible competitors.',
      primaryKeyword: 'social media for accounting firms'
    },
    {
      pageName: 'Automated Review Generation For CPAs',
      url: '/services/client-review-generation',
      firstSentence: 'CPAs with fewer than 30 Google reviews lose 60% of prospects to better-reviewed competitors.',
      primaryKeyword: 'client review generation'
    },
    {
      pageName: 'Reputation Management For CPAs',
      url: '/services/online-reputation-management',
      firstSentence: 'One negative review can cost CPAs 10-20 lost prospects before you even know it exists.',
      primaryKeyword: 'online reputation management'
    },
    {
      pageName: 'Business Optimization For Accounting Firms',
      url: '/services/business-optimization',
      firstSentence: 'Inefficient operations cost accounting firms $50K-$100K annually through pricing leaks, scope creep, and underutilized capacity.',
      primaryKeyword: 'business optimization services'
    },
    {
      pageName: 'Accounting Firm Technology Consulting',
      url: '/services/technology-solutions',
      firstSentence: 'Disconnected software costs accounting firms 5-8 hours weekly on manual data entry and causes 80% more errors.',
      primaryKeyword: 'technology solutions'
    },
    {
      pageName: 'Foundation Setup: Strategy & Integration',
      url: '/services/strategy-integration',
      firstSentence: 'Disconnected marketing tools waste 10+ hours weekly and lose 50% of leads in the gaps.',
      primaryKeyword: 'strategy and integration'
    },
    {
      pageName: 'Fractional CIO For Accounting Firms',
      url: '/services/executive-services',
      firstSentence: 'Growing firms need strategic technology leadership but can\'t justify $150K+ CIO salaries.',
      primaryKeyword: 'executive services'
    }
  ];
  
  servicePages.forEach(page => {
    const validation = validateIntentAnswer(page.firstSentence, page.primaryKeyword);
    results.push({
      ...page,
      pageType: 'service',
      validation
    });
  });
  
  // Solution pages (8) - manually defined with updated heroSubtitle first sentences
  const solutionPages = [
    {
      pageName: 'Modern Marketing Services For CPAs',
      url: '/solutions/stop-losing-clients',
      firstSentence: 'Tech-savvy CPAs are winning your clients with faster responses and modern systems.',
      primaryKeyword: 'modern marketing services for CPAs'
    },
    {
      pageName: 'Client Retention Strategies',
      url: '/solutions/client-retention',
      firstSentence: 'Losing even 5 clients per year costs $50K+ in recurring revenue and referrals.',
      primaryKeyword: 'client retention strategies for CPAs'
    },
    {
      pageName: 'Advanced Retention Strategies for CPAs',
      url: '/solutions/advanced-retention-strategies-for-cpas',
      firstSentence: 'Poor communication costs accounting firms 20-30% of clients annually, losing $100K+ in recurring revenue.',
      primaryKeyword: 'retention strategies for CPAs'
    },
    {
      pageName: 'Scale Your Accounting Firm Successfully',
      url: '/solutions/scale-firm',
      firstSentence: 'Most accounting firms hit a ceiling where more clients means more stress and longer hours.',
      primaryKeyword: 'accounting firm scaling strategies'
    },
    {
      pageName: 'Client Referral System For CPAs',
      url: '/solutions/get-more-referrals',
      firstSentence: 'Most CPAs lose 50+ referral opportunities per year because they lack a systematic approach.',
      primaryKeyword: 'CPA referral generation'
    },
    {
      pageName: 'Accounting Firm Growth Consulting',
      url: '/solutions/grow-without-pains',
      firstSentence: 'Growing accounting firms struggle with chaos, quality control issues, and overwhelmed staff.',
      primaryKeyword: 'accounting firm growth'
    },
    {
      pageName: 'CPA Practice Management Services',
      url: '/solutions/protect-practice',
      firstSentence: 'Unprepared accounting practices face devastating threats from cybersecurity risks, regulatory changes, and technology disruption.',
      primaryKeyword: 'CPA practice protection'
    },
    {
      pageName: 'Increase Your Accounting Firm Revenue',
      url: '/solutions/work-less-earn-more',
      firstSentence: 'Too many CPAs work 60+ hours weekly for modest returns, trapped in time-for-money thinking.',
      primaryKeyword: 'accounting firm efficiency'
    }
  ];
  
  solutionPages.forEach(page => {
    const validation = validateIntentAnswer(page.firstSentence, page.primaryKeyword);
    results.push({
      ...page,
      pageType: 'solution',
      validation
    });
  });
  
  // Industry pages (4 - manually defined)
  const industryPages = [
    {
      pageName: 'Tax Preparation Marketing',
      url: '/industries/tax-preparation',
      firstSentence: 'Tax firms waste 15+ hours weekly on manual lead follow-up during peak season.',
      primaryKeyword: 'tax preparation marketing'
    },
    {
      pageName: 'Bookkeeping Services Marketing',
      url: '/industries/bookkeeping-services',
      firstSentence: 'Small bookkeeping firms lose 60% of leads to larger competitors with automated systems.',
      primaryKeyword: 'bookkeeping marketing'
    },
    {
      pageName: 'Business Advisory Marketing',
      url: '/industries/business-advisory',
      firstSentence: 'Advisory firms spend 20+ hours monthly on manual marketing tasks that could be automated.',
      primaryKeyword: 'business advisory marketing'
    },
    {
      pageName: 'Audit & Assurance Marketing',
      url: '/industries/audit-assurance',
      firstSentence: 'Audit firms waste 25+ hours monthly chasing leads and managing referral relationships manually.',
      primaryKeyword: 'audit firm marketing'
    }
  ];
  
  industryPages.forEach(page => {
    const validation = validateIntentAnswer(page.firstSentence, page.primaryKeyword);
    results.push({
      ...page,
      pageType: 'industry',
      validation
    });
  });
  
  // Tool pages (13) - calculators, quizzes, and assessment tools
  const toolPages = [
    {
      pageName: 'Marketing ROI Calculator For Accountants',
      url: '/tools/roi-calculator',
      firstSentence: 'Calculate your expected return on investment from accounting firm marketing campaigns.',
      primaryKeyword: 'marketing ROI calculator'
    },
    {
      pageName: 'Growth Calculator For Accounting Firms',
      url: '/growth-calculator',
      firstSentence: 'Estimate your firm\'s growth potential with automated marketing systems.',
      primaryKeyword: 'accounting firm growth calculator'
    },
    {
      pageName: 'Client Lifetime Value Calculator',
      url: '/tools/client-lifetime-value-calculator',
      firstSentence: 'Calculate the total value each client brings to your accounting practice over time.',
      primaryKeyword: 'client lifetime value calculator'
    },
    {
      pageName: 'Tech Stack ROI Calculator',
      url: '/tools/tech-stack-roi-calculator',
      firstSentence: 'Measure the return on investment from your accounting technology stack.',
      primaryKeyword: 'tech stack ROI'
    },
    {
      pageName: 'Marketing Scorecard For CPAs',
      url: '/tools/marketing-scorecard',
      firstSentence: 'Evaluate your current CPA marketing effectiveness across 12 key dimensions.',
      primaryKeyword: 'marketing scorecard'
    },
    {
      pageName: 'Lead Generation Scorecard',
      url: '/tools/lead-generation-scorecard',
      firstSentence: 'Assess your firm\'s lead generation systems and identify improvement opportunities.',
      primaryKeyword: 'lead generation scorecard'
    },
    {
      pageName: 'Growth Potential Scorecard',
      url: '/tools/growth-potential-scorecard',
      firstSentence: 'Discover your accounting firm\'s growth readiness across operations, marketing, and technology.',
      primaryKeyword: 'growth potential assessment'
    },
    {
      pageName: 'Automation Readiness Quiz',
      url: '/tools/automation-readiness-quiz',
      firstSentence: 'Determine if your firm is ready to implement marketing automation systems.',
      primaryKeyword: 'automation readiness'
    },
    {
      pageName: 'Modern Firm Assessment Quiz',
      url: '/tools/modern-firm-quiz',
      firstSentence: 'Rate your firm\'s adoption of modern technology and best practices.',
      primaryKeyword: 'modern firm assessment'
    },
    {
      pageName: 'Efficiency Assessment Quiz',
      url: '/tools/efficiency-quiz',
      firstSentence: 'Identify operational inefficiencies costing your firm time and money.',
      primaryKeyword: 'efficiency assessment'
    },
    {
      pageName: 'Workflow Bottleneck Finder',
      url: '/tools/workflow-bottleneck-finder',
      firstSentence: 'Pinpoint process bottlenecks limiting your accounting firm\'s capacity and growth.',
      primaryKeyword: 'workflow analysis'
    },
    {
      pageName: 'SEO Audit Tool For Accountants',
      url: '/tools/seo-audit',
      firstSentence: 'Comprehensive SEO audit reveals how accounting firms rank and what needs improvement.',
      primaryKeyword: 'SEO audit tool'
    },
    {
      pageName: 'Website Page Grader',
      url: '/tools/page-grader',
      firstSentence: 'Grade your accounting website pages for SEO, performance, and conversion optimization.',
      primaryKeyword: 'page grader'
    }
  ];
  
  toolPages.forEach(page => {
    const validation = validateIntentAnswer(page.firstSentence, page.primaryKeyword);
    results.push({
      ...page,
      pageType: 'tool',
      validation
    });
  });
  
  // Hub pages (5) - main navigation destination pages
  const hubPages = [
    {
      pageName: 'All Services',
      url: '/services',
      firstSentence: 'Comprehensive marketing and technology services designed specifically for accounting firms.',
      primaryKeyword: 'accounting firm services'
    },
    {
      pageName: 'Solutions Hub',
      url: '/solutions',
      firstSentence: 'Proven solutions to the biggest challenges facing growing accounting practices.',
      primaryKeyword: 'accounting firm solutions'
    },
    {
      pageName: 'Industries We Serve',
      url: '/industries',
      firstSentence: 'Specialized marketing strategies for tax preparers, bookkeepers, CPAs, and advisory firms.',
      primaryKeyword: 'accounting industry marketing'
    },
    {
      pageName: 'Resources Hub',
      url: '/resources',
      firstSentence: 'Free guides, templates, and educational content to help accounting firms grow.',
      primaryKeyword: 'accounting firm resources'
    },
    {
      pageName: 'Tools & Calculators',
      url: '/tools-calculators',
      firstSentence: 'Free calculators and assessment tools to evaluate your firm\'s marketing and operations.',
      primaryKeyword: 'accounting tools'
    }
  ];
  
  hubPages.forEach(page => {
    const validation = validateIntentAnswer(page.firstSentence, page.primaryKeyword);
    results.push({
      ...page,
      pageType: 'hub',
      validation
    });
  });
  
  // Static pages (7) - legal, policy, and informational pages
  const staticPages = [
    {
      pageName: 'About SmartFirm',
      url: '/about',
      firstSentence: 'SmartFirm empowers accounting firms to achieve measurable growth through marketing automation, technology integration, and strategic business optimization.',
      primaryKeyword: 'about SmartFirm'
    },
    {
      pageName: 'Contact Us',
      url: '/contact',
      firstSentence: 'Connect with SmartFirm to discuss your accounting firm\'s marketing and growth goals.',
      primaryKeyword: 'contact SmartFirm'
    },
    {
      pageName: 'FAQ - Frequently Asked Questions',
      url: '/faq',
      firstSentence: 'Common questions about SmartFirm\'s services, pricing, implementation, and results for accounting firms.',
      primaryKeyword: 'SmartFirm FAQ'
    },
    {
      pageName: 'Privacy Policy',
      url: '/privacy',
      firstSentence: 'How SmartFirm collects, uses, and protects your personal information.',
      primaryKeyword: 'privacy policy'
    },
    {
      pageName: 'Terms of Service',
      url: '/terms',
      firstSentence: 'Terms and conditions governing the use of SmartFirm\'s website and services.',
      primaryKeyword: 'terms of service'
    },
    {
      pageName: 'Cookie Policy',
      url: '/cookies',
      firstSentence: 'How SmartFirm uses cookies to improve website functionality and user experience.',
      primaryKeyword: 'cookie policy'
    }
  ];
  
  staticPages.forEach(page => {
    const validation = validateIntentAnswer(page.firstSentence, page.primaryKeyword);
    results.push({
      ...page,
      pageType: 'static',
      validation
    });
  });
  
  // Special pages (8) - unique conversion and utility pages
  const specialPages = [
    {
      pageName: 'Homepage',
      url: '/',
      firstSentence: 'SmartFirm delivers expert digital marketing for accounting firms with done-for-you automation, SEO, websites, and retention systems.',
      primaryKeyword: 'digital marketing for accounting firms'
    },
    {
      pageName: 'Get Started',
      url: '/get-started',
      firstSentence: 'Start growing your accounting firm with proven marketing systems and strategic guidance.',
      primaryKeyword: 'get started'
    },
    {
      pageName: 'Quick Start Package',
      url: '/quick-start',
      firstSentence: 'Launch your accounting firm marketing in 30 days with website optimization, local SEO, and automated lead generation.',
      primaryKeyword: 'quick start package'
    },
    {
      pageName: 'Quick Start Checkout',
      url: '/quick-start-checkout',
      firstSentence: 'Complete your Quick Start Package enrollment and begin transforming your firm.',
      primaryKeyword: 'checkout'
    },
    {
      pageName: 'Quick Start Thank You',
      url: '/quick-start-thank-you',
      firstSentence: 'Welcome to SmartFirm - your Quick Start journey begins now.',
      primaryKeyword: 'thank you'
    },
    {
      pageName: 'Thank You',
      url: '/thank-you',
      firstSentence: 'Thank you for contacting SmartFirm - we\'ll respond within one business day.',
      primaryKeyword: 'thank you'
    },
    {
      pageName: '404 Not Found',
      url: '/404',
      firstSentence: 'The page you\'re looking for doesn\'t exist or has been moved.',
      primaryKeyword: '404 error'
    },
    {
      pageName: '500 Server Error',
      url: '/500',
      firstSentence: 'Something went wrong on our end - we\'re working to fix it.',
      primaryKeyword: 'server error'
    }
  ];
  
  specialPages.forEach(page => {
    const validation = validateIntentAnswer(page.firstSentence, page.primaryKeyword);
    results.push({
      ...page,
      pageType: 'special',
      validation
    });
  });
  
  // Display results
  let passCount = 0;
  let failCount = 0;
  
  results.forEach((result, index) => {
    const status = result.validation.valid ? '✅ PASS' : '❌ FAIL';
    const score = result.validation.score;
    
    console.log(`\n${index + 1}. ${result.pageName} (${result.pageType})`);
    console.log(`   URL: ${result.url}`);
    console.log(`   Status: ${status} | Score: ${score}/100`);
    console.log(`   Keyword: "${result.primaryKeyword}"`);
    console.log(`   First Sentence: "${result.firstSentence}"`);
    
    if (result.validation.errors.length > 0) {
      console.log(`   ❌ Errors:`);
      result.validation.errors.forEach(err => console.log(`      - ${err}`));
      failCount++;
    } else {
      passCount++;
    }
    
    if (result.validation.warnings.length > 0) {
      console.log(`   ⚠️  Warnings:`);
      result.validation.warnings.forEach(warn => console.log(`      - ${warn}`));
    }
  });
  
  // Summary
  console.log('\n' + '='.repeat(80));
  console.log('📊 VALIDATION SUMMARY');
  console.log('='.repeat(80));
  console.log(`Total Pages: ${results.length}/61`);
  console.log(`✅ Passed: ${passCount}`);
  console.log(`❌ Failed: ${failCount}`);
  console.log(`Average Score: ${(results.reduce((sum, r) => sum + r.validation.score, 0) / results.length).toFixed(1)}/100`);
  
  // Breakdown by page type
  const byType = results.reduce((acc, r) => {
    if (!acc[r.pageType]) acc[r.pageType] = { total: 0, passed: 0, failed: 0 };
    acc[r.pageType].total++;
    if (r.validation.valid) acc[r.pageType].passed++;
    else acc[r.pageType].failed++;
    return acc;
  }, {} as Record<string, { total: number; passed: number; failed: number }>);
  
  console.log('\n📈 Breakdown by Page Type:');
  Object.entries(byType).forEach(([type, stats]) => {
    console.log(`   ${type}: ${stats.passed}/${stats.total} passed (${((stats.passed/stats.total)*100).toFixed(0)}%)`);
  });
  
  if (failCount === 0) {
    console.log('\n🎉 All pages pass validation!');
  } else {
    console.log(`\n⚠️  ${failCount} pages need attention.`);
  }
  
  console.log('\n💡 Next Steps:');
  console.log('   1. Fix any failed pages');
  console.log('   2. Review warnings for optimization opportunities');
  console.log('   3. Test rendering on deployed site');
  console.log('   4. Monitor bounce rate & time-on-page metrics\n');
  
  return results;
}

// Export for browser console use
if (typeof window !== 'undefined') {
  (window as any).validateIntentRewrites = validateIntentRewrites;
  console.log('💡 Run window.validateIntentRewrites() in console to validate all pages');
}
