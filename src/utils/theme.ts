import { Theme } from 'types';

export function getUserSetPreference() {
  return localStorage.getItem('theme') as Theme;
}

export function saveUserSetPreference(theme: Theme) {
  window.localStorage.setItem('theme', theme);
}

export function setThemeOnUI(theme: Theme) {
  document.body.dataset.theme = theme;
}
