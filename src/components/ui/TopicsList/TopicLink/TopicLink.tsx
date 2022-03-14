import Link from 'next/link';
import { Icon } from 'components/ui/Icon';
import styles from './TopicLink.module.scss';

type TopicLinkProps = {
  id: string;
  text: string;
};

export const TopicLink = ({ id, text }: TopicLinkProps) => {
  return (
    <Link href={id}>
      <a className={styles.component}>
        <Icon name={id} />
        {text}
      </a>
    </Link>
  );
};
