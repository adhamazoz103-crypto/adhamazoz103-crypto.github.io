'use client';

import { useSiteData } from '@/context/SiteContext';
import AnimateOnScroll from './AnimateOnScroll';
import { Icon } from './Icons';

/**
 * Why Choose Us Section.
 * Shows 4 core pillars with premium hover effects (lift + glow).
 * All text and icons flow from config/whyChooseUs.ts.
 */
export default function WhyChooseUs() {
  const { data } = useSiteData();
  const whyChooseUsData = data.whyChooseUs || {};
  const heading = whyChooseUsData.heading || "لماذا تختارنا؟";
  const subheading = whyChooseUsData.subheading || "نحن الخيار الأول للباحثين عن التميز والاحترافية.";
  const items = whyChooseUsData.items || [];

  return (
    <section id="why-us" className="py-24 px-6 bg-background relative overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <AnimateOnScroll variant="blurReveal">
            <h2 data-admin-id="whyChooseUs.heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {heading}
            </h2>
          </AnimateOnScroll>
          {subheading && (
            <AnimateOnScroll variant="fadeInUp" delay={150}>
              <p data-admin-id="whyChooseUs.subheading" className="text-secondary-text text-sm md:text-base leading-relaxed font-light">
                {subheading}
              </p>
            </AnimateOnScroll>
          )}
        </div>

        {/* 4 Cards Grid */}
        <div data-admin-id="whyChooseUs.items" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((card: any, idx: number) => (
            <AnimateOnScroll 
              key={card.id || idx} 
              variant="fadeInUp" 
              delay={idx * 100}
              className="h-full"
            >
              <div className="h-full bg-card hover:bg-card-hover border border-border hover:border-gold/30 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(197,157,95,0.03)] group flex flex-col items-start text-right">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-gold-light text-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon name={card.iconName as any} size={22} className="stroke-[1.5]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-primary-text mb-3 group-hover:text-gold transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-secondary-text text-sm leading-relaxed font-light mt-auto">
                  {card.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
