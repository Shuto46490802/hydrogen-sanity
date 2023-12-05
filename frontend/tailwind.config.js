import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  plugins: [formsPlugin, typographyPlugin],
  theme: {
    fontFamily: {
      body: [...defaultTheme.fontFamily.sans],
      display: [...defaultTheme.fontFamily.serif],
    },
    fontSize: {
      xs: ['10px', '1'],
      sm: ['12px', '14px'],
      base: ['14px', '1'],
      lg: ['16px', '1'],
      xl: ['18px', '1'],
      '2xl': ['20px', '24px'],
      '3xl': ['24px', '32px'],
      '4xl': ['34px', '40px'],
      '5xl': ['48px', '56px'],
      '6xl': ['50px', '60px'],
      '7xl': ['64px', '1'],
      '8xl': ['80px', '1'],
      '9xl': ['96px', '104px'],
    },
    extend: {
      colors: {
        body: '#1F1F1F',
        'button-primary-text': 'var(--button-primary-textColor)',
        'button-primary-hover-text': 'var(--button-primary-textHoverColor)',
        'button-primary-bg': 'var(--button-primary-bgColor)',
        'button-primary-hover-bg': 'var(--button-primary-bgHoverColor)',
        'button-secondary-text': 'var(--button-secondary-textColor)',
        'button-secondary-hover-text': 'var(--button-secondary-textHoverColor)',
        'button-secondary-bg': 'var(--button-secondary-bgColor)',
        'button-secondary-hover-bg': 'var(--button-secondary-bgHoverColor)',
      },
    },
  },
};
