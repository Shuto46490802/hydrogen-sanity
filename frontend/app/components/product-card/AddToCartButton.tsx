import {CartForm} from '@shopify/hydrogen';
import {VariantType} from '~/types/shopify';

type Props = {
  variant: VariantType;
  classNames: string;
};

const AddToCartButton = ({variant, classNames}: Props) => {

  return (
    <CartForm
      route="/cart"
      inputs={{lines: [{merchandiseId: variant.id}]}}
      action={CartForm.ACTIONS.LinesAdd}
    >
      {(fetcher) => (
        <button
          type="submit"
          disabled={!variant.availableForSale ?? fetcher.state !== 'idle'}
          className={classNames}
        >
          {variant.availableForSale ? 'Add to Cart' : 'Sold out'}
        </button>
      )}
    </CartForm>
  );
};

export default AddToCartButton;
