import { ExternalLinkIcon } from '@heroicons/react/outline';
import { FC } from 'react';

const ExternalLink: FC<{
  href: string;
}> = ({ href, children }) => {
  const isExternal = href?.match('^http');

  return (
    <a
      href={href}
      rel="noreferrer"
      className="text-indigo-600"
      target={isExternal ? '_blank' : '_self'}
    >
      <span>{children}</span>
      {isExternal && (
        <ExternalLinkIcon className="inline-block w-3 h-3 text-indigo-400 align-top mr-0.5" />
      )}
    </a>
  );
};

export default ExternalLink;
