export type FieldType = 'text' | 'textarea' | 'media' | 'number' | 'object' | 'list' | 'boolean' | 'group' | 'color';

export interface BaseField {
  key: string;
  label: string;
  description?: string;
  isAdvanced?: boolean;
}

export interface ValueField extends BaseField {
  type: 'text' | 'textarea' | 'media' | 'number' | 'boolean' | 'color';
  dir?: 'rtl' | 'ltr';
  mono?: boolean;
  placeholder?: string;
}

export interface ObjectField extends BaseField {
  type: 'object' | 'group';
  fields: SchemaField[];
}

export interface ListField extends BaseField {
  type: 'list';
  itemLabel: string;
  fields: SchemaField[];
  newItemDefaults: Record<string, any>;
}

export type SchemaField = ValueField | ObjectField | ListField;

export interface SectionSchema {
  id: string; // matches the key in SiteDataState, e.g., "hero", "services"
  label: string;
  fields: SchemaField[];
}

export const siteSchema: SectionSchema[] = [
  {
    id: 'hero',
    label: 'القسم الرئيسي (Hero)',
    fields: [
      {
        key: 'hero_text', // virtual key for grouping
        label: 'النصوص الرئيسية',
        type: 'group',
        fields: [
          { key: 'subheading', label: 'العنوان الفرعي', type: 'text', dir: 'rtl', description: 'النص الذي يظهر أعلى العنوان الرئيسي ويكون بخط أصغر ذهبي.' },
          { key: 'description', label: 'الوصف', type: 'textarea', dir: 'rtl', description: 'النص التعريفي الذي يظهر تحت العنوان.' },
        ],
      },
      {
        key: 'headingLines',
        label: 'العنوان الرئيسي (Heading Lines)',
        type: 'list',
        itemLabel: 'سطر',
        newItemDefaults: { text: '', highlight: false },
        description: 'هذا هو العنوان الرئيسي في أعلى الصفحة. يمكنك تقسيمه لعدة أسطر واختيار كلمة لتكون بلون ذهبي في كل سطر.',
        fields: [
          { key: 'text', label: 'نص السطر', type: 'text', dir: 'rtl' },
          { key: 'highlight', label: 'الكلمة المميزة (ذهبي)', type: 'text', dir: 'rtl', isAdvanced: true },
        ],
      },
      {
        key: 'buttons',
        label: 'الأزرار (CTA Buttons)',
        type: 'list',
        itemLabel: 'زر',
        newItemDefaults: { label: '', href: '#', variant: 'primary' },
        fields: [
          { key: 'label', label: 'نص الزر', type: 'text', dir: 'rtl' },
          { key: 'href', label: 'الرابط', type: 'text', dir: 'ltr', mono: true },
          { key: 'variant', label: 'النوع', type: 'text', placeholder: 'primary or secondary', isAdvanced: true },
        ],
      },
      {
        key: 'statistics',
        label: 'الإحصائيات',
        type: 'list',
        itemLabel: 'إحصائية',
        newItemDefaults: { numericValue: 0, label: '', suffix: '+' },
        fields: [
          { key: 'numericValue', label: 'الرقم', type: 'number', dir: 'ltr' },
          { key: 'label', label: 'النص التوضيحي', type: 'text', dir: 'rtl' },
          { key: 'suffix', label: 'الرمز اللاحق', type: 'text', placeholder: '+ or %', dir: 'ltr' },
        ],
      },
      {
        key: 'slideshow',
        label: 'الوسائط (Slideshow)',
        type: 'object',
        fields: [
          { key: 'intervalMs', label: 'سرعة التقليب (ms)', type: 'number', dir: 'ltr', isAdvanced: true },
          {
            key: 'items',
            label: 'الصور والفيديوهات',
            type: 'list',
            itemLabel: 'ملف',
            newItemDefaults: { type: 'image', src: '', poster: '', alt: '' },
            fields: [
              { key: 'src', type: 'media', label: 'الصورة / الفيديو', description: 'اسحب وأفلت الملف هنا للرفع مباشرة.' },
              { key: 'type', type: 'text', label: 'النوع', placeholder: 'image or video', isAdvanced: true },
              { key: 'poster', type: 'media', label: 'صورة الغلاف للفيديو', isAdvanced: true },
              { key: 'alt', type: 'text', label: 'النص البديل', dir: 'rtl', isAdvanced: true },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'services',
    label: 'الخدمات القانونية',
    fields: [
      { key: 'heading', type: 'text', label: 'عنوان القسم', dir: 'rtl' },
      { key: 'subheading', type: 'text', label: 'العنوان الفرعي', dir: 'rtl' },
      {
        key: 'services_list',
        label: 'قائمة الخدمات',
        type: 'list',
        itemLabel: 'خدمة',
        newItemDefaults: { id: '', title: '', description: '', iconName: '' },
        fields: [
          { key: 'title', type: 'text', label: 'اسم الخدمة', dir: 'rtl' },
          { key: 'description', type: 'textarea', label: 'وصف الخدمة', dir: 'rtl' },
          { key: 'iconName', type: 'text', label: 'اسم الأيقونة', dir: 'ltr', mono: true, isAdvanced: true },
        ],
      },
    ],
  },
  {
    id: 'whyChooseUs',
    label: 'لماذا تختارنا',
    fields: [
      { key: 'heading', type: 'text', label: 'عنوان القسم', dir: 'rtl' },
      { key: 'subheading', type: 'text', label: 'العنوان الفرعي', dir: 'rtl' },
      {
        key: 'items',
        label: 'المميزات',
        type: 'list',
        itemLabel: 'ميزة',
        newItemDefaults: { id: '', title: '', description: '', iconName: '' },
        fields: [
          { key: 'title', type: 'text', label: 'العنوان', dir: 'rtl' },
          { key: 'description', type: 'textarea', label: 'الوصف', dir: 'rtl' },
          { key: 'iconName', type: 'text', label: 'الأيقونة', dir: 'ltr', mono: true, isAdvanced: true },
        ],
      },
    ],
  },
  {
    id: 'faq',
    label: 'الأسئلة الشائعة',
    fields: [
      { key: 'heading', type: 'text', label: 'عنوان القسم', dir: 'rtl' },
      { key: 'subheading', type: 'text', label: 'العنوان الفرعي', dir: 'rtl' },
      {
        key: 'items',
        label: 'الأسئلة والأجوبة',
        type: 'list',
        itemLabel: 'سؤال',
        newItemDefaults: { id: '', question: '', answer: '' },
        fields: [
          { key: 'question', type: 'text', label: 'السؤال', dir: 'rtl' },
          { key: 'answer', type: 'textarea', label: 'الإجابة', dir: 'rtl' },
        ],
      },
    ],
  },
  {
    id: 'testimonials',
    label: 'آراء العملاء',
    fields: [
      { key: 'heading', type: 'text', label: 'عنوان القسم', dir: 'rtl' },
      { key: 'subheading', type: 'text', label: 'العنوان الفرعي', dir: 'rtl' },
      {
        key: 'items',
        label: 'الآراء',
        type: 'list',
        itemLabel: 'رأي',
        newItemDefaults: { id: '', name: '', title: '', content: '', rating: 5 },
        fields: [
          { key: 'name', type: 'text', label: 'اسم العميل', dir: 'rtl' },
          { key: 'title', type: 'text', label: 'المسمى الوظيفي', dir: 'rtl' },
          { key: 'content', type: 'textarea', label: 'نص التقييم', dir: 'rtl' },
          { key: 'rating', type: 'number', label: 'التقييم (من 5)', dir: 'ltr' },
        ],
      },
    ],
  },
  {
    id: 'timeline',
    label: 'خطوات العمل',
    fields: [
      { key: 'heading', type: 'text', label: 'عنوان القسم', dir: 'rtl' },
      { key: 'subheading', type: 'text', label: 'العنوان الفرعي', dir: 'rtl' },
      {
        key: 'items',
        label: 'الخطوات',
        type: 'list',
        itemLabel: 'خطوة',
        newItemDefaults: { id: '', stepNumber: 1, title: '', description: '' },
        fields: [
          { key: 'stepNumber', type: 'number', label: 'رقم الخطوة', dir: 'ltr' },
          { key: 'title', type: 'text', label: 'العنوان', dir: 'rtl' },
          { key: 'description', type: 'textarea', label: 'الوصف', dir: 'rtl' },
        ],
      },
    ],
  },
  {
    id: 'gallery',
    label: 'معرض الصور',
    fields: [
      { key: 'heading', type: 'text', label: 'عنوان القسم', dir: 'rtl' },
      { key: 'subheading', type: 'text', label: 'العنوان الفرعي', dir: 'rtl' },
      {
        key: 'items',
        label: 'الصور',
        type: 'list',
        itemLabel: 'صورة',
        newItemDefaults: { id: '', type: 'image', src: '', category: '', poster: '' },
        fields: [
          { key: 'src', type: 'media', label: 'الملف', description: 'اسحب صورة أو فيديو هنا' },
          { key: 'category', type: 'text', label: 'التصنيف', dir: 'rtl' },
          { key: 'alt', type: 'text', label: 'عنوان أو وصف الصورة', dir: 'rtl' },
          { key: 'type', type: 'text', label: 'النوع', placeholder: 'image or video', isAdvanced: true },
          { key: 'poster', type: 'media', label: 'الغلاف للفيديو', isAdvanced: true },
        ],
      },
    ],
  },
  {
    id: 'navigation',
    label: 'القائمة العلوية',
    fields: [
      {
        key: 'logo',
        label: 'الشعار',
        type: 'group',
        fields: [
          { key: 'src', type: 'media', label: 'ملف الشعار' },
          { key: 'alt', type: 'text', label: 'النص البديل', dir: 'rtl' },
        ],
      },
      {
        key: 'links',
        label: 'روابط التنقل',
        type: 'list',
        itemLabel: 'رابط',
        newItemDefaults: { label: '', href: '' },
        fields: [
          { key: 'label', type: 'text', label: 'الاسم', dir: 'rtl' },
          { key: 'href', type: 'text', label: 'الرابط', dir: 'ltr', mono: true },
        ],
      },
      {
        key: 'ctaButton',
        label: 'زر الدعوة (CTA)',
        type: 'group',
        fields: [
          { key: 'label', type: 'text', label: 'نص الزر', dir: 'rtl' },
          { key: 'href', type: 'text', label: 'الرابط', dir: 'ltr', mono: true },
        ],
      },
    ],
  },
  {
    id: 'contact',
    label: 'تواصل معنا',
    fields: [
      { key: 'heading', type: 'text', label: 'عنوان القسم', dir: 'rtl' },
      { key: 'subheading', type: 'text', label: 'العنوان الفرعي', dir: 'rtl' },
      { key: 'email', type: 'text', label: 'البريد الإلكتروني', dir: 'ltr', mono: true },
      { key: 'phone', type: 'text', label: 'رقم الهاتف', dir: 'ltr', mono: true },
      { key: 'address', type: 'text', label: 'العنوان', dir: 'rtl' },
      { key: 'whatsappMessage', type: 'textarea', label: 'رسالة الواتساب الافتراضية', dir: 'rtl' },
    ],
  },
  {
    id: 'footer',
    label: 'الفوتر (أسفل الصفحة)',
    fields: [
      { key: 'description', type: 'textarea', label: 'وصف الفوتر', dir: 'rtl' },
      { key: 'copyright', type: 'text', label: 'حقوق النشر', dir: 'rtl' },
      {
        key: 'socialLinks',
        label: 'روابط التواصل الاجتماعي',
        type: 'list',
        itemLabel: 'رابط',
        newItemDefaults: { platform: '', url: '', iconName: '' },
        fields: [
          { key: 'platform', type: 'text', label: 'المنصة', dir: 'rtl' },
          { key: 'url', type: 'text', label: 'الرابط', dir: 'ltr', mono: true },
          { key: 'iconName', type: 'text', label: 'الأيقونة', dir: 'ltr', mono: true, isAdvanced: true },
        ],
      },
    ],
  },
  {
    id: 'seo',
    label: 'تحسين محركات البحث (SEO)',
    fields: [
      { key: 'title', type: 'text', label: 'عنوان الصفحة (Title Tag)', dir: 'rtl' },
      { key: 'description', type: 'textarea', label: 'وصف الصفحة (Meta Description)', dir: 'rtl' },
      { key: 'keywords', type: 'text', label: 'الكلمات المفتاحية', dir: 'rtl', description: 'افصل بين الكلمات بفاصلة (,)' },
      { key: 'ogImage', type: 'media', label: 'صورة المشاركة (OG Image)' },
    ],
  },
  {
    id: 'theme',
    label: 'المظهر والألوان',
    fields: [
      {
        key: 'colors',
        label: 'الألوان الأساسية',
        type: 'group',
        fields: [
          { key: 'primary', type: 'color', label: 'اللون الرئيسي (Primary)', dir: 'ltr', mono: true, description: 'اختر اللون من المربع الملون بجانب الحقل' },
          { key: 'secondary', type: 'color', label: 'اللون الثانوي (Secondary)', dir: 'ltr', mono: true },
          { key: 'accent', type: 'color', label: 'لون التمييز (Accent)', dir: 'ltr', mono: true },
          { key: 'background', type: 'color', label: 'لون الخلفية', dir: 'ltr', mono: true, isAdvanced: true },
          { key: 'text', type: 'color', label: 'لون النص', dir: 'ltr', mono: true, isAdvanced: true },
        ],
      },
      {
        key: 'fonts',
        label: 'الخطوط',
        type: 'group',
        fields: [
          { key: 'heading', type: 'text', label: 'خط العناوين', dir: 'ltr', mono: true },
          { key: 'body', type: 'text', label: 'خط النصوص', dir: 'ltr', mono: true },
        ],
      },
    ],
  },
  {
    id: 'general', // maps to site.json conceptually but UI uses 'general' tab
    label: 'الإعدادات العامة',
    fields: [
      { key: 'name', type: 'text', label: 'اسم الموقع / المكتب', dir: 'rtl' },
      { key: 'domain', type: 'text', label: 'رابط الموقع (Domain)', dir: 'ltr', mono: true },
      {
        key: 'visibleSections',
        label: 'إظهار / إخفاء الأقسام',
        type: 'group',
        fields: [
          { key: 'hero', type: 'boolean', label: 'القسم الرئيسي (Hero)' },
          { key: 'services', type: 'boolean', label: 'الخدمات القانونية' },
          { key: 'whyChooseUs', type: 'boolean', label: 'لماذا تختارنا' },
          { key: 'timeline', type: 'boolean', label: 'خطوات العمل' },
          { key: 'gallery', type: 'boolean', label: 'معرض الصور' },
          { key: 'testimonials', type: 'boolean', label: 'آراء العملاء' },
          { key: 'faq', type: 'boolean', label: 'الأسئلة الشائعة' },
        ],
      },
    ],
  },
];
