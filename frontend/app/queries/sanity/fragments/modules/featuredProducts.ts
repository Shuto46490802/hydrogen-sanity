import groq from 'groq';
import { COLLECTION } from '../objects/collection';

export const MODULE_FEATURED_PRODUCTS = groq`
    title,
    subtitle,
    collection {
      _ref,
      ${COLLECTION}
    }
`;
