// lib
import imageUrlBuilder from '@sanity/image-url';
// types
import {Image} from '@sanity/types';
// comps
import Picture from './Picture';

const BREAKPOINTS = [640, 768, 1024, 1280, 1536]; // px

// @ts-expect-error
const generateSrcSet = (urlBuilder, breakpoints, {quality}) => {
  return (
    breakpoints
      // @ts-expect-error
      .map((width) => {
        return `${urlBuilder
          .width(width)
          .auto('format')
          .quality(quality)} ${width}w`;
      })
      .join(', ')
  );
};

type Props = {
  desktopImage: Image;
  mobileImage: Image;
  isLazyLoaded: boolean;
  alt: string;
  dataset: string;
  projectId: string;
};

export default function SanityImage({
  desktopImage,
  mobileImage,
  isLazyLoaded,
  alt,
  dataset,
  projectId,
}: Props) {
  const desktopUrlBuilder = imageUrlBuilder({projectId, dataset}).image({
    _ref: desktopImage.asset?._ref,
    crop: desktopImage.crop,
    hotspot: desktopImage.hotspot,
  });
  const desktopSrcSet = generateSrcSet(desktopUrlBuilder, BREAKPOINTS, {
    quality: 80,
  });
  const mobileUrlBuilder = imageUrlBuilder({projectId, dataset}).image({
    _ref: mobileImage.asset?._ref,
    crop: mobileImage.crop,
    hotspot: mobileImage.hotspot,
  });
  const mobileSrcSet = generateSrcSet(mobileUrlBuilder, BREAKPOINTS, {
    quality: 80,
  });
  const desktopImageData = {
    src: desktopImage.asset?._ref,
    srcSet: desktopSrcSet,
  };
  const mobileImageData = {
    src: mobileImage.asset?._ref,
    srcSet: mobileSrcSet,
  };

  return (
    <>
      <Picture
        desktopImage={desktopImageData}
        mobileImage={mobileImageData}
        isLazyLoaded={isLazyLoaded}
        alt={alt}
      />
    </>
  );
}
