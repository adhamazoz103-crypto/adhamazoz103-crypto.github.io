'use client';

import { useSiteData } from '@/context/SiteContext';

export default function ThemeInjector() {
  const { data } = useSiteData();
  const theme = data.theme;

  if (!theme?.colors) return null;

  const { primary, secondary, accent, background, text } = theme.colors;
  const { heading, body } = theme.fonts || {};

  const fontImports = [];
  if (heading) fontImports.push(`family=${heading.replace(/ /g, '+')}:wght@400;600;700`);
  if (body && body !== heading) fontImports.push(`family=${body.replace(/ /g, '+')}:wght@300;400;500;700`);
  
  const importString = fontImports.length > 0 
    ? `@import url('https://fonts.googleapis.com/css2?${fontImports.join('&')}&display=swap');`
    : '';

  const styleString = `
    ${importString}
    :root {
      --color-gold: ${primary || '#C79A2B'};
      --color-gold-hover: ${primary || '#C79A2B'};
      --color-background: ${background || '#050505'};
      --color-section: ${secondary || '#101010'};
      --color-primary-text: ${text || '#FFFFFF'};
      ${heading ? `--font-heading: '${heading}', sans-serif;` : ''}
      ${body ? `--font-body: '${body}', sans-serif;` : ''}
    }
    ${heading || body ? `
    html, body {
      font-family: var(--font-body, inherit);
    }
    h1, h2, h3, h4, h5, h6, .font-bold {
      font-family: var(--font-heading, inherit);
    }
    ` : ''}
  `;

  return <style dangerouslySetInnerHTML={{ __html: styleString }} />;
}
