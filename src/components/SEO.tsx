import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { generateBreadcrumbs } from '@/utils/breadcrumbGenerator';
import { LEGAL_PAGE_DATES } from '@/config/legalPageDates';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  noindex?: boolean;
  robots?: string;
  canonicalUrl?: string; // Override canonical URL for pages with multiple route aliases
  // Template fields
  pageType?: 'service' | 'blog' | 'solution' | 'industry' | 'faq' | 'tool' | 'success-story' | 'legal' | 'default';
  serviceName?: string;
  audience?: string;
  topic?: string;
  // Image enhancements
  pageImage?: string;
  // Tool page specific
  toolName?: string;
  // Success story specific
  articleHeadline?: string;
  // Legal page specific
  genre?: string;
  lastReviewed?: string;
  // Speakable (optional override)
  speakableSelectors?: string[];
  // Structured data fields
  datePublished?: string;
  dateModified?: string;
  author?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  // Organization schema enhancements
  organizationType?: 'Organization' | 'ProfessionalService';
  showContactInfo?: boolean;
  showAddress?: boolean;
}

const SEO = ({ 
  title, 
  description,
  image,
  noindex = false,
  robots,
  canonicalUrl: canonicalUrlProp,
  pageType = 'default',
  serviceName,
  audience,
  topic,
  pageImage,
  toolName,
  articleHeadline,
  genre: genreProp,
  lastReviewed: lastReviewedProp,
  speakableSelectors,
  datePublished: datePublishedProp,
  dateModified,
  author,
  breadcrumbs: breadcrumbsProp,
  faqs,
  organizationType = 'Organization',
  showContactInfo = false,
  showAddress = false
}: SEOProps) => {
  const location = useLocation();
  
  const defaultTitle = "SmartFirm | Automation & AI for Accounting Firms";
  const defaultDescription = "SmartFirm helps accounting, bookkeeping, and tax firms automate marketing and operations with AI. Get faster client intake, better follow-up, and measurable growth.";
  const defaultImage = "/assets/og-default.webp";
  const siteName = "SmartFirm";
  const primaryDomain = "smartfirm.io";
  
  // Generate title based on template or use custom
  let generatedTitle = defaultTitle;
  if (title) {
    // Custom title provided - check if it already includes " | SmartFirm"
    generatedTitle = title.includes('SmartFirm') ? title : `${title} | SmartFirm`;
  } else if (pageType === 'service' && serviceName) {
    generatedTitle = `${serviceName} for Finance Firms | SmartFirm`;
  } else if (pageType === 'blog' && topic) {
    generatedTitle = `${topic} | SmartFirm Blog`;
  }
  
  // Generate description based on template or use custom
  let generatedDescription = defaultDescription;
  if (description) {
    // Custom description provided
    generatedDescription = description;
  } else if (pageType === 'service' && serviceName) {
    const targetAudience = audience || 'accounting firms';
    generatedDescription = `Discover how SmartFirm's ${serviceName} helps ${targetAudience} automate processes, improve client experience, and grow.`;
  } else if (pageType === 'blog' && topic) {
    generatedDescription = `Learn ${topic} for finance firms: actionable tips and tools from SmartFirm.`;
  }
  
  // Auto-populate legal page data if applicable
  const pathname = location.pathname;
  const legalPageData = LEGAL_PAGE_DATES[pathname as keyof typeof LEGAL_PAGE_DATES];
  
  let genre = genreProp;
  let lastReviewed = lastReviewedProp;
  let datePublished = datePublishedProp;
  
  if (pageType === 'legal' && legalPageData) {
    genre = genre || legalPageData.genre;
    lastReviewed = lastReviewed || legalPageData.lastReviewed;
    datePublished = datePublished || legalPageData.datePublished;
  }
  
  const pageTitle = generatedTitle;
  const pageDescription = generatedDescription;
  const pageImageUrl = pageImage || image || defaultImage;
  const pageImageFull = `https://${primaryDomain}${pageImageUrl}`;
  // Use provided canonical URL or generate from pathname
  const canonicalUrl = canonicalUrlProp || `https://${primaryDomain}${pathname}`;
  
  // Auto-generate breadcrumbs if not provided and not homepage
  const autoBreadcrumbs = !breadcrumbsProp && pathname !== '/' 
    ? generateBreadcrumbs(pathname, title) 
    : breadcrumbsProp;
  
  // Helper function to format tool names
  const formatToolName = (url: string): string => {
    const slug = url.split('/').pop() || '';
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  useEffect(() => {
    // Update document title
    document.title = pageTitle;
    
    // Debug logging for FAQ structured data
    if (pageType === 'faq' && faqs) {
      console.log('[SEO Debug] FAQ structured data:', {
        faqCount: faqs.length,
        firstFaq: faqs[0],
        pageType,
        canonicalUrl
      });
    }
    
    // Update standard meta tags
    const updateMetaTag = (property: string, content: string, useProperty = false) => {
      const attribute = useProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };
    
    // Update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      
      element.href = href;
    };

    // Add or update consolidated JSON-LD structured data
    const updateConsolidatedStructuredData = () => {
      const schemaId = 'consolidated-schema';
      let script = document.querySelector(`script[data-schema="${schemaId}"]`);
      
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-schema', schemaId);
        document.head.appendChild(script);
      }

      // Build graph array with all schemas
      const graphItems: any[] = [];

      // 1. Organization/ProfessionalService (always present)
      const organizationSchema: any = {
        "@type": organizationType,
        "@id": `https://${primaryDomain}/#organization`,
        "name": "SmartFirm",
        "url": `https://${primaryDomain}`,
        "logo": {
          "@type": "ImageObject",
          "url": `https://${primaryDomain}${defaultImage}`
        },
        "sameAs": [
          // Add LinkedIn/YouTube URLs here when available
        ]
      };

      // Add optional contact information
      if (showContactInfo) {
        organizationSchema.description = "Expert digital marketing for accounting firms";
        organizationSchema.telephone = "+1-541-658-3789";
        organizationSchema.email = "contact@smartfirm.io";
      }

      // Add optional address information
      if (showAddress) {
        organizationSchema.address = {
          "@type": "PostalAddress",
          "addressLocality": "Eugene",
          "addressRegion": "OR",
          "addressCountry": "US"
        };
        organizationSchema.areaServed = {
          "@type": "Country",
          "name": "United States"
        };
      }

      graphItems.push(organizationSchema);

      // 2. Website (always present)
      graphItems.push({
        "@type": "WebSite",
        "@id": `https://${primaryDomain}/#website`,
        "name": "SmartFirm",
        "url": `https://${primaryDomain}`,
        "publisher": {
          "@id": `https://${primaryDomain}/#organization`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": `https://${primaryDomain}/resources?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      });

      // 3. WebPage (always present with enhancements)
      const webPageSchema: any = {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": pageTitle,
        "description": pageDescription,
        "inLanguage": "en-US",
        "image": pageImageFull,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": pageImageFull,
          "width": 1200,
          "height": 630
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": speakableSelectors || ["h1", "p:first-of-type", ".value-proposition"]
        },
        "dateModified": dateModified || new Date().toISOString(),
        "isPartOf": {
          "@id": `https://${primaryDomain}/#website`
        },
        "about": {
          "@id": `https://${primaryDomain}/#organization`
        }
      };
      
      // Add optional fields
      if (lastReviewed) {
        webPageSchema.lastReviewed = lastReviewed;
      }
      if (genre) {
        webPageSchema.genre = genre;
      }
      
      graphItems.push(webPageSchema);

      // 4. Service (for service pages)
      if (pageType === 'service' && serviceName) {
        graphItems.push({
          "@type": "Service",
          "@id": `${canonicalUrl}#service`,
          "serviceType": serviceName,
          "name": serviceName,
          "provider": {
            "@id": `https://${primaryDomain}/#organization`
          },
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "audience": {
            "@type": "Audience",
            "audienceType": "Accounting Firms, CPAs, Bookkeepers"
          },
          "description": pageDescription
        });
      }

      // 5. Article (for blog and success story pages)
      if (pageType === 'blog' && topic) {
        graphItems.push({
          "@type": "Article",
          "@id": `${canonicalUrl}#article`,
          "headline": topic,
          "datePublished": datePublished || new Date().toISOString(),
          "dateModified": dateModified || datePublished || new Date().toISOString(),
          "author": {
            "@id": `https://${primaryDomain}/#organization`
          },
          "publisher": {
            "@id": `https://${primaryDomain}/#organization`
          },
          "image": pageImageFull,
          "description": pageDescription,
          "mainEntityOfPage": {
            "@id": `${canonicalUrl}#webpage`
          }
        });
      }
      
      // Enhanced Article schema for success stories
      if (pageType === 'success-story') {
        graphItems.push({
          "@type": "Article",
          "@id": `${canonicalUrl}#article`,
          "headline": articleHeadline || pageTitle,
          "datePublished": datePublished || new Date().toISOString(),
          "dateModified": dateModified || datePublished || new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "SmartFirm"
          },
          "publisher": {
            "@type": "Organization",
            "name": "SmartFirm",
            "logo": {
              "@type": "ImageObject",
              "url": `https://${primaryDomain}/assets/smartfirm-logo-full.webp`
            }
          },
          "image": pageImageFull,
          "description": pageDescription
        });
        
        // Link to WebPage via mainEntity
        webPageSchema.mainEntity = { "@id": `${canonicalUrl}#article` };
      }
      
      // 5b. SoftwareApplication (for tool pages)
      if (pageType === 'tool') {
        const toolDisplayName = toolName || formatToolName(canonicalUrl);
        graphItems.push({
          "@type": "SoftwareApplication",
          "@id": `${canonicalUrl}#software`,
          "name": toolDisplayName,
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "provider": {
            "@id": `https://${primaryDomain}/#organization`
          }
        });
        
        // Link to WebPage via mainEntity
        webPageSchema.mainEntity = { "@id": `${canonicalUrl}#software` };
      }

      // 6. FAQPage (when FAQs provided)
      if (faqs && faqs.length > 0) {
        // Check if FAQ schema already exists in DOM (from build-time injection)
        const existingFAQSchema = document.querySelector('script[type="application/ld+json"]');
        const hasFAQSchemaAlready = existingFAQSchema?.textContent?.includes('"@type":"FAQPage"') || 
                                     existingFAQSchema?.textContent?.includes('"@type": "FAQPage"');
        
        if (!hasFAQSchemaAlready) {
          console.log('[SEO] Adding FAQ schema via React (no pre-rendered schema found)');
          graphItems.push({
            "@type": "FAQPage",
            "@id": `${canonicalUrl}#faqpage`,
            "mainEntity": faqs.map((faq, index) => ({
              "@type": "Question",
              "@id": `${canonicalUrl}#question-${index + 1}`, // Unique ID for each question
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          });
        } else {
          console.log('[SEO] FAQ schema already exists in DOM (from build-time injection), skipping React injection');
        }
      }

      // 7. BreadcrumbList (auto-generated or provided)
      if (autoBreadcrumbs && autoBreadcrumbs.length > 0) {
        graphItems.push({
          "@type": "BreadcrumbList",
          "@id": `${canonicalUrl}#breadcrumb`,
          "itemListElement": autoBreadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": `https://${primaryDomain}${crumb.url}`
          }))
        });
      }

      // Create consolidated schema with @graph
      const consolidatedSchema = {
        "@context": "https://schema.org",
        "@graph": graphItems
      };

      script.textContent = JSON.stringify(consolidatedSchema);

      // Remove old individual schema scripts if they exist
      ['organization', 'website', 'webpage', 'service', 'article', 'faq', 'breadcrumb'].forEach(id => {
        const oldScript = document.querySelector(`script[data-schema="${id}"]`);
        if (oldScript && oldScript !== script) {
          oldScript.remove();
        }
      });
    };

    updateConsolidatedStructuredData();
    
  }, [pageTitle, pageDescription, pageImageUrl, pageImageFull, canonicalUrl, pathname, noindex, robots, pageType, serviceName, topic, toolName, articleHeadline, genre, lastReviewed, speakableSelectors, datePublished, dateModified, author, autoBreadcrumbs, faqs, organizationType, showContactInfo, showAddress, primaryDomain, defaultImage]);
  
  return null;
};

export default SEO;
