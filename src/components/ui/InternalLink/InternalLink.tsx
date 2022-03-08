import Link from 'next/link';

type InternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className: string;
};

export const InternalLink = ({
  href,
  children,
  ...props
}: InternalLinkProps) => (
  <Link href={href}>
    <a {...props}>{children}</a>
  </Link>
);
