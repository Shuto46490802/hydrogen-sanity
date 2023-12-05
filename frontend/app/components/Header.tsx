import {Await, NavLink} from '@remix-run/react';
import {Suspense} from 'react';
import type {HeaderQuery} from 'storefrontapi.generated';
import type {LayoutProps} from './Layout';
import {useRootLoaderData} from '~/root';

type HeaderProps = Pick<LayoutProps, 'header' | 'cart' | 'isLoggedIn'>;

type Viewport = 'desktop' | 'mobile';

export function Header({header, isLoggedIn, cart}: HeaderProps) {
  const {shop, menu} = header;
  return (
    <header className="header">
      <div className="grid grid-cols-3 md:grid-cols-12 px-5 md:px-10 py-3">
        <HeaderMenuMobileToggle />
        <HeaderLogo shopName={shop.name} />
        <HeaderMenu
          menu={menu}
          viewport="desktop"
          primaryDomainUrl={header.shop.primaryDomain.url}
        />
        <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
      </div>
    </header>
  );
}

const HeaderLogo = (props: {shopName: string}) => {
  const {shopName} = props;
  const logo = shopName.split(' ');

  return (
    <div className="col-span-1 md:col-span-2 flex justify-center md:justify-start items-center">
      <NavLink prefetch="intent" to="/" end>
        <div className="h3 !flex flex-col items-center">
          {logo.map((split) => (
            <span className="leading-[18px]">
              <strong>{split}</strong>
            </span>
          ))}
        </div>
      </NavLink>
    </div>
  );
};

export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
}: {
  menu: HeaderProps['header']['menu'];
  primaryDomainUrl: HeaderQuery['shop']['primaryDomain']['url'];
  viewport: Viewport;
}) {
  const {publicStoreDomain} = useRootLoaderData();
  const className = `header-menu-${viewport}`;

  function closeAside(event: React.MouseEvent<HTMLAnchorElement>) {
    if (viewport === 'mobile') {
      event.preventDefault();
      window.location.href = event.currentTarget.href;
    }
  }

  return (
    <nav
      className={`${className} col-span-5 hidden md:flex justify-start h-full`}
      role="navigation"
    >
      <div className="flex items-center gap-8">
        {menu?.items.map((item) => {
          if (!item.url) return null;

          // if the url is internal, we strip the domain
          const url =
            item.url.includes('myshopify.com') ||
            item.url.includes(publicStoreDomain) ||
            item.url.includes(primaryDomainUrl)
              ? new URL(item.url).pathname
              : item.url;
          return (
            <div>
              <NavLink
                className="header-menu-item p-4 !flex items-center h-full group"
                end
                key={item.id}
                onClick={closeAside}
                prefetch="intent"
                to={url}
              >
                <span className="pb-1 link group-hover:after:scale-x-[1]">{item.title}</span>
              </NavLink>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

function HeaderCtas({
  isLoggedIn,
  cart,
}: Pick<HeaderProps, 'isLoggedIn' | 'cart'>) {
  return (
    <nav
      className="header-ctas col-span-1 md:col-span-5 h-full flex justify-end gap-3"
      role="navigation"
    >
      <SearchToggle />
      <AccountLink isLoggedIn={isLoggedIn} />
      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  return (
    <div className="col-span-1 flex items-center md:!hidden">
      <button
        className="header-menu-mobile-toggle flex items-center"
        type="button"
      >
        <span className="icon-menu text-xl"></span>
      </button>
    </div>
  );
}

function SearchToggle() {
  return (
    <div className="flex items-center">
      <button type="button" className="p-2 block !flex items-center lg:!hidden">
        <span className="icon-search text-xl"></span>
      </button>
      <div className="border-b-[2px] border-black hidden lg:flex items-center">
        <span className="icon-search text-xl"></span>
        <input
          type="search"
          placeholder="Search"
          className="outline-none border-none"
        />
      </div>
    </div>
  );
}

const AccountLink = (props: {isLoggedIn: boolean}) => {
  const {isLoggedIn} = props;

  return (
    <>
      <NavLink
        className="!flex items-center p-2 lg:p-4"
        prefetch="intent"
        to="/account"
      >
        <span className="hidden lg:block link">
          {isLoggedIn ? 'Account' : 'Sign in/Register'}
        </span>
        <span className="icon-account block lg:hidden"></span>
      </NavLink>
    </>
  );
};

function CartBadge({count}: {count: number}) {
  return (
    <a className="!flex items-center p-2 lg:p-4" href="#cart-aside">
      <span className="icon-cart text-3xl relative">
        <span className="absolute text-sm text-white top-1/2 left-1/2 translate-x-[-50%] translate-y-[calc(-50%+2px)]">
          {count}
        </span>
      </span>
    </a>
  );
}

function CartToggle({cart}: Pick<HeaderProps, 'cart'>) {
  return (
    <Suspense fallback={<CartBadge count={0} />}>
      <Await resolve={cart}>
        {(cart) => {
          if (!cart) return <CartBadge count={0} />;
          return <CartBadge count={cart.totalQuantity || 0} />;
        }}
      </Await>
    </Suspense>
  );
}
