const fs = require('fs');
const path = require('path');

// Read the page data (will restore from backup if needed)
const pagesDataPath = path.join(__dirname, '../../New SmartFirm Website 2026Feb/20260216_NewSmartFirmWebsite/data/programmatic-pages.json');

// First, restore from the original generated-all-pages output
// We need to regenerate the JSON properly

console.log('🔄 Restoring and filtering pages precisely...\n');

// Read all generated markdown files to rebuild the list
const generatedPagesDir = path.join(__dirname, '../generated-pages');

const allPages = [];
const categories = ['services-technical', 'solutions-conversational', 'hybrid', 'profession-specific', 'alternatives', 'service-combinations'];

categories.forEach(category => {
  const categoryDir = path.join(generatedPagesDir, category);
  if (fs.existsSync(categoryDir)) {
    const files = fs.readdirSync(categoryDir);
    files.forEach(file => {
      if (file.endsWith('.md')) {
        const content = fs.readFileSync(path.join(categoryDir, file), 'utf8');

        // Extract frontmatter
        const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
        if (frontmatterMatch) {
          const frontmatter = {};
          const lines = frontmatterMatch[1].split('\n');
          lines.forEach(line => {
            const match = line.match(/^(\w+):\s*(.*)$/);
            if (match) {
              frontmatter[match[1]] = match[2];
            }
          });

          allPages.push({
            id: parseInt(frontmatter.id),
            slug: frontmatter.slug,
            title: frontmatter.title,
            category: frontmatter.category,
            subcategory: frontmatter.subcategory || '',
            targetAudience: frontmatter.targetAudience,
            published: frontmatter.published === 'true',
            publishDate: frontmatter.publishDate,
            metaDescription: frontmatter.metaDescription,
            focusKeyword: frontmatter.focusKeyword
          });
        }
      }
    });
  }
});

console.log(`📊 Found ${allPages.length} generated pages\n`);

// More precise removal - only remove if:
// 1. Subcategory is "ai-chatbot" or "voice-ai"
// 2. OR title contains "AI Chatbot", "Voice AI", "Chatbot", "Voice Assistant"
const pagesToRemove = allPages.filter(page => {
  const subcategoryLower = (page.subcategory || '').toLowerCase();
  const titleLower = page.title.toLowerCase();

  // Check subcategory
  if (subcategoryLower === 'ai-chatbot' || subcategoryLower === 'voice-ai') {
    return true;
  }

  // Check title for specific AI/chatbot terms
  const chatbotTerms = [
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

  return chatbotTerms.some(term => titleLower.includes(term));
});

const remainingPages = allPages.filter(page => !pagesToRemove.find(p => p.id === page.id));

console.log(`Found ${pagesToRemove.length} pages to remove:\n`);

pagesToRemove.forEach((page, index) => {
  console.log(`${index + 1}. [ID ${page.id}] ${page.title}`);
  console.log(`   Category: ${page.category}`);
  console.log(`   Subcategory: ${page.subcategory}\n`);
});

// Delete files
console.log('🗑️  Deleting unwanted markdown files...\n');

let deletedCount = 0;

pagesToRemove.forEach(page => {
  const categoryDir = path.join(generatedPagesDir, page.category);
  const filePath = path.join(categoryDir, `${page.slug}.md`);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    deletedCount++;
    console.log(`✅ Deleted: ${page.category}/${page.slug}.md`);
  }
});

console.log(`\n📊 Deleted ${deletedCount} files\n`);

// Save updated data
console.log('💾 Saving updated programmatic-pages.json...\n');
fs.writeFileSync(pagesDataPath, JSON.stringify(remainingPages, null, 2), 'utf8');

console.log(`✅ Updated programmatic-pages.json`);
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

console.log('\n✨ Cleanup complete!\n');
