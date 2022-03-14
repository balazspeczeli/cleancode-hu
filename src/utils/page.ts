import pagesJSON from 'content/pages.json';

type PageId = keyof typeof pagesJSON;

export const buildPageTitle = (pageId: Nullable<string>) => {
  if (pageId === 'index' || pagesJSON[pageId as PageId] === undefined) {
    return 'cleancode.hu';
  }

  return `cleancode.hu - ${pagesJSON[pageId as PageId]}`;
};
