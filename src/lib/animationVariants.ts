import { Variants } from 'framer-motion';

// Check if device is mobile (memoized to prevent recalculation)
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

// Check if user prefers reduced motion
const prefersReducedMotion = typeof window !== 'undefined' 
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Fade in from bottom (respects reduced motion)
export const fadeInUpVariants: Variants = {
  hidden: { 
    opacity: prefersReducedMotion ? 1 : 0, 
    y: prefersReducedMotion ? 0 : (isMobile ? 20 : 30) 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: prefersReducedMotion ? 0 : (isMobile ? 0.4 : 0.6), 
      ease: 'easeOut' 
    }
  }
};

// Simple fade in (respects reduced motion)
export const fadeInVariants: Variants = {
  hidden: { 
    opacity: prefersReducedMotion ? 1 : 0 
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: prefersReducedMotion ? 0 : (isMobile ? 0.4 : 0.6), 
      ease: 'easeOut' 
    }
  }
};

// Scale in (respects reduced motion)
export const scaleInVariants: Variants = {
  hidden: { 
    opacity: prefersReducedMotion ? 1 : 0, 
    scale: prefersReducedMotion ? 1 : 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: prefersReducedMotion ? 0 : (isMobile ? 0.3 : 0.4), 
      ease: 'easeOut' 
    }
  }
};

// Slide in from right (respects reduced motion)
export const slideInRightVariants: Variants = {
  hidden: { 
    opacity: prefersReducedMotion ? 1 : 0, 
    x: prefersReducedMotion ? 0 : 50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: prefersReducedMotion ? 0 : (isMobile ? 0.4 : 0.5), 
      ease: 'easeOut' 
    }
  }
};

// Helper function to create staggered variants (respects reduced motion)
export const createStaggerVariants = (staggerDelay: number = 0.1): Variants => ({
  hidden: { 
    opacity: prefersReducedMotion ? 1 : 0, 
    y: prefersReducedMotion ? 0 : (isMobile ? 20 : 30) 
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion ? 0 : (isMobile ? 0.4 : 0.6),
      ease: 'easeOut',
      delay: prefersReducedMotion ? 0 : (custom * staggerDelay)
    }
  })
});
