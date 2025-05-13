import MarkdownDescription from "components/ui/markdown-description/MarkdwonDescription";

interface Props {
  description: string;
}

export const Content = ({ description }: Props) => {
  return <MarkdownDescription description={description} />;
};
