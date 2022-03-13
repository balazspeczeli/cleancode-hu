import { useEffect, useState } from 'react';
import { useStore } from './useStore';
import { buildPageTitle } from 'utils/page';

export const usePageTitle = () => {
  const currentPageId = useStore((state) => state.currentPageId);
  const [pageTitle, setPageTitle] = useState(buildPageTitle(currentPageId));

  useEffect(() => {
    const newPageTitle = buildPageTitle(currentPageId);
    setPageTitle(newPageTitle);
  }, [setPageTitle, currentPageId]);

  return pageTitle;
};
