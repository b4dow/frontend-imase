"use server";
import { revalidatePath } from "next/cache";

import { serviceUpdateAvailabilityService } from "@/services/api";

export const ServiceUpdateAvailibilityAction = async (id: string) => {
  await serviceUpdateAvailabilityService(id);
  revalidatePath("/dashboard/productos");
};
