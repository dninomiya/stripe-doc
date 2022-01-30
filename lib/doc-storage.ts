import { DocId } from '../docs/doc-titles';

export const getCompleteDocs = () => {
  const docIds = localStorage.getItem('complete')?.split(',') || [];
  return docIds as DocId[];
};

export const setComplteDoc = (id: DocId) => {
  const docs = getCompleteDocs();
  docs.push(id);
  const newCompleteDocs = Array.from(new Set(docs)) as DocId[];
  localStorage.setItem('complete', newCompleteDocs.join(','));
  return newCompleteDocs;
};

export const isComplete = (id: DocId) => {
  const docs = getCompleteDocs();
  return docs.includes(id);
};

export const removeCompleteDoc = (id: DocId) => {
  const docs = getCompleteDocs();
  const newCompleteDocs = docs.filter((docId) => docId !== id) as DocId[];
  localStorage.setItem('complete', newCompleteDocs.join(','));
  return newCompleteDocs;
};

export const resetCompleteDocs = () => {
  localStorage.removeItem('complete');
  return [];
};
