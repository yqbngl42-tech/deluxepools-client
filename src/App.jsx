import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ServicePage } from './pages/ServicePage';
import { galleryData } from './data/GalleryData';
import './styles.css';

// Services Data - עודכן להשתמש בתמונות מקומיות
const servicesData = {
    'pool-construction': {
        id: 'pools',
        title: 'בריכות שחייה',
        subtitle: 'תכנון, בנייה והתקנה של בריכות שחייה פרטיות',
        description: 'אנחנו מתמחים בבניית בריכות שחייה פרטיות ברמה הגבוהה ביותר. מהתכנון הראשוני ועד למסירה סופית, אנו מלווים אתכם בכל שלב. כל בריכה מותאמת אישית לצרכים שלכם ולעיצוב החצר.',
        image: galleryData.pools[0],
        benefits: ['ניסיון של למעלה מ-15 שנה', 'חומרים איכותיים ועמידים', 'מערכות סינון מתקדמות', 'עיצוב מותאם אישית', 'אחריות מלאה', 'ליווי צמוד'],
        gallery: galleryData.pools
    },
    'jacuzzi': {
        id: 'jacuzzi',
        title: 'ג\'קוזי',
        subtitle: 'התקנת ג\'קוזי יוקרתי לחצר או למרפסת',
        description: 'התקנת ג\'קוזי היא הדרך המושלמת להפוך את הבית שלכם לאתר נופש פרטי. אנו מציעים ג\'קוזי איכותיים עם מערכות הידרומסאז\' מתקדמות, תאורה ומערכות בקרה חכמות.',
        image: galleryData.jacuzzi[0],
        benefits: ['ג\'קוזי מהמותגים המובילים', 'התקנה מקצועית', 'מערכות הידרומסאז\' מתקדמות', 'תאורת LED', 'מערכות בקרה חכמות', 'שירות ותחזוקה'],
        gallery: galleryData.jacuzzi
    },
    'sauna': {
        id: 'sauna',
        title: 'סאונות',
        subtitle: 'בניית סאונות יבשות ורטובות',
        description: 'סאונה ביתית היא השקעה בבריאות ובאיכות חיים. אנו בונים סאונות מעץ איכותי עם מערכות חימום מתקדמות. כל סאונה מותאמת לצרכים האישיים ולמרחב הזמין.',
        image: galleryData.sauna[0],
        benefits: ['בנייה מעץ איכותי', 'מערכות חימום חסכוניות', 'בקרת טמפרטורה מדויקת', 'עיצוב מותאם', 'התקנה מהירה', 'הדרכה מלאה'],
        gallery: galleryData.sauna
    },
    'renovation': {
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
};

function App() {
    return (
        <HelmetProvider>
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route 
                            path="/service/:serviceId" 
                            element={
                                <ServicePageWrapper servicesData={servicesData} />
                            } 
                        />
                        <Route path="/contact" element={<ContactRedirect />} />
                    </Routes>
                </div>
            </Router>
        </HelmetProvider>
    );
}

// Wrapper component to pass service data
const ServicePageWrapper = ({ servicesData }) => {
    const { serviceId } = useParams();
    const service = servicesData[serviceId];
    
    return <ServicePage service={service} />;
};

// Contact redirect component
const ContactRedirect = () => {
    window.location.href = '/#contact';
    return null;
};

export default App;
