import { useStore } from 'hooks/useStore';
import { Icon } from 'components/ui';
import pagesJSON from 'content/pages.json';
import topicsJSON from 'content/topics.json';
import { InternalLink } from '../Link';
import styles from './Menu.module.scss';
import { Sections } from './Sections';

const topics = topicsJSON.map((topic) => ({
  id: topic,
  text: pagesJSON[topic as keyof typeof pagesJSON],
}));

export const PrimaryMenu = () => {
  const currentPageId = useStore((state) => state.currentPageId);
  const pageSections = useStore((state) => state.pageSections);

  return (
    <ul className={styles.component}>
      <li>
        <InternalLink href="/">
          <Icon name="home" />
          Főoldal
        </InternalLink>
      </li>
      {topics.map(({ id, text }) => (
        <li key={id}>
          <InternalLink href={'/' + id}>
            <Icon name={id} />
            {text}
          </InternalLink>
          {id === currentPageId && <Sections sections={pageSections} />}
        </li>
      ))}
    </ul>
  );
};
