import { memo, useState, useEffect } from 'react';
import { Mail, ChevronRight } from './Icons';
import { galleryData } from '../data/GalleryData';

export const HeroSection = memo(() => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrollY(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
    <header className="relative min-h-screen flex items-center overflow-hidden">
        {/* תמונת רקע - טעינה מיידית! */}
        <div className="absolute inset-0">
            <img
                src={galleryData.hero}
                alt="בריכת שחייה יוקרתית"
                className="w-full h-full object-cover"
                style={{ 
                    transform: `translateY(${scrollY * 0.5}px)`,
                }}
                loading="eager"
                fetchpriority="high"
                decoding="async"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-transparent to-blue-900/30"></div>
        </div>
        
        {/* שאר התוכן... */}

            <div className="absolute top-1 sm:top-1.5 md:top-2 right-1 sm:right-1.5 md:right-2 z-20">
                <div className="bg-white/95 backdrop-blur-md px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-md sm:rounded-lg shadow-2xl border-2 border-cyan-500/30 transform hover:scale-105 transition-all duration-300">
                    <span className="text-sm sm:text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                        בס״ד
                    </span>
                </div>
            </div>

            <div className="relative z-10 w-full flex flex-col items-center justify-center text-white px-4 py-20">
                <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in-up max-w-5xl mx-auto">
                    <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-2 sm:mb-4 border border-white/20">
                        <span className="text-sm sm:text-base md:text-lg font-semibold">✨ הבחירה המושלמת לבית שלכם</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-2xl leading-tight">
                        Deluxe Pools Israel
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light drop-shadow-lg px-2">
                        יוצרים חוויות מים יוקרתיות<br /> עם 15+ שנות מצוינות
                    </p>
                    <div className="flex flex-col gap-4 justify-center pt-4 sm:pt-6 max-w-2xl mx-auto">
                        {/* שורה ראשונה - שני כפתורים */}
                        <div className="flex gap-3 sm:gap-4">
                            <a 
                                href="mailto:luxepool.info@gmail.com" 
                                className="group flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-2xl hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                                aria-label="שלחו מייל"
                            >
                                <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
                                <span>שלחו מייל</span>
                            </a>
                            <button 
                                onClick={() => scrollToSection('contact')} 
                                className="group flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 sm:px-6 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                                aria-label="צור קשר"
                            >
                                <span>צור קשר</span>
                            </button>
                        </div>
                        
                        {/* שורה שנייה - כפתור רחב */}
                        <button 
                            onClick={() => scrollToSection('services')} 
                            className="group bg-white/10 backdrop-blur-md border-2 border-white text-white px-6 sm:px-8 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 w-full"
                            aria-label="גלו את השירותים שלנו"
                        >
                            <span>גלו את השירותים שלנו</span>
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-90 group-hover:translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white rotate-90 drop-shadow-lg" />
                </div>
            </div>
        </header>
    );
});

HeroSection.displayName = 'HeroSection';
