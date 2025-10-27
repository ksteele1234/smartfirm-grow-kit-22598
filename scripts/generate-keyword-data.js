import { readFileSync, writeFileSync } from 'fs';
import { parse } from 'csv-parse/sync';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Build-time script to parse keywords CSV and generate TypeScript data file
 */
function main() {
  console.log('📊 Parsing keywords CSV...');
  
  try {
    // Read CSV file
    const csvPath = join(__dirname, '../src/data/keywords.csv');
    const csvContent = readFileSync(csvPath, 'utf-8');
    
    // Parse CSV
    const records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true
    });
    
    // Transform to our data structure
    const mappings = records.map(record => ({
      category: record['Category'] || '',
      originalKeywords: record['Original Keywords'] || '',
      rootKeywords: record['Root Keywords'] || '',
      accountants: record['Keywords for Accountants'] || '',
      cpas: record['Keywords for CPAs'] || '',
      bookkeepers: record['Keywords for Bookkeepers'] || '',
      accountingFirms: record['Keywords for Accounting Firms'] || '',
      taxPreparers: record['Keywords for Tax Preparers'] || '',
      landingPage: record['Landing Page'] || '',
      cta: record['CTA'] || ''
    }));
    
    // Generate TypeScript file
    const tsContent = `// Auto-generated from keywords.csv - DO NOT EDIT MANUALLY
// Run 'npm run generate-keywords' to regenerate

export interface KeywordMapping {
  category: string;
  originalKeywords: string;
  rootKeywords: string;
  accountants: string;
  cpas: string;
  bookkeepers: string;
  accountingFirms: string;
  taxPreparers: string;
  landingPage: string;
  cta: string;
}

export const keywordMappings: KeywordMapping[] = ${JSON.stringify(mappings, null, 2)};
`;
    
    // Write to src/data/keywordMappings.ts
    const outputPath = join(__dirname, '../src/data/keywordMappings.ts');
    writeFileSync(outputPath, tsContent, 'utf-8');
    
    console.log(`✓ Generated keyword mappings: ${mappings.length} entries`);
    console.log(`✓ Written to: src/data/keywordMappings.ts`);
    
  } catch (error) {
    console.error('✗ Error generating keyword data:', error);
    process.exit(1);
  }
}

main();
