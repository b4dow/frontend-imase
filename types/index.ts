import { LoginSchema } from "@/schema";
import { z } from "zod";

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

export type LoginT = z.infer<typeof LoginSchema>;
