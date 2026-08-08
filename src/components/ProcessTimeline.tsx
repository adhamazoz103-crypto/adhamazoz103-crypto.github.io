'use client';

import { useSiteData } from '@/context/SiteContext';
import AnimateOnScroll from './AnimateOnScroll';

/**
 * Vertical Process Timeline Section.
 * Shows structural workflow with connecting gold gradient line and hover effects.
 * Driven entirely by config/process.ts.
 */
export default function ProcessTimeline() {
  const { data } = useSiteData();
  const timelineData = data.timeline || {};
  const heading = timelineData.heading || "خطوات العمل";
  const subheading = timelineData.subheading || "منصة متكاملة لتسهيل أعمالك القانونية خطوة بخطوة.";
  const items = timelineData.items || [];

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <AnimateOnScroll variant="blurReveal">
            <h2 data-admin-id="timeline.heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-primary-text">
              {heading}
            </h2>
          </AnimateOnScroll>
          {subheading && (
            <AnimateOnScroll variant="fadeInUp" delay={150}>
              <p data-admin-id="timeline.subheading" className="text-secondary-text text-sm md:text-base leading-relaxed font-light">
                {subheading}
              </p>
            </AnimateOnScroll>
          )}
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical central line (connecting line) */}
          <div className="absolute top-0 bottom-0 right-[23px] sm:right-1/2 w-[1px] bg-gradient-to-b from-gold/5 via-gold/40 to-gold/5 transform -translate-x-1/2" />

          {/* Timeline steps */}
          <div data-admin-id="timeline.items" className="space-y-16">
            {items.map((step: any, idx: number) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center justify-between w-full ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Space filler for desktop layout */}
                  <div className="hidden sm:block w-[45%]" />

                  {/* Circle Badge Node on the central line */}
                  <div className="absolute right-[6px] sm:right-1/2 w-9 h-9 rounded-full bg-card border border-gold/40 flex items-center justify-center text-gold font-bold text-sm z-20 transform translate-x-[11px] sm:translate-x-1/2 shadow-lg shadow-black group hover:border-gold transition-all duration-300">
                    <span className="font-sans leading-none">{step.stepNumber}</span>
                  </div>

                  {/* Card Content block */}
                  <div className="w-full sm:w-[45%] pr-12 sm:pr-0 text-right">
                    <AnimateOnScroll 
                      variant={isEven ? 'slideInLeft' : 'slideInRight'}
                      delay={100}
                    >
                      <div className="bg-card hover:bg-card-hover border border-border hover:border-gold/25 p-6 rounded-2xl transition-all duration-500 shadow-md">
                        <h3 className="text-lg font-bold text-primary-text mb-2 group-hover:text-gold transition-colors">
                          {step.title}
                        </h3>
                        {step.description && (
                          <p className="text-secondary-text text-xs sm:text-sm leading-relaxed font-light">
                            {step.description}
                          </p>
                        )}
                      </div>
                    </AnimateOnScroll>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
