import Link from 'next/link';
import classNames from 'classnames';
import { useStore } from 'hooks/useStore';
import styles from './Link.module.scss';

const isLinkActive = (href: string, currentPageId: Nullable<string>) => {
  if (href === '/' && currentPageId === 'index') {
    return true;
  }

  return href.includes(currentPageId as string);
};

type InternalLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const InternalLink = ({ href, children }: InternalLinkProps) => {
  const currentPageId = useStore((state) => state.currentPageId);
  const closeSidebar = useStore((state) => state.closeSidebar);

  return (
    <Link href={href}>
      <a
        onClick={closeSidebar}
        className={classNames(styles.component, {
          [styles.active]: isLinkActive(href, currentPageId),
        })}
      >
        {children}
      </a>
    </Link>
  );
};
