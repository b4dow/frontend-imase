import { z } from "zod";
import { LoginSchema, CreateSchema, UpdateSchema } from "@/schema";

export type LoginT = z.infer<typeof LoginSchema>;

export type CreateT = z.infer<typeof CreateSchema>;
export type UpdateT = z.infer<typeof UpdateSchema>;
