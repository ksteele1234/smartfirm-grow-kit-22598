import { useState, useEffect } from 'react';

/**
 * Hook to defer rendering of non-critical components
 * Uses requestIdleCallback for optimal performance
 * 
 * @param delay - Minimum delay in ms before rendering (default: 100ms)
 * @returns boolean - Whether the component should render
 * 
 * Usage:
 * - 0-100ms: Critical above-the-fold content (after hero)
 * - 100-200ms: Above-the-fold but not critical
 * - 200ms+: Below-the-fold content
 */
export const useDeferredComponent = (delay: number = 100) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Use requestIdleCallback for better performance
    // Falls back to setTimeout for older browsers
    if ('requestIdleCallback' in window) {
      const handle = requestIdleCallback(
        () => setShouldRender(true),
        { timeout: delay }
      );
      return () => cancelIdleCallback(handle);
    } else {
      // Fallback for browsers without requestIdleCallback
      const timer = setTimeout(() => setShouldRender(true), delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  return shouldRender;
};
