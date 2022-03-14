import { Theme } from 'types';
import { useStore } from 'hooks/useStore';
import { useTheme } from 'hooks/useTheme';
import { Icon } from 'components/ui';
import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const closeSidebar = useStore((state) => state.closeSidebar);

  const handleClick = () => {
    toggleTheme();
    closeSidebar();
  };

  return (
    <a onClick={handleClick} className={styles.component}>
      {theme === Theme.Dark && (
        <>
          <Icon name="theme-light" />
          Világos mód
        </>
      )}
      {theme === Theme.Light && (
        <>
          <Icon name="theme-dark" />
          Sötét mód
        </>
      )}
    </a>
  );
};
