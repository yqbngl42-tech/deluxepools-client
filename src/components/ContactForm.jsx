import { memo, useState, useCallback } from 'react';
import { Send } from './Icons';

export const ContactForm = memo(() => {
    const [formData, setFormData] = useState({ 
        name: '', 
        phone: '', 
        email: '', 
        service: '', 
        message: '' 
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errors, setErrors] = useState({});

    // Client-side validation
    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name || formData.name.trim().length < 2) {
            newErrors.name = 'אנא הכנס שם מלא';
        }
        
        if (!formData.phone || !/^(0[2-9]\d{7,8}|\+972[2-9]\d{7,8})$/.test(formData.phone)) {
            newErrors.phone = 'אנא הכנס מספר טלפון תקין';
        }
        
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'כתובת אימייל לא תקינה';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        
        // Validate before submission
        if (!validateForm()) {
            setSubmitStatus('validation-error');
            return;
        }
        
        setIsSubmitting(true);
        setSubmitStatus(null);
        setErrors({});

        try {
            const response = await fetch('http://localhost:5000/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', phone: '', email: '', service: '', message: '' });
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                setSubmitStatus('error');
                if (data.details) {
                    const serverErrors = {};
                    data.details.forEach(err => {
                        serverErrors[err.param] = err.msg;
                    });
                    setErrors(serverErrors);
                }
                console.error('Server error:', data);
            }
        } catch (error) {
            setSubmitStatus('error');
            console.error('Network error:', error);
        } finally {
            setIsSubmitting(false);
        }
    }, [formData]);

    return (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        שם מלא *
                    </label>
                    <input 
                        id="name"
                        name="name"
                        type="text" 
                        placeholder="הכנס שם מלא" 
                        required 
                        value={formData.name} 
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                        className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-base`}
                        aria-label="שם מלא"
                        aria-required="true"
                        aria-invalid={errors.name ? 'true' : 'false'}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        disabled={isSubmitting}
                    />
                    {errors.name && (
                        <p id="name-error" className="text-red-600 text-sm mt-1" role="alert">
                            {errors.name}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        טלפון *
                    </label>
                    <input 
                        id="phone"
                        name="phone"
                        type="tel" 
                        placeholder="050-1234567" 
                        required 
                        value={formData.phone} 
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                        className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-base`}
                        aria-label="מספר טלפון"
                        aria-required="true"
                        aria-invalid={errors.phone ? 'true' : 'false'}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        disabled={isSubmitting}
                    />
                    {errors.phone && (
                        <p id="phone-error" className="text-red-600 text-sm mt-1" role="alert">
                            {errors.phone}
                        </p>
                    )}
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    אימייל (אופציונלי)
                </label>
                <input 
                    id="email"
                    name="email"
                    type="email" 
                    placeholder="example@gmail.com" 
                    value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-base`}
                    aria-label="כתובת אימייל"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    disabled={isSubmitting}
                />
                {errors.email && (
                    <p id="email-error" className="text-red-600 text-sm mt-1" role="alert">
                        {errors.email}
                    </p>
                )}
            </div>
            <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    סוג שירות
                </label>
                <select 
                    id="service"
                    name="service"
                    value={formData.service} 
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })} 
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-base"
                    aria-label="בחר סוג שירות"
                    disabled={isSubmitting}
                >
                    <option value="">בחרו סוג שירות</option>
                    <option value="בריכות שחייה">בריכות שחייה</option>
                    <option value="ג'קוזי">ג'קוזי</option>
                    <option value="סאונות">סאונות</option>
                    <option value="שיפוצים">שיפוצים כללים</option>
                </select>
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    הודעה (אופציונלי)
                </label>
                <textarea 
                    id="message"
                    name="message"
                    placeholder="ספרו לנו על הפרויקט שלכם..." 
                    rows="4" 
                    value={formData.message} 
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-base resize-none"
                    aria-label="הודעה נוספת"
                    disabled={isSubmitting}
                />
            </div>
            
            {submitStatus === 'validation-error' && (
                <div className="bg-yellow-100 text-yellow-800 px-4 py-3 rounded-xl text-center" role="alert">
                    ⚠️ אנא תקן את השגיאות בטופס
                </div>
            )}
            
            {submitStatus === 'success' && (
                <div className="bg-green-100 text-green-800 px-4 py-3 rounded-xl text-center" role="alert">
                    ✅ ההודעה נשלחה בהצלחה! נחזור אליכם בהקדם.
                </div>
            )}
            
            {submitStatus === 'error' && (
                <div className="bg-red-100 text-red-800 px-4 py-3 rounded-xl text-center" role="alert">
                    ❌ אירעה שגיאה. אנא נסו שוב או צרו קשר טלפונית.
                </div>
            )}
            
            <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl text-base sm:text-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-label="שלחו הודעה"
            >
                <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                {isSubmitting ? 'שולח...' : 'שלחו הודעה'}
            </button>
        </form>
    );
});

ContactForm.displayName = 'ContactForm';
