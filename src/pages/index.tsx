import { useEffect } from 'react';
import type { NextPage } from 'next';
import { useStore } from 'hooks/useStore';
import { UnderDevelopment } from 'components/ui';

const IndexPage: NextPage = () => {
  const setCurrentPageId = useStore((state) => state.setCurrentPageId);

  useEffect(() => {
    setCurrentPageId(null);
  }, [setCurrentPageId]);

  return <UnderDevelopment />;
};

export default IndexPage;
