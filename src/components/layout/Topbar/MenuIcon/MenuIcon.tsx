import styles from './MenuIcon.module.scss';

type MenuIconProps = {
  onClick: () => void;
};

export const MenuIcon = ({ onClick }: MenuIconProps) => {
  return (
    <div className={styles.component} onClick={onClick}>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  );
};
