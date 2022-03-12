import Link from 'next/link';
import { useAppContext } from 'hooks/useAppContext';
import { MenuIcon } from './MenuIcon';
import styles from './Topbar.module.scss';

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
