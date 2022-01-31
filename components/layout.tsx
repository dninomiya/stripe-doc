import { Disclosure } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { Github, Stripe, Twitter } from '@icons-pack/react-simple-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { classNames } from '../lib/class-names';
import Footer from './footer';
import ThemeSwitch from './theme-switch';

const navigation = [
  { name: '商品の販売', href: '/payments' },
  { name: 'サブスクリプション', href: '/billing' },
  { name: 'マーケットプレイス', href: '/connect' },
];

const MyLink = (props: any) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
};

const Layout: FC = ({ children }) => {
  const router = useRouter();

  const isCurrent = (item: typeof navigation[number]) => {
    return item.href === router.pathname;
  };

  return (
    <div className="min-h-full dark:bg-slate-800 dark:text-gray-50">
      <Disclosure as="nav" className="bg-indigo-600 dark:bg-slate-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <p className="flex-shrink-0 text-white">
                    <span className="font-bold text-xl">Stripe</span>
                    <span className="text-sm ml-1 opacity-80">
                      ビギナーズガイド🔰
                    </span>
                  </p>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <a
                            className={classNames(
                              isCurrent(item)
                                ? 'bg-indigo-700 text-white'
                                : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={isCurrent(item) ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex space-x-4 items-center md:ml-6">
                    <ThemeSwitch />
                    <a
                      href="https://github.com/flock-team/stripe-doc"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github className="text-indigo-200" />
                    </a>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={MyLink}
                    href={item.href}
                    className={classNames(
                      isCurrent(item)
                        ? 'bg-indigo-700 text-white'
                        : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={isCurrent(item) ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
