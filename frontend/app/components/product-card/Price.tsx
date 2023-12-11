import {PriceType} from '~/types/shopify';

type Props = {
  price: PriceType;
  compareAtPrice: PriceType;
};

const Price = ({price, compareAtPrice}: Props) => {
  const oldPrice = parseFloat(price.amount);
  const currentPrice = compareAtPrice
    ? parseFloat(compareAtPrice.amount)
    : null;
  const isSale = currentPrice ? oldPrice > currentPrice : false;

  return (
    <div className="price--wrapper text-center">
      {isSale ? (
        <>
          <s>${oldPrice.toFixed(2)}</s>
          <span className="ml-1 price--sale">
            Now ${currentPrice?.toFixed(2)}
          </span>
        </>
      ) : (
        <span>${oldPrice.toFixed(2)}</span>
      )}
    </div>
  );
};

export default Price;
