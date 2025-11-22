/**
 * GalleryData.js
 * 
 * מרכז את כל נתיבי התמונות לפי קטגוריות
 * כל התמונות נמצאות ב-public/images/
 * 
 * שימוש:
 * import { galleryData } from './data/GalleryData';
 * const poolImages = galleryData.pools;
 */

export const galleryData = {
  // בריכות שחייה - 6 תמונות
  pools: [
    "/images/pools/pool1.webp",
    "/images/pools/pool2.webp",
    "/images/pools/pool3.webp",
    "/images/pools/pool4.webp",
    "/images/pools/pool5.webp",
    "/images/pools/pool6.webp",
  ],

  // ג'קוזי - 6 תמונות
  jacuzzi: [
    "/images/jacuzzi/jacuzzi1.webp",
    "/images/jacuzzi/jacuzzi2.webp",
    "/images/jacuzzi/jacuzzi3.webp",
    "/images/jacuzzi/jacuzzi4.webp",
    "/images/jacuzzi/jacuzzi5.webp",
    "/images/jacuzzi/jacuzzi6.webp",
  ],

  // סאונות - 6 תמונות
  sauna: [
    "/images/sauna/sauna1.webp",
    "/images/sauna/sauna2.webp",
    "/images/sauna/sauna3.webp",
    "/images/sauna/sauna4.webp",
    "/images/sauna/sauna5.webp",
    "/images/sauna/sauna6.webp",
  ],

  // שיפוצים - 6 תמונות
  renovations: [
    "/images/renovations/reno1.webp",
    "/images/renovations/reno2.webp",
    "/images/renovations/reno3.webp",
    "/images/renovations/reno4.webp",
    "/images/renovations/reno5.webp",
    "/images/renovations/reno6.webp",
  ],

  // תמונת placeholder כללית
  placeholder: "/images/placeholder.webp",

  // תמונת Hero לדף הבית
  hero: "/images/pools/pool1.webp",
};

// פונקציה עזר - מחזירה תמונה לפי קטגוריה ואינדקס
export const getImage = (category, index = 0) => {
  const images = galleryData[category];
  if (!images || !images[index]) {
    return galleryData.placeholder;
  }
  return images[index];
};

// פונקציה עזר - מחזירה את כל התמונות של קטגוריה
export const getCategoryImages = (category) => {
  return galleryData[category] || [];
};

// פונקציה עזר - מחזירה תמונה ראשית לכרטיס שירות
export const getServiceImage = (serviceId) => {
  const mapping = {
    'pools': galleryData.pools[0],
    'jacuzzi': galleryData.jacuzzi[0],
    'sauna': galleryData.sauna[0],
    'renovation': galleryData.renovations[0],
  };
  return mapping[serviceId] || galleryData.placeholder;
};

export default galleryData;
