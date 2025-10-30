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
  console.log('\n🧪 Validating Intent Rewrites for 25 Pages...\n');
  console.log('='.repeat(80));
  
  const results: PageValidation[] = [];
  
  // Service pages - map with primary keywords
  const serviceKeywords: Record<string, string> = {
    'marketing-automation': 'marketing automation for accounting firms',
    'seo-for-accountants': 'SEO for accounting firms',
    'website-design': 'accounting firm website design',
    'email-marketing': 'email marketing for accountants',
    'content-marketing': 'content marketing for CPAs',
    'automated-lead-follow-up': 'automated lead follow-up',
    'social-media-management': 'social media for accounting firms',
    'client-review-generation': 'client review generation',
    'online-reputation-management': 'online reputation management',
    'business-optimization': 'business optimization services',
    'technology-solutions': 'technology solutions',
    'strategy-integration': 'strategy and integration',
    'executive-services': 'executive services',
    'add-ons': 'marketing add-ons'
  };
  
  Object.entries(servicePages).forEach(([slug, data]) => {
    const firstSentence = data.heroSubtitle.split('.')[0] + '.';
    const primaryKeyword = serviceKeywords[slug] || 'accounting firm marketing';
    const validation = validateIntentAnswer(firstSentence, primaryKeyword);
    
    results.push({
      pageName: data.title,
      pageType: 'service',
      url: `/services/${slug}`,
      firstSentence,
      primaryKeyword,
      validation
    });
  });
  
  // Solution pages - map with primary keywords
  const solutionKeywords: Record<string, string> = {
    'stop-losing-clients': 'modern marketing services for CPAs',
    'client-retention': 'client retention strategies for CPAs',
    'scale-firm': 'accounting firm scaling strategies',
    'get-more-referrals': 'CPA referral generation',
    'grow-without-pains': 'accounting firm growth',
    'protect-practice': 'CPA practice protection',
    'work-less-earn-more': 'accounting firm efficiency'
  };
  
  Object.entries(solutionPages).forEach(([slug, data]) => {
    const firstSentence = data.heroSubtitle.split('.')[0] + '.';
    const primaryKeyword = solutionKeywords[slug] || 'accounting firm solutions';
    const validation = validateIntentAnswer(firstSentence, primaryKeyword);
    
    results.push({
      pageName: data.title,
      pageType: 'solution',
      url: `/solutions/${slug}`,
      firstSentence,
      primaryKeyword,
      validation
    });
  });
  
  // Industry pages (4 - need to add manually as they're in separate files)
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
  console.log(`Total Pages: ${results.length}/25`);
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
