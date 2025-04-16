import {
  CreateSchema,
  LoginSchema,
  UpdateSchema,
  SearchSchema,
} from "@/schema";
import { z } from "zod";

export interface DataProps {
  id: string;
  name: string;
  description: string;
  image: string;
  public_id: string;
  url: string;
  available: boolean;
}

export interface idParamsProps {
  params: {
    id: string;
  };
  modal: boolean;
}

export interface SubmitContactI {
  name: string;
  email: string;
  message: string;
}

export type LoginT = z.infer<typeof LoginSchema>;

export type CreateT = z.infer<typeof CreateSchema>;
export type UpdateT = z.infer<typeof UpdateSchema>;

export type SearchT = z.infer<typeof SearchSchema>;
