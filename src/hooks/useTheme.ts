import { useEffect, useState } from 'react';
import { Theme } from 'types';
import {
  getUserSetPreference,
  saveUserSetPreference,
  setThemeOnUI,
} from 'utils/theme';

export const defaultTheme = Theme.Light;

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(
    getUserSetPreference() || defaultTheme
  );

  useEffect(() => {
    saveUserSetPreference(theme);
    setThemeOnUI(theme);
  }, [theme]);

  return {
    theme,
    toggleTheme: () =>
      setTheme((theme) => (theme === Theme.Light ? Theme.Dark : Theme.Light)),
  };
};
