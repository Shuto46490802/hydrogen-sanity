import {SHOPIFY_PRODUCT_FRAGMENT} from './product';

export const COLLECTION_QUERY = `#graphql
  query Collection ($id: ID!) {
    collection (id: $id) {
      id
      title
      description
      handle
      products (first: 50) {
        nodes {
          ...ShopifyProductFragment,
        }
      }

    }
  }
  ${SHOPIFY_PRODUCT_FRAGMENT}
`;
