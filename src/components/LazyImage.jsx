import { memo, useState, useEffect, useRef } from 'react';

export const LazyImage = memo(({ src, alt, className, style, width, height, priority = false }) => {
    const [imageSrc, setImageSrc] = useState(priority ? src : null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        // אם priority=true, טען מיד (לא lazy)
        if (priority) {
            setImageSrc(src);
            return;
        }

        // אחרת, השתמש ב-Intersection Observer
        if (!imgRef.current) return;
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !imageSrc) {
                        setImageSrc(src);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { 
                rootMargin: '50px',  // התחל לטעון 50px לפני שנכנס למסך
                threshold: 0.01      // גם אם רק 1% נראה
            }
        );
        
        observer.observe(imgRef.current);
        
        return () => {
            if (observer && imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, [src, imageSrc, priority]);

    return (
        <div 
            ref={imgRef} 
            className="relative overflow-hidden"
            style={style}
        >
            {/* Blur placeholder */}
            {!imageLoaded && (
                <div 
                    className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"
                    aria-hidden="true"
                />
            )}
            
            {/* התמונה האמיתית */}
            {imageSrc && (
                <img
                    src={imageSrc}
                    alt={alt}
                    width={width}
                    height={height}
                    className={`${className} transition-opacity duration-500 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    loading={priority ? 'eager' : 'lazy'}
                    decoding="async"
                />
            )}
        </div>
    );
});

LazyImage.displayName = 'LazyImage';