import { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt'> {
  src: string;
  alt?: string;
  width: number;
  height: number;
  priority?: boolean; // For hero images
  decorative?: boolean; // For decorative images
  context?: string; // Page context for auto-generated alt text
  description?: string; // What is shown in the image
}

/**
 * OptimizedImage component enforces best practices for image optimization:
 * - WebP format preferred
 * - Lazy loading by default
 * - Async decoding
 * - Proper width/height attributes
 * - Auto-generated alt text based on context
 * - Decorative image support
 */
export const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  decorative = false,
  context,
  description,
  className = '',
  ...props 
}: OptimizedImageProps) => {
  // Auto-generate alt text if description and context provided
  const generatedAlt = description && context 
    ? `${description} for ${context}`
    : alt || '';

  // Decorative images
  if (decorative) {
    return (
      <img
        src={src}
        alt=""
        role="presentation"
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={className}
        {...props}
      />
    );
  }

  return (
    <img
      src={src}
      alt={generatedAlt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
      {...props}
    />
  );
};

export default OptimizedImage;
