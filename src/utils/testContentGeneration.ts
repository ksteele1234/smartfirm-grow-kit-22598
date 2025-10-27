import { generatePageContent, type ContentConfig } from '@/lib/pageGenerator';
import { validatePageContent } from './contentValidator';

/**
 * Phase 5: Test Suite for Content Generation
 * Run this to validate generated content
 */

export function runContentGenerationTests() {
  console.log('\n🧪 Running Content Generation Tests...\n');
  
  const testConfigs: ContentConfig[] = [
    {
      pageName: 'Stop Losing Clients to Tech-Savvy CPAs',
      pageType: 'problem',
      industryFocus: 'CPA',
      primaryKeyword: 'CPA marketing automation',
      secondaryKeywords: ['client retention strategies', 'CPA lead generation'],
      personaTarget: 'nick_nashville_cpa'
    },
    {
      pageName: 'Marketing Automation',
      pageType: 'technical',
      industryFocus: 'Accounting Firm',
      primaryKeyword: 'marketing automation for accounting firms',
      secondaryKeywords: ['accounting firm marketing', 'automated client acquisition']
    },
    {
      pageName: 'Bookkeeping Services',
      pageType: 'industry',
      industryFocus: 'Bookkeeper',
      primaryKeyword: 'bookkeeping marketing',
      secondaryKeywords: ['bookkeeper lead generation', 'bookkeeping firm growth'],
      personaTarget: 'betty_bookkeeper'
    }
  ];
  
  const results: Array<{
    config: ContentConfig;
    content: ReturnType<typeof generatePageContent>;
    validation: ReturnType<typeof validatePageContent>;
  }> = [];
  
  testConfigs.forEach((config, index) => {
    console.log(`\nTest ${index + 1}: ${config.pageName}`);
    console.log('-'.repeat(60));
    
    // Generate content
    const content = generatePageContent(config);
    console.log(`✓ Content generated`);
    
    // Validate keyword placement
    console.log(`\nKeyword Validation:`);
    console.log(`  Primary: ${config.primaryKeyword}`);
    console.log(`  Valid: ${content.validation.valid ? '✓' : '✗'}`);
    
    if (content.validation.errors.length > 0) {
      console.log(`  Errors:`);
      content.validation.errors.forEach(err => console.log(`    - ${err}`));
    }
    
    if (content.validation.warnings.length > 0) {
      console.log(`  Warnings:`);
      content.validation.warnings.forEach(warn => console.log(`    - ${warn}`));
    }
    
    // Validate full content
    const fullValidation = validatePageContent({
      html: `<h1>${content.h1}</h1><p>${content.intro}</p>${content.sections.map(s => `<h2>${s.h2}</h2>${s.paragraphs.map(p => `<p>${p}</p>`).join('')}`).join('')}`,
      meta: content.meta,
      primaryKeyword: config.primaryKeyword
    });
    
    console.log(`\nFull Validation Score: ${fullValidation.score}/100`);
    
    results.push({
      config,
      content,
      validation: fullValidation
    });
  });
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 Test Summary');
  console.log('='.repeat(60));
  
  const passCount = results.filter(r => r.validation.valid).length;
  const avgScore = results.reduce((sum, r) => sum + r.validation.score, 0) / results.length;
  
  console.log(`Total Tests: ${results.length}`);
  console.log(`Passed: ${passCount}`);
  console.log(`Failed: ${results.length - passCount}`);
  console.log(`Average Score: ${avgScore.toFixed(1)}/100`);
  console.log('');
  
  return results;
}

// Export for use in development
if (import.meta.env.DEV) {
  (window as any).testContentGeneration = runContentGenerationTests;
  console.log('💡 Run window.testContentGeneration() in console to test content generation');
}
