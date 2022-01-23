import { Dialog, Transition } from '@headlessui/react';
import { FlagIcon, PencilIcon } from '@heroicons/react/outline';
import { Fragment, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { DocId, getDocTitle } from '../docs/doc-titles';
import {
  isComplete,
  removeCompleteDoc,
  setComplteDoc,
} from '../lib/doc-storage';
import DocCard from './doc-card';
import DocVideo from './doc-video';

type Props = {
  isOpen: boolean;
  onClose: VoidFunction;
  onComplete: (completeDocs: string[]) => void;
  id: DocId | null;
};

export default function DocModal({ isOpen, onClose, id, onComplete }: Props) {
  const [docId, setDocId] = useState<DocId>();
  const completeButtonRef = useRef(null);

  useEffect(() => {
    if (id) {
      setDocId(id);
    }
  }, [id]);

  const complete = () => {
    if (id) {
      const newCOmpleteDocs = setComplteDoc(id);
      toast.success('完了しました', {
        position: 'bottom-center',
      });
      onComplete(newCOmpleteDocs);
    }
  };

  const imcomplete = () => {
    if (id) {
      const newCOmpleteDocs = removeCompleteDoc(id);
      onComplete(newCOmpleteDocs);
    }
  };

  const getGitHubDocPath = (id: DocId, mode: 'blob' | 'edit') => {
    return `https://github.com/flock-team/stripe-doc/${mode}/main/docs/${id}.md`;
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={completeButtonRef}
        onClose={onClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          {docId && (
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <DocVideo id={docId} />
                <div className="px-4 pt-5 pb-4 sm:p-6">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-center leading-6 font-medium text-gray-900"
                  >
                    {getDocTitle(docId)}
                  </Dialog.Title>
                  <div className="mt-3">
                    <DocCard id={docId} />
                  </div>

                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                    {isComplete(docId) ? (
                      <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:col-start-2 sm:text-sm"
                        onClick={imcomplete}
                        ref={completeButtonRef}
                      >
                        未完了にする
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                        onClick={complete}
                        ref={completeButtonRef}
                      >
                        完了
                      </button>
                    )}
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                      onClick={onClose}
                    >
                      閉じる
                    </button>
                  </div>
                  <div className="items-center space-x-4 justify-end flex mt-4 text-gray-400 text-sm">
                    <a
                      href={encodeURI(
                        `https://github.com/flock-team/stripe-doc/issues/new?body=## 該当ドキュメント\n${getGitHubDocPath(
                          docId,
                          'blob'
                        )}\n\n## 報告内容\n&title=ドキュメント報告: ${id}`
                      ).replace(/#/g, '%23')}
                      target="_blank"
                      className="flex items-center space-x-2 hover:text-gray-700"
                      rel="noreferrer"
                    >
                      <FlagIcon className="w-4 h-4 inline" />
                      <span>報告</span>
                    </a>
                    <a
                      href={getGitHubDocPath(docId, 'edit')}
                      target="_blank"
                      className="flex items-center space-x-2 hover:text-gray-700"
                      rel="noreferrer"
                    >
                      <PencilIcon className="w-4 h-4 inline" />
                      <span>編集</span>
                    </a>
                  </div>
                </div>
              </div>
            </Transition.Child>
          )}
        </div>
      </Dialog>
    </Transition.Root>
  );
}
