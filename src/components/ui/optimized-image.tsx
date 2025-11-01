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
  sizes?: string; // Responsive sizes attribute
  srcSet?: string; // Manual srcSet override for responsive images
}

/**
 * OptimizedImage component enforces best practices for image optimization:
 * - WebP format with fallback support using <picture> element
 * - Lazy loading by default (eager for priority images)
 * - Async decoding for better performance
 * - Proper width/height attributes to prevent layout shift
 * - Responsive image sizes for different breakpoints
 * - Auto-generated alt text based on context
 * - Decorative image support
 * 
 * Target sizes:
 * - Mobile: max-width 768px
 * - Tablet: max-width 1024px
 * - Desktop: max-width 1920px
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
  sizes,
  srcSet,
  className = '',
  ...props 
}: OptimizedImageProps) => {
  // Auto-generate alt text if description and context provided
  const generatedAlt = description && context 
    ? `${description} for ${context}`
    : alt || '';

  // Determine if source is already WebP
  const isWebP = src.endsWith('.webp');
  
  // Generate fallback src by replacing .webp with appropriate format
  const fallbackSrc = isWebP ? src.replace('.webp', '.png') : src;
  
  // Default responsive sizes if not provided
  const responsiveSizes = sizes || '(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px';

  // Decorative images
  if (decorative) {
    return isWebP ? (
      <picture>
        <source srcSet={src} type="image/webp" />
        <img
          src={fallbackSrc}
          srcSet={srcSet}
          alt=""
          role="presentation"
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          sizes={responsiveSizes}
          className={className}
          {...props}
        />
      </picture>
    ) : (
      <img
        src={src}
        srcSet={srcSet}
        alt=""
        role="presentation"
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        sizes={responsiveSizes}
        className={className}
        {...props}
      />
    );
  }

  // Regular images with WebP support
  return isWebP ? (
    <picture>
      <source srcSet={src} type="image/webp" />
      <img
        src={fallbackSrc}
        srcSet={srcSet}
        alt={generatedAlt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        sizes={responsiveSizes}
        className={className}
        {...props}
      />
    </picture>
  ) : (
    <img
      src={src}
      srcSet={srcSet}
      alt={generatedAlt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      sizes={responsiveSizes}
      className={className}
      {...props}
    />
  );
};

export default OptimizedImage;
