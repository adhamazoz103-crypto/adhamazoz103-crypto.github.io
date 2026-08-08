'use client';

import { useSiteData } from '@/context/SiteContext';
import { Icon } from './Icons';

/**
 * Premium multi-column Footer component.
 * Layout: Responsive grid on desktop, fully centered on mobile.
 * Content sourced from site.ts, contact.ts, and footer.ts.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { data } = useSiteData();
  const footerData = data.footer || {};
  const description = footerData.description || 'مكتب GPS للمحاماة، خبرة تمتد لسنوات في تقديم أفضل الاستشارات القانونية وحماية حقوق عملائنا.';
  const copyright = footerData.copyright || 'جميع الحقوق محفوظة لمكتب GPS للمحاماة © 2026';
  const socialLinks = footerData.socialLinks || [];

  const contactData = data.contact || {};
  const email = contactData.email || 'contact@gpslawfirm.com';
  const phone = contactData.phone || '+20 11 5092 0104';
  const address = contactData.address || 'القاهرة الجديدة، القاهرة، مصر';
  const whatsapp = contactData.phone ? contactData.phone.replace(/[^0-9]/g, '') : '201150920104';

  const navData = data.navigation || {};
  const links = navData.links || [];
  const firmName = data.site?.name || 'GPS للمحاماة';

  return (
    <footer className="bg-section border-t border-border/80 pt-20 pb-10 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-border/40 text-right">
          
          {/* Column 1: Firm Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#hero" className="flex items-center gap-2.5 justify-start group">
              <Icon 
                name="gps" 
                size={28} 
                className="text-gold transition-transform duration-500 group-hover:scale-105" 
              />
              <span className="text-gold font-bold text-lg tracking-tight">
                {firmName}
              </span>
            </a>
            <p data-admin-id="footer.description" className="text-secondary-text/80 text-xs sm:text-sm leading-relaxed font-light max-w-sm">
              {description}
            </p>
            <div data-admin-id="footer.socialLinks" className="flex gap-4 justify-start text-secondary-text">
              {socialLinks.map((link: any, idx: number) => (
                <a 
                  key={idx}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gold transition-colors"
                  aria-label={link.platform}
                >
                  <Icon name={(link.iconName as any) || 'website'} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 lg:pr-8 space-y-5">
            <h4 className="text-primary-text font-bold text-sm tracking-wide uppercase">
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {links.length > 0 ? (
                links.map((link: any, idx: number) => (
                  <li key={idx}>
                    <a href={link.href} className="text-secondary-text hover:text-gold text-xs sm:text-sm font-light transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))
              ) : (
                <>
                  <li><a href="#hero" className="text-secondary-text hover:text-gold text-xs sm:text-sm font-light transition-colors duration-300">الرئيسية</a></li>
                  <li><a href="#services" className="text-secondary-text hover:text-gold text-xs sm:text-sm font-light transition-colors duration-300">الخدمات</a></li>
                  <li><a href="#testimonials" className="text-secondary-text hover:text-gold text-xs sm:text-sm font-light transition-colors duration-300">الآراء</a></li>
                  <li><a href="#contact" className="text-secondary-text hover:text-gold text-xs sm:text-sm font-light transition-colors duration-300">تواصل معنا</a></li>
                </>
              )}
            </ul>
          </div>

          {/* Column 3: Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-primary-text font-bold text-sm tracking-wide uppercase">
              تفاصيل الاتصال
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-secondary-text font-light">
              <li className="flex items-center gap-3 justify-start">
                <Icon name="location" size={16} className="text-gold/80 flex-shrink-0" />
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-3 justify-start">
                <Icon name="email" size={16} className="text-gold/80 flex-shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-gold transition-colors">
                  {email}
                </a>
              </li>
              <li className="flex items-center gap-3 justify-start">
                <Icon name="phone" size={16} className="text-gold/80 flex-shrink-0" />
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-gold transition-colors font-sans" dir="ltr">
                  {phone}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar (Copyright & Legal) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right text-[11px] text-secondary-text/60 font-light">
          <div>
            <p data-admin-id="footer.copyright">
              جميع الحقوق محفوظة © {currentYear} لـ{' '}
              <a 
                href="https://recapmarketingagency.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gold hover:underline font-medium transition-colors inline-block"
              >
                Recap Marketing Agency
              </a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
