import classNames from 'classnames';
import styles from './Backdrop.module.scss';

type BackdropProps = {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
};

export const Backdrop = ({ isSidebarOpen, closeSidebar }: BackdropProps) => {
  return (
    <div
      className={classNames(styles.component, {
        [styles.visible]: isSidebarOpen,
      })}
      onClick={closeSidebar}
    />
  );
};
