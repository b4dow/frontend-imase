export interface DataProps {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  available: boolean;
}

export type PostProps = Pick<
  DataProps,
  "name" | "description" | "image" | "url"
>;

export interface idParamsProps {
  params: {
    id: string;
  };
  modal: boolean;
}
