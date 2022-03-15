import meta from 'content/meta.json';
import pagesJSON from 'content/pages.json';
import topicsJSON from 'content/topics.json';

type PageId = keyof typeof pagesJSON;

export const getPageTitle = (pageId: string) => {
  return pagesJSON[pageId as PageId];
};

export const buildPageTitle = (pageId: string | null) => {
  const siteTitle = meta.title;

  if (!pageId || pageId === 'index') {
    return siteTitle;
  }

  const pageTitle = getPageTitle(pageId);

  if (!pageTitle) {
    return siteTitle;
  }

  return `${siteTitle} - ${pageTitle}`;
};

export const setLocationHash = (hash: string) => {
  history.replaceState(null, '', '#' + hash);
};

export const buildTopicsList = () => {
  return topicsJSON.map((topic) => ({
    id: topic,
    text: getPageTitle(topic),
  }));
};
