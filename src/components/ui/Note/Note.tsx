import styles from './Note.module.scss';

type NoteProps = {
  message: string;
};

export const Note = ({ message }: NoteProps) => {
  return <div className={styles.component}>{message}</div>;
};
