import { Icon } from '@icons-pack/react-simple-icons';
import React from 'react';
import { DocType, DOC_TREE, TOOLS } from '../docs/doc-tree';
import { Firebase, Nextdotjs, Stripe } from '@icons-pack/react-simple-icons';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/outline';
import { classNames } from '../lib/class-names';
import { DocId, getDocTitle } from '../docs/doc-titles';

const ToolTab = ({ title, TabIcon }: { title: string; TabIcon: Icon }) => {
  return (
    <div className="px-4 justify-center flex items-center space-x-2 text-center">
      <TabIcon size={24} className="text-gray-500" />
      <span className="block text-gray-600">{title}</span>
    </div>
  );
};

type Props = {
  type: DocType;
  completeDocs?: DocId[];
};

const DocGrid = ({ type, completeDocs }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-2 sticky z-10 top-0 py-4 border-b dark:border-gray-700 bg-white dark:bg-slate-800">
        <div></div>
        <ToolTab TabIcon={Stripe} title="Stripe" />
        <ToolTab TabIcon={Nextdotjs} title="Next.js" />
        <ToolTab TabIcon={Firebase} title="Firebase" />
      </div>
      <div className="divide-dashed divide-y dark:divide-gray-700">
        {DOC_TREE[type].map((step, stepIndex) => (
          <div className="grid grid-cols-4 gap-2 py-6" key={stepIndex}>
            <h2>
              <span className="text-gray-500 dark:text-gray-700 font-bold">
                STEP {stepIndex + 1}
              </span>
              <span className="font-bold text-gray-700 dark:text-gray-500 text-lg block">
                {step.title}
              </span>
            </h2>
            {TOOLS.map((tool) => (
              <div key={tool} className="space-y-2">
                {step.tool[tool]?.map((id) => {
                  return (
                    <Link key={id} shallow href={`?id=${id}`}>
                      <a className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 hover:dark:text-gray-200 text-left space-x-2 w-full">
                        <CheckCircleIcon
                          className={classNames(
                            'w-6 h-6',
                            completeDocs?.includes(id)
                              ? 'text-lime-500'
                              : 'opacity-10'
                          )}
                        />
                        <span className="text-sm">{getDocTitle(id)}</span>
                      </a>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocGrid;
