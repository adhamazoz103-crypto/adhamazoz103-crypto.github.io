import { finalCTAConfig } from '@/config/finalCTA';
import AnimateOnScroll from './AnimateOnScroll';

/**
 * Final CTA Section.
 * Luxury black background with subtle gold glow.
 * Centered text and large call to action button.
 */
export default function FinalCTA() {
  const { headline, description, buttonLabel, buttonHref } = finalCTAConfig;

  return (
    <section className="py-28 px-6 bg-background relative overflow-hidden border-t border-border">
      {/* Ambient glow backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        
        {/* Headline */}
        <AnimateOnScroll variant="blurReveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-text leading-tight">
            {headline}
          </h2>
        </AnimateOnScroll>

        {/* Description */}
        <AnimateOnScroll variant="fadeInUp" delay={150}>
          <p className="text-secondary-text text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light">
            {description}
          </p>
        </AnimateOnScroll>

        {/* Action Button */}
        <AnimateOnScroll variant="fadeInUp" delay={300}>
          <div className="pt-4">
            <a
              href={buttonHref}
              className="inline-flex bg-gold hover:bg-gold-hover text-background font-bold text-sm sm:text-base py-4 px-10 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-gold/15"
            >
              {buttonLabel}
            </a>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
