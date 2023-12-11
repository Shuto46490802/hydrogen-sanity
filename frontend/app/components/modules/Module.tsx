// comps
import HeroSlider from './HeroSlider';
import FeaturedProducts from './FeaturedProducts';
import {HeroSliderType, SanityCollectionType} from '~/types/sanity';
import {ShopifyCollectionType} from '~/types/shopify';

type Props = {
  module: ModulesType;
};

type ModulesType = HeroSliderType | FeaturedProductsType;

type FeaturedProductsType = {
  collection: SanityCollectionType;
  shopifyCollection: ShopifyCollectionType;
  subtitle: string;
  title: string;
  _type: 'module.featuredProducts';
};

const Module = ({module}: Props) => {
  console.log(module)

  switch (module._type) {
    case 'module.heroSlider':
      return module.slides && module.slides.length ? (
        <HeroSlider
          content={module.slides}
          autoscroll={module.autoscroll}
          scrollSpeed={module.scrollSpeed}
        />
      ) : null;
    case 'module.featuredProducts':
      return module && module.shopifyCollection.products.length ? (
        <FeaturedProducts {...module} />
      ) : null;
    default:
      return null;
  }
};

export default Module;
