import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link, type MetaFunction} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import {HOME_PAGE_QUERY} from '~/queries/sanity/home';
import {HomepageType} from '~/types';
import {SanityPreview} from 'hydrogen-sanity';
import SectionGrid from '~/components/sections/SectionGrid';

export const meta: MetaFunction = () => {
  return [{title: 'Hydrogen | Home'}];
};

export async function loader({context}: LoaderFunctionArgs) {
  const {storefront, sanity} = context;
  const page = await sanity.query<HomepageType>({
    query: HOME_PAGE_QUERY,
  });

  return defer({page});
}

export default function Homepage() {
  const {page} = useLoaderData<typeof loader>();

  return (
    <SanityPreview data={page} query={HOME_PAGE_QUERY}>
      {(page) => (
        <>
          {page?.sections && (
            <div className="">
              <SectionGrid sections={page.sections} />
            </div>
          )}
        </>
      )}
    </SanityPreview>
  );
}