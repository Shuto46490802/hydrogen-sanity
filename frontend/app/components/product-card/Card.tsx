import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {Product} from '~/types/shopify';
import Price from './Price';
import {useState} from 'react';
import {useMediaQuery} from '~/hooks/useMediaQuery';
import AddToCartButton from './AddToCartButton';

type Props = {
  product: Product;
};

const ProductCard = ({product}: Props) => {
  // states
  const [isHovered, setIsHovered] = useState(false);
  // hooks
  const isMobile = useMediaQuery('(max-width: 1023px)');

  const currentVariant = product.variants[0];
  const price = currentVariant.price;
  const compareAtPrice = currentVariant.compareAtPrice;

  return (
    <div
      className="flex flex-col items-center justify-between h-full"
      onMouseOver={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <div className="relative duration-200">
        <Link to={`/products/${product.handle}`}>
          {product.images[0] && (
            <Image
              data={product.images[0]}
              className={`duration-200 ${
                isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
              }`}
              aspectRatio="1/1"
            />
          )}
          {product.images[1] && (
            <Image
              data={product.images[1]}
              className={`duration-200 absolute top-0 left-0 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              aspectRatio="1/1"
            />
          )}
        </Link>
      </div>
      <div className="mt-4 w-full">
        <div className={`flex-col items-center flex`}>
          <Link to={`/products/${product.handle}`}>
            <div className="h5 text-center mb-2">{product.title}</div>
          </Link>
          <div className={`min-h-[40px] items-center ${isHovered ? 'hidden' : 'flex'}`}>
            <Price price={price} compareAtPrice={compareAtPrice} />
          </div>
          <div className={`h-[40px] w-full ${isHovered || isMobile ? 'block' : 'hidden'}`}>
            <AddToCartButton
              classNames="button button--secondary w-full border border-black"
              variant={currentVariant}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
