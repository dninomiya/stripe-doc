import { FC, useEffect } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';

const Code: FC<{
  lang: Language;
  fileName: string;
}> = ({ lang, children, fileName }) => {
  return (
    <div className="my-6 first:mt-0">
      <div className="prose prose-sm prose-pre:rounded-t-none prose-pre:mt-0">
        <div className="not-prose p-1 text-sm rounded-t bg-slate-900 text-gray-500">
          <p>{fileName}</p>
        </div>
        <Highlight {...defaultProps} code={children as string} language={lang}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                // eslint-disable-next-line react/jsx-key
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    // eslint-disable-next-line react/jsx-key
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default Code;
