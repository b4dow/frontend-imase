"use server";

import { updateAvailibility } from "@/services/api";
import { revalidatePath } from "next/cache";

export const productupdateAvailibilityAction = async () => {
  const formData = new FormData();
  const id = formData.get("id") as string;
  await updateAvailibility(id);
  revalidatePath("/dashboard/productos");
};
