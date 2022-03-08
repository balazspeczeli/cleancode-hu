import styles from './UnderDevelopment.module.scss';
import Illustration from 'assets/illustration.svg';

export const UnderDevelopment = () => {
  return (
    <div className={styles.component}>
      <Illustration className={styles.illustration} />
      <div className={styles.title}>Fejlesztés alatt</div>
    </div>
  );
};
