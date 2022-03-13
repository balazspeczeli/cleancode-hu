import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { useStore } from 'hooks/useStore';
import { Backdrop } from './Backdrop';
import { PrimaryMenu, SecondaryMenu } from './Menu';
import styles from './Sidebar.module.scss';
import { Title } from './Title';

export const Sidebar = () => {
  const sidebarRef = useRef<HTMLElement>(null);
  const sidebarElement = sidebarRef.current as HTMLElement;
  const isSidebarOpen = useStore((state) => state.isSidebarOpen);
  const closeSidebar = useStore((state) => state.closeSidebar);

  useEffect(() => {
    if (isSidebarOpen) {
      disableBodyScroll(sidebarElement);
    } else {
      enableBodyScroll(sidebarElement);
    }
  }, [sidebarElement, isSidebarOpen]);

  return (
    <aside
      className={classNames(styles.component, {
        [styles.open]: isSidebarOpen,
      })}
      ref={sidebarRef}
    >
      <Backdrop isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <Title />
      <PrimaryMenu />
      <SecondaryMenu />
    </aside>
  );
};
