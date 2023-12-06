import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link, type MetaFunction} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import {HOME_PAGE_QUERY} from '~/queries/sanity/home';
import {HomepageType} from '~/types';
import {SanityPreview} from 'hydrogen-sanity';
import ModuleGrid from '~/components/modules/ModuleGrid';

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
  console.log(page)

  return (
    <SanityPreview data={page} query={HOME_PAGE_QUERY}>
      {(page) => (
        <>
          {page?.modules && (
            <div className="flex flex-col items-center">
              <ModuleGrid modules={page.modules} />
            </div>
          )}
        </>
      )}
    </SanityPreview>
  );
}
