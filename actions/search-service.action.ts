"use server";
import { getServices } from "@/services/api";

export const SearchService = async (search: string) => {
  const services = await getServices({ search, page: 1, pageSize: 6 });
  return services;
};
