import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Generate Organization Schema for SmartFirm.io
 */
function generateOrganizationSchema(baseUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}#organization`,
    "name": "SmartFirm.io",
    "legalName": "SmartFirm.io",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/assets/smartfirm-logo-full.webp`,
      "width": 250,
      "height": 60
    },
    "description": "SmartFirm empowers accounting firms to achieve significant growth and operational excellence through comprehensive workflow automation, technology solutions, and business optimization services.",
    "foundingDate": "2020",
    "slogan": "Empowering Accounting Firms to Scale with Confidence",
    "sameAs": [
      "https://www.linkedin.com/company/smartfirm-io",
      "https://twitter.com/smartfirmio",
      "https://www.facebook.com/smartfirmio"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "email": "contact@smartfirm.io",
      "availableLanguage": ["English"]
    },
    "areaServed": {
      "@type": "Place",
      "name": "United States"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Firm Automation for Accounting Firms",
          "description": "Comprehensive workflow and marketing automation solutions designed specifically for accounting and bookkeeping firms"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Technology Solutions for CPAs",
          "description": "Advanced technology integration and workflow automation for CPA firms"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Optimization Services",
          "description": "Strategic business optimization and growth consulting for accounting practices"
        }
      }
    ],
    "knowsAbout": [
      "Accounting Firm Marketing",
      "CPA Marketing Automation",
      "Bookkeeping Business Growth",
      "Tax Preparer Lead Generation",
      "Accounting Practice Management"
    ]
  };
}

/**
 * Inject Organization schema into HTML file
 */
function injectSchemaIntoHTML(htmlPath, schema) {
  try {
    let html = readFileSync(htmlPath, 'utf-8');
    
    const schemaString = JSON.stringify(schema, null, 2);
    const scriptTag = `<script type="application/ld+json">\n${schemaString}\n</script>`;
    
    // Check if Organization schema already exists (with or without space after colon)
    if ((html.includes('"@type": "Organization"') || html.includes('"@type":"Organization"')) && html.includes('"@id"')) {
      console.log(`✓ Organization schema already exists in ${htmlPath}`);
      return;
    }
    
    // Inject before closing </head> tag
    if (html.includes('</head>')) {
      html = html.replace('</head>', `  ${scriptTag}\n  </head>`);
      writeFileSync(htmlPath, html, 'utf-8');
      console.log(`✓ Organization schema injected into ${htmlPath}`);
    } else {
      console.warn(`⚠ Could not find </head> tag in ${htmlPath}`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${htmlPath}:`, error.message);
  }
}

/**
 * Main execution
 */
function main() {
  const baseUrl = process.env.VITE_SITE_URL || 'https://smartfirm.io';
  const distPath = resolve(__dirname, '../dist');
  
  console.log('\n🔧 Injecting Organization Schema...\n');
  console.log(`Base URL: ${baseUrl}`);
  console.log(`Dist path: ${distPath}\n`);
  
  const schema = generateOrganizationSchema(baseUrl);
  
  // Key pages that should have Organization schema
  const targetPages = [
    'index.html',                                           // Homepage
    'marketing-agency-for-accounting-firms/index.html',     // About page
    'accounting-firm-automation-consultation/index.html',   // Contact page
    'get-started-accounting-firm-automation/index.html'     // Get Started
  ];
  
  let successCount = 0;
  let errorCount = 0;
  
  targetPages.forEach(page => {
    const htmlPath = resolve(distPath, page);
    try {
      injectSchemaIntoHTML(htmlPath, schema);
      successCount++;
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log(`⚠ ${page} not found (may not exist yet)`);
      } else {
        console.error(`✗ Error processing ${page}:`, error.message);
        errorCount++;
      }
    }
  });
  
  console.log('\n📊 Summary:');
  console.log(`   ✓ Successfully processed: ${successCount} pages`);
  if (errorCount > 0) {
    console.log(`   ✗ Errors: ${errorCount} pages`);
  }
  console.log('');
}

main();
