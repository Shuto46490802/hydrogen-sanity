import {useLocation} from '@remix-run/react';
import type {SelectedOption} from '@shopify/hydrogen/storefront-api-types';
import {useMemo} from 'react';
import {
  ModulesType,
  SanityHomepageType,
  SanitySettingsType,
} from './types/sanity';
import {COLLECTION_QUERY} from './queries/shopify/collection';
import {Storefront} from '@shopify/hydrogen';
import {GraphqlProduct} from './types/shopify';

export function useVariantUrl(
  handle: string,
  selectedOptions: SelectedOption[],
) {
  const {pathname} = useLocation();

  return useMemo(() => {
    return getVariantUrl({
      handle,
      pathname,
      searchParams: new URLSearchParams(),
      selectedOptions,
    });
  }, [handle, selectedOptions, pathname]);
}

export function getVariantUrl({
  handle,
  pathname,
  searchParams,
  selectedOptions,
}: {
  handle: string;
  pathname: string;
  searchParams: URLSearchParams;
  selectedOptions: SelectedOption[];
}) {
  const match = /(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/g.exec(pathname);
  const isLocalePathname = match && match.length > 0;

  const path = isLocalePathname
    ? `${match![0]}products/${handle}`
    : `/products/${handle}`;

  selectedOptions.forEach((option) => {
    searchParams.set(option.name, option.value);
  });

  const searchString = searchParams.toString();

  return path + (searchString ? '?' + searchParams.toString() : '');
}

export function setCssVariables(settings: SanitySettingsType) {
  let variables = '';
  for (const key in settings) {
    const styles = settings[key as keyof SanitySettingsType].styles;
    styles.forEach((style) => {
      const label = style.label.toLowerCase();
      for (const [key2, value] of Object.entries(style)) {
        if (key2 !== 'label') {
          variables += ` --${key}-${label}-${key2}: ${value};`;
        }
      }
    });
  }

  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');

  head.appendChild(style);

  variables = `:root {${variables}}`;
  style.type = 'text/css';
  style.appendChild(document.createTextNode(variables));
}

export const getModules = (modules: ModulesType[], storefront: Storefront) => {
  return Promise.all(
    modules.map(async (module) => {
      if (module._type === 'module.featuredProducts') {
        const {collection} = await storefront.query(COLLECTION_QUERY, {
          variables: {
            id: module.collection.data.gid,
          },
        });

        collection.products = collection.products.nodes.map(
          (product: GraphqlProduct) => transformGraphqlProduct(product),
        );

        return {
          ...module,
          shopifyCollection: collection,
        };
      }

      return module;
    }),
  );
};

export const transformGraphqlProduct = (product: GraphqlProduct) => {
  return {
    description: product.description,
    handle: product.handle,
    id: product.id,
    images: product.images.nodes,
    productType: product.productType,
    tags: product.tags,
    title: product.title,
    totalInventory: product.totalInventory,
    variants: product.variants.nodes,
    vendor: product.vendor,
  };
};

/**
 * A not found response. Sets the status code.
 */
export const notFound = (message = 'Not Found') =>
  new Response(message, {
    status: 404,
    statusText: 'Not Found',
  });
