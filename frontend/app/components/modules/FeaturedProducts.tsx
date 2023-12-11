// types
import {SanityCollectionType} from '~/types/sanity';
import {ShopifyCollectionType} from '~/types/shopify';
// lib
import {Swiper, SwiperSlide} from 'swiper/react';
import ProductCard from '../product-card/Card';
import {Scrollbar} from 'swiper/modules';

type Props = {
  collection: SanityCollectionType;
  subtitle: string;
  title: string;
  shopifyCollection?: ShopifyCollectionType;
};

const FeaturedProducts = ({
  collection,
  subtitle,
  title,
  shopifyCollection,
}: Props) => {
  return (
    <section className="featured-products container">
      <h2 className="h2 mb-5 text-center">
        {title ? title : shopifyCollection?.title}
      </h2>
      <div>
        <Swiper
          className="!pb-[30px] !flex flex-col justify-between"
          modules={[Scrollbar]}
          slidesPerView={2}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
          }}
          scrollbar={{
            hide: false,
            draggable: true,
          }}
        >
          {shopifyCollection?.products.map((product, index) => (
            <SwiperSlide key={index} className='!h-auto'>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedProducts;
