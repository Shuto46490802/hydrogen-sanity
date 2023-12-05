import groq from 'groq';

export const SECTION_HERO_SLIDER = groq`
  slide[] {
    _key,
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
