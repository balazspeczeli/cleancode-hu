import { InternalLink } from '../Link';
import { Icon } from 'components/ui';
import styles from './Menu.module.scss';
import topicsJSON from 'content/topics.json';
import pages from 'content/pages.json';

const topics = topicsJSON.map((topic) => ({
  id: topic,
  text: pages[topic as keyof typeof pages],
}));

export const PrimaryMenu = () => (
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
      </li>
    ))}
  </ul>
);
