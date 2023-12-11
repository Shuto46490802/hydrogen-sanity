// types
import {HeroSliderType, SanityCollectionType} from '~/types/sanity';
// comps
import Module from './Module';
import { ShopifyCollectionType } from '~/types/shopify';

type Props = {
  modules: ModulesType[];
};

type ModulesType = HeroSliderType | FeaturedProductsType;

type FeaturedProductsType = {
  collection: SanityCollectionType;
  shopifyCollection?: ShopifyCollectionType;
  subtitle: string;
  title: string;
  _type: 'module.featuredProducts';
};

const ModuleGrid = ({modules}: Props) => {
  return (
    <>
      {modules.map((module, index) => (
        <Module module={module} key={index}></Module>
      ))}
    </>
  );
};

export default ModuleGrid;
