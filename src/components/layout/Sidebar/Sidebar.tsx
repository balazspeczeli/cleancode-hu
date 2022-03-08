import classNames from 'classnames';
import { ExternalLink, Icon, InternalLink } from 'components/ui';
import topics from 'content/topics.json';
import pages from 'content/pages.json';
import styles from './Sidebar.module.scss';

const sidebarTopics = topics.map((topic) => ({
  id: topic,
  text: pages[topic as keyof typeof pages],
}));

type PrimaryMenuProps = {
  currentPath: string;
};

const PrimaryMenu = ({ currentPath }: PrimaryMenuProps) => (
  <ul className={styles['primary-menu']}>
    <li>
      <InternalLink
        href="/"
        className={classNames({
          [styles.active]: '/' === currentPath,
        })}
      >
        <Icon name="home" />
        Főoldal
      </InternalLink>
    </li>
    {sidebarTopics.map(({ id, text }) => (
      <li key={id}>
        <InternalLink
          href={'/' + id}
          className={classNames({
            [styles.active]: '/' + id === currentPath,
          })}
        >
          <Icon name={id} />
          {text}
        </InternalLink>
      </li>
    ))}
  </ul>
);

const SecondaryMenu = () => (
  <ul className={styles['secondary-menu']}>
    <li>
      <ExternalLink href="https://github.com/balazspeczeli/cleancode-hu">
        <Icon name="github" />
        GitHub
      </ExternalLink>
    </li>
  </ul>
);

type SidebarProps = {
  currentPath: string;
};

export const Sidebar = ({ currentPath }: SidebarProps) => {
  return (
    <aside className={styles.component}>
      <div className={styles.title}>cleancode.hu</div>
      <PrimaryMenu currentPath={currentPath} />
      <SecondaryMenu />
    </aside>
  );
};
