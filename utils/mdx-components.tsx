import type { MDXComponents } from "mdx/types";
import { ComponentPropsWithoutRef } from "react";

type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props: ParagraphProps) => (
      <h1 className="prose prose-2xl" {...props} />
    ),
    p: (props: ParagraphProps) => <p className="prose prose-lg" {...props} />,
    ul: (props: ListProps) => <ul className="list-disc prose" {...props} />,
    li: (props: ListItemProps) => <li className="pl-1" {...props} />,
    ...components,
  };
}
