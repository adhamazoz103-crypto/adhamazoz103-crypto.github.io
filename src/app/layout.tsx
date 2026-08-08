import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import './globals.css';
/* ─── Font ─── */

const ibmPlex = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

/* ─── Root Layout ─── */

import FloatingButtons from '@/components/FloatingButtons';
import { SiteProvider } from '@/context/SiteContext';
import { getInitialSiteData } from '@/lib/data';
import ThemeInjector from '@/components/ThemeInjector';

export async function generateMetadata(): Promise<Metadata> {
  const data = getInitialSiteData();
  return {
    metadataBase: new URL('https://gpslawfirm.com'),
    title: data.seo?.title || "GPS للمحاماة",
    description: data.seo?.description || "",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialData = getInitialSiteData();
  
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${ibmPlex.className} bg-background text-primary-text min-h-screen antialiased overflow-x-hidden`}
      >
        <SiteProvider initialData={initialData}>
          <ThemeInjector />
          {children}
          <FloatingButtons />
        </SiteProvider>
      </body>
    </html>
  );
}