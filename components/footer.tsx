import { Twitter } from '@icons-pack/react-simple-icons';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <p className="text-gray-500 mb-4">
          このサイトはStripeユーザーにより作られており、Stripe社とは関係ありません。
        </p>
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <a
              href="https://twitter.com/d151005"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base opacity-20">
              &copy; 2022 nino.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
