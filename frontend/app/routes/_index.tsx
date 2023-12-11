import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link, type MetaFunction} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import {HOME_PAGE_QUERY} from '~/queries/sanity/home';
import {SanityHomepageType} from '~/types/sanity';
import {SanityPreview} from 'hydrogen-sanity';
import ModuleGrid from '~/components/modules/ModuleGrid';
import {getModules, notFound} from '~/utils';

export const meta: MetaFunction = () => {
  return [{title: 'Hydrogen | Home'}];
};

export async function loader({context}: LoaderFunctionArgs) {
  const {storefront, sanity} = context;
  const page = await sanity.query<SanityHomepageType>({
    query: HOME_PAGE_QUERY,
  });

  let modules = null;
  if (page.modules) {
    modules = await getModules(page.modules, storefront);
  }

  if (!page || !modules) {
    throw notFound();
  }

  return defer({modules});
}

export default function Homepage() {
  const {modules} = useLoaderData<typeof loader>();

  return (
    <SanityPreview data={modules} query={HOME_PAGE_QUERY}>
      {(modules) => (
        <>
          {modules && (
            <div className="flex flex-col items-center">
              <ModuleGrid modules={modules} />
            </div>
          )}
        </>
      )}
    </SanityPreview>
  );
}
