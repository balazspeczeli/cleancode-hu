import { useEffect } from 'react';
import type { GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { useStore } from 'hooks/useStore';
import { PageHeader } from 'components/ui';
import { getPageContent } from 'utils/content';

type ContributionPageProps = {
  title: string;
  content: string;
};

const ContributionPage = ({ title, content }: ContributionPageProps) => {
  const setCurrentPageId = useStore((state) => state.setCurrentPageId);

  useEffect(() => {
    setCurrentPageId('kozremukodes');
  }, [setCurrentPageId]);

  return (
    <>
      <PageHeader title={title} icon="people" />
      <MDXRemote compiledSource={content} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { content, title } = await getPageContent('kozremukodes');

  return {
    props: {
      title,
      content,
    },
  };
};

export default ContributionPage;
