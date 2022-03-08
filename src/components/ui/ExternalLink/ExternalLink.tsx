type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const ExternalLink = ({
  href,
  children,
  ...props
}: ExternalLinkProps) => (
  <a href={href} target="_blank" rel="noreferrer" {...props}>
    {children}
  </a>
);
