'use client';

import { useEffect, useState } from 'react';
import { contactInfo } from '@/config/contact';
import { Icon } from './Icons';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  // Show buttons after scrolling down a bit
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      {/* Phone Button */}
      <a
        href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
        className="w-12 h-12 bg-card hover:bg-card-hover border border-border text-primary-text hover:text-gold rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 group"
        aria-label="اتصل بنا"
      >
        <Icon name="phone" size={20} className="group-hover:rotate-12 transition-transform duration-300" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/25 transition-transform hover:scale-110 active:scale-95 group"
        aria-label="تواصل عبر واتساب"
      >
        <Icon name="whatsapp" size={28} className="group-hover:rotate-12 transition-transform duration-300" />
      </a>
    </div>
  );
}
