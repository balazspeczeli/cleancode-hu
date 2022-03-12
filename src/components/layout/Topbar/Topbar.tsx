import { useAppContext } from 'context/state';
import Link from 'next/link';
import styles from './Topbar.module.scss';
import { MenuIcon } from './MenuIcon';

export const Topbar = () => {
  const { context, setContext } = useAppContext();

  const toggleSidebar = () => {
    setContext({
      ...context,
      isSidebarOpen: !context.isSidebarOpen,
    });
  };

  return (
    <div className={styles.component}>
      <MenuIcon onClick={toggleSidebar} />
      <div className={styles.title}>
        <Link href="/">cleancode.hu</Link>
      </div>
    </div>
  );
};
