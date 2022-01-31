import { Switch } from '@headlessui/react';
import { MoonIcon } from '@heroicons/react/outline';
import { MoonIcon as MoonSolidIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { classNames } from '../lib/class-names';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={theme === 'dark'}
        onChange={(dark) => setTheme(dark ? 'dark' : 'light')}
        className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span className="sr-only">テーマ切り替え</span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute w-full h-full rounded-md"
        ></span>
        <span
          aria-hidden="true"
          className={classNames(
            theme === 'dark' ? 'bg-indigo-600' : 'bg-gray-200',
            'pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200'
          )}
        />
        <span
          aria-hidden="true"
          className={classNames(
            theme === 'dark' ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200'
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-2 text-gray-300">
        {theme === 'dark' ? (
          <MoonSolidIcon className="w-6 h-6 text-yellow-300" />
        ) : (
          <MoonIcon className="w-6 h-6" />
        )}
      </Switch.Label>
    </Switch.Group>
  );
};

export default ThemeSwitch;
