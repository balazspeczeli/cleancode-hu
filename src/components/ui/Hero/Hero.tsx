import Illustration from 'assets/illustration.svg';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <div className={styles.component}>
      <div className={styles.words}>
        <h1 className={styles.title}>Üdv a cleancode.hu-n!</h1>
        <div>Útmutató az olvasható és karbantartható kód írásához</div>
      </div>
      <Illustration className={styles.illustration} />
    </div>
  );
};
