'use client';

import { useEffect, useRef, useState } from 'react';

interface CounterAnimationProps {
  /** Target number to count up to. */
  value: number;
  /** Character(s) appended after the number (e.g. "%", "+"). */
  suffix?: string;
  /** Character(s) prepended before the number. */
  prefix?: string;
  /** Animation duration in ms. */
  duration?: number;
}

/**
 * Animated counter that counts from 0 to `value` when it enters the viewport.
 * Uses easeOutCubic for a smooth deceleration effect.
 *
 * @example
 * <CounterAnimation value={2500} suffix="+" />
 */
export default function CounterAnimation({
  value,
  suffix = '',
  prefix = '',
  duration = 2000,
}: CounterAnimationProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.unobserve(element);

          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic

            setCount(Math.floor(eased * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}
