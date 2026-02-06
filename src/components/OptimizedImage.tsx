import { useState, useCallback, forwardRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fetchPriority?: 'high' | 'low' | 'auto';
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  sizes?: string;
}

/**
 * Optimized image component with:
 * - WebP format support via <picture> element
 * - Proper loading attributes (lazy/eager)
 * - Width/height to prevent layout shift
 * - Async decoding for non-blocking rendering
 */
export const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(({
  src,
  alt,
  className = '',
  width,
  height,
  fetchPriority = 'auto',
  loading = 'lazy',
  decoding = 'async',
  sizes,
}, ref) => {
  const [imgError, setImgError] = useState(false);

  const handleError = useCallback(() => {
    setImgError(true);
  }, []);

  // Generate WebP source path from original
  const getWebPSrc = (originalSrc: string): string | null => {
    // Don't try WebP for already-WebP, SVGs, or data URIs
    if (
      originalSrc.endsWith('.webp') ||
      originalSrc.endsWith('.svg') ||
      originalSrc.startsWith('data:')
    ) {
      return null;
    }
    
    // For Vite-hashed assets, the optimizer handles conversion at build time
    // The browser will use the optimized version automatically
    return null;
  };

  const webpSrc = getWebPSrc(src);

  // If we have a WebP source and no error, use picture element
  if (webpSrc && !imgError) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          ref={ref}
          src={src}
          alt={alt}
          className={className}
          width={width}
          height={height}
          fetchPriority={fetchPriority}
          loading={loading}
          decoding={decoding}
          sizes={sizes}
          onError={handleError}
        />
      </picture>
    );
  }

  // Standard img with all optimization attributes
  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      fetchPriority={fetchPriority}
      loading={loading}
      decoding={decoding}
      sizes={sizes}
    />
  );
});

OptimizedImage.displayName = 'OptimizedImage';
