import { Helmet } from 'react-helmet';
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
  pageType?: 'service' | 'blog' | 'solution' | 'industry' | 'faq' | 'tool' | 'success-story' | 'legal' | 'collection' | 'default';
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

  // Use window.location.pathname for canonical URLs - useLocation().pathname returns '/' during prerendering
  // window.location.pathname is correctly set by Puppeteer during SSG
  const pathname = typeof window !== 'undefined' ? window.location.pathname : location.pathname;
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
  // Handle absolute vs relative image URLs
  const pageImageFull = (pageImage || image || defaultImage).startsWith('http')
    ? (pageImage || image || defaultImage)
    : `https://${primaryDomain}${pageImage || image || defaultImage}`;
  // Ensure pathname has trailing slash for consistency with Netlify Pretty URLs
  const normalizedPath = pathname === '/' ? '' : (pathname.endsWith('/') ? pathname : `${pathname}/`);
  
  // CRITICAL: Prioritize explicit canonicalUrl prop over pathname detection
  // This ensures pages that pass canonicalUrl get their correct canonical, not homepage
  const canonicalUrl = canonicalUrlProp || `https://${primaryDomain}${normalizedPath}`;

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

  // Build consolidated JSON-LD schema
  const buildConsolidatedSchema = () => {
    const graphItems: any[] = [];

    // 1. Organization/ProfessionalService (always present)
    const organizationSchema: any = {
      "@type": organizationType,
      "@id": `https://${primaryDomain}/#organization`,
      "name": "SmartFirm",
      "url": `https://${primaryDomain}`,
      "logo": {
        "@type": "ImageObject",
        "url": `https://${primaryDomain}/assets/smartfirm-logo-header.png`
      },
      "sameAs": []
    };

    if (showContactInfo) {
      organizationSchema.description = "Expert digital marketing for accounting firms";
      organizationSchema.telephone = "+1-541-658-3789";
      organizationSchema.email = "contact@smartfirm.io";
    }

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
    const webPageType = pageType === 'collection' ? 'CollectionPage' : 'WebPage';

    const webPageSchema: any = {
      "@type": webPageType,
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

      webPageSchema.mainEntity = { "@id": `${canonicalUrl}#software` };
    }

    // 6. FAQPage (when FAQs provided)
    if (faqs && faqs.length > 0) {
      graphItems.push({
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faqpage`,
        "mainEntity": faqs.map((faq, index) => ({
          "@type": "Question",
          "@id": `${canonicalUrl}#question-${index + 1}`,
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      });
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

    return {
      "@context": "https://schema.org",
      "@graph": graphItems
    };
  };

  const consolidatedSchema = buildConsolidatedSchema();
  const robotsContent = noindex ? 'noindex, nofollow' : (robots || 'index, follow');

  // Render all metadata via Helmet - this ensures metadata is present in initial render
  // Critical for SSG/prerendering to capture correct metadata
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={pageDescription} />
      <meta name="robots" content={robotsContent} />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImageFull} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImageFull} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(consolidatedSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
