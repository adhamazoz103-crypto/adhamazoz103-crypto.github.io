'use client';

import { useSiteData } from '@/context/SiteContext';
import AnimateOnScroll from './AnimateOnScroll';
import { Icon } from './Icons';

/**
 * Testimonials Section.
 * Shows client reviews with star ratings, quotes, names, and roles.
 * All texts flow from config/testimonials.ts. Includes demo tag.
 */
export default function Testimonials() {
  const { data } = useSiteData();
  const testData = data.testimonials || {};
  const heading = testData.heading || "ماذا يقول عملاؤنا";
  const subheading = testData.subheading || "آراء وتجارب العملاء الذين وثقوا بنا في مسيرتهم القانونية.";
  const items = testData.items || [];

  return (
    <section id="testimonials" className="py-24 px-6 bg-section relative overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <AnimateOnScroll variant="blurReveal">
            <h2 data-admin-id="testimonials.heading" className="text-3xl md:text-4xl font-bold tracking-normal leading-relaxed mb-4 pb-2 text-primary-text">
              {heading}
            </h2>
          </AnimateOnScroll>
          {subheading && (
            <AnimateOnScroll variant="fadeInUp" delay={150}>
              <p data-admin-id="testimonials.subheading" className="text-secondary-text text-sm md:text-base leading-relaxed font-light">
                {subheading}
              </p>
            </AnimateOnScroll>
          )}
        </div>

        {/* Testimonial Cards Grid */}
        <div data-admin-id="testimonials.items" className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
          {items.map((t: any, idx: number) => (
            <AnimateOnScroll
              key={idx}
              variant="fadeInUp"
              delay={idx * 150}
              className="h-full"
            >
              <div className="h-full bg-card border border-border p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden">
                {/* Decorative background glow for card */}
                <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-gold/5 blur-2xl pointer-events-none" />

                {/* Profile row */}
                <div className="flex items-center gap-4 pb-6 border-b border-border/40 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gold-light border border-gold/20 flex items-center justify-center font-bold text-gold text-sm select-none">
                    {t.name ? t.name[0] : ''}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary-text mb-0.5">
                      {t.name}
                    </h4>
                    <p className="text-[10px] text-secondary-text">
                      {t.title}
                    </p>
                  </div>

                  {/* Rating Stars (moved to top right) */}
                  <div className="mr-auto flex gap-1 text-gold">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Icon key={i} name="star" size={14} className="fill-gold" />
                    ))}
                  </div>
                </div>

                {/* Quote text */}
                <div className="mt-auto">
                  <p className="text-primary-text/90 text-sm sm:text-base leading-relaxed font-light italic">
                    {t.content}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
