import { Content } from "./Content";

interface Props {
  description: string;
}

export function TabsProduct({ description }: Props) {
  return (
    <div className="flex flex-col mx-auto w-full items-start justify-start mb-40">
      <Content description={description} />
    </div>
  );
}
