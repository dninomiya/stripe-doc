import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import Code from './code';

const Doc: FC = ({ children }) => {
  return (
    <ReactMarkdown
      components={{
        code({ node, inline, className, children }) {
          return children as any;
        },
      }}
    >
      {children as string}
    </ReactMarkdown>
  );
};

export default Doc;
