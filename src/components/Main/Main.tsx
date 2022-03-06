import styles from './Main.module.scss';

interface MainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return <main className={styles.component}>{children}</main>;
};
