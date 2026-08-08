import type { NavigationConfig } from '@/types';

/**
 * Header navigation links and CTA button.
 * Add, remove, or reorder links here.
 */
export const navigationConfig: NavigationConfig = {
  links: [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'من نحن', href: '#about' },
    { label: 'الخدمات', href: '#services' },
    { label: 'لماذا نحن', href: '#why-us' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
    { label: 'تواصل معنا', href: '#contact' },
  ],
  ctaButton: {
    label: 'احجز استشارة',
    href: '#contact',
  },
};
