import { FlagIcon, PencilIcon } from '@heroicons/react/outline';
import MarkdownRender from './markdown-render';

type Props = {
  type: 'payments' | 'subscription' | 'connect';
  tool: string;
  index: number;
};

const DocCard = ({ tool, index, type }: Props) => {
  try {
    const markdown = require(`../docs/${type}/${tool}-${index}.md`)?.default;

    return (
      <div className="group hover:shadow transition-shadow rounded-md p-4">
        <MarkdownRender data={markdown} />
        <div className="items-center space-x-4 justify-end group-hover:visible flex invisible mt-4 text-gray-400 text-sm">
          <a
            href={encodeURI(
              `https://github.com/flock-team/stripe-doc/issues/new?body=該当ドキュメント\nhttps://github.com/flock-team/stripe-doc/blob/main/docs/${type}/${tool}-${index}.md\n\n報告内容\n&title=ドキュメント報告: ${type}-${tool}-${index}`
            )}
            target="_blank"
            className="flex items-center space-x-2 hover:text-gray-700"
            rel="noreferrer"
          >
            <FlagIcon className="w-4 h-4 inline" />
            <span>報告</span>
          </a>
          <a
            href={`https://github.com/flock-team/stripe-doc/edit/main/docs/${type}/${tool}-${index}.md`}
            target="_blank"
            className="flex items-center space-x-2 hover:text-gray-700"
            rel="noreferrer"
          >
            <PencilIcon className="w-4 h-4 inline" />
            <span>編集</span>
          </a>
        </div>
      </div>
    );
  } catch (err) {
    return null;
  }
};

export default DocCard;
