import type { GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { useCurrentPageId } from 'hooks/useCurrentPageId';
import { PageHeader } from 'components/ui';
import { getPageContent } from 'utils/content';

type ContributionPageProps = {
  title: string;
  content: string;
};

const ContributionPage = ({ title, content }: ContributionPageProps) => {
  useCurrentPageId('kozremukodes');

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
