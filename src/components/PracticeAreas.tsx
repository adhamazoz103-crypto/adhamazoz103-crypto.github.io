'use client';

import { useSiteData } from '@/context/SiteContext';
import AnimateOnScroll from './AnimateOnScroll';
import { Icon } from './Icons';

/**
 * Practice Areas Section.
 * Renders an 8-card responsive grid using configurations.
 * Features clean hover scale effects and custom SVG icons.
 */
export default function PracticeAreas() {
  const { data } = useSiteData();
  const servicesData: any = data.services || {};
  const services = servicesData.services_list || [];
  
  const practiceAreasHeading = {
    title: servicesData.heading || "مجالات التخصص",
    subtitle: servicesData.subheading || "نغطي كافة الجوانب القانونية لخدمة الأفراد والشركات بأعلى معايير الجودة."
  };

  return (
    <section id="practice-areas" className="py-24 px-6 bg-section relative overflow-x-hidden border-t border-border">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <AnimateOnScroll variant="blurReveal">
            <h2 data-admin-id="services.heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-primary-text">
              {practiceAreasHeading.title}
            </h2>
          </AnimateOnScroll>
          {practiceAreasHeading.subtitle && (
            <AnimateOnScroll variant="fadeInUp" delay={150}>
              <p data-admin-id="services.subheading" className="text-secondary-text text-sm md:text-base leading-relaxed font-light">
                {practiceAreasHeading.subtitle}
              </p>
            </AnimateOnScroll>
          )}
        </div>

        {/* Grid */}
        <div data-admin-id="services.services_list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
          {services.map((area: any, idx: number) => (
            <AnimateOnScroll
              key={area.id || idx}
              variant="fadeInUp"
              delay={idx * 80}
              className="h-full"
            >
              <div className="h-full bg-card hover:bg-card-hover border border-border hover:border-gold/30 p-8 rounded-3xl transition-all duration-500 hover:shadow-[0_10px_30px_rgba(197,157,95,0.02)] group flex flex-col justify-between">
                <div>
                  {/* Top line with Icon & Counter */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gold-light text-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon name={area.iconName as any} size={20} className="stroke-[1.5]" />
                    </div>
                    <span className="text-[11px] font-mono text-gold-hover/50 tracking-wider">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title Area */}
                  <h3 className="text-lg font-bold text-primary-text mb-4 group-hover:text-gold transition-colors duration-300">
                    {area.title || area.titleAr}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary-text/80 text-xs sm:text-sm leading-relaxed font-light">
                    {area.description}
                  </p>
                </div>

                {/* Bottom interactive link */}
                <a href="#contact" className="mt-8 pt-4 border-t border-border/40 flex items-center justify-between text-gold group-hover:text-gold-hover transition-colors duration-300 text-xs font-semibold">
                  <span>طلب استشارة</span>
                  <Icon name="arrowLeft" size={14} className="transform transition-transform duration-300 group-hover:translate-x-[-4px]" />
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
