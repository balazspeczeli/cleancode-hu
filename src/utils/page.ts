import meta from 'content/meta.json';
import pagesJSON from 'content/pages.json';

type PageId = keyof typeof pagesJSON;

export const buildPageTitle = (pageId: Nullable<string>) => {
  if (pageId === 'index' || pagesJSON[pageId as PageId] === undefined) {
    return meta.title;
  }

  return `${meta.title} - ${pagesJSON[pageId as PageId]}`;
};

export const setLocationHash = (hash: string) => {
  history.replaceState(null, '', '#' + hash);
};
