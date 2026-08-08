'use client';

import { useState } from 'react';
import { useScrollHeader } from '@/hooks/useScrollHeader';
import { useSiteData } from '@/context/SiteContext';
import { Icon } from './Icons';

/**
 * Fixed navigation header.
 *
 * States:
 *  - Transparent when at top of page
 *  - Blurred glass background after scrolling
 *  - Mobile slide-in menu for small screens
 *
 * All labels come from config — no hardcoded text.
 */
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollHeader(50);
  const { data } = useSiteData();
  const siteInfo = data.site || {};
  const navigationConfig = data.navigation || { logo: null, links: [], ctaButton: { label: '', href: '' } };

  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50 py-3 shadow-lg shadow-black/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        {/* ─── Logo ─── */}
        <a
          href="#hero"
          className="flex items-center gap-3 transition-transform hover:scale-105"
          aria-label={siteInfo.name}
        >
          {navigationConfig.logo?.src ? (
            <img
              src={navigationConfig.logo.src}
              alt={navigationConfig.logo.alt || siteInfo.name}
              className="h-10 w-auto"
            />
          ) : (
            <Icon name="gps" size={32} className="text-gold" />
          )}
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight leading-none text-primary-text drop-shadow-sm">
              {siteInfo.name}
            </span>
            <span className="text-[0.65rem] text-gold/80 font-medium tracking-wider">
              {siteInfo.tagline}
            </span>
          </div>
        </a>

        {/* ─── Desktop Navigation ─── */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navigationConfig.links.map((link: any, index: number) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-primary-text/80 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <a
            href={navigationConfig.ctaButton.href}
            className="hidden md:inline-flex bg-gold hover:bg-gold-hover text-background text-xs font-bold py-2.5 px-6 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {navigationConfig.ctaButton.label}
          </a>
        </nav>

        {/* ─── Mobile Toggle ─── */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-primary-text hover:text-gold transition-colors duration-300"
          aria-label={isMobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          aria-expanded={isMobileMenuOpen}
        >
          <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      {/* ─── Mobile Menu ─── */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-2xl transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        role="dialog"
        aria-modal={isMobileMenuOpen}
        aria-label="قائمة التنقل"
      >
        <nav className="flex flex-col items-center gap-6 pt-12 px-6">
          {navigationConfig.links.map((link: any, index: number) => (
            <a
              key={index}
              href={link.href}
              onClick={closeMobile}
              className="text-primary-text hover:text-gold text-lg font-medium transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}

          <a
            href={navigationConfig.ctaButton.href}
            onClick={closeMobile}
            className="mt-6 bg-gold hover:bg-gold-hover text-background text-base font-bold py-3.5 px-10 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {navigationConfig.ctaButton.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
