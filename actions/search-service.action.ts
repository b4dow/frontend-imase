"use server";
import { getServices } from "@/services/api";

export const SearchServiceAction = async (search: string) => {
  const { servicesCount } = await getServices({
    search,
    page: 1,
    pageSize: 6,
  });
  if (servicesCount === 0) {
    return {
      ok: false,
    };
  }
  return {
    ok: true,
  };
};
