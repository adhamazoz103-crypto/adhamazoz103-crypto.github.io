'use client';

import { useState } from 'react';
import { useSiteData } from '@/context/SiteContext';
import AnimateOnScroll from './AnimateOnScroll';
import { Icon } from './Icons';

/**
 * FAQ Section with Animated Accordions.
 * Uses client state to expand/collapse items.
 * Includes JSON-LD structured data script for FAQ schema.
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { data } = useSiteData();
  const faqData = data.faq || {};
  const heading = faqData.heading || "الأسئلة الشائعة";
  const subheading = faqData.subheading || "أجوبة سريعة لأكثر الأسئلة التي تصلنا من العملاء.";
  const items = faqData.items || [];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Structured Data for Google FAQ Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': items.map((item: any) => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-24 px-6 bg-background relative overflow-hidden border-t border-border">
      {/* Insert JSON-LD FAQ schema for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <AnimateOnScroll variant="blurReveal">
            <h2 data-admin-id="faq.heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-primary-text">
              {heading}
            </h2>
          </AnimateOnScroll>
          {subheading && (
            <AnimateOnScroll variant="fadeInUp" delay={150}>
              <p data-admin-id="faq.subheading" className="text-secondary-text text-sm md:text-base leading-relaxed font-light">
                {subheading}
              </p>
            </AnimateOnScroll>
          )}
        </div>

        {/* Accordion List */}
        <div data-admin-id="faq.items" className="space-y-4 text-right">
          {items.map((item: any, idx: number) => {
            const isOpen = openIndex === idx;

            return (
              <AnimateOnScroll
                key={idx}
                variant="fadeInUp"
                delay={idx * 50}
                className="w-full"
              >
                <div className={`border rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? 'border-gold bg-card/65 shadow-[0_5px_20px_rgba(197,157,95,0.02)]' 
                    : 'border-border bg-card/25 hover:border-border-hover'
                }`}>
                  {/* Trigger Header */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-right font-bold text-sm sm:text-base text-primary-text select-none cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className={isOpen ? 'text-gold transition-colors duration-300' : ''}>
                      {item.question}
                    </span>
                    <span className={`text-secondary-text transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-gold' : ''
                    }`}>
                      <Icon name="chevronDown" size={16} />
                    </span>
                  </button>

                  {/* Content Container */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="px-5 pb-5 sm:px-6 sm:pb-6 text-secondary-text text-xs sm:text-sm leading-relaxed font-light border-t border-border/20 pt-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
