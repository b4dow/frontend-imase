import Link from "next/link";

type PaginationLinkProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof Link>;

export const PaginationLink = ({ children, href }: PaginationLinkProps) => (
  <Link href={href}>{children}</Link>
);
