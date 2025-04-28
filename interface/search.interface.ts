import { z } from "zod";
import { SearchSchema } from "@/schema";

export type SearchT = z.infer<typeof SearchSchema>;
