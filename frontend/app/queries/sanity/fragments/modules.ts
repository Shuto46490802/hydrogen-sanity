import groq from 'groq';

import {MODULE_HERO_SLIDER} from './modules/heroSlider';
import { MODULE_FEATURED_PRODUCTS } from './modules/featuredProducts';

export const MODULES = groq`
  _key,
  _type,
  (_type == "module.heroSlider") => {
    ${MODULE_HERO_SLIDER}
  },
  (_type == "module.featuredProducts") => {
    ${MODULE_FEATURED_PRODUCTS}
  }
`;