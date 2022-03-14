import { ParsedUrlQuery } from 'querystring';
import { useEffect } from 'react';
import { PageSection } from 'types';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { useStore } from 'hooks/useStore';
import { CodeSnippet, Note, PageHeader, Separator } from 'components/ui';
import { getTopic, getTopicsAvailable } from 'utils/topic';

const components = {
  CodeSnippet,
  Note,
  Separator,
};

type TopicPageProps = {
  topicId: string;
  title: string;
  content: string;
  sections: PageSection[];
};

const TopicPage = ({ topicId, title, content, sections }: TopicPageProps) => {
  const setCurrentPageId = useStore((state) => state.setCurrentPageId);
  const setPageSections = useStore((state) => state.setPageSections);

  useEffect(() => {
    setCurrentPageId(topicId);
  }, [setCurrentPageId, topicId]);

  useEffect(() => {
    setPageSections(sections);
  }, [setPageSections, sections]);

  return (
    <>
      <PageHeader title={title} icon={topicId} />
      <MDXRemote compiledSource={content} components={components} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const topicsAvailable = getTopicsAvailable();
  const paths = topicsAvailable.map((topicId) => ({
    params: { topicId },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  topicId: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { topicId } = context.params as IParams;
  const { content, title, sections } = await getTopic(topicId);

  return {
    props: {
      topicId,
      title,
      content,
      sections,
    },
  };
};

export default TopicPage;
