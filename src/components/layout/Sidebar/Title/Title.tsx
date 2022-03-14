import Link from 'next/link';
import styles from './Title.module.scss';

export const Title = () => {
  return (
    <div className={styles.component}>
      <Link href="/">cleancode.hu</Link>
    </div>
  );
};
