'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of our combined data
export interface SiteDataState {
  site: any;
  contact: any;
  contactSection: any;
  navigation: any;
  hero: any;
  services: any[];
  faq: any;
  gallery: any;
  testimonials: any;
  timeline: any;
  whyChooseUs: any;
  theme: any;
  seo: any;
  footer: any;
  finalCTA: any;
}

interface SiteContextType {
  data: SiteDataState;
  updateData: (section: keyof SiteDataState, newData: any) => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export function SiteProvider({ children, initialData }: { children: ReactNode; initialData: SiteDataState }) {
  const [data, setData] = useState<SiteDataState>(initialData);

  const updateData = (section: keyof SiteDataState, newData: any) => {
    setData((prev) => ({
      ...prev,
      [section]: newData
    }));
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'UPDATE_SITE_DATA') {
        const { section, payload } = event.data;
        if (section) {
          updateData(section as keyof SiteDataState, payload);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <SiteContext.Provider value={{ data, updateData }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSiteData() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSiteData must be used within a SiteProvider');
  }
  return context;
}
