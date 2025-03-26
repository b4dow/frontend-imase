"use server";
import { revalidatePath } from "next/cache";

import { productUpdateAvailibilityService } from "@/services/api";

export const ProductUpdateAvailibilityAction = async (id: string) => {
  await productUpdateAvailibilityService(id);
  revalidatePath("/dashboard/productos");
};
