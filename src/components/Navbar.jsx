import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Menu, X } from './Icons';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const handleKeyDown = (e, action) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            action();
        }
    };

    const navLinks = [
        { name: 'בית', path: '/', isExternal: false },
        { name: 'שירותים', action: () => scrollToSection('services') },
        { name: 'אודות', action: () => scrollToSection('about') },
        { name: 'המלצות', action: () => scrollToSection('testimonials') },
        { name: 'גלריה', action: () => scrollToSection('gallery') },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg" role="navigation" aria-label="ניווט ראשי">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo */}
                    <Link 
                        to="/" 
                        className="flex items-center gap-2 sm:gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                        aria-label="לוגו Deluxe Pools Israel - חזרה לעמוד הבית"
                    >
                        <img 
                            src="/logo.svg" 
                            alt="Deluxe Pools Israel Logo" 
                            className="h-10 w-10 sm:h-12 sm:w-12"
                            loading="eager"
                        />
                        <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            Deluxe Pools Israel
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link, index) => (
                            link.path ? (
                                <Link
                                    key={index}
                                    to={link.path}
                                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                                    aria-label={`נווט ל${link.name}`}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <button
                                    key={index}
                                    onClick={link.action}
                                    onKeyDown={(e) => handleKeyDown(e, link.action)}
                                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                                    aria-label={`גלול אל ${link.name}`}
                                >
                                    {link.name}
                                </button>
                            )
                        ))}

                        {/* CTA Buttons */}
                        <a
                            href="mailto:luxepool.info@gmail.com"
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            aria-label="שלחו לנו אימייל"
                        >
                            <Mail className="w-5 h-5" aria-hidden="true" />
                            <span>שלחו מייל</span>
                        </a>

                        <button
                            onClick={() => scrollToSection('contact')}
                            onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('contact'))}
                            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                            aria-label="גלול לטופס יצירת קשר"
                        >
                            <span>צור קשר</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        onKeyDown={(e) => handleKeyDown(e, () => setIsOpen(!isOpen))}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        {isOpen ? (
                            <X className="w-6 h-6 text-gray-700" aria-hidden="true" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-700" aria-hidden="true" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div 
                        id="mobile-menu"
                        className="lg:hidden py-4 border-t border-gray-200"
                        role="menu"
                        aria-label="תפריט ניווט נייד"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link, index) => (
                                link.path ? (
                                    <Link
                                        key={index}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2"
                                        role="menuitem"
                                        aria-label={`נווט ל${link.name}`}
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <button
                                        key={index}
                                        onClick={link.action}
                                        onKeyDown={(e) => handleKeyDown(e, link.action)}
                                        className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 text-right focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2"
                                        role="menuitem"
                                        aria-label={`גלול אל ${link.name}`}
                                    >
                                        {link.name}
                                    </button>
                                )
                            ))}

                            {/* Mobile CTA Buttons */}
                            <a
                                href="mailto:luxepool.info@gmail.com"
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-3 rounded-full font-bold shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                role="menuitem"
                                aria-label="שלחו לנו אימייל"
                            >
                                <Mail className="w-5 h-5" aria-hidden="true" />
                                <span>שלחו מייל</span>
                            </a>

                            <button
                                onClick={() => scrollToSection('contact')}
                                onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('contact'))}
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-full font-bold shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                                role="menuitem"
                                aria-label="גלול לטופס יצירת קשר"
                            >
                                <span>צור קשר</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
