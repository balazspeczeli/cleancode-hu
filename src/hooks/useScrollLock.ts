import { useCallback } from 'react';

export const useScrollLock = () => {
  const lockScroll = useCallback(() => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.setProperty(
      '--scrollbar-compensation',
      `${scrollBarCompensation}px`
    );
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('--scrollbar-compensation');
  }, []);

  return {
    lockScroll,
    unlockScroll,
  };
};
