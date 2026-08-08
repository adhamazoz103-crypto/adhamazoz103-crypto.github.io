'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import PracticeAreas from '@/components/PracticeAreas';
import ProcessTimeline from '@/components/ProcessTimeline';
import CaseHighlights from '@/components/CaseHighlights';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactSection from '@/components/ContactSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import { useSiteData } from '@/context/SiteContext';

/**
 * Main landing page.
 *
 * Assembles all section components.
 */
export default function Page() {
  const { data } = useSiteData();
  const v = data.site?.visibleSections || {};

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      {v.hero !== false && v.hero !== 'false' && <HeroSection />}
      {v.whyChooseUs !== false && v.whyChooseUs !== 'false' && <WhyChooseUs />}
      {v.services !== false && v.services !== 'false' && <PracticeAreas />}
      {v.timeline !== false && v.timeline !== 'false' && <ProcessTimeline />}
      <CaseHighlights />
      {v.gallery !== false && v.gallery !== 'false' && <Gallery />}
      {v.testimonials !== false && v.testimonials !== 'false' && <Testimonials />}
      {v.faq !== false && v.faq !== 'false' && <FAQ />}
      <ContactSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}