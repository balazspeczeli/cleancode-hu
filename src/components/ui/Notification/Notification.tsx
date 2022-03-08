import styles from './Notification.module.scss';

type NotificationProps = {
  message: string;
};

export const Notification = ({ message }: NotificationProps) => {
  return <div className={styles.component}>{message}</div>;
};
