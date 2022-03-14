import { Theme } from 'types';

export function getUserSetPreference() {
  const theme = localStorage.getItem('theme');

  if (theme === 'null') {
    return null;
  }

  return theme as Theme;
}

export function saveUserSetPreference(theme: Theme) {
  window.localStorage.setItem('theme', theme);
}

export function getSystemPreference() {
  const mediaQuery = '(prefers-color-scheme: dark)';
  const mediaQueryList = window.matchMedia(mediaQuery);

  if (mediaQueryList.matches) {
    return Theme.Dark;
  }

  return null;
}

export function getPreference() {
  const userSetPreference = getUserSetPreference();
  if (userSetPreference !== null) {
    return userSetPreference;
  }

  const systemPreference = getSystemPreference();
  if (systemPreference !== null) {
    return systemPreference;
  }

  return Theme.Light;
}

export function setThemeOnUI(theme: Theme) {
  document.body.dataset.theme = theme;
}
