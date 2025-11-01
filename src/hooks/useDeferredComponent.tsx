import { useState, useEffect } from 'react';

/**
 * Hook to defer rendering of non-critical components
 * Useful for below-the-fold content that doesn't need to render immediately
 */
export const useDeferredComponent = (delay: number = 100) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      const handle = requestIdleCallback(
        () => setShouldRender(true),
        { timeout: delay }
      );
      return () => cancelIdleCallback(handle);
    } else {
      const timer = setTimeout(() => setShouldRender(true), delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  return shouldRender;
};
