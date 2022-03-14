import { useStore } from 'hooks/useStore';
import { Icon } from 'components/ui';
import { InternalLink } from './Link';
import styles from './Menu.module.scss';
import { Sections } from './Sections';
import { buildTopicsList } from 'utils/page';

const topics = buildTopicsList();

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
