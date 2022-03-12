import { useCallback } from 'react';
import classNames from 'classnames';
import { PrimaryMenu, SecondaryMenu } from './Menu';
import { Backdrop } from './Backdrop';
import styles from './Sidebar.module.scss';
import { useAppContext } from 'context/state';
import { Title } from './Title';

export const Sidebar = () => {
  const { context, setContext } = useAppContext();

  const closeSidebar = useCallback(() => {
    setContext({ ...context, isSidebarOpen: false });
  }, [context, setContext]);

  return (
    <aside
      className={classNames(styles.component, {
        [styles.open]: context.isSidebarOpen,
      })}
    >
      <Backdrop
        isSidebarOpen={context.isSidebarOpen}
        closeSidebar={closeSidebar}
      />
      <Title />
      <PrimaryMenu />
      <SecondaryMenu />
    </aside>
  );
};
