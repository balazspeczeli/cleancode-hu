import type { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';
import {
  getTopicContent,
  getTopicsAvailable,
  getTopicTitle,
} from 'utils/topics';
import { CodeSnippet } from 'components/CodeSnippet';
import { Notification } from 'components/Notification';

const components = {
  CodeSnippet,
  Notification,
};

type TopicPageProps = {
  title: string;
  content: string;
};

const TopicPage = ({ title, content }: TopicPageProps) => {
  return (
    <>
      <h1>{title}</h1>
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
      title,
      content,
    },
  };
};

export default TopicPage;
