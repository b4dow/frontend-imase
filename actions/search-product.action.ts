"use server";
import { getProducts } from "@/services/api";

export const searchProduct = async (search: string) => {
  const products = await getProducts({ search, page: 1, pageSize: 6 });
  return products;
};
