"use server";
import { deleteProduct } from "@/services/api";

export const deleteProductAction = async (id: string) => {
  const response = await deleteProduct(id);
  return response;
};
