import { useAppContext } from 'context/state';
import Link from 'next/link';
import { useCallback } from 'react';

type InternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className: string;
};

export const InternalLink = ({
  href,
  children,
  ...props
}: InternalLinkProps) => {
  const { context, setContext } = useAppContext();

  const closeSidebar = useCallback(() => {
    setContext({ ...context, isSidebarOpen: false });
  }, [context, setContext]);

  return (
    <Link href={href}>
      <a onClick={closeSidebar} {...props}>
        {children}
      </a>
    </Link>
  );
};
