import { useEffect, useState } from 'react';
import { Theme } from 'types';
import {
  getPreference,
  saveUserSetPreference,
  setThemeOnUI,
} from 'utils/theme';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getPreference());

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
