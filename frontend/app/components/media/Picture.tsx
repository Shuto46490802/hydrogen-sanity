type ImageType = {
  src: string | undefined;
  srcSet: any;
};

type Props = {
  desktopImage: ImageType;
  mobileImage: ImageType;
  alt: string
  isLazyLoaded: boolean
};

const Picture = ({desktopImage, mobileImage, alt, isLazyLoaded}: Props) => {
  return (
    <picture>
      <source
        media="(min-width: 768px)"
        type="image/webp"
        srcSet={desktopImage.srcSet}
        width={1920}
        height={1080}
      />
      <source
        media="(min-width: 768px)"
        srcSet={desktopImage.srcSet}
        width={1920}
        height={1080}
      />
      <source
        type="image/webp"
        srcSet={mobileImage.srcSet}
        width={768}
        height={768}
      />
      <img
        srcSet={mobileImage.srcSet}
        src={mobileImage.src}
        width={768}
        height={768}
        loading={isLazyLoaded ? 'lazy' : 'eager'}
        alt={alt}
      />
    </picture>
  );
};

export default Picture;
