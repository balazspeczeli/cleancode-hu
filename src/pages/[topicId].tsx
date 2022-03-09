import type { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';
import {
  getTopicContent,
  getTopicsAvailable,
  getTopicTitle,
} from 'utils/topics';
import { CodeSnippet, Notification, PageHeader } from 'components/ui';

const components = {
  CodeSnippet,
  Notification,
};

type TopicPageProps = {
  topicId: string;
  title: string;
  content: string;
};

const TopicPage = ({ topicId, title, content }: TopicPageProps) => {
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
  const title = getTopicTitle(topicId);
  const content = await getTopicContent(topicId);

  return {
    props: {
      topicId,
      title,
      content,
    },
  };
};

export default TopicPage;
