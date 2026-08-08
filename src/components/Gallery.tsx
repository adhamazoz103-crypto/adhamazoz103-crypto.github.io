'use client';

import { useState, useRef } from 'react';
import { useSiteData } from '@/context/SiteContext';
import AnimateOnScroll from './AnimateOnScroll';
import { Icon } from './Icons';

/**
 * Gallery Section with Horizontal Slider.
 * Handles drag-to-scroll, next/prev arrow buttons, and filters.
 * Gracefully handles missing images by rendering a beautiful glassmorphic card.
 */
export default function Gallery() {
  const { data } = useSiteData();
  const galleryData = data.gallery || {};
  const heading = galleryData.heading || "معرض الصور";
  const subheading = galleryData.subheading || "لقطات من داخل المكتب والمؤتمرات والنجاحات.";
  const items = galleryData.items || [];

  const [activeCategory, setActiveCategory] = useState<string>('الكل');
  const [loadErrors, setLoadErrors] = useState<Set<number>>(new Set());
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Extract all categories
  const categories: string[] = ['الكل', ...Array.from(new Set(items.map((item: any) => item.category).filter(Boolean)))] as string[];

  // Filter items
  const filteredItems = activeCategory === 'الكل'
    ? items
    : items.filter((item: any) => item.category === activeCategory);

  const handleScroll = (direction: 'right' | 'left') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 360;
    container.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleImageError = (index: number) => {
    setLoadErrors((prev) => new Set(prev).add(index));
  };

  return (
    <section id="gallery" className="py-24 px-6 bg-background relative overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top bar with heading & slider buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-right max-w-2xl">
            <AnimateOnScroll variant="blurReveal">
              <h2 data-admin-id="gallery.heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-primary-text">
                {heading}
              </h2>
            </AnimateOnScroll>
            {subheading && (
              <AnimateOnScroll variant="fadeInUp" delay={150}>
                <p data-admin-id="gallery.subheading" className="text-secondary-text text-sm md:text-base leading-relaxed font-light">
                  {subheading}
                </p>
              </AnimateOnScroll>
            )}
          </div>

          {/* Next/Prev Navigation Arrows (Arabic direction: RTL) */}
          <AnimateOnScroll variant="fadeIn" delay={300} className="flex gap-3 justify-end">
            <button
              onClick={() => handleScroll('right')}
              className="w-11 h-11 rounded-full border border-border hover:border-gold/40 text-primary-text hover:text-gold flex items-center justify-center transition-all duration-300 active:scale-95 bg-card/25 hover:bg-card-hover"
              aria-label="التمرير لليسار"
            >
              <Icon name="arrowRight" size={18} />
            </button>
            <button
              onClick={() => handleScroll('left')}
              className="w-11 h-11 rounded-full border border-border hover:border-gold/40 text-primary-text hover:text-gold flex items-center justify-center transition-all duration-300 active:scale-95 bg-card/25 hover:bg-card-hover"
              aria-label="التمرير لليمين"
            >
              <Icon name="arrowLeft" size={18} />
            </button>
          </AnimateOnScroll>
        </div>

        {/* Category Filters */}
        <AnimateOnScroll variant="fadeInUp" delay={200}>
          <div className="flex flex-wrap gap-2.5 mb-10 justify-start" dir="rtl">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat as string)}
                className={`text-xs font-semibold py-2 px-5 rounded-full transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-gold border-gold text-background'
                    : 'bg-card border-border hover:border-gold/30 text-secondary-text hover:text-primary-text'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Horizontal Slider Area */}
        <div data-admin-id="gallery.items" className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-none pb-6 scroll-smooth snap-x snap-mandatory text-right"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredItems.map((item: any, idx: number) => {
              const hasError = loadErrors.has(idx);

              return (
                <div
                  key={idx}
                  className="flex-shrink-0 w-80 sm:w-[360px] snap-start"
                >
                  <AnimateOnScroll variant="scaleIn" delay={idx * 50}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border/80 bg-card hover:border-gold/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/[0.01] group">
                      
                      {/* Image or fallback */}
                      {hasError ? (
                        /* Aesthetic Glassmorphic Fallback Card */
                        <div className="absolute inset-0 bg-gradient-to-br from-card to-background flex flex-col justify-between p-6">
                          <div className="flex justify-between items-start">
                            <span className="text-[10px] uppercase font-bold text-gold/60 border border-gold/15 px-2 py-0.5 rounded">
                              {item.category}
                            </span>
                            <Icon name="gps" size={18} className="text-gold/20" />
                          </div>
                          <div>
                            <h4 className="text-primary-text font-bold text-base mb-1">
                              {item.alt}
                            </h4>
                            <p className="text-[10px] text-secondary-text/30">
                              (سيتم إضافة الصور الحقيقية لاحقاً)
                            </p>
                          </div>
                        </div>
                      ) : (
                        <>
                          <img
                            src={item.src}
                            alt={item.alt}
                            onError={() => handleImageError(idx)}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                          {/* Overlay Gradient on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Floating Labels */}
                          <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                            <div>
                              <span className="inline-block bg-gold/90 text-background text-[9px] font-bold tracking-wide uppercase px-2.5 py-1 rounded">
                                {item.category}
                              </span>
                            </div>
                            <div>
                              <h4 className="text-primary-text font-bold text-sm sm:text-base leading-snug">
                                {item.alt}
                              </h4>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </AnimateOnScroll>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
