import styles from './Link.module.scss';

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <a href={href} target="_blank" rel="noreferrer" className={styles.component}>
    {children}
  </a>
);
