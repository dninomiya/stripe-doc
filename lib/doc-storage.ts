import { DocId } from '../docs/doc-titles';

export const getCompleteDocs = () => {
  return localStorage.getItem('complete')?.split(',') || [];
};

export const setComplteDoc = (id: DocId) => {
  const docs = getCompleteDocs();
  docs.push(id);
  const newCompleteDocs = Array.from(new Set(docs));
  localStorage.setItem('complete', newCompleteDocs.join(','));
  return newCompleteDocs;
};

export const isComplete = (id: DocId) => {
  const docs = getCompleteDocs();
  return docs.includes(id);
};

export const removeCompleteDoc = (id: DocId) => {
  const docs = getCompleteDocs();
  const newCompleteDocs = docs.filter((docId) => docId !== id);
  localStorage.setItem('complete', newCompleteDocs.join(','));
  return newCompleteDocs;
};
