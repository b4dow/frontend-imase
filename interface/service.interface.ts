"use client";

import { SchemaNewServiceForm } from "@/schema";
import { z } from "zod";

export interface Service {
  id: string;
  name: string;
  descriptionShort: string;
  description: string;
  imageUrl: string;
  url: string;
  slug: string;
  available: boolean;
}

export type NewService = z.infer<typeof SchemaNewServiceForm> & {
  imageUrl: FileList;
};

export type EditService = z.infer<typeof SchemaNewServiceForm> & {
  imageUrl: FileList | undefined;
};
