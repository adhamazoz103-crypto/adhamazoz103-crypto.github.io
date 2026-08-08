'use client';

import { useEffect, useState } from 'react';

/**
 * Detects whether the page has scrolled past a threshold.
 * Used by the Header to toggle transparent → blurred background.
 *
 * @param threshold - Scroll distance (px) to trigger. Default: 50.
 * @returns `true` when scrolled past the threshold.
 */
export function useScrollHeader(threshold: number = 50): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Check initial position (page may load already scrolled)
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
