import { Icon } from '../Icon';
import styles from './PageHeader.module.scss';

type PageHeaderProps = {
  title: string;
  icon: string;
};

export const PageHeader = ({ title, icon }: PageHeaderProps) => {
  return (
    <div className={styles.component}>
      <h1 className={styles.title}>{title}</h1>
      <Icon name={icon} className={styles.icon} />
    </div>
  );
};
