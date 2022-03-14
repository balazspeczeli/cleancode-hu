import { PageSection } from 'types';
import { useStore } from 'hooks/useStore';
import styles from './Sections.module.scss';

type SectionsProps = {
  sections: PageSection[];
};

export const Sections = ({ sections }: SectionsProps) => {
  const closeSidebar = useStore((state) => state.closeSidebar);

  const handleClick = (id: string) => {
    closeSidebar();
    document.querySelector(`#${id}`)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {sections.map(({ id, text }) => (
        <div key={id} className={styles.section}>
          <a
            href={'#' + id}
            onClick={() => handleClick(id)}
            className={styles.link}
          >
            {text}
          </a>
        </div>
      ))}
    </div>
  );
};
