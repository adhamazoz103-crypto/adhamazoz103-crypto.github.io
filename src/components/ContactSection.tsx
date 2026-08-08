'use client';

import { useSiteData } from '@/context/SiteContext';
import AnimateOnScroll from './AnimateOnScroll';
import ContactForm from './ContactForm';
import { Icon } from './Icons';

/**
 * Contact Section.
 * Left Side: Contact details (Phone, WhatsApp, Email, Office address, Working hours).
 * Right Side: Interactive Luxury Form.
 * All texts flow from Context.
 */
export default function ContactSection() {
  const { data } = useSiteData();
  const contactSection = data.contactSection || {};
  const contactInfo = data.contact || {};
  
  const { heading, description } = contactSection;

  return (
    <section id="contact" className="py-24 px-6 bg-section relative overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* ─── Left Side: Contact details (5 cols) ─── */}
        <div className="lg:col-span-5 text-right space-y-8">
          <div>
            <AnimateOnScroll variant="blurReveal">
              <h2 data-admin-id="contact.heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-primary-text">
                {heading}
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fadeInUp" delay={150}>
              <p data-admin-id="contact.description" className="text-secondary-text text-sm sm:text-base leading-relaxed font-light">
                {description}
              </p>
            </AnimateOnScroll>
          </div>

          {/* Contact Methods list */}
          <div className="space-y-6 pt-4">
            {/* Phone */}
            <AnimateOnScroll variant="fadeInUp" delay={250}>
              <a 
                data-admin-id="contact.phone"
                href={`tel:${(contactInfo.phone || '').replace(/\s+/g, '')}`}
                className="flex items-center gap-4 group p-4 rounded-2xl bg-card border border-border/60 hover:border-gold/30 hover:bg-card-hover transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-light text-gold flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon name="phone" size={18} />
                </div>
                <div className="text-right">
                  <span className="block text-[10px] text-secondary-text/50 font-mono tracking-wider uppercase mb-0.5">اتصل بنا مباشرة</span>
                  <span className="text-sm sm:text-base font-bold text-primary-text group-hover:text-gold transition-colors font-sans" dir="ltr">
                    {contactInfo.phone}
                  </span>
                </div>
              </a>
            </AnimateOnScroll>

            {/* WhatsApp */}
            <AnimateOnScroll variant="fadeInUp" delay={300}>
              <a 
                data-admin-id="contact.whatsapp"
                href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage || '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-4 rounded-2xl bg-card border border-border/60 hover:border-gold/30 hover:bg-card-hover transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon name="whatsapp" size={18} />
                </div>
                <div className="text-right">
                  <span className="block text-[10px] text-secondary-text/50 font-mono tracking-wider uppercase mb-0.5">تواصل معنا عبر واتساب</span>
                  <span className="text-sm sm:text-base font-bold text-primary-text group-hover:text-green-500 transition-colors font-sans" dir="ltr">
                    +{contactInfo.whatsapp}
                  </span>
                </div>
              </a>
            </AnimateOnScroll>

            {/* Email */}
            <AnimateOnScroll variant="fadeInUp" delay={350}>
              <a 
                data-admin-id="contact.email"
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 group p-4 rounded-2xl bg-card border border-border/60 hover:border-gold/30 hover:bg-card-hover transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-light text-gold flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon name="email" size={18} />
                </div>
                <div className="text-right">
                  <span className="block text-[10px] text-secondary-text/50 font-mono tracking-wider uppercase mb-0.5">البريد الإلكتروني</span>
                  <span className="text-sm sm:text-base font-bold text-primary-text group-hover:text-gold transition-colors font-sans">
                    {contactInfo.email}
                  </span>
                </div>
              </a>
            </AnimateOnScroll>

            {/* Office Location */}
            <AnimateOnScroll variant="fadeInUp" delay={400}>
              <div data-admin-id="contact.officeAddress" className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/60">
                <div className="w-10 h-10 rounded-xl bg-gold-light text-gold flex items-center justify-center">
                  <Icon name="location" size={18} />
                </div>
                <div className="text-right">
                  <span className="block text-[10px] text-secondary-text/50 font-mono tracking-wider uppercase mb-0.5">مقر المكتب الرئيسي</span>
                  <span className="text-xs sm:text-sm font-bold text-primary-text">
                    {contactInfo.officeAddress}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Working Hours */}
            <AnimateOnScroll variant="fadeInUp" delay={450}>
              <div data-admin-id="contact.workingHours" className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/60">
                <div className="w-10 h-10 rounded-xl bg-gold-light text-gold flex items-center justify-center">
                  <Icon name="clock" size={18} />
                </div>
                <div className="text-right">
                  <span className="block text-[10px] text-secondary-text/50 font-mono tracking-wider uppercase mb-0.5">أوقات العمل الرسمية</span>
                  <span className="text-xs sm:text-sm font-bold text-primary-text">
                    {contactInfo.workingHours}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* ─── Right Side: Contact Form (7 cols) ─── */}
        <AnimateOnScroll 
          variant="scaleIn" 
          delay={250} 
          className="lg:col-span-7 w-full"
        >
          <ContactForm />
        </AnimateOnScroll>

      </div>
    </section>
  );
}
