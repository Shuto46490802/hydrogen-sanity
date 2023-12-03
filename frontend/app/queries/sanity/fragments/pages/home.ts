import groq from 'groq';

import {SECTIONS} from '../sections';
import {SEO} from '../seo';

export const HOME_PAGE = groq`
  sections[] {
    ${SECTIONS}
  },
  ${SEO}
`;
