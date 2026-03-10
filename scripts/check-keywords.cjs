const fs = require('fs');
const content = fs.readFileSync(__dirname + '/../src/data/programmaticSeoPages.ts', 'utf8');
const pages = [
  { slug: 'how-to-get-more-reviews-for-my-cpa-firm', keyword: 'get more reviews' },
  { slug: 'how-do-i-get-clients-to-leave-reviews-for-my-accounting-firm', keyword: 'get clients to leave reviews' },
  { slug: 'how-to-ask-clients-for-reviews-as-a-tax-preparer', keyword: 'ask clients for reviews' },
  { slug: 'how-to-increase-online-reviews-for-bookkeepers', keyword: 'increase online reviews' },
  { slug: 'how-to-generate-5-star-reviews-for-my-accounting-practice', keyword: 'generate 5 star reviews' }
];

pages.forEach(p => {
  const start = content.indexOf('"' + p.slug + '": {');
  const nextSlug = content.indexOf('},\n  "', start + 100);
  const block = content.substring(start, nextSlug > -1 ? nextSlug : start + 8000).toLowerCase();
  const kw = p.keyword.toLowerCase();

  const getSection = (startKey, endKey) => {
    const s = block.indexOf(startKey.toLowerCase());
    const e = block.indexOf(endKey.toLowerCase(), s + 1);
    if (s === -1) return '';
    return block.substring(s, e > -1 ? e : s + 500);
  };

  const heroSub = getSection('"heroSubtitle"', '"problemStatement"');
  const probStmt = getSection('"problemStatement"', '"solutionOverview"');
  const solOver = getSection('"solutionOverview"', '"problemSolutionPairs"');
  const benefits = getSection('"keyBenefits"', '"howItWorks"');
  const faqs = getSection('"faqs"', '"ctaTitle"');

  const count = (block.match(new RegExp(kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;

  console.log('\n=== ' + p.slug.substring(0, 50) + ' ===');
  console.log('Keyword: "' + p.keyword + '"');
  console.log('  heroSubtitle:      ' + (heroSub.includes(kw) ? 'YES' : 'MISSING'));
  console.log('  problemStatement:  ' + (probStmt.includes(kw) ? 'YES' : 'MISSING'));
  console.log('  solutionOverview:  ' + (solOver.includes(kw) ? 'YES' : 'MISSING'));
  console.log('  keyBenefits:       ' + (benefits.includes(kw) ? 'YES' : 'MISSING'));
  console.log('  FAQs:              ' + (faqs.includes(kw) ? 'YES' : 'MISSING'));
  console.log('  Total occurrences: ' + count);
});
