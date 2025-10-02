import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  noindex?: boolean;
  robots?: string; // Custom robots directive (e.g., "noindex,follow", "noindex,nofollow")
  // Template fields
  pageType?: 'service' | 'blog' | 'solution' | 'industry' | 'faq' | 'default';
  serviceName?: string;
  audience?: string;
  topic?: string;
  // Structured data fields
  datePublished?: string;
  dateModified?: string;
  author?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
}

const SEO = ({ 
  title, 
  description,
  image,
  noindex = true, // Pre-launch: noindex by default
  robots, // Custom robots directive
  pageType = 'default',
  serviceName,
  audience,
  topic,
  datePublished,
  dateModified,
  author,
  breadcrumbs,
  faqs
}: SEOProps) => {
  const location = useLocation();
  
  const defaultTitle = "SmartFirm | Automation & AI for Accounting Firms";
  const defaultDescription = "SmartFirm helps accounting, bookkeeping, and tax firms automate marketing and operations with AI. Get faster client intake, better follow-up, and measurable growth.";
  const defaultImage = "/assets/og-default.png";
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
  
  const pageTitle = generatedTitle;
  const pageDescription = generatedDescription;
  const pageImage = image || defaultImage;
  const canonicalUrl = `https://${primaryDomain}${location.pathname}`;
  
  useEffect(() => {
    // Update document title
    document.title = pageTitle;
    
    // Update or create meta tags
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

      // 1. Organization (always present)
      graphItems.push({
        "@type": "Organization",
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
      });

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

      // 3. WebPage (always present)
      graphItems.push({
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": pageTitle,
        "description": pageDescription,
        "dateModified": dateModified || new Date().toISOString(),
        "isPartOf": {
          "@id": `https://${primaryDomain}/#website`
        },
        "about": {
          "@id": `https://${primaryDomain}/#organization`
        }
      });

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
          "description": pageDescription
        });
      }

      // 5. Article (for blog pages)
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
          "image": `https://${primaryDomain}${pageImage}`,
          "description": pageDescription,
          "mainEntityOfPage": {
            "@id": `${canonicalUrl}#webpage`
          }
        });
      }

      // 6. FAQPage (when FAQs provided)
      if (faqs && faqs.length > 0) {
        graphItems.push({
          "@type": "FAQPage",
          "@id": `${canonicalUrl}#faqpage`,
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        });
      }

      // 7. BreadcrumbList (when breadcrumbs provided)
      if (breadcrumbs && breadcrumbs.length > 0) {
        graphItems.push({
          "@type": "BreadcrumbList",
          "@id": `${canonicalUrl}#breadcrumb`,
          "itemListElement": breadcrumbs.map((crumb, index) => ({
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
    
  }, [pageTitle, pageDescription, pageImage, canonicalUrl, noindex, robots, pageType, serviceName, topic, datePublished, dateModified, author, breadcrumbs, faqs, primaryDomain, defaultImage]);
  
  return null;
};

export default SEO;
