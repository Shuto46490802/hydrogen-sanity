// types
import {ModulesType} from '~/types';
// comps
import HeroSlider from './HeroSlider';

type Props = {
  module: ModulesType;
};

const Module = ({module}: Props) => {
  switch (module._type) {
    case 'module.heroSlider':
      return module.slides && module.slides.length ? (
        <HeroSlider
          content={module.slides}
          autoscroll={module.autoscroll}
          scrollSpeed={module.scrollSpeed}
        />
      ) : null;
    default:
      return null;
  }
};

export default Module;
