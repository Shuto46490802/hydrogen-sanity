export const SHOPIFY_PRODUCT_FRAGMENT = `#graphql
    fragment ShopifyProductFragment on Product {
        id
        title
        handle
        tags
        totalInventory
        productType
        vendor
        description
        images(first: 2) {
          nodes {
              url
              altText
              width
              height
          }
        }
        variants(first: 1) {
          nodes {
            id
            availableForSale
            title
            sku
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
          }
        }
    }
`;
