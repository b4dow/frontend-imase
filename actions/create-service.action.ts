"use server";

import { postService } from "@/services/api";
import { PostProps } from "@/types";

export const createServiceAction = async (formData: PostProps) => {
  const result = await postService(formData);
  return result;
};
