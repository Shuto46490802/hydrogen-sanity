import {SectionsType} from '~/types';
import HeroSlider from './HeroSlider';

type Props = {
  section: SectionsType;
};

const Section = ({section}: Props) => {
  switch (section._type) {
    case 'section.heroSlider':
      return <HeroSlider content={section.slide}/>;
    default:
      return null;
  }
  return <div></div>;
};

export default Section;
