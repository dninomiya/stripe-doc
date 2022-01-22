import { CheckCircleIcon } from '@heroicons/react/outline';
import { PlayIcon } from '@heroicons/react/solid';
import {
  Firebase,
  Icon,
  Nextdotjs,
  Stripe,
} from '@icons-pack/react-simple-icons';
import Head from 'next/head';
import { ReactNode, useEffect, useState } from 'react';
import { DocId, getDocTitle } from '../docs/doc-titles';
import { DocType, DOC_TREE, TOOLS } from '../docs/doc-tree';
import { classNames } from '../lib/class-names';
import { getCompleteDocs } from '../lib/doc-storage';
import DocModal from './doc-modal';

const ToolTab = ({ title, TabIcon }: { title: string; TabIcon: Icon }) => {
  return (
    <div className="col-span-2 px-4 justify-center flex items-center space-x-2 text-center">
      <TabIcon size={24} className="text-gray-500" />
      <span className="block text-gray-600">{title}</span>
    </div>
  );
};

type Props = {
  type: DocType;
  title: string;
  description: ReactNode;
  scenes: string[];
  videoURL: string;
};

const TutorialKit = ({ title, description, scenes, type, videoURL }: Props) => {
  const [target, setTarget] = useState<DocId | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [completeDocs, setCompleteDocs] = useState<string[]>();

  useEffect(() => {
    setCompleteDocs(getCompleteDocs());
  }, []);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div>
        <div className="bg-gray-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-10 lg:flex items-center">
              <a
                href={videoURL}
                target="_blank"
                className="aspect-video bg-slate-800 flex items-center justify-center rounded-lg lg:w-96 lg:mr-10 mb-6 lg:mb-0 shadow-lg hover:shadow-xl transition-shadow"
                rel="noreferrer"
              >
                <PlayIcon className="w-20 h-20 text-gray-300 opacity-40" />
              </a>
              <div className="flex-1">
                <h1 className="text-2xl mb-4 leading-6 font-semibold text-gray-800">
                  {title}
                </h1>
                <div className="text-gray-500 mb-6">{description}</div>
                <div>
                  <h2 className="text-gray-700 font-bold mb-2">利用シーン</h2>
                  <p className="text-gray-500">{scenes.join(' / ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <div className="grid grid-cols-7 gap-2 sticky top-0 py-4 border-b bg-white">
              <div></div>
              <ToolTab TabIcon={Stripe} title="Stripe" />
              <ToolTab TabIcon={Nextdotjs} title="Next.js" />
              <ToolTab TabIcon={Firebase} title="Firebase" />
            </div>
            <div className="divide-dashed divide-y">
              {DOC_TREE.payments.map((step, stepIndex) => (
                <div className="grid grid-cols-7 gap-2 py-6" key={stepIndex}>
                  <h2>
                    <span className="text-gray-500 font-bold">
                      STEP {stepIndex + 1}
                    </span>
                    <p className="font-bold text-gray-700 text-lg">
                      {step.title}
                    </p>
                  </h2>
                  {TOOLS.map((tool) => (
                    <div key={tool} className="col-span-2 space-y-2">
                      {step.tool[tool]?.map((id) => {
                        return (
                          <button
                            key={title}
                            onClick={() => {
                              setTarget(id);
                              setIsOpen(true);
                            }}
                            className="flex items-center text-gray-600 hover:text-gray-800 text-left space-x-2 w-full"
                          >
                            <CheckCircleIcon
                              className={classNames(
                                'w-6 h-6',
                                completeDocs?.includes(id)
                                  ? 'text-lime-500'
                                  : 'opacity-10'
                              )}
                            />
                            <span className="text-sm">{getDocTitle(id)}</span>
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <DocModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onComplete={(newCompleteDocs) => {
          setIsOpen(false);
          setCompleteDocs(newCompleteDocs);
        }}
        id={target}
      />
    </div>
  );
};

export default TutorialKit;