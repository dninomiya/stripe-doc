import { CheckCircleIcon } from '@heroicons/react/outline';
import { Firebase, Nextdotjs, Stripe } from '@icons-pack/react-simple-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { DocId, getDocTitle } from '../docs/doc-titles';
import { DocType, DOC_TREE, Step, Tool } from '../docs/doc-tree';
import { classNames } from '../lib/class-names';

type Props = {
  type: DocType;
  completeDocs?: DocId[];
};

const DocList = ({ type, completeDocs }: Props) => {
  return (
    <div className="divide-y divide-dashed">
      {DOC_TREE[type].map((step, index) => (
        <StepGroup
          completeDocs={completeDocs}
          index={index}
          key={index}
          step={step}
        />
      ))}
    </div>
  );
};

export default DocList;

const StepGroup = ({
  step,
  index,
  completeDocs,
}: {
  completeDocs?: DocId[];
  step: Step;
  index: number;
}) => {
  const tools = Object.keys(step.tool) as Tool[];
  const router = useRouter();
  const Icons = {
    firebase: Firebase,
    stripe: Stripe,
    nextjs: Nextdotjs,
  };
  const ToolName = {
    firebase: 'Firebase',
    stripe: 'Stripe',
    nextjs: 'Next.js',
  };

  return (
    <div className="py-8">
      <h2 className="font-bold mb-2">
        <span className="block text-sm opacity-40">STEP {index + 1}</span>
        <span className="opacity-70">{step.title}</span>
      </h2>
      <div className="space-y-3">
        {tools.map((tool) => {
          const Icon = Icons[tool];
          return (
            <div className="ml-2" key={tool}>
              <h3 className="flex items-center space-x-1 font-medium opacity-40">
                <Icon size={16} className="text-gray-500" />
                <span>{ToolName[tool]}</span>
              </h3>
              <ul>
                {step.tool[tool]?.map((docId) => (
                  <li key={docId}>
                    <Link
                      shallow
                      href={{
                        pathname: router.pathname,
                        query: {
                          id: docId,
                        },
                      }}
                    >
                      <a className="py-1 flex items-center space-x-1 opacity-60">
                        <CheckCircleIcon
                          className={classNames(
                            'w-5 h-5',
                            completeDocs?.includes(docId)
                              ? 'text-lime-500'
                              : 'opacity-10'
                          )}
                        />
                        <span>{getDocTitle(docId)}</span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
