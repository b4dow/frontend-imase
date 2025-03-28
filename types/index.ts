import { CreateSchema, LoginSchema } from "@/schema";
import { z } from "zod";

export interface DataProps {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  available: boolean;
}

export interface idParamsProps {
  params: {
    id: string;
  };
  modal: boolean;
}

export type LoginT = z.infer<typeof LoginSchema>;

export type CreateT = z.infer<typeof CreateSchema>;
