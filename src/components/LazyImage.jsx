import { memo, useState, useEffect, useRef } from 'react';

export const LazyImage = memo(({ src, alt, className, style, width, height }) => {
    const [loaded, setLoaded] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        if (!imgRef.current) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: '50px' });
        
        observer.observe(imgRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <img
            ref={imgRef}
            data-src={src}
            alt={alt}
            width={width}
            height={height}
            className={`${className} ${!loaded ? 'lazy-img' : ''}`}
            style={style}
            onLoad={() => setLoaded(true)}
            loading="lazy"
            decoding="async"
        />
    );
});

LazyImage.displayName = 'LazyImage';
