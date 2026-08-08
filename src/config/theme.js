"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.themeConfig = void 0;
/**
 * Design token reference.
 *
 * The primary source of truth for colors lives in globals.css
 * via Tailwind v4's @theme directive. This file serves as:
 *  1. A JS-accessible reference for any runtime styling needs.
 *  2. A single place to document the full design system.
 *
 * When rebranding, update BOTH this file and globals.css.
 */
exports.themeConfig = {
    colors: {
        background: '#050505',
        section: '#101010',
        card: '#151515',
        cardHover: '#1a1a1a',
        primaryText: '#FFFFFF',
        secondaryText: '#B5B5B5',
        gold: '#C79A2B',
        goldHover: '#D4A83A',
        border: 'rgba(255, 255, 255, 0.08)',
        borderHover: 'rgba(255, 255, 255, 0.15)',
    },
    fonts: {
        primary: 'IBM Plex Sans Arabic',
    },
    borderRadius: {
        card: '1.5rem',
        button: '9999px',
        input: '0.75rem',
    },
};
