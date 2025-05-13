import { SchemaNewProductForm } from "@/schema";
import { z } from "zod";

export interface Product {
  id: string;
  name: string;
  descriptionShort: string;
  description: string;
  imageUrl: string;
  slug: string;
  public_id: string;
  quantity?: number;
  url: string;
  available: boolean;
}

export type NewProduct = z.infer<typeof SchemaNewProductForm> & {
  imageUrl: FileList;
};

export type EditProduct = z.infer<typeof SchemaNewProductForm> & {
  imageUrl: FileList;
};
