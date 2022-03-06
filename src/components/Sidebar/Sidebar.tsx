import Link from 'next/link';
import classNames from 'classnames';
import styles from './Sidebar.module.scss';

import HomeIcon from '../../assets/icons/home.svg';
import GitHubIcon from '../../assets/icons/github.svg';

type Link = {
  text: string;
  icon: JSX.Element;
  href: string;
};

type InternalLinkProps = Link & {
  currentPath: string;
};

const InternalLink = ({ text, icon, href, currentPath }: InternalLinkProps) => (
  <Link href={href}>
    <a
      className={classNames({
        [styles.active]: href === currentPath,
      })}
    >
      {icon}
      {text}
    </a>
  </Link>
);

type ExternalLinkProps = Link;

const ExternalLink = ({ text, icon, href }: ExternalLinkProps) => (
  <a href={href} target="_blank" rel="noreferrer">
    {icon}
    {text}
  </a>
);

interface SidebarProps {
  currentPath: string;
}

export const Sidebar = ({ currentPath }: SidebarProps) => {
  return (
    <aside className={styles.component}>
      <div className={styles.title}>cleancode.hu</div>
      <ul className={styles['primary-menu']}>
        <li>
          <InternalLink
            text="Főoldal"
            icon={<HomeIcon />}
            href="/"
            currentPath={currentPath}
          />
        </li>
      </ul>
      <ul className={styles['secondary-menu']}>
        <li>
          <ExternalLink
            text="GitHub"
            icon={<GitHubIcon />}
            href="https://github.com/balazspeczeli/cleancode-hu"
          />
        </li>
      </ul>
    </aside>
  );
};
