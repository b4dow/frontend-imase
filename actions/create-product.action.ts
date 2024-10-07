"use server";

import { postProduct } from "@/services/api/";
import { PostProps } from "@/types";

export const createProductAction = async (data: PostProps) => {
  const response = await postProduct(data);
  return response;
};
