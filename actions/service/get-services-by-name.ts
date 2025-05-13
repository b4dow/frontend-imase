"use server";

import { createClient } from "@/utils/supabase/server";

interface Props {
  search?: string;
  page?: number;
  take?: number;
}

export const GetServicesByName = async ({
  search,
  page = 1,
  take = 8,
}: Props) => {
  try {
    const supabase = await createClient();

    const from = (page - 1) * take;
    const to = from + take - 1;

    const { data: services } = await supabase
      .from("services")
      .select("*")
      .ilike("name", `%${search}%`)
      .range(from, to);

    const { count: totalCount } = await supabase
      .from("services")
      .select("*", { count: "exact", head: true })
      .ilike("name", `%${search}%`);

    if (!services) {
      return {
        ok: false,
        message: "No existen servicios",
      };
    }

    if (!totalCount) {
      return {
        ok: false,
        message: "No existen servicios",
      };
    }

    const totalPages = Math.ceil(totalCount / take);

    return {
      services,
      totalPages,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Hubo un error al mostrar los servicios",
    };
  }
};
