import pagesJSON from 'content/pages.json';

type PageId = keyof typeof pagesJSON;

export const extractPageIdFromPath = (path: string) => {
  if (path === '/') {
    return null;
  }

  return path.split('/')[1].split('#')[0];
};

export const buildPageTitle = (path: string) => {
  const pageId = extractPageIdFromPath(path);
  if (pageId === null || pagesJSON[pageId as PageId] === undefined) {
    return 'cleancode.hu';
  }

  return `cleancode.hu - ${pagesJSON[pageId as PageId]}`;
};
