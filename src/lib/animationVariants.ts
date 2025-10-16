import { Variants } from 'framer-motion';

// Check if device is mobile
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

// Fade in from bottom
export const fadeInUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: isMobile ? 20 : 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: isMobile ? 0.4 : 0.6, 
      ease: 'easeOut' 
    }
  }
};

// Simple fade in
export const fadeInVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: isMobile ? 0.4 : 0.6, 
      ease: 'easeOut' 
    }
  }
};

// Scale in
export const scaleInVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: isMobile ? 0.3 : 0.4, 
      ease: 'easeOut' 
    }
  }
};

// Slide in from right
export const slideInRightVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: isMobile ? 0.4 : 0.5, 
      ease: 'easeOut' 
    }
  }
};

// Helper function to create staggered variants
export const createStaggerVariants = (staggerDelay: number = 0.1): Variants => ({
  hidden: { opacity: 0, y: isMobile ? 20 : 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: isMobile ? 0.4 : 0.6,
      ease: 'easeOut',
      delay: custom * staggerDelay
    }
  })
});
