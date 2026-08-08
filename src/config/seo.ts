import type { SEOConfig } from '@/types';

/**
 * SEO metadata for the landing page.
 * Used in the root layout <head> via Next.js Metadata API.
 */
export const seoConfig: SEOConfig = {
  title: 'GPS للمحاماة والاستشارات القانونية | محامٍ بالنقض والإدارية العليا',
  description:
    'GPS للمحاماة والاستشارات القانونية — حلول قانونية احترافية لحماية حقوق الأفراد والشركات. أكثر من 15 عاماً من الخبرة في مختلف فروع القانون.',
  keywords: [
    'محامي',
    'استشارات قانونية',
    'محامي بالنقض',
    'GPS للمحاماة',
    'محامي في مصر',
    'قضايا تجارية',
    'قضايا شركات',
    'تحكيم',
    'محكم معتمد',
    'مستشار قانوني',
  ],
  ogImage: '/images/og-image.jpg',
  locale: 'ar_EG',
  siteName: 'GPS Law Firm',
};
