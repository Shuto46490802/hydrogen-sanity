import groq from 'groq';

export const MODULE_HERO_SLIDER = groq`
  autoscroll,
  scrollSpeed,
  slides[] {
    _type,
    title,
    ctas[] {
      _type,
      (_type == "collection") => {
        "collection": *[_type == 'collection' && _id == ^._ref][0].store {
          title,
          "handle": slug.current
        }
      },
      (_type == "custom") => {
        title,
        "handle": handle.current,
      },
    },
    desktopImage,
    mobileImage,
    alt,
    verticalAlignment,
    horizontalAlignment
  }
`;
