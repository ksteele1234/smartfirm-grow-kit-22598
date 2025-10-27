import { execSync } from 'child_process';

/**
 * Orchestrator script that runs all schema injection scripts
 */
function main() {
  console.log('\n🚀 Starting Schema Injection Pipeline...\n');
  
  const scripts = [
    'scripts/inject-faq-schema.js',
    'scripts/inject-organization-schema.js',
    'scripts/inject-website-schema.js',
    'scripts/inject-breadcrumb-schema.js',
    'scripts/inject-service-schema.js',
    'scripts/inject-article-schema.js',
    'scripts/inject-webpage-schema.js'
  ];
  
  let totalSuccess = 0;
  let totalErrors = 0;
  
  scripts.forEach(script => {
    try {
      console.log(`\n▶ Running ${script}...`);
      execSync(`node ${script}`, { stdio: 'inherit' });
      totalSuccess++;
    } catch (error) {
      console.error(`✗ Failed to run ${script}:`, error.message);
      totalErrors++;
    }
  });
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 Pipeline Complete');
  console.log('='.repeat(60));
  console.log(`✓ Successfully completed: ${totalSuccess} scripts`);
  if (totalErrors > 0) {
    console.log(`✗ Errors: ${totalErrors} scripts`);
  }
  console.log('='.repeat(60) + '\n');
}

main();
