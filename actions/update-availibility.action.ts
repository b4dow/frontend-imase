"use server";

import { updateAvailibility } from "@/services/api";

export const ProductUpdateAvailibilityAction = async (id: string) => {
  await updateAvailibility(id);
};
