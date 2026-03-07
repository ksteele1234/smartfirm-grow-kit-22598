import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Tracks SPA route changes as virtual pageviews in GA4 (via GTM) and Meta Pixel.
 *
 * GA4's enhanced measurement only captures the initial full page load in SPAs.
 * This hook fires a dataLayer event on every React Router navigation so GTM
 * can trigger a GA4 page_view tag for each route change.
 *
 * The first render is tracked after a short delay to ensure GTM has loaded
 * (since GTM is loaded via requestIdleCallback, not synchronously).
 * Subsequent navigations fire immediately.
 */
const usePageTracking = () => {
  const { pathname, search } = useLocation();
  const isFirstRender = useRef(true);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const url = pathname + search;

    const pushPageView = () => {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'virtual_page_view',
          page_path: url,
          page_title: document.title,
          page_location: window.location.origin + url,
        });
      }

      if (typeof window.fbq === 'function') {
        window.fbq('track', 'PageView');
      }
    };

    if (isFirstRender.current) {
      isFirstRender.current = false;
      // Delay the first pageview push to give GTM time to initialize.
      // If GTM fires its own page_view first, this becomes a duplicate
      // that can be deduplicated in GTM via a "virtual_page_view" trigger.
      const timer = setTimeout(pushPageView, 2000);
      return () => clearTimeout(timer);
    }

    // Only fire on actual route changes (not query-only changes on same path)
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      pushPageView();
    }
  }, [pathname, search]);
};

export default usePageTracking;
