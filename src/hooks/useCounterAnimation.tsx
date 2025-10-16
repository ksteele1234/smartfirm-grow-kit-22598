import { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from './useScrollAnimation';

interface UseCounterAnimationOptions {
  duration?: number;
  isPercentage?: boolean;
  isDollar?: boolean;
  decimals?: number;
  threshold?: number;
  triggerOnLoad?: boolean;
}

export const useCounterAnimation = (
  end: number,
  options?: UseCounterAnimationOptions
) => {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useScrollAnimation({ 
    threshold: options?.threshold ?? 0.3 
  });
  const hasAnimated = useRef(false);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const shouldTrigger = options?.triggerOnLoad || isInView;
    
    if (shouldTrigger && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = options?.duration ?? 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-out cubic
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const current = easedProgress * end;

        setCount(current);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [end, isInView, options?.duration, options?.triggerOnLoad]);

  const formatCount = (value: number): string => {
    const decimals = options?.decimals ?? 0;
    
    if (options?.isDollar) {
      return `$${value.toFixed(decimals)}K`;
    }
    
    if (options?.isPercentage) {
      return `${Math.round(value)}%`;
    }
    
    return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
  };

  return { 
    ref: options?.triggerOnLoad ? null : ref, 
    count: formatCount(count),
    rawCount: count
  };
};
