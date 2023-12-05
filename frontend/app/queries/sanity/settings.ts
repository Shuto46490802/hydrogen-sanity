import groq from 'groq';
import { BUTTON } from './fragments/settings/button';

export const SETTINGS_QUERY = groq`
  *[_type == 'settings'] | order(_updatedAt desc) [0]{
    ${BUTTON}
  }
`;
