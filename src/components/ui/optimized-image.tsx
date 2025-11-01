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
  srcset?: string; // Custom srcset if needed
  generateResponsive?: boolean; // Auto-generate responsive srcset
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
  srcset,
  generateResponsive = false,
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

  // Generate responsive srcset if enabled
  const responsiveSrcset = generateResponsive && !srcset 
    ? (() => {
        const baseUrl = src.substring(0, src.lastIndexOf('.'));
        const ext = src.substring(src.lastIndexOf('.'));
        // Generate 3 sizes: 0.5x, 1x, 1.5x of original width
        const sizes = [
          Math.round(width * 0.5),
          width,
          Math.round(width * 1.5)
        ];
        return sizes.map(w => `${baseUrl}-${w}w${ext} ${w}w`).join(', ');
      })()
    : srcset;

  // Decorative images
  if (decorative) {
    return isWebP ? (
      <picture>
        <source srcSet={responsiveSrcset || src} type="image/webp" sizes={responsiveSizes} />
        <img
          src={fallbackSrc}
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
        srcSet={responsiveSrcset}
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
      <source srcSet={responsiveSrcset || src} type="image/webp" sizes={responsiveSizes} />
      <img
        src={fallbackSrc}
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
      srcSet={responsiveSrcset}
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
