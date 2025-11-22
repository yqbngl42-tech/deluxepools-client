import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from '../components/HeroSection';
import { StatCounter } from '../components/StatCounter';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { ContactForm } from '../components/ContactForm';
import { Lightbox } from '../components/Lightbox';
import { LazyImage } from '../components/LazyImage';
import { Award, Users, Briefcase, Star, CheckCircle, Mail } from '../components/Icons';
import { galleryData } from '../data/GalleryData';

export const Home = () => {
    const navigate = useNavigate();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const services = useMemo(() => [
        {
            id: 'pools',
            title: 'בריכות שחייה',
            subtitle: 'תכנון, בנייה והתקנה של בריכות שחייה פרטיות',
            description: 'אנחנו מתמחים בבניית בריכות שחייה פרטיות ברמה הגבוהה ביותר. מהתכנון הראשוני ועד למסירה סופית, אנו מלווים אתכם בכל שלב. כל בריכה מותאמת אישית לצרכים שלכם ולעיצוב החצר.',
            image: galleryData.pools[0],
            benefits: ['ניסיון של למעלה מ-15 שנה', 'חומרים איכותיים ועמידים', 'מערכות סינון מתקדמות', 'עיצוב מותאם אישית', 'אחריות מלאה', 'ליווי צמוד'],
            gallery: galleryData.pools
        },
        {
            id: 'jacuzzi',
            title: 'ג\'קוזי',
            subtitle: 'התקנת ג\'קוזי יוקרתי לחצר או למרפסת',
            description: 'התקנת ג\'קוזי היא הדרך המושלמת להפוך את הבית שלכם לאתר נופש פרטי. אנו מציעים ג\'קוזי איכותיים עם מערכות הידרומסאז\' מתקדמות, תאורה ומערכות בקרה חכמות.',
            image: galleryData.jacuzzi[0],
            benefits: ['ג\'קוזי מהמותגים המובילים', 'התקנה מקצועית', 'מערכות הידרומסאז\' מתקדמות', 'תאורת LED', 'מערכות בקרה חכמות', 'שירות ותחזוקה'],
            gallery: galleryData.jacuzzi
        },
        {
            id: 'sauna',
            title: 'סאונות',
            subtitle: 'בניית סאונות יבשות ורטובות',
            description: 'סאונה ביתית היא השקעה בבריאות ובאיכות חיים. אנו בונים סאונות מעץ איכותי עם מערכות חימום מתקדמות. כל סאונה מותאמת לצרכים האישיים ולמרחב הזמין.',
            image: galleryData.sauna[0],
            benefits: ['בנייה מעץ איכותי', 'מערכות חימום חסכוניות', 'בקרת טמפרטורה מדויקת', 'עיצוב מותאם', 'התקנה מהירה', 'הדרכה מלאה'],
            gallery: galleryData.sauna
        },
        {
            id: 'renovation',
            title: 'שיפוצים כללים',
            subtitle: 'שיפוץ בתים ודירות ברמה הגבוהה ביותר',
            description: 'אנו מבצעים שיפוצים כללים בתים ודירות ברמה הגבוהה ביותר. החל משיפוץ חלקי ועד שיפוץ מלא. צוות מקצועי עם ניסיון רב ומחויבות לעמידה בזמנים. אנו מספקים פתרון מקיף לכל צרכי השיפוץ שלכם.',
            image: galleryData.renovations[0],
            benefits: ['ניסיון רב בשיפוצים', 'קבלנים מיומנים', 'חומרים איכותיים', 'עמידה בזמנים', 'ליווי מלא', 'מחירים הוגנים'],
            services: [
                { icon: '🎨', title: 'עבודות גבס וצבע', description: 'גבס, תקרות אקוסטיות וצביעה מקצועית' },
                { icon: '⚡', title: 'חשמלאי מוסמך', description: 'עבודות חשמל ותיקונים מקצועיים' },
                { icon: '📐', title: 'מהנדס ואדריכל', description: 'תכנון והנחיה מקצועית לפי צורך' },
                { icon: '🔧', title: 'אחזקת מבנים', description: 'תחזוקה שוטפת ותיקונים' },
                { icon: '🚚', title: 'הובלת דירות', description: 'שירותי הובלה מקצועיים' },
                { icon: '✨', title: 'ניקיון לבית', description: 'פוליש ווקס לפינוק הסופי' }
            ],
            gallery: galleryData.renovations
        }
    ], []);

    const testimonials = useMemo(() => [
        { 
            name: 'יוסי כהן', 
            location: 'רמת השרון',
            text: 'בנו לנו בריכה מהממת בחצר! העבודה היתה מקצועית ברמה הגבוהה ביותר, עמדו בזמנים והתוצאה עלתה על כל הציפיות שלנו. צוות מקצועי, אמין ומסור. ממליץ בחום!', 
            rating: 5, 
            platform: 'Google',
            date: 'לפני 3 חודשים'
        },
        { 
            name: 'משפחת לוי', 
            location: 'הרצליה',
            text: 'התקינו לנו ג\'קוזי יוקרתי במרפסת. השירות היה מעולה מהרגע הראשון - ייעוץ מקצועי, התקנה מדויקת ומהירה, והתוצאה פשוט מושלמת. כל ערב אנחנו נהנים מהג\'קוזי. שירות ברמה גבוהה!', 
            rating: 5, 
            platform: 'Google',
            date: 'לפני חודשיים'
        },
        { 
            name: 'דוד אברהם', 
            location: 'תל אביב',
            text: 'שיפצו לנו את כל הדירה ברמה הכי גבוהה שיש! אמינים, מקצועיים, עומדים בזמנים ובתקציב. הצוות היה נחמד ומסור, והתוצאה הסופית פשוט מדהימה. תודה רבה על העבודה המצוינת!', 
            rating: 5, 
            platform: 'Google',
            date: 'לפני חודש'
        },
        { 
            name: 'משפחת שלום', 
            location: 'כפר סבא',
            text: 'בנו לנו סאונה ביתית מדהימה! מהתכנון ועד הביצוע - הכל היה מושלם. צוות מקצועי שיודע בדיוק מה הוא עושה, חומרים איכותיים, ועבודה נקייה ומסודרת. מרגישים כמו בספא פרטי!', 
            rating: 5, 
            platform: 'Google',
            date: 'לפני 4 חודשים'
        },
        { 
            name: 'רונן מזרחי', 
            location: 'רעננה',
            text: 'שיפצנו את המטבח והאמבטיה. העבודה היתה מקצועית ברמות, עם תשומת לב לכל פרט. הקבלן היה זמין לכל שאלה, עמד בזמנים שהובטחו והתוצאה הסופית מעבר למצופה. בהחלט ממליץ!', 
            rating: 5, 
            platform: 'Google',
            date: 'לפני 5 חודשים'
        },
        { 
            name: 'משפחת גולן', 
            location: 'נתניה',
            text: 'הזמנו בריכה מחוממת וג\'קוזי. מהרגע הראשון ידענו שבחרנו נכון - ייעוץ מקצועי, תכנון מדויק, והתקנה ללא רבב. הכי חשוב - השירות לאחר המכירה מעולה. חברה אמינה ומקצועית ברמה הגבוהה ביותר!', 
            rating: 5, 
            platform: 'Google',
            date: 'לפני חודשיים'
        }
    ], []);

    const galleryImages = useMemo(() => [
        // בריכות פרטיות
        ...galleryData.pools.slice(0, 3),
        // ג'קוזי
        ...galleryData.jacuzzi.slice(0, 2),
        // סאונות
        ...galleryData.sauna.slice(0, 2),
        // שיפוצים
        ...galleryData.renovations.slice(0, 2),
        // עוד בריכות
        ...galleryData.pools.slice(3, 5),
        // עוד ג'קוזי
        galleryData.jacuzzi[2]
    ], []);

    const handleServiceClick = (service) => {
        navigate(`/service/${service.id === 'pools' ? 'pool-construction' : service.id}`);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Helmet>
                <title>Deluxe Pools Israel | בריכות שחייה פרטיות, ג'קוזי וסאונות בכל הארץ</title>
                <meta name="description" content="Deluxe Pools Israel – מומחים לבניית בריכות שחייה פרטיות, ג'קוזי וסאונות בפריסה ארצית בישראל. 15+ שנות ניסיון, 500+ לקוחות מרוצים. שירות ארצי מקצועי." />
                <meta name="keywords" content="בריכות שחייה בישראל, בניית בריכות פרטיות, ג'קוזי יוקרתי, סאונה יבשה, סאונה רטובה, קבלן בריכות ישראל, בריכה יוקרה, שיפוצים, בריכות בכל הארץ" />
                <link rel="canonical" href="https://www.luxepool-projects.com/" />
                
                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.luxepool-projects.com/" />
                <meta property="og:title" content="Deluxe Pools Israel - מומחי בריכות שחייה וג'קוזי בכל הארץ" />
                <meta property="og:description" content="15+ שנות ניסיון בבניית בריכות יוקרתיות בכל רחבי ישראל. שירות ארצי מקצועי. התקנת ג'קוזי, סאונות ושיפוצים." />
                <meta property="og:image" content="/images/pools/pool1.webp" />
                
                {/* Schema.org structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://www.luxepool-projects.com/#business",
                        "name": "Deluxe Pools Israel",
                        "description": "מומחים לבניית בריכות שחייה פרטיות, ג'קוזי וסאונות בפריסה ארצית בישראל. 15+ שנות ניסיון",
                        "url": "https://www.luxepool-projects.com",
                        "telephone": "+972548775052",
                        "email": "luxepool.info@gmail.com",
                        "image": "/images/pools/pool1.webp",
                        "priceRange": "₪₪₪",
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "IL"
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "Israel"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "5",
                            "reviewCount": "500"
                        }
                    })}
                </script>
            </Helmet>

            <HeroSection />

            {/* Stats Section */}
            <section className="py-12 sm:py-20 px-4 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-50" />
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-3 sm:mb-4">המספרים מדברים בעד עצמם</h2>
                        <p className="text-lg sm:text-xl text-gray-600">שנים של ניסיון ומאות לקוחות מרוצים</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <StatCounter icon={Award} end={15} suffix="+" label="שנות ניסיון" />
                        <StatCounter icon={Users} end={500} suffix="+" label="לקוחות מרוצים" />
                        <StatCounter icon={Briefcase} end={350} suffix="+" label="פרויקטים הושלמו" />
                        <StatCounter icon={Star} end={100} suffix="%" label="שביעות רצון" />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-12 sm:py-20 px-4 bg-gradient-to-b from-white to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 sm:mb-16">
                        <div className="inline-block bg-blue-100 text-blue-600 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">מה אנחנו מציעים</div>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-blue-900 mb-4 sm:mb-6">השירותים שלנו</h2>
                        <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">מגוון רחב של שירותים באיכות ללא פשרות</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {services.map((service, index) => (
                            <ServiceCard 
                                key={service.id} 
                                title={service.title} 
                                description={service.subtitle} 
                                image={service.image} 
                                onClick={() => handleServiceClick(service)} 
                                delay={index * 100} 
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-12 sm:py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <div className="inline-block bg-blue-100 text-blue-600 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">הסיפור שלנו</div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">אודות העסק</h2>
                            <p className="text-base sm:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">Deluxe Pools Israel הוא עסק משפחתי עם ניסיון של למעלה מ-15 שנה בתחום הבריכות והשיפוצים.</p>
                            <p className="text-base sm:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">הערך המרכזי שלנו הוא איכות ללא פשרות. אנו עובדים עם החומרים הטובים ביותר והקבלנים המיומנים ביותר בשוק.</p>
                            <div className="flex flex-wrap gap-3 sm:gap-4">
                                <div className="bg-blue-50 px-4 sm:px-6 py-2 sm:py-3 rounded-xl flex items-center gap-2 sm:gap-3">
                                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                                    <span className="font-semibold text-gray-800 text-sm sm:text-base">רישוי מלא</span>
                                </div>
                                <div className="bg-blue-50 px-4 sm:px-6 py-2 sm:py-3 rounded-xl flex items-center gap-2 sm:gap-3">
                                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                                    <span className="font-semibold text-gray-800 text-sm sm:text-base">ביטוח מקיף</span>
                                </div>
                                <div className="bg-blue-50 px-4 sm:px-6 py-2 sm:py-3 rounded-xl flex items-center gap-2 sm:gap-3">
                                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                                    <span className="font-semibold text-gray-800 text-sm sm:text-base">אחריות מלאה</span>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600 h-64 sm:h-96 rounded-2xl sm:rounded-3xl shadow-2xl flex items-center justify-center text-white text-7xl sm:text-9xl transform hover:scale-105 hover:rotate-2 transition-all duration-500" aria-hidden="true">
                                🏆
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-12 sm:py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 sm:mb-16">
                        <div className="inline-block bg-blue-100 text-blue-600 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">מה הלקוחות אומרים</div>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-blue-900 mb-4 sm:mb-6">המלצות</h2>
                        <p className="text-base sm:text-xl text-gray-600">שביעות רצון הלקוחות היא הראיה הטובה ביותר לאיכות</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard 
                                key={index} 
                                name={testimonial.name} 
                                text={testimonial.text} 
                                rating={testimonial.rating} 
                                location={testimonial.location}
                                platform={testimonial.platform}
                                date={testimonial.date}
                                delay={index * 150} 
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-12 sm:py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 sm:mb-16">
                        <div className="inline-block bg-blue-100 text-blue-600 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">העבודות שלנו</div>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-blue-900 mb-4 sm:mb-6">גלריית הפרויקטים</h2>
                        <p className="text-base sm:text-xl text-gray-600">מבחר מהעבודות המרשימות שביצענו</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                        {galleryImages.map((imageUrl, index) => (
                            <div 
                                key={index} 
                                onClick={() => { setCurrentImageIndex(index); setLightboxOpen(true); }} 
                                className="relative h-40 sm:h-56 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
                                role="button"
                                tabIndex={0}
                                aria-label={`פתח תמונה ${index + 1} בגלריה`}
                            >
                                <LazyImage src={imageUrl} alt={`פרויקט ${index + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-xs sm:text-sm font-semibold">לחצו להגדלה</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-12 sm:py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8 sm:mb-12">
                        <div className="inline-block bg-blue-100 text-blue-600 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">צרו קשר</div>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-blue-900 mb-4 sm:mb-6">בואו נדבר!</h2>
                        <p className="text-base sm:text-xl text-gray-600">יש לכם פרויקט? מלאו את הטופס ונחזור אליכם במהירות</p>
                    </div>
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12">
                        <ContactForm />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
                        <a 
                            href="mailto:luxepool.info@gmail.com" 
                            className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white transform hover:scale-105 active:scale-95 transition-all duration-300 block"
                            aria-label="שלחו לנו אימייל"
                        >
                            <Mail className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" />
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">שלחו אימייל</h3>
                            <span className="text-lg sm:text-xl hover:underline block break-all">luxepool.info@gmail.com</span>
                        </a>
                        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
                            <Mail className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" />
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">שירות ארצי</h3>
                            <p className="text-lg sm:text-xl">פועלים בכל רחבי ישראל 🇮🇱</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-10 sm:py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-6 sm:mb-8">
                        <h3 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-3">Deluxe Pools Israel</h3>
                        <p className="text-base sm:text-2xl font-light">איכות • אמינות • מצוינות</p>
                        <p className="text-sm sm:text-lg mt-2 opacity-90">שירות ארצי בכל רחבי ישראל 🇮🇱</p>
                    </div>
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-lg mb-6 sm:mb-8">
                        <a 
                            href="mailto:luxepool.info@gmail.com" 
                            className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-white/20 active:scale-95 transition-all"
                            aria-label="שלח אימייל"
                        >
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="truncate">luxepool.info@gmail.com</span>
                        </a>
                    </div>
                    <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20 text-center">
                        <p className="text-xs sm:text-sm opacity-75">© 2025 Deluxe Pools Israel. כל הזכויות שמורות.</p>
                        <p className="text-xs sm:text-sm opacity-75 mt-2">בס״ד</p>
                    </div>
                </div>
            </footer>

            {lightboxOpen && (
                <Lightbox 
                    images={galleryImages} 
                    currentIndex={currentImageIndex} 
                    onClose={() => setLightboxOpen(false)} 
                    onNext={() => setCurrentImageIndex((currentImageIndex + 1) % galleryImages.length)} 
                    onPrev={() => setCurrentImageIndex((currentImageIndex - 1 + galleryImages.length) % galleryImages.length)} 
                />
            )}
        </div>
    );
};
