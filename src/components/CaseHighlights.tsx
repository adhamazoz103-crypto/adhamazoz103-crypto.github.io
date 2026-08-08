import { caseHighlightsHeading, caseHighlights } from '@/config/caseHighlights';
import AnimateOnScroll from './AnimateOnScroll';
import { Icon } from './Icons';

/**
 * Case Highlights Section.
 * Shows general examples of law firm operations using themed cards.
 * Uses staggered fade-in animations.
 */
export default function CaseHighlights() {
  return (
    <section className="py-24 px-6 bg-section relative overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <AnimateOnScroll variant="blurReveal">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-primary-text">
              {caseHighlightsHeading.title}
            </h2>
          </AnimateOnScroll>
          {caseHighlightsHeading.subtitle && (
            <AnimateOnScroll variant="fadeInUp" delay={150}>
              <p className="text-secondary-text text-sm md:text-base leading-relaxed font-light">
                {caseHighlightsHeading.subtitle}
              </p>
            </AnimateOnScroll>
          )}
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
          {caseHighlights.map((caseItem, idx) => (
            <AnimateOnScroll
              key={idx}
              variant="fadeInUp"
              delay={idx * 150}
              className="h-full"
            >
              <div className="h-full bg-card hover:bg-card-hover border border-border hover:border-gold/30 rounded-3xl p-8 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(197,157,95,0.03)] flex flex-col justify-between group">
                <div>
                  {/* Category Tag */}
                  <span className="inline-block bg-gold-light border border-gold/15 text-gold text-[10px] tracking-wide uppercase px-2.5 py-1 rounded-full mb-6 font-medium">
                    {caseItem.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary-text mb-4 group-hover:text-gold transition-colors duration-300">
                    {caseItem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary-text text-sm leading-relaxed font-light mb-8">
                    {caseItem.description}
                  </p>
                </div>

                {/* Bottom interactive link */}
                <a href="#contact" className="flex items-center gap-1.5 text-gold group-hover:text-gold-hover text-xs font-semibold mt-auto pt-6 border-t border-border/40">
                  <span>طلب تفاصيل استشارة مماثلة</span>
                  <Icon 
                    name="arrowLeft" 
                    size={14} 
                    className="transform transition-transform duration-300 group-hover:translate-x-[-4px]" 
                  />
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
