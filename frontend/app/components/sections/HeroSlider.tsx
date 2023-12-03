import {Image} from '@sanity/types';
import {useKeenSlider} from 'keen-slider/react';
import SanityImage from '../media/SanityImage';
import {useMatches} from '@remix-run/react';

type SlideType = {
  title: string;
  image: Image;
  ctas: string[];
};

type SliderType = {
  content: SlideType[];
};

type ImageContentPropsType = {
  image: Image;
};

const HeroSlider = ({content}: SliderType) => {
  const [ref] = useKeenSlider<HTMLDivElement>();
  return (
    <div ref={ref}>
      {content.map((slide) => (
        <Slide title={slide.title} image={slide.image} ctas={slide.ctas} />
      ))}
    </div>
  );
};

const Slide = ({title, image, ctas}: SlideType) => {
  return (
    <div>
      <ImageContent image={image} />
      <h1>{title}</h1>
      <ul>
        {ctas.map((cta) => (
          <li>
            <a href={cta}>{cta}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ImageContent = ({image}: ImageContentPropsType) => {
  const [root] = useMatches();
  const {sanityDataset, sanityProjectID} = root.data;

  return (
    <>
      <SanityImage
        crop={image?.crop}
        dataset={sanityDataset}
        hotspot={image?.hotspot}
        layout="responsive"
        projectId={sanityProjectID}
        sizes={['50vw, 100vw']}
        src={image?.asset?._ref}
      />
    </>
  );
};

export default HeroSlider;
