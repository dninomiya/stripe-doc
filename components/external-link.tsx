import { ExternalLinkIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { FC } from 'react';

const ExternalLink: FC<{
  href: string;
}> = ({ href, children }) => {
  const isExternal = href?.match('^http');

  if (isExternal) {
    return (
      <a
        href={href}
        rel="noreferrer"
        className="text-indigo-600"
        target="_blank"
      >
        <span>{children}</span>
        <ExternalLinkIcon className="inline-block w-3 h-3 text-indigo-400 align-top mr-0.5" />
      </a>
    );
  } else {
    return (
      <Link href={href}>
        <a className="text-indigo-600">{children}</a>
      </Link>
    );
  }
};

export default ExternalLink;
