"use server";

import { createClient } from "@/utils/supabase/server";

interface Props {
  page?: number;
  take?: number;
}

export const GetServices = async ({ page = 1, take = 9 }: Props) => {
  const supabase = await createClient();

  const from = (page - 1) * take;
  const to = from + take - 1;
  console.log({ to });

  const { data: services } = await supabase
    .from("services")
    .select("*")
    .range(from, to);

  const { count: totalCount } = await supabase
    .from("services")
    .select("*", { count: "exact", head: true });

  if (!services) {
    throw new Error("No existen servicios");
  }

  if (!totalCount) {
    throw new Error("No existen servicios");
  }

  const totalPages = Math.ceil(totalCount / take);

  return {
    services,
    totalPages,
  };
};
