const fs = require('fs');
const path = require('path');

console.log('🚀 Preparing final page list with updated publishing schedule...\n');

// Load original page data
const originalDataPath = path.join(__dirname, '../../New SmartFirm Website 2026Feb/20260216_NewSmartFirmWebsite/data/programmatic-pages.json');

// Check if we need to restore from a backup first
let originalData;
try {
  originalData = JSON.parse(fs.readFileSync(originalDataPath, 'utf8'));
  console.log(`📖 Loaded ${originalData.length} pages from data file\n`);
} catch (error) {
  console.error('❌ Error loading original data:', error.message);
  process.exit(1);
}

// Filter out AI chatbot and voice AI pages
console.log('🔍 Filtering out AI chatbot and Voice AI pages...\n');

const excludeSubcategories = ['ai-chatbot', 'voice-ai'];
const excludeTitleKeywords = [
  'ai chatbot',
  'chatbot implementation',
  'automated chat',
  'website chatbot',
  'ai assistant',
  'voice ai',
  'voice assistant',
  'phone automation',
  'ai phone',
  'call automation'
];

const filteredPages = originalData.filter(page => {
  const subcategoryLower = (page.subcategory || '').toLowerCase();
  const titleLower = page.title.toLowerCase();

  // Exclude by subcategory
  if (excludeSubcategories.includes(subcategoryLower)) {
    console.log(`❌ Excluding [${page.category}]: ${page.title} (subcategory: ${page.subcategory})`);
    return false;
  }

  // Exclude by title keywords
  if (excludeTitleKeywords.some(keyword => titleLower.includes(keyword))) {
    console.log(`❌ Excluding [${page.category}]: ${page.title} (title match)`);
    return false;
  }

  return true;
});

console.log(`\n✅ Filtered to ${filteredPages.length} pages (removed ${originalData.length - filteredPages.length})\n`);

// Group pages by category
const pagesByCategory = {
  'solutions-conversational': filteredPages.filter(p => p.category === 'solutions-conversational'),
  'hybrid': filteredPages.filter(p => p.category === 'hybrid'),
  'service-combinations': filteredPages.filter(p => p.category === 'service-combinations'),
  'services-technical': filteredPages.filter(p => p.category === 'services-technical'),
  'profession-specific': filteredPages.filter(p => p.category === 'profession-specific'),
  'alternatives': filteredPages.filter(p => p.category === 'alternatives')
};

console.log('📊 Pages by category:');
Object.entries(pagesByCategory).forEach(([category, pages]) => {
  console.log(`   ${category}: ${pages.length} pages`);
});
console.log('');

// Assign new publishing schedule
// Start date: March 1, 2026
// Publish ~12-15 pages per week

const startDate = new Date('2026-03-01');
const pagesPerWeek = 12;

console.log('📅 Assigning new publishing schedule...\n');
console.log(`Start date: ${startDate.toISOString().split('T')[0]}`);
console.log(`Pages per week: ${pagesPerWeek}\n`);

// New publishing order
const publishingOrder = [
  { category: 'solutions-conversational', label: 'Conversational Solutions' },
  { category: 'hybrid', label: 'Hybrid Pages' },
  { category: 'service-combinations', label: 'Service Combinations' },
  { category: 'services-technical', label: 'Technical Services' },
  { category: 'profession-specific', label: 'Profession Specific' },
  { category: 'alternatives', label: 'Alternatives' }
];

const finalPages = [];
let currentDate = new Date(startDate);
let pagesInCurrentWeek = 0;
let weekNumber = 1;

console.log('Publishing schedule:\n');

publishingOrder.forEach(({ category, label }) => {
  const pages = pagesByCategory[category];

  console.log(`${label} (${pages.length} pages):`);

  pages.forEach((page, index) => {
    // First 12 pages start as published
    const isFirstBatch = finalPages.length < 12;

    page.published = isFirstBatch;
    page.publishDate = currentDate.toISOString().split('T')[0];

    finalPages.push(page);

    pagesInCurrentWeek++;

    // Log week transitions
    if (pagesInCurrentWeek === pagesPerWeek || index === pages.length - 1) {
      console.log(`   Week ${weekNumber}: ${currentDate.toISOString().split('T')[0]} (${pagesInCurrentWeek} pages)`);

      // Move to next Monday
      currentDate = new Date(currentDate);
      currentDate.setDate(currentDate.getDate() + 7);

      weekNumber++;
      pagesInCurrentWeek = 0;
    }
  });

  console.log('');
});

console.log(`Total weeks: ${weekNumber - 1}`);
console.log(`End date: ${new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}\n`);

// Save updated data
console.log('💾 Saving updated programmatic-pages.json...\n');
fs.writeFileSync(originalDataPath, JSON.stringify(finalPages, null, 2), 'utf8');

console.log(`✅ Saved ${finalPages.length} pages to programmatic-pages.json\n`);

// Summary
console.log('='.repeat(60));
console.log('📊 FINAL SUMMARY');
console.log('='.repeat(60));
console.log(`Total pages: ${finalPages.length}`);
console.log(`Published (ready for launch): ${finalPages.filter(p => p.published).length}`);
console.log(`Scheduled for later: ${finalPages.filter(p => !p.published).length}`);
console.log(`Start date: ${startDate.toISOString().split('T')[0]}`);
console.log(`End date: ${new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}`);
console.log(`Duration: ${weekNumber - 1} weeks`);
console.log('='.repeat(60));
console.log('\n✨ Ready to generate pages!\n');
