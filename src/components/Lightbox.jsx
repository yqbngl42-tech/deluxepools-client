import { memo, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from './Icons';

export const Lightbox = memo(({ images, currentIndex, onClose, onNext, onPrev }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onPrev();
            if (e.key === 'ArrowLeft') onNext();
        };
        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [onClose, onNext, onPrev]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-2 sm:p-4" role="dialog" aria-modal="true" aria-label="גלריית תמונות">
            <button 
                onClick={onClose} 
                className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white hover:text-gray-300 z-50 p-2" 
                aria-label="סגור"
            >
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <button 
                onClick={onPrev} 
                className="absolute left-2 sm:left-4 text-white hover:text-gray-300 z-50 p-2" 
                aria-label="הבא"
            >
                <ChevronRight className="w-8 h-8 sm:w-12 sm:h-12" />
            </button>
            <button 
                onClick={onNext} 
                className="absolute right-2 sm:right-4 text-white hover:text-gray-300 z-50 p-2" 
                aria-label="קודם"
            >
                <ChevronLeft className="w-8 h-8 sm:w-12 sm:h-12" />
            </button>
            <div className="max-w-6xl w-full">
                <img 
                    src={images[currentIndex]} 
                    alt={`תמונה ${currentIndex + 1}`} 
                    className="w-full h-auto rounded-lg sm:rounded-2xl" 
                    style={{ maxHeight: '80vh', objectFit: 'contain' }} 
                />
            </div>
            <div className="absolute bottom-2 sm:bottom-4 text-white text-base sm:text-xl">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
});

Lightbox.displayName = 'Lightbox';
