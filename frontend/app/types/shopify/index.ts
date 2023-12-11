export type ShopifyCollectionType = {
  description: string;
  handle: string;
  id: string;
  title: string;
  products: Product[];
};

export type Product = {
  description: string;
  handle: string;
  id: string;
  images: ImageType[];
  productType: string;
  tags: string[];
  title: string;
  totalInventory: number;
  variants: VariantType[];
  vendor: string;
};

export type GraphqlProduct = {
  description: string;
  handle: string;
  id: string;
  images: {
    nodes: ImageType[];
  };
  productType: string;
  tags: string[];
  title: string;
  totalInventory: number;
  variants: {
    nodes: VariantType[];
  };
  vendor: string;
};

type ImageType = {
  altText: string;
  height: number;
  url: string;
  width: number;
};

export type VariantType = {
  availableForSale: boolean;
  compareAtPrice: PriceType;
  id: string;
  price: PriceType;
  sku: string;
  title: string;
};

export type PriceType = {
  amount: string;
  currencyCode: string;
};
