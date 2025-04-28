import { ReactNode } from "react";
import Link from "next/link";

type PaginationLinkProps = {
  children: ReactNode;
} & React.ComponentProps<typeof Link>;

export const PaginationLink = ({ children, href }: PaginationLinkProps) => (
  <Link href={href}>{children}</Link>
);
