import { TopicLink } from './TopicLink';
import styles from './TopicsList.module.scss';
import { buildTopicsList } from 'utils/page';

const topics = buildTopicsList();

export const TopicsList = () => {
  return (
    <div className={styles.component}>
      {topics.map(({ id, text }) => (
        <TopicLink key={id} text={text} id={id} />
      ))}
    </div>
  );
};
