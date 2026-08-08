'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import type { AnimationVariant } from '@/types';
import { getAnimationClasses, ANIMATION_TRANSITION } from '@/lib/animations';

interface AnimateOnScrollProps {
  children: ReactNode;
  /** Animation variant from the unified animation system. */
  variant?: AnimationVariant;
  /** Delay in ms before the animation starts after becoming visible. */
  delay?: number;
  /** Intersection Observer visibility threshold (0–1). */
  threshold?: number;
  /** Additional CSS classes on the wrapper. */
  className?: string;
}

/**
 * Wraps children with a scroll-triggered animation.
 * Uses Intersection Observer to detect visibility, then transitions
 * from the hidden to visible state defined in lib/animations.ts.
 *
 * @example
 * <AnimateOnScroll variant="fadeInUp" delay={200}>
 *   <h2>Section Title</h2>
 * </AnimateOnScroll>
 */
export default function AnimateOnScroll({
  children,
  variant = 'fadeInUp',
  delay = 0,
  threshold = 0.15,
  className = '',
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  const { hidden, visible } = getAnimationClasses(variant);

  return (
    <div
      ref={ref}
      className={`${ANIMATION_TRANSITION} ${isVisible ? visible : hidden} ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
