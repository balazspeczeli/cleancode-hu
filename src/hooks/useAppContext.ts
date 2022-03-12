import { useContext } from 'react';
import { AppContext } from 'context/state';

export const useAppContext = () => {
  return useContext(AppContext);
};
