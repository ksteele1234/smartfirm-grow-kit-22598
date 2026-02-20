const fs = require('fs');
const path = require('path');

// Path to the programmatic pages JSON file
const pagesFilePath = path.join(__dirname, '../data/programmatic-pages.json');

// Read the current pages data
const pagesData = JSON.parse(fs.readFileSync(pagesFilePath, 'utf8'));

// Get today's date (UTC)
const today = new Date();
today.setUTCHours(0, 0, 0, 0); // Set to beginning of day for accurate comparison

let pagesPublished = 0;
let pagesList = [];

// Iterate through all pages and update published status
pagesData.forEach(page => {
  // Parse the publishDate
  const publishDate = new Date(page.publishDate);
  publishDate.setUTCHours(0, 0, 0, 0); // Set to beginning of day

  // If page is not yet published and publishDate has passed or is today
  if (!page.published && publishDate <= today) {
    page.published = true;
    pagesPublished++;
    pagesList.push(page.title);
    console.log(`✅ Publishing: ${page.title} (ID: ${page.id})`);
  }
});

// Write updated data back to file
if (pagesPublished > 0) {
  fs.writeFileSync(pagesFilePath, JSON.stringify(pagesData, null, 2), 'utf8');

  console.log('\n' + '='.repeat(60));
  console.log(`📢 PUBLISHED ${pagesPublished} PAGE(S) ON ${today.toISOString().split('T')[0]}`);
  console.log('='.repeat(60));

  pagesList.forEach((title, index) => {
    console.log(`${index + 1}. ${title}`);
  });

  console.log('='.repeat(60));
  console.log('✨ Pages successfully updated in programmatic-pages.json');
  console.log('🚀 Netlify will rebuild site with newly published pages\n');
} else {
  console.log('\n' + '='.repeat(60));
  console.log('ℹ️  NO PAGES READY FOR PUBLICATION');
  console.log('='.repeat(60));
  console.log(`Current date: ${today.toISOString().split('T')[0]}`);

  // Show next upcoming pages
  const upcomingPages = pagesData
    .filter(page => !page.published)
    .sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate))
    .slice(0, 5);

  if (upcomingPages.length > 0) {
    console.log('\n📅 NEXT PAGES SCHEDULED FOR PUBLICATION:');
    upcomingPages.forEach((page, index) => {
      console.log(`${index + 1}. ${page.publishDate} - ${page.title}`);
    });
  }

  console.log('='.repeat(60) + '\n');
}

// Output summary statistics
const totalPages = pagesData.length;
const publishedCount = pagesData.filter(p => p.published).length;
const unpublishedCount = totalPages - publishedCount;

console.log('📊 SUMMARY STATISTICS:');
console.log(`   Total pages: ${totalPages}`);
console.log(`   Published: ${publishedCount}`);
console.log(`   Unpublished: ${unpublishedCount}`);
console.log(`   Progress: ${((publishedCount / totalPages) * 100).toFixed(1)}%\n`);

// Exit with appropriate code
process.exit(0);
