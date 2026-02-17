import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import usePageTracking from '../hooks/usePageTracking';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Track SPA route changes as virtual pageviews in GA4 + Meta Pixel
  usePageTracking();

  useEffect(() => {
    // Scroll to top instantly on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
