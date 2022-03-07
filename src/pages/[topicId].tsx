import type { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import {
  getTopicContent,
  getTopicsAvailable,
  getTopicTitle,
} from 'utils/topics';

type TopicPageProps = {
  title: string;
  content: string;
};

const TopicPage = ({ title, content }: TopicPageProps) => {
  return (
    <>
      <h1>{title}</h1>
      {content}
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
  const content = getTopicContent(topicId);

  return {
    props: {
      title,
      content,
    },
  };
};

export default TopicPage;
