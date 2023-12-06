import type {Image} from '@sanity/types';

// Pages
export type HomepageType = {
  seo: SeoType;
  modules?: ModulesType[];
};

// Settings
export type SettingsType = {
  button: ButtonType;
};

export type ButtonType = {
  styles: ButtonStyle[];
};

export type ButtonStyle = {
  label: string;
  textColor: string;
  textHoverColor: string;
  bgColor: string;
  bgHoverColor: string;
};

// Global
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

// Modules
export type ModulesType = HeroSliderType;
// hero slider
export type HeroSliderType = {
  _key?: string;
  _type: 'module.heroSlider';
  slides: HeroSlideType[];
  autoscroll: boolean;
  scrollSpeed: number;
};

export type HeroSlideType = {
  _key?: string;
  _type: 'heroSlider.slide';
  title: string;
  ctas: string[];
  desktopImage: Image;
  mobileImage: Image;
  alt: string;
  verticalAlignment: string;
  horizontalAlignment: string;
};
