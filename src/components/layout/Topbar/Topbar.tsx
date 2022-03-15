import Link from 'next/link';
import MenuIcon from 'assets/icons/menu.svg';
import { useStore } from 'hooks/useStore';
import styles from './Topbar.module.scss';

export const Topbar = () => {
  const toggleSidebar = useStore((state) => state.toggleSidebar);
  const closeSidebar = useStore((state) => state.closeSidebar);

  return (
    <div className={styles.component}>
      <MenuIcon onClick={toggleSidebar} className={styles.menu} />
      <div className={styles.title} onClick={closeSidebar}>
        <Link href="/">cleancode.hu</Link>
      </div>
    </div>
  );
};
