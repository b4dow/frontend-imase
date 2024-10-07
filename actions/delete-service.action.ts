"use server";
import { deleteService } from "@/services/api";

export const deleteServiceAction = async (id: string) => {
  const response = await deleteService(id);
  return response
};
