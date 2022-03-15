import { useEffect } from 'react';
import { useStore } from './useStore';

export const useCurrentPageId = (pageId: string) => {
  const setCurrentPageId = useStore((state) => state.setCurrentPageId);

  useEffect(() => {
    setCurrentPageId(pageId);
  }, [setCurrentPageId, pageId]);
};
