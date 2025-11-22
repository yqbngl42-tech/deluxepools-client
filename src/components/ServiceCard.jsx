import { memo } from 'react';
import { useInView } from './hooks/useInView';
import { LazyImage } from './LazyImage';
import { ChevronLeft } from './Icons';

export const ServiceCard = memo(({ title, description, image, onClick, delay = 0 }) => {
    const [ref, isInView] = useInView();

    return (
        <article 
            ref={ref} 
            className={`relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-[1.02] lg:hover:scale-105 hover:shadow-3xl group active:scale-[0.98] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} 
            style={{ transitionDelay: `${delay}ms` }} 
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && onClick()}
        >
            <div className="h-64 sm:h-72 lg:h-80 relative">
                <LazyImage src={image} alt={title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent" />
                
                <div className="absolute top-3 right-3 bg-cyan-400 text-blue-900 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-bold shadow-lg animate-pulse flex items-center gap-1">
                    <span>👆</span>
                    <span className="hidden xs:inline">לחצו כאן</span>
                    <span className="xs:hidden">לחץ</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1.5 sm:mb-2 drop-shadow-lg">{title}</h3>
                    <p className="text-white text-sm sm:text-base mb-2 sm:mb-3 line-clamp-2">{description}</p>
                    
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-900 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-bold text-center shadow-lg transform group-hover:scale-105 group-active:scale-95 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                        <span>לחצו לפרטים מלאים</span>
                        <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-all duration-300 pointer-events-none" />
            </div>
        </article>
    );
});

ServiceCard.displayName = 'ServiceCard';
