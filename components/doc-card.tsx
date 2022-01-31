import { DocId } from '../docs/doc-titles';
import MarkdownRender from './markdown-render';

type Props = {
  id: DocId;
};

const DocCard = ({ id }: Props) => {
  try {
    const markdown = require(`../docs/${id}.md`)?.default;

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
