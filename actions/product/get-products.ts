"use server";

import { createClient } from "@/utils/supabase/server";

interface GetProductsProps {
  page?: number;
  take?: number;
}

export const GetProducts = async ({ page = 1, take = 8 }: GetProductsProps) => {
  try {
    const supabase = await createClient();

    const from = (page - 1) * take;
    const to = from + take - 1;

    const { error, data: products } = await supabase
      .from("products")
      .select("*")
      .range(from, to);

    if (error) {
      return { ok: false, message: "Error en la database" };
    }

    const { count: totalCount } = await supabase
      .from("products")
      .select("*", { count: "exact", head: true })
      .range(from, to);

    if (!totalCount) {
      return {
        ok: false,
        message: "No existen servicios",
      };
    }

    const totalPages = Math.ceil(totalCount / take);

    return {
      products,
      totalPages,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Hubo un error al mostrar los productos",
    };
  }
};
