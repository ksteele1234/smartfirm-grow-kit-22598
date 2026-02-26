const fs = require('fs');
const path = require('path');

// Read the page data
const pagesDataPath = path.join(__dirname, '../../New SmartFirm Website 2026Feb/20260216_NewSmartFirmWebsite/data/programmatic-pages.json');
const pagesData = JSON.parse(fs.readFileSync(pagesDataPath, 'utf8'));

// Directory containing generated pages
const generatedPagesDir = path.join(__dirname, '../generated-pages');

console.log('🔍 Identifying pages to remove...\n');

// Keywords to remove
const removeKeywords = ['voice', 'chatbot', 'voice ai', 'ai chatbot'];

// Find pages to remove
const pagesToRemove = pagesData.filter(page => {
  const titleLower = page.title.toLowerCase();
  const slugLower = page.slug.toLowerCase();
  const subcategoryLower = (page.subcategory || '').toLowerCase();

  return removeKeywords.some(keyword =>
    titleLower.includes(keyword) ||
    slugLower.includes(keyword) ||
    subcategoryLower.includes(keyword)
  );
});

console.log(`Found ${pagesToRemove.length} pages to remove:\n`);

pagesToRemove.forEach((page, index) => {
  console.log(`${index + 1}. [ID ${page.id}] ${page.title}`);
  console.log(`   Category: ${page.category}`);
  console.log(`   Slug: ${page.slug}\n`);
});

// Remove pages from data
const remainingPages = pagesData.filter(page => {
  const titleLower = page.title.toLowerCase();
  const slugLower = page.slug.toLowerCase();
  const subcategoryLower = (page.subcategory || '').toLowerCase();

  return !removeKeywords.some(keyword =>
    titleLower.includes(keyword) ||
    slugLower.includes(keyword) ||
    subcategoryLower.includes(keyword)
  );
});

console.log('='.repeat(60));
console.log(`📊 SUMMARY:`);
console.log(`   Original pages: ${pagesData.length}`);
console.log(`   Pages to remove: ${pagesToRemove.length}`);
console.log(`   Remaining pages: ${remainingPages.length}`);
console.log('='.repeat(60) + '\n');

// Delete generated markdown files
console.log('🗑️  Deleting generated markdown files...\n');

let deletedCount = 0;
let notFoundCount = 0;

pagesToRemove.forEach(page => {
  const categoryDir = path.join(generatedPagesDir, page.category);
  const filePath = path.join(categoryDir, `${page.slug}.md`);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    deletedCount++;
    console.log(`✅ Deleted: ${page.category}/${page.slug}.md`);
  } else {
    notFoundCount++;
    console.log(`⚠️  Not found: ${page.category}/${page.slug}.md`);
  }
});

console.log(`\n📊 File deletion summary:`);
console.log(`   Deleted: ${deletedCount} files`);
console.log(`   Not found: ${notFoundCount} files\n`);

// Save updated data
console.log('💾 Saving updated programmatic-pages.json...\n');
fs.writeFileSync(pagesDataPath, JSON.stringify(remainingPages, null, 2), 'utf8');

console.log('✅ Updated programmatic-pages.json');
console.log(`   New total: ${remainingPages.length} pages\n`);

// Summary by category
const categorySummary = remainingPages.reduce((acc, page) => {
  acc[page.category] = (acc[page.category] || 0) + 1;
  return acc;
}, {});

console.log('📈 Remaining pages by category:');
Object.entries(categorySummary).forEach(([category, count]) => {
  console.log(`   ${category}: ${count} pages`);
});

console.log('\n✨ All unwanted pages removed successfully!\n');
