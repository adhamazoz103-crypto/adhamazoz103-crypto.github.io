# 🚀 دليل إعداد عميل جديد

> هذا الدليل يشرح كيف تأخذ هذا القالب وتطبقه على أي عميل جديد
> **بدون لمس أي كود في الـ Components**

---

## الخطوة 1 — بيانات العميل الأساسية

### 📄 ملف: `src/config/site.ts`

غيّر البيانات دي:

| الحقل | الوصف | مثال |
|---|---|---|
| `firmName` | اسم المكتب بالعربي | `'GPS للمحاماة والاستشارات القانونية'` |
| `firmNameEn` | اسم المكتب بالإنجليزي (يظهر في الهيدر) | `'GPS Law Firm'` |
| `tagline` | شعار المكتب | `'الخبرة القانونية التي تمنحك الثقة...'` |
| `lawyerName` | اسم المحامي | `'الأستاذ / عبدالله محمود'` |
| `professionalTitle` | المسمى الوظيفي | `'محامٍ بالنقض والإدارية العليا...'` |
| `yearsOfExperience` | سنوات الخبرة | `'15+'` |
| `logo` | مسار اللوجو | `'/images/logo.svg'` |

---

## الخطوة 2 — بيانات التواصل

### 📄 ملف: `src/config/contact.ts`

| الحقل | الوصف |
|---|---|
| `phone` | رقم التليفون (بشكل عرض) |
| `whatsapp` | رقم الواتساب (بدون + أو مسافات) |
| `whatsappMessage` | الرسالة التلقائية لما يضغط واتساب |
| `email` | البريد الإلكتروني |
| `office.area` | المنطقة |
| `office.city` | المدينة |
| `office.country` | الدولة |
| `workingHours.days` | أيام العمل |
| `workingHours.from` | بداية الدوام |
| `workingHours.to` | نهاية الدوام |

---

## الخطوة 3 — روابط التنقل (Header)

### 📄 ملف: `src/config/navigation.ts`

- `links` → أضف أو احذف أو عدّل أي رابط في الـ Header
- `ctaButton.label` → نص الزر الذهبي (مثلاً: "احجز استشارة")
- `ctaButton.href` → الرابط اللي يودي عليه الزر

---

## الخطوة 4 — محتوى الـ Hero

### 📄 ملف: `src/config/hero.ts`

| الحقل | الوصف |
|---|---|
| `headingLines` | سطور العنوان الكبير — `highlight` = الكلمة اللي هتكون ذهبية |
| `subheading` | العنوان الفرعي |
| `description` | الفقرة التعريفية |
| `buttons` | أزرار الـ CTA — عدّل النص والروابط |
| `statistics` | الأرقام (سنوات خبرة، عدد استشارات، نسبة رضا) |
| `slideshow.items` | الصور والفيديوهات (شرح تفصيلي تحت) |
| `slideshow.intervalMs` | عدد الميللي ثانية بين كل صورة (5000 = 5 ثواني) |

---

## الخطوة 5 — SEO

### 📄 ملف: `src/config/seo.ts`

| الحقل | الوصف |
|---|---|
| `title` | عنوان الصفحة (يظهر في تاب المتصفح وجوجل) |
| `description` | وصف الصفحة لمحركات البحث |
| `keywords` | كلمات مفتاحية |
| `siteName` | اسم الموقع بالإنجليزي |

---

## الخطوة 6 — الألوان

### 📄 ملف: `src/app/globals.css`

غيّر القيم دي في بلوك `@theme`:

```css
--color-background: #050505;      /* خلفية الموقع */
--color-section: #101010;          /* خلفية الأقسام */
--color-card: #151515;             /* خلفية الكروت */
--color-gold: #C79A2B;             /* اللون الذهبي الرئيسي */
--color-gold-hover: #D4A83A;       /* الذهبي عند الـ hover */
--color-secondary-text: #B5B5B5;   /* النصوص الثانوية */
```

