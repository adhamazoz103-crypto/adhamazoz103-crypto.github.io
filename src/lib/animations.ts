// ============================================================
// GPS Landing Page System — Unified Animation System
// ============================================================
// Central animation configuration used by AnimateOnScroll.
// All scroll-triggered animations are defined here.
// Components NEVER define their own animation styles.
// ============================================================

import type { AnimationVariant } from '@/types';

interface AnimationClasses {
  hidden: string;
  visible: string;
}

/**
 * Maps each animation variant to its hidden/visible CSS class sets.
 * The AnimateOnScroll component toggles between these states
 * using Intersection Observer.
 */
export const animationClasses: Record<AnimationVariant, AnimationClasses> = {
  fadeInUp: {
    hidden: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  fadeIn: {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  blurReveal: {
    hidden: 'opacity-0 blur-sm scale-[0.98]',
    visible: 'opacity-100 blur-none scale-100',
  },
  slideInRight: {
    hidden: 'opacity-0 translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
  slideInLeft: {
    hidden: 'opacity-0 -translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
  scaleIn: {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
};

/** Retrieve the CSS classes for a given animation variant. */
export function getAnimationClasses(variant: AnimationVariant): AnimationClasses {
  return animationClasses[variant];
}

/** Calculate stagger delay for sequential child animations. */
export function getStaggerDelay(index: number, baseDelayMs: number = 100): number {
  return index * baseDelayMs;
}

/** Default transition CSS — used by AnimateOnScroll. */
export const ANIMATION_TRANSITION = 'transition-all duration-700 ease-out';
