import { DocType } from '../docs/doc-tree';
import MarkdownRender from './markdown-render';

type Props = {
  type: DocType;
  tool: string;
  id: number;
  step: number;
};

const DocCard = ({ tool, type, step, id }: Props) => {
  console.log(`../docs/${type}/${tool}/${step + 1}-${id + 1}.md`);

  try {
    const markdown = require(`../docs/${type}/${tool}/${step + 1}-${
      id + 1
    }.md`)?.default;

    return (
      <div>
        <MarkdownRender data={markdown} />
      </div>
    );
  } catch (err) {
    return null;
  }
};

export default DocCard;
