import Link from 'next/link';
import { useStore } from 'hooks/useStore';
import { MenuIcon } from './MenuIcon';
import styles from './Topbar.module.scss';

export const Topbar = () => {
  const toggleSidebar = useStore((state) => state.toggleSidebar);
  const closeSidebar = useStore((state) => state.closeSidebar);

  return (
    <div className={styles.component}>
      <MenuIcon onClick={toggleSidebar} />
      <div className={styles.title} onClick={closeSidebar}>
        <Link href="/">cleancode.hu</Link>
      </div>
    </div>
  );
};
