import type { SectionHeading, GalleryItem } from '@/types';

export const galleryHeading: SectionHeading = {
  title: 'معرض الأعمال والمكتب',
  subtitle: 'جولة بصرية داخل مكتبنا وتوثيق لبعض المؤتمرات والشهادات الرسمية.',
};

export const galleryItems: GalleryItem[] = [
  {
    type: 'image',
    src: '/images/gallery/office-1.jpg',
    alt: 'المكتب الرئيسي ومجلس الاستشارات',
    category: 'صور المكتب',
  },
  {
    type: 'image',
    src: '/images/gallery/meeting-1.jpg',
    alt: 'اجتماع مع أحد الموكلين لمراجعة المستندات',
    category: 'اجتماعات العمل',
  },
  {
    type: 'image',
    src: '/images/gallery/event-1.jpg',
    alt: 'مشاركة الأستاذ عبدالله محمود في مؤتمر التحكيم الدولي',
    category: 'المشاركات والمؤتمرات',
  },
  {
    type: 'image',
    src: '/images/gallery/certificate-1.jpg',
    alt: 'شهادة اعتماد مكتبنا من الهيئة الدولية للمحكمين',
    category: 'الشهادات والاعتمادات',
  },
];
