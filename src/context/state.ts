import { createContext } from 'react';

type State = {
  isSidebarOpen: boolean;
};

type AppContext = {
  context: State;
  setContext: (state: State) => void;
};

export const defaultState: State = {
  isSidebarOpen: false,
};

const defaultContext: AppContext = {
  context: defaultState,
  setContext: () => ({}),
};

export const AppContext = createContext<AppContext>(defaultContext);
