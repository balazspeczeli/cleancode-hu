import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { buildPageTitle } from 'utils/page';

export const usePageTitle = () => {
  const { asPath } = useRouter();
  const [pageTitle, setPageTitle] = useState(buildPageTitle(asPath));

  useEffect(() => {
    const newPageTitle = buildPageTitle(asPath);
    setPageTitle(newPageTitle);
  }, [asPath, setPageTitle]);

  return pageTitle;
};