> ⚠️ لو غيّرت الألوان هنا، غيّرهم كمان في `src/config/theme.ts` عشان يفضلوا متطابقين.

---

## الخطوة 7 — الصور والفيديوهات

### 📁 مكان الملفات:

```
public/
├── images/
│   ├── logo.svg              ← لوجو العميل
│   ├── og-image.jpg           ← صورة المشاركة على السوشيال ميديا
│   └── hero/
│       ├── slide-1.jpg        ← أول صورة في الـ slideshow
│       ├── slide-2.jpg        ← تاني صورة
│       ├── slide-3.jpg        ← تالت صورة
│       ├── poster-1.jpg       ← غلاف أول فيديو
│       └── poster-2.jpg       ← غلاف تاني فيديو
└── videos/
    └── hero/
        ├── video-1.mp4        ← أول فيديو
        └── video-2.mp4        ← تاني فيديو
```

### 📐 المقاسات المقترحة:

| نوع الملف | المقاس | الفورمات |
|---|---|---|
| صور الـ Hero | 800×1000 بكسل أو أكبر (عمودي) | jpg, png, webp |
| غلاف الفيديو | نفس مقاس صور الـ Hero | jpg, png |
| فيديو | أي مقاس (هيتعمله fit تلقائي) | mp4, webm |
| اللوجو | أي مقاس (يفضل SVG) | svg, png |
| صورة OG | 1200×630 بكسل | jpg, png |

### ✏️ تعديل الـ Slideshow:

في ملف `src/config/hero.ts` — جزء `slideshow.items`:

```typescript
// عايز 3 صور بس؟
slideshow: {
  items: [
    { type: 'image', src: '/images/hero/slide-1.jpg', alt: 'وصف الصورة' },
    { type: 'image', src: '/images/hero/slide-2.jpg', alt: 'وصف الصورة' },
    { type: 'image', src: '/images/hero/slide-3.jpg', alt: 'وصف الصورة' },
  ],
  intervalMs: 5000,
},

// عايز صورة واحدة بس؟ (هيبقى ثابت بدون slideshow)
slideshow: {
  items: [
    { type: 'image', src: '/images/hero/slide-1.jpg', alt: 'وصف الصورة' },
  ],
  intervalMs: 5000,
},

// عايز فيديو واحد بس؟
slideshow: {
  items: [
    { type: 'video', src: '/videos/hero/video-1.mp4', alt: 'وصف', poster: '/images/hero/poster-1.jpg' },
  ],
  intervalMs: 5000,
},

// عايز خليط صور وفيديو؟ (الوضع الحالي)
slideshow: {
  items: [
    { type: 'image', src: '/images/hero/slide-1.jpg', alt: 'وصف' },
    { type: 'image', src: '/images/hero/slide-2.jpg', alt: 'وصف' },
    { type: 'video', src: '/videos/hero/video-1.mp4', alt: 'وصف', poster: '/images/hero/poster-1.jpg' },
    { type: 'image', src: '/images/hero/slide-3.jpg', alt: 'وصف' },
    { type: 'video', src: '/videos/hero/video-2.mp4', alt: 'وصف', poster: '/images/hero/poster-2.jpg' },
  ],
  intervalMs: 5000,
},
```

---

## ✅ شيكليست عميل جديد

```
□ غيّرت بيانات المكتب في site.ts
□ غيّرت بيانات التواصل في contact.ts
□ غيّرت روابط الـ Header في navigation.ts
□ غيّرت محتوى الـ Hero في hero.ts
□ غيّرت بيانات الـ SEO في seo.ts
□ غيّرت الألوان (لو لازم) في globals.css + theme.ts
□ حطيت اللوجو في public/images/logo.svg
□ حطيت صور الـ Hero في public/images/hero/
□ حطيت الفيديوهات (لو في) في public/videos/hero/
□ شغّلت npm run dev وراجعت الموقع
□ عملت npm run build قبل التسليم
```
