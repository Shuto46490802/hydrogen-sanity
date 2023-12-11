import groq from 'groq';

export const MODULE_HERO_SLIDER = groq`
  autoscroll,
  scrollSpeed,
  slides[] {
    _type,
    title,
    ctas[],
    desktopImage,
    mobileImage,
    alt,
    verticalAlignment,
    horizontalAlignment
  }
`;
