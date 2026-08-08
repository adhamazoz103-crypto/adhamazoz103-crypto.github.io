'use client';

import { useState, type FormEvent } from 'react';
import { useSiteData } from '@/context/SiteContext';
import { Icon } from './Icons';

interface FormFields {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  details: string;
}

interface FormErrors {
  fullName?: boolean;
  phone?: boolean;
  email?: boolean;
  details?: boolean;
}

/**
 * Premium Contact Form.
 * Features validation, loading states, and a luxury success state.
 * Labels are retrieved dynamically from config/contactSection.ts.
 */
export default function ContactForm() {
  const { data } = useSiteData();
  const formLabels = data.contactSection?.formLabels || {};

  const [form, setForm] = useState<FormFields>({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    details: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.fullName.trim()) tempErrors.fullName = true;
    if (!form.phone.trim()) tempErrors.phone = true;
    if (!form.details.trim()) tempErrors.details = true;
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) tempErrors.email = true;

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setForm({
      fullName: '',
      phone: '',
      email: '',
      subject: '',
      details: '',
    });
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div className="bg-card border border-gold p-8 sm:p-10 rounded-3xl text-center flex flex-col items-center justify-center min-h-[400px] transition-all duration-500 scale-100">
        <div className="w-16 h-16 rounded-full bg-gold-light text-gold flex items-center justify-center mb-6 animate-pulse-gold">
          <Icon name="check" size={28} className="stroke-[2.5]" />
        </div>
        <h3 data-admin-id="contact.formLabels.successTitle" className="text-xl sm:text-2xl font-bold text-primary-text mb-3">
          {formLabels.successTitle}
        </h3>
        <p data-admin-id="contact.formLabels.successMessage" className="text-secondary-text text-sm sm:text-base max-w-sm mb-8 leading-relaxed font-light">
          {formLabels.successMessage}
        </p>
        <button
          onClick={handleReset}
          className="bg-transparent border border-gold/40 hover:border-gold text-gold hover:text-gold-hover text-xs font-bold py-2.5 px-6 rounded-full transition-all duration-300"
        >
          أرسل طلباً آخر
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border border-border p-6 sm:p-10 rounded-3xl space-y-5 text-right shadow-xl"
      noValidate
    >
      {/* Full Name */}
      <div>
        <label data-admin-id="contact.formLabels.fullName" htmlFor="fullName" className="block text-xs font-bold text-secondary-text mb-2">
          {formLabels.fullName} <span className="text-gold">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          className={`w-full bg-background border rounded-xl px-4 py-3 text-sm text-primary-text focus:outline-none focus:ring-1 transition-all ${
            errors.fullName
              ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500'
              : 'border-border focus:ring-gold/30 focus:border-gold'
          }`}
          placeholder="مثال: أحمد عبد الله"
        />
      </div>

      {/* Row: Phone & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label data-admin-id="contact.formLabels.phone" htmlFor="phone" className="block text-xs font-bold text-secondary-text mb-2">
            {formLabels.phone} <span className="text-gold">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={`w-full bg-background border rounded-xl px-4 py-3 text-sm text-primary-text focus:outline-none focus:ring-1 transition-all ${
              errors.phone
                ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500'
                : 'border-border focus:ring-gold/30 focus:border-gold'
            }`}
            placeholder="01xxxxxxxxx"
          />
        </div>

        <div>
          <label data-admin-id="contact.formLabels.email" htmlFor="email" className="block text-xs font-bold text-secondary-text mb-2">
            {formLabels.email}
          </label>
          <input
            type="email"
            id="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`w-full bg-background border rounded-xl px-4 py-3 text-sm text-primary-text focus:outline-none focus:ring-1 transition-all ${
              errors.email
                ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500'
                : 'border-border focus:ring-gold/30 focus:border-gold'
              }`}
            placeholder="name@example.com"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label data-admin-id="contact.formLabels.subject" htmlFor="subject" className="block text-xs font-bold text-secondary-text mb-2">
          {formLabels.subject}
        </label>
        <input
          type="text"
          id="subject"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-primary-text focus:outline-none focus:ring-1 focus:ring-gold/30 focus:border-gold transition-all"
          placeholder="مثال: استشارة تجارية"
        />
      </div>

      {/* Details */}
      <div>
        <label data-admin-id="contact.formLabels.details" htmlFor="details" className="block text-xs font-bold text-secondary-text mb-2">
          {formLabels.details} <span className="text-gold">*</span>
        </label>
        <textarea
          id="details"
          rows={4}
          value={form.details}
          onChange={(e) => setForm({ ...form, details: e.target.value })}
          className={`w-full bg-background border rounded-xl px-4 py-3 text-sm text-primary-text focus:outline-none focus:ring-1 transition-all resize-none ${
            errors.details
              ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500'
              : 'border-border focus:ring-gold/30 focus:border-gold'
          }`}
          placeholder="يرجى كتابة تفاصيل المشكلة أو الطلب هنا..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold hover:bg-gold-hover text-background text-sm font-bold py-3.5 px-6 rounded-xl transition-all duration-300 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>جاري إرسال الطلب...</span>
          </>
        ) : (
          <span data-admin-id="contact.formLabels.submitButton">{formLabels.submitButton}</span>
        )}
      </button>
    </form>
  );
}
