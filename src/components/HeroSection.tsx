'use client';

import { useSiteData } from '@/context/SiteContext';
import type { HeadingLine } from '@/types';
import AnimateOnScroll from './AnimateOnScroll';
import CounterAnimation from './CounterAnimation';
import GPSBackground from './GPSBackground';
import HeroSlideshow from './HeroSlideshow';
import { Icon } from './Icons';

/* ─── Helper: render heading text with optional gold highlight ─── */

function renderHeadingLine(line: HeadingLine) {
  if (!line.highlight) return line.text;

  const idx = line.text.indexOf(line.highlight);
  if (idx === -1) return line.text;

  const before = line.text.slice(0, idx);
  const after = line.text.slice(idx + line.highlight.length);

  return (
    <>
      {before}
      <span className="text-gold">{line.highlight}</span>
      {after}
    </>
  );
}

/**
 * Full-viewport Hero section.
 *
 * Layout: 60% text (right in RTL) / 40% media (left in RTL).
 * Includes animated heading, statistics with counter, CTAs, and
 * the auto-playing media slideshow. All content from context.
 */
export default function HeroSection() {
  const { data } = useSiteData();
  const heroContent = data.hero || {};
  const {
    headingLines = [],
    subheading = '',
    description = '',
    buttons = [],
    statistics = [],
    slideshow = { items: [], intervalMs: 5000 },
  } = heroContent;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Absolute Full-Width Background Slideshow */}
      <div className="absolute inset-0 z-0" data-admin-id="hero.slideshow">
        <HeroSlideshow
          items={slideshow.items}
          intervalMs={slideshow.intervalMs}
        />
        {/* Dark Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-20">
        <div className="max-w-2xl">
          {/* Heading */}
          <AnimateOnScroll variant="blurReveal">
            <h1 data-admin-id="hero.headingLines" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] mb-6 drop-shadow-lg">
              {headingLines.map((line: any, i: number) => (
                <span key={i} className="block">
                  {renderHeadingLine(line)}
                </span>
              ))}
            </h1>
          </AnimateOnScroll>

          {/* Subheading */}
          <AnimateOnScroll variant="fadeInUp" delay={150}>
            <p data-admin-id="hero.subheading" className="text-lg md:text-xl text-gold/90 font-semibold mb-5 leading-relaxed drop-shadow-md">
              {subheading}
            </p>
          </AnimateOnScroll>

          {/* Description */}
          <AnimateOnScroll variant="fadeInUp" delay={300}>
            <p data-admin-id="hero.description" className="text-secondary-text text-base md:text-lg leading-relaxed font-light mb-10 drop-shadow-sm">
              {description}
            </p>
          </AnimateOnScroll>

          {/* CTA Buttons */}
          <AnimateOnScroll variant="fadeInUp" delay={450}>
            <div data-admin-id="hero.buttons" className="flex flex-wrap gap-4 mb-12">
              {buttons.map((btn: any, i: number) => {
                const isExternal = btn.href.startsWith('http');
                return (
                  <a
                    key={i}
                    href={btn.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className={
                      btn.variant === 'primary'
                        ? 'inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-background font-bold py-3.5 px-8 rounded-full text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-gold/20'
                        : 'inline-flex items-center gap-2 bg-background/50 backdrop-blur-md border border-border hover:border-gold/40 text-primary-text hover:text-gold font-medium py-3.5 px-8 rounded-full text-sm transition-all duration-300 hover:scale-105'
                    }
                  >
                    {btn.iconName && <Icon name={btn.iconName as any} size={18} />}
                    {btn.label}
                  </a>
                );
              })}
            </div>
          </AnimateOnScroll>

          {/* Statistics */}
          <AnimateOnScroll variant="fadeInUp" delay={600}>
            <div data-admin-id="hero.statistics" className="flex flex-wrap gap-8 md:gap-12 border-t border-border/50 pt-8">
              {statistics.map((stat: any, i: number) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-1 drop-shadow-md">
                    <CounterAnimation
                      value={stat.numericValue}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  </div>
                  <div className="text-xs text-primary-text/80 tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
