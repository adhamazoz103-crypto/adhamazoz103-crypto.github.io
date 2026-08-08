import fs from 'fs';
import path from 'path';
import type { SiteDataState } from '@/context/SiteContext';

// Helper to safely load JSON files on the server side
function loadJson(filename: string, fallback: any = {}) {
  try {
    const filePath = path.join(process.cwd(), 'data', filename);
    if (!fs.existsSync(filePath)) return fallback;
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    return fallback;
  }
}

export function getInitialSiteData(): SiteDataState {
  return {
    site: loadJson('site.json'),
    contact: loadJson('contact.json'),
    contactSection: loadJson('contactSection.json'),
    navigation: loadJson('navigation.json'),
    hero: loadJson('hero.json', { headingLines: [], buttons: [], statistics: [], slideshow: { items: [] } }),
    services: loadJson('services.json', { services_list: [] }),
    faq: loadJson('faq.json', { items: [] }),
    gallery: loadJson('gallery.json', { items: [] }),
    testimonials: loadJson('testimonials.json', { items: [] }),
    timeline: loadJson('timeline.json', { items: [] }),
    whyChooseUs: loadJson('whyChooseUs.json', { items: [] }),
    theme: loadJson('theme.json', { colors: {}, radii: {}, fonts: {} }),
    seo: loadJson('seo.json'),
    footer: loadJson('footer.json'),
    finalCTA: loadJson('finalCTA.json')
  };
}
