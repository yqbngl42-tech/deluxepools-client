import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LazyImage } from '../components/LazyImage';
import { Lightbox } from '../components/Lightbox';
import { CheckCircle, ChevronLeft, Mail } from '../components/Icons';

export const ServicePage = ({ service }) => {
    const navigate = useNavigate();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToContact = () => {
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById('contact');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    if (!service) {
        navigate('/');
        return null;
    }

    // Generate dynamic SEO title and description
    const pageTitle = `${service.title} - Deluxe Pools Israel | ${service.subtitle}`;
    const pageDescription = service.description.substring(0, 155) + '...';
    const canonicalUrl = `https://www.luxepool-projects.com/service/${service.id === 'pools' ? 'pool-construction' : service.id}`;

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20">
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <link rel="canonical" href={canonicalUrl} />
                
                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={service.image} />
                
                {/* Schema.org for Service */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": service.title,
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Deluxe Pools Israel",
                            "telephone": "+972548775052",
                            "email": "luxepool.info@gmail.com"
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "Israel"
                        },
                        "description": service.description,
                        "image": service.image
                    })}
                </script>
            </Helmet>

            <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white py-12 sm:py-20 px-4 relative overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <button 
                        onClick={() => navigate('/')} 
                        className="flex items-center gap-2 mb-4 sm:mb-6 hover:gap-4 transition-all bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base"
                        aria-label="חזרה לעמוד הראשי"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                        חזרה לעמוד הראשי
                    </button>
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-2xl border-4 border-white flex-shrink-0">
                            <LazyImage src={service.image} alt={service.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center sm:text-right">
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-4">{service.title}</h1>
                            <p className="text-base sm:text-2xl md:text-3xl">{service.subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8 sm:py-16">
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-4 sm:mb-6 flex items-center gap-3">
                        <CheckCircle className="w-7 h-7 sm:w-10 sm:h-10 text-cyan-500 flex-shrink-0" />
                        אודות השירות
                    </h2>
                    <p className="text-base sm:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">{service.description}</p>
                    
                    {service.services && (
                        <div className="mb-8 sm:mb-12">
                            <h3 className="text-xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8 text-center">השירותים המקצועיים שלנו</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {service.services.map((item, index) => (
                                    <div key={index} className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-5 sm:p-6 rounded-2xl border-2 border-blue-100 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1">
                                        <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 text-center animate-bounce-slow">{item.icon}</div>
                                        <h4 className="text-base sm:text-lg font-bold text-blue-900 mb-2 text-center">{item.title}</h4>
                                        <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-2xl border-2 border-blue-100">
                        <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">למה לבחור בנו?</h3>
                        <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                            {service.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3 bg-white p-3 sm:p-4 rounded-xl shadow-sm">
                                    <span className="text-cyan-500 text-2xl flex-shrink-0" aria-hidden="true">✓</span>
                                    <span className="text-gray-700 text-sm sm:text-lg">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-6 sm:mb-8">הפרויקטים שלנו</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
                        {service.gallery.map((imageUrl, index) => (
                            <div 
                                key={index} 
                                onClick={() => { setCurrentImageIndex(index); setLightboxOpen(true); }} 
                                className="relative h-40 sm:h-64 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
                                role="button"
                                tabIndex={0}
                                aria-label={`פתח תמונה ${index + 1} בגלריה`}
                            >
                                <LazyImage src={imageUrl} alt={`${service.title} - פרויקט ${index + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-xs sm:text-sm font-semibold drop-shadow-lg">לחצו להגדלה</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">מעוניינים בשירות הזה?</h2>
                        <p className="text-base sm:text-2xl mb-6 sm:mb-8">צרו איתנו קשר עכשיו לייעוץ חינם ולקבלת הצעת מחיר</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:luxepool.info@gmail.com"
                                className="bg-white text-blue-600 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-2xl font-bold shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3"
                                aria-label="שלחו מייל"
                            >
                                <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
                                שלחו מייל
                            </a>
                            <button 
                                onClick={scrollToContact} 
                                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-2xl font-bold shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3"
                                aria-label="צור קשר"
                            >
                                צור קשר
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {lightboxOpen && (
                <Lightbox 
                    images={service.gallery} 
                    currentIndex={currentImageIndex} 
                    onClose={() => setLightboxOpen(false)} 
                    onNext={() => setCurrentImageIndex((currentImageIndex + 1) % service.gallery.length)} 
                    onPrev={() => setCurrentImageIndex((currentImageIndex - 1 + service.gallery.length) % service.gallery.length)} 
                />
            )}
        </div>
    );
};
