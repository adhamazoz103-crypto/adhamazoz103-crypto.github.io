// ============================================================
// GPS Landing Page System — Core Type Definitions
// ============================================================
// All TypeScript interfaces used across the landing page system.
// Every data structure from config files to components is typed here.
// ============================================================

/* ─── Firm Identity ─── */

export interface SiteInfo {
  firmName: string;
  firmNameEn: string;
  tagline: string;
  lawyerName: string;
  professionalTitle: string;
  yearsOfExperience: string;
  logo: string;
}

/* ─── Contact ─── */

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  email: string;
  office: {
    area: string;
    city: string;
    country: string;
  };
  workingHours: {
    days: string;
    from: string;
    to: string;
  };
}

/* ─── Navigation ─── */

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  links: NavLink[];
  ctaButton: {
    label: string;
    href: string;
  };
}

/* ─── SEO ─── */

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  locale: string;
  siteName: string;
}

/* ─── Media ─── */

export interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  poster?: string;
}

/* ─── Hero Section ─── */

export interface HeadingLine {
  text: string;
  highlight?: string;
}

export interface HeroStatistic {
  numericValue: number;
  suffix: string;
  prefix?: string;
  label: string;
}

export interface ButtonConfig {
  label: string;
  href: string;
  variant: 'primary' | 'outline';
  iconName?: string;
}

export interface HeroContent {
  headingLines: HeadingLine[];
  subheading: string;
  description: string;
  buttons: ButtonConfig[];
  statistics: HeroStatistic[];
  slideshow: {
    items: MediaItem[];
    intervalMs: number;
  };
}

/* ─── Why Choose Us ─── */

export interface WhyChooseCard {
  iconName: string;
  title: string;
  description: string;
}

/* ─── Practice Areas ─── */

export interface PracticeArea {
  iconName: string;
  titleAr: string;
  titleEn: string;
  description: string;
}

/* ─── Process Timeline ─── */

export interface ProcessStep {
  number: string;
  title: string;
  description?: string;
}

/* ─── Case Highlights ─── */

export interface CaseHighlight {
  category: string;
  title: string;
  description: string;
}

/* ─── Gallery ─── */

export interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  category: string;
  poster?: string;
}

/* ─── Testimonials ─── */

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  isDemo?: boolean;
}

/* ─── FAQ ─── */

export interface FAQItem {
  question: string;
  answer: string;
}

/* ─── Section Heading (reusable) ─── */

export interface SectionHeading {
  title: string;
  subtitle?: string;
}

/* ─── Footer ─── */

export interface FooterConfig {
  description: string;
  quickLinks: NavLink[];
  legalLinks: NavLink[];
  copyright: string;
}

/* ─── Final CTA ─── */

export interface CTAConfig {
  headline: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

/* ─── Contact Form ─── */

export interface ContactFormLabels {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  details: string;
  submitButton: string;
  successTitle: string;
  successMessage: string;
}

export interface ContactSectionContent {
  heading: string;
  description: string;
  formLabels: ContactFormLabels;
}

/* ─── Animation System ─── */

export type AnimationVariant =
  | 'fadeInUp'
  | 'fadeIn'
  | 'blurReveal'
  | 'slideInRight'
  | 'slideInLeft'
  | 'scaleIn';
