"use server";

import { postService } from "@/services/api";
import { DataProps } from "@/types";

export const createServiceAction = async (formData: DataProps) => {
  const result = await postService(formData);
  return result;
};
