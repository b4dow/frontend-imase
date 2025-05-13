import { MDXRemote } from "next-mdx-remote-client/rsc";
import { useMDXComponents } from "utils";

interface MardkDownDescription {
  description: string;
}

export default async function MardkDownDescription({
  description,
}: MardkDownDescription) {
  return <MDXRemote source={description} components={useMDXComponents({})} />;
}
