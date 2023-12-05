// types
import {SectionsType} from '~/types';
// comps
import HeroSlider from './HeroSlider';

type Props = {
  section: SectionsType;
};

const Section = ({section}: Props) => {
  switch (section._type) {
    case 'section.heroSlider':
      return section.slide && section.slide.length ? <HeroSlider content={section.slide} autoscroll={section.autoscroll} scrollSpeed={section.scrollSpeed} /> : null;
    default:
      return null;
  }
};

export default Section;
