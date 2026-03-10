/**
 * analyze-queue.cjs
 * Reads data/programmatic-pages.json and outputs a comprehensive analysis
 * of published vs unpublished pages, grouped by subcategory.
 */

const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'programmatic-pages.json');
const pages = require(dataPath);

// ---------------------------------------------------------------------------
// Helper: determine template type from category
// ---------------------------------------------------------------------------
function templateType(category) {
  const solutionCategories = ['solutions-conversational', 'hybrid', 'alternatives'];
  const serviceCategories = ['services-technical', 'service-combinations', 'profession-specific'];

  if (solutionCategories.includes(category)) return 'solution';
  if (serviceCategories.includes(category)) return 'service';
  return category; // fallback
}

// ---------------------------------------------------------------------------
// 1. Total pages, published vs unpublished
// ---------------------------------------------------------------------------
const totalPages = pages.length;
const published = pages.filter(p => p.published);
const unpublished = pages.filter(p => !p.published);

console.log('='.repeat(80));
console.log('  PROGRAMMATIC PAGES - QUEUE ANALYSIS');
console.log('='.repeat(80));
console.log();
console.log(`Total pages:       ${totalPages}`);
console.log(`Published:         ${published.length}`);
console.log(`Unpublished:       ${unpublished.length}`);
console.log(`Publish rate:      ${((published.length / totalPages) * 100).toFixed(1)}%`);
console.log();

// ---------------------------------------------------------------------------
// 2. Group unpublished pages by subcategory
// ---------------------------------------------------------------------------
const subcatMap = new Map();

for (const page of unpublished) {
  if (!subcatMap.has(page.subcategory)) {
    subcatMap.set(page.subcategory, {
      category: page.category,
      pages: [],
    });
  }
  subcatMap.get(page.subcategory).pages.push(page);
}

// 3. Sort subcategories by page count descending
const sorted = [...subcatMap.entries()].sort((a, b) => b[1].pages.length - a[1].pages.length);

console.log('-'.repeat(80));
console.log('  UNPUBLISHED PAGES BY SUBCATEGORY  (sorted by page count, most first)');
console.log('-'.repeat(80));
console.log();

for (const [subcategory, data] of sorted) {
  const audiences = [...new Set(data.pages.map(p => p.targetAudience))];
  const tType = templateType(data.category);

  console.log(`  Subcategory:       ${subcategory}`);
  console.log(`  Template type:     ${tType}  (category: ${data.category})`);
  console.log(`  Page count:        ${data.pages.length}`);
  console.log(`  Target audiences:  ${audiences.join(', ')}`);
  console.log();
  console.log('    Slug                                                            Focus Keyword');
  console.log('    ' + '-'.repeat(76));

  for (const page of data.pages) {
    const slug = page.slug.padEnd(60);
    console.log(`    ${slug}  ${page.focusKeyword}`);
  }

  console.log();
}

// ---------------------------------------------------------------------------
// 4. Summary stats
// ---------------------------------------------------------------------------
const counts = sorted.map(([, data]) => data.pages.length);
const subcatCount = sorted.length;
const avgPages = (counts.reduce((a, b) => a + b, 0) / subcatCount).toFixed(1);
const maxPages = Math.max(...counts);
const minPages = Math.min(...counts);
const maxSubcat = sorted.find(([, d]) => d.pages.length === maxPages)[0];
const minSubcat = sorted.find(([, d]) => d.pages.length === minPages)[0];

console.log('='.repeat(80));
console.log('  SUMMARY STATS  (unpublished pages only)');
console.log('='.repeat(80));
console.log();
console.log(`  Subcategories:                ${subcatCount}`);
console.log(`  Average pages / subcategory:  ${avgPages}`);
console.log(`  Max pages in a subcategory:   ${maxPages}  (${maxSubcat})`);
console.log(`  Min pages in a subcategory:   ${minPages}  (${minSubcat})`);
console.log();

// Quick bar chart
console.log('-'.repeat(80));
console.log('  DISTRIBUTION  (each # = 1 page)');
console.log('-'.repeat(80));
console.log();

for (const [subcategory, data] of sorted) {
  const bar = '#'.repeat(data.pages.length);
  const label = subcategory.padEnd(35);
  console.log(`  ${label} ${bar}  (${data.pages.length})`);
}

console.log();
console.log('Done.');
