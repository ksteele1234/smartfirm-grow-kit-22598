const fs = require('fs');
const path = require('path');

console.log('📅 Updating publishing schedule with natural cadence...\n');

// Load page data
const dataPath = path.join(__dirname, '../../New SmartFirm Website 2026Feb/20260216_NewSmartFirmWebsite/data/programmatic-pages.json');
const pages = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

console.log(`📖 Loaded ${pages.length} pages\n`);

// Natural publishing pattern (8-day cycle)
// Day 1: 3 pages
// Day 2: 1 page
// Day 3: 2 pages
// Day 4: 0 pages
// Day 5: 2 pages
// Day 6: 1 page
// Day 7: 2 pages
// Day 8: 0 pages
// Total: 11 pages per 8-day cycle

const publishingPattern = [3, 1, 2, 0, 2, 1, 2, 0];
const pagesPerCycle = publishingPattern.reduce((sum, count) => sum + count, 0);

console.log('Publishing pattern (8-day cycle):');
publishingPattern.forEach((count, index) => {
  console.log(`   Day ${index + 1}: ${count} page${count !== 1 ? 's' : ''}`);
});
console.log(`   Total per cycle: ${pagesPerCycle} pages\n`);

// Calculate timeline
const totalCycles = Math.ceil(pages.length / pagesPerCycle);
const totalDays = totalCycles * 8;
const totalWeeks = Math.ceil(totalDays / 7);

console.log('Timeline calculation:');
console.log(`   Total pages: ${pages.length}`);
console.log(`   Total cycles needed: ${totalCycles} cycles`);
console.log(`   Total days: ${totalDays} days`);
console.log(`   Total weeks: ${totalWeeks} weeks (${Math.floor(totalDays / 30)} to ${Math.ceil(totalDays / 30)} months)\n`);

// Assign publish dates
const startDate = new Date('2026-03-01');
let currentDate = new Date(startDate);
let pageIndex = 0;
let cycleNumber = 1;
let publishedCount = 0;

console.log(`Start date: ${startDate.toISOString().split('T')[0]}\n`);
console.log('Publishing schedule:\n');

while (pageIndex < pages.length) {
  console.log(`Cycle ${cycleNumber} (starting ${currentDate.toISOString().split('T')[0]}):`);

  for (let dayInCycle = 0; dayInCycle < publishingPattern.length && pageIndex < pages.length; dayInCycle++) {
    const pagesThisDay = publishingPattern[dayInCycle];

    if (pagesThisDay > 0) {
      const pagesToPublish = [];

      for (let i = 0; i < pagesThisDay && pageIndex < pages.length; i++) {
        pages[pageIndex].publishDate = currentDate.toISOString().split('T')[0];

        // Mark first 3 pages as published (for immediate launch)
        pages[pageIndex].published = publishedCount < 3;

        pagesToPublish.push(pages[pageIndex].title);
        pageIndex++;
        publishedCount++;
      }

      console.log(`   Day ${dayInCycle + 1} (${currentDate.toISOString().split('T')[0]}): ${pagesThisDay} page${pagesThisDay !== 1 ? 's' : ''}`);
      pagesToPublish.forEach(title => console.log(`      - ${title}`));
    } else {
      console.log(`   Day ${dayInCycle + 1} (${currentDate.toISOString().split('T')[0]}): 0 pages`);
    }

    // Move to next day
    currentDate = new Date(currentDate);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  console.log('');
  cycleNumber++;
}

const endDate = new Date(currentDate);
endDate.setDate(endDate.getDate() - 1); // Go back to last publish date

console.log('='.repeat(60));
console.log('📊 FINAL TIMELINE');
console.log('='.repeat(60));
console.log(`Total pages: ${pages.length}`);
console.log(`Start date: ${startDate.toISOString().split('T')[0]}`);
console.log(`End date: ${endDate.toISOString().split('T')[0]}`);
console.log(`Duration: ${Math.ceil((endDate - startDate) / (24 * 60 * 60 * 1000))} days (${totalWeeks} weeks, ~${Math.round(totalDays / 30)} months)`);
console.log(`Published immediately: ${pages.filter(p => p.published).length}`);
console.log(`Scheduled for later: ${pages.filter(p => !p.published).length}`);
console.log('='.repeat(60));

// Save updated data
console.log('\n💾 Saving updated schedule...\n');
fs.writeFileSync(dataPath, JSON.stringify(pages, null, 2), 'utf8');

console.log('✅ Publishing schedule updated successfully!\n');
