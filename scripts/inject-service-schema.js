import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Service definitions for SmartFirm service pages
 */
const serviceDefinitions = {
  '/services/marketing-automation': {
    name: 'Marketing Automation for Accounting Firms',
    description: 'Comprehensive marketing automation solutions that help accounting firms attract, nurture, and convert clients on autopilot.',
    serviceType: 'Marketing Automation',
    provider: { "@id": "https://smartfirm.io#organization" },
    areaServed: { "@type": "Country", "name": "United States" },
    audience: {
      "@type": "Audience",
      "audienceType": "Accounting Firms, CPAs, Bookkeepers"
    }
  },
  '/services/seo-for-accountants': {
    name: 'SEO for Accountants',
    description: 'Specialized search engine optimization services designed to help accounting firms rank higher and attract qualified local clients.',
    serviceType: 'Search Engine Optimization',
    provider: { "@id": "https://smartfirm.io#organization" },
    areaServed: { "@type": "Country", "name": "United States" },
    audience: {
      "@type": "Audience",
      "audienceType": "Accounting Firms, CPAs, Tax Preparers"
    }
  },
  '/services/website-design': {
    name: 'Website Design for Accounting Firms',
    description: 'Professional website design and development services tailored for accounting firms to convert visitors into clients.',
    serviceType: 'Web Design',
    provider: { "@id": "https://smartfirm.io#organization" },
    areaServed: { "@type": "Country", "name": "United States" },
    audience: {
      "@type": "Audience",
      "audienceType": "Accounting Firms, CPAs, Bookkeepers"
    }
  },
  '/services/email-marketing': {
    name: 'Email Marketing for Accountants',
    description: 'Strategic email marketing campaigns that nurture prospects and keep your accounting firm top-of-mind with clients.',
    serviceType: 'Email Marketing',
    provider: { "@id": "https://smartfirm.io#organization" },
    areaServed: { "@type": "Country", "name": "United States" },
    audience: {
      "@type": "Audience",
      "audienceType": "Accounting Firms, CPAs, Bookkeepers"
    }
  },
  '/services/content-marketing': {
    name: 'Content Marketing for Accounting Firms',
    description: 'Expert content creation and strategy that positions your accounting firm as a trusted authority.',
    serviceType: 'Content Marketing',
    provider: { "@id": "https://smartfirm.io#organization" },
    areaServed: { "@type": "Country", "name": "United States" },
    audience: {
      "@type": "Audience",
      "audienceType": "Accounting Firms, CPAs"
    }
  },
  '/services/social-media-management': {
    name: 'Social Media Management for Accountants',
    description: 'Professional social media management services to build your accounting firm\'s online presence and engage prospects.',
    serviceType: 'Social Media Marketing',
    provider: { "@id": "https://smartfirm.io#organization" },
    areaServed: { "@type": "Country", "name": "United States" },
    audience: {
      "@type": "Audience",
      "audienceType": "Accounting Firms, CPAs, Bookkeepers"
    }
  },
  '/services/technology-solutions': {
    name: 'Technology Solutions for Accounting Firms',
    description: 'Advanced technology integration and automation solutions to streamline accounting firm operations.',
    serviceType: 'Technology Consulting',
    provider: { "@id": "https://smartfirm.io#organization" },
    areaServed: { "@type": "Country", "name": "United States" },
    audience: {
      "@type": "Audience",
      "audienceType": "Accounting Firms, CPAs"
    }
  },
  '/services/business-optimization': {
    name: 'Business Optimization Services for Accounting Firms',
    description: 'Strategic business optimization and process improvement services to help accounting firms scale efficiently.',
    serviceType: 'Business Consulting',
    provider: { "@id": "https://smartfirm.io#organization" },
    areaServed: { "@type": "Country", "name": "United States" },
    audience: {
      "@type": "Audience",
      "audienceType": "Accounting Firms, CPAs"
    }
  }
};

/**
 * Generate Service Schema
 */
function generateServiceSchema(baseUrl, urlPath) {
  const serviceDef = serviceDefinitions[urlPath];
  if (!serviceDef) return null;
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}${urlPath}#service`,
    "name": serviceDef.name,
    "description": serviceDef.description,
    "serviceType": serviceDef.serviceType,
    "provider": serviceDef.provider,
    "areaServed": serviceDef.areaServed,
    "audience": serviceDef.audience,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": serviceDef.name,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceDef.name
          }
        }
      ]
    }
  };
}

/**
 * Inject Service schema into HTML file
 */
function injectSchemaIntoHTML(htmlPath, schema) {
  try {
    if (!schema) return false;
    
    let html = readFileSync(htmlPath, 'utf-8');
    
    // Check if Service schema already exists
    if (html.includes('"@type": "Service"') && html.includes('"@id"')) {
      return false;
    }
    
    const schemaString = JSON.stringify(schema, null, 2);
    const scriptTag = `<script type="application/ld+json">\n${schemaString}\n</script>`;
    
    // Inject before closing </head> tag
    if (html.includes('</head>')) {
      html = html.replace('</head>', `  ${scriptTag}\n  </head>`);
      writeFileSync(htmlPath, html, 'utf-8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`✗ Error processing ${htmlPath}:`, error.message);
    return false;
  }
}

/**
 * Main execution
 */
function main() {
  const baseUrl = process.env.VITE_SITE_URL || 'https://smartfirm.io';
  const distPath = resolve(__dirname, '../dist');
  
  console.log('\n🔧 Injecting Service Schema...\n');
  console.log(`Base URL: ${baseUrl}`);
  console.log(`Dist path: ${distPath}\n`);
  
  let successCount = 0;
  let skippedCount = 0;
  
  Object.keys(serviceDefinitions).forEach(urlPath => {
    const htmlPath = resolve(distPath, urlPath.substring(1), 'index.html');
    const schema = generateServiceSchema(baseUrl, urlPath);
    
    try {
      const injected = injectSchemaIntoHTML(htmlPath, schema);
      if (injected) {
        successCount++;
        console.log(`✓ Injected: ${urlPath}`);
      } else {
        skippedCount++;
      }
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log(`⚠ ${urlPath} not found`);
      } else {
        console.error(`✗ Error processing ${urlPath}:`, error.message);
      }
    }
  });
  
  console.log('\n📊 Summary:');
  console.log(`   ✓ Successfully injected: ${successCount} pages`);
  console.log(`   ⊘ Skipped (already exists): ${skippedCount} pages`);
  console.log('');
}

main();
