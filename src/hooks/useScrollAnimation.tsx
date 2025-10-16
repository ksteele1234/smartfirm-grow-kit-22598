import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
  delay?: number;
}

export const useScrollAnimation = (options?: UseScrollAnimationOptions) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    amount: options?.threshold ?? 0.3,
  });

  return { 
    ref, 
    isInView, 
    delay: options?.delay ?? 0 
  };
};
