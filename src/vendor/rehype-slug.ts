/*
A slightly modified version of https://github.com/rehypejs/rehype-slug.

The original uses github-slugger to generate the ids and keeps
the Hungarian characters with diacritic marks (ie. á, é, í, etc.)

This one uses slugify (which replaces the aforementioned characters
with their English counterparts). Furthermore, this adds ids to
h2 headings only.

*/
import { hasProperty } from 'hast-util-has-property';
import { headingRank } from 'hast-util-heading-rank';
import { toString } from 'hast-util-to-string';
import slugify from 'slugify';
import { visit } from 'unist-util-visit';

export const rehypeSlug = () => {
  // eslint-disable-next-line
  return (tree: any) => {
    visit(tree, 'element', (node) => {
      if (
        headingRank(node) === 2 &&
        node.properties &&
        !hasProperty(node, 'id')
      ) {
        node.properties.id = slugify(toString(node));
      }
    });
  };
};
