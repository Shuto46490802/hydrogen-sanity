import groq from 'groq';

import {SECTION_HERO_SLIDER} from './sections/heroSlider';

export const SECTIONS = groq`
  _key,
  _type,
  (_type == "section.heroSlider") => {
    ${SECTION_HERO_SLIDER}
  }
`;