import { FlagIcon, PencilIcon } from '@heroicons/react/outline';
import { PlayIcon } from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';
import toast from 'react-hot-toast';
import { Doc } from '../docs/doc-tree';
import { setComplteDoc } from '../lib/doc-storage';
import DocCard from './doc-card';

type Props = {
  isOpen: boolean;
  onClose: VoidFunction;
  onComplete: (completeDocs: string[]) => void;
  doc: Doc | null;
};

export default function DocModal({ isOpen, onClose, doc, onComplete }: Props) {
  const completeButtonRef = useRef(null);

  const complete = () => {
    if (doc) {
      const newCOmpleteDocs = setComplteDoc(doc);
      toast.success('完了しました', {
        position: 'bottom-center',
      });
      onComplete(newCOmpleteDocs);
    }
  };

  const getGitHubDocPath = (doc: Doc, mode: 'blob' | 'edit') => {
    return `https://github.com/flock-team/stripe-doc/${mode}/main/docs/${
      doc.type
    }/${doc.tool}/${doc.step + 1}-${doc.id + 1}.md`;
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
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            {doc && (
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div>
                  {doc.videoURL && (
                    <a
                      href={doc.videoURL}
                      target="_blank"
                      className="aspect-video bg-slate-800 flex items-center justify-center rounded-lg mb-6 shadow-lg hover:shadow-xl transition-shadow"
                      rel="noreferrer"
                    >
                      <PlayIcon className="w-20 h-20 text-gray-300 opacity-40" />
                    </a>
                  )}
                  <div className="mt-3 sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg text-center leading-6 font-medium text-gray-900"
                    >
                      {doc.title}
                    </Dialog.Title>
                    <div className="mt-2">
                      {doc && (
                        <DocCard
                          tool={doc.tool}
                          type={doc.type}
                          step={doc.step}
                          id={doc.id}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                    onClick={complete}
                    ref={completeButtonRef}
                  >
                    完了
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                    onClick={onClose}
                  >
                    閉じる
                  </button>
                </div>

                <div>
                  <div className="items-center space-x-4 justify-end flex mt-4 text-gray-400 text-sm">
                    <a
                      href={encodeURI(
                        `https://github.com/flock-team/stripe-doc/issues/new?body=## 該当ドキュメント\n${getGitHubDocPath(
                          doc,
                          'blob'
                        )}\n\n## 報告内容\n&title=ドキュメント報告: ${
                          doc.type
                        }-${doc.tool}-${doc.step + 1}-${doc.id + 1}`
                      ).replace(/#/g, '%23')}
                      target="_blank"
                      className="flex items-center space-x-2 hover:text-gray-700"
                      rel="noreferrer"
                    >
                      <FlagIcon className="w-4 h-4 inline" />
                      <span>報告</span>
                    </a>
                    <a
                      href={getGitHubDocPath(doc, 'edit')}
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
            )}
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );

  // return (
  //   <Transition appear show={isOpen} as={Fragment}>
  //     <Dialog
  //       as="div"
  //       className="fixed inset-0 z-10 overflow-y-auto"
  //       onClose={onClose}
  //     >
  //       <div className="min-h-screen px-4 text-center">
  //         <Transition.Child
  //           as={Fragment}
  //           enter="ease-out duration-300"
  //           enterFrom="opacity-0"
  //           enterTo="opacity-100"
  //           leave="ease-in duration-200"
  //           leaveFrom="opacity-100"
  //           leaveTo="opacity-0"
  //         >
  //           <Dialog.Overlay className="fixed inset-0" />
  //         </Transition.Child>

  //         {/* This element is to trick the browser into centering the modal contents. */}
  //         <span
  //           className="inline-block h-screen align-middle"
  //           aria-hidden="true"
  //         >
  //           &#8203;
  //         </span>
  //         <Transition.Child
  //           as={Fragment}
  //           enter="ease-out duration-300"
  //           enterFrom="opacity-0 scale-95"
  //           enterTo="opacity-100 scale-100"
  //           leave="ease-in duration-200"
  //           leaveFrom="opacity-100 scale-100"
  //           leaveTo="opacity-0 scale-95"
  //         >
  //           {doc ? (
  //             <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
  //               <Dialog.Title
  //                 as="h3"
  //                 className="text-lg font-medium leading-6 text-gray-900"
  //               >
  //                 {doc.title}
  //               </Dialog.Title>
  //               <div className="mt-2">
  //                 <DocCard
  //                   tool={doc.tool}
  //                   type={doc.type}
  //                   step={doc.step}
  //                   id={doc.id}
  //                 />
  //               </div>

  //               <div className="mt-4">
  //                 <button
  //                   type="button"
  //                   className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
  //                   onClick={() => complete()}
  //                 >
  //                   完了
  //                 </button>
  //               </div>
  //               <div>
  //                 <div className="items-center space-x-4 justify-end flex mt-4 text-gray-400 text-sm">
  //                   <a
  //                     href={encodeURI(
  //                       `https://github.com/flock-team/stripe-doc/issues/new?body=該当ドキュメント\nhttps://github.com/flock-team/stripe-doc/blob/main/docs/${doc.type}/${doc.tool}/${doc.step}-${doc.id}.md\n\n報告内容\n&title=ドキュメント報告: ${doc.type}-${doc.tool}-${doc.step}-${doc.id}`
  //                     )}
  //                     target="_blank"
  //                     className="flex items-center space-x-2 hover:text-gray-700"
  //                     rel="noreferrer"
  //                   >
  //                     <FlagIcon className="w-4 h-4 inline" />
  //                     <span>報告</span>
  //                   </a>
  //                   <a
  //                     href={`https://github.com/flock-team/stripe-doc/edit/main/docs/${doc.type}/${doc.tool}/${doc.step}-${doc.id}.md`}
  //                     target="_blank"
  //                     className="flex items-center space-x-2 hover:text-gray-700"
  //                     rel="noreferrer"
  //                   >
  //                     <PencilIcon className="w-4 h-4 inline" />
  //                     <span>編集</span>
  //                   </a>
  //                 </div>
  //               </div>
  //             </div>
  //           ) : (
  //             <div>aaa</div>
  //           )}
  //         </Transition.Child>
  //       </div>
  //     </Dialog>
  //   </Transition>
  // );
}
