import React from 'react';
import PropTypes from 'prop-types';

/**
 * OptimizedImage - A performance-optimized image component
 * 
 * Features:
 * - Native lazy loading for below-the-fold images
 * - Explicit width/height to prevent CLS
 * - Decoding async for smoother rendering
 */
const OptimizedImage = ({
    src,
    alt,
    width,
    height,
    className = '',
    style = {},
    loading = 'lazy',
    priority = false,
    ...props
}) => {
    // Priority images should not be lazy loaded
    const loadingStrategy = priority ? 'eager' : loading;

    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={loadingStrategy}
            decoding={priority ? 'sync' : 'async'}
            className={className}
            style={{
                ...style,
                // Prevent layout shift with aspect ratio preservation
                aspectRatio: width && height ? `${width} / ${height}` : undefined,
            }}
            {...props}
        />
    );
};

OptimizedImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    className: PropTypes.string,
    style: PropTypes.object,
    loading: PropTypes.oneOf(['lazy', 'eager']),
    priority: PropTypes.bool, // Set true for above-the-fold hero images
};

export default OptimizedImage;
