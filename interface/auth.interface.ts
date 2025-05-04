import { z } from "zod";
import { SchemaLoginForm, CreateSchema, UpdateSchema } from "@/schema";

export type Login = z.infer<typeof SchemaLoginForm>;

export type CreateT = z.infer<typeof CreateSchema>;
export type UpdateT = z.infer<typeof UpdateSchema>;
