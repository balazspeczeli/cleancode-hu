import { useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useAppContext } from 'context/state';
import styles from './Link.module.scss';

type InternalLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const InternalLink = ({ href, children }: InternalLinkProps) => {
  const { asPath } = useRouter();
  const { context, setContext } = useAppContext();

  const closeSidebar = useCallback(() => {
    setContext({ ...context, isSidebarOpen: false });
  }, [context, setContext]);

  return (
    <Link href={href}>
      <a
        onClick={closeSidebar}
        className={classNames(styles.component, {
          [styles.active]: href === asPath,
        })}
      >
        {children}
      </a>
    </Link>
  );
};
