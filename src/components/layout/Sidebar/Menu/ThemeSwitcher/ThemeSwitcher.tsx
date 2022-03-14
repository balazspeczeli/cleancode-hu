import { Theme } from 'types';
import { useTheme } from 'hooks/useTheme';
import { Icon } from 'components/ui';
import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <a onClick={toggleTheme} className={styles.component}>
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
