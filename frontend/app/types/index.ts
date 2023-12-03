import type {Image} from '@sanity/types';

// pages
export type HomepageType = {
  seo: SeoType;
  sections?: SectionsType[];
};

// properties
export type SeoType = {
  description?: string;
  image?: SanityAssetImage;
  title: string;
};

export interface SanityAssetImage extends Image {
  _type: 'image';
  altText?: string;
  blurDataURL: string;
  height: number;
  url: string;
  width: number;
}

// sections
export type SectionsType = HeroSliderType;

export type HeroSliderType = {
  _key?: string;
  _type: 'section.heroSlider';
  slide: HeroSlideType[];
};

// blocks
// Hero Slider
export type HeroSlideType = {
  _key?: string;
  _type: 'heroSlider.slide';
  title: string;
  ctas: string[];
  image: Image;
};
