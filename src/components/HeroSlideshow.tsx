'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import type { MediaItem } from '@/types';
import { Icon } from './Icons';

interface HeroSlideshowProps {
  /** Array of media items (images and/or videos). */
  items: MediaItem[];
  /** Time between auto-advances in ms. */
  intervalMs: number;
}

/**
 * Auto-playing media carousel for the Hero section.
 *
 * Features:
 *  - Cross-fade transition between slides
 *  - Slow zoom (Ken Burns) effect on current slide
 *  - Pause on hover
 *  - Supports images, videos, or any mix
 *  - Graceful fallback when no media files exist
 *  - Navigation dots
 *
 * All media paths come from config/hero.ts — nothing is hardcoded.
 */
// Internal component to handle video playback properly based on active state
function VideoSlide({ src, poster, isActive, onError }: { src: string; poster?: string; isActive: boolean; onError: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        // Use a timeout to ensure it plays after becoming visible
        setTimeout(() => {
          videoRef.current?.play().catch(() => {
            // Autoplay might be blocked by browser policy until user interacts
            console.warn('Video playback blocked by browser policy');
          });
        }, 100);
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      playsInline
      loop
      onError={onError}
      className={`w-full h-full object-cover ${isActive ? 'animate-slow-zoom' : ''}`}
    />
  );
}

export default function HeroSlideshow({ items, intervalMs }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [loadErrors, setLoadErrors] = useState<Set<number>>(new Set());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSlides = items.length;

  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  /* Auto-advance timer */
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    timerRef.current = setInterval(advance, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, advance, intervalMs, totalSlides]);

  const handleLoadError = (index: number) => {
    setLoadErrors((prev) => new Set(prev).add(index));
  };

  /* ─── Empty / placeholder state ─── */
  if (totalSlides === 0) {
    return (
      <div className="w-full h-full bg-background flex items-center justify-center">
        <div className="text-center px-6">
          <Icon name="gps" size={48} className="text-gold/20 mx-auto mb-4" />
          <p className="text-secondary-text/60 text-sm">المحتوى قيد الإعداد</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-full overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {items.map((item, index) => {
        const isActive = index === currentIndex;
        const hasError = loadErrors.has(index);

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {hasError ? (
              /* Styled placeholder for missing media */
              <div className="w-full h-full bg-background flex items-center justify-center">
                <div className="text-center">
                  <Icon name="gps" size={40} className="text-gold/15 mx-auto mb-3" />
                  <p className="text-secondary-text/40 text-xs">{item.alt}</p>
                </div>
              </div>
            ) : item.type === 'video' ? (
              <VideoSlide 
                src={item.src} 
                poster={item.poster} 
                isActive={isActive} 
                onError={() => handleLoadError(index)} 
              />
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                onError={() => handleLoadError(index)}
                className={`w-full h-full object-cover ${isActive ? 'animate-slow-zoom' : ''}`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            )}

            {/* Subtle Gradient Overlay for images (the main dark gradient is in HeroSection) */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20 mix-blend-multiply" />
          </div>
        );
      })}

      {/* Navigation dots */}
      {totalSlides > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? 'bg-gold w-8 shadow-[0_0_8px_rgba(212,175,55,0.6)]'
                  : 'bg-white/40 w-2 hover:bg-white/60'
              }`}
              aria-label={`الانتقال إلى الشريحة ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
