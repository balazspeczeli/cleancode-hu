import { useEffect, useState } from 'react';
import { PageSection } from 'types';
import classNames from 'classnames';
import { usePageSectionObserver } from 'hooks/usePageSectionObserver';
import { useStore } from 'hooks/useStore';
import styles from './Sections.module.scss';
import { setLocationHash } from 'utils/page';

type SectionsProps = {
  sections: PageSection[];
};

export const Sections = ({ sections }: SectionsProps) => {
  const [activeSectionId, setActiveSectionId] = useState<string>();
  const closeSidebar = useStore((state) => state.closeSidebar);

  usePageSectionObserver(setActiveSectionId);

  useEffect(() => {
    if (activeSectionId) {
      setLocationHash(activeSectionId);
    }
  }, [activeSectionId]);

  return (
    <div>
      {sections.map(({ id, text }) => (
        <div key={id} className={styles.section}>
          <a
            href={'#' + id}
            onClick={closeSidebar}
            className={classNames(styles.link, {
              [styles.active]: id === activeSectionId,
            })}
          >
            {text}
          </a>
        </div>
      ))}
    </div>
  );
};
