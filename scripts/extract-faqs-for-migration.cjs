#!/usr/bin/env node
/**
 * Extract FAQs from faqContent.ts and prepare for Supabase migration
 */

const fs = require('fs');
const path = require('path');

// Read the faqContent.ts file
const faqFilePath = path.resolve(__dirname, '../src/data/faqContent.ts');
const faqContent = fs.readFileSync(faqFilePath, 'utf-8');

// Extract the faqCategories array using regex
const categoriesMatch = faqContent.match(/export const faqCategories: FAQCategory\[\] = (\[[\s\S]*?\]);/);

if (!categoriesMatch) {
  console.error('Could not find faqCategories in file');
  process.exit(1);
}

// Clean up the extracted content and convert to valid JSON
let categoriesStr = categoriesMatch[1];

// Remove TypeScript-specific syntax
categoriesStr = categoriesStr
  .replace(/category:/g, '"category":')
  .replace(/info:/g, '"info":')
  .replace(/questions:/g, '"questions":')
  .replace(/question:/g, '"question":')
  .replace(/answer:/g, '"answer":');

// Parse the JSON
let categories;
try {
  categories = eval(categoriesStr); // Using eval since it's already valid JS
} catch (e) {
  console.error('Failed to parse categories:', e.message);
  process.exit(1);
}

// Generate slugs for each FAQ
function generateSlug(question) {
  return question
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 100);
}

// Flatten FAQs and prepare for Supabase
const faqs = [];
let order = 0;

categories.forEach((category) => {
  category.questions.forEach((faq) => {
    order++;
    const slug = generateSlug(faq.question);
    
    faqs.push({
      slug,
      question: faq.question,
      answer: faq.answer,
      category: category.category,
      display_order: order,
      is_published: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    });
  });
});

// Output as JSON for Supabase import
const outputPath = path.resolve(__dirname, '../faqs-migration.json');
fs.writeFileSync(outputPath, JSON.stringify(faqs, null, 2), 'utf-8');

console.log(`\n✅ Extracted ${faqs.length} FAQs from ${categories.length} categories`);
console.log(`📄 Output saved to: ${outputPath}`);
console.log(`\nCategories found:`);
categories.forEach(cat => {
  const count = cat.questions.length;
  console.log(`  - ${cat.category}: ${count} questions`);
});
console.log('');
