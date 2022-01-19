import { ClipboardIcon } from '@heroicons/react/outline';
import { FC } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { synthwave84 } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkBreaks from 'remark-breaks';
import ExternalLink from './external-link';

type Props = {
  data: string;
};

const MarkdownRender = ({ data }: Props) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkBreaks]}
      className="prose prose-sm prose-pre:p-0"
      components={{
        a({ href, children }) {
          return <ExternalLink href={href!}>{children}</ExternalLink>;
        },
        pre({ children }) {
          return (
            <pre className="first:mt-0 last:mb-0 overflow-hidden shadow">
              {children}
            </pre>
          );
        },
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          const fileName = className?.split(':')?.[1];
          return !inline && match ? (
            <div>
              {fileName && (
                <div className="bg-[#1f192c] border-b flex items-center justify-between border-black text-sm py-1 px-2 text-white">
                  <span className="opacity-60">{fileName}</span>
                  <CopyToClipboard
                    onCopy={() =>
                      toast.success('コピーしました', {
                        position: 'bottom-center',
                      })
                    }
                    text={String(children)}
                  >
                    <button>
                      <ClipboardIcon className="w-4 h-4 text-gray-500" />
                    </button>
                  </CopyToClipboard>
                </div>
              )}
              <SyntaxHighlighter
                style={synthwave84}
                language={match[1]}
                PreTag="div"
                customStyle={{ margin: 0 }}
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            </div>
          ) : (
            <code {...props}>{children}</code>
          );
        },
      }}
    >
      {data}
    </ReactMarkdown>
  );
};

export default MarkdownRender;
