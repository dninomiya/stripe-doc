import { Doc } from '../docs/doc-tree';

export const getCompleteDocs = () => {
  return localStorage.getItem('complete')?.split(',') || [];
};

export const setComplteDoc = (doc: Doc) => {
  const docs = getCompleteDocs();
  docs.push(`${doc.type}-${doc.tool}-${doc.step}-${doc.id}`);
  const newCompleteDocs = Array.from(new Set(docs));
  localStorage.setItem('complete', newCompleteDocs.join(','));
  return newCompleteDocs;
};
