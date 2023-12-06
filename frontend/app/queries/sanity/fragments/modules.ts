import groq from 'groq';

import {MODULE_HERO_SLIDER} from './modules/heroSlider';

export const MODULES = groq`
  _key,
  _type,
  (_type == "module.heroSlider") => {
    ${MODULE_HERO_SLIDER},
    autoscroll,
    scrollSpeed
  }
`;