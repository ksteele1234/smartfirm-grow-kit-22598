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

    // Add or update JSON-LD structured data
    const updateStructuredData = (id: string, data: any) => {
      let script = document.querySelector(`script[data-schema="${id}"]`);
      
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-schema', id);
        document.head.appendChild(script);
      }
      
      script.textContent = JSON.stringify(data);
    };

    // Remove structured data script
    const removeStructuredData = (id: string) => {
      const script = document.querySelector(`script[data-schema="${id}"]`);
      if (script) {
        script.remove();
      }
    };
    
    // Basic meta tags
    updateMetaTag('description', pageDescription);
    
    // Robots meta tag
    if (robots) {
      // Custom robots directive provided
      updateMetaTag('robots', robots);
    } else if (noindex) {
      // Pre-launch: noindex, nofollow by default
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      // Remove noindex at go-live
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) {
        robotsMeta.remove();
      }
    }
    
    // Open Graph tags
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', siteName, true);
    updateMetaTag('og:title', pageTitle, true);
    updateMetaTag('og:description', pageDescription, true);
    updateMetaTag('og:image', pageImage.startsWith('http') ? pageImage : `https://${primaryDomain}${pageImage}`, true);
    updateMetaTag('og:url', canonicalUrl, true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', pageTitle);
    updateMetaTag('twitter:description', pageDescription);
    updateMetaTag('twitter:image', pageImage.startsWith('http') ? pageImage : `https://${primaryDomain}${pageImage}`);
    
    // Canonical URL
    updateLinkTag('canonical', canonicalUrl);

    // JSON-LD Structured Data
    
    // 1. Organization + Website (always present)
    updateStructuredData('organization', {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SmartFirm",
      "url": `https://${primaryDomain}`,
      "logo": `https://${primaryDomain}${defaultImage}`,
      "sameAs": [
        // Add LinkedIn/YouTube URLs here when available
      ]
    });

    updateStructuredData('website', {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "SmartFirm",
      "url": `https://${primaryDomain}`,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `https://${primaryDomain}/resources?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    });

    // 2. Service page
    if (pageType === 'service' && serviceName) {
      updateStructuredData('service', {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": serviceName,
        "provider": {
          "@type": "Organization",
          "name": "SmartFirm"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "description": pageDescription
      });
    } else {
      removeStructuredData('service');
    }

    // 3. Blog post / Article
    if (pageType === 'blog' && topic) {
      updateStructuredData('article', {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": topic,
        "datePublished": datePublished || new Date().toISOString(),
        "dateModified": dateModified || datePublished || new Date().toISOString(),
        "author": {
          "@type": "Organization",
          "name": author || "SmartFirm Editorial"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SmartFirm",
          "logo": {
            "@type": "ImageObject",
            "url": `https://${primaryDomain}${defaultImage}`
          }
        },
        "image": `https://${primaryDomain}${pageImage}`,
        "description": pageDescription
      });
    } else {
      removeStructuredData('article');
    }

    // 4. FAQ page
    if (pageType === 'faq' && faqs && faqs.length > 0) {
      updateStructuredData('faq', {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      });
    } else {
      removeStructuredData('faq');
    }

    // 5. Breadcrumb list
    if (breadcrumbs && breadcrumbs.length > 0) {
      updateStructuredData('breadcrumb', {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": `https://${primaryDomain}${crumb.url}`
        }))
      });
    } else {
      removeStructuredData('breadcrumb');
    }
    
  }, [pageTitle, pageDescription, pageImage, canonicalUrl, noindex, robots, pageType, serviceName, topic, datePublished, dateModified, author, breadcrumbs, faqs, primaryDomain, defaultImage]);
  
  return null;
};

export default SEO;
