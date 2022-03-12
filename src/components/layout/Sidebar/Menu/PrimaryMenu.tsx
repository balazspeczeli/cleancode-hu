import { Icon } from 'components/ui';
import pagesJSON from 'content/pages.json';
import topicsJSON from 'content/topics.json';
import { InternalLink } from '../Link';
import styles from './Menu.module.scss';

const topics = topicsJSON.map((topic) => ({
  id: topic,
  text: pagesJSON[topic as keyof typeof pagesJSON],
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
