"use server";
import { getProducts } from "@/services/api";

export const SearchProductAction = async (search: string) => {
  const { productsCount } = await getProducts({ search, page: 1, pageSize: 6 });
  if (productsCount === 0) {
    return {
      ok: false,
    };
  }
  return {
    ok: true,
  };
};
