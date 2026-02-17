import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Tracks SPA route changes as virtual pageviews in GA4 (via GTM) and Meta Pixel.
 *
 * GA4's enhanced measurement only captures the initial page load in SPAs.
 * This hook fires a dataLayer event on every React Router navigation so GTM
 * can trigger a GA4 page_view tag for each route change.
 */
const usePageTracking = () => {
  const { pathname, search } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip the initial page load — GTM handles that automatically
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const url = pathname + search;

    // Push virtual pageview to GTM dataLayer
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'virtual_page_view',
        page_path: url,
        page_title: document.title,
        page_location: window.location.origin + url,
      });
    }

    // Fire Meta Pixel PageView for SPA navigations
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [pathname, search]);
};

export default usePageTracking;
