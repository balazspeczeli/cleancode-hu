import meta from 'content/meta.json';
import pagesJSON from 'content/pages.json';
import topicsJSON from 'content/topics.json';

type PageId = keyof typeof pagesJSON;

export const getPageTitle = (pageId: string) => {
  return pagesJSON[pageId as PageId];
};

export const buildPageTitle = (pageId: string) => {
  if (pageId === 'index' || getPageTitle(pageId) === undefined) {
    return meta.title;
  }

  return `${meta.title} - ${getPageTitle(pageId)}`;
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
