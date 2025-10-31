import { validateIntentAnswer } from './contentValidator';
import { servicePages, solutionPages } from '@/data/cmsPages';

/**
 * Validation script for first-sentence intent rewrites
 * Run in browser console: window.validateIntentRewrites()
 */

interface PageValidation {
  pageName: string;
  pageType: 'service' | 'solution' | 'industry';
  url: string;
  firstSentence: string;
  primaryKeyword: string;
  validation: ReturnType<typeof validateIntentAnswer>;
}

export function validateIntentRewrites() {
  console.log('\n🧪 Validating Intent Rewrites for 24 Pages...\n');
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
  
  // Solution pages (7) - manually defined with updated heroSubtitle first sentences
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
  console.log(`Total Pages: ${results.length}/24`);
  console.log(`✅ Passed: ${passCount}`);
  console.log(`❌ Failed: ${failCount}`);
  console.log(`Average Score: ${(results.reduce((sum, r) => sum + r.validation.score, 0) / results.length).toFixed(1)}/100`);
  
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
