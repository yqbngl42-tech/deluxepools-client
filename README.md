# 🏊 LuxePool Projects - Client

אתר תדמית יוקרתי לבניית בריכות שחייה, ג'קוזי וסאונות - **צד לקוח**

## 📦 טכנולוגיות

- **React 18** - ספרייה לבניית ממשק משתמש
- **Vite** - כלי build מהיר וחזק
- **Tailwind CSS** - עיצוב מודרני
- **React Router** - ניווט בין דפים
- **React Helmet Async** - SEO דינמי

## 🖼️ תמונות מקומיות

הפרויקט משתמש בתמונות מקומיות מתוך התיקייה `public/images/`:

```
public/images/
├── placeholder.webp         ← תמונת placeholder כללית
├── pools/                   ← 6 תמונות בריכות
│   ├── pool1.webp
│   ├── pool2.webp
│   └── ...
├── jacuzzi/                 ← 6 תמונות ג'קוזי
│   ├── jacuzzi1.webp
│   └── ...
├── sauna/                   ← 6 תמונות סאונות
│   ├── sauna1.webp
│   └── ...
└── renovations/             ← 6 תמונות שיפוצים
    ├── reno1.webp
    └── ...
```

### 📄 קובץ GalleryData.js

כל נתיבי התמונות מרוכזים בקובץ אחד: `src/data/GalleryData.js`

```javascript
import { galleryData } from './data/GalleryData';

// שימוש:
const poolImages = galleryData.pools;
const jacuzziImages = galleryData.jacuzzi;
```

## 🚀 התקנה והרצה

### 1. התקן תלויות
```bash
npm install
```

### 2. הרץ בסביבת פיתוח
```bash
npm run dev
```

האתר יהיה זמין ב: **http://localhost:5173**

### 3. בנה לפרודקשן
```bash
npm run build
```

הקבצים יישמרו בתיקייה `dist/`

### 4. תצוגה מקדימה של build
```bash
npm run preview
```

## 🎨 החלפת תמונות

### אופציה 1: החלף תמונות קיימות
פשוט החלף את הקבצים ב-`public/images/` עם התמונות שלך (שמור על אותם שמות).

### אופציה 2: הוסף תמונות חדשות
1. הוסף תמונות ל-`public/images/[category]/`
2. עדכן את `src/data/GalleryData.js`
3. רענן את הדפדפן

### דוגמה:
```javascript
// src/data/GalleryData.js
export const galleryData = {
  pools: [
    "/images/pools/my-new-pool.webp",  // התמונה החדשה שלך
    "/images/pools/pool2.webp",
    // ...
  ],
};
```

## 📱 רספונסיביות

האתר מותאם במלואו לנייד, טאבלט ומחשב:
- Mobile: 320px-640px
- Tablet: 640px-1024px  
- Desktop: 1024px+

## ♿ נגישות

- ✅ ARIA labels מלאים
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Semantic HTML
- ✅ Alt texts לכל התמונות

## 🎯 SEO

- ✅ Meta tags דינמיים
- ✅ Structured Data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Open Graph

## 🔗 חיבור לשרת

עדכן את כתובת השרת ב-`src/components/ContactForm.jsx`:

```javascript
const response = await fetch(`${import.meta.env.VITE_API_URL}/api/send`, {
  // שנה ל-URL של השרת שלך
});
```

## 🌐 פריסה

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod
```

**הגדרות:**
- Build Command: `npm run build`
- Publish Directory: `dist`
- Framework: Vite

## 📊 ביצועים

### Lighthouse Score צפוי:
- Performance: 90-95+
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 95-100

## 📁 מבנה התיקיות

```
luxepool-client/
├── public/
│   ├── images/              ← תמונות מקומיות
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── components/          ← קומפוננטים
│   ├── pages/              ← דפים
│   ├── data/               ← נתוני תמונות
│   │   └── GalleryData.js  ← מרכז התמונות
│   ├── App.jsx
│   └── index.jsx
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🛠️ תחזוקה

### עדכון תוכן
- `src/pages/Home.jsx` - תוכן דף הבית
- `src/App.jsx` - נתוני שירותים
- `src/data/GalleryData.js` - נתיבי תמונות

### עדכון צבעים
- ערוך את Tailwind classes
- צבעים ראשיים: `blue-600`, `cyan-500`

## 📞 תמיכה

יש בעיה? בדוק:
1. ✅ התמונות ב-`public/images/` קיימות
2. ✅ נתיבי התמונות ב-`GalleryData.js` נכונים
3. ✅ Port 5173 פנוי
4. ✅ כל התלויות מותקנות (`npm install`)

---

**© 2025 LuxePool Projects • בס״ד**
