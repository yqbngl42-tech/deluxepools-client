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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus('validation-error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrors({});

    try {
      const response = await fetch('https://luxepool-server.onrender.com/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
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
        <FormField
          id="name"
          label="שם מלא *"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          disabled={isSubmitting}
        />
        <FormField
          id="phone"
          label="טלפון *"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          disabled={isSubmitting}
        />
      </div>

      <FormField
        id="email"
        label="אימייל (אופציונלי)"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        disabled={isSubmitting}
      />

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
          סוג שירות
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-base"
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
          onChange={handleChange}
          className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-base resize-none"
          disabled={isSubmitting}
        />
      </div>

      {submitStatus === 'validation-error' && (
        <Alert type="warning" message="⚠️ אנא תקן את השגיאות בטופס" />
      )}
      {submitStatus === 'success' && (
        <Alert type="success" message="✅ ההודעה נשלחה בהצלחה! נחזור אליכם בהקדם." />
      )}
      {submitStatus === 'error' && (
        <Alert type="error" message="❌ אירעה שגיאה. אנא נסו שוב או צרו קשר טלפונית." />
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

// 🔧 רכיב שדה טופס
const FormField = ({ id, label, type, value, onChange, error, required = false, disabled = false }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      placeholder={label}
      required={required}
      value={value}
      onChange={onChange}
      className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 ${error ? 'border-red-500' : 'border-gray-200'} focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-base`}
      aria-label={label}
      aria-required={required}
      aria-invalid={error ? 'true' : 'false'}
      aria-describedby={error ? `${id}-error` : undefined}
      disabled={disabled}
    />
    {error && (
      <p id={`${id}-error`} className="text-red-600 text-sm mt-1" role="alert">
        {error}
      </p>
    )}
  </div>
);

// 🔔 רכיב הודעה
const Alert = ({ type, message }) => {
  const colors = {
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800'
  };
  return (
    <div className={`${colors[type]} px-4 py-3 rounded-xl text-center`} role="alert">
      {message}
    </div>
  );
};