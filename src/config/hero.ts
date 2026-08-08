import type { HeroContent } from '@/types';

/**
 * Hero section content — headings, description, buttons, statistics, and slideshow.
 *
 * Slideshow media files should be placed in:
 *   Images  → public/images/hero/
 *   Videos  → public/videos/hero/
 *
 * Supported formats: jpg, png, webp (images) | mp4, webm (videos)
 *
 * The slideshow component gracefully handles missing files by
 * showing a styled placeholder card, so you can add media later.
 */
export const heroContent: HeroContent = {
  headingLines: [
    { text: 'GPS للمحاماة', highlight: 'GPS' },
    { text: 'والاستشارات القانونية' },
  ],
  subheading:
    'حلول قانونية احترافية لحماية حقوق الأفراد والشركات.',
  description:
    'في عالم تتزايد فيه التحديات القانونية، لا يكفي أن يكون لديك محامٍ، بل تحتاج إلى شريك قانوني يمتلك الخبرة والرؤية والاستراتيجية. نساعد عملاءنا على اتخاذ القرارات القانونية الصحيحة، ونمثلهم بكفاءة في مختلف أنواع القضايا، مع الالتزام بالسرية والشفافية والاحترافية.',
  buttons: [
    {
      label: 'احجز استشارة',
      href: '#contact',
      variant: 'primary',
    },
    {
      label: 'واتساب',
      href: 'https://wa.me/201150920104?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D8%A9.',
      variant: 'outline',
      iconName: 'whatsapp',
    },
  ],
  statistics: [
    { numericValue: 15, suffix: '+', label: 'سنة خبرة' },
    { numericValue: 2500, suffix: '+', label: 'استشارة قانونية' },
    { numericValue: 98, suffix: '%', label: 'رضا العملاء' },
  ],
  slideshow: {
    items: [
      { type: 'image', src: '/images/hero/slide-1.jpg', alt: 'مكتب GPS للمحاماة والاستشارات - صورة ١' },
      { type: 'video', src: '/videos/hero/video-1.mp4', alt: 'فيديو تعريفي ١' },
      { type: 'image', src: '/images/hero/slide-2.jpg', alt: 'مكتب GPS للمحاماة والاستشارات - صورة ٢' },
      { type: 'video', src: '/videos/hero/video-2.mp4', alt: 'فيديو تعريفي ٢' },
      { type: 'image', src: '/images/hero/slide-3.jpg', alt: 'مكتب GPS للمحاماة والاستشارات - صورة ٣' },
      { type: 'video', src: '/videos/hero/video-3.mp4', alt: 'فيديو تعريفي ٣' },
    ],
    intervalMs: 5000,
  },
};
