import { PlayIcon } from '@heroicons/react/solid';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import { DocId } from '../docs/doc-titles';
import { DocType } from '../docs/doc-tree';
import { getCompleteDocs, resetCompleteDocs } from '../lib/doc-storage';
import DocGrid from './doc-grid';
import DocList from './doc-list';
import DocModal from './doc-modal';

type Props = {
  type: DocType;
  title: string;
  description: ReactNode;
  scenes: string[];
  videoURL: string;
  demo: {
    title: string;
    description: ReactNode;
  };
};

const TutorialKit = ({
  title,
  description,
  scenes,
  type,
  videoURL,
  demo,
}: Props) => {
  const [completeDocs, setCompleteDocs] = useState<DocId[]>();
  const router = useRouter();

  const docId = router.query.id as DocId;

  const changeRoute = (id?: string) => {
    router.push(
      {
        pathname: router.pathname,
        query: id ? { id } : {},
      },
      undefined,
      {
        shallow: true,
      }
    );
  };

  useEffect(() => {
    setCompleteDocs(getCompleteDocs());
  }, []);

  const resetCompletes = () => {
    setCompleteDocs(resetCompleteDocs());
  };

  return (
    <div>
      <div>
        <div className="bg-gray-50 dark:bg-slate-900 shadow-sm">
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
                <h1 className="text-2xl mb-4 leading-6 font-semibold text-gray-800 dark:text-gray-400">
                  {title}
                </h1>
                <div className="text-gray-500 mb-6">{description}</div>
                <div>
                  <h2 className="text-gray-700 dark:text-gray-600 font-bold mb-2">
                    利用シーン
                  </h2>
                  <p className="text-gray-500">{scenes.join(' / ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="mt-6 mb-10 max-w-3xl">
            <h2 className="font-bold text-2xl mb-4 opacity-70">{demo.title}</h2>
            <p className="opacity-60 leading-relaxed">{demo.description}</p>
            <button
              className="text-gray-400 dark:text-gray-700 mt-4"
              onClick={resetCompletes}
            >
              完了状態をリセットする
            </button>
          </div>

          <div className="mb-20">
            <div className="lg:block hidden">
              <DocGrid type={type} completeDocs={completeDocs} />
            </div>
            <div className="block lg:hidden">
              <DocList type={type} completeDocs={completeDocs} />
            </div>
          </div>
        </div>
      </div>
      <DocModal
        isOpen={Boolean(docId)}
        onClose={() => changeRoute()}
        onComplete={(newCompleteDocs) => {
          changeRoute();
          setCompleteDocs(newCompleteDocs);
        }}
        id={docId}
      />
    </div>
  );
};

export default TutorialKit;
