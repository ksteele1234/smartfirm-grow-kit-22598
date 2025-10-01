import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  noindex?: boolean;
}

const SEO = ({ 
  title, 
  description,
  image,
  noindex = true // Pre-launch: noindex by default
}: SEOProps) => {
  const location = useLocation();
  
  const defaultTitle = "SmartFirm | Automation & AI for Accounting Firms";
  const defaultDescription = "SmartFirm helps accounting, bookkeeping, and tax firms automate marketing and operations with AI. Get faster client intake, better follow-up, and measurable growth.";
  const defaultImage = "/assets/og-default.png";
  const siteName = "SmartFirm";
  const primaryDomain = "smartfirm.io";
  
  const pageTitle = title ? `${title} | SmartFirm` : defaultTitle;
  const pageDescription = description || defaultDescription;
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
    
    // Basic meta tags
    updateMetaTag('description', pageDescription);
    
    // Robots meta tag (pre-launch: noindex, nofollow)
    if (noindex) {
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
    
  }, [pageTitle, pageDescription, pageImage, canonicalUrl, noindex]);
  
  return null;
};

export default SEO;
