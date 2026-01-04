#!/usr/bin/env node
/**
 * Migrate FAQs from JSON file to Supabase
 */

const fs = require('fs');
const path = require('path');

function getEnv(name) {
  return process.env[name] || process.env[name.replace(/^VITE_/, '')];
}

async function migrateFAQs() {
  console.log('\n📍 Migrating FAQs to Supabase...\n');
  
  const baseUrl = getEnv('VITE_SUPABASE_URL');
  const anonKey =
    getEnv('VITE_SUPABASE_ANON_KEY') ||
    getEnv('VITE_SUPABASE_PUBLISHABLE_KEY') ||
    getEnv('SUPABASE_ANON_KEY');

  if (!baseUrl || !anonKey) {
    console.error('❌ Error: Missing Supabase environment variables');
    console.error('   Required: VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY');
    process.exit(1);
  }

  // Read the FAQs JSON file
  const faqsPath = path.resolve(__dirname, '../faqs-migration.json');
  if (!fs.existsSync(faqsPath)) {
    console.error(`❌ Error: FAQs migration file not found at ${faqsPath}`);
    console.error('   Run: node scripts/extract-faqs-for-migration.cjs first');
    process.exit(1);
  }

  const faqs = JSON.parse(fs.readFileSync(faqsPath, 'utf-8'));
  console.log(`📄 Found ${faqs.length} FAQs to migrate`);

  // Insert FAQs into Supabase
  try {
    const url = new URL(`${baseUrl}/rest/v1/faqs`);
    
    const res = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'apikey': anonKey,
        'authorization': `Bearer ${anonKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(faqs)
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status}: ${errorText}`);
    }

    console.log(`\n✅ Successfully migrated ${faqs.length} FAQs to Supabase`);
    console.log('');
  } catch (e) {
    console.error(`\n❌ Migration failed: ${e.message || e}`);
    console.error('\nMake sure you have:');
    console.error('1. Created the faqs table in Supabase (run migrations/create-faqs-table.sql)');
    console.error('2. Set the correct environment variables');
    console.error('3. Configured RLS policies to allow inserts');
    process.exit(1);
  }
}

migrateFAQs().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
