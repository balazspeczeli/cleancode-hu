import slugify from 'slugify';
import { PageSection } from 'types';
import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { rehypeSlug } from '../vendor/rehype-slug';
import rehypePrism from '@mapbox/rehype-prism';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getPageTitle } from './page';

const contentDirectory = path.join(process.cwd(), 'src', 'content');
const topicsDirectory = path.join(contentDirectory, 'topics');

export const getTopicsAvailable = () => {
  return fs
    .readdirSync(topicsDirectory)
    .map((filename) => path.parse(filename).name);
};

const extractpageSections = (pageContents: string) => {
  const pageSections: PageSection[] = [];

  pageContents.split('\n').forEach((line) => {
    if (line.startsWith('## ')) {
      const text = line.split('## ')[1];
      const id = slugify(text);
      pageSections.push({ text, id });
    }
  });

  return pageSections;
};

export const getTopic = async (topicId: string) => {
  const fullPath = path.join(topicsDirectory, topicId + '.mdx');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const title = getPageTitle(topicId);
  const sections = extractpageSections(fileContents);
  const { compiledSource } = await serialize(fileContents, {
    mdxOptions: {
      rehypePlugins: [
        rehypePrism,
        rehypeSlug,
        [rehypeAutolinkHeadings, { test: ['h2'], behavior: 'append' }],
      ],
    },
  });

  return { content: compiledSource, title, sections };
};

export const getPageContent = async (pageId: string) => {
  const fullPath = path.join(contentDirectory, pageId + '.mdx');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const title = getPageTitle(pageId);
  const { compiledSource } = await serialize(fileContents);
  return { content: compiledSource, title };
};
