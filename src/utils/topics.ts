import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import rehypePrism from '@mapbox/rehype-prism';

const contentDirectory = path.join(process.cwd(), 'src', 'content');
const topicsDirectory = path.join(contentDirectory, 'topics');

export const getTopicsAvailable = () => {
  return fs
    .readdirSync(topicsDirectory)
    .map((filename) => path.parse(filename).name);
};

export const getTopicTitle = (topicId: string) => {
  const fullPath = path.join(contentDirectory, 'pages.json');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const pages = JSON.parse(fileContents);
  return pages[topicId];
};

export const getTopicContent = async (topicId: string) => {
  const fullPath = path.join(topicsDirectory, topicId + '.mdx');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content } = matter(fileContents);
  const { compiledSource } = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
  });
  return compiledSource;
};
