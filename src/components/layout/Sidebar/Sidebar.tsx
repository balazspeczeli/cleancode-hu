import { useEffect } from 'react';
import classNames from 'classnames';
import { useScrollLock } from 'hooks/useScrollLock';
import { useStore } from 'hooks/useStore';
import { Backdrop } from './Backdrop';
import { PrimaryMenu, SecondaryMenu } from './Menu';
import styles from './Sidebar.module.scss';
import { Title } from './Title';

export const Sidebar = () => {
  const isSidebarOpen = useStore((state) => state.isSidebarOpen);
  const closeSidebar = useStore((state) => state.closeSidebar);
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (isSidebarOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [isSidebarOpen, lockScroll, unlockScroll]);

  return (
    <aside
      className={classNames(styles.component, {
        [styles.open]: isSidebarOpen,
      })}
    >
      <Backdrop isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <Title />
      <PrimaryMenu />
      <SecondaryMenu />
    </aside>
  );
};
