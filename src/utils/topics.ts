import fs from 'fs';
import path from 'path';

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

export const getTopicContent = (topicId: string) => {
  const fullPath = path.join(topicsDirectory, topicId + '.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return fileContents;
};
