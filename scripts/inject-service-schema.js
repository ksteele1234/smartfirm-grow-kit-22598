import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Service definitions for SmartFirm service pages
 */
const serviceDefinitions = {
  '/services/marketing-automation-for-accounting-firms': {
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
  '/services/seo-for-accounting-firms': {
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
  '/services/website-design-for-accounting-firms': {
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
  '/services/email-marketing-for-accounting-firms': {
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
  '/services/content-marketing-for-accounting-firms': {
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
  '/services/social-media-management-for-accounting-firms': {
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
  '/services/technology-consulting-for-accounting-firms': {
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
  '/services/business-optimization-for-accounting-firms': {
    name: 'Business Optimization Services for Accounting Firms',
    description: 'Strategic business optimization and process improvement services to help accounting firms scale efficiently.',
    serviceType: 'Business Consulting',
    provider: { "@id": "https://smartfirm.io#organization" },
    areaServed: { "@type": "Country", "name": "United States" },
    audience: {
      "@type": "Audience",
      "audienceType": "Accounting Firms, CPAs"
    }
  },
  '/services/ai-transformation-roadmap-for-accounting-firms': {
    name: 'AI Transformation Roadmap for Accounting Firms',
    description: 'Strategic AI implementation planning to help accounting firms leverage artificial intelligence for efficiency and growth.',
    serviceType: 'AI Consulting',
    provider: { "@id": "https://smartfirm.io#organization" },
    areaServed: { "@type": "Country", "name": "United States" },
    audience: {
      "@type": "Audience",
      "audienceType": "Accounting Firms, CPAs"
    }
  },
  '/services/ai-process-optimization-for-accounting-firms': {
    name: 'AI Process Optimization for Accounting Firms',
    description: 'Focused AI optimization for a single business process to deliver quick wins and measurable ROI.',
    serviceType: 'AI Consulting',
    provider: { "@id": "https://smartfirm.io#organization" },
    areaServed: { "@type": "Country", "name": "United States" },
    audience: {
      "@type": "Audience",
      "audienceType": "Accounting Firms, CPAs, Bookkeepers"
    }
  },
  '/services/automated-lead-follow-up-for-accounting-firms': {
    name: 'Automated Lead Follow-Up for Accounting Firms',
    description: 'Automated lead nurturing and follow-up systems that convert prospects into clients for accounting firms.',
    serviceType: 'Marketing Automation',
    provider: { "@id": "https://smartfirm.io#organization" },
    areaServed: { "@type": "Country", "name": "United States" },
    audience: {
      "@type": "Audience",
      "audienceType": "Accounting Firms, CPAs"
    }
  },
  '/services/automated-review-generation-for-cpas': {
    name: 'Automated Review Generation for CPAs',
    description: 'Automated systems that help accounting firms generate positive client reviews and manage their online reputation.',
    serviceType: 'Reputation Management',
    provider: { "@id": "https://smartfirm.io#organization" },
    areaServed: { "@type": "Country", "name": "United States" },
    audience: {
      "@type": "Audience",
      "audienceType": "Accounting Firms, CPAs"
    }
  },
  '/services/reputation-management-for-cpa-firms': {
    name: 'Reputation Management for CPA Firms',
    description: 'Professional online reputation management services to protect and enhance your accounting firm\'s brand.',
    serviceType: 'Reputation Management',
    provider: { "@id": "https://smartfirm.io#organization" },
    areaServed: { "@type": "Country", "name": "United States" },
    audience: {
      "@type": "Audience",
      "audienceType": "Accounting Firms, CPAs"
    }
  },
  '/services/fractional-cio-for-accounting-firms': {
    name: 'Fractional CIO for Accounting Firms',
    description: 'Executive-level technology leadership on a fractional basis to guide your accounting firm\'s digital transformation.',
    serviceType: 'Technology Consulting',
    provider: { "@id": "https://smartfirm.io#organization" },
    areaServed: { "@type": "Country", "name": "United States" },
    audience: {
      "@type": "Audience",
      "audienceType": "Accounting Firms, CPAs"
    }
  },
  '/services/marketing-strategy-integration-for-accounting-firms': {
    name: 'Marketing Strategy Integration for Accounting Firms',
    description: 'Unified marketing strategy that integrates all channels for maximum impact and ROI for accounting firms.',
    serviceType: 'Marketing Strategy',
    provider: { "@id": "https://smartfirm.io#organization" },
    areaServed: { "@type": "Country", "name": "United States" },
    audience: {
      "@type": "Audience",
      "audienceType": "Accounting Firms, CPAs"
    }
  },
  '/services/marketing-add-ons-for-accounting-firms': {
    name: 'Marketing Add-Ons for Accounting Firms',
    description: 'Additional marketing services and add-on packages to enhance your accounting firm\'s marketing efforts.',
    serviceType: 'Marketing Services',
    provider: { "@id": "https://smartfirm.io#organization" },
    areaServed: { "@type": "Country", "name": "United States" },
    audience: {
      "@type": "Audience",
      "audienceType": "Accounting Firms, CPAs"
    }
  },
  '/services/client-onboarding-automation': {
    name: 'Client Onboarding Automation',
    description: 'Streamlined client onboarding automation that reduces manual work and improves the new client experience.',
    serviceType: 'Business Process Automation',
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
