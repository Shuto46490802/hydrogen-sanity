import groq from 'groq';

export const COLLECTION = groq`
  "data": *[_type == 'collection' && _id == ^._ref][0].store {
    gid,
    imageUrl,
    title,
    descriptionHtml,
    "slug": slug.current
  }
`;
