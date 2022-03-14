import { useEffect } from 'react';

export const usePageSectionObserver = (
  callback: (sectionId: string) => void
) => {
  useEffect(() => {
    const observerCallback = (observerEntries: IntersectionObserverEntry[]) => {
      for (const entry of observerEntries) {
        if (entry.isIntersecting) {
          const newActiveSectionId = entry.target.id;
          callback(newActiveSectionId);
          break;
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '0px 0px -50% 0px',
    });

    const headingElements = document.querySelectorAll('main > h2');
    headingElements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [callback]);
};
