import { PageSection } from 'types';
import { useStore } from 'hooks/useStore';
import styles from './Sections.module.scss';

type SectionsProps = {
  sections: PageSection[];
};

export const Sections = ({ sections }: SectionsProps) => {
  const closeSidebar = useStore((state) => state.closeSidebar);

  return (
    <div>
      {sections.map(({ id, text }) => (
        <div key={id} className={styles.section}>
          <a href={'#' + id} onClick={closeSidebar} className={styles.link}>
            {text}
          </a>
        </div>
      ))}
    </div>
  );
};
