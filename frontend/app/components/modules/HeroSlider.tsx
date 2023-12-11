// lib
import {Link, useMatches} from '@remix-run/react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';
// types
import {Image} from '@sanity/types';
// comps
import SanityImage from '../media/SanityImage';
import {CTAsType} from '~/types/sanity';

type SlideProps = {
  title: string;
  mobileImage: Image;
  desktopImage: Image;
  ctas: CTAsType[];
  alt: string;
  isLazyLoaded?: boolean;
  verticalAlignment: string;
  horizontalAlignment: string;
};

type SliderProps = {
  content: SlideProps[];
  autoscroll: boolean;
  scrollSpeed: number;
};

const HeroSlider = ({content, autoscroll, scrollSpeed}: SliderProps) => {
  return (
    <section className="hero-slider container">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{clickable: true}}
        loop={true}
        autoplay={{
          delay: autoscroll ? scrollSpeed : undefined,
          disableOnInteraction: false,
        }}
      >
        {content.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide {...slide} isLazyLoaded={index === 0 ? true : false} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const Slide = ({
  title,
  desktopImage,
  mobileImage,
  ctas,
  alt,
  isLazyLoaded = false,
  verticalAlignment,
  horizontalAlignment,
}: SlideProps) => {
  let verticalPosition = '';
  let horizontalPosition = '';
  switch (verticalAlignment) {
    case 'top':
      verticalPosition = 'md:justify-start';
      break;
    case 'center':
      verticalPosition = 'md:justify-center';
      break;
    case 'bottom':
      verticalPosition = 'md:justify-end';
      break;
    default:
      verticalPosition = 'md:justify-center';
  }

  switch (horizontalAlignment) {
    case 'left':
      horizontalPosition = 'md:items-start';
      break;
    case 'center':
      horizontalPosition = 'md:items-center';
      break;
    case 'right':
      horizontalPosition = 'md:items-end';
      break;
    default:
      horizontalPosition = 'md:items-start';
  }

  console.log(ctas);

  return (
    <>
      <div>
        <ImageContent
          desktopImage={desktopImage}
          mobileImage={mobileImage}
          alt={alt}
          isLazyLoaded={isLazyLoaded}
        />
      </div>
      <div
        className={`absolute w-full h-full top-0 left-0 px-[30px] md:px-[60px] py-[45px] md:py-[80px] flex flex-col justify-end ${verticalPosition} items-center ${horizontalPosition} md:max-w-[500px] text-white`}
      >
        <h1 className="h1 text-center md:text-left mb-6">{title}</h1>
        <ul className="flex flex-wrap justify-center md:justify-start items-center gap-3">
          {ctas.map((cta, index) => (
            <li className="m-0" key={index}>
              <Link
                className="button button--primary"
                to={
                  cta._type === 'collection'
                    ? '/collections/' + cta.collection.handle
                    : cta.handle
                }
              >
                {cta._type === 'collection'
                  ? 'Shop ' + cta.collection.title
                  : cta.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

type ImageContentPropsType = {
  mobileImage: Image;
  desktopImage: Image;
  alt: string;
  isLazyLoaded: boolean;
};

const ImageContent = ({
  desktopImage,
  mobileImage,
  alt,
  isLazyLoaded,
}: ImageContentPropsType) => {
  const [root] = useMatches();
  const {sanityDataset, sanityProjectID} = root.data;

  return (
    <>
      <SanityImage
        dataset={sanityDataset}
        projectId={sanityProjectID}
        desktopImage={desktopImage}
        mobileImage={mobileImage}
        alt={alt}
        isLazyLoaded={isLazyLoaded}
      />
    </>
  );
};

export default HeroSlider;
