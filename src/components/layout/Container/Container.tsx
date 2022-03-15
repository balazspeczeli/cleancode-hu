import styles from './Container.module.scss';

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <div className={styles.component}>{children}</div>;
};
